# -*- coding: utf-8 -*-
"""
PREDIKSI KIA PER KECAMATAN — EXPONENTIAL SMOOTHING (HOLT)
==========================================================
Jalankan di Google Colab setelah scraping selesai.
Output: prediksi_kia.json + data_kia.js (untuk web GIS)

Install:
    pip install statsmodels pandas openpyxl matplotlib seaborn
"""

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.ticker as mticker
import seaborn as sns
import json
import warnings
warnings.filterwarnings('ignore')

from statsmodels.tsa.holtwinters import ExponentialSmoothing

# ── 1. LOAD DATA ─────────────────────────────────────────────────────────────
try:
    df = pd.read_excel('data_kia_bojonegoro.xlsx', sheet_name='Data Lengkap')
    print("✅ Data dimuat dari Excel")
except FileNotFoundError:
    df = pd.read_csv('data_kia_bojonegoro.csv')
    print("✅ Data dimuat dari CSV")

df['tahun'] = df['tahun'].astype(int)
df['prosentase'] = pd.to_numeric(df['prosentase'], errors='coerce')
df['jml_anak_0_16'] = pd.to_numeric(df['jml_anak_0_16'], errors='coerce')
df['jml_anak_punya_kia'] = pd.to_numeric(df['jml_anak_punya_kia'], errors='coerce')

print(f"   Total baris: {len(df)} | Kecamatan: {df['kecamatan'].nunique()} | Tahun: {sorted(df['tahun'].unique())}")

HIST_YEARS   = [2021, 2022, 2023, 2024, 2025]
FUTURE_YEARS = [2026, 2027, 2028]
ALL_YEARS    = HIST_YEARS + FUTURE_YEARS
KECAMATAN    = sorted(df['kecamatan'].unique())

# ── 2. MODEL PREDIKSI PER KECAMATAN ─────────────────────────────────────────
print("\n🔮 Membangun model prediksi per kecamatan...")
print(f"   Metode: Exponential Smoothing dengan Tren Aditif (Holt)")
print(f"   Prediksi: {FUTURE_YEARS}\n")

hasil_prediksi = []
data_kia_js   = {}   # untuk export ke JS
data_detail_js = {}  # untuk export ke JS (anak, kia, pct per tahun)

for kec in KECAMATAN:
    sub = df[df['kecamatan'] == kec].sort_values('tahun')
    y   = sub['prosentase'].dropna().values.astype(float)

    if len(y) < 3:
        print(f"   ⚠️  {kec}: data kurang ({len(y)} titik), skip")
        continue

    # ── Fit model ──
    try:
        model = ExponentialSmoothing(
            y,
            trend='add',
            seasonal=None,
            initialization_method='estimated'
        )
        fit    = model.fit(optimized=True)
        pred   = np.clip(fit.forecast(len(FUTURE_YEARS)), 0, 100)
        alpha  = round(float(fit.params.get('smoothing_level', 0)), 3)
        beta   = round(float(fit.params.get('smoothing_trend',  0)), 3)
        metode = 'Holt Exponential Smoothing'
    except Exception as e:
        # fallback: linear trend
        x      = np.arange(len(y))
        coeffs = np.polyfit(x, y, 1)
        pred   = np.array([
            min(100, max(0, coeffs[0] * (len(y) + i) + coeffs[1]))
            for i in range(len(FUTURE_YEARS))
        ])
        alpha, beta = None, None
        metode = 'Linear Trend (fallback)'
        print(f"   ⚠️  {kec}: fallback ke linear ({e})")

    # ── Simpan hasil ──
    kec_up = kec.upper()
    data_kia_js[kec_up]    = {}
    data_detail_js[kec_up] = {}

    for yr, val in zip(HIST_YEARS, y):
        data_kia_js[kec_up][str(yr)] = round(float(val), 2)

    for yr, val in zip(FUTURE_YEARS, pred):
        data_kia_js[kec_up][str(yr)] = round(float(val), 2)

    # detail (anak + kia + pct)
    for _, row in sub.iterrows():
        yr_str = str(int(row['tahun']))
        data_detail_js[kec_up][yr_str] = {
            'anak': int(row['jml_anak_0_16'])      if pd.notna(row['jml_anak_0_16'])      else 0,
            'kia' : int(row['jml_anak_punya_kia']) if pd.notna(row['jml_anak_punya_kia']) else 0,
            'pct' : round(float(row['prosentase']), 2) if pd.notna(row['prosentase'])      else 0,
        }

    # tabel hasil
    for yr, val in zip(FUTURE_YEARS, pred):
        hasil_prediksi.append({
            'kecamatan' : kec,
            'tahun'     : yr,
            'prediksi_pct': round(float(val), 2),
            'metode'    : metode,
            'alpha'     : alpha,
            'beta'      : beta,
        })

    status = '✅' if metode.startswith('Holt') else '⚠️ '
    print(f"   {status} {kec:<16} | α={alpha} β={beta} | "
          f"2026:{round(pred[0],1)}% 2027:{round(pred[1],1)}% 2028:{round(pred[2],1)}%")

df_pred = pd.DataFrame(hasil_prediksi)
print(f"\n✅ Model selesai: {len(KECAMATAN)} kecamatan")

# ── 3. VISUALISASI ───────────────────────────────────────────────────────────
print("\n📊 Membuat visualisasi...")

# 3a. Grid plot semua kecamatan
fig, axes = plt.subplots(7, 4, figsize=(20, 24))
axes = axes.flatten()
fig.suptitle('Tren & Prediksi Cakupan KIA per Kecamatan\nKabupaten Bojonegoro 2021–2028',
             fontsize=16, fontweight='bold', y=1.01)

for i, kec in enumerate(KECAMATAN):
    ax  = axes[i]
    sub = df[df['kecamatan'] == kec].sort_values('tahun')
    kec_up = kec.upper()

    y_hist = [data_kia_js[kec_up].get(str(yr), None) for yr in HIST_YEARS]
    y_pred = [data_kia_js[kec_up].get(str(yr), None) for yr in FUTURE_YEARS]

    ax.plot(HIST_YEARS, y_hist, 'o-',  color='#1B4F72', linewidth=2, markersize=4, label='Historis')
    ax.plot(FUTURE_YEARS, y_pred, 's--', color='#7D3C98', linewidth=2, markersize=4, label='Prediksi')
    ax.axvline(x=2025.5, color='gray', linestyle=':', linewidth=1, alpha=0.5)

    ax.set_title(kec, fontsize=9, fontweight='bold', pad=4)
    ax.set_ylim(0, 105)
    ax.yaxis.set_major_formatter(mticker.FormatStrFormatter('%.0f%%'))
    ax.tick_params(axis='both', labelsize=7)
    ax.grid(True, alpha=0.3)
    ax.set_xticks(ALL_YEARS)
    ax.set_xticklabels([str(y)[-2:] for y in ALL_YEARS], fontsize=6)

    # shading prediksi
    ax.axvspan(2025.5, 2028.5, alpha=0.05, color='#7D3C98')

# Sembunyikan axis kosong
for j in range(len(KECAMATAN), len(axes)):
    axes[j].set_visible(False)

handles, labels = axes[0].get_legend_handles_labels()
fig.legend(handles, labels, loc='lower right', fontsize=10, bbox_to_anchor=(0.98, 0.01))
plt.tight_layout()
plt.savefig('prediksi_per_kecamatan.png', dpi=150, bbox_inches='tight')
plt.show()
print("   ✅ Grafik grid tersimpan: prediksi_per_kecamatan.png")

# 3b. Heatmap cakupan 2021-2028
df_heat = pd.DataFrame(data_kia_js).T
df_heat.columns = df_heat.columns.astype(str)
df_heat = df_heat[[str(y) for y in ALL_YEARS]].astype(float)

fig, ax = plt.subplots(figsize=(14, 10))
mask_pred = np.zeros_like(df_heat, dtype=bool)
mask_pred[:, 5:] = False  # tampilkan semua

sns.heatmap(
    df_heat,
    annot=True, fmt='.1f', cmap='RdYlGn',
    vmin=0, vmax=100, linewidths=0.5,
    ax=ax, annot_kws={'size': 8}
)

# Garis pemisah historis vs prediksi
ax.axvline(x=5, color='#7D3C98', linewidth=2.5, linestyle='--')
ax.text(5.1, -0.5, '← Historis | Prediksi →', color='#7D3C98', fontsize=9, va='top')

ax.set_title('Heatmap Cakupan KIA per Kecamatan 2021–2028 (%)\nKabupaten Bojonegoro',
             fontsize=14, fontweight='bold', pad=15)
ax.set_xlabel('Tahun', fontsize=11)
ax.set_ylabel('Kecamatan', fontsize=11)
plt.tight_layout()
plt.savefig('heatmap_kia_prediksi.png', dpi=150, bbox_inches='tight')
plt.show()
print("   ✅ Heatmap tersimpan: heatmap_kia_prediksi.png")

# ── 4. EXPORT OUTPUT ─────────────────────────────────────────────────────────
print("\n💾 Menyimpan output...")

# Excel
with pd.ExcelWriter('prediksi_kia_per_kecamatan.xlsx', engine='openpyxl') as writer:
    df_pred.to_excel(writer, sheet_name='Prediksi', index=False)
    df_heat.to_excel(writer, sheet_name='Pivot Semua Tahun')

    # Ringkasan: kecamatan yang perlu prioritas
    latest = df[df['tahun'] == 2025][['kecamatan', 'jml_anak_0_16', 'jml_anak_punya_kia', 'prosentase']].copy()
    latest['gap'] = latest['jml_anak_0_16'] - latest['jml_anak_punya_kia']
    pred_2026 = df_pred[df_pred['tahun'] == 2026][['kecamatan', 'prediksi_pct']].rename(columns={'prediksi_pct': 'prediksi_2026'})
    ringkasan = latest.merge(pred_2026, on='kecamatan').sort_values('prosentase')
    ringkasan.to_excel(writer, sheet_name='Prioritas Kampanye', index=False)

print("   ✅ prediksi_kia_per_kecamatan.xlsx")

# JSON
with open('prediksi_kia.json', 'w') as f:
    json.dump({'data_kia': data_kia_js, 'data_detail': data_detail_js}, f)
print("   ✅ prediksi_kia.json")

# JS untuk web GIS
js_out = f"""// Auto-generated oleh prediksi_kia_per_kecamatan.py
// Model: Holt Exponential Smoothing per kecamatan
// Data historis: 2021-2025 | Prediksi: 2026-2028
// Jangan edit manual — regenerate dari script Python

const DATA_KIA = {json.dumps(data_kia_js, indent=2, ensure_ascii=False)};

const DATA_DETAIL = {json.dumps(data_detail_js, indent=2, ensure_ascii=False)};

const FORECAST_YEARS = ['2026','2027','2028'];
const HIST_YEARS = ['2021','2022','2023','2024','2025'];
const ALL_YEARS = [...HIST_YEARS, ...FORECAST_YEARS];
"""

with open('data_kia.js', 'w', encoding='utf-8') as f:
    f.write(js_out)
print("   ✅ data_kia.js (siap dipakai di web GIS)")

# ── 5. RINGKASAN AKHIR ───────────────────────────────────────────────────────
print("\n" + "="*60)
print("📋 RINGKASAN PREDIKSI 2026")
print("="*60)
pred_2026_list = df_pred[df_pred['tahun']==2026].sort_values('prediksi_pct')
print(f"\n🔴 5 kecamatan prediksi terendah 2026:")
for _, r in pred_2026_list.head(5).iterrows():
    print(f"   {r['kecamatan']:<16} → {r['prediksi_pct']:.1f}%")

print(f"\n🟢 5 kecamatan prediksi tertinggi 2026:")
for _, r in pred_2026_list.tail(5).iloc[::-1].iterrows():
    print(f"   {r['kecamatan']:<16} → {r['prediksi_pct']:.1f}%")

# ── 6. DOWNLOAD (Colab) ──────────────────────────────────────────────────────
try:
    from google.colab import files
    import ipywidgets as w
    from IPython.display import display as D

    files_dl = {
        'prediksi_kia_per_kecamatan.xlsx': ('⬇️ Excel Prediksi', 'success'),
        'data_kia.js'                    : ('⬇️ JS Web GIS',      'info'),
        'prediksi_per_kecamatan.png'     : ('⬇️ Grafik Grid',      'warning'),
        'heatmap_kia_prediksi.png'       : ('⬇️ Heatmap',          'danger'),
    }
    btns = []
    for fname, (label, style) in files_dl.items():
        b = w.Button(description=label, button_style=style,
                     layout=w.Layout(width='200px', height='36px'))
        b.on_click(lambda _, f=fname: files.download(f))
        btns.append(b)

    print("\n📥 Download output:")
    D(w.HBox(btns[:2]))
    D(w.HBox(btns[2:]))
except ImportError:
    print("\n💡 File tersimpan di direktori kerja. Download manual jika tidak di Colab.")


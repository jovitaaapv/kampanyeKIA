import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaTiktok, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import './LedokWetan.css';
import foto1 from '../images/kia_ledok_wetan.jpeg';
import foto2 from '../images/kia_ledok_wetan_2.jpeg';

function LedokWetan() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <div className="brand-logo-circle">D</div>
            <div className="brand-text">
              <span className="brand-title">DINAS KEPENDUDUKAN DAN PENCATATAN SIPIL</span>
              <span className="brand-subtitle">KABUPATEN BOJONEGORO</span>
            </div>
          </div>
          <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><a href={`${process.env.PUBLIC_URL}/GIS/webgis.html`}>GIS</a></li>
            <li><Link to="/berkas">Berkas</Link></li>
            <li><Link to="/profil">Profil</Link></li>
            <li><Link to="/tentang">Tentang</Link></li>
          </ul>
          <a href="tel:03249222760" className="navbar-phone">
            📞 (0324) 922276
          </a>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
      </nav>

      {/* HERO DETAIL */}
      <section className="detail-hero">
        <div className="container">
          <div className="detail-meta">
            <span>🕒 05 Oktober 2025</span>
            <span>📍 Balai Kelurahan Ledok Wetan</span>
            <span>👤 3 Petugas</span>
          </div>
          <h1 className="detail-title">Jemput Bola Perekaman KIA Ledok Wetan, Bojonegoro</h1>
        </div>
      </section>

      {/* STATISTIK */}
      <section className="statistik">
        <div className="container">
          <div className="statistik-grid">
            <div className="stat-card">
              <span className="stat-number">135</span>
              <span className="stat-label">Anak Direkam</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">135</span>
              <span className="stat-label">KIA Diterbitkan</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">1 Hari</span>
              <span className="stat-label">Durasi Pengerjaan</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOTO KEGIATAN */}
      <section className="foto-section">
        <div className="container">
          <div className="foto-grid">
            <div className="foto-besar">
              <img src={foto1} alt="KIA Ledok Wetan" />
            </div>
            <div className="foto-kecil">
              <img src={foto2} alt="KIA Ledok Wetan 2" />
            </div>
          </div>
        </div>
      </section>

      {/* INFORMASI KEGIATAN */}
      <section className="info-section">
        <div className="container">
          <h2 className="info-title">Informasi Kegiatan</h2>
          <div className="info-grid">
            <div className="info-deskripsi">
              <p>
                Program Jemput Bola Pelayanan KIA Merupakan Bagian Dari Upaya Dispendukcapil Bojonegoro Dalam Meningkatkan Akses Layanan Kependudukan Bagi Anak-Anak Usia 0-17 Tahun. KIA Ini Penting Sebagai Identitas Resmi Anak Yang Dapat Digunakan Untuk Berbagai Kebutuhan Administratif, Seperti Pendaftaran Sekolah, Pelayanan Kesehatan. Jemput Bola KIA Kali Ini Di Kelurahan Ledok Wetan, Kecamatan Bojonegoro. Dengan Jumlah Peserta 135 Anak Berhasil Direkam, Acara Berjalan Dengan Lancar Penuh Antusiasme Dan Semangat Dari Anak-Anak Dan Orang Tua.
              </p>
            </div>
            <div className="info-detail">
              <div className="info-item">
                <span className="info-icon">🕒</span>
                <div>
                  <span className="info-label">Tanggal</span>
                  <span className="info-value">05 Oktober 2025</span>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <span className="info-label">Lokasi</span>
                  <span className="info-value">Balai Kelurahan Ledok Wetan</span>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">👤</span>
                <div>
                  <span className="info-label">Penanggung Jawab</span>
                  <span className="info-value">Mustakim S.sos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-brand-center">
            DINAS KEPENDUDUKAN DAN PENCATATAN SIPIL KABUPATEN BOJONEGORO
          </div>
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-icon-row">
                <div className="footer-icon-circle whatsapp"><FaWhatsapp /></div>
                <div className="footer-contact-text">
                  <p>085771440833 (Daftar Penduduk)</p>
                  <p>081249827497 (Akta)</p>
                  <p>082132099730 (Data Bermasalah)</p>
                </div>
              </div>
            </div>
            <div className="footer-col">
              <div className="footer-icon-row">
                <div className="footer-icon-circle tiktok"><FaTiktok /></div>
                <p>DispendukcapilBJN</p>
              </div>
              <div className="footer-icon-row">
                <div className="footer-icon-circle instagram"><FaInstagram /></div>
                <p>Dispendukcapilbjn</p>
              </div>
            </div>
            <div className="footer-col">
              <div className="footer-icon-row">
                <div className="footer-icon-circle gmail"><SiGmail /></div>
                <div className="footer-contact-text">
                  <p>dispendukcapil@bojonegorakab.go.id</p>
                  <p>dispendukcapilbjn@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-address">
            Jl. Patimura 26 A, Bojonegoro, Jawa Timur, Indonesia
          </div>
        </div>
      </footer>

    </div>
  );
}

export default LedokWetan;

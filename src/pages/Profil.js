import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaTiktok, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import './Profil.css';

// Import untuk ikon tab
import profilIcon from '../images/profil.png';
import visiIcon from '../images/visi.png';
import strukturIcon from '../images/struktur.png';

// Import untuk lainnya
import kiaImage from '../images/kia.jpeg';
import gedungkantor from '../images/kantor_dispendukcapil.png';
import sotk_dukcapil from '../images/sotk_dukcapil.png';
import kiaKauman from '../images/kia_kauman.jpeg';
import kiaKlangon from '../images/kia_klangon.jpeg';
import kiaLedokWetan from '../images/kia_ledok_wetan.jpeg';
import kiaLedokKulon from '../images/kia_ledok_kulon.jpeg';

const publikasiData = [
  { id: 1, judul: 'Jemput Bola Perekaman Kartu Identitas Anak(KIA) Kelurahan Ledak Kulon, Bojonegoro', img: kiaLedokKulon, link: '/ledok-kulon' },
  { id: 2, judul: 'Jemput Bola Pembuatan Kartu Identitas Anak(KIA), Kelurahan Ledok Wetan, Bojonegoro', img: kiaLedokWetan, link: '/ledok-wetan' },
  { id: 3, judul: 'Jemput Bola Pembuatan Kartu Identitas Anak(KIA), Kelurahan Klangon, Bojonegoro', img: kiaKlangon, link: '/klangon' },
  { id: 4, judul: 'Jemput Bola Pembuatan Kartu Identitas Anak(KIA), Desa Kauman, Bojonegoro', img: kiaKauman, link: '/kauman' },
];

function ProfilPage() {
  const [activeTab, setActiveTab] = useState('profil');
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
            <li><Link to="/profil" className="active-nav">Profil</Link></li>
            <li><Link to="/tentang">Tentang</Link></li>
          </ul>
          <a href="tel:03249222760" className="navbar-phone">
            📞 (0324) 922276
          </a>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="detail-hero" style={{ backgroundImage: `url(${kiaImage})` }}>
        <div className="hero-overlay"></div>
        <div className="container">
          <h1 className="detail-title">Profil Dinas Kependudukan Dan Pencatatan Sipil (Dispendukcapil) Kabupaten Bojonegoro</h1>
          <div className="detail-meta">
            <span>🕒 Pelayanan Setiap Hari Kerja</span>
            <span>📍 Jl. Patimura 26 A, Bojonegoro</span>
            <span>👥 Terdiri dari 3 Bidang &amp; 1 Sekretariat</span>
          </div>
        </div>
      </section>

      {/* TABS DENGAN GAMBAR */}
      <section className="profil-tabs-section">
        <div className="container">
          <div className="tabs-grid">
            <button className={`tab-box-btn ${activeTab === 'profil' ? 'active' : ''}`} onClick={() => setActiveTab('profil')}>
              <div className="tab-box-icon"><img src={profilIcon} alt="Profil" style={{width: '50px'}} /></div>
              <span>Profil</span>
            </button>
            <button className={`tab-box-btn ${activeTab === 'visimisi' ? 'active' : ''}`} onClick={() => setActiveTab('visimisi')}>
              <div className="tab-box-icon"><img src={visiIcon} alt="Visi Misi" style={{width: '50px'}} /></div>
              <span>Visi Misi</span>
            </button>
            <button className={`tab-box-btn ${activeTab === 'struktur' ? 'active' : ''}`} onClick={() => setActiveTab('struktur')}>
              <div className="tab-box-icon"><img src={strukturIcon} alt="Struktur" style={{width: '50px'}} /></div>
              <span>Struktur Organisasi</span>
            </button>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="info-section">
        <div className="container">
          
          {/* TAB 1: PROFIL */}
          {activeTab === 'profil' && (
            <div className="info-grid">
              <div className="info-deskripsi">
                <h2 className="info-title">Mengenal Instansi Kami</h2>
                <div className="profil-img-wrap"><img src={gedungkantor} alt="Gedung Dispendukcapil" /></div>
                <p style={{ textAlign: 'justify' }}>
                  Dinas Kependudukan dan Pencatatan Sipil Kabupaten Bojonegoro adalah instansi pemerintah yang bertanggung jawab dalam penyelenggaraan administrasi kependudukan dan pencatatan sipil. Dispendukcapil terdiri atas empat bidang dan satu sekretariat yang didukung oleh 58 PNS untuk memberikan pelayanan kependudukan yang efektif, efisien, dan berkualitas kepada masyarakat Kabupaten Bojonegoro.
                </p>
              </div>
              <div className="info-detail">
                <h3 className="sidebar-title">Publikasi Penting</h3>
                <div className="mini-berita-list">
                  {publikasiData.map((item) => (
                    <Link key={item.id} to={item.link} className="mini-berita-item">
                      <p className="mini-berita-judul">{item.judul}</p>
                      <img src={item.img} alt={item.judul} className="mini-berita-img" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: VISI MISI */}
          {activeTab === 'visimisi' && (
            <div className="info-grid">
              <div className="info-deskripsi">
                <div className="visi-box">
                  <h2 className="info-title" style={{ borderBottom: '2px solid var(--maroon)', paddingBottom: '8px', marginBottom: '12px' }}>VISI DISPENDUKCAPIL</h2>
                  <p className="visi-text">" TERWUJUDNYA MASYARAKAT BOJONEGORO BERDOKUMEN KEPENDUDUKAN DAN PENCATATAN SIPIL YANG LENGKAP DAN AKURAT "</p>
                </div>
                <div>
                  <h2 className="info-title" style={{ marginBottom: '16px' }}>MISI DISPENDUKCAPIL</h2>
                  <ol className="misi-list">
                    <li className="misi-item">Memberikan pelayanan administrasi kependudukan dan pencatatan sipil yang responsif, mudah, ramah, cepat, tepat, tanpa diskriminasi.</li>
                    <li className="misi-item">Meningkatkan kepuasan masyarakat dalam pelayanan administrasi kependudukan dan pencatatan sipil.</li>
                    <li className="misi-item">Meningkatkan konsolidasi data secara berkelanjutan.</li>
                    <li className="misi-item">Meningkatkan kompetensi sumber daya manusia yang berkualitas, unggul, berbudaya, berakhlak dan bahagia.</li>
                    <li className="misi-item">Meningkatkan kesadaran masyarakat terhadap kepemilikan dokumen kependudukan dan pencatatan sipil.</li>
                    <li className="misi-item">Meningkatkan pemanfaatan teknologi informasi.</li>
                  </ol>
                </div>
              </div>
              <div className="info-detail">
                <h3 className="sidebar-title">Publikasi Penting</h3>
                <div className="mini-berita-list">
                  {publikasiData.map((item) => (
                    <Link key={item.id} to={item.link} className="mini-berita-item">
                      <p className="mini-berita-judul">{item.judul}</p>
                      <img src={item.img} alt={item.judul} className="mini-berita-img" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: STRUKTUR */}
          {activeTab === 'struktur' && (
            <div className="info-grid">
              <div className="info-deskripsi">
                <h2 className="info-title">Struktur Organisasi Dispendukcapil</h2>
                <div className="sotk-img-wrap"><img src={sotk_dukcapil} alt="SOTK Dinas Kependudukan dan Pencatatan Sipil Kabupaten Bojonegoro" /></div>
                <div className="sotk-deskripsi-box">
                  <p>Dinas Kependudukan dan Pencatatan Sipil Kabupaten Bojonegoro dipimpin oleh Kepala Dinas yang dibantu Sekretaris serta tiga bidang utama, yaitu Pelayanan Pendaftaran Penduduk, Pelayanan Pencatatan Sipil, dan Pengelolaan Informasi Administrasi Kependudukan serta Pemanfaatan Data. Struktur ini didukung oleh jabatan fungsional untuk memastikan pelayanan administrasi kependudukan berjalan efektif dan terintegrasi.</p>
                </div>
              </div>
              <div className="info-detail">
                <h3 className="sidebar-title">Publikasi Penting</h3>
                <div className="mini-berita-list">
                  {publikasiData.map((item) => (
                    <Link key={item.id} to={item.link} className="mini-berita-item">
                      <p className="mini-berita-judul">{item.judul}</p>
                      <img src={item.img} alt={item.judul} className="mini-berita-img" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* FOOTER */}
      <footer className="footer" style={{ backgroundImage: `url(${gedungkantor})` }}>
        <div className="footer-overlay"></div>
        <div className="container">
          <div className="footer-brand-center">DINAS KEPENDUDUKAN DAN PENCATATAN SIPIL KABUPATEN BOJONEGORO</div>
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
                  <p>dispendukcapil@bojonegorokab.go.id</p>
                  <p>dispendukcapilbjn@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-address">Jl. Patimura 26 A, Bojonegoro, Jawa Timur, Indonesia</div>
        </div>
      </footer>
    </div>
  );
}

export default ProfilPage;
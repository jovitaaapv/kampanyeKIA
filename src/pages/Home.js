import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaTiktok, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import './Home.css';
import kiaImage from '../images/kia.jpeg';
import gambarGIS from '../images/Gambar_GIS.jpg';
import gambarBerkas from '../images/Gambar_Berkas.jpg';
import gambarProfil from '../images/Gambar_Profil.jpg';
import gambarTentang from '../images/Gambar_Tentang.jpg';
import kiaKauman from '../images/kia_kauman.jpeg';
import kiaKlangon from '../images/kia_klangon.jpeg';
import kiaLedokWetan from '../images/kia_ledok_wetan.jpeg';
import kiaLedokKulon from '../images/kia_ledok_kulon.jpeg';
import bojonegoroImg from '../images/bojonegoro.jpg';

const beritaData = [
  {
    id: 1,
    kategori: 'KIA',
    judul: 'Jemput Bola Perekaman Kartu Identitas Anak(KIA) Kelurahan Ledak Kulon, Bojonegoro',
    tanggal: '04 Oktober 2025',
    img: kiaLedokKulon,
    link: '/ledok-kulon',
  },
  {
    id: 2,
    kategori: 'KIA',
    judul: 'Jemput Bola Pembuatan Kartu Identitas Anak(KIA), Kelurahan Ledok Wetan, Bojonegoro',
    tanggal: '05 Oktober 2025',
    img: kiaLedokWetan,
    link: '/ledok-wetan',
  },
  {
    id: 3,
    kategori: 'KIA',
    judul: 'Jemput Bola Pembuatan Kartu Identitas Anak(KIA), Kelurahan Klangon, Bojonegoro',
    tanggal: '13 Oktober 2025',
    img: kiaKlangon,
    link: '/klangon',
  },
  {
    id: 4,
    kategori: 'KIA',
    judul: 'Jemput Bola Pembuatan Kartu Identitas Anak(KIA), Desa Kauman, Bojonegoro',
    tanggal: '11 Oktober 2025',
    img: kiaKauman,
    link: '/kauman',
  },
];

const jamPelayanan = [
  { hari: 'Senin', jam: 'jam : 08.00 - 16.00' },
  { hari: 'Selasa', jam: 'jam : 08.00 - 16.00' },
  { hari: 'Rabu', jam: 'jam : 08.00 - 16.00' },
  { hari: 'Kamis', jam: 'jam : 08.00 - 16.00' },
  { hari: 'Jumat', jam: 'jam : 08.00 - 16.00' },
  { hari: 'Istirahat', jam: '12.00 - 13.00\nKecuali Jumat 11.30 - 13.00' },
  { hari: 'Sabtu & Minggu', jam: '(TUTUP)' },
];

function Home() {
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
          <a href="tel:08063881996" className="navbar-phone">
            📞 (0863) 881996
          </a>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="hero"
        id="home"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.72) 45%, rgba(0,0,0,0.15) 100%), url(${kiaImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="hero-content">
          <span className="hero-badge">Kampanye Digital</span>
          <h1 className="hero-title">KARTU IDENTITAS ANAK (KIA)</h1>
          <p className="hero-subtitle">Kabupaten Bojonegoro, Jawa Timur</p>
          <p className="hero-desc">
            Kami melakukan terobosan kepada masyarakat agar segera membuat &amp; memiliki Kartu Identitas Anak (KIA).
          </p>
        </div>
      </section>

      {/* MENU ICON */}
      <section className="icon-menu">
        <div className="container">
          <div className="icon-grid">
            <Link to="/gis" className="icon-item">
              <div className="icon-box"><img src={gambarGIS} alt="GIS" /></div>
              <span>GIS</span>
            </Link>
            <Link to="/berkas" className="icon-item">
              <div className="icon-box"><img src={gambarBerkas} alt="Berkas" /></div>
              <span>Berkas</span>
            </Link>
            <Link to="/profil" className="icon-item">
              <div className="icon-box"><img src={gambarProfil} alt="Profil" /></div>
              <span>Profil</span>
            </Link>
            <Link to="/tentang" className="icon-item">
              <div className="icon-box"><img src={gambarTentang} alt="Tentang" /></div>
              <span>Tentang</span>
            </Link>
          </div>
        </div>
      </section>

      {/* BERITA & JAM PELAYANAN */}
      <section className="content-section" id="berita">
        <div className="container">
          <div className="content-grid">
            <div className="berita-col">
              <h2 className="section-title">
                <span className="title-bar"></span>
                Pelayanan KIA DISPENDUKCAPIL
              </h2>
              <div className="berita-list">
                {beritaData.map((item) => (
                  <Link key={item.id} to={item.link} className="berita-card">
                    <img src={item.img} alt={item.judul} className="berita-img" />
                    <div className="berita-info">
                      <span className="berita-kategori">{item.kategori}</span>
                      <p className="berita-judul">{item.judul}</p>
                      <span className="berita-tanggal">🕒 {item.tanggal}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="jam-col">
              <h2 className="section-title">
                <span className="title-bar"></span>
                Jam Pelayanan
              </h2>
              <p className="jam-subtitle">Berikut rincian jam kerja</p>
              <div className="jam-list">
                {jamPelayanan.map((item, i) => (
                  <div key={i} className="jam-item">
                    <span className="jam-hari">{item.hari}</span>
                    <span className="jam-waktu">{item.jam}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER QUOTE — efek parallax: gambar diam, tulisan scroll */}
      <section
        className="banner-quote"
        style={{ backgroundImage: `url(${bojonegoroImg})` }}
      >
        <div className="banner-overlay" />
        <div className="container banner-content">
          <p>
            AYO CETAK KIA!!!
            Wujudkan Hak Anak Bojonegoro Dengan KIA<br />Proses <strong>Cepat, Syarat Mudah, Dan 100% Gratis Tanpa Biaya!</strong>
          </p>
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

export default Home;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaTiktok, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import './Tentang.css';

// Import aset gambar pendukung
import kiaImage from '../images/kia.jpeg';
import gedungkantor from '../images/kantor_dispendukcapil.png';
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

function TentangPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [kritikSaran, setKritikSaran] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (kritikSaran.trim() === '') {
      alert('Mohon isi kritik dan saran Anda terlebih dahulu.');
      return;
    }
    alert('Terima kasih! Kritik dan saran Anda telah berhasil dikirim.');
    setKritikSaran('');
  };

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
            <li><Link to="/tentang" className="active-nav">Tentang</Link></li>
          </ul>
          <a href="tel:03249222760" className="navbar-phone">
            📞 (0324) 922276
          </a>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
      </nav>

        {/* HERO DETAIL STYLE */}
      <section 
        className="detail-hero"
        style={{ backgroundImage: `url(${kiaImage})` }}
      >
        <div className="hero-overlay"></div>
        <div className="container">
          <h1 className="detail-title">Tentang Website Ini</h1>
          <div className="detail-meta">
            <span>🕒 Pelayanan Setiap Hari Kerja</span>
            <span>📍 Jl. Patimura 26 A, Bojonegoro</span>
            <span>👥 Terdiri dari 3 Bidang &amp; 1 Sekretariat</span>
          </div>
        </div>
      </section>


      {/* MAIN KONTEN */}
      <main className="info-section">
        <div className="container">
          <div className="info-grid">
            
            {/* COLUMN KIRI: DESKRIPSI & FORM */}
            <div className="info-deskripsi">
              
              {/* Paragraf Pembuka */}
              <p className="tentang-pembuka">
                Website ini dikembangkan sebagai bagian dari Mini Project Program Mobilitas Akademik 
                Magang Berdampak di Dispendukcapil Kabupaten Bojonegoro. Website berfungsi sebagai media 
                informasi Kartu Identitas Anak (KIA), profil instansi, fitur GIS, serta layanan administrasi 
                kependudukan yang dapat diakses secara mudah, cepat, dan responsif.
              </p>

              {/* Kotak Konten Utama (Tujuan & Tim Pengembangan) */}
              <div className="tentang-box-konten">
                <div className="konten-group">
                  <h4 className="konten-sub-title">TUJUAN PENGEMBANGAN</h4>
                  <p>
                    Website ini bertujuan untuk meningkatkan akses informasi mengenai KIA sekaligus mendukung 
                    digitalisasi pelayanan publik di Dispendukcapil Kabupaten Bojonegoro. Selain itu, website 
                    ini menjadi wadah implementasi ilmu dan keterampilan mahasiswa dalam menghasilkan solusi 
                    digital yang bermanfaat bagi masyarakat.
                  </p>
                </div>

                <div className="konten-group" style={{ marginTop: '24px' }}>
                  <h4 className="konten-sub-title">TIM PENGEMBANGAN</h4>
                  <p>
                    Website ini dikembangkan oleh mahasiswa peserta Program Mobilitas Akademik Magang Berdampak 
                    di Dispendukcapil Kabupaten Bojonegoro. Melalui kolaborasi dalam desain, pengembangan sistem, 
                    dan pengelolaan konten, tim berupaya menghadirkan website yang informatif, interaktif, dan 
                    sesuai kebutuhan pengguna.
                  </p>
                </div>
              </div>

              {/* Kotak Form Kritik Dan Saran */}
              <div className="kritik-saran-container">
                <h4 className="kritik-title">Kritik Dan Saran Pengembangan</h4>
                <form onSubmit={handleSubmit} className="kritik-form">
                  <textarea 
                    className="kritik-textarea"
                    placeholder="Masukkan kritik dan saran Anda di sini..."
                    value={kritikSaran}
                    onChange={(e) => setKritikSaran(e.target.value)}
                  ></textarea>
                  <div className="kritik-btn-wrapper">
                    <button type="submit" className="kritik-submit-btn">Kirim</button>
                  </div>
                </form>
              </div>

            </div>

            {/* COLUMN KANAN: PUBLIKASI PENTING */}
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
        </div>
      </main>

      {/* FOOTER */}
      <footer className="footer" style={{ backgroundImage: `url(${gedungkantor})` }}>
        <div className="footer-overlay"></div>
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
                  <p>dispendukcapil@bojonegorokab.go.id</p>
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

export default TentangPage;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaTiktok, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaShieldAlt, FaIdCard, FaSchool, FaHospital, FaUserCheck } from 'react-icons/fa';
import petaHitam from '../images/peta_bjn_hitam.png';
import './Berkas.css';

function Berkas() {
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
            <li><Link to="/gis">GIS</Link></li>
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

      {/* HERO BERKAS */}
      <section className="berkas-hero">
        <div className="container">
          <h1>Kartu Identitas Anak (KIA)</h1>
          <p>(Persyaratan penerbitan, proses pencetakan, manfaat KIA)</p>
        </div>
      </section>

      {/* SYARAT PENERBITAN */}
      <section className="syarat-section">
        <div className="container">
          <h2 className="syarat-title">Syarat Penerbitan KIA</h2>
          <div className="syarat-grid">

            {/* KOLOM KIRI - USIA 0-5 */}
            <div className="syarat-card">
              <div className="syarat-header">
                <span className="syarat-icon">👤</span>
                <div>
                  <p className="syarat-usia">Usia 0 - 5 Tahun</p>
                  <p className="syarat-label">Kartu Identitas Anak</p>
                </div>
              </div>
              <ul className="syarat-list">
                <li><span className="list-icon">A</span> Fotocopy Kartu Keluarga (KK)</li>
                <li><span className="list-icon">B</span> Fotocopy KTP Orang Tua</li>
                <li><span className="list-icon">C</span> Fotocopy Akta Kelahiran Anak</li>
                <li><span className="list-icon">D</span> Penerbitan Formulir KIA <a href="https://drive.google.com/file/d/1rhN8h8CaTZBdhEi-VIHhy8SnofU2F5FZ/view?usp=sharing" className="unduh-link">( unduh disini)</a></li>
              </ul>
            </div>

            {/* KOLOM KANAN - USIA 5 KE ATAS */}
            <div className="syarat-card">
              <div className="syarat-header">
                <span className="syarat-icon">👤</span>
                <div>
                  <p className="syarat-usia">Usia 5 Tahun ke Atas</p>
                  <p className="syarat-label">Kartu Identitas Anak</p>
                </div>
              </div>
              <ul className="syarat-list">
                <li><span className="list-icon">A</span> Fotocopy Kartu Keluarga (KK)</li>
                <li><span className="list-icon">B</span> Fotocopy KTP Orang Tua</li>
                <li><span className="list-icon">C</span> Fotocopy Akta Kelahiran Anak</li>
                <li><span className="list-icon">D</span> Foto Anak Ukuran 3 x 4 / foto bisa dikirim melalui file saat pengajuan</li>
                <li><span className="list-icon">E</span> Penerbitan Formulir KIA <a href="https://drive.google.com/file/d/1rhN8h8CaTZBdhEi-VIHhy8SnofU2F5FZ/view?usp=sharing" className="unduh-link">( unduh disini)</a></li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* PROSES PENCETAKAN */}
      <section className="proses-section">
        <div className="container">
          <div className="proses-card">
            <p className="proses-label">Proses Pencetakan KIA</p>
            <p className="proses-value">Dilakukan 1 Hari Kerja</p>
          </div>
        </div>
      </section>

      {/* MANFAAT KIA */}
      <section className="manfaat-section">
        <div className="container">
          <h2 className="manfaat-title">Manfaat KIA</h2>
          <div className="manfaat-card">
            <div className="manfaat-item">
              <FaShieldAlt className="manfaat-icon" />
              <span>Mencegah Perdagangan Anak</span>
            </div>
            <div className="manfaat-item">
              <FaIdCard className="manfaat-icon" />
              <span>Bukti Resmi Identitas Anak</span>
            </div>
            <div className="manfaat-item">
              <FaSchool className="manfaat-icon" />
              <span>Daftar Sekolah Lebih Mudah</span>
            </div>
            <div className="manfaat-item">
              <FaHospital className="manfaat-icon" />
              <span>Mempermudah Akses ke BPJS dan Berobat ke Puskesmas</span>
            </div>
            <div className="manfaat-item">
              <FaUserCheck className="manfaat-icon" />
              <span>Mempermudah dalam pelayanan publik</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        {/* Background peta - pakai div, bukan CSS url() */}
        <div className="footer-bg" style={{ backgroundImage: `url(${petaHitam})` }} />

        <div className="container">
          <div className="footer-brand-center">
            DINAS KEPENDUDUKAN DAN PENCATATAN SIPIL KABUPATEN BOJONEGORO
          </div>
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-icon-row">
                <div className="footer-icon-circle"><FaWhatsapp /></div>
                <div className="footer-contact-text">
                  <p>085771440833 (Daftar Penduduk)</p>
                  <p>081249827497 (Akta)</p>
                  <p>082132099730 (Data Bermasalah)</p>
                </div>
              </div>
            </div>
            <div className="footer-col">
              <div className="footer-icon-row">
                <div className="footer-icon-circle"><FaTiktok /></div>
                <p>DispendukcapilBJN</p>
              </div>
              <div className="footer-icon-row">
                <div className="footer-icon-circle"><FaInstagram /></div>
                <p>Dispendukcapilbjn</p>
              </div>
            </div>
            <div className="footer-col">
              <div className="footer-icon-row">
                <div className="footer-icon-circle"><SiGmail /></div>
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

export default Berkas;

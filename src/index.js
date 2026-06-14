import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LedokKulon from './pages/LedokKulon';
import LedokWetan from './pages/LedokWetan';
import Klangon from './pages/Klangon';
import Kauman from './pages/Kauman';
import Berkas from './pages/Berkas';
import ProfilPage from './pages/Profil';
import TentangPage from './pages/Tentang';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ledok-kulon" element={<LedokKulon />} />
        <Route path="/ledok-wetan" element={<LedokWetan />} />
        <Route path="/klangon" element={<Klangon />} />
        <Route path="/kauman" element={<Kauman />} />
        <Route path="/berkas" element={<Berkas />} />
        <Route path="/profil" element={<ProfilPage />} />
        <Route path="/tentang" element={<TentangPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
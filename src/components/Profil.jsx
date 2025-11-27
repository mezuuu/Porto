// src/components/Profil.jsx
import React from "react";
import { HiLocationMarker, HiEye, HiExternalLink } from "react-icons/hi";
import fotoProfil from "../assets/profil.jpg";
import data from "../data/data.json";

function Profil() {
  return (
    <>
      {/* UBAH CONTAINER UTAMA: Hapus bg-gradient, ganti dengan style neon cyan */}
      <div className="rounded-3xl p-8 mb-8 box-neon-cyan text-gray-200 shadow-2xl shadow-cyan-500/20 relative overflow-hidden">
        
        {/* (Opsional) Hiasan background cahaya */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-cyan-500 rounded-full opacity-10 blur-3xl filter"></div>

        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          {/* FOTO PROFIL DENGAN GLOW */}
          <div className="relative group">
             <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
             <img
               src={fotoProfil}
               alt="Foto Profil Pengguna"
               // Tambahkan border cyan glowing pada foto
               className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-cyan-400/80 shadow-lg shadow-cyan-500/50"
             />
          </div>
         
          <div className="flex-1 text-center md:text-left">
            {/* NAMA DENGAN TEKS NEON */}
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-neon-cyan tracking-wide">{data.profil.name}</h1>
            <h2 className="text-xl text-cyan-300 mb-4 font-medium">{data.profil.headline}</h2>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6 text-sm font-semibold">
              {/* Badge diubah menjadi style gelap/transparan */}
              <span className="bg-gray-800/80 border border-cyan-500/30 text-cyan-300 px-4 py-1.5 rounded-full backdrop-blur-md shadow-sm shadow-cyan-500/20">
                {data.profil.nim}
              </span>
              <span className="bg-gray-800/80 border border-cyan-500/30 text-cyan-300 px-4 py-1.5 rounded-full backdrop-blur-md shadow-sm shadow-cyan-500/20">
                {data.profil.prodi}
              </span>
              <span className="bg-gray-800/80 border border-cyan-500/30 text-cyan-300 px-4 py-1.5 rounded-full backdrop-blur-md shadow-sm shadow-cyan-500/20">
                {data.profil.angkatan}
              </span>
            </div>

            {/* Ubah warna ikon dan teks statistik */}
            <div className="flex items-center justify-center md:justify-start gap-6 text-gray-400 text-sm mb-6">
              <div className="flex items-center gap-2">
                <HiLocationMarker className="text-cyan-400 w-5 h-5"/> {data.profil.location}
              </div>
              <div className="flex items-center gap-2">
                <HiEye className="text-cyan-400 w-5 h-5"/> {data.statistics.views_count} Views
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 max-w-xl text-lg leading-relaxed">
              {data.profil.short_bio}
            </p>

            {/* Tombol diubah menjadi style neon */}
            <a
              href={data.profil.portfolio_url}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 bg-transparent text-cyan-400 font-bold px-8 py-3 rounded-xl border-2 border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 group"
            >
              <HiExternalLink className="w-5 h-5 group-hover:animate-pulse"/> Visit Portofolio
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profil;
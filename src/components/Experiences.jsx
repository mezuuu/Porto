// src/components/Experiences.jsx
import React from "react";
import data from "../data/data.json";

const Experiences = () => {
  return (
    // UBAH CONTAINER UTAMA: Gunakan box-neon-green
    <div className="rounded-3xl p-8 mb-8 box-neon-green relative overflow-hidden shadow-2xl shadow-green-500/20">
      {/* (Opsional) Hiasan background cahaya */}
       <div className="absolute top-1/2 right-0 -mt-32 -mr-32 w-80 h-80 bg-green-800 rounded-full opacity-20 blur-3xl filter pointer-events-none"></div>

      {/* JUDUL DENGAN TEKS NEON HIJAU */}
      <h2 className="text-3xl font-bold text-neon-green mb-10 tracking-wider relative z-10">Experiences</h2>
      
      <div className="flex flex-col gap-10 relative z-10">
        {data.experiences.map((experience) => (
          <div key={experience.id} className="flex flex-col md:flex-row items-start gap-6 group">
            
            {/* Bagian Logo Organisasi - Ubah background jadi gelap dan border hijau */}
            <div className="flex-none flex flex-col items-center relative">
              {/* Garis timeline neon */}
              <div className="absolute top-20 bottom-0 w-0.5 bg-gradient-to-b from-green-500/50 to-transparent md:left-1/2 -ml-[1px] z-0"></div>
              
              <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(22,163,74,0.3)] border-2 border-green-500/50 overflow-hidden relative z-10 group-hover:border-green-400 transition duration-300">
                <img
                  src={experience.image_url}
                  alt={`${experience.organization} logo`}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Bagian Konten Kartu Experience */}
            <div className="flex-1 w-full bg-gray-900/50 backdrop-blur-md border border-green-500/20 rounded-2xl p-6 hover:border-green-500/60 hover:shadow-[0_0_15px_rgba(22,163,74,0.3)] transition-all duration-300">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-3">
                <div>
                  <h3 className="font-bold text-gray-100 text-xl leading-tight group-hover:text-green-300 transition">
                    {experience.title}
                  </h3>
                  <p className="text-green-400/90 font-medium text-lg">
                    {experience.organization}
                  </p>
                </div>
                
                {/* Badge Tipe Experience diubah warnanya */}
                <span className={`text-xs px-4 py-1.5 rounded-full font-bold uppercase tracking-wider flex-shrink-0 border shadow-sm ${
                    experience.experience_type === "internship" 
                    ? "bg-purple-900/50 text-purple-300 border-purple-500/30 shadow-purple-500/20" 
                    : "bg-green-900/50 text-green-300 border-green-500/30 shadow-green-500/20"
                }`}>
                  {experience.experience_type}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-5">
                <div className="flex items-center text-gray-400 text-sm gap-2 flex-wrap">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  <span>{experience.start_date}</span>
                  <span className="text-green-500"> / </span>
                  <span>
                    {experience.is_current ? "Present" : experience.end_date}
                  </span>

                  {experience.is_current && (
                    <span className="bg-green-900/30 text-green-400 text-xs px-3 py-0.5 rounded-full border border-green-500/50 font-bold ml-2 shadow-[0_0_10px_rgba(22,163,74,0.2)] animate-pulse">
                      Active
                    </span>
                  )}
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed text-base">
                {experience.description}
              </p>

              {/* Looping Technologies / Tech Stack Badges */}
              <div className="flex flex-wrap gap-3">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-800/80 text-gray-300 border border-green-500/20 px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-800 hover:text-green-300 hover:border-green-500/50 transition-colors cursor-default shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
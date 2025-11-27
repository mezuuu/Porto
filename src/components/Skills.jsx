// src/components/Skills.jsx
import React from "react";
import data from "../data/data.json";

const Skills = () => {
  return (
    // CONTAINER UTAMA: Neon Purple
    <div className="rounded-3xl p-8 mb-8 box-neon-purple relative overflow-hidden shadow-2xl shadow-fuchsia-500/20">
       
       {/* Hiasan background cahaya */}
       <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-96 h-96 bg-fuchsia-800 rounded-full opacity-20 blur-3xl filter pointer-events-none"></div>

      {/* JUDUL */}
      <h2 className="text-3xl font-bold text-neon-purple mb-8 tracking-wider relative z-10">
        Skills & Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {data.skills.map((skill, index) => (
          // KARTU SKILL
          <div
            key={index}
            className="bg-gray-900/50 backdrop-blur-md rounded-2xl border border-fuchsia-500/20 p-6 hover:border-fuchsia-500/60 hover:shadow-[0_0_15px_rgba(192,38,211,0.3)] transition duration-300 group"
          >
            <div className="flex w-full flex-col md:flex-row items-center md:items-start gap-4 mb-4">
              {/* Icon */}
              <img
                src={skill.icon_url}
                alt={skill.name}
                className="w-14 h-14 flex-shrink-0 object-contain drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]"
              />
              <div className="flex-1 text-center md:text-left w-full">
                <div className="flex flex-col md:flex-row justify-between items-center gap-2 mb-1">
                  <h3 className="font-bold text-gray-100 text-xl group-hover:text-fuchsia-300 transition">
                    {skill.name}
                  </h3>
                  {skill.is_main && (
                    <span className="bg-fuchsia-900/50 text-fuchsia-300 border border-fuchsia-500/30 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm shadow-fuchsia-500/20">
                      Main
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm">
                  {skill.years_of_experience} Year(s) Exp.
                </p>
              </div>
            </div>

            {/* Bagian Level Bar (Adaptive Percentage) */}
            <div className="mt-4">
              <div className="flex justify-between text-sm font-medium mb-2">
                {/* Teks Level (Advanced/Intermediate) tetap muncul */}
                <span className="text-fuchsia-300 capitalize">{skill.level}</span>
                {/* (Opsional) Jika ingin menampilkan angka persennya juga, uncomment baris bawah ini */}
                {/* <span className="text-gray-400 text-xs">{skill.percentage}%</span> */}
              </div>
              
              {/* Background Bar (Track) */}
              <div className="w-full bg-gray-800/80 rounded-full h-3 p-0.5 border border-fuchsia-500/20">
                
                {/* Indikator Bar (Isi) */}
                <div
                  className="h-full rounded-full bg-gradient-to-r from-fuchsia-600 to-fuchsia-400 shadow-[0_0_10px_#c026d3] transition-all duration-1000 ease-out relative"
                  // INI PERUBAHAN UTAMANYA: Lebar mengambil dari skill.percentage
                  style={{ width: `${skill.percentage}%` }}
                >
                    {/* Efek kilau putih di ujung bar */}
                    <div className="absolute right-0 top-0 h-full w-full bg-gradient-to-l from-white/30 to-transparent rounded-full"></div>
                </div>

              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
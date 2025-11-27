// src/App.js
import React from "react";
import Profil from "./components/Profil";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";

function App() {
  return (
    <div className="min-h-screen py-10 px-4 md:px-8 bg-black text-gray-200 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black">
      <div className="max-w-5xl mx-auto">

        <Profil />
        <Skills />
        <Experiences />
      </div>
    </div>
  );
}

export default App;
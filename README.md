# ⚡ Portofolio Pribadi Neon (Neon Personal Portfolio)

Website portofolio pribadi yang modern dan responsif, dibangun menggunakan **React**, **Vite**, dan **Tailwind CSS**. Proyek ini mengusung estetika *Cyberpunk/Neon* yang unik dengan pengelolaan konten yang dinamis berbasis data JSON.

![Status Proyek](https://img.shields.io/badge/Status-Aktif-success) ![Tech Stack](https://img.shields.io/badge/Dibuat%20Dengan-React%20%7C%20Vite%20%7C%20Tailwind-blue)

## 📅 Log Progres Pengembangan

Proyek ini dikembangkan secara bertahap, berfokus pada performa, struktur komponen, dan peningkatan antarmuka (UI). Berikut adalah timeline pengembangan berdasarkan riwayat *commit*:

### **Fase 3: Pemolesan Visual & Logika Dinamis (27 Nov 2025)**
* **✨ Fitur: Komponen Skills Dinamis**
    * Memperbarui komponen `Skills` agar menerima data persentase secara dinamis dari JSON.
    * Mengimplementasikan animasi transisi halus pada *progress bar* (dari 0% ke level target).
* **🎨 Fitur: Peningkatan UI Neon**
    * Menerapkan efek *Neon Glow* global (Tema Cyan, Ungu, Hijau) melalui CSS kustom.
    * Memperbaiki gaya komponen `Experiences` agar lebih mudah dibaca dan menarik secara visual.
    * Meningkatkan struktur komponen secara keseluruhan untuk `Profil`, `Skills`, dan `Experiences`.
* **mj Fitur: Komponen Experience**
    * Menambahkan bagian `Experiences` untuk menampilkan riwayat magang dan proyek.
    * Mengintegrasikan logo organisasi/perusahaan dengan tata letak membulat.

### **Fase 2: Struktur Inti & Styling (26 Nov 2025)**
* **🛠️ Fitur: Integrasi Tailwind**
    * Menginstal dan mengonfigurasi **Tailwind CSS** untuk *styling* berbasis *utility*.
    * Melakukan refaktor pada komponen `App` untuk mendukung sistem tata letak baru.
* **Ns Fitur: Arsitektur Komponen**
    * Membuat komponen `Profil` untuk bagian *hero* (beranda).
    * Menetapkan struktur data awal untuk profil pengguna dan keahlian di `data.json`.
* **🚀 Fitur: Inisialisasi Proyek**
    * Menginisialisasi proyek menggunakan **Vite + React**.
    * Migrasi data mentah ke struktur direktori baru.

### **Fase 1: Persiapan Data (26 Nov 2025)**
* **O Setup Awal**
    * Membuat file JSON awal untuk memusatkan informasi profil (Nama, NIM, Bio) dan data pengalaman.

---

## 🛠️ Teknologi yang Digunakan

* **Core:** React.js (v19), Vite
* **Styling:** Tailwind CSS (v3), Custom CSS (Efek Neon)
* **Ikon:** React Icons
* **Sumber Data:** JSON (Lokal)

## wm Struktur Proyek

```bash
src/
├── assets/          # Gambar statis (foto profil, logo)
├── components/      # Komponen React
│   ├── Profil.jsx       # Bagian Hero/Bio (Tema Cyan)
│   ├── Skills.jsx       # Bar Skill Dinamis (Tema Ungu)
│   └── Experiences.jsx  # Timeline Riwayat (Tema Hijau)
├── data/            # data.json (Sumber Konten)
├── index.css        # Gaya Global & Kelas Utilitas Neon
├── App.jsx          # Tata Letak Utama
└── main.jsx         # Entry Point Aplikasi
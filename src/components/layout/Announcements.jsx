import React from "react";
import { motion } from "motion/react";

export function Announcements() {
  const news = [
    "Hasil Seleksi Akademik PPG Tahap II Dibuka!",
    "Jadwal Pelatihan Kurikulum Merdeka Bulan Mei 2026",
    "Webinar Implementasi Digital Resource Portal",
    "Pendaftaran Sertifikasi Guru Madrasah Tahap II Dibuka!",
  ];
  return (
    <div className="bg-emerald-600 text-white py-4 overflow-hidden relative shadow-inner">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center gap-6">
        <div className="flex-shrink-0 bg-white text-emerald-700 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md z-10">
          Informasi
        </div>
        <div className="flex-grow whitespace-nowrap overflow-hidden relative">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            className="inline-flex gap-16 font-bold text-xs tracking-wider uppercase"
          >
            {news.map((item, i) => (
              <span key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-white rounded-full opacity-50" />{" "}
                {item}
              </span>
            ))}
            {news.map((item, i) => (
              <span key={`dup-${i}`} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-white rounded-full opacity-50" />{" "}
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

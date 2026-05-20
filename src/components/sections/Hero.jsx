import React, { useState } from "react";
import { motion } from "motion/react";
import { Search } from "lucide-react";

export function Hero({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-transparent">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(#2563eb 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
        >
          Inovasi Digital Pendidikan Islam
        </motion.div>
        <h1 className="text-5xl md:text-7xl text-gray-900 mb-8 leading-tight tracking-tight">
          Temukan <span className="text-blue-600">sumber belajar</span> terbaik
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          Akses ribuan modul digital berkualitas untuk menunjang Program
          Pendidikan Profesi Guru, dirancang untuk mendukung pengembangan
          kompetensi pendidik masa depan.
        </p>

        <div className="max-w-3xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative flex items-center bg-white rounded-2xl p-2 shadow-2xl border border-gray-100">
            <Search className="w-6 h-6 text-gray-400 ml-6" />
            <input
              type="text"
              placeholder="Cari topik, kata kunci, atau kode modul..."
              className="flex-1 px-6 py-4 outline-none text-gray-700 font-medium"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSearch(searchValue)}
            />

            <button
              onClick={() => onSearch(searchValue)}
              className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              Cari
            </button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <span>Populer:</span>
            <button className="text-blue-600 hover:underline">
              #Kurikulum Merdeka
            </button>
            <button className="text-blue-600 hover:underline">
              #Moderasi Beragama
            </button>
            <button className="text-blue-600 hover:underline">
              #Fikih Dasar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

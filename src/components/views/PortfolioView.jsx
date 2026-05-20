import React from "react";
import { motion } from "motion/react";
import { Heart, Share2 } from "lucide-react";
import { ALL_RESOURCES } from "../../data/mockData";

export function PortfolioView({ onAction }) {
  const portfolios = ALL_RESOURCES.filter((r) => r.category === "Portfolio");
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-emerald-600 rounded-full" />
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
              Galeri Karya
            </span>
          </div>
          <h2 className="text-5xl font-medium text-gray-900 mb-6 uppercase tracking-widest leading-tight">
            Karya <br /> Inspiratif
          </h2>
          <p className="text-gray-500 text-lg max-w-xl">
            Kumpulan karya terbaik mahasiswa PPG UIN Jakarta dari seluruh
            Indonesia.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolios.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 group shadow-xl hover:shadow-2xl hover:shadow-emerald-100 transition-all"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={r.thumbnail}
                  alt={r.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-6 left-6">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-[10px] font-bold text-gray-900 rounded-xl uppercase tracking-widest flex items-center gap-2 shadow-xl border border-white/20">
                    <Heart className="w-3 h-3 text-red-500 fill-red-500" />{" "}
                    {r.likes} Likes
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-1 group-hover:text-emerald-600 transition-colors">
                  {r.title}
                </h3>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
                  Oleh: {r.author}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => onAction(r.title)}
                    className="flex-1 py-4 bg-emerald-600 text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100"
                  >
                    Lihat Karya
                  </button>
                  <button className="p-4 bg-slate-50 text-gray-400 rounded-2xl border border-gray-100 hover:bg-emerald-50 hover:text-emerald-600 transition-all">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

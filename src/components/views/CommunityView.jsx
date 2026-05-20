import React from "react";
import { motion } from "motion/react";
import { MapPin, Users } from "lucide-react";
import { COMMUNITIES } from "../../data/mockData";

export function CommunityView({ onJoin }) {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-emerald-600 rounded-full" />
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
              Kolaborasi
            </span>
          </div>
          <h2 className="text-5xl font-medium text-gray-900 mb-6 uppercase tracking-widest leading-tight">
            Komunitas <br /> Pendidik
          </h2>
          <p className="text-gray-500 text-lg max-w-xl">
            Bergabunglah dengan ribuan pendidik lainnya untuk berbagi pengalaman
            dan inovasi.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {COMMUNITIES.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-slate-50 rounded-2xl p-8 flex flex-col sm:flex-row gap-8 border border-slate-100 group hover:bg-white hover:border-emerald-100 transition-all shadow-xl hover:shadow-2xl hover:shadow-emerald-100"
            >
              <div className="w-full sm:w-56 h-56 rounded-2xl overflow-hidden shrink-0 border border-gray-100 shadow-xl">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-between py-2">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-lg uppercase tracking-widest border border-emerald-100">
                      {c.category}
                    </span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-2">
                      <MapPin className="w-3 h-3" /> {c.location}
                    </span>
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {c.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {c.description}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-8">
                  <div className="flex items-center gap-3 text-xs font-bold text-gray-900 uppercase tracking-widest">
                    <Users className="w-5 h-5 text-emerald-600" /> {c.members}{" "}
                    Anggota
                  </div>
                  <button
                    onClick={() => onJoin(c.name)}
                    className="px-8 py-3 bg-emerald-600 text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-xl active:scale-95"
                  >
                    Gabung
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

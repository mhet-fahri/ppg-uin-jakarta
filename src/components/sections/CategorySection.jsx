import React from "react";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { CATEGORIES } from "../../data/mockData";

export function CategorySection({ onSelect }) {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-medium text-gray-900 mb-2">
              Eksplorasi Bidang Studi
            </h2>
            <p className="text-gray-500 font-medium">
              Cari sumber daya yang dikurasi khusus untuk mata pelajaran
              tertentu.
            </p>
          </div>
          <button
            onClick={() => {}}
            className="flex items-center gap-2 text-blue-600 font-bold hover:underline"
          >
            Lihat semua <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => onSelect(cat.name)}
              className={`group cursor-pointer aspect-[16/10] ${cat.bg} rounded-2xl flex flex-col items-center justify-center p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-200/50`}
            >
              <div
                className={`mb-4 ${cat.color} transition-transform duration-300 group-hover:scale-110`}
              >
                {cat.icon}
              </div>
              <h3 className={`font-bold text-lg ${cat.color} text-center`}>
                {cat.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

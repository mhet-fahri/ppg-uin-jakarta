import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export const TrainingCard = ({ resource, index, onAction }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="glass-card rounded-3xl overflow-hidden border border-white/80 group transition-all duration-300 hover:border-emerald-200/80 shadow-2xl shadow-slate-200/20 hover:shadow-3xl hover:shadow-emerald-100/10"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={resource.thumbnail}
          alt={resource.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-6 left-6">
          <span className="px-4 py-1.5 bg-emerald-600 text-[10px] font-bold text-white rounded-full uppercase tracking-widest shadow-lg shadow-emerald-200">
            Terbuka
          </span>
        </div>
      </div>
      <div className="p-8">
        <div className="text-xs font-bold text-emerald-600 mb-3 uppercase tracking-widest">
          {resource.startDate}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-6 line-clamp-2 leading-snug group-hover:text-emerald-600 transition-colors">
          {resource.title}
        </h3>
        <div className="mt-8 pt-8 border-t border-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold ${resource.category === "Pelatihan" ? "bg-emerald-600" : "bg-blue-600"}`}
            >
              {resource.category ? resource.category[0] : "P"}
            </div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              {resource.category}
            </span>
          </div>
          <button
            onClick={onAction}
            className="px-6 py-3 bg-emerald-600 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-emerald-700 transition-all flex items-center gap-2"
          >
            Daftar Sekarang <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

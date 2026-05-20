import React from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";

export const InspirationCard = ({ resource, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
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
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-xl">
            <Play className="w-6 h-6 fill-current" />
          </div>
        </div>
        {/* Play Icon always visible but smaller if not hovered (optional, but matching image) */}
        {!(index % 2 === 0) && (
          <div className="absolute inset-0 flex items-center justify-center group-hover:hidden transition-all">
            <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-600 shadow-lg">
              <Play className="w-5 h-5 fill-current" />
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-bold text-gray-900 line-clamp-2 mb-2 group-hover:text-emerald-600 transition-colors leading-tight">
          {resource.title}
        </h3>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          Oleh: {resource.author}
        </p>
      </div>
    </motion.div>
  );
};

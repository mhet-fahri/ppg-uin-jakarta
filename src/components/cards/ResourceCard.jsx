import React from "react";
import { motion } from "motion/react";
import { Download } from "lucide-react";

export const ResourceCard = ({ resource, index, onDownload }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-gray-100 border border-gray-100 group hover:border-emerald-100 hover:shadow-2xl hover:shadow-emerald-100/30 transition-all"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={resource.thumbnail}
          alt={resource.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-gray-900 mb-4 line-clamp-1 group-hover:text-emerald-600 transition-colors">
          {resource.title}
        </h3>
        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">
            {resource.subject}
          </span>
          <button
            onClick={() => onDownload(resource.title)}
            className="p-2.5 bg-slate-50 text-gray-400 rounded-xl hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

import React from "react";

export function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/40">
      <div
        className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}
      >
        {icon}
      </div>
      <div className="text-4xl font-bold text-gray-900 mb-2">{value}</div>
      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
        {title}
      </div>
    </div>
  );
}

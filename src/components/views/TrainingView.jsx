import React from "react";
import { ArrowLeft } from "lucide-react";
import { ALL_RESOURCES } from "../../data/mockData";
import { TrainingCard } from "../cards/TrainingCard";

export function TrainingView({ onBack, onEnroll }) {
  const trainingResources = ALL_RESOURCES.filter(
    (r) => r.category === "Pelatihan",
  );
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center gap-3 text-gray-400 hover:text-emerald-600 transition-all mb-16 font-bold uppercase tracking-widest text-[10px]"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali Beranda
        </button>
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-1 bg-emerald-600 rounded-full" />
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
              Digital Learning
            </span>
          </div>
          <h2 className="text-5xl font-medium text-gray-900 mb-6 uppercase tracking-widest leading-tight">
            Pelatihan <br /> Mandiri (MOOC)
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            Tingkatkan kompetensi pedagogik dan profesional Anda melalui
            berbagai modul pelatihan digital yang fleksibel dan terakreditasi.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {trainingResources.map((r, i) => (
            <TrainingCard
              key={r.id}
              resource={r}
              index={i}
              onAction={() => onEnroll(r.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

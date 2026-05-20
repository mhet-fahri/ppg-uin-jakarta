import React from "react";
import { Filter } from "lucide-react";
import { ALL_RESOURCES } from "../../data/mockData";
import { ResourceCard } from "../cards/ResourceCard";

export function BrowseView({
  searchQuery,
  filterSubject,
  filterYear,
  onDownload,
}) {
  const filtered = ALL_RESOURCES.filter((r) => {
    const matchesSearch =
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = !filterSubject || r.subject === filterSubject;
    const matchesYear = !filterYear || r.yearLevel === filterYear;
    return (
      matchesSearch &&
      matchesSubject &&
      matchesYear &&
      r.category === "Resource"
    );
  });

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-1 bg-emerald-600 rounded-full" />
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
                Digital Archive
              </span>
            </div>
            <h2 className="text-5xl font-medium text-gray-900 mb-6 uppercase tracking-widest leading-tight">
              Eksplorasi <br /> Repositori
            </h2>
            <p className="text-gray-500 text-lg max-w-xl">
              Temukan ribuan perangkat pembelajaran digital hasil kurasi ahli
              untuk ekosistem madrasah.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-slate-50 border border-gray-100 rounded-2xl text-xs font-bold text-gray-900 uppercase tracking-widest hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-100 transition-all flex items-center gap-3 shadow-sm">
              <Filter className="w-4 h-4" /> Filter
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {filtered.length > 0 ? (
            filtered.map((r, i) => (
              <ResourceCard
                key={r.id}
                resource={r}
                index={i}
                onDownload={onDownload}
              />
            ))
          ) : (
            <div className="col-span-full py-32 text-center bg-slate-50 rounded-2xl border border-dashed border-gray-200">
              <p className="text-gray-400 font-bold uppercase tracking-widest">
                Tidak ada hasil ditemukan.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

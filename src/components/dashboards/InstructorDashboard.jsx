import React from "react";
import { BookOpen, Plus, ChevronRight, MessageSquare } from "lucide-react";

export function InstructorDashboard() {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-medium text-gray-900 mb-4 uppercase tracking-wider">
              Dashboard Dosen
            </h1>
            <p className="text-gray-500 text-lg">
              Kelola materi pelatihan dan kurasi karya terbaik mahasiswa.
            </p>
          </div>
          <button className="flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-[20px] font-bold uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-100 active:scale-95">
            <Plus className="w-6 h-6" /> Buat Pelatihan
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div className="bg-white rounded-[40px] border border-gray-100 p-10 shadow-2xl shadow-gray-200/40 backdrop-blur-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-4 uppercase tracking-widest">
                <BookOpen className="w-7 h-7 text-emerald-600" /> Pelatihan Anda
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Metodologi PTK Madrasah",
                    students: 450,
                    lessons: 12,
                    status: "Published",
                  },
                  {
                    title: "Inovasi Media Canva & AI",
                    students: 890,
                    lessons: 8,
                    status: "Published",
                  },
                ].map((course, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl group hover:bg-emerald-50 transition-all border border-transparent hover:border-emerald-100"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm border border-gray-100 font-bold text-xl">
                        {course.title.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-lg mb-1">
                          {course.title}
                        </div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          {course.students} Peserta • {course.lessons} Materi
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border bg-emerald-50 text-emerald-600 border-emerald-100">
                        {course.status}
                      </span>
                      <button className="p-3 bg-white rounded-xl text-gray-400 hover:text-emerald-600 transition-all border border-gray-100 shadow-sm">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="bg-white rounded-[40px] border border-gray-100 p-10 shadow-2xl shadow-gray-200/40 text-gray-900">
              <h2 className="text-lg font-bold mb-8 flex items-center gap-4 uppercase tracking-widest">
                <MessageSquare className="w-6 h-6 text-emerald-600" /> Forum
                Ahli
              </h2>
              <div className="space-y-6">
                {[
                  {
                    from: "Herman (Guru)",
                    text: "Mohon izin tanya modul 3...",
                    time: "5m",
                  },
                  {
                    from: "Laila (Guru)",
                    text: "Apakah tugas akhir boleh...",
                    time: "12m",
                  },
                ].map((msg, i) => (
                  <div
                    key={i}
                    className="p-5 bg-slate-50 rounded-3xl border border-transparent hover:border-emerald-100 transition-all cursor-pointer group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">
                        {msg.from}
                      </span>
                      <span className="text-[10px] font-bold text-gray-400">
                        {msg.time} ago
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">
                      {msg.text}
                    </p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-10 py-4 bg-emerald-600 text-white border border-transparent rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all shadow-lg shadow-emerald-100">
                Masuk ke Ruang Diskusi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

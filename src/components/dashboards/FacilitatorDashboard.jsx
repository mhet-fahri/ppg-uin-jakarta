import React from "react";
import { motion } from "motion/react";
import { Activity } from "lucide-react";

export function FacilitatorDashboard() {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-medium text-gray-900 mb-4 uppercase tracking-wider">
            Dashboard Fasilitator
          </h1>
          <p className="text-gray-500 text-lg">
            Monitoring progres harian mahasiswa dan berikan feedback pada tugas
            mereka.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white border border-gray-100 p-8 rounded-[32px] shadow-xl shadow-gray-200/40">
              <div className="text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-[0.2em]">
                Mahasiswa Aktif
              </div>
              <div className="text-5xl font-bold text-emerald-600">128</div>
              <div className="text-xs text-emerald-600 font-bold mt-4 flex items-center gap-2">
                ↑{" "}
                <span className="bg-emerald-50 px-2 py-0.5 rounded-full">
                  12 Baru
                </span>
              </div>
            </div>
            <div className="bg-white border border-gray-100 p-8 rounded-[32px] shadow-xl shadow-gray-200/40">
              <div className="text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-[0.2em]">
                Menunggu Review
              </div>
              <div className="text-5xl font-bold text-gray-900">24</div>
              <div className="text-xs text-gray-400 font-medium mt-4">
                Batas waktu hari ini
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <div className="bg-white border border-gray-100 rounded-[40px] shadow-2xl shadow-gray-200/50 overflow-hidden backdrop-blur-xl">
              <div className="p-10 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <h2 className="text-xl font-bold text-gray-900 uppercase tracking-widest flex items-center gap-4">
                  <Activity className="w-7 h-7 text-emerald-600" /> Pantauan
                  Progres Kelas
                </h2>
                <div className="flex gap-3">
                  <button className="px-6 py-2.5 bg-white text-gray-900 rounded-xl text-xs font-bold uppercase tracking-widest border border-gray-200 hover:bg-gray-50 transition-all shadow-sm">
                    Filter
                  </button>
                  <button className="px-6 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg shadow-emerald-100">
                    Export
                  </button>
                </div>
              </div>
              <div className="p-10">
                <div className="space-y-8">
                  {[
                    {
                      name: "Siti Aminah",
                      progress: 85,
                      task: "Modul 4: Evaluasi Pembelajaran",
                      status: "On Track",
                    },
                    {
                      name: "Budi Santoso",
                      progress: 45,
                      task: "Modul 2: Pengembangan Media",
                      status: "Delayed",
                    },
                    {
                      name: "Rina Wijaya",
                      progress: 92,
                      task: "Final Project: PTK",
                      status: "Excellent",
                    },
                  ].map((student, i) => (
                    <div key={i} className="flex flex-col gap-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-bold text-gray-900 text-lg">
                            {student.name}
                          </span>
                          <span className="ml-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                            {student.task}
                          </span>
                        </div>
                        <span
                          className={`text-[10px] font-bold uppercase px-3 py-1.5 rounded-full ${
                            student.status === "Excellent"
                              ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                              : student.status === "Delayed"
                                ? "bg-red-50 text-red-600 border border-red-100"
                                : "bg-emerald-50 text-emerald-600 border border-emerald-100"
                          }`}
                        >
                          {student.status}
                        </span>
                      </div>
                      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden border border-gray-100 shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${student.progress}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className={`h-full transition-all duration-1000 ${
                            student.progress > 80
                              ? "bg-emerald-500"
                              : student.progress < 50
                                ? "bg-red-500"
                                : "bg-emerald-600"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import {
  User,
  BookOpen,
  Library,
  GraduationCap,
  UserCircle,
  Activity,
} from "lucide-react";
import { StatCard } from "../cards/StatCard";

export function AdminDashboard() {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-medium text-gray-900 mb-4 uppercase tracking-wider">
            Pusat Kendali Admin
          </h1>
          <p className="text-gray-500 text-lg">
            Manajemen sistem, pengguna, dan kontrol kualitas PPG UIN Jakarta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard
            title="Total Mahasiswa"
            value="4,820"
            icon={<User className="w-8 h-8" />}
            color="bg-emerald-500"
          />
          <StatCard
            title="Modul Aktif"
            value="1,240"
            icon={<BookOpen className="w-8 h-8" />}
            color="bg-blue-500"
          />
          <StatCard
            title="Tugas Masuk"
            value="850"
            icon={<Library className="w-8 h-8" />}
            color="bg-amber-500"
          />
          <StatCard
            title="Tingkat Kelulusan"
            value="98%"
            icon={<GraduationCap className="w-8 h-8" />}
            color="bg-emerald-600"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl shadow-gray-200/40 overflow-hidden backdrop-blur-xl">
              <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
                <h2 className="text-xl font-bold text-gray-900 uppercase tracking-widest flex items-center gap-4">
                  <UserCircle className="w-7 h-7 text-emerald-600" /> Verifikasi
                  Dosen
                </h2>
                <button className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest hover:underline">
                  Lihat Semua
                </button>
              </div>
              <div className="divide-y divide-gray-50">
                {[
                  {
                    name: "Dr. Zulkifli, M.Ag",
                    role: "Dosen",
                    email: "zul@uinjkt.ac.id",
                    date: "2 jam lalu",
                  },
                  {
                    name: "Hj. Siti Sarah",
                    role: "Fasilitator",
                    email: "siti@kemenag.go.id",
                    date: "5 jam lalu",
                  },
                ].map((u, i) => (
                  <div
                    key={i}
                    className="p-6 flex items-center justify-between hover:bg-slate-50/50 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-100">
                        {u.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-base font-bold text-gray-900">
                          {u.name}
                        </div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                          {u.email} • {u.role}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="px-5 py-2 bg-emerald-600 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-emerald-100">
                        Setuju
                      </button>
                      <button className="px-5 py-2 bg-red-50 text-red-600 border border-red-100 rounded-xl text-[10px] font-bold uppercase tracking-widest">
                        Tolak
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-10 shadow-2xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_70%_20%,_white_0%,_transparent_50%)]" />
              <h2 className="text-lg font-bold mb-8 flex items-center gap-4 uppercase tracking-widest relative z-10">
                <Activity className="w-6 h-6 text-emerald-400" /> Log Sistem
              </h2>
              <div className="space-y-6 font-mono text-[10px] relative z-10">
                <div className="flex gap-4 p-3 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-emerald-400 font-bold">[OK]</span>
                  <span className="text-slate-200">
                    Database sync completed
                  </span>
                </div>
                <div className="flex gap-4 p-3 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-amber-400 font-bold">[ACC]</span>
                  <span className="text-slate-200">
                    New admin login detected
                  </span>
                </div>
                <div className="flex gap-4 p-3 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-blue-400 font-bold">[AI]</span>
                  <span className="text-slate-200">Model training resumed</span>
                </div>
              </div>
              <button className="w-full mt-10 py-4 bg-white/5 hover:bg-white hover:text-emerald-900 border border-white/10 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all relative z-10 font-bold">
                Buka System Logs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { motion } from "motion/react";

const provinceData = [
  { name: "Jawa Barat", students: 1250 },
  { name: "DKI Jakarta", students: 980 },
  { name: "Banten", students: 850 },
  { name: "Jawa Tengah", students: 720 },
  { name: "Jawa Timur", students: 680 },
  { name: "Sumatera Utara", students: 450 },
];

const subjectData = [
  { name: "PAI", value: 450 },
  { name: "Bahasa Arab", value: 150 },
  { name: "Guru Kelas MI", value: 250 },
  { name: "Guru Kelas RA", value: 120 },
  { name: "Fikih", value: 80 },
];

const COLORS = ["#0d9488", "#2563eb", "#3b82f6", "#14b8a6", "#6366f1"];

export function PublicStats() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-600 text-[10px] font-black uppercase tracking-widest mb-6">
            <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-pulse" />
            Statistik Real-Time
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 uppercase tracking-widest leading-tight"
          >
            Pertumbuhan <br />{" "}
            <span className="text-emerald-600">Ekosistem Digital</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Pantau sebaran mahasiswa dan distribusi kompetensi pendidik dalam
            program PPG UIN Syarif Hidayatullah Jakarta.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Province Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass-card p-10 rounded-3xl shadow-2xl shadow-slate-200/30 border border-white/80 group hover:border-emerald-200/80 transition-all duration-300 hover:shadow-emerald-100/10"
          >
            <h3 className="text-xl font-medium mb-10 text-gray-900 flex items-center gap-4 uppercase tracking-widest">
              <span className="w-2 h-8 bg-emerald-600 rounded-full shadow-lg shadow-emerald-100"></span>
              Sebaran Provinsi
            </h3>
            <div className="h-[360px] w-full">
              {isReady ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={provinceData}
                    layout="vertical"
                    margin={{ left: 20, right: 30 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      horizontal={true}
                      vertical={false}
                      stroke="#f1f5f9"
                    />
                    <XAxis type="number" hide />
                    <YAxis
                      dataKey="name"
                      type="category"
                      axisLine={false}
                      tickLine={false}
                      fontSize={11}
                      width={100}
                      fontWeight="700"
                      tick={{ fill: "#64748b" }}
                    />

                    <Tooltip
                      cursor={{ fill: "#f8fafc", radius: 8 }}
                      contentStyle={{
                        borderRadius: "20px",
                        border: "none",
                        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
                        padding: "15px",
                      }}
                    />

                    <Bar
                      dataKey="students"
                      fill="#2563eb"
                      radius={[0, 8, 8, 0]}
                      barSize={24}
                    />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full w-full flex items-center justify-center text-gray-300 animate-pulse text-xs font-bold uppercase tracking-widest">
                  Memuat Grafik...
                </div>
              )}
            </div>
          </motion.div>

          {/* Subject Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-10 rounded-3xl shadow-2xl shadow-slate-200/30 border border-white/80 group hover:border-emerald-200/80 transition-all duration-300 hover:shadow-emerald-100/10"
          >
            <h3 className="text-xl font-medium mb-10 text-gray-900 flex items-center gap-4 uppercase tracking-widest">
              <span className="w-2 h-8 bg-teal-600 rounded-full shadow-lg shadow-teal-100"></span>
              Distribusi Mapel
            </h3>
            <div className="h-[360px] w-full">
              {isReady ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={subjectData}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={110}
                      paddingAngle={8}
                      dataKey="value"
                    >
                      {subjectData.map((_entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        borderRadius: "20px",
                        border: "none",
                        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
                        padding: "15px",
                      }}
                    />

                    <Legend
                      verticalAlign="bottom"
                      height={36}
                      iconType="circle"
                      wrapperStyle={{
                        fontSize: "11px",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "#64748b",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full w-full flex items-center justify-center text-gray-300 animate-pulse text-xs font-bold uppercase tracking-widest">
                  Memuat Grafik...
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

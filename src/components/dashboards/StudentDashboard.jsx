import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  Award,
  Upload,
  Share2,
  Sparkles,
  Send,
  FileText,
  CheckCircle2,
  Loader2,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import { generateContent } from "../../lib/ai";

export function StudentDashboard({ userEmail, addToast }) {
  const [activeTab, setActiveTab] = useState("learning");
  // States for forms
  const [portfolioTitle, setPortfolioTitle] = useState("");
  const [portfolioDesc, setPortfolioDesc] = useState("");
  const [portfolioType, setPortfolioType] = useState("Document");
  const [resourceTitle, setResourceTitle] = useState("");
  const [resourceDesc, setResourceDesc] = useState("");
  const [resourceSubject, setResourceSubject] = useState("PAI");
  // AI assistant states
  const [aiPrompt, setAiPrompt] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  // Local lists for demo
  const [myPortfolios, setMyPortfolios] = useState([
    {
      id: "1",
      title: "Laporan Penelitian Tindakan Kelas (PTK) - PAI",
      type: "Document",
      date: "10 Mei 2026",
      status: "Terverifikasi",
    },
    {
      id: "2",
      title: "Video Praktik Pembelajaran Interaktif PAI Klasikal",
      type: "Video",
      date: "14 Mei 2026",
      status: "Menunggu Review",
    },
  ]);

  const [myResources, setMyResources] = useState([
    {
      id: "1",
      title: "RPP Kurikulum Merdeka - PAI Bab 4 Kelas IV",
      subject: "PAI",
      date: "08 Mei 2026",
    },
  ]);

  const handlePortfolioSubmit = (e) => {
    e.preventDefault();
    if (!portfolioTitle || !portfolioDesc) {
      addToast("Harap isi semua field portofolio", "error");
      return;
    }
    const newPort = {
      id: Date.now().toString(),
      title: portfolioTitle,
      type: portfolioType,
      date: "Hari ini",
      status: "Menunggu Review",
    };
    setMyPortfolios([newPort, ...myPortfolios]);
    addToast("Bukti Karya berhasil diunggah dan siap direview!", "success");
    setPortfolioTitle("");
    setPortfolioDesc("");
  };

  const handleResourceSubmit = (e) => {
    e.preventDefault();
    if (!resourceTitle || !resourceDesc) {
      addToast("Harap isi semua field modul", "error");
      return;
    }
    const newRes = {
      id: Date.now().toString(),
      title: resourceTitle,
      subject: resourceSubject,
      date: "Hari ini",
    };
    setMyResources([newRes, ...myResources]);
    addToast("Modul Ajar berhasil dibagikan ke Repositori Guru!", "success");
    setResourceTitle("");
    setResourceDesc("");
  };

  // AI Service Call with robust locally simulated fallback
  const handleAskAI = async () => {
    if (!aiPrompt.trim()) return;
    const userMsg = aiPrompt;
    setChatHistory((prev) => [...prev, { role: "user", text: userMsg }]);
    setAiPrompt("");
    setIsAiLoading(true);

    try {
      // Call standard generateContent
      let resultText = "";
      try {
        resultText = await generateContent(userMsg);
      } catch (err) {
        // Fallback simulated intelligent responses when API key is placeholder
        console.warn("Using simulated offline AI fallback");
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const lower = userMsg.toLowerCase();
        if (lower.includes("ptk") || lower.includes("tindakan kelas")) {
          resultText = `### Rekomendasi Judul & Metode Penelitian Tindakan Kelas (PTK) PAI:\n\n1. **"Penerapan Model Pembelajaran Project-Based Learning (PjBL) untuk Meningkatkan Keaktifan Belajar Peserta Didik pada Materi Fikih di Kelas V SDN 01 Jakarta"**\n2. **"Upaya Meningkatkan Pemahaman Kosakata Bahasa Arab Melalui Media Flash Cards Interaktif pada Siswa Madrasah Ibtidaiyah"**\n\n**Metodologi PTK yang disarankan:**\n- **Model**: Kemmis & McTaggart (Perencanaan, Tindakan, Observasi, Refleksi).\n- **Siklus**: Minimal 2 siklus dengan masing-masing 2 pertemuan.\n- **Instrumen**: Lembar observasi aktivitas guru/siswa, tes kognitif, dan angket motivasi.`;
        } else if (
          lower.includes("rpp") ||
          lower.includes("modul ajar") ||
          lower.includes("kurikulum merdeka")
        ) {
          resultText = `### Draf Modul Ajar (RPP) Kurikulum Merdeka Singkat\n\n**Mata Pelajaran:** Pendidikan Agama Islam (PAI)\n**Fase/Kelas:** Fase B / Kelas IV\n**Materi Utama:** Meneladani Akhlak Mulia Asmaul Husna\n\n**Tujuan Pembelajaran:**\n1. Peserta didik dapat menjelaskan arti Asmaul Husna: *Al-Malik, Al-Aziz, Al-Quddus, As-Salam, Al-Mu'min*.\n2. Peserta didik mampu mendemonstrasikan perilaku mandiri dan menjaga kebersihan sebagai refleksi dari pemahaman Asmaul Husna.\n\n**Kegiatan Pembelajaran (Model PjBL):**\n- **Pendahuluan (15m):** Apersepsi, pembacaan surat pendek, penjelasan tujuan.\n- **Inti (50m):** Peserta didik berkelompok membuat kaligrafi kreatif dari salah satu Asmaul Husna beserta artinya, lalu mempresentasikannya di depan kelas.\n- **Penutup (15m):** Refleksi bersama, tes formatif lisan, doa penutup.`;
        } else {
          resultText = `Halo! Saya adalah **Gemini Asisten Akademik PPG UIN Jakarta**.\n\nSaya siap membantu Anda dalam:\n- Menyusun draf Modul Ajar (RPP) Kurikulum Merdeka.\n- Memberikan inspirasi judul & kerangka Penelitian Tindakan Kelas (PTK).\n- Membuat refleksi materi modul pembelajaran.\n- Memberikan ide media pembelajaran interaktif.\n\nSilakan ajukan pertanyaan yang lebih spesifik mengenai modul, RPP, atau PTK Anda agar saya dapat memberikan hasil yang optimal!`;
        }
      }
      setChatHistory((prev) => [...prev, { role: "model", text: resultText }]);
    } catch (e) {
      addToast("Gagal memproses permintaan AI", "error");
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-12 translate-x-12"></div>
          <div className="relative z-10">
            <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4 inline-block">
              Portal Mahasiswa PPG
            </span>
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider leading-tight">
              Pusat Belajar & Karya
            </h1>
            <p className="text-emerald-100 text-lg mt-2 font-medium">
              Selamat datang, {userEmail.split("@")[0]} • Sukseskan sertifikasi
              pendidik Anda.
            </p>
          </div>
          <div className="flex gap-4 relative z-10">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-[28px] text-center shadow-lg">
              <div className="text-[10px] font-bold text-emerald-200 uppercase tracking-widest mb-1">
                Status Modul
              </div>
              <div className="text-3xl font-extrabold">3 / 4 Selesai</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-[28px] text-center shadow-lg">
              <div className="text-[10px] font-bold text-emerald-200 uppercase tracking-widest mb-1">
                Bukti Karya
              </div>
              <div className="text-3xl font-extrabold">
                {myPortfolios.length} Karya
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-4 mb-10 border-b border-gray-200 pb-6">
          <button
            onClick={() => setActiveTab("learning")}
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all ${activeTab === "learning" ? "bg-emerald-600 text-white shadow-xl shadow-emerald-100" : "bg-white text-gray-500 border border-gray-100 hover:bg-slate-50"}`}
          >
            <BookOpen className="w-5 h-5" /> Jalur Belajar (Learning Path)
          </button>

          <button
            onClick={() => setActiveTab("portfolio")}
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all ${activeTab === "portfolio" ? "bg-emerald-600 text-white shadow-xl shadow-emerald-100" : "bg-white text-gray-500 border border-gray-100 hover:bg-slate-50"}`}
          >
            <Upload className="w-5 h-5" /> Unggah Bukti Karya
          </button>

          <button
            onClick={() => setActiveTab("share")}
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all ${activeTab === "share" ? "bg-emerald-600 text-white shadow-xl shadow-emerald-100" : "bg-white text-gray-500 border border-gray-100 hover:bg-slate-50"}`}
          >
            <Share2 className="w-5 h-5" /> Bagikan Modul Ajar
          </button>

          <button
            onClick={() => setActiveTab("ai")}
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all ${activeTab === "ai" ? "bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-xl shadow-emerald-100" : "bg-white text-gray-500 border border-gray-100 hover:bg-slate-50"}`}
          >
            <Sparkles className="w-5 h-5" /> Tanya Asisten AI
          </button>
        </div>

        {/* Tab Contents */}
        <AnimatePresence mode="wait">
          {activeTab === "learning" && (
            <motion.div
              key="learning"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-10"
            >
              {/* Learning Path Track */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-[40px] border border-gray-100 p-10 shadow-2xl shadow-gray-200/40">
                  <h2 className="text-xl font-bold text-gray-900 mb-8 uppercase tracking-widest flex items-center gap-4">
                    <BookOpen className="w-7 h-7 text-emerald-600" /> Progres
                    Modul Akademik
                  </h2>
                  <div className="space-y-6">
                    {[
                      {
                        code: "PPG-401",
                        title: "Pendalaman Materi Pedagogik & Profesional",
                        progress: 100,
                        status: "Lulus",
                      },
                      {
                        code: "PPG-402",
                        title: "Desain Pengembangan Perangkat Pembelajaran",
                        progress: 100,
                        status: "Lulus",
                      },
                      {
                        code: "PPG-403",
                        title: "Uji Komprehensif & Refleksi Pembelajaran",
                        progress: 100,
                        status: "Lulus",
                      },
                      {
                        code: "PPG-404",
                        title: "Praktik Pengalaman Lapangan (PPL) Real Class",
                        progress: 65,
                        status: "Sedang Berjalan",
                      },
                    ].map((mod, idx) => (
                      <div
                        key={idx}
                        className="p-6 bg-slate-50 rounded-3xl border border-transparent hover:border-emerald-100 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-[10px] font-bold px-2.5 py-1 bg-white border border-gray-200 rounded-lg font-mono text-gray-500">
                              {mod.code}
                            </span>
                            <span
                              className={`text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider ${mod.status === "Lulus" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600 animate-pulse"}`}
                            >
                              {mod.status}
                            </span>
                          </div>
                          <div className="font-bold text-gray-900 text-lg mb-4">
                            {mod.title}
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-emerald-600 rounded-full"
                                style={{ width: `${mod.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-xs font-bold text-gray-700">
                              {mod.progress}%
                            </span>
                          </div>
                        </div>
                        <button className="px-6 py-3.5 bg-white border border-gray-100 hover:bg-emerald-600 hover:text-white rounded-2xl text-xs font-bold uppercase tracking-widest transition-all shadow-sm">
                          Buka Materi
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Certificate Widget */}
              <div className="space-y-8">
                <div className="bg-slate-900 text-white rounded-[40px] border border-slate-800 p-10 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-2xl -translate-y-12 translate-x-12"></div>
                  <h2 className="text-xl font-bold mb-8 uppercase tracking-widest flex items-center gap-4 relative z-10">
                    <Award className="w-7 h-7 text-emerald-400" /> Sertifikasi
                    Anda
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 relative z-10">
                    E-Sertifikat kelulusan mata kuliah PPG akan diterbitkan
                    secara otomatis setelah verifikasi akhir dosen dan
                    fasilitator.
                  </p>
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/5 relative z-10 flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-emerald-400">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                        Sertifikat Kelulusan Pendidik
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">
                        Status: Menunggu PPL Selesai
                      </div>
                    </div>
                  </div>
                  <button
                    disabled
                    className="w-full mt-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 relative z-10 cursor-not-allowed"
                  >
                    Unduh Sertifikat (Belum Tersedia)
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "portfolio" && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-10"
            >
              {/* Submission Form */}
              <div className="lg:col-span-2 bg-white rounded-[40px] border border-gray-100 p-10 shadow-2xl shadow-gray-200/40">
                <h2 className="text-xl font-bold text-gray-900 mb-8 uppercase tracking-widest flex items-center gap-4">
                  <Upload className="w-7 h-7 text-emerald-600" /> Unggah Bukti
                  Karya (Portfolio)
                </h2>
                <form onSubmit={handlePortfolioSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                      Judul Bukti Karya
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Laporan PTK Fikih Model Kooperatif TGT"
                      className="w-full px-6 py-4 bg-slate-50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all font-medium text-sm text-gray-900"
                      value={portfolioTitle}
                      onChange={(e) => setPortfolioTitle(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                        Tipe Dokumen
                      </label>
                      <select
                        className="w-full px-6 py-4 bg-slate-50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all font-bold text-xs uppercase tracking-widest text-gray-600"
                        value={portfolioType}
                        onChange={(e) => setPortfolioType(e.target.value)}
                      >
                        <option value="Document">Dokumen / PDF</option>
                        <option value="Video">Video Pembelajaran</option>
                        <option value="Interactive">
                          Aplikasi / Media Interaktif
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                        Tautan Berkas (Google Drive / YouTube)
                      </label>
                      <input
                        type="url"
                        placeholder="https://drive.google.com/..."
                        className="w-full px-6 py-4 bg-slate-50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all font-medium text-sm text-gray-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                      Deskripsi Singkat / Abstraksi
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tuliskan ringkasan hasil karya, tujuan pembelajaran, dan dampak ke siswa..."
                      className="w-full px-6 py-4 bg-slate-50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all font-medium text-sm text-gray-900 resize-none"
                      value={portfolioDesc}
                      onChange={(e) => setPortfolioDesc(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-xl shadow-emerald-100"
                  >
                    Kirim Bukti Karya
                  </button>
                </form>
              </div>

              {/* Submissions List */}
              <div className="bg-white rounded-[40px] border border-gray-100 p-10 shadow-2xl shadow-gray-200/40">
                <h2 className="text-lg font-bold mb-8 uppercase tracking-widest flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" /> Riwayat
                  Portofolio Anda
                </h2>
                <div className="space-y-6">
                  {myPortfolios.map((p) => (
                    <div
                      key={p.id}
                      className="p-5 bg-slate-50 rounded-3xl border border-transparent hover:border-emerald-100 transition-all"
                    >
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <span
                          className={`text-[9px] font-extrabold uppercase px-2.5 py-1 rounded-full border ${p.status === "Terverifikasi" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-amber-50 text-amber-600 border-amber-100 animate-pulse"}`}
                        >
                          {p.status}
                        </span>
                        <span className="text-[10px] text-gray-400 font-bold">
                          {p.date}
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm mb-2">
                        {p.title}
                      </h3>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                        {p.type}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "share" && (
            <motion.div
              key="share"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-10"
            >
              {/* Share Resource Form */}
              <div className="lg:col-span-2 bg-white rounded-[40px] border border-gray-100 p-10 shadow-2xl shadow-gray-200/40">
                <h2 className="text-xl font-bold text-gray-900 mb-8 uppercase tracking-widest flex items-center gap-4">
                  <Share2 className="w-7 h-7 text-emerald-600" /> Bagikan Modul
                  Ajar (Learning Resources)
                </h2>
                <form onSubmit={handleResourceSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                      Nama Modul Ajar
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Modul Pembelajaran Fikih Kelas VIII Semester Ganjil"
                      className="w-full px-6 py-4 bg-slate-50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all font-medium text-sm text-gray-900"
                      value={resourceTitle}
                      onChange={(e) => setResourceTitle(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                        Mata Pelajaran (Subject)
                      </label>
                      <select
                        className="w-full px-6 py-4 bg-slate-50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all font-bold text-xs uppercase tracking-widest text-gray-600"
                        value={resourceSubject}
                        onChange={(e) => setResourceSubject(e.target.value)}
                      >
                        <option value="PAI">PAI</option>
                        <option value="Bahasa Arab">Bahasa Arab</option>
                        <option value="Guru Kelas MI">Guru Kelas MI</option>
                        <option value="Guru Kelas RA">Guru Kelas RA</option>
                        <option value="Fikih">Fikih</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                        Tautan Dokumen PDF
                      </label>
                      <input
                        type="url"
                        placeholder="https://drive.google.com/file/d/..."
                        className="w-full px-6 py-4 bg-slate-50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all font-medium text-sm text-gray-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                      Catatan Penggunaan
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Petunjuk penggunaan modul ini oleh guru lain..."
                      className="w-full px-6 py-4 bg-slate-50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all font-medium text-sm text-gray-900 resize-none"
                      value={resourceDesc}
                      onChange={(e) => setResourceDesc(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-xl shadow-emerald-100"
                  >
                    Bagikan Modul Sekarang
                  </button>
                </form>
              </div>

              {/* Shared List */}
              <div className="bg-white rounded-[40px] border border-gray-100 p-10 shadow-2xl shadow-gray-200/40">
                <h2 className="text-lg font-bold mb-8 uppercase tracking-widest flex items-center gap-4">
                  <TrendingUp className="w-6 h-6 text-emerald-600" /> Kontribusi
                  Modul Anda
                </h2>
                <div className="space-y-6">
                  {myResources.map((r) => (
                    <div
                      key={r.id}
                      className="p-5 bg-slate-50 rounded-3xl border border-transparent hover:border-emerald-100 transition-all flex justify-between items-center gap-4"
                    >
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm mb-1">
                          {r.title}
                        </h3>
                        <span className="text-[9px] font-extrabold uppercase px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-md border border-emerald-100">
                          {r.subject}
                        </span>
                      </div>
                      <span className="text-[10px] text-gray-400 font-bold shrink-0">
                        {r.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "ai" && (
            <motion.div
              key="ai"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="bg-white rounded-[40px] border border-gray-100 p-10 shadow-2xl shadow-gray-200/40 min-h-[500px] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-6 mb-8">
                  <h2 className="text-xl font-bold text-gray-900 uppercase tracking-widest flex items-center gap-4">
                    <Sparkles className="w-7 h-7 text-emerald-600" /> Asisten
                    Akademik AI (Gemini)
                  </h2>
                  <span className="px-3.5 py-1 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-[9px] font-extrabold rounded-full uppercase tracking-wider shadow-md animate-pulse">
                    Gemini 1.5 Flash
                  </span>
                </div>

                {/* Prompt Recommendations */}
                {chatHistory.length === 0 && (
                  <div className="mb-10">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                      Rekomendasi Pertanyaan
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {[
                        "Ide topik Penelitian Tindakan Kelas (PTK) PAI",
                        "Draf Modul Ajar Kurikulum Merdeka PAI Kelas 4",
                        "Cara menyusun refleksi pembelajaran yang efektif",
                      ].map((rec, i) => (
                        <button
                          key={i}
                          onClick={() => setAiPrompt(rec)}
                          className="px-6 py-3 bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-100 text-xs font-bold text-gray-600 rounded-2xl border border-gray-100 transition-all text-left"
                        >
                          {rec}{" "}
                          <ChevronRight className="w-4 h-4 inline ml-1 shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Messages Board */}
                <div className="space-y-6 max-h-[350px] overflow-y-auto mb-8 pr-2">
                  {chatHistory.map((chat, idx) => (
                    <div
                      key={idx}
                      className={`flex ${chat.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-2xl px-6 py-4 rounded-[24px] text-sm leading-relaxed ${
                          chat.role === "user"
                            ? "bg-emerald-600 text-white font-medium rounded-tr-none"
                            : "bg-slate-50 text-gray-800 border border-gray-100 rounded-tl-none prose prose-slate"
                        }`}
                      >
                        <div className="whitespace-pre-wrap">{chat.text}</div>
                      </div>
                    </div>
                  ))}
                  {isAiLoading && (
                    <div className="flex justify-start">
                      <div className="bg-slate-50 text-gray-400 border border-gray-100 px-6 py-4 rounded-[24px] rounded-tl-none text-xs font-bold uppercase tracking-widest flex items-center gap-3">
                        <Loader2 className="w-4 h-4 animate-spin text-emerald-600" />{" "}
                        Asisten AI sedang mengetik...
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Chat Input */}
              <div className="relative group mt-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-[24px] blur opacity-0 group-focus-within:opacity-100 transition duration-500"></div>
                <div className="relative flex items-center bg-slate-50 rounded-[20px] p-2 border border-gray-100 focus-within:bg-white focus-within:border-emerald-500/30 transition-all">
                  <input
                    type="text"
                    placeholder="Tanya apa saja tentang tugas modul, RPP, atau PTK Anda..."
                    className="flex-1 w-full px-6 py-4 bg-transparent text-gray-900 outline-none text-sm font-medium"
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAskAI()}
                    disabled={isAiLoading}
                  />

                  <button
                    onClick={handleAskAI}
                    disabled={isAiLoading || !aiPrompt.trim()}
                    className="w-12 h-12 bg-emerald-600 hover:bg-emerald-500 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white rounded-xl flex items-center justify-center shadow-lg transition-all active:scale-95 shrink-0"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

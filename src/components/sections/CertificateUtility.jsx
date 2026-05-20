import React, { useState } from "react";

export function CertificateUtility({ onVerify }) {
  const [certId, setCertId] = useState("");
  return (
    <section className="py-24 bg-[#0a0f1a] overflow-hidden relative border-y border-slate-800">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wider">
              Cek Keaslian <br className="hidden lg:inline" />
              <span className="text-emerald-500">Sertifikat</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-xl">
              Masukkan Nomor Sertifikat untuk memverifikasi keaslian dokumen
              Pelatihan Anda.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row w-full max-w-lg gap-4">
            <input
              type="text"
              placeholder="Contoh: CERT/PPG/2026/001"
              className="flex-1 px-8 py-5 rounded-2xl bg-slate-900/50 backdrop-blur-md text-white placeholder:text-slate-500 outline-none border border-white/10 focus:border-emerald-500/50 transition-all font-mono text-sm"
              value={certId}
              onChange={(e) => setCertId(e.target.value)}
            />

            <button
              onClick={() => onVerify(certId)}
              className="px-10 py-5 bg-emerald-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-900/20 flex items-center justify-center gap-3 active:scale-95 sm:w-auto w-full"
            >
              Verifikasi Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Newsletter() {
  return (
    <section className="py-24 bg-emerald-600 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wider">
              Berlangganan
            </h2>
            <p className="text-emerald-100 text-lg max-w-xl">
              Dapatkan update terbaru mengenai pelatihan, modul ajar, dan info
              akademik PPG langsung di email Anda.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row w-full max-w-lg gap-4">
            <input
              type="email"
              placeholder="Alamat email Anda..."
              className="flex-1 px-8 py-5 rounded-2xl bg-emerald-700/50 text-white placeholder:text-emerald-300 outline-none border border-emerald-500/30 focus:border-white transition-all font-medium"
            />
            <button className="px-10 py-5 bg-white text-emerald-600 rounded-2xl font-bold uppercase tracking-widest hover:bg-emerald-50 transition-all shadow-xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

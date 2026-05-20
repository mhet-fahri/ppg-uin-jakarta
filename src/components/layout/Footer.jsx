import React from "react";
import { Library, Globe, Users } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 text-gray-500 py-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-emerald-100 rotate-6">
                <Library className="w-7 h-7" />
              </div>
              <span className="text-2xl font-bold text-gray-900 tracking-tighter uppercase">
                PPG UIN Jakarta
              </span>
            </div>
            <p className="text-gray-500 max-w-sm text-lg leading-relaxed">
              Fakultas Ilmu Tarbiyah dan Keguruan, UIN Syarif Hidayatullah
              Jakarta. Menuju ekosistem digital pendidikan Islam yang unggul.
            </p>
          </div>
          <div>
            <h4 className="text-gray-900 font-bold text-xs uppercase tracking-[0.2em] mb-8">
              Portal
            </h4>
            <ul className="space-y-3 font-bold text-sm">
              <li>
                <a
                  href="#"
                  className="block hover:text-emerald-600 transition-colors leading-relaxed py-1"
                >
                  Digital Technologies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block hover:text-emerald-600 transition-colors leading-relaxed py-1"
                >
                  Sustainability
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-bold text-xs uppercase tracking-[0.2em] mb-8">
              Dukungan
            </h4>
            <ul className="space-y-3 font-bold text-sm">
              <li>
                <a
                  href="#"
                  className="block hover:text-emerald-600 transition-colors leading-relaxed py-1"
                >
                  Hubungi Kami
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block hover:text-emerald-600 transition-colors leading-relaxed py-1"
                >
                  Pusat Bantuan
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-bold text-xs uppercase tracking-[0.2em] mb-8">
              Social
            </h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all cursor-pointer shadow-sm">
                <Globe className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all cursor-pointer shadow-sm">
                <Users className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          <p>
            © 2026 PPG UIN Syarif Hidayatullah Jakarta. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

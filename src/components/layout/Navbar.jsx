import React, { useState } from "react";
import {
  Menu,
  X,
  Bell,
  User,
  LayoutDashboard,
  UserCircle,
  Settings,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar({
  user,
  onLogout,
  onNavigate,
  currentView,
  showUserMenu,
  setShowUserMenu,
  getRoleHome,
  addToast,
  onLogin,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => onNavigate("HOME")}
          >
            <div className="flex items-center justify-center w-10 h-10 transition-transform group-hover:scale-110">
              <img
                src="/logo-uin.png"
                alt="UIN Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-2xl font-bold tracking-tight text-gray-900 line-clamp-1">
              PPG UIN Jakarta
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["HOME", "BROWSE", "TRAINING", "PORTFOLIO", "COMMUNITY"].map(
              (v) => (
                <button
                  key={v}
                  onClick={() => onNavigate(v)}
                  className={`font-medium transition-colors ${currentView === v ? "text-emerald-600" : "text-gray-500 hover:text-emerald-600"}`}
                >
                  {v === "HOME"
                    ? "Beranda"
                    : v.charAt(0) + v.slice(1).toLowerCase().replace("_", " ")}
                </button>
              ),
            )}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Bell className="w-5 h-5" />
            </button>
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-3 p-1 pr-3 hover:bg-emerald-50 rounded-2xl transition-all border border-transparent hover:border-emerald-100"
                >
                  <div className="w-10 h-10 rounded-full border-2 border-emerald-100 overflow-hidden shadow-sm bg-slate-50 flex items-center justify-center">
                    {user.user_metadata?.avatar_url ? (
                      <img
                        src={user.user_metadata.avatar_url}
                        alt="User Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                  <div className="hidden sm:flex flex-col items-start text-left">
                    <span className="text-xs font-bold text-gray-900 leading-none">
                      {user.user_metadata?.full_name ||
                        user.email?.split("@")[0]}
                    </span>
                    <span className="text-[10px] text-emerald-600 font-medium uppercase tracking-wider mt-1">
                      {user.email === "ppg@admin.com"
                        ? "Administrator"
                        : user.email?.includes("dosen") ||
                            user.email === "ppg@dosen.com"
                          ? "Dosen"
                          : user.email === "fasilitator@ppg.com"
                            ? "Fasilitator"
                            : "Mahasiswa"}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform ${showUserMenu ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {showUserMenu && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setShowUserMenu(false)}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-20 overflow-hidden"
                      >
                        <div className="px-4 py-3 border-b border-gray-50 mb-1 text-left">
                          <p className="text-xs text-gray-400 font-medium">
                            Masuk sebagai
                          </p>
                          <p className="text-sm font-bold text-gray-900 truncate">
                            {user.email}
                          </p>
                        </div>

                        <button
                          onClick={() => {
                            onNavigate(getRoleHome());
                            setShowUserMenu(false);
                          }}
                          className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors group"
                        >
                          <LayoutDashboard className="w-4 h-4" />
                          <span className="font-medium">Beranda Dashboard</span>
                        </button>

                        <button
                          onClick={() => {
                            addToast("Fitur Edit Profil segera hadir", "info");
                            setShowUserMenu(false);
                          }}
                          className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          <UserCircle className="w-4 h-4" />
                          <span className="font-medium">Edit Profil</span>
                        </button>

                        <button
                          onClick={() => {
                            addToast("Pengaturan sistem segera hadir", "info");
                            setShowUserMenu(false);
                          }}
                          className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          <Settings className="w-4 h-4" />
                          <span className="font-medium">Pengaturan</span>
                        </button>

                        <div className="h-px bg-gray-50 my-1" />

                        <button
                          onClick={() => {
                            onLogout();
                            setShowUserMenu(false);
                          }}
                          className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors text-left"
                        >
                          <LogOut className="w-4 h-4" />
                          <span className="font-bold">Logout</span>
                        </button>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                onClick={onLogin}
                className="px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                Login Dosen/Mhs
              </button>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {["HOME", "BROWSE", "TRAINING", "PORTFOLIO", "COMMUNITY"].map(
                (v) => (
                  <button
                    key={v}
                    onClick={() => {
                      onNavigate(v);
                      setIsOpen(false);
                    }}
                    className="block w-full text-left font-bold text-gray-600 hover:text-emerald-600"
                  >
                    {v === "HOME"
                      ? "Beranda"
                      : v.charAt(0) +
                        v.slice(1).toLowerCase().replace("_", " ")}
                  </button>
                ),
              )}
              {!user && (
                <button
                  onClick={() => {
                    onLogin();
                    setIsOpen(false);
                  }}
                  className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl"
                >
                  Login Dosen/Mhs
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

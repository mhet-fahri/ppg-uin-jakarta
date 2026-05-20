import React from "react";
import {
  BookOpen,
  Calculator,
  Microscope,
  History,
  Lightbulb,
  Languages,
  Palette,
  Globe,
} from "lucide-react";

export const ALL_RESOURCES = [
  {
    id: "t1",
    title: "Pelatihan Multi Media Pembelajaran",
    description:
      "Pelatihan pembuatan media pembelajaran berbasis Canva dan AI untuk guru Madrasah.",
    type: "Course",
    subject: "Technologies",
    yearLevel: "Guru Madrasah",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400&h=250&auto=format&fit=crop",
    rating: 4.9,
    instructor: "Tim Inovasi PPG",
    startDate: "15 Mei 2026",
    category: "Pelatihan",
    enrolledCount: 1205,
  },
  {
    id: "t2",
    title: "Metodologi Penelitian Tindakan Kelas (PTK)",
    description:
      "Panduan praktis menyusun PTK untuk syarat kenaikan pangkat dan profesionalisme.",
    type: "Course",
    subject: "Science",
    yearLevel: "Pengawas",
    thumbnail:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400&h=250&auto=format&fit=crop",
    rating: 4.8,
    instructor: "Dr. Ahmad Fauzi",
    startDate: "20 Mei 2026",
    category: "Pelatihan",
    enrolledCount: 850,
  },
  {
    id: "t3",
    title: "Literasi Digital dan Keamanan Siber",
    description:
      "Mengenal etika digital dan menjaga privasi dalam ekosistem pendidikan madrasah.",
    type: "Course",
    subject: "Technologies",
    yearLevel: "Tenaga Kependidikan",
    thumbnail:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&h=250&auto=format&fit=crop",
    rating: 4.7,
    instructor: "BSSN & Kemenag",
    startDate: "25 Juni 2026",
    category: "Pelatihan",
    enrolledCount: 540,
  },
  {
    id: "v1",
    title: "Menciptakan Kelas Yang Inklusif",
    description:
      "Video inspirasi singkat tentang bagaimana menangani keberagaman di kelas madrasah.",
    type: "Video",
    subject: "Psychology",
    yearLevel: "Semua Tingkat",
    thumbnail:
      "https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?q=80&w=400&h=250&auto=format&fit=crop",
    rating: 5.0,
    category: "Inspirasi",
    author: "Siti Aminah, M.Pd",
  },
  {
    id: "v2",
    title: "Project-Based Learning di MI",
    description:
      "Dokumentasi implementasi kurikulum merdeka pada tingkat Madrasah Ibtidaiyah.",
    type: "Video",
    subject: "Technologies",
    yearLevel: "Guru Madrasah",
    thumbnail:
      "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=400&h=250&auto=format&fit=crop",
    rating: 4.9,
    category: "Inspirasi",
    author: "H. Lukman Hakim",
  },
  {
    id: "p1",
    title: "Modul Ajar Fikih Berbasis Projek",
    description: "Contoh modul ajar yang telah diuji coba di MAN 1 Jakarta.",
    type: "Document",
    subject: "History",
    yearLevel: "Mahasiswa PPG",
    thumbnail:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=400&h=250&auto=format&fit=crop",
    rating: 4.7,
    category: "Portfolio",
    author: "Ustadz Ridwan",
    likes: 342,
  },
  {
    id: "p2",
    title: "Media Pembelajaran Flash Card Arab",
    description:
      "Digital tools untuk mempercepat hafalan kosakata bahasa arab anak RA.",
    type: "Interactive",
    subject: "Languages",
    yearLevel: "Guru Madrasah",
    thumbnail:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400&h=250&auto=format&fit=crop",
    rating: 4.8,
    category: "Portfolio",
    author: "Khairunisa, S.Ag",
    likes: 125,
  },
  {
    id: "1",
    title: "Strategi Pembelajaran Abad 21",
    description:
      "Modul interaktif mengenai penerapan 4C dalam proses belajar mengajar.",
    type: "Interactive",
    subject: "Technologies",
    yearLevel: "Mahasiswa PPG",
    thumbnail:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=400&h=250&auto=format&fit=crop",
    rating: 4.8,
    category: "Resource",
  },
  {
    id: "2",
    title: "Sejarah Pendidikan Islam di Indonesia",
    description: "Video dokumenter perkembangan madrasah dan pesantren.",
    type: "Video",
    subject: "History",
    yearLevel: "Dosen",
    thumbnail:
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=400&h=250&auto=format&fit=crop",
    rating: 4.5,
    category: "Resource",
  },
  {
    id: "3",
    title: "Psikologi Perkembangan Anak",
    description:
      "Dokumen riset mengenai tahap kognitif anak usia sekolah dasar.",
    type: "Document",
    subject: "Science",
    yearLevel: "Guru Madrasah",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&h=250&auto=format&fit=crop",
    rating: 4.9,
    category: "Resource",
  },
];

export const CATEGORIES = [
  {
    id: "mooc",
    name: "MOOC Pintar",
    icon: <BookOpen className="w-6 h-6" />,
    color: "text-emerald-700",
    bg: "bg-emerald-50",
  },
  {
    id: "math",
    name: "Mathematics",
    icon: <Calculator className="w-6 h-6" />,
    color: "text-blue-700",
    bg: "bg-blue-50",
  },
  {
    id: "science",
    name: "Science",
    icon: <Microscope className="w-6 h-6" />,
    color: "text-green-700",
    bg: "bg-green-50",
  },
  {
    id: "history",
    name: "History",
    icon: <History className="w-6 h-6" />,
    color: "text-amber-700",
    bg: "bg-amber-50",
  },
  {
    id: "tech",
    name: "Technologies",
    icon: <Lightbulb className="w-6 h-6" />,
    color: "text-teal-700",
    bg: "bg-teal-50",
  },
  {
    id: "english",
    name: "English",
    icon: <Languages className="w-6 h-6" />,
    color: "text-yellow-700",
    bg: "bg-yellow-50",
  },
  {
    id: "arts",
    name: "The Arts",
    icon: <Palette className="w-6 h-6" />,
    color: "text-purple-700",
    bg: "bg-purple-50",
  },
  {
    id: "lang",
    name: "Languages",
    icon: <Globe className="w-6 h-6" />,
    color: "text-indigo-700",
    bg: "bg-indigo-50",
  },
];

export const YEAR_LEVELS = [
  "Guru Madrasah",
  "Pengawas",
  "Kepala Madrasah",
  "Tenaga Kependidikan",
  "Mahasiswa PPG",
  "Dosen",
];

export const COMMUNITIES = [
  {
    id: "c1",
    name: "Komunitas Guru Madrasah Digital",
    description:
      "Wadah berbagi praktik baik penggunaan teknologi dalam pembelajaran di Madrasah.",
    members: 1250,
    location: "Nasional",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&h=250&auto=format&fit=crop",
    category: "Teknologi",
  },
  {
    id: "c2",
    name: "MGMP Fikih DKI Jakarta",
    description:
      "Komunitas resmi guru Fikih wilayah DKI Jakarta untuk penyusunan modul bersama.",
    members: 450,
    location: "Jakarta",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&h=250&auto=format&fit=crop",
    category: "Mapel",
  },
];

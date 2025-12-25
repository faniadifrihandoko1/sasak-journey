"use client";

import { formatPrice } from "@/data/destinations";
import { Link } from "@/i18n/navigation";
import {
  ArrowBack as ArrowBackIcon,
  CalendarToday as CalendarIcon,
  Cancel as CancelIcon,
  CheckCircle as CheckIcon,
  Place as PlaceIcon,
  WhatsApp as WhatsAppIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

// Mock destination data
const destinationData: Record<
  string,
  {
    id: string;
    name: string;
    slug: string;
    category: string;
    destination: string;
    duration: string;
    days: number;
    nights: number;
    price: number;
    image: string;
    gallery: string[];
    description: string;
    longDescription: string;
    highlights: string[];
    itinerary: Array<{ day: number; title: string; description: string }>;
    included: string[];
    excluded: string[];
  }
> = {
  mandalika: {
    id: "1",
    name: "Mandalika Beach Resort",
    slug: "mandalika",
    category: "beach",
    destination: "mandalika",
    duration: "3d2n",
    days: 3,
    nights: 2,
    price: 4500000,
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=800",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800",
    ],
    description:
      "Kawasan wisata terpadu dengan pantai indah, resor mewah, dan Sirkuit MotoGP kelas dunia.",
    longDescription:
      "Mandalika adalah kawasan ekonomi khusus pariwisata yang terletak di Lombok Tengah. Dengan pantai-pantai eksotis seperti Pantai Kuta, resort berbintang, dan Sirkuit Mandalika yang menjadi tuan rumah MotoGP, destinasi ini menawarkan pengalaman liburan lengkap untuk semua kalangan.",
    highlights: [
      "Pantai Kuta Mandalika yang eksotis",
      "Sirkuit MotoGP kelas dunia",
      "Resort dan hotel berbintang",
      "Sunset spektakuler",
      "Water sports dan aktivitas pantai",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kedatangan & Pantai",
        description:
          "Tiba di Mandalika, check-in hotel, dan nikmati sore hari di Pantai Kuta Mandalika.",
      },
      {
        day: 2,
        title: "Eksplorasi & Water Sports",
        description:
          "Hari penuh aktivitas pantai, snorkeling, dan mengunjungi Sirkuit Mandalika.",
      },
      {
        day: 3,
        title: "Relaksasi & Kepulangan",
        description:
          "Waktu bebas untuk spa atau belanja oleh-oleh sebelum kepulangan.",
      },
    ],
    included: ["accommodation", "meals", "transportation", "guide", "entrance"],
    excluded: ["flights", "personal", "tips", "optional"],
  },
  "gili-trawangan": {
    id: "2",
    name: "Gili Trawangan Paradise",
    slug: "gili-trawangan",
    category: "beach",
    destination: "gili-trawangan",
    duration: "3d2n",
    days: 3,
    nights: 2,
    price: 3800000,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=800",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800",
    ],
    description:
      "Pulau tropis favorit dengan pasir putih, snorkeling, dan kehidupan malam yang hidup.",
    longDescription:
      "Gili Trawangan adalah pulau terbesar dari tiga Gili Islands yang terkenal dengan keindahan alamnya. Pulau bebas kendaraan bermotor ini menawarkan pantai berpasir putih, spot diving dan snorkeling kelas dunia, serta suasana yang sempurna untuk relaksasi dan petualangan.",
    highlights: [
      "Snorkeling dengan penyu laut",
      "Sunset view menakjubkan",
      "Nightlife yang menghibur",
      "Air laut jernih berwarna turquoise",
      "Keliling pulau dengan sepeda",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kedatangan & Pantai",
        description:
          "Tiba di Gili Trawangan, check-in akomodasi, dan habiskan hari dengan bersantai di pantai.",
      },
      {
        day: 2,
        title: "Snorkeling Adventure",
        description:
          "Trip snorkeling seharian melihat penyu laut dan kehidupan laut yang berwarna-warni.",
      },
      {
        day: 3,
        title: "Eksplorasi & Kepulangan",
        description:
          "Keliling pulau dengan sepeda, kunjungi toko lokal, dan berenang terakhir sebelum pulang.",
      },
    ],
    included: ["accommodation", "meals", "transportation", "guide", "entrance"],
    excluded: ["flights", "personal", "tips", "optional"],
  },
  "gili-nanggu": {
    id: "3",
    name: "Gili Nanggu Escape",
    slug: "gili-nanggu",
    category: "beach",
    destination: "gili-nanggu",
    duration: "2d1n",
    days: 2,
    nights: 1,
    price: 3200000,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=800",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800",
    ],
    description:
      "Pulau kecil yang tenang dengan air laut jernih, cocok untuk relaksasi dan snorkeling.",
    longDescription:
      "Gili Nanggu adalah pulau tersembunyi di barat daya Lombok yang menawarkan ketenangan jauh dari keramaian. Dengan pantai berpasir putih, terumbu karang yang masih alami, dan suasana yang damai, pulau ini sempurna untuk pasangan atau siapa saja yang mencari ketenangan.",
    highlights: [
      "Pulau privat dan tenang",
      "Terumbu karang yang masih asri",
      "Snorkeling di perairan jernih",
      "Suasana romantis untuk honeymoon",
      "Sunset yang memukau",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kedatangan & Snorkeling",
        description:
          "Perjalanan ke Gili Nanggu, snorkeling di terumbu karang, dan menikmati sunset.",
      },
      {
        day: 2,
        title: "Relaksasi & Kepulangan",
        description:
          "Waktu bebas untuk bersantai di pantai sebelum kembali ke Lombok.",
      },
    ],
    included: ["accommodation", "meals", "transportation", "guide", "entrance"],
    excluded: ["flights", "personal", "tips", "optional"],
  },
  "pink-beach": {
    id: "4",
    name: "Pink Beach Adventure",
    slug: "pink-beach",
    category: "beach",
    destination: "pink-beach",
    duration: "2d1n",
    days: 2,
    nights: 1,
    price: 3500000,
    image:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=800",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800",
    ],
    description:
      "Pantai unik dengan pasir berwarna merah muda dan panorama laut yang eksotis.",
    longDescription:
      "Pantai Pink (Tangsi Beach) adalah salah satu dari sedikit pantai berpasir merah muda di dunia. Warna unik pasirnya berasal dari pecahan terumbu karang merah yang bercampur dengan pasir putih. Destinasi ini menawarkan keindahan alam yang langka dan pengalaman fotografi yang tak terlupakan.",
    highlights: [
      "Pasir berwarna pink yang unik",
      "Panorama laut yang eksotis",
      "Spot fotografi terbaik",
      "Snorkeling dengan ikan warna-warni",
      "Keindahan alam yang langka",
    ],
    itinerary: [
      {
        day: 1,
        title: "Perjalanan ke Pantai Pink",
        description:
          "Perjalanan menuju Lombok Timur, eksplorasi Pantai Pink, snorkeling dan menikmati sunset.",
      },
      {
        day: 2,
        title: "Eksplorasi & Kepulangan",
        description:
          "Waktu bebas untuk foto-foto dan berenang sebelum kembali.",
      },
    ],
    included: ["accommodation", "meals", "transportation", "guide", "entrance"],
    excluded: ["flights", "personal", "tips", "optional"],
  },
  senggigi: {
    id: "5",
    name: "Senggigi Beach Getaway",
    slug: "senggigi",
    category: "beach",
    destination: "senggigi",
    duration: "3d2n",
    days: 3,
    nights: 2,
    price: 3000000,
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=800",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800",
    ],
    description:
      "Destinasi wisata klasik Lombok dengan sunset indah dan fasilitas lengkap.",
    longDescription:
      "Senggigi adalah kawasan wisata paling terkenal di Lombok Barat. Dengan garis pantai yang panjang, berbagai resort dan hotel, restoran, serta akses mudah ke Gili Islands, Senggigi adalah pilihan sempurna untuk liburan keluarga atau sebagai base camp menjelajahi Lombok.",
    highlights: [
      "Sunset spektakuler",
      "Akses mudah ke Gili Islands",
      "Berbagai pilihan resort",
      "Kuliner seafood segar",
      "Cocok untuk keluarga",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kedatangan & Eksplorasi",
        description:
          "Tiba di Senggigi, check-in hotel, dan eksplorasi pantai sore hari.",
      },
      {
        day: 2,
        title: "Day Trip Gili",
        description:
          "Opsional day trip ke Gili Islands atau aktivitas di Senggigi.",
      },
      {
        day: 3,
        title: "Relaksasi & Kepulangan",
        description:
          "Waktu bebas untuk spa, belanja, atau berenang sebelum pulang.",
      },
    ],
    included: ["accommodation", "meals", "transportation", "guide", "entrance"],
    excluded: ["flights", "personal", "tips", "optional"],
  },
  "sembalun-rinjani": {
    id: "6",
    name: "Sembalun Rinjani Trek",
    slug: "sembalun-rinjani",
    category: "tour",
    destination: "sembalun-rinjani",
    duration: "4d3n",
    days: 4,
    nights: 3,
    price: 4200000,
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=800",
    ],
    description:
      "Desa pegunungan di kaki Gunung Rinjani, gerbang utama pendakian dan wisata alam.",
    longDescription:
      "Sembalun adalah desa pegunungan yang menjadi gerbang utama untuk pendakian Gunung Rinjani. Dengan pemandangan lembah hijau, udara sejuk pegunungan, dan akses ke jalur pendakian terbaik, Sembalun menawarkan pengalaman wisata alam yang tak terlupakan bagi para pecinta adventure.",
    highlights: [
      "Pendakian Gunung Rinjani",
      "Sunrise dari puncak",
      "Danau Segara Anak",
      "Pemandangan lembah hijau",
      "Camping di bawah bintang",
    ],
    itinerary: [
      {
        day: 1,
        title: "Mulai Pendakian",
        description:
          "Perjalanan dari Sembalun, trekking ke Pos 1 dan Pos 2, lanjut ke Base Camp.",
      },
      {
        day: 2,
        title: "Summit Attack",
        description:
          "Pendakian pagi-pagi untuk menyaksikan sunrise dari puncak, lalu turun ke crater rim.",
      },
      {
        day: 3,
        title: "Danau Segara Anak",
        description:
          "Kunjungi danau kawah dan nikmati hot springs sebelum melanjutkan turun.",
      },
      {
        day: 4,
        title: "Kepulangan",
        description:
          "Turun via jalur Senaru dan kembali ke hotel.",
      },
    ],
    included: [
      "accommodation",
      "meals",
      "transportation",
      "guide",
      "entrance",
      "insurance",
    ],
    excluded: ["flights", "personal", "tips", "optional"],
  },
  "gili-gede": {
    id: "7",
    name: "Gili Gede Escape",
    slug: "gili-gede",
    category: "beach",
    destination: "gili-gede",
    duration: "2d1n",
    days: 2,
    nights: 1,
    price: 2800000,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=800",
    ],
    description:
      "Pulau terbesar di selatan Lombok dengan keindahan alam yang masih asri dan suasana tenang.",
    longDescription:
      "Gili Gede adalah pulau terbesar di antara pulau-pulau kecil di selatan Lombok. Pulau ini menawarkan keindahan alam yang masih alami, terumbu karang yang sehat, dan kehidupan masyarakat lokal yang ramah. Cocok untuk yang mencari ketenangan dan pengalaman otentik.",
    highlights: [
      "Pulau terbesar di selatan Lombok",
      "Terumbu karang yang sehat",
      "Kehidupan lokal autentik",
      "Suasana tenang dan damai",
      "Snorkeling dan diving",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kedatangan & Eksplorasi",
        description:
          "Perjalanan ke Gili Gede, check-in, snorkeling, dan menikmati sunset.",
      },
      {
        day: 2,
        title: "Island Tour & Kepulangan",
        description:
          "Keliling pulau, berinteraksi dengan warga lokal, lalu kembali ke Lombok.",
      },
    ],
    included: ["accommodation", "meals", "transportation", "guide", "entrance"],
    excluded: ["flights", "personal", "tips", "optional"],
  },
  "sasak-tour": {
    id: "8",
    name: "Sasak Village Tour",
    slug: "sasak-tour",
    category: "culture",
    destination: "sasak-tour",
    duration: "2d1n",
    days: 2,
    nights: 1,
    price: 1500000,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=800",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800",
    ],
    description:
      "Jelajahi desa-desa tradisional Sasak dan pelajari budaya serta kerajinan tangan khas Lombok.",
    longDescription:
      "Sasak Tour membawa Anda mengenal lebih dekat budaya dan tradisi suku Sasak yang merupakan penduduk asli Lombok. Kunjungi desa-desa tradisional seperti Sade dan Ende, pelajari teknik tenun khas Lombok, dan nikmati keramahan penduduk lokal.",
    highlights: [
      "Kunjungan desa tradisional Sade",
      "Belajar tenun songket",
      "Melihat rumah adat Sasak",
      "Interaksi dengan penduduk lokal",
      "Kuliner tradisional Sasak",
    ],
    itinerary: [
      {
        day: 1,
        title: "Eksplorasi Desa Sasak",
        description:
          "Kunjungi Desa Sade dan Ende, pelajari budaya dan kerajinan lokal.",
      },
      {
        day: 2,
        title: "Workshop & Kepulangan",
        description:
          "Ikuti workshop tenun, cooking class masakan Sasak, lalu kembali.",
      },
    ],
    included: ["accommodation", "meals", "transportation", "guide", "entrance"],
    excluded: ["flights", "personal", "tips", "optional"],
  },
  "mataram-tour": {
    id: "9",
    name: "Mataram City Tour",
    slug: "mataram-tour",
    category: "city",
    destination: "mataram-tour",
    duration: "2d1n",
    days: 2,
    nights: 1,
    price: 1200000,
    image:
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=800",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
    ],
    description:
      "Eksplorasi ibu kota Lombok dengan sejarah kerajaan, pura-pura kuno, dan kuliner lokal.",
    longDescription:
      "Mataram Tour mengajak Anda menjelajahi ibu kota Lombok dan sekitarnya. Kunjungi Pura Meru, Taman Mayura, Islamic Center, dan nikmati kuliner khas Lombok. Tour ini cocok untuk Anda yang ingin mengenal sisi urban dan historis Lombok.",
    highlights: [
      "Pura Meru - pura terbesar di Lombok",
      "Taman Mayura dan kolam",
      "Islamic Center NTB",
      "Kuliner Taliwang",
      "Pusat oleh-oleh Lombok",
    ],
    itinerary: [
      {
        day: 1,
        title: "Wisata Sejarah & Budaya",
        description:
          "Kunjungi Pura Meru, Taman Mayura, dan Islamic Center.",
      },
      {
        day: 2,
        title: "Kuliner & Belanja",
        description:
          "Tour kuliner dan belanja oleh-oleh khas Lombok.",
      },
    ],
    included: ["accommodation", "meals", "transportation", "guide", "entrance"],
    excluded: ["flights", "personal", "tips", "optional"],
  },
  "benang-kelambu": {
    id: "10",
    name: "Benang Kelambu Waterfall",
    slug: "benang-kelambu",
    category: "tour",
    destination: "benang-kelambu",
    duration: "2d1n",
    days: 2,
    nights: 1,
    price: 1800000,
    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=800",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=800",
    ],
    description:
      "Air terjun menakjubkan dengan tirai air alami yang indah di tengah hutan tropis.",
    longDescription:
      "Air Terjun Benang Kelambu adalah salah satu air terjun terindah di Lombok. Namanya berasal dari bentuk air yang jatuh menyerupai tirai (kelambu). Terletak di lereng Gunung Rinjani, air terjun ini dikelilingi hutan tropis yang asri dan udara sejuk pegunungan.",
    highlights: [
      "Air terjun berbentuk tirai",
      "Hutan tropis yang asri",
      "Udara sejuk pegunungan",
      "Trekking ringan",
      "Spot foto instagramable",
    ],
    itinerary: [
      {
        day: 1,
        title: "Perjalanan & Trekking",
        description:
          "Perjalanan ke lokasi, trekking menuju air terjun, dan menikmati keindahan alam.",
      },
      {
        day: 2,
        title: "Eksplorasi & Kepulangan",
        description:
          "Eksplorasi sekitar, kunjungi Benang Stokel, lalu kembali.",
      },
    ],
    included: ["accommodation", "meals", "transportation", "guide", "entrance"],
    excluded: ["flights", "personal", "tips", "optional"],
  },
  "mandalika-circuit": {
    id: "11",
    name: "Mandalika Circuit Experience",
    slug: "mandalika-circuit",
    category: "city",
    destination: "mandalika-circuit",
    duration: "2d1n",
    days: 2,
    nights: 1,
    price: 2500000,
    image:
      "https://images.unsplash.com/photo-1558618047-f4b511d0397b?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1558618047-f4b511d0397b?q=80&w=800",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
    ],
    description:
      "Sirkuit balap internasional MotoGP dengan fasilitas modern dan pemandangan laut.",
    longDescription:
      "Sirkuit Mandalika adalah sirkuit balap kelas dunia yang menjadi tuan rumah MotoGP sejak 2022. Nikmati pengalaman melihat sirkuit dari dekat, foto di berbagai spot ikonik, dan rasakan atmosfer balap internasional dengan latar belakang pemandangan laut yang menakjubkan.",
    highlights: [
      "Tour sirkuit MotoGP",
      "Foto di paddock area",
      "Museum dan galeri MotoGP",
      "Pemandangan laut dari sirkuit",
      "Pengalaman VIP area",
    ],
    itinerary: [
      {
        day: 1,
        title: "Circuit Tour",
        description:
          "Tour lengkap sirkuit, kunjungi paddock, pit lane, dan tribun utama.",
      },
      {
        day: 2,
        title: "Pantai & Kepulangan",
        description:
          "Nikmati pantai sekitar Mandalika sebelum kembali.",
      },
    ],
    included: ["accommodation", "meals", "transportation", "guide", "entrance"],
    excluded: ["flights", "personal", "tips", "optional"],
  },
};

export default function DestinationDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const t = useTranslations("destinationDetail");
  const tCategories = useTranslations("hero.searchForm.categories");
  const tDestinations = useTranslations("hero.searchForm.destinations");

  const destination = destinationData[slug];

  if (!destination) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pt: 10,
        }}
      >
        <Container>
          <Typography variant="h4" textAlign="center" mb={2}>
            Destination not found
          </Typography>
          <Box textAlign="center">
            <Button
              component={Link}
              href="/"
              variant="contained"
              startIcon={<ArrowBackIcon />}
            >
              Back to Home
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }

  const getCategoryLabel = (value: string) => {
    const map: Record<string, string> = {
      beach: tCategories("beach"),
      city: tCategories("city"),
      culture: tCategories("culture"),
      tour: tCategories("tour"),
      business: tCategories("business"),
      honeymoon: tCategories("honeymoon"),
    };
    return map[value] || value;
  };

  const getDestinationLabel = (value: string) => {
    const map: Record<string, string> = {
      mandalika: tDestinations("mandalika"),
      "gili-trawangan": tDestinations("giliTrawangan"),
      "gili-nanggu": tDestinations("giliNanggu"),
      "gili-gede": tDestinations("giliGede"),
      "pink-beach": tDestinations("pinkBeach"),
      "sasak-tour": tDestinations("sasakTour"),
      "mataram-tour": tDestinations("mataramTour"),
      "benang-kelambu": tDestinations("benangKelambu"),
      senggigi: tDestinations("senggigi"),
      "mandalika-circuit": tDestinations("mandalikaCircuit"),
      "sembalun-rinjani": tDestinations("sembalunRinjani"),
    };
    return map[value] || value;
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        pt: { xs: 10, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        {/* Back Button */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => router.back()}
          sx={{ mb: 3, textTransform: "none" }}
        >
          Back
        </Button>

        {/* Main Card - Similar to Search Results */}
        <Card
          sx={{
            mb: 4,
            overflow: "hidden",
            borderRadius: 2,
            transition: "all 0.3s ease",
            boxShadow: 3,
          }}
        >
          <Grid container>
            {/* Image Section */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 300, md: "100%" },
                  minHeight: { md: 400 },
                  overflow: "hidden",
                  "& img": {
                    transition: "transform 0.3s ease",
                  },
                }}
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </Box>
            </Grid>

            {/* Content Section */}
            <Grid size={{ xs: 12, md: 7 }}>
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Chip
                  label={getCategoryLabel(destination.category)}
                  color="secondary"
                  size="small"
                  sx={{ mb: 2, fontWeight: 600 }}
                />
                <Typography
                  variant="h4"
                  component="h1"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    fontSize: { xs: "1.5rem", md: "1.75rem" },
                  }}
                >
                  {destination.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, minHeight: 40 }}
                >
                  {destination.description}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 2,
                    flexWrap: "wrap",
                  }}
                >
                  <Chip
                    icon={<PlaceIcon fontSize="small" />}
                    label={getDestinationLabel(destination.destination)}
                    size="small"
                    variant="outlined"
                    sx={{ fontSize: "0.75rem" }}
                  />
                  <Chip
                    icon={<CalendarIcon fontSize="small" />}
                    label={`${destination.days} ${t("days")} / ${destination.nights
                      } ${t("nights")}`}
                    size="small"
                    variant="outlined"
                    sx={{ fontSize: "0.75rem" }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      color="primary.main"
                      fontWeight={700}
                    >
                      {formatPrice(destination.price, "IDR")}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {t("perPerson")}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    startIcon={<WhatsAppIcon />}
                    href={`https://wa.me/6287773931343?text=${encodeURIComponent(
                      `Halo, saya tertarik dengan paket wisata ${destination.name}. Bolehkah saya minta informasi lebih lanjut mengenai ketersediaan dan detail harganya?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      textTransform: "none",
                      fontWeight: 700,
                      py: 1.5,
                      borderRadius: 2,
                      background: "linear-gradient(45deg, #128C7E 30%, #075E54 90%)",
                      boxShadow: "0 3px 5px 2px rgba(37, 211, 102, .3)",
                      color: "white",
                      "&:hover": {
                        background:
                          "linear-gradient(45deg, #075E54 30%, #128C7E 90%)",
                      },
                    }}
                  >
                    Pesan Sekarang via WhatsApp
                  </Button>
                </Box>
              </CardContent>
            </Grid>
          </Grid>
        </Card>

        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid size={{ xs: 12, md: 8 }}>
            {/* Overview */}
            <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, mb: 2, color: "primary.main" }}
              >
                {t("overview")}
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                {destination.longDescription}
              </Typography>
            </Paper>

            {/* Highlights */}
            <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, mb: 3, color: "primary.main" }}
              >
                {t("highlights")}
              </Typography>
              <Grid container spacing={2}>
                {destination.highlights.map((highlight, index) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={index}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1,
                      }}
                    >
                      <CheckIcon color="primary" sx={{ mt: 0.5 }} />
                      <Typography variant="body1">{highlight}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>

            {/* Itinerary */}
            <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, mb: 3, color: "primary.main" }}
              >
                {t("itinerary")}
              </Typography>
              {destination.itinerary.map((item, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Chip
                      label={`${t("day")} ${item.day}`}
                      color="primary"
                      sx={{ mr: 2, fontWeight: 600 }}
                    />
                    <Typography variant="h6" fontWeight={600}>
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ pl: { xs: 0, sm: 8 } }}
                  >
                    {item.description}
                  </Typography>
                  {index < destination.itinerary.length - 1 && (
                    <Divider sx={{ mt: 2 }} />
                  )}
                </Box>
              ))}
            </Paper>

            {/* Gallery */}
            <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, mb: 3, color: "primary.main" }}
              >
                {t("gallery")}
              </Typography>
              <Grid container spacing={2}>
                {destination.gallery.map((img, index) => (
                  <Grid size={{ xs: 6, md: 3 }} key={index}>
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: 200,
                        borderRadius: 2,
                        overflow: "hidden",
                        cursor: "pointer",
                        "&:hover img": {
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      <Image
                        src={img}
                        alt={`${destination.name} ${index + 1}`}
                        fill
                        style={{
                          objectFit: "cover",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>

          {/* Sidebar */}
          <Grid size={{ xs: 12, md: 4 }}>
            {/* What's Included & Excluded Card */}
            <Paper
              elevation={2}
              sx={{
                p: 4,
                mb: 4,
                borderRadius: 2,
                position: "sticky",
                top: 100,
              }}
            >
              {/* What's Included */}
              <Typography variant="h6" fontWeight={600} mb={2}>
                {t("included")}
              </Typography>
              <List dense>
                {destination.included.map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckIcon color="success" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={t(`items.included.${item}`)}
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItem>
                ))}
              </List>

              <Divider sx={{ my: 2 }} />

              {/* What's Excluded */}
              <Typography variant="h6" fontWeight={600} mb={2}>
                {t("excluded")}
              </Typography>
              <List dense>
                {destination.excluded.map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CancelIcon color="error" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={t(`items.excluded.${item}`)}
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

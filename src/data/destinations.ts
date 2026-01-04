// ==========================================
// Travel Categories
// ==========================================
export interface TravelCategory {
    id: string;
    labelKey: string; // Translation key
}

export const travelCategories: TravelCategory[] = [
    { id: "beach", labelKey: "beach" },
    { id: "city", labelKey: "city" },
    { id: "culture", labelKey: "culture" },
    { id: "tour", labelKey: "tour" },
    { id: "business", labelKey: "business" },
    { id: "honeymoon", labelKey: "honeymoon" },
];

// ==========================================
// Destinations for Search Form
// ==========================================
export interface SearchDestination {
    id: string;
    labelKey: string; // Translation key
    categories: string[]; // Related category IDs
}

export const searchDestinations: SearchDestination[] = [
    {
        id: "mandalika",
        labelKey: "mandalika",
        categories: ["beach", "city"],
    },
    {
        id: "gili-trawangan",
        labelKey: "giliTrawangan",
        categories: ["beach", "honeymoon"],
    },
    {
        id: "gili-nanggu",
        labelKey: "giliNanggu",
        categories: ["beach", "honeymoon"],
    },
    {
        id: "gili-gede",
        labelKey: "giliGede",
        categories: ["beach", "honeymoon"],
    },
    {
        id: "pink-beach",
        labelKey: "pinkBeach",
        categories: ["beach"],
    },
    {
        id: "sasak-tour",
        labelKey: "sasakTour",
        categories: ["culture", "tour"],
    },
    {
        id: "mataram-tour",
        labelKey: "mataramTour",
        categories: ["city", "culture"],
    },
    {
        id: "benang-kelambu",
        labelKey: "benangKelambu",
        categories: ["tour"],
    },
    {
        id: "senggigi",
        labelKey: "senggigi",
        categories: ["beach", "city"],
    },
    {
        id: "mandalika-circuit",
        labelKey: "mandalikaCircuit",
        categories: ["city", "business"],
    },
    {
        id: "sembalun-rinjani",
        labelKey: "sembalunRinjani",
        categories: ["tour"],
    },
];

// ==========================================
// Durations
// ==========================================
export interface Duration {
    id: string;
    labelKey: string; // Translation key
}

export const durations: Duration[] = [
    { id: "2d1n", labelKey: "2d1n" },
    { id: "3d2n", labelKey: "3d2n" },
    { id: "4d3n", labelKey: "4d3n" },
    { id: "5d4n", labelKey: "5d4n" },
    { id: "6d5n", labelKey: "6d5n" },
    { id: "honeymoon", labelKey: "honeymoon" },
];

// ==========================================
// Popular Destinations (for cards display)
// ==========================================
export interface PopularDestination {
    key: string;
    slug: string;
    image: string;
    priceFrom: number;
    currency: string;
    location: string;
    tags: string[];
    categories: string[];
}

export const popularDestinations: PopularDestination[] = [
    {
        key: "mandalika",
        slug: "mandalika",
        image: "https://ik.imgkit.net/3vlqs5axxjf/external/https://www.cfmedia.vfmleonardo.com/imageRepo/1/0/206/473/299/B1NyCt9vi0SpsWXTR0jPw_a1k2_ho_00_p_3000x2250_O.jpg?tr=w-940%2Ch-529%2Cfo-auto%2Cdi-ami-fallback.png",
        priceFrom: 4500000,
        currency: "IDR",
        location: "Lombok Tengah, NTB",
        tags: ["beach", "resort", "motogp"],
        categories: ["beach", "city"],
    },
    {
        key: "giliTrawangan",
        slug: "gili-trawangan",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQLZPu6Aul1am6jriYgNGZhXfGhuUCl3PsSoXC2ibF7xQj5n0gBgxPWHJbojfxKWmAaFM7Msbrx1blMmOC0N99w_ZAoeUeDT4zyA9pVZGeSZSgxAWmxkWqrBY0ubJxf2Qrff4bdTVdgLc/s1600/Gili+Trawangan+3.jpg",
        priceFrom: 3800000,
        currency: "IDR",
        location: "Lombok Utara, NTB",
        tags: ["island", "snorkeling", "nightlife"],
        categories: ["beach", "honeymoon"],
    },
    {
        key: "giliNanggu",
        slug: "gili-nanggu",
        image: "https://zjglidcehtsqqqhbdxyp.supabase.co/storage/v1/object/public/atourin/images/destination/lombok/gili-nanggu-profile1645778199.png?x-image-process=image/resize,p_100,limit_1/imageslim",
        priceFrom: 3200000,
        currency: "IDR",
        location: "Lombok Barat, NTB",
        tags: ["island", "peaceful", "snorkeling"],
        categories: ["beach", "honeymoon"],
    },
    {
        key: "giliGede",
        slug: "gili-gede",
        image: "https://image.idntimes.com/post/20230110/images-2023-01-10t132811169-d3d8d06aa1448f3fe68a341e3dbae61d.jpeg",
        priceFrom: 2800000,
        currency: "IDR",
        location: "Lombok Barat, NTB",
        tags: ["island", "peaceful", "snorkeling"],
        categories: ["beach", "honeymoon"],
    },
    {
        key: "pinkBeach",
        slug: "pink-beach",
        image: "https://lombokindotrans.com/wp-content/uploads/2024/03/Pantai-Pink-Lombok.jpg",
        priceFrom: 3500000,
        currency: "IDR",
        location: "Lombok Timur, NTB",
        tags: ["beach", "iconic", "photography"],
        categories: ["beach"],
    },
    {
        key: "sasakTour",
        slug: "sasak-tour",
        image: "https://authentic-indonesia.com/wp-content/uploads/2018/04/The-Traditional-Villages-of-Lombok.jpg",
        priceFrom: 1500000,
        currency: "IDR",
        location: "Lombok Tengah, NTB",
        tags: ["culture", "village", "tradition"],
        categories: ["culture", "tour"],
    },
    {
        key: "mataramTour",
        slug: "mataram-tour",
        image: "https://s3.nevaobjects.id/wp-content/uploads/2025/11/kota-mataram-2842322492.webp",
        priceFrom: 1200000,
        currency: "IDR",
        location: "Mataram, NTB",
        tags: ["city", "culture", "history"],
        categories: ["city", "culture"],
    },
    {
        key: "benangKelambu",
        slug: "benang-kelambu",
        image: "https://ik.imagekit.io/tvlk/blog/2022/01/Wisata-Air-Terjun-Lombok-Benang-Kelambu-Shutterstock.jpg?tr=q-70,c-at_max,w-1000,h-600",
        priceFrom: 1800000,
        currency: "IDR",
        location: "Lombok Tengah, NTB",
        tags: ["waterfall", "nature", "trekking"],
        categories: ["tour"],
    },
    {
        key: "senggigi",
        slug: "senggigi",
        image: "https://thelangkahtravel.com/wp-content/uploads/2020/03/Pantai-Senggigi-Lombok-2.jpg",
        priceFrom: 3000000,
        currency: "IDR",
        location: "Lombok Barat, NTB",
        tags: ["beach", "sunset", "family"],
        categories: ["beach", "city"],
    },
    {
        key: "mandalikaCircuit",
        slug: "mandalika-circuit",
        image: "https://www.lazone.id/storage/news/2024/Agustus/Sport/keren-abis-ini-5-rahasia-gokil-sirkuit-motogp-mandalika/orig-Sirkuit%20MotoGP%20Mandalika%20di%20Lombok.jpg",
        priceFrom: 2500000,
        currency: "IDR",
        location: "Lombok Tengah, NTB",
        tags: ["motogp", "sport", "racing"],
        categories: ["city", "business"],
    },
    {
        key: "sembalunRinjani",
        slug: "sembalun-rinjani",
        image: "https://mediaim.expedia.com/destination/1/e34d20eb8465a1d809dbdb6104de2587.jpg",
        priceFrom: 4200000,
        currency: "IDR",
        location: "Lombok Timur, NTB",
        tags: ["mountain", "trekking", "nature"],
        categories: ["tour"],
    },
];

// Helper function to filter destinations by category
export const getDestinationsByCategory = (categoryId: string): SearchDestination[] => {
    if (!categoryId) return searchDestinations;
    return searchDestinations.filter((dest) => dest.categories.includes(categoryId));
};

// Helper function to format price
export const formatPrice = (price: number, currency: string): string => {
    if (currency === "IDR") {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    }
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency,
    }).format(price);
};

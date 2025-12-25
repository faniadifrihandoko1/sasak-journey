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
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800",
        priceFrom: 4500000,
        currency: "IDR",
        location: "Lombok Tengah, NTB",
        tags: ["beach", "resort", "motogp"],
        categories: ["beach", "city"],
    },
    {
        key: "giliTrawangan",
        slug: "gili-trawangan",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
        priceFrom: 3800000,
        currency: "IDR",
        location: "Lombok Utara, NTB",
        tags: ["island", "snorkeling", "nightlife"],
        categories: ["beach", "honeymoon"],
    },
    {
        key: "giliNanggu",
        slug: "gili-nanggu",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
        priceFrom: 3200000,
        currency: "IDR",
        location: "Lombok Barat, NTB",
        tags: ["island", "peaceful", "snorkeling"],
        categories: ["beach", "honeymoon"],
    },
    {
        key: "giliGede",
        slug: "gili-gede",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800",
        priceFrom: 2800000,
        currency: "IDR",
        location: "Lombok Barat, NTB",
        tags: ["island", "peaceful", "snorkeling"],
        categories: ["beach", "honeymoon"],
    },
    {
        key: "pinkBeach",
        slug: "pink-beach",
        image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=800",
        priceFrom: 3500000,
        currency: "IDR",
        location: "Lombok Timur, NTB",
        tags: ["beach", "iconic", "photography"],
        categories: ["beach"],
    },
    {
        key: "sasakTour",
        slug: "sasak-tour",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800",
        priceFrom: 1500000,
        currency: "IDR",
        location: "Lombok Tengah, NTB",
        tags: ["culture", "village", "tradition"],
        categories: ["culture", "tour"],
    },
    {
        key: "mataramTour",
        slug: "mataram-tour",
        image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=800",
        priceFrom: 1200000,
        currency: "IDR",
        location: "Mataram, NTB",
        tags: ["city", "culture", "history"],
        categories: ["city", "culture"],
    },
    {
        key: "benangKelambu",
        slug: "benang-kelambu",
        image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=800",
        priceFrom: 1800000,
        currency: "IDR",
        location: "Lombok Tengah, NTB",
        tags: ["waterfall", "nature", "trekking"],
        categories: ["tour"],
    },
    {
        key: "senggigi",
        slug: "senggigi",
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=800",
        priceFrom: 3000000,
        currency: "IDR",
        location: "Lombok Barat, NTB",
        tags: ["beach", "sunset", "family"],
        categories: ["beach", "city"],
    },
    {
        key: "mandalikaCircuit",
        slug: "mandalika-circuit",
        image: "https://images.unsplash.com/photo-1558618047-f4b511d0397b?q=80&w=800",
        priceFrom: 2500000,
        currency: "IDR",
        location: "Lombok Tengah, NTB",
        tags: ["motogp", "sport", "racing"],
        categories: ["city", "business"],
    },
    {
        key: "sembalunRinjani",
        slug: "sembalun-rinjani",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800",
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

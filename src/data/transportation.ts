// ==========================================
// Vehicle Package Types & Data
// ==========================================

export interface ExtraAreaCharge {
    area: string;
    price: number;
}

export interface VehiclePackage {
    id: string;
    name: string;
    price: number;
    currency: string;
    durationHours: number;
    extraTimePricePerHour?: number;
    capacity: number;
    include: string[];
    freeItems: string[];
    extraAreaCharge?: ExtraAreaCharge;
    image?: string;
}

export const vehiclePackages: VehiclePackage[] = [
    {
        id: "avanza-new",
        name: "All New Avanza",
        price: 750000,
        currency: "IDR",
        durationHours: 12,
        extraTimePricePerHour: 50000,
        capacity: 5,
        include: ["car", "fuel", "driver"],
        freeItems: ["mineralWater"],
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800",
    },
    {
        id: "innova-reborn",
        name: "Innova Reborn",
        price: 850000,
        currency: "IDR",
        durationHours: 12,
        extraTimePricePerHour: 60000,
        capacity: 5,
        include: ["car", "fuel", "driver"],
        freeItems: ["mineralWater"],
        image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=800",
    },
    {
        id: "grand-innova",
        name: "Grand Innova",
        price: 700000,
        currency: "IDR",
        durationHours: 12,
        extraTimePricePerHour: 50000,
        capacity: 5,
        include: ["car", "fuel", "driver"],
        freeItems: ["mineralWater"],
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800",
    },
    {
        id: "toyota-hiace",
        name: "Toyota Hiace",
        price: 1200000,
        currency: "IDR",
        durationHours: 12,
        capacity: 15,
        include: ["car", "fuel", "driver"],
        extraAreaCharge: {
            area: "Sembalun",
            price: 150000,
        },
        freeItems: ["mineralWater"],
        image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=800",
    },
    {
        id: "medium-bus",
        name: "Medium Bus",
        price: 1800000,
        currency: "IDR",
        durationHours: 12,
        extraTimePricePerHour: 100000,
        capacity: 30,
        include: ["car", "fuel", "driver"],
        freeItems: ["mineralWater"],
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800",
    },
    {
        id: "big-bus",
        name: "Big Bus",
        price: 2300000,
        currency: "IDR",
        durationHours: 12,
        extraTimePricePerHour: 100000,
        capacity: 45,
        include: ["car", "fuel", "driver"],
        freeItems: ["mineralWater"],
        image: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?q=80&w=800",
    },
];

// Helper function to format price
export const formatVehiclePrice = (price: number, currency: string): string => {
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

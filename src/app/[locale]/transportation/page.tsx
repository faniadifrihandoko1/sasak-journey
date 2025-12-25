"use client";

import {
    formatVehiclePrice,
    vehiclePackages,
} from "@/data/transportation";
import {
    AccessTime as AccessTimeIcon,
    CheckCircle as CheckIcon,
    Groups as GroupsIcon,
    Info as InfoIcon,
    LocalOffer as OfferIcon,
    WhatsApp as WhatsAppIcon
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
    Paper,
    Stack,
    Typography,
    alpha,
    useTheme,
} from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function TransportationPage() {
    const t = useTranslations("transportation");
    const tInclude = useTranslations("transportation.includes");
    const tFreeItems = useTranslations("transportation.freeItems");
    const theme = useTheme();

    const handleWhatsAppClick = (vehicleName: string, price: string) => {
        const phoneNumber = "6287773931343";
        const message = `Halo Sasak Journey, saya ingin menyewa kendaraan.
Berikut detail pesanan saya:

🚗 Kendaraan: ${vehicleName}
💰 Harga: ${price} / 12 Jam
📅 Tanggal Sewa: (Mohon diisi)
📍 Lokasi Jemput: (Mohon diisi)

Mohon ketersediaannya. Terima kasih.`;

        const encodedMessage = encodeURIComponent(message);
        window.open(
            `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
            "_blank"
        );
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: "#F3F4F6", // Lebih soft dari pure white
                pb: 12,
            }}
        >
            {/* Hero Header With Gradient */}
            <Box
                sx={{
                    pt: { xs: 16, md: 14 },
                    pb: { xs: 8, md: 10 },
                    background: "linear-gradient(180deg, #FFFFFF 0%, #F3F4F6 100%)",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
                    <Box sx={{ textAlign: "center", maxWidth: "800px", mx: "auto" }}>
                        <Chip
                            label={t("badge")}
                            sx={{
                                mb: 3,
                                fontWeight: 600,
                                px: 1,
                                py: 0.5,
                                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                color: "primary.main",
                                borderRadius: "50px",
                            }}
                        />
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                fontWeight: 800,
                                color: "#111827",
                                mb: 3,
                                fontSize: { xs: "2.5rem", md: "3.5rem" },
                                letterSpacing: "-0.02em",
                                lineHeight: 1.2,
                            }}
                        >
                            {t("title")}
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#4B5563",
                                fontWeight: 400,
                                lineHeight: 1.6,
                                mb: 4,
                                fontSize: { xs: "1rem", md: "1.125rem" },
                            }}
                        >
                            {t("subtitle")}
                        </Typography>

                        {/* Duration Badge */}
                        <Paper
                            elevation={0}
                            sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 1.5,
                                px: 3,
                                py: 1.5,
                                backgroundColor: "white",
                                borderRadius: "50px",
                                border: "1px solid",
                                borderColor: "divider",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                            }}
                        >
                            <AccessTimeIcon color="primary" />
                            <Typography
                                variant="body1"
                                sx={{ fontWeight: 600, color: "#374151" }}
                            >
                                {t("durationInfo")}
                            </Typography>
                        </Paper>
                    </Box>
                </Container>
            </Box>

            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {vehiclePackages.map((vehicle) => (
                        <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={vehicle.id}>
                            <Card
                                elevation={0}
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    borderRadius: 5,
                                    overflow: "hidden",
                                    backgroundColor: "white",
                                    border: "1px solid",
                                    borderColor: "rgba(0,0,0,0.04)",
                                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        boxShadow: "0 20px 40px -10px rgba(0,0,0,0.08)",
                                        borderColor: "transparent",
                                        "& .vehicle-image": {
                                            transform: "scale(1.05)",
                                        }
                                    },
                                }}
                            >
                                {/* Image Area */}
                                <Box
                                    sx={{
                                        position: "relative",
                                        width: "100%",
                                        height: 260,
                                        overflow: "hidden",
                                        backgroundColor: "#F3F4F6",
                                    }}
                                >
                                    <Image
                                        src={
                                            vehicle.image ||
                                            "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800"
                                        }
                                        alt={vehicle.name}
                                        fill
                                        className="vehicle-image"
                                        style={{
                                            objectFit: "cover",
                                            transition: "transform 0.6s ease"
                                        }}
                                    />

                                    {/* Capacity Badge */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            bottom: 16,
                                            left: 16,
                                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                                            backdropFilter: "blur(8px)",
                                            borderRadius: "12px",
                                            px: 2,
                                            py: 1,
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1,
                                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                        }}
                                    >
                                        <GroupsIcon sx={{ fontSize: 18, color: "#374151" }} />
                                        <Typography
                                            variant="body2"
                                            fontWeight={700}
                                            color="#374151"
                                        >
                                            {vehicle.capacity} {t("persons")}
                                        </Typography>
                                    </Box>
                                </Box>

                                <CardContent
                                    sx={{
                                        flexGrow: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                        p: 4,
                                    }}
                                >
                                    <Box sx={{ mb: 3 }}>
                                        <Typography
                                            variant="h5"
                                            component="h3"
                                            sx={{
                                                fontWeight: 800,
                                                color: "#111827",
                                                mb: 1,
                                                fontSize: "1.5rem"
                                            }}
                                        >
                                            {vehicle.name}
                                        </Typography>

                                        {/* Price */}
                                        <Stack direction="row" alignItems="baseline" spacing={0.5}>
                                            <Typography
                                                variant="h4"
                                                sx={{
                                                    fontWeight: 800,
                                                    color: "primary.main",
                                                    fontSize: "1.75rem",
                                                }}
                                            >
                                                {formatVehiclePrice(vehicle.price, vehicle.currency)}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" fontWeight={500}>
                                                / 12 {t("hours")}
                                            </Typography>
                                        </Stack>
                                    </Box>

                                    <Divider sx={{ mb: 3, borderColor: "#F3F4F6" }} />

                                    {/* Includes - More Compact */}
                                    <Box sx={{ mb: 3 }}>
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                textTransform: "uppercase",
                                                fontWeight: 700,
                                                color: "#9CA3AF",
                                                letterSpacing: "0.05em",
                                                display: "block",
                                                mb: 1.5
                                            }}
                                        >
                                            {t("includesLabel")}
                                        </Typography>
                                        <Grid container spacing={1}>
                                            {vehicle.include.map((item) => (
                                                <Grid size={{ xs: 6 }} key={item}>
                                                    <Stack direction="row" spacing={1} alignItems="center">
                                                        <CheckIcon sx={{ fontSize: 18, color: "success.main" }} />
                                                        <Typography variant="body2" color="#4B5563" fontWeight={500}>
                                                            {tInclude(item)}
                                                        </Typography>
                                                    </Stack>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Box>

                                    {/* Free Items */}
                                    {vehicle.freeItems.length > 0 && (
                                        <Box sx={{ mb: 3, p: 2, backgroundColor: "#FFF7ED", borderRadius: 3, border: "1px solid", borderColor: "#FFEDD5" }}>
                                            <Stack direction="row" spacing={1} alignItems="center">
                                                <OfferIcon sx={{ fontSize: 20, color: "#EA580C" }} />
                                                <Typography variant="body2" fontWeight={600} color="#EA580C">
                                                    {t("free")}: {vehicle.freeItems.map(item => tFreeItems(item)).join(", ")}
                                                </Typography>
                                            </Stack>
                                        </Box>
                                    )}

                                    {/* Spacer */}
                                    <Box sx={{ flexGrow: 1 }} />

                                    {/* Extra Info (Overtime) - made smaller */}
                                    {vehicle.extraTimePricePerHour && (
                                        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3, opacity: 0.8 }}>
                                            <InfoIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                                            <Typography variant="caption" color="text.secondary">
                                                {t("extraTime")}: <strong>{formatVehiclePrice(vehicle.extraTimePricePerHour, vehicle.currency)}/{t("hour")}</strong>
                                            </Typography>
                                        </Stack>
                                    )}

                                    {/* CTA Button */}
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        size="large"
                                        onClick={() =>
                                            handleWhatsAppClick(
                                                vehicle.name,
                                                formatVehiclePrice(vehicle.price, vehicle.currency)
                                            )
                                        }
                                        sx={{
                                            backgroundColor: "#10B981", // Emerald Green
                                            color: "white",
                                            py: 2,
                                            fontWeight: 700,
                                            borderRadius: 3,
                                            fontSize: "0.95rem",
                                            textTransform: "none",
                                            boxShadow: "0 8px 20px -4px rgba(16, 185, 129, 0.3)",
                                            display: "flex",
                                            justifyContent: "center",
                                            gap: 1.5,
                                            "&:hover": {
                                                backgroundColor: "#059669",
                                                transform: "translateY(-2px)",
                                                boxShadow: "0 12px 24px -4px rgba(16, 185, 129, 0.4)",
                                            },
                                        }}
                                    >
                                        <WhatsAppIcon />
                                        {t("bookViaWhatsApp")}
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Bottom Contact Section */}
                <Box sx={{ mt: 10, textAlign: "center" }}>
                    <Typography variant="h5" fontWeight={700} sx={{ mb: 1.5, color: "#111827" }}>
                        {t("needHelp")}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: "600px", mx: "auto" }}>
                        {t("needHelpDesc")}
                    </Typography>
                    <Button
                        variant="outlined"
                        size="large"
                        startIcon={<WhatsAppIcon />}
                        onClick={() => {
                            const phoneNumber = "6287773931343";
                            const message = "Halo Sasak Journey, saya ingin bertanya tentang layanan transportasi.";
                            window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
                        }}
                        sx={{
                            borderRadius: "50px",
                            px: 4,
                            py: 1.5,
                            borderWidth: 2,
                            fontWeight: 600,
                            textTransform: "none",
                            "&:hover": {
                                borderWidth: 2,
                            }
                        }}
                    >
                        {t("contactUs")}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

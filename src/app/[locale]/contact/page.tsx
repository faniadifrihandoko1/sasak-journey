"use client";

import {
    Email as EmailIcon,
    LocationOn as LocationIcon,
    Phone as PhoneIcon,
    Schedule as ScheduleIcon,
    WhatsApp as WhatsAppIcon,
} from "@mui/icons-material";
import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ContactPage() {
    const t = useTranslations("contactPage");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Format message for WhatsApp
        const phoneNumber = "6287773931343";
        const waMessage = `Halo Sasak Journey, saya ingin menghubungi anda.
    
📝 *Dari:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *No. HP:* ${formData.phone}
📌 *Subjek:* ${formData.subject}

💬 *Pesan:*
${formData.message}

Mohon responnya. Terima kasih.`;

        const encodedMessage = encodeURIComponent(waMessage);
        window.open(
            `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
            "_blank"
        );
    };

    const contactInfo = [
        {
            icon: <LocationIcon sx={{ fontSize: 24 }} />,
            title: t("info.office"),
            content: t("info.address"),
            color: "#3B82F6", // Blue
            bgColor: "#EFF6FF",
        },
        {
            icon: <PhoneIcon sx={{ fontSize: 24 }} />,
            title: t("info.phone"),
            content: "+62 877-7393-1343",
            color: "#10B981", // Emerald
            bgColor: "#ECFDF5",
        },
        {
            icon: <EmailIcon sx={{ fontSize: 24 }} />,
            title: t("info.email"),
            content: "sasakproject@gmail.com",
            color: "#8B5CF6", // Violet
            bgColor: "#F5F3FF",
        },
        {
            icon: <ScheduleIcon sx={{ fontSize: 24 }} />,
            title: t("info.operationHours"),
            content: t("info.hours"),
            color: "#F59E0B", // Amber
            bgColor: "#FFFBEB",
        },
    ];

    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: "#F3F4F6",
                pb: 12,
            }}
        >
            {/* Header Section with Gradient */}
            <Box
                sx={{
                    pt: { xs: 16, md: 16 },
                    pb: { xs: 8, md: 10 },
                    background: "linear-gradient(180deg, #FFFFFF 0%, #F3F4F6 100%)",
                }}
            >
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: "center", maxWidth: "800px", mx: "auto" }}>
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
                                fontSize: { xs: "1rem", md: "1.125rem" },
                            }}
                        >
                            {t("subtitle")}
                        </Typography>
                    </Box>
                </Container>
            </Box>

            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Contact Info Cards */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Stack spacing={3}>
                            <Box>
                                {contactInfo.map((info, index) => (
                                    <Paper
                                        key={index}
                                        elevation={0}
                                        sx={{
                                            p: 3,
                                            mb: 2,
                                            borderRadius: 4,
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 3,
                                            backgroundColor: "white",
                                            border: "1px solid",
                                            borderColor: "rgba(0,0,0,0.04)",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                transform: "translateX(8px)",
                                                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.08)",
                                                borderColor: "transparent",
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                minWidth: 56,
                                                height: 56,
                                                borderRadius: "50%",
                                                backgroundColor: info.bgColor,
                                                color: info.color,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            {info.icon}
                                        </Box>
                                        <Box>
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    color: "#9CA3AF",
                                                    fontWeight: 700,
                                                    textTransform: "uppercase",
                                                    letterSpacing: "0.05em",
                                                    display: "block",
                                                    mb: 0.5,
                                                }}
                                            >
                                                {info.title}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{ fontWeight: 600, color: "#1F2937" }}
                                            >
                                                {info.content}
                                            </Typography>
                                        </Box>
                                    </Paper>
                                ))}
                            </Box>

                            {/* Map Preview */}
                            <Paper
                                elevation={0}
                                sx={{
                                    height: 280,
                                    borderRadius: 4,
                                    overflow: "hidden",
                                    border: "4px solid white",
                                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                                }}
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.717158488316!2d116.2798835!3d-8.8955212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdb12643a6d71b%3A0x673c68379477e682!2sKuta%20Beach%20Mandalika!5e0!3m2!1sen!2sid!4v1703666666666!5m2!1sen!2sid"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </Paper>
                        </Stack>
                    </Grid>

                    {/* Contact Form */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 4, md: 6 },
                                borderRadius: 5,
                                backgroundColor: "white",
                                height: "100%",
                                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.05)",
                            }}
                        >
                            <Box sx={{ mb: 5 }}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontWeight: 800,
                                        color: "#111827",
                                        mb: 1.5,
                                        fontSize: "1.75rem",
                                    }}
                                >
                                    {t("form.title")}
                                </Typography>
                                <Typography variant="body1" sx={{ color: "#6B7280" }}>
                                    Isi formulir di bawah ini dan admin kami akan segera membalas
                                    via WhatsApp.
                                </Typography>
                            </Box>

                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={3}>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            fullWidth
                                            label={t("form.name")}
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            variant="outlined"
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    borderRadius: 3,
                                                    backgroundColor: "white",
                                                    "& fieldset": { borderColor: "#E5E7EB" },
                                                    "&:hover fieldset": { borderColor: "#D1D5DB" },
                                                    "&.Mui-focused fieldset": { borderColor: "primary.main" },
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            fullWidth
                                            label={t("form.phone")}
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            variant="outlined"
                                            type="tel"
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    borderRadius: 3,
                                                    backgroundColor: "white",
                                                    "& fieldset": { borderColor: "#E5E7EB" },
                                                    "&:hover fieldset": { borderColor: "#D1D5DB" },
                                                    "&.Mui-focused fieldset": { borderColor: "primary.main" },
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            fullWidth
                                            label={t("form.email")}
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            variant="outlined"
                                            type="email"
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    borderRadius: 3,
                                                    backgroundColor: "white",
                                                    "& fieldset": { borderColor: "#E5E7EB" },
                                                    "&:hover fieldset": { borderColor: "#D1D5DB" },
                                                    "&.Mui-focused fieldset": { borderColor: "primary.main" },
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            fullWidth
                                            label={t("form.subject")}
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            variant="outlined"
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    borderRadius: 3,
                                                    backgroundColor: "white",
                                                    "& fieldset": { borderColor: "#E5E7EB" },
                                                    "&:hover fieldset": { borderColor: "#D1D5DB" },
                                                    "&.Mui-focused fieldset": { borderColor: "primary.main" },
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            fullWidth
                                            label={t("form.message")}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            variant="outlined"
                                            multiline
                                            rows={6}
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    borderRadius: 3,
                                                    backgroundColor: "white",
                                                    "& fieldset": { borderColor: "#E5E7EB" },
                                                    "&:hover fieldset": { borderColor: "#D1D5DB" },
                                                    "&.Mui-focused fieldset": { borderColor: "primary.main" },
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            size="large"
                                            fullWidth
                                            startIcon={<WhatsAppIcon />}
                                            sx={{
                                                py: 2,
                                                borderRadius: 3,
                                                fontWeight: 700,
                                                backgroundColor: "#10B981",
                                                fontSize: "1.1rem",
                                                textTransform: "none",
                                                boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.4)",
                                                "&:hover": {
                                                    backgroundColor: "#059669",
                                                    boxShadow: "0 15px 30px -5px rgba(16, 185, 129, 0.5)",
                                                    transform: "translateY(-2px)",
                                                },
                                            }}
                                        >
                                            {t("form.send")}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

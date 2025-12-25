"use client";

import { Link } from "@/i18n/navigation";
import logo from "@/images/logo-sasak.png";
import {
    Email,
    Facebook,
    Instagram,
    LocationOn,
    Phone,
    Twitter,
    YouTube,
} from "@mui/icons-material";
import {
    Box,
    Container,
    Grid,
    IconButton,
    Link as MuiLink,
    Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
    const t = useTranslations("footer");
    const tNav = useTranslations("navbar");

    return (
        <Box
            component="footer"
            id="contact"
            sx={{
                backgroundColor: "#111827", // Dark background
                color: "white",
                pt: 8,
                pb: 4,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={8}>
                    {/* Brand & Description */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{ mb: 3 }}>
                            <Image
                                src={logo}
                                alt="Sasak Journey"
                                width={120}
                                height={120}
                                style={{ filter: "brightness(0) invert(1)" }}
                            />
                        </Box>
                        <Typography
                            variant="body2"
                            sx={{ color: "grey.400", lineHeight: 1.8, mb: 3 }}
                        >
                            {t("description")}
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <IconButton
                                size="small"
                                sx={{
                                    color: "white",
                                    bgcolor: "rgba(255,255,255,0.1)",
                                    "&:hover": { bgcolor: "primary.main" },
                                }}
                            >
                                <Instagram />
                            </IconButton>
                            <IconButton
                                size="small"
                                sx={{
                                    color: "white",
                                    bgcolor: "rgba(255,255,255,0.1)",
                                    "&:hover": { bgcolor: "primary.main" },
                                }}
                            >
                                <Facebook />
                            </IconButton>
                            <IconButton
                                size="small"
                                sx={{
                                    color: "white",
                                    bgcolor: "rgba(255,255,255,0.1)",
                                    "&:hover": { bgcolor: "primary.main" },
                                }}
                            >
                                <YouTube />
                            </IconButton>
                            <IconButton
                                size="small"
                                sx={{
                                    color: "white",
                                    bgcolor: "rgba(255,255,255,0.1)",
                                    "&:hover": { bgcolor: "primary.main" },
                                }}
                            >
                                <Twitter />
                            </IconButton>
                        </Box>
                    </Grid>

                    {/* Quick Links */}
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                            {t("quickLinks")}
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            <MuiLink
                                component={Link}
                                href="/"
                                color="inherit"
                                underline="hover"
                                sx={{ color: "grey.400" }}
                            >
                                {tNav("home")}
                            </MuiLink>
                            <MuiLink
                                component={Link}
                                href="/destinations"
                                color="inherit"
                                underline="hover"
                                sx={{ color: "grey.400" }}
                            >
                                {tNav("destinations")}
                            </MuiLink>
                            <MuiLink
                                component={Link}
                                href="/transportation"
                                color="inherit"
                                underline="hover"
                                sx={{ color: "grey.400" }}
                            >
                                {tNav("transportation")}
                            </MuiLink>
                            <MuiLink
                                component={Link}
                                href="#about"
                                color="inherit"
                                underline="hover"
                                sx={{ color: "grey.400" }}
                            >
                                {tNav("aboutUs")}
                            </MuiLink>
                        </Box>
                    </Grid>

                    {/* Contact Info */}
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                            {t("contact")}
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                            <Box sx={{ display: "flex", gap: 2 }}>
                                <LocationOn sx={{ color: "primary.main" }} />
                                <Typography variant="body2" sx={{ color: "grey.400" }}>
                                    Jl. Pariwisata Pantai Kuta, Mandalika, Lombok Tengah, NTB 83573
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", gap: 2 }}>
                                <Phone sx={{ color: "primary.main" }} />
                                <Typography variant="body2" sx={{ color: "grey.400" }}>
                                    +62 877-7393-1343
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", gap: 2 }}>
                                <Email sx={{ color: "primary.main" }} />
                                <Typography variant="body2" sx={{ color: "grey.400" }}>
                                    sasakproject@gmail.com
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        borderTop: "1px solid",
                        borderColor: "rgba(255,255,255,0.1)",
                        mt: 8,
                        pt: 4,
                        textAlign: "center",
                    }}
                >
                    <Typography variant="body2" sx={{ color: "grey.500" }}>
                        &copy; {new Date().getFullYear()} {t("copyright")}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

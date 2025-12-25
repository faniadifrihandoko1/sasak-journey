"use client";

import {
  formatPrice,
  popularDestinations,
  travelCategories,
} from "@/data/destinations";
import { Link } from "@/i18n/navigation";
import { Place as PlaceIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function DestinationsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const t = useTranslations("destinations");
  const tItems = useTranslations("destinations.items");
  const tCategories = useTranslations("hero.searchForm.categories");
  const tTags = useTranslations("destinations.tags");

  // Sync selectedCategory with URL params when they change
  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  const filteredDestinations = useMemo(() => {
    if (selectedCategory === "all") {
      return popularDestinations;
    }
    return popularDestinations.filter((dest) =>
      dest.categories.includes(selectedCategory)
    );
  }, [selectedCategory]);

  const handleCategoryChange = (newCategory: string) => {
    setSelectedCategory(newCategory);
    if (newCategory === "all") {
      router.push("/destinations");
    } else {
      router.push(`/destinations?category=${newCategory}`);
    }
  };

  const getCategoryLabel = (value: string) => {
    if (value === "all") return "Semua Destinasi";
    try {
      return tCategories(value);
    } catch {
      return value;
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        pt: { xs: 10, md: 12 },
        pb: 8,
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              color: "primary.main",
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            {t("title")}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: "600px",
              mx: "auto",
              fontSize: { xs: "0.875rem", md: "1rem" },
            }}
          >
            {t("subtitle")}
          </Typography>
        </Box>

        {/* Category Filter Tabs */}
        <Paper
          elevation={2}
          sx={{
            p: 2,
            mb: 4,
            borderRadius: 2,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          <Chip
            label={getCategoryLabel("all")}
            onClick={() => handleCategoryChange("all")}
            color={selectedCategory === "all" ? "primary" : "default"}
            variant={selectedCategory === "all" ? "filled" : "outlined"}
            sx={{
              fontWeight: selectedCategory === "all" ? 600 : 400,
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-2px)",
              },
            }}
          />
          {travelCategories.map((category) => (
            <Chip
              key={category.id}
              label={getCategoryLabel(category.id)}
              onClick={() => handleCategoryChange(category.id)}
              color={selectedCategory === category.id ? "primary" : "default"}
              variant={selectedCategory === category.id ? "filled" : "outlined"}
              sx={{
                fontWeight: selectedCategory === category.id ? 600 : 400,
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                },
              }}
            />
          ))}
        </Paper>

        {/* Destinations Grid */}
        {filteredDestinations.length > 0 ? (
          <Grid container spacing={4}>
            {filteredDestinations.map((dest) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={dest.key}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: 250,
                      overflow: "hidden",
                      "& img": {
                        transition: "transform 0.3s ease",
                      },
                      "&:hover img": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <Image
                      src={dest.image}
                      alt={tItems(`${dest.key}.title`)}
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />
                    {/* Location Badge */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 12,
                        left: 12,
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        borderRadius: 2,
                        px: 1.5,
                        py: 0.5,
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      <PlaceIcon sx={{ fontSize: 14, color: "white" }} />
                      <Typography
                        variant="caption"
                        sx={{ color: "white", fontWeight: 500 }}
                      >
                        {dest.location}
                      </Typography>
                    </Box>
                  </Box>
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      p: 3,
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{ mb: 1, fontWeight: 600 }}
                    >
                      {tItems(`${dest.key}.title`)}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2, flexGrow: 1 }}
                    >
                      {tItems(`${dest.key}.description`)}
                    </Typography>

                    {/* Tags */}
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 0.5,
                        mb: 2,
                      }}
                    >
                      {dest.tags.slice(0, 3).map((tag) => (
                        <Chip
                          key={tag}
                          label={tTags(tag)}
                          size="small"
                          sx={{
                            backgroundColor: "primary.light",
                            color: "white",
                            fontSize: "0.7rem",
                            height: 24,
                          }}
                        />
                      ))}
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <Box>
                        <Typography variant="caption" color="text.secondary">
                          {t("from")}
                        </Typography>
                        <Typography
                          variant="h6"
                          color="primary.main"
                          fontWeight={700}
                          sx={{ lineHeight: 1.2 }}
                        >
                          {formatPrice(dest.priceFrom, dest.currency)}
                        </Typography>
                      </Box>
                    </Box>
                    <Button
                      component={Link}
                      href={`/destination/${dest.slug}`}
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="medium"
                      sx={{
                        textTransform: "none",
                        fontWeight: 600,
                        py: 1,
                      }}
                    >
                      {t("viewDetails")}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Paper
            elevation={0}
            sx={{
              p: 6,
              textAlign: "center",
              backgroundColor: "background.default",
            }}
          >
            <Typography variant="h5" fontWeight={600} mb={1}>
              Tidak ada destinasi ditemukan
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Coba pilih kategori lain
            </Typography>
          </Paper>
        )}
      </Container>
    </Box>
  );
}

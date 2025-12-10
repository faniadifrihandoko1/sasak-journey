"use client";

import { useState, useMemo, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Paper,
} from "@mui/material";
import { Star as StarIcon } from "@mui/icons-material";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useSearchParams, useRouter } from "next/navigation";
import { Link } from "@/i18n/navigation";

const destinationKeys = [
  { key: "giliTrawangan", category: "beach", slug: "gili-trawangan" },
  { key: "mountRinjani", category: "mountain", slug: "mount-rinjani" },
  { key: "kutaMandalika", category: "beach", slug: "kuta-mandalika" },
  { key: "pinkBeach", category: "adventure", slug: "pink-beach" },
  { key: "sembalunValley", category: "culture", slug: "sembalun-valley" },
  { key: "mereseHill", category: "adventure", slug: "merese-hill" },
];

const destinationImages = [
  "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
  "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=800",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=800",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800",
];

export default function DestinationsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const t = useTranslations("destinations");
  const tItems = useTranslations("destinations.items");
  const tCategories = useTranslations("hero.searchForm.categories");

  // Sync selectedCategory with URL params when they change
  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  const filteredDestinations = useMemo(() => {
    if (selectedCategory === "all") {
      return destinationKeys;
    }
    return destinationKeys.filter((dest) => dest.category === selectedCategory);
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
    const map: Record<string, string> = {
      all: "All Destinations",
      beach: tCategories("beach"),
      mountain: tCategories("mountain"),
      culture: tCategories("culture"),
      adventure: tCategories("adventure"),
    };
    return map[value] || value;
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
          {["all", "beach", "mountain", "culture", "adventure"].map(
            (category) => (
              <Chip
                key={category}
                label={getCategoryLabel(category)}
                onClick={() => handleCategoryChange(category)}
                color={selectedCategory === category ? "primary" : "default"}
                variant={selectedCategory === category ? "filled" : "outlined"}
                sx={{
                  fontWeight: selectedCategory === category ? 600 : 400,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                  },
                }}
              />
            )
          )}
        </Paper>

        {/* Destinations Grid */}
        {filteredDestinations.length > 0 ? (
          <Grid container spacing={4}>
            {filteredDestinations.map((dest) => {
              const destinationIndex = destinationKeys.findIndex(
                (d) => d.key === dest.key
              );
              return (
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
                        boxShadow: 6,
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
                        src={destinationImages[destinationIndex]}
                        alt={tItems(`${dest.key}.name`)}
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                      <Chip
                        label={tCategories(dest.category)}
                        size="small"
                        sx={{
                          position: "absolute",
                          top: 12,
                          right: 12,
                          backgroundColor: "rgba(255, 255, 255, 0.9)",
                          fontWeight: 600,
                        }}
                      />
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
                        {tItems(`${dest.key}.name`)}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2, flexGrow: 1 }}
                      >
                        {tItems(`${dest.key}.description`)}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 2,
                        }}
                      >
                        <Typography
                          variant="h6"
                          color="primary.main"
                          fontWeight={600}
                        >
                          {t("from")} ${tItems(`${dest.key}.price`)}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          <StarIcon sx={{ fontSize: 18, color: "#FFC107" }} />
                          <Typography variant="body2" fontWeight={600}>
                            4.8
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
              );
            })}
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
              No destinations found
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Try selecting a different category
            </Typography>
          </Paper>
        )}
      </Container>
    </Box>
  );
}

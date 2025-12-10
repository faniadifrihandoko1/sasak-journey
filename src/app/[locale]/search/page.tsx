"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Paper,
  Chip,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Divider,
  CircularProgress,
} from "@mui/material";
import {
  Star as StarIcon,
  Place as PlaceIcon,
  CalendarToday as CalendarIcon,
  FilterList as FilterIcon,
  Sort as SortIcon,
} from "@mui/icons-material";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { Link } from "@/i18n/navigation";

// Mock data for packages
const allPackages = [
  {
    id: 1,
    name: "Gili Trawangan Paradise",
    category: "beach",
    destination: "gili-trawangan",
    duration: "3d2n",
    days: 3,
    nights: 2,
    price: 299,
    rating: 4.8,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800",
    description:
      "Crystal clear waters, vibrant nightlife, and stunning sunsets await you.",
    popular: true,
  },
  {
    id: 2,
    name: "Mount Rinjani Summit Trek",
    category: "mountain",
    destination: "sembalun",
    duration: "5d4n",
    days: 5,
    nights: 4,
    price: 399,
    rating: 4.9,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
    description:
      "Challenge yourself with an unforgettable trek to the summit of Mount Rinjani.",
    popular: true,
  },
  {
    id: 3,
    name: "Kuta Mandalika Beach Escape",
    category: "beach",
    destination: "kuta-mandalika",
    duration: "3d2n",
    days: 3,
    nights: 2,
    price: 249,
    rating: 4.7,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
    description:
      "Pristine beaches perfect for surfing, relaxation, and water sports.",
    popular: false,
  },
  {
    id: 4,
    name: "Pink Beach Adventure",
    category: "adventure",
    destination: "pink-beach",
    duration: "3d2n",
    days: 3,
    nights: 2,
    price: 199,
    rating: 4.6,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=800",
    description:
      "Experience the unique pink sand beaches, a natural wonder of Lombok.",
    popular: false,
  },
  {
    id: 5,
    name: "Sembalun Valley Explorer",
    category: "culture",
    destination: "sembalun",
    duration: "5d4n",
    days: 5,
    nights: 4,
    price: 349,
    rating: 4.8,
    reviews: 67,
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=800",
    description:
      "Explore the beautiful highland valley with stunning rice terraces and mountain views.",
    popular: false,
  },
  {
    id: 6,
    name: "Merese Hill Sunset Tour",
    category: "adventure",
    destination: "merese-hill",
    duration: "3d2n",
    days: 3,
    nights: 2,
    price: 179,
    rating: 4.5,
    reviews: 112,
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800",
    description:
      "Witness breathtaking panoramic views of the ocean and surrounding islands.",
    popular: false,
  },
  {
    id: 7,
    name: "Mataram Cultural Heritage",
    category: "culture",
    destination: "mataram",
    duration: "3d2n",
    days: 3,
    nights: 2,
    price: 229,
    rating: 4.6,
    reviews: 145,
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800",
    description:
      "Discover the rich Sasak culture and historical sites of Mataram.",
    popular: false,
  },
  {
    id: 8,
    name: "Gili Islands Complete Experience",
    category: "beach",
    destination: "gili-trawangan",
    duration: "7d6n",
    days: 7,
    nights: 6,
    price: 599,
    rating: 4.9,
    reviews: 203,
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800",
    description:
      "Complete island hopping experience across all three Gili Islands.",
    popular: true,
  },
];

export default function SearchResultsPage() {
  const t = useTranslations("searchResults");
  const tCategories = useTranslations("hero.searchForm.categories");
  const tDestinations = useTranslations("hero.searchForm.destinations");
  const tDurations = useTranslations("hero.searchForm.durations");
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState(
    searchParams.get("category") || ""
  );
  const [destinationFilter, setDestinationFilter] = useState(
    searchParams.get("destination") || ""
  );
  const [durationFilter, setDurationFilter] = useState(
    searchParams.get("duration") || ""
  );
  const [sortBy, setSortBy] = useState("popular");

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 500);
  }, []);

  const filteredPackages = useMemo(() => {
    let filtered = [...allPackages];

    if (categoryFilter) {
      filtered = filtered.filter((pkg) => pkg.category === categoryFilter);
    }

    if (destinationFilter) {
      filtered = filtered.filter(
        (pkg) => pkg.destination === destinationFilter
      );
    }

    if (durationFilter) {
      filtered = filtered.filter((pkg) => pkg.duration === durationFilter);
    }

    // Sort
    switch (sortBy) {
      case "priceLow":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "priceHigh":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "popular":
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      case "newest":
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return filtered;
  }, [categoryFilter, destinationFilter, durationFilter, sortBy]);

  const clearFilters = () => {
    setCategoryFilter("");
    setDestinationFilter("");
    setDurationFilter("");
  };

  const getCategoryLabel = (value: string) => {
    const map: Record<string, string> = {
      beach: tCategories("beach"),
      mountain: tCategories("mountain"),
      culture: tCategories("culture"),
      adventure: tCategories("adventure"),
    };
    return map[value] || value;
  };

  const getDestinationLabel = (value: string) => {
    const map: Record<string, string> = {
      "gili-trawangan": tDestinations("giliTrawangan"),
      mataram: tDestinations("mataram"),
      sembalun: tDestinations("sembalun"),
      "kuta-mandalika": tDestinations("kutaMandalika"),
      "pink-beach": tDestinations("pinkBeach"),
      "merese-hill": tDestinations("mereseHill"),
    };
    return map[value] || value;
  };

  const getDestinationSlug = (destination: string, packageId: number) => {
    // Map destinations to slugs for detail pages
    const destinationSlugMap: Record<string, string> = {
      "gili-trawangan": "gili-trawangan",
      sembalun: "mount-rinjani",
      "kuta-mandalika": "kuta-mandalika",
      "pink-beach": "pink-beach",
      "merese-hill": "merese-hill",
      mataram: "mataram",
    };
    return destinationSlugMap[destination] || `destination-${packageId}`;
  };

  const hasActiveFilters =
    categoryFilter || destinationFilter || durationFilter;

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
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              color: "primary.main",
              mb: 1,
              fontSize: { xs: "1.75rem", md: "2.5rem" },
            }}
          >
            {t("title")}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
          >
            {t("subtitle", { count: filteredPackages.length })}
          </Typography>
        </Box>

        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "400px",
            }}
          >
            <CircularProgress color="primary" />
          </Box>
        ) : (
          <Grid container spacing={3}>
            {/* Filters Sidebar */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  position: "sticky",
                  top: 100,
                  borderRadius: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <FilterIcon color="primary" />
                    <Typography variant="h6" fontWeight={600}>
                      {t("filters.title")}
                    </Typography>
                  </Box>
                  {hasActiveFilters && (
                    <Button
                      size="small"
                      onClick={clearFilters}
                      sx={{ textTransform: "none" }}
                    >
                      {t("filters.clearFilters")}
                    </Button>
                  )}
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Category Filter */}
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="category-label">
                    {t("filters.category")}
                  </InputLabel>
                  <Select
                    labelId="category-label"
                    value={categoryFilter}
                    label={t("filters.category")}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                  >
                    <MenuItem value="">All Categories</MenuItem>
                    <MenuItem value="beach">{tCategories("beach")}</MenuItem>
                    <MenuItem value="mountain">
                      {tCategories("mountain")}
                    </MenuItem>
                    <MenuItem value="culture">
                      {tCategories("culture")}
                    </MenuItem>
                    <MenuItem value="adventure">
                      {tCategories("adventure")}
                    </MenuItem>
                  </Select>
                </FormControl>

                {/* Destination Filter */}
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="destination-label">
                    {t("filters.destination")}
                  </InputLabel>
                  <Select
                    labelId="destination-label"
                    value={destinationFilter}
                    label={t("filters.destination")}
                    onChange={(e) => setDestinationFilter(e.target.value)}
                  >
                    <MenuItem value="">All Destinations</MenuItem>
                    <MenuItem value="gili-trawangan">
                      {tDestinations("giliTrawangan")}
                    </MenuItem>
                    <MenuItem value="mataram">
                      {tDestinations("mataram")}
                    </MenuItem>
                    <MenuItem value="sembalun">
                      {tDestinations("sembalun")}
                    </MenuItem>
                    <MenuItem value="kuta-mandalika">
                      {tDestinations("kutaMandalika")}
                    </MenuItem>
                    <MenuItem value="pink-beach">
                      {tDestinations("pinkBeach")}
                    </MenuItem>
                    <MenuItem value="merese-hill">
                      {tDestinations("mereseHill")}
                    </MenuItem>
                  </Select>
                </FormControl>

                {/* Duration Filter */}
                <FormControl fullWidth>
                  <InputLabel id="duration-label">
                    {t("filters.duration")}
                  </InputLabel>
                  <Select
                    labelId="duration-label"
                    value={durationFilter}
                    label={t("filters.duration")}
                    onChange={(e) => setDurationFilter(e.target.value)}
                  >
                    <MenuItem value="">All Durations</MenuItem>
                    <MenuItem value="3d2n">{tDurations("3d2n")}</MenuItem>
                    <MenuItem value="5d4n">{tDurations("5d4n")}</MenuItem>
                    <MenuItem value="7d6n">{tDurations("7d6n")}</MenuItem>
                    <MenuItem value="7plus">{tDurations("7plus")}</MenuItem>
                  </Select>
                </FormControl>
              </Paper>
            </Grid>

            {/* Results */}
            <Grid size={{ xs: 12, md: 9 }}>
              {/* Sort Bar */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3,
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  {filteredPackages.length}{" "}
                  {filteredPackages.length === 1 ? "package" : "packages"} found
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <SortIcon fontSize="small" color="action" />
                  <FormControl size="small" sx={{ minWidth: 200 }}>
                    <Select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      displayEmpty
                      sx={{ textTransform: "none" }}
                    >
                      <MenuItem value="popular">{t("sortBy.popular")}</MenuItem>
                      <MenuItem value="priceLow">
                        {t("sortBy.priceLow")}
                      </MenuItem>
                      <MenuItem value="priceHigh">
                        {t("sortBy.priceHigh")}
                      </MenuItem>
                      <MenuItem value="newest">{t("sortBy.newest")}</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>

              {/* Active Filters */}
              {hasActiveFilters && (
                <Box sx={{ display: "flex", gap: 1, mb: 3, flexWrap: "wrap" }}>
                  {categoryFilter && (
                    <Chip
                      label={`${t("filters.category")}: ${getCategoryLabel(
                        categoryFilter
                      )}`}
                      onDelete={() => setCategoryFilter("")}
                      color="primary"
                      variant="outlined"
                    />
                  )}
                  {destinationFilter && (
                    <Chip
                      label={`${t(
                        "filters.destination"
                      )}: ${getDestinationLabel(destinationFilter)}`}
                      onDelete={() => setDestinationFilter("")}
                      color="primary"
                      variant="outlined"
                    />
                  )}
                  {durationFilter && (
                    <Chip
                      label={`${t("filters.duration")}: ${tDurations(
                        durationFilter as any
                      )}`}
                      onDelete={() => setDurationFilter("")}
                      color="primary"
                      variant="outlined"
                    />
                  )}
                </Box>
              )}

              {/* Results Grid */}
              {filteredPackages.length > 0 ? (
                <Grid container spacing={3}>
                  {filteredPackages.map((pkg) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={pkg.id}>
                      <Card
                        sx={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          overflow: "hidden",
                          borderRadius: 2,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-4px)",
                            boxShadow: 6,
                          },
                        }}
                      >
                        <Box
                          sx={{
                            position: "relative",
                            width: "100%",
                            height: 200,
                            overflow: "hidden",
                          }}
                        >
                          <Image
                            src={pkg.image}
                            alt={pkg.name}
                            fill
                            style={{
                              objectFit: "cover",
                              transition: "transform 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = "scale(1.1)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "scale(1)";
                            }}
                          />
                          {pkg.popular && (
                            <Chip
                              label="Popular"
                              color="secondary"
                              size="small"
                              sx={{
                                position: "absolute",
                                top: 12,
                                right: 12,
                                fontWeight: 600,
                              }}
                            />
                          )}
                        </Box>
                        <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
                          <Typography
                            variant="h6"
                            component="h3"
                            sx={{
                              fontWeight: 600,
                              mb: 1,
                              fontSize: "1.1rem",
                            }}
                          >
                            {pkg.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 2, minHeight: 40 }}
                          >
                            {pkg.description}
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
                              label={getDestinationLabel(pkg.destination)}
                              size="small"
                              variant="outlined"
                              sx={{ fontSize: "0.75rem" }}
                            />
                            <Chip
                              icon={<CalendarIcon fontSize="small" />}
                              label={`${pkg.days} ${t("packages.duration")} / ${
                                pkg.nights
                              } ${t("packages.nights")}`}
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
                                ${pkg.price}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                              >
                                {t("packages.perPerson")}
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 0.5,
                              }}
                            >
                              <StarIcon
                                sx={{ fontSize: 18, color: "#FFC107" }}
                              />
                              <Typography variant="body2" fontWeight={600}>
                                {pkg.rating}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                              >
                                ({pkg.reviews})
                              </Typography>
                            </Box>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              gap: 1,
                            }}
                          >
                            <Button
                              component={Link}
                              href={`/destination/${getDestinationSlug(
                                pkg.destination,
                                pkg.id
                              )}`}
                              variant="outlined"
                              color="primary"
                              fullWidth
                              size="small"
                              sx={{ textTransform: "none" }}
                            >
                              {t("packages.viewDetails")}
                            </Button>
                            <Button
                              component={Link}
                              href={`/destination/${getDestinationSlug(
                                pkg.destination,
                                pkg.id
                              )}`}
                              variant="contained"
                              color="secondary"
                              fullWidth
                              size="small"
                              sx={{
                                textTransform: "none",
                                fontWeight: 600,
                              }}
                            >
                              {t("packages.bookNow")}
                            </Button>
                          </Box>
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
                    {t("noResults")}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" mb={3}>
                    {t("noResultsDescription")}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    href="/"
                    sx={{ textTransform: "none" }}
                  >
                    Explore Popular Destinations
                  </Button>
                </Paper>
              )}
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
}

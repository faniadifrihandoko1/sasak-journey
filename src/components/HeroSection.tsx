"use client";

import {
  durations,
  getDestinationsByCategory,
  searchDestinations,
  travelCategories,
} from "@/data/destinations";
import { useRouter } from "@/i18n/navigation";
import bgImage from "@/images/bg-color.jpg";
import {
  CalendarToday as CalendarIcon,
  Category as CategoryIcon,
  Place as PlaceIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function HeroSection() {
  const t = useTranslations("hero");
  const tForm = useTranslations("hero.searchForm");
  const router = useRouter();

  const [category, setCategory] = useState("");
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");

  // Filter destinations based on selected category
  const filteredDestinations = useMemo(() => {
    return getDestinationsByCategory(category);
  }, [category]);

  // Reset destination when category changes and destination is not in filtered list
  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    // Check if current destination is still valid for new category
    if (destination) {
      const newFiltered = getDestinationsByCategory(newCategory);
      const isStillValid = newFiltered.some((d) => d.id === destination);
      if (!isStillValid) {
        setDestination("");
      }
    }
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (category) {
      params.set("category", category);
    }
    if (destination) {
      params.set("destination", destination);
      // If no category selected, use first category from destination
      if (!category) {
        const dest = searchDestinations.find((d) => d.id === destination);
        if (dest && dest.categories.length > 0) {
          params.set("category", dest.categories[0]);
        }
      }
    }
    if (duration) {
      params.set("duration", duration);
    }

    router.push(`/destinations?${params.toString()}`);
  };

  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Image
          src={bgImage}
          alt="Lombok Island Landscape"
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>

      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.65)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          py: { xs: 4, md: 8 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h1"
            sx={{
              color: "white",
              fontWeight: 700,
              mb: { xs: 2, md: 3 },
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
              fontSize: {
                xs: "2rem",
                sm: "2.25rem",
                md: "3rem",
                lg: "3.5rem",
              },
              lineHeight: { xs: 1.2, sm: 1.3, md: 1.2 },
              px: { xs: 1, sm: 2 },
            }}
          >
            {t("headline")}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "rgba(255, 255, 255, 0.95)",
              fontWeight: 400,
              maxWidth: "800px",
              mx: "auto",
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)",
              fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" },
              lineHeight: { xs: 1.5, sm: 1.6, md: 1.5 },
              px: { xs: 1.5, sm: 2 },
              mt: { xs: 1, md: 0 },
            }}
          >
            {t("subheadline")}
          </Typography>
        </Box>

        {/* Search Form */}
        <Paper
          elevation={24}
          sx={{
            p: { xs: 2, sm: 2.5, md: 3 },
            borderRadius: { xs: 2, md: 3 },
            backgroundColor: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            maxWidth: "950px",
            mx: "auto",
            boxShadow:
              "0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <Grid container spacing={{ xs: 1.5, md: 2 }} alignItems="flex-end">
            {/* Category Select */}
            <Grid size={{ xs: 12, md: 3.5 }}>
              <Box sx={{ position: "relative" }}>
                <CategoryIcon
                  sx={{
                    position: "absolute",
                    left: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "primary.main",
                    fontSize: 18,
                    zIndex: 1,
                    pointerEvents: "none",
                  }}
                />
                <FormControl fullWidth sx={selectStyles}>
                  <Select
                    displayEmpty
                    value={category}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    MenuProps={menuProps}
                    renderValue={(selected) => {
                      if (!selected) {
                        return (
                          <Box component="span" sx={placeholderStyles}>
                            {tForm("travelCategory")}
                          </Box>
                        );
                      }
                      return (
                        <Box component="span" sx={valueStyles}>
                          {tForm(`categories.${selected}`)}
                        </Box>
                      );
                    }}
                  >
                    {travelCategories.map((cat) => (
                      <MenuItem key={cat.id} value={cat.id}>
                        {tForm(`categories.${cat.labelKey}`)}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            {/* Destination Select */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ position: "relative" }}>
                <PlaceIcon
                  sx={{
                    position: "absolute",
                    left: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "primary.main",
                    fontSize: 18,
                    zIndex: 1,
                    pointerEvents: "none",
                  }}
                />
                <FormControl fullWidth sx={selectStyles}>
                  <Select
                    displayEmpty
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    MenuProps={menuProps}
                    renderValue={(selected) => {
                      if (!selected) {
                        return (
                          <Box component="span" sx={placeholderStyles}>
                            {tForm("selectDestination")}
                          </Box>
                        );
                      }
                      const dest = searchDestinations.find(
                        (d) => d.id === selected
                      );
                      return (
                        <Box component="span" sx={valueStyles}>
                          {dest
                            ? tForm(`destinations.${dest.labelKey}`)
                            : selected}
                        </Box>
                      );
                    }}
                  >
                    {filteredDestinations.map((dest) => (
                      <MenuItem key={dest.id} value={dest.id}>
                        {tForm(`destinations.${dest.labelKey}`)}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            {/* Duration Select */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Box sx={{ position: "relative" }}>
                <CalendarIcon
                  sx={{
                    position: "absolute",
                    left: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "primary.main",
                    fontSize: 18,
                    zIndex: 1,
                    pointerEvents: "none",
                  }}
                />
                <FormControl fullWidth sx={selectStyles}>
                  <Select
                    displayEmpty
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    MenuProps={menuProps}
                    renderValue={(selected) => {
                      if (!selected) {
                        return (
                          <Box component="span" sx={placeholderStyles}>
                            {tForm("duration")}
                          </Box>
                        );
                      }
                      return (
                        <Box component="span" sx={valueStyles}>
                          {tForm(`durations.${selected}`)}
                        </Box>
                      );
                    }}
                  >
                    {durations.map((dur) => (
                      <MenuItem key={dur.id} value={dur.id}>
                        {tForm(`durations.${dur.labelKey}`)}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            {/* Search Button */}
            <Grid size={{ xs: 12, md: 1.5 }}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="small"
                startIcon={<SearchIcon sx={{ fontSize: 16 }} />}
                onClick={handleSearch}
                sx={{
                  height: "44px",
                  minHeight: "44px",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  borderRadius: 2,
                  textTransform: "none",
                  whiteSpace: "nowrap",
                  background:
                    "linear-gradient(135deg, #006B7D 0%, #008FA3 100%)",
                  boxShadow: "0 8px 24px rgba(0, 107, 125, 0.4)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "& .MuiButton-startIcon": {
                    marginRight: "6px",
                    marginLeft: 0,
                  },
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #008FA3 0%, #006B7D 100%)",
                    boxShadow: "0 12px 32px rgba(0, 107, 125, 0.5)",
                    transform: "translateY(-2px)",
                  },
                  "&:active": {
                    transform: "translateY(0)",
                  },
                }}
              >
                {tForm("findYourJourney")}
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

// Shared styles
const selectStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    transition: "all 0.3s ease",
    pl: 3.5,
    pr: 2,
    height: "44px",
    minHeight: "44px",
    display: "flex",
    alignItems: "center",
    "& .MuiSelect-select": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      pr: 4,
      fontSize: "0.875rem",
      display: "flex",
      alignItems: "center",
      height: "100%",
      paddingLeft: "0px !important",
      paddingTop: "0px !important",
      paddingBottom: "0px !important",
    },
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 1)",
      boxShadow: "0 4px 12px rgba(0, 107, 125, 0.15)",
    },
    "&.Mui-focused": {
      backgroundColor: "rgba(255, 255, 255, 1)",
      boxShadow: "0 4px 16px rgba(0, 107, 125, 0.2)",
    },
  },
};

const menuProps = {
  PaperProps: {
    sx: {
      maxHeight: 180,
      borderRadius: 2,
      mt: 0.5,
    },
  },
};

const placeholderStyles = {
  color: "rgba(0, 0, 0, 0.5)",
  fontSize: "0.875rem",
  paddingLeft: "10px",
};

const valueStyles = {
  fontSize: "0.875rem",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  paddingLeft: "10px",
};

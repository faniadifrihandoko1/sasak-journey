"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Paper,
} from "@mui/material";
import {
  Search as SearchIcon,
  Category as CategoryIcon,
  Place as PlaceIcon,
  CalendarToday as CalendarIcon,
} from "@mui/icons-material";
import Image from "next/image";
import { useTranslations } from "next-intl";
import bgImage from "@/images/bg-color.jpg";

export default function HeroSection() {
  const t = useTranslations("hero");
  const tForm = useTranslations("hero.searchForm");
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

      {/* Dark Overlay (60-70% opacity) */}
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
                xs: "1.75rem",
                sm: "2.25rem",
                md: "3rem",
                lg: "3.5rem",
              },
              lineHeight: {
                xs: 1.2,
                sm: 1.3,
                md: 1.2,
              },
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
              fontSize: {
                xs: "0.875rem",
                sm: "1rem",
                md: "1.25rem",
              },
              lineHeight: {
                xs: 1.5,
                sm: 1.6,
                md: 1.5,
              },
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
            <Grid size={{ xs: 12, md: 3.5 }}>
              <Box>
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
                  <FormControl
                    fullWidth
                    sx={{
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
                    }}
                  >
                    <Select
                      displayEmpty
                      defaultValue=""
                      renderValue={(selected) => {
                        if (!selected) {
                          return (
                            <Box
                              component="span"
                              sx={{
                                color: "rgba(0, 0, 0, 0.5)",
                                fontSize: "0.875rem",
                                paddingLeft: "10px",
                              }}
                            >
                              {tForm("travelCategory")}
                            </Box>
                          );
                        }
                        const value = selected as string;
                        return (
                          <Box
                            component="span"
                            sx={{
                              fontSize: "0.875rem",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              paddingLeft: "10px",
                            }}
                          >
                            {value === "beach" && tForm("categories.beach")}
                            {value === "mountain" &&
                              tForm("categories.mountain")}
                            {value === "culture" && tForm("categories.culture")}
                            {value === "adventure" &&
                              tForm("categories.adventure")}
                          </Box>
                        );
                      }}
                    >
                      <MenuItem value="beach">
                        {tForm("categories.beach")}
                      </MenuItem>
                      <MenuItem value="mountain">
                        {tForm("categories.mountain")}
                      </MenuItem>
                      <MenuItem value="culture">
                        {tForm("categories.culture")}
                      </MenuItem>
                      <MenuItem value="adventure">
                        {tForm("categories.adventure")}
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box>
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
                  <FormControl
                    fullWidth
                    sx={{
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
                    }}
                  >
                    <Select
                      displayEmpty
                      defaultValue=""
                      renderValue={(selected) => {
                        if (!selected) {
                          return (
                            <Box
                              component="span"
                              sx={{
                                color: "rgba(0, 0, 0, 0.5)",
                                fontSize: "0.875rem",
                                paddingLeft: "10px",
                              }}
                            >
                              {tForm("selectDestination")}
                            </Box>
                          );
                        }
                        const value = selected as string;
                        return (
                          <Box
                            component="span"
                            sx={{
                              fontSize: "0.875rem",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              paddingLeft: "10px",
                            }}
                          >
                            {value === "gili-trawangan" &&
                              tForm("destinations.giliTrawangan")}
                            {value === "mataram" &&
                              tForm("destinations.mataram")}
                            {value === "sembalun" &&
                              tForm("destinations.sembalun")}
                            {value === "kuta-mandalika" &&
                              tForm("destinations.kutaMandalika")}
                            {value === "pink-beach" &&
                              tForm("destinations.pinkBeach")}
                            {value === "merese-hill" &&
                              tForm("destinations.mereseHill")}
                          </Box>
                        );
                      }}
                    >
                      <MenuItem value="gili-trawangan">
                        {tForm("destinations.giliTrawangan")}
                      </MenuItem>
                      <MenuItem value="mataram">
                        {tForm("destinations.mataram")}
                      </MenuItem>
                      <MenuItem value="sembalun">
                        {tForm("destinations.sembalun")}
                      </MenuItem>
                      <MenuItem value="kuta-mandalika">
                        {tForm("destinations.kutaMandalika")}
                      </MenuItem>
                      <MenuItem value="pink-beach">
                        {tForm("destinations.pinkBeach")}
                      </MenuItem>
                      <MenuItem value="merese-hill">
                        {tForm("destinations.mereseHill")}
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Box>
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
                  <FormControl
                    fullWidth
                    sx={{
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
                    }}
                  >
                    <Select
                      displayEmpty
                      defaultValue=""
                      renderValue={(value) => {
                        if (!value) {
                          return (
                            <Box
                              component="span"
                              sx={{
                                color: "rgba(0, 0, 0, 0.5)",
                                fontSize: "0.875rem",
                                paddingLeft: "10px",
                              }}
                            >
                              {tForm("duration")}
                            </Box>
                          );
                        }
                        const selected = value as string;
                        return (
                          <Box
                            component="span"
                            sx={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              fontSize: "0.875rem",
                              paddingLeft: "10px",
                            }}
                          >
                            {selected === "3d2n" && tForm("durations.3d2n")}
                            {selected === "5d4n" && tForm("durations.5d4n")}
                            {selected === "7d6n" && tForm("durations.7d6n")}
                            {selected === "7plus" && tForm("durations.7plus")}
                          </Box>
                        );
                      }}
                    >
                      <MenuItem value="3d2n">
                        {tForm("durations.3d2n")}
                      </MenuItem>
                      <MenuItem value="5d4n">
                        {tForm("durations.5d4n")}
                      </MenuItem>
                      <MenuItem value="7d6n">
                        {tForm("durations.7d6n")}
                      </MenuItem>
                      <MenuItem value="7plus">
                        {tForm("durations.7plus")}
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 1.5 }}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="small"
                startIcon={<SearchIcon sx={{ fontSize: 16 }} />}
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

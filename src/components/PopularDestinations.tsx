"use client";

import { formatPrice, popularDestinations } from "@/data/destinations";
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
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function PopularDestinations() {
  const t = useTranslations("destinations");
  const tItems = useTranslations("destinations.items");
  const tTags = useTranslations("destinations.tags");

  return (
    <Box
      id="destinations"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "white",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          textAlign="center"
          sx={{ mb: 2, color: "primary.main", fontWeight: 700 }}
        >
          {t("title")}
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ mb: 6, color: "text.secondary", maxWidth: "600px", mx: "auto" }}
        >
          {t("subtitle")}
        </Typography>

        <Grid container spacing={4}>
          {popularDestinations.slice(0, 6).map((destination) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={destination.key}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
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
                    src={destination.image}
                    alt={tItems(`${destination.key}.title`)}
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
                      {destination.location}
                    </Typography>
                  </Box>
                </Box>
                <CardContent
                  sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{ mb: 1, fontWeight: 600 }}
                  >
                    {tItems(`${destination.key}.title`)}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, flexGrow: 1 }}
                  >
                    {tItems(`${destination.key}.description`)}
                  </Typography>

                  {/* Tags */}
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
                    {destination.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tTags(tag)}
                        size="small"
                        sx={{
                          backgroundColor: "primary.light",
                          color: "primary.dark",
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
                        {formatPrice(destination.priceFrom, destination.currency)}
                      </Typography>
                    </Box>
                    <Button
                      component={Link}
                      href={`/destination/${destination.slug}`}
                      variant="contained"
                      color="primary"
                      size="small"
                    >
                      {t("viewDetails")}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

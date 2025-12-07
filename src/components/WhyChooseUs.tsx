"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import {
  Explore as ExploreIcon,
  LocalOffer as LocalOfferIcon,
  SupportAgent as SupportIcon,
} from "@mui/icons-material";
import { useTranslations } from "next-intl";

export default function WhyChooseUs() {
  const t = useTranslations("whyChooseUs");
  const tFeatures = useTranslations("whyChooseUs.features");

  const features = [
    {
      icon: <ExploreIcon sx={{ fontSize: 60, color: "primary.main" }} />,
      key: "localExpertise",
    },
    {
      icon: <LocalOfferIcon sx={{ fontSize: 60, color: "primary.main" }} />,
      key: "bestPrice",
    },
    {
      icon: <SupportIcon sx={{ fontSize: 60, color: "primary.main" }} />,
      key: "support24",
    },
  ];
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#f8f9fa",
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
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={feature.key}>
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                <CardContent sx={{ flexGrow: 1, px: 0 }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{ mb: 2, fontWeight: 600 }}
                  >
                    {tFeatures(`${feature.key}.title`)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {tFeatures(`${feature.key}.description`)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

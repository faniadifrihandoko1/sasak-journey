"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const destinationKeys = [
  "giliTrawangan",
  "mountRinjani",
  "kutaMandalika",
  "pinkBeach",
  "sembalunValley",
  "mereseHill",
];

// Map destination keys to slugs
const destinationSlugs: Record<string, string> = {
  giliTrawangan: "gili-trawangan",
  mountRinjani: "mount-rinjani",
  kutaMandalika: "kuta-mandalika",
  pinkBeach: "pink-beach",
  sembalunValley: "sembalun-valley",
  mereseHill: "merese-hill",
};

const destinationImages = [
  "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
  "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=800",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=800",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800",
];

export default function PopularDestinations() {
  const t = useTranslations("destinations");
  const tItems = useTranslations("destinations.items");
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
          {destinationKeys.map((key, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={key}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
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
                    src={destinationImages[index]}
                    alt={tItems(`${key}.name`)}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <CardContent
                  sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{ mb: 1, fontWeight: 600 }}
                  >
                    {tItems(`${key}.name`)}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, flexGrow: 1 }}
                  >
                    {tItems(`${key}.description`)}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      color="primary.main"
                      fontWeight={600}
                    >
                      {t("from")} ${tItems(`${key}.price`)}
                    </Typography>
                    <Button
                      component={Link}
                      href={`/destination/${destinationSlugs[key]}`}
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

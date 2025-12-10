"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Paper,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
} from "@mui/material";
import {
  Star as StarIcon,
  Place as PlaceIcon,
  CalendarToday as CalendarIcon,
  CheckCircle as CheckIcon,
  Cancel as CancelIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import { Link } from "@/i18n/navigation";

// Mock destination data
const destinationData: Record<
  string,
  {
    id: string;
    name: string;
    slug: string;
    category: string;
    destination: string;
    duration: string;
    days: number;
    nights: number;
    price: number;
    rating: number;
    reviews: number;
    image: string;
    gallery: string[];
    description: string;
    longDescription: string;
    highlights: string[];
    itinerary: Array<{ day: number; title: string; description: string }>;
    included: string[];
    excluded: string[];
  }
> = {
  "gili-trawangan": {
    id: "1",
    name: "Gili Trawangan Paradise",
    slug: "gili-trawangan",
    category: "beach",
    destination: "gili-trawangan",
    duration: "3d2n",
    days: 3,
    nights: 2,
    price: 299,
    rating: 4.8,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=800",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800",
    ],
    description:
      "Crystal clear waters, vibrant nightlife, and stunning sunsets await you.",
    longDescription:
      "Experience the ultimate tropical paradise on Gili Trawangan, the largest of the three Gili Islands. This car-free island offers pristine beaches, world-class diving spots, and a vibrant atmosphere perfect for both relaxation and adventure. Snorkel with sea turtles, enjoy sunset views, and immerse yourself in the laid-back island culture.",
    highlights: [
      "Snorkeling with sea turtles",
      "Stunning sunset views",
      "Vibrant nightlife scene",
      "Crystal clear turquoise waters",
      "Bicycle tours around the island",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Beach Time",
        description:
          "Arrive at Gili Trawangan, check into your accommodation, and spend the day relaxing on the beautiful beaches.",
      },
      {
        day: 2,
        title: "Snorkeling Adventure",
        description:
          "Full-day snorkeling trip to see sea turtles and colorful marine life. Visit the best snorkeling spots around the Gili Islands.",
      },
      {
        day: 3,
        title: "Island Exploration & Departure",
        description:
          "Explore the island by bicycle, visit local shops, and enjoy a final swim before departure.",
      },
    ],
    included: ["accommodation", "meals", "transportation", "guide", "entrance"],
    excluded: ["flights", "personal", "tips", "optional"],
  },
  "mount-rinjani": {
    id: "2",
    name: "Mount Rinjani Summit Trek",
    slug: "mount-rinjani",
    category: "mountain",
    destination: "sembalun",
    duration: "5d4n",
    days: 5,
    nights: 4,
    price: 399,
    rating: 4.9,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=800",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800",
    ],
    description:
      "Challenge yourself with an unforgettable trek to the summit of Mount Rinjani.",
    longDescription:
      "Embark on an epic journey to conquer Mount Rinjani, Indonesia's second-highest volcano. This challenging trek rewards you with breathtaking views, stunning sunrises, and the experience of a lifetime. Perfect for adventure seekers and nature lovers.",
    highlights: [
      "Summit sunrise view",
      "Crater lake Segara Anak",
      "Hot springs",
      "Professional guide and porter",
      "Camping under the stars",
    ],
    itinerary: [
      {
        day: 1,
        title: "Start Trekking",
        description:
          "Begin your adventure from Sembalun village, trek to Pos 1 and Pos 2, then continue to Base Camp.",
      },
      {
        day: 2,
        title: "Summit Push",
        description:
          "Early morning summit push to catch the sunrise, then descend to the crater rim.",
      },
      {
        day: 3,
        title: "Crater Lake",
        description:
          "Visit Segara Anak crater lake and enjoy the hot springs before continuing descent.",
      },
      {
        day: 4,
        title: "Senaru Route",
        description:
          "Continue descending via Senaru route with beautiful forest scenery.",
      },
      {
        day: 5,
        title: "Return",
        description:
          "Final descent to Senaru village and return to your hotel.",
      },
    ],
    included: [
      "accommodation",
      "meals",
      "transportation",
      "guide",
      "entrance",
      "insurance",
    ],
    excluded: ["flights", "personal", "tips", "optional"],
  },
};

export default function DestinationDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const t = useTranslations("destinationDetail");
  const tCategories = useTranslations("hero.searchForm.categories");
  const tDestinations = useTranslations("hero.searchForm.destinations");

  const destination = destinationData[slug];

  if (!destination) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pt: 10,
        }}
      >
        <Container>
          <Typography variant="h4" textAlign="center" mb={2}>
            Destination not found
          </Typography>
          <Box textAlign="center">
            <Button
              component={Link}
              href="/"
              variant="contained"
              startIcon={<ArrowBackIcon />}
            >
              Back to Home
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }

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

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        pt: { xs: 10, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        {/* Back Button */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => router.back()}
          sx={{ mb: 3, textTransform: "none" }}
        >
          Back
        </Button>

        {/* Main Card - Similar to Search Results */}
        <Card
          sx={{
            mb: 4,
            overflow: "hidden",
            borderRadius: 2,
            transition: "all 0.3s ease",
            boxShadow: 3,
          }}
        >
          <Grid container>
            {/* Image Section */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 300, md: "100%" },
                  minHeight: { md: 400 },
                  overflow: "hidden",
                  "& img": {
                    transition: "transform 0.3s ease",
                  },
                }}
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
                {destination.rating >= 4.8 && (
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
            </Grid>

            {/* Content Section */}
            <Grid size={{ xs: 12, md: 7 }}>
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Chip
                  label={getCategoryLabel(destination.category)}
                  color="secondary"
                  size="small"
                  sx={{ mb: 2, fontWeight: 600 }}
                />
                <Typography
                  variant="h4"
                  component="h1"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    fontSize: { xs: "1.5rem", md: "1.75rem" },
                  }}
                >
                  {destination.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, minHeight: 40 }}
                >
                  {destination.description}
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
                    label={getDestinationLabel(destination.destination)}
                    size="small"
                    variant="outlined"
                    sx={{ fontSize: "0.75rem" }}
                  />
                  <Chip
                    icon={<CalendarIcon fontSize="small" />}
                    label={`${destination.days} ${t("days")} / ${
                      destination.nights
                    } ${t("nights")}`}
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
                      ${destination.price}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {t("perPerson")}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                    }}
                  >
                    <StarIcon sx={{ fontSize: 18, color: "#FFC107" }} />
                    <Typography variant="body2" fontWeight={600}>
                      {destination.rating}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      ({destination.reviews})
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    size="medium"
                    sx={{
                      textTransform: "none",
                      fontWeight: 600,
                      py: 1,
                    }}
                  >
                    {t("bookNow")}
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    size="medium"
                    sx={{
                      textTransform: "none",
                      fontWeight: 600,
                      py: 1,
                    }}
                  >
                    {t("contactUs")}
                  </Button>
                </Box>
              </CardContent>
            </Grid>
          </Grid>
        </Card>

        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid size={{ xs: 12, md: 8 }}>
            {/* Overview */}
            <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, mb: 2, color: "primary.main" }}
              >
                {t("overview")}
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                {destination.longDescription}
              </Typography>
            </Paper>

            {/* Highlights */}
            <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, mb: 3, color: "primary.main" }}
              >
                {t("highlights")}
              </Typography>
              <Grid container spacing={2}>
                {destination.highlights.map((highlight, index) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={index}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1,
                      }}
                    >
                      <CheckIcon color="primary" sx={{ mt: 0.5 }} />
                      <Typography variant="body1">{highlight}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>

            {/* Itinerary */}
            <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, mb: 3, color: "primary.main" }}
              >
                {t("itinerary")}
              </Typography>
              {destination.itinerary.map((item, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Chip
                      label={`${t("day")} ${item.day}`}
                      color="primary"
                      sx={{ mr: 2, fontWeight: 600 }}
                    />
                    <Typography variant="h6" fontWeight={600}>
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ pl: { xs: 0, sm: 8 } }}
                  >
                    {item.description}
                  </Typography>
                  {index < destination.itinerary.length - 1 && (
                    <Divider sx={{ mt: 2 }} />
                  )}
                </Box>
              ))}
            </Paper>

            {/* Gallery */}
            <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, mb: 3, color: "primary.main" }}
              >
                {t("gallery")}
              </Typography>
              <Grid container spacing={2}>
                {destination.gallery.map((img, index) => (
                  <Grid size={{ xs: 6, md: 3 }} key={index}>
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: 200,
                        borderRadius: 2,
                        overflow: "hidden",
                        cursor: "pointer",
                        "&:hover img": {
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      <Image
                        src={img}
                        alt={`${destination.name} ${index + 1}`}
                        fill
                        style={{
                          objectFit: "cover",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>

          {/* Sidebar */}
          <Grid size={{ xs: 12, md: 4 }}>
            {/* What's Included & Excluded Card */}
            <Paper
              elevation={2}
              sx={{
                p: 4,
                mb: 4,
                borderRadius: 2,
                position: "sticky",
                top: 100,
              }}
            >
              {/* What's Included */}
              <Typography variant="h6" fontWeight={600} mb={2}>
                {t("included")}
              </Typography>
              <List dense>
                {destination.included.map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckIcon color="success" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={t(`items.included.${item}`)}
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItem>
                ))}
              </List>

              <Divider sx={{ my: 2 }} />

              {/* What's Excluded */}
              <Typography variant="h6" fontWeight={600} mb={2}>
                {t("excluded")}
              </Typography>
              <List dense>
                {destination.excluded.map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CancelIcon color="error" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={t(`items.excluded.${item}`)}
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

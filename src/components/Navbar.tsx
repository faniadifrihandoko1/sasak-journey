"use client";

import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
  { label: "Home", href: "#home", key: "home" },
  {
    label: "Destinations",
    href: "#destinations",
    key: "destinations",
    submenu: [
      {
        label: "Gili Islands",
        href: "#gili-islands",
        key: "giliIslands",
      },
      {
        label: "Mount Rinjani",
        href: "#rinjani",
        key: "mountRinjani",
      },
      {
        label: "Southern Beaches",
        href: "#southern-beaches",
        key: "southernBeaches",
      },
    ],
  },
  { label: "About Us", href: "#about", key: "aboutUs" },
  { label: "Testimonials", href: "#testimonials", key: "testimonials" },
  { label: "Contact", href: "#contact", key: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [destinationsMenuOpen, setDestinationsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDestinationsClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setDestinationsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setDestinationsMenuOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 280 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          p: 2,
        }}
      >
        <Typography variant="h6" fontWeight={700} color="primary">
          Sasak Journey
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton
              href={item.href}
              onClick={handleDrawerToggle}
              sx={{ py: 1.5 }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            href="#book"
            onClick={handleDrawerToggle}
            sx={{
              py: 1.5,
              mx: 2,
              mt: 2,
              borderRadius: 2,
              bgcolor: "secondary.main",
              color: "white",
              "&:hover": {
                bgcolor: "secondary.dark",
              },
            }}
          >
            <ListItemText primary="Book Now" sx={{ textAlign: "center" }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled
            ? "rgba(255, 255, 255, 0.98)"
            : "transparent",
          boxShadow: scrolled ? "0 2px 20px rgba(0, 0, 0, 0.1)" : "none",
          transition: "all 0.3s ease",
          backdropFilter: scrolled ? "blur(10px)" : "none",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              justifyContent: "space-between",
              py: scrolled ? 1 : 2,
              transition: "padding 0.3s ease",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              component="a"
              href="#home"
              sx={{
                fontWeight: 700,
                color: scrolled ? "primary.main" : "white",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
            >
              Sasak Journey
            </Typography>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 3,
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  onClick={item.submenu ? handleDestinationsClick : undefined}
                  sx={{
                    color: scrolled ? "text.primary" : "white",
                    fontWeight: 500,
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                color="secondary"
                href="#book"
                sx={{
                  fontWeight: 600,
                  px: 3,
                }}
              >
                Book Now
              </Button>
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                display: { md: "none" },
                color: scrolled ? "text.primary" : "white",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        open={destinationsMenuOpen}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "destinations-button",
        }}
      >
        {navItems
          .find((item) => item.key === "destinations")
          ?.submenu?.map((subItem) => (
            <MenuItem
              key={subItem.key}
              onClick={handleMenuClose}
              component="a"
              href={subItem.href}
            >
              {subItem.label}
            </MenuItem>
          ))}
      </Menu>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 280 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

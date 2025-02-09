"use client"

import React, { useState,useEffect } from "react";
import { AppBar, Toolbar, Typography, IconButton, Box, Button, Drawer, List, ListItem, ListItemText, Container} from "@mui/material";
import "./globals.css";

export default function RootLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = ["Home", "About", "Services", "Contact"];

  useEffect(() => {
    document.title = "Anugrah Muhammad Arafah 1AEC3";
  }, []);

  return (
    <html lang="en">
      <body className="antialiased">
        <AppBar component="nav" position="sticky">
          <Toolbar>
            <IconButton 
              color="inherit" 
              aria-label="open drawer" 
              edge="start" 
              onClick={handleDrawerToggle} 
              sx={{ display: { sm: "none" } }}
            >
            </IconButton>
        
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Zena
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#fff" }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>

        {/* Drawer untuk tampilan mobile */}
        <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
          <Box sx={{ width: 250 }}>
            <List>
              {navItems.map((item) => (
                <ListItem button key={item} onClick={handleDrawerToggle}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        {/* Konten halaman */}
        <main>{children}</main>

        <Box component="footer" sx={{ 
          backgroundColor: "#212121", 
          color: "#fff", 
          textAlign: "center", 
          py: 2, 
          mt: "auto"
        }}>
          <Container>
            <Typography variant="body2">
              &copy; {new Date().getFullYear()} Anugrah Muhammad Arafah. All Rights Reserved.
            </Typography>
          </Container>
        </Box>
      </body>
    </html>
  );
}
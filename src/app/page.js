"use client";

import React from "react";
import {Typography, Box, Button, Container, Grid, Avatar, Card, CardMedia, CardContent, CardActions } from "@mui/material";

const DashboardHero = () => {
  return (
    <Box sx={{backgroundColor : "#ededed"}}>
      <Box sx={{minHeight: "90vh", display: "flex", flexDirection: "column"}}>

          {/* Hero Section */}
          <Container
            maxWidth="lg"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "left",
              mt: 0,
            }}>

            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: "url('/foto/steins-gate-vrata-shtaynera-4349.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 1,
              }}
            />

            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backdropFilter: "blur(6px) brightness(60%)",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                zIndex: 2,
              }}
            />
            <Grid container spacing={4} alignItems="center" zIndex={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "#ededed", zIndex: 3}}>
                  Hi, I'm Anugrah Muhammad Arafah
                </Typography>
                <Typography variant="h6" sx={{ mt: 2, opacity: 0.8 }}>
                  AI Developer | Electrician | Novelist
                </Typography>
                <Typography variant="body1" sx={{ mt: 2, color: "#ededed" }}>
                  I specialize in building modern and efficient solutions using cutting-edge technology.
                  Welcome to my portfolio!
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, px: 4, py: 1.5, fontSize: "1rem" }}
                >
                  View My Work
                </Button>
              </Grid>

              <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
                <Avatar
                  src="/foto/image.png"
                  alt="Anugrah Muhammad Arafah"
                  sx={{ width: 300, height: 300, borderRadius: "50%", boxShadow: 3}}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Container
          maxWidth="md"
          sx={{
            mt: 8,
            textAlign: "center",
            p: 4,
            bgcolor: "#f5f5f5",
            borderRadius: 3,
            boxShadow: 2,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3, color: "#333" }}>
            About Me
          </Typography>
          
          {/* Grid untuk Menyusun Informasi */}
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ color: "#555" }}>
                <strong>Name:</strong> Anugrah Muhammad Arafah
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ color: "#555" }}>
                <strong>Age:</strong> 19 Years Old
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ color: "#555" }}>
                <strong>Location:</strong> Bandung, Jawa Barat, Indonesia
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ color: "#555" }}>
                <strong>Education:</strong> Informatics Technology Engineering Industry
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" sx={{ color: "#555" }}>
                <strong>Skills:</strong> C++, Python, Web Development, Embedded Systems
              </Typography>
            </Grid>
          </Grid>

          <Typography variant="body1" sx={{ color: "#555", mt: 3 }}>
          I'm a Generalist Specialist, I often wasting my time with productive activities (e.g Tinkering Electronics & Coding), <br/> I also into Drawing and Writting they're my saviour when i'm get bored XD
          </Typography>
        </Container>

        <Container
          maxWidth="md"
          sx={{
            mt: 8,
            textAlign: "center",
            p: 4,
            bgcolor: "#fff",
            borderRadius: 3,
            boxShadow: 2,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3, color: "#333" }}>
            Tugas Elektronika 1
          </Typography>
          
          <Card sx={{ boxShadow: 3, borderRadius: 3, p: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
              <CardMedia
                component="img"
                height="160"
                image="/foto/tugas_1.png"
                alt="Tugas 1"
                sx={{ borderRadius: 2 }}
              />
              <CardMedia
                component="img"
                height="160"
                image="/foto/tugas_2.png"
                alt="Tugas 2"
                sx={{ borderRadius: 2 }}
              />
            </Box>
            <CardContent>
              <Typography variant="body2" sx={{ color: "#666" }}>
                Foto tugas elektronika 1.
              </Typography>
            </CardContent>
          </Card>
        </Container>

        <br/><br/>
    </Box>
  );
};

export default DashboardHero;

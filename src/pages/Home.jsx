import { Grid, Typography, Box, Button } from "@mui/material";
import React from "react";
import HomeLogo from "../assets/HomeLogo.svg";
import Carousel from "../components/Carousel/Carousel";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();
  return (
    <Grid
      container
      sx={{
        minHeight: { lg: 800, xs: "100svh" },
        padding: 2,
        bgcolor: "white",
        borderRadius: 5,
        width: {
          sm: 600,
          xs: "100vw",
        },
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: { lg: 350, xs: "30svh" },
        }}
      >
        <img src={HomeLogo} width="60%" />
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        alignItems="end"
        sx={{
          minHeight: { lg: 400, xs: "30svh" },
        }}
        container
      >
        <Grid
          item
          xs={12}
          sx={{
            height: { lg: 300, xs: "40svh" },
          }}
        >
          <Carousel />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            minHeight: { lg: 80, xs: "10svh" },
          }}
          display="flex"
          alignItems="end"
          justifyContent="center"
        >
          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{
              height: 50,
              maxHeight: 50,
              borderRadius: 3,
              color: "white",
              width: {
                xs: "100%", // Full width on extra small screens
                sm: 200, // 100px width on small screens and above
              },
            }}
            onClick={() => navigate("../LangSelect")}
          >
            <Typography textTransform="capitalize" variant="h6">
              Get Started
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;

import { Grid, Typography, Box, Button } from "@mui/material";
import React from "react";
import HomeLogo from "../assets/HomeLogo.svg";
import Carousel from "../components/Carousel/Carousel";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Grid
        container
        sx={{
          minHeight: 800,
          padding: 2,
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 350,
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
            minHeight: 400,
          }}
          container
        >
          <Grid item xs={12} minHeight={300}>
            <Carousel />
          </Grid>

          <Grid item xs={12} minHeight={80} display="flex" alignItems="end">
            <Button
              variant="contained"
              size="large"
              fullWidth
              sx={{
                height: 50,
                maxHeight: 50,
                borderRadius: 3,
                color: "white",
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
    </div>
  );
};

export default Home;

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
          height: {
            xs: "95vh",
          },
          padding: 2,
        }}
      >
        <Grid
          item
          xs={12}
          height="45vh"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
            height: {
              xs: "48vh",
              sm: "45vh",
              lg: "46vh",
            },
          }}
          container
        >
          <Grid item xs={12}>
            <Carousel />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              size="large"
              fullWidth
              sx={{
                height: "7vh",
                maxHeight: 50,
                borderRadius: 3,
                color: "white",
              }}
              onClick={() => navigate("/form")}
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

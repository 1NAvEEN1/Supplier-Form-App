import { Grid, Typography, Box, Button } from "@mui/material";
import React from "react";
import HomeLogo from "../assets/HomeLogo.svg";

const Home = () => {
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
          <img src={HomeLogo} />
        </Grid>
        <Grid item xs={12} height="35vh">
          <Box>
            <Typography variant="h5">Welcome to Ceylon Exports Hub</Typography>
            <Typography mt={2} variant="h4">
              We're delighted to invite you to become a new supplier,
              contributing to the growth of Sri Lanka's rural economy by
              showcasing its quality products on the global stage.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            height: {
              xs: "13vh",
              sm: "10vh",
              lg: "11vh",
            },
          }}
        >
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
          >
            Get Started
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;

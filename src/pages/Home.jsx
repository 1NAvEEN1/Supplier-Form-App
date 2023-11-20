import { Grid, Typography, Box, Button } from "@mui/material";
import React from "react";
import HomeLogo from "../assets/HomeLogo.svg";

const Home = () => {
  return (
    <div>
      <Grid
        container
        sx={{
          height: "95vh",
        }}
      >
        <Grid
          item
          xs={12}
          height="40vh"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={HomeLogo} />
        </Grid>
        <Grid item xs={12} height="30vh">
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
          height="15vh"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            size="medium"
            fullWidth
            sx={{height:50 , borderRadius:3, color:"white"}}
          >
            Get Started
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;

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
            <Typography>Welcome to Ceylon Exports Hub</Typography>
            <Typography mt={2} variant="h6">
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
            color="warning"
            sx={{ backgroundColor: "#F47621",height:50 , borderRadius:3}}
          >
            Get Started
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;

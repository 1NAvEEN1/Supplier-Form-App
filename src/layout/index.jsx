import { Grid, Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const layout = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100svh",
        bgcolor:"#DCDCDC"
      }}
    >
      <Box
        bgcolor="white"
        boxShadow="0px 4px 6px 3px rgba(0, 0, 0, 0.1)"
        sx={{
          width: {
            sm: 500,
            xs: "100vw",
          },
          minHeight: {
            lg: 800,
            sm: 800,
            xs: 800,
          },
          // minHeight:720,
          borderRadius: {
            lg: 5,
            sm: 5,
            xs: 0,
          },
          boxShadow: {
            lg: "0px 4px 6px 3px rgba(0, 0, 0, 0.1)",
            sm: "1px 1px 2px 2px rgba(0, 0, 0, 0.1)",
            xs: 0,
          },
          bgcolor: "#f9fafb",
        }}
      >
        <Outlet />
      </Box>
    </Grid>
  );
};

export default layout;

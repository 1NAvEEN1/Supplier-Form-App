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
        minHeight: "100svh",
        mt: {
          xs: 0,
          lg: 2,
        },
        pb: {
          xs: 0,
          lg: 2,
        },
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
            lg: 700,
            sm: "100svh",
            xs: "100svh",
          },
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

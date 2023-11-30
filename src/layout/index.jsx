import { Grid, Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const layout = () => {
  return (
    <Grid
      container
      sx={{
        
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100svh",
        bgcolor: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: {
            sm: "100vw",
            xs: "100vw",
          },
          minHeight: {
            lg: "100svh",
            sm: "100svh",
            xs: "100svh",
          },
          // borderRadius: {
          //   lg: 5,
          //   sm: 5,
          //   xs: 0,
          // },
          // boxShadow: {
          //   lg: "0px 4px 6px 3px rgba(0, 0, 0, 0.1)",
          //   sm: "1px 1px 2px 2px rgba(0, 0, 0, 0.1)",
          //   xs: 0,
          // },
        }}
      >
        <Outlet />
      </Box>
    </Grid>
  );
};

export default layout;

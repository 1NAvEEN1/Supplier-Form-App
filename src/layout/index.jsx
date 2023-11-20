import { Padding } from "@mui/icons-material";
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
        height: "100vh",
      }}
    >
      <Box
        bgcolor="white"
        boxShadow="0px 4px 6px 3px rgba(0, 0, 0, 0.1)"
        sx={{
          width: {
            lg: 500,
            sm:"50vw",
            xs: "100vw",
          },
          minWidth:{
            xs:"100vw",
            sm:450
          },
          height: {
            lg: "95vh",
            sm: "95vh",
            xs: "95vh",
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
        }}
      >
        <Outlet />
      </Box>
    </Grid>
  );
};

export default layout;

import { Padding } from "@mui/icons-material";
import { Grid, Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const layout = () => {
  return (
    <div>
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
              sm: 400,
              xs: "100vw",
            },
            height: {
              lg: "95vh",
              sm: "97vh",
              xs: "100vh",
            },
            borderRadius: {
              lg: 8,
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
          <Box
            sx={{
              padding: {
                lg: 5,
                sm: 3,
                xs: 1,
              },
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Grid>
    </div>
  );
};

export default layout;

import { Grid, Box, IconButton, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { Outlet } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useNavigate } from "react-router-dom";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 7,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  // [`& .${linearProgressClasses.bar}`]: {
  //   borderRadius: 5,
  //   backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  // },
}));

const FormLayout = () => {
  let navigate = useNavigate();

  return (
    <Box height="95dvh">
      <Grid container p={2} display="flex">
        <Grid item xs={2} height={50}>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIcon style={{ color: "black" }} />
          </IconButton>
        </Grid>
        <Grid item xs={8} pt={2} height={50}>
          <BorderLinearProgress variant="determinate" value={50} />
        </Grid>
        <Grid item xs={2} height={50}></Grid>

        <Grid
          item
          xs={12}
          sx={{
            height: { xs: "78.5dvh", sm: "77dvh", lg: "78.3dvh" },
          }}
        >
          <Outlet />
        </Grid>
        <Grid item xs={12} display="flex" alignItems="end" height="9dvh">
          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{
              height: "8vh",
              maxHeight: 50,
              borderRadius: 3,
              color: "white",
            }}
            onClick={() => navigate("/Supplier-Form-App/BasicDetails")}
          >
            <Typography textTransform="capitalize" variant="h6">
              Continue
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FormLayout;

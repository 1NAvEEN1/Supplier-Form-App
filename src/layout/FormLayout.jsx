import { Grid, Box, IconButton, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState, useEffect } from "react";
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

  const pages = ["", "LangSelect", "BasicDetails", "ProductDetails"];
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  const navigateToNextPage = () => {
    const nextPageIndex = currentPageIndex + 1;
    if (nextPageIndex < pages.length) {
      setCurrentPageIndex(nextPageIndex);
      navigate(`/Supplier-Form-App/${pages[nextPageIndex]}`);
    } else {
      // Handle if there are no more pages
      // For example, navigate to a different route or perform a different action
    }
  };

  const navigateToPreviousPage = () => {
    const prevPageIndex = currentPageIndex - 1;
    if (prevPageIndex >= 0) {
      setCurrentPageIndex(prevPageIndex);
      navigate(`/Supplier-Form-App/${pages[prevPageIndex]}`);
    } else {
      // Handle if trying to navigate back from the first page
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [currentPageIndex]);
  return (
    <Box minHeight={800}>
      <Grid container p={2} display="flex">
        <Grid item xs={2} height={50}>
          <IconButton onClick={navigateToPreviousPage}>
            <ArrowBackIcon style={{ color: "black" }} />
          </IconButton>
        </Grid>
        <Grid item xs={8} pt={2} height={50}>
          <BorderLinearProgress
            variant="determinate"
            value={(currentPageIndex / 3) * 100}
          />
        </Grid>
        <Grid item xs={2} height={50}></Grid>

        <Grid
          item
          xs={12}
          sx={{
            minHeight: 638,
          }}
        >
          <Outlet />
        </Grid>
        <Grid item xs={12} display="flex" alignItems="end" height={80}>
          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{
              height: 50,
              borderRadius: 3,
              color: "white",
            }}
            onClick={navigateToNextPage}
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

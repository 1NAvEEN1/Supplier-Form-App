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

  const pages = [
    "",
    "LangSelect",
    "BasicDetails",
    "ProductDetails",
    "BusinessDetails",
    "CertificatesDetails",
    "ExportingDetails",
    "AskForExport",
  ];
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  const navigateToNextPage = () => {
    const nextPageIndex = currentPageIndex + 1;
    if (nextPageIndex < pages.length) {
      setCurrentPageIndex(nextPageIndex);
      navigate(`/Supplier-Form-App/${pages[nextPageIndex]}`);
    } else {
      navigate("/Supplier-Form-App/FinalPage");
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
  
  const scrollToTop = () => {
    const element = document.documentElement;
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    scrollToTop();
  }, [currentPageIndex]);
  return (
    <Box minHeight={700}>
      <Grid container p={2} display="flex">
        <Grid
          item
          xs={2}
          sx={{
            height: {
              lg: 50,
              xs: "5svh",
            },
          }}
        >
          <IconButton onClick={navigateToPreviousPage}>
            <ArrowBackIcon style={{ color: "black" }} />
          </IconButton>
        </Grid>
        <Grid
          item
          xs={8}
          pt={2}
          sx={{
            height: {
              lg: 50,
              xs: "5svh",
            },
          }}
        >
          <BorderLinearProgress
            variant="determinate"
            value={(currentPageIndex / 7) * 100}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            minHeight: {
              lg: 538,
              xs: "80svh",
            },
          }}
        >
          <Outlet />
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          alignItems="end"
          sx={{
            height: {
              lg: 80,
              xs: "10svh",
            },
          }}
        >
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

import { Grid, Box, IconButton, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import validation from "../validations";
import { useDispatch } from "react-redux";
import { setErrorsBasicDetails } from "../reducers/errorMessages";

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
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const pages = [
    "",
    "LangSelect",
    "BasicDetails",
    "ProductDetails",
    "BusinessDetails",
    "CertificatesDetails",
    "ExportingDetails",
    "AskForExport",
    "Summary",
  ];

  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  const navigateToNextPage = () => {
    let validate = validation(
      currentPageIndex,
      dispatch,
      setErrorsBasicDetails
    );
    if (validate) {
      const nextPageIndex = currentPageIndex + 1;
      if (nextPageIndex < pages.length) {
        setCurrentPageIndex(nextPageIndex);
        navigate(`/Supplier-Form-App/${pages[nextPageIndex]}`);
      } else {
        navigate("/Supplier-Form-App/FinalPage");
      }
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

  // const scrollToTop = () => {
  //   const element = document.documentElement;
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // };
  const ref = useRef();
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    scrollToTop();
  }, [currentPageIndex]);
  return (
    <Box
      bgcolor={"#F9FAFB"}
      width={"100vw"}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box height={"100svh"} minHeight={600} maxWidth={700} bgcolor={"#F9FAFB"}>
        <Box ref={ref}></Box>
        <Grid container p={2} display="flex">
          <Grid
            item
            xs={2}
            sx={{
              height: {
                lg: "5svh",
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
                lg: "5svh",
                xs: "5svh",
              },
            }}
          >
            <BorderLinearProgress
              variant="determinate"
              value={(currentPageIndex / 8) * 100}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              minHeight: {
                lg: "80svh",
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
            justifyContent="center"
            sx={{
              height: {
                lg: "10svh",
                xs: "10svh",
              },
              gap: {
                sm: 5,
                xs: 0,
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
                width: {
                  sm: 200,
                  xs: "100%",
                },
                display: {
                  sm: "inherit",
                  xs: "none",
                },
              }}
              color="secondary"
              onClick={navigateToPreviousPage}
            >
              <Typography textTransform="capitalize" variant="h6">
                {t("translation:LanguageSelect:Back")}
              </Typography>
            </Button>
            <Button
              variant="contained"
              size="large"
              fullWidth
              sx={{
                height: 50,
                borderRadius: 3,
                color: "white",
                width: {
                  sm: 200,
                  xs: "100%",
                },
              }}
              onClick={navigateToNextPage}
            >
              <Typography textTransform="capitalize" variant="h6">
                {currentPageIndex == 8 ? (
                  <>Submit</>
                ) : (
                  <>{t("translation:LanguageSelect:Continue")}</>
                )}
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default FormLayout;

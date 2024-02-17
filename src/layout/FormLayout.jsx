import { Grid, Box, IconButton, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import validation from "../validations";
import { useDispatch, useSelector } from "react-redux";
import { setErrorsBasicDetails } from "../reducers/errorMessages";
import { setNavigateToPage, setStarted } from "../reducers/formSlice";
import store from "../app/store";
import { SubmitData } from "../services/SubmitService";
import {
  hideLoadingAnimation,
  showLoadingAnimation,
} from "../app/loadingAnimationController";
import { showAlertMessage } from "../app/alertMessageController";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 7,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#D3D3D3",
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

  const handleSubmit = async () => {
    try {
      showLoadingAnimation({ message: "Saving data...." });
      const formData = store.getState().form.formData;
      console.log("formData", formData);

      let products = formData.productDetails?.map((product, index) => ({
        productCategoryId: product.productCategoryId,
        ...(product.productSubCategoryId !== 0 && {
          productSubCategoryId: product.productSubCategoryId,
        }),
        name: product.name,
        description: product.description,
        price: product.price,
        supplyQuantity: product.supplyQuantity,
        unitType: product.unitType,
        monthlySupplyQuantity: product.monthlySupplyQuantity,
        monthlyMinimumQuantity: product.monthlyMinimumQuantity,
        supplyMonths: product.supplyMonths.toString(),
        otherDetails: product.otherDetails,
      }));

      const data = {
        provinceId: formData.basicDetails.province,
        districtId: formData.basicDetails.district,
        cityId: formData.basicDetails.city,
        name: formData.basicDetails.name,
        contactNumber1: formData.basicDetails.contactNo,
        contactNumber2: formData.basicDetails.contactNo2,
        email: formData.basicDetails.email,
        isRegisteredBusiness: formData.businessRegDetails.registered,
        businessType: formData.businessRegDetails.businessType,
        businessName: formData.businessRegDetails.businessName,
        isQualityCertified: formData.certificatesDetails.certificates,
        qualityCertificates: formData.certificatesDetails.certificatesNames,
        isExporting: formData.exportingDetails.exporting,
        ExportingCountries: formData.exportingDetails.countries,
        isReadyToExport: formData.askForExporting,
        products: products,
      };
      console.log("Data", data);
      const response = await SubmitData(data);
      console.log("response", response);
      if (response.status == 200) {
        navigate("/Supplier-Form-App/FinalPage");
        dispatch(setStarted(false));
      } else {
        showAlertMessage({
          message: "Error while saving data..!",
          type: "error",
        });
      }
    } catch (error) {
      showAlertMessage({
        message: "Error while saving data..!",
        type: "error",
      });
    } finally {
      hideLoadingAnimation();
    }
  };

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
    try {
      if (currentPageIndex == 8) {
        handleSubmit();
      }

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
        }
      }
    } catch (error) {
    } finally {
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

  const navigateToPage = useSelector((state) => state.form.navigateToPage);
  useEffect(() => {
    console.log(navigateToPage);
    if (navigateToPage !== 99) {
      setCurrentPageIndex(navigateToPage + 1);
      navigate(`/Supplier-Form-App/${pages[navigateToPage + 1]}`);
      dispatch(setNavigateToPage(99));
    }
  }, [navigateToPage]);

  useEffect(() => {
    const handleWindowClose = (event) => {
      event.preventDefault();
      event.returnValue = "";
      const confirmationMessage = "Your changes may not be saved.";
      event.returnValue = confirmationMessage;
      return confirmationMessage;
    };

    // Add event listener for beforeunload event
    window.addEventListener("beforeunload", handleWindowClose);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleWindowClose);
    };
  }, []);

  //------------Get the current URL location & the set selected menu Item---------------//
  const location = useLocation();

  useEffect(() => {
    const currentUrl = location.pathname;
    const firstPath = currentUrl.split("/")[1];
    console.log("1", firstPath);
    setCurrentPageIndex(pages.indexOf(firstPath));
  }, [location.pathname]);

  return (
    <Box
      bgcolor={"#F9FAFB"}
      width={"98dvw"}
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

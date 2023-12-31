import React, { useState } from "react";
import {
  Typography,
  Button,
  SwipeableDrawer,
  Divider,
  Box,
  useMediaQuery,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
} from "@mui/material";
import AddProducts from "./AddProducts";
import { useTranslation } from "react-i18next";
import store from "../app/store";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useDispatch } from "react-redux";
import { setNavigateToPage } from "../reducers/formSlice";

const Summary = () => {
  const dispatch = useDispatch();
  const basicDetails = store.getState().form.formData.basicDetails;
  const productDetails = store.getState().form.formData.productDetails;
  const businessRegDetails = store.getState().form.formData.businessRegDetails;
  const certificatesDetails =
    store.getState().form.formData.certificatesDetails;
  const exportingDetails = store.getState().form.formData.exportingDetails;
  const askForExporting = store.getState().form.formData.askForExporting;

  const { t } = useTranslation();

  const handleEdit = (page) => {
    console.log(page);
    dispatch(setNavigateToPage(page));
  };

  return (
    <div>
      <Typography
        variant="h4"
        fontWeight={700}
        mt={2}
        mb={2}
        textAlign={"center"}
      >
        {t("translation:Summary:heading")}
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Grid
        container
        gap={1}
        sx={{
          boxShadow: "1px 5px 8px 5px rgba(0, 0, 0, 0.05)",
          borderRadius: 3,
          mt: 2,
          p: 3,
          bgcolor: "#FFFFFF",
        }}
      >
        <Grid item xs={9.5} sm={9.8}>
          <Typography fontWeight={600}>
            {t("translation:BasicDetails:heading")}
          </Typography>
        </Grid>
        <Grid item xs={2} display={"flex"} justifyContent={"end"}>
          <IconButton onClick={() => handleEdit(1)}>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </Grid>
        <Grid item xs={5} sm={4}>
          {t("translation:BasicDetails:province")}
        </Grid>
        <Grid item xs={6} sm={7}>
          : {basicDetails.province}
        </Grid>
        <Divider sx={{ width: "100%" }} />
        <Grid item xs={5} sm={4}>
          {t("translation:BasicDetails:district")}
        </Grid>
        <Grid item xs={6} sm={7}>
          : {basicDetails.district}
        </Grid>
        <Divider sx={{ width: "100%" }} />
        <Grid item xs={5} sm={4}>
          {t("translation:BasicDetails:city")}
        </Grid>
        <Grid item xs={6} sm={7}>
          : {basicDetails.city}
        </Grid>
        <Divider sx={{ width: "100%" }} />
        <Grid item xs={11} sm={4}>
          {t("translation:BasicDetails:name")}
        </Grid>
        <Grid item xs={11} sm={7}>
          : {basicDetails.name}
        </Grid>
        <Divider sx={{ width: "100%" }} />
        <Grid item xs={6} sm={4}>
          {t("translation:BasicDetails:number")}
        </Grid>
        <Grid item xs={5} sm={7}>
          : {basicDetails.contactNo}
        </Grid>
        <Divider sx={{ width: "100%" }} />
        <Grid item xs={6} sm={4}>
          {t("translation:BasicDetails:number2")}
        </Grid>
        <Grid item xs={5} sm={7}>
          : {basicDetails.contactNo2}
        </Grid>
        <Divider sx={{ width: "100%" }} />
        <Grid item xs={11} sm={4}>
          Email
        </Grid>
        <Grid item xs={11} sm={7}>
          : {basicDetails.email ? basicDetails.email : " "}
        </Grid>
        <Divider sx={{ width: "100%" }} />
      </Grid>

      <Grid
        container
        sx={{
          boxShadow: "1px 5px 8px 5px rgba(0, 0, 0, 0.05)",
          borderRadius: 3,
          mt: 2,
          p: 3,
          bgcolor: "#FFFFFF",
        }}
      >
        <Grid item xs={10}>
          <Typography fontWeight={600}>
            {t("translation:ProductDetails:heading")}
          </Typography>
        </Grid>
        <Grid item xs={2} display={"flex"} justifyContent={"end"}>
          <IconButton onClick={() => handleEdit(2)}>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </Grid>
        <Grid item xs={12} pt={1}>
          {productDetails.map((product, index) => (
            <Box key={index}>
              <Grid
                container
                sx={{
                  boxShadow: "1px 5px 8px 5px rgba(0, 0, 0, 0.05)",
                  borderRadius: 3,
                  mb: 2,
                  p: 2,
                  bgcolor: "#FFFFFF",
                }}
              >
                <Grid item xs={1}>
                  {index + 1}
                </Grid>
                <Grid item xs={11}>
                  <Typography fontWeight={600}>{product.name}</Typography>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          boxShadow: "1px 5px 8px 5px rgba(0, 0, 0, 0.05)",
          borderRadius: 3,
          mt: 2,
          p: 3,
          bgcolor: "#FFFFFF",
        }}
      >
        <Grid item xs={12} sm={6}>
          <Typography fontWeight={600}>
            {t("translation:BusinessDetails:heading")}
          </Typography>
        </Grid>
        <Grid
          item
          xs={10}
          sm={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          fontWeight={600}
          color={"#F47621"}
        >
          {businessRegDetails.registered === 0
            ? t("translation:BusinessDetails:no")
            : t("translation:BusinessDetails:yes")}
        </Grid>
        <Grid item xs={2} display={"flex"} justifyContent={"end"}>
          <IconButton onClick={() => handleEdit(3)}>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </Grid>{" "}
        <Grid container gap={1}>
          {businessRegDetails.registered === 1 && (
            <>
              <Divider sx={{ width: "100%", mt: 2 }} />
              <Grid item xs={11} sm={7}>
                {t("translation:BusinessDetails:type")}
              </Grid>
              <Grid item xs={11} sm={4}>
                : {businessRegDetails.businessType}
              </Grid>
              <Divider sx={{ width: "100%" }} />
              <Grid item xs={11} sm={7}>
                {t("translation:BusinessDetails:name")}.
              </Grid>
              <Grid item xs={11} sm={4} display={"flex"} alignItems={"center"}>
                : {businessRegDetails.businessName}
              </Grid>
              <Divider sx={{ width: "100%" }} />
            </>
          )}
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          boxShadow: "1px 5px 8px 5px rgba(0, 0, 0, 0.05)",
          borderRadius: 3,
          mt: 2,
          p: 3,
          bgcolor: "#FFFFFF",
        }}
      >
        <Grid item xs={12} sm={6}>
          <Typography fontWeight={600}>
            {t("translation:CertificatesDetails:heading")}
          </Typography>
        </Grid>
        <Grid
          item
          xs={10}
          sm={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          fontWeight={600}
          color={"#F47621"}
        >
          {certificatesDetails.certificates === 0
            ? t("translation:BusinessDetails:no")
            : t("translation:BusinessDetails:yes")}
        </Grid>
        <Grid item xs={2} display={"flex"} justifyContent={"end"}>
          <IconButton onClick={() => handleEdit(4)}>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </Grid>
        <Grid container gap={1}>
          {certificatesDetails.certificates === 1 && (
            <>
              <Divider sx={{ width: "100%", mt: 2 }} />
              <Grid item xs={5}>
                {t("translation:Summary:certificates")}
              </Grid>
              <Grid item xs={6}>
                : {certificatesDetails.certificatesNames}
              </Grid>
              <Divider sx={{ width: "100%" }} />
            </>
          )}
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          boxShadow: "1px 5px 8px 5px rgba(0, 0, 0, 0.05)",
          borderRadius: 3,
          mt: 2,
          p: 3,
          bgcolor: "#FFFFFF",
        }}
      >
        <Grid item xs={12} sm={6}>
          <Typography fontWeight={600}>
            {t("translation:ExportingDetails:heading")}
          </Typography>
        </Grid>
        <Grid
          item
          xs={10}
          sm={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          fontWeight={600}
          color={"#F47621"}
        >
          {exportingDetails.exporting === 0
            ? t("translation:BusinessDetails:no")
            : t("translation:BusinessDetails:yes")}
        </Grid>
        <Grid item xs={2} display={"flex"} justifyContent={"end"}>
          <IconButton onClick={() => handleEdit(5)}>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </Grid>{" "}
        {exportingDetails.exporting === 1 && (
          <Grid container gap={1}>
            <Divider sx={{ width: "100%", mt: 2 }} />
            <Grid item xs={5}>
              {t("translation:Summary:countries")}
            </Grid>
            <Grid item xs={6}>
              : {exportingDetails.countries}
            </Grid>
            <Divider sx={{ width: "100%" }} />
          </Grid>
        )}
      </Grid>

      <Grid
        container
        sx={{
          boxShadow: "1px 5px 8px 5px rgba(0, 0, 0, 0.05)",
          borderRadius: 3,
          mt: 2,
          p: 3,
          bgcolor: "#FFFFFF",
        }}
      >
        <Grid item xs={12} sm={6}>
          <Typography fontWeight={600}>
            {t("translation:AskForExport:heading")}
          </Typography>
        </Grid>
        <Grid
          item
          xs={10}
          sm={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          fontWeight={600}
          color={"#F47621"}
        >
          {askForExporting === 0
            ? t("translation:BusinessDetails:no")
            : t("translation:BusinessDetails:yes")}
        </Grid>
        <Grid item xs={2} display={"flex"} justifyContent={"end"}>
          <IconButton onClick={() => handleEdit(6)}>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default Summary;

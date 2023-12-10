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

const Summary = () => {
  const basicDetails = store.getState().form.formData.basicDetails;
  return (
    <div>
      <Typography variant="h4" fontWeight={700} mt={2} mb={2}>
        {/* {t("translation:ProductDetails:heading")} */}
        Summary
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Grid container>
        <Grid item xs={12}>
          <Typography fontWeight={600}>Basic Details</Typography>
        </Grid>
        <Grid item xs={4}>
          Province :
        </Grid>
        <Grid item xs={8}>
          {basicDetails.province}
        </Grid>
        <Grid item xs={4}>
          District :
        </Grid>
        <Grid item xs={8}>
          {basicDetails.district}
        </Grid>
        <Grid item xs={4}>
          City :
        </Grid>
        <Grid item xs={8}>
          {basicDetails.city}
        </Grid>
        <Grid item xs={4}>
          Name :
        </Grid>
        <Grid item xs={8}>
          {basicDetails.name}
        </Grid>
        <Grid item xs={4}>
          Contact No :
        </Grid>
        <Grid item xs={8}>
          {basicDetails.contactNo}
        </Grid>
        <Grid item xs={4}>
          Email :
        </Grid>
        <Grid item xs={8}>
          {basicDetails.email}
        </Grid>

        <Grid item xs={12}>
          <Typography fontWeight={600} mt={4}>
            Product Details
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Summary;

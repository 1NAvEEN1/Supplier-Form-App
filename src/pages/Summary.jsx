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
  const productDetails = store.getState().form.formData.productDetails;
  const businessRegDetails = store.getState().form.formData.businessRegDetails;
  const certificatesDetails =
    store.getState().form.formData.certificatesDetails;
  const exportingDetails = store.getState().form.formData.exportingDetails;
  const askForExporting = store.getState().form.formData.askForExporting;

  return (
    <div>
      <Typography variant="h4" fontWeight={700} mt={2} mb={2}>
        {/* {t("translation:ProductDetails:heading")} */}
        Summary
      </Typography>
      <Divider sx={{ mb: 3 }} />
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
          <Typography fontWeight={600}>Basic Details</Typography>
        </Grid>
        <Grid item xs={2} display={"flex"} justifyContent={"end"}>
          <IconButton>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </Grid>
        <Grid item xs={4}>
          Province
        </Grid>
        <Grid item xs={8}>
          : {basicDetails.province}
        </Grid>
        <Grid item xs={4}>
          District
        </Grid>
        <Grid item xs={8}>
          : {basicDetails.district}
        </Grid>
        <Grid item xs={4}>
          City
        </Grid>
        <Grid item xs={8}>
          : {basicDetails.city}
        </Grid>
        <Grid item xs={4}>
          Name
        </Grid>
        <Grid item xs={8}>
          : {basicDetails.name}
        </Grid>
        <Grid item xs={4}>
          ContactNo
        </Grid>
        <Grid item xs={8}>
          : {basicDetails.contactNo}
        </Grid>
        <Grid item xs={4}>
          Email
        </Grid>
        <Grid item xs={8}>
          : {basicDetails.email}
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
        <Grid item xs={10}>
          <Typography fontWeight={600}>Product Details</Typography>
        </Grid>
        <Grid item xs={2} display={"flex"} justifyContent={"end"}>
          <IconButton>
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
        <Grid item xs={6}>
          <Typography fontWeight={600}>
            Have you registered your business?
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          fontWeight={600}
          color={"#F47621"}
        >
          {businessRegDetails.registered === 0 ? "No" : "Yes"}
        </Grid>
        <Grid item xs={2} display={"flex"} justifyContent={"end"}>
          <IconButton>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </Grid>{" "}
        {businessRegDetails.registered === 1 && (
          <>
            <Grid item xs={5} mt={2}>
              Business Type
            </Grid>
            <Grid item xs={7} mt={2}>
              : {businessRegDetails.businessType}
            </Grid>
            <Grid item xs={5}>
              Business Name
            </Grid>
            <Grid item xs={7} display={"flex"} alignItems={"center"}>
              : {businessRegDetails.businessName}
            </Grid>
          </>
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
        <Grid item xs={6}>
          <Typography fontWeight={600}>
            Do you have any quality certificates?
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          fontWeight={600}
          color={"#F47621"}
        >
          {certificatesDetails.certificates === 0 ? "No" : "Yes"}
        </Grid>
        <Grid item xs={2} display={"flex"} justifyContent={"end"}>
          <IconButton>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </Grid>{" "}
        {certificatesDetails.certificates === 1 && (
          <>
            <Grid item xs={5} mt={2}>
              Certificates
            </Grid>
            <Grid item xs={7} mt={2}>
              : {certificatesDetails.certificatesNames}
            </Grid>
          </>
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
        <Grid item xs={6}>
          <Typography fontWeight={600}>
            Are you presently exporting your product?
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          fontWeight={600}
          color={"#F47621"}
        >
          {exportingDetails.exporting === 0 ? "No" : "Yes"}
        </Grid>
        <Grid item xs={2} display={"flex"} justifyContent={"end"}>
          <IconButton>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </Grid>{" "}
        {exportingDetails.exporting === 1 && (
          <>
            <Grid item xs={5} mt={2}>
              Countries
            </Grid>
            <Grid item xs={7} mt={2}>
              : {exportingDetails.countries}
            </Grid>
          </>
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
        <Grid item xs={6}>
          <Typography fontWeight={600}>
            Would you be open to supplying your product for us to handle the
            export process?
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          fontWeight={600}
          color={"#F47621"}
        >
          {askForExporting === 0 ? "No" : "Yes"}
        </Grid>
        <Grid item xs={2} display={"flex"} justifyContent={"end"}>
          <IconButton>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default Summary;

import React from "react";
import { Typography, Divider, Box, Grid, IconButton } from "@mui/material";
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

  const location = store.getState().form.locationName;
  const productsCategories = store.getState().form.productCategoryNames;
  const { t, i18n } = useTranslation();

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
          :{" "}
          {i18n.language == "en"
            ? location.province.provinceEnglish
            : i18n.language == "si"
            ? location.province.provinceSinhala
            : location.province.provinceTamil}
        </Grid>
        <Divider sx={{ width: "100%" }} />
        <Grid item xs={5} sm={4}>
          {t("translation:BasicDetails:district")}
        </Grid>
        <Grid item xs={6} sm={7}>
          :{" "}
          {i18n.language == "en"
            ? location.district.districtEnglish
            : i18n.language == "si"
            ? location.district.districtSinhala
            : location.district.districtTamil}
        </Grid>
        <Divider sx={{ width: "100%" }} />
        <Grid item xs={5} sm={4}>
          {t("translation:BasicDetails:city")}
        </Grid>
        <Grid item xs={6} sm={7}>
          :{" "}
          {i18n.language == "en"
            ? location.city.cityEnglish
            : i18n.language == "si"
            ? location.city.citySinhala
            : location.city.cityTamil}
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
                <Grid
                  item
                  xs={2}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <b>{index + 1}</b>
                </Grid>
                <Grid item xs={10}>
                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      sm={7}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      {/* <Typography fontWeight={600}>{product.name}</Typography> */}
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      justifyContent={"center"}
                      display={"flex"}
                      alignItems={"center"}
                    >
                      {product.productOrRaw ? (
                        <>
                          <Typography fontWeight={600} variant="h6">
                            {i18n.language == "en"
                              ? productsCategories[index].category?.nameEnglish
                              : i18n.language == "si"
                              ? productsCategories[index].category
                                  ?.nameSinhala == ""
                                ? productsCategories[index].category
                                    ?.nameEnglish
                                : productsCategories[index].category
                                    ?.nameSinhala
                              : productsCategories[index].category?.nameTamil ==
                                ""
                              ? productsCategories[index].category?.nameEnglish
                              : productsCategories[index].category?.nameTamil}
                            {productsCategories[index].subCategory
                              ?.nameEnglish &&
                              " - " +
                                (i18n.language == "en"
                                  ? productsCategories[index].subCategory
                                      ?.nameEnglish
                                  : i18n.language == "si"
                                  ? productsCategories[index].subCategory
                                      ?.nameSinhala == ""
                                    ? productsCategories[index].subCategory
                                        ?.nameEnglish
                                    : productsCategories[index].subCategory
                                        ?.nameSinhala
                                  : productsCategories[index].subCategory
                                      ?.nameTamil == ""
                                  ? productsCategories[index].subCategory
                                      ?.nameEnglish
                                  : productsCategories[index].subCategory
                                      ?.nameTamil)}
                          </Typography>
                        </>
                      ) : (
                        <>
                          <Typography fontWeight={600} variant="h6">
                            {i18n.language == "en"
                              ? productsCategories[index].category?.nameEnglish
                              : i18n.language == "si"
                              ? productsCategories[index].category
                                  ?.nameSinhala == ""
                                ? productsCategories[index].category
                                    ?.nameEnglish
                                : productsCategories[index].category
                                    ?.nameSinhala
                              : productsCategories[index].category?.nameTamil ==
                                ""
                              ? productsCategories[index].category?.nameEnglish
                              : productsCategories[index].category?.nameTamil}
                            {" - "}
                            {t("translation:AddProduct:rawMaterial")}
                          </Typography>
                        </>
                      )}
                    </Grid>
                  </Grid>
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
        <Grid container spacing={1}>
          {businessRegDetails.registered === 1 && (
            <>
              <Divider sx={{ width: "100%", mt: 2 }} />
              <Grid item xs={11} sm={7}>
                {t("translation:BusinessDetails:type")}
              </Grid>
              <Grid item xs={11} sm={5}>
                :{" "}
                <Typography display={"inline"}>
                  {businessRegDetails.businessType == 0
                    ? t("translation:BusinessDetails:solo")
                    : businessRegDetails.businessType == 1
                    ? t("translation:BusinessDetails:partnership")
                    : t("translation:BusinessDetails:pvt")}
                </Typography>
              </Grid>
              <Divider sx={{ width: "100%" }} />
              <Grid item xs={11} sm={7}>
                {t("translation:BusinessDetails:name")}.
              </Grid>
              <Grid item xs={11} sm={5} display={"flex"} alignItems={"center"}>
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

import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Divider,
  Box,
  FormControl,
  TextField,
  Select,
  MenuItem,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  setProductDetails,
  setSelectedProductIndex,
} from "../reducers/formSlice";
import store from "../app/store";
import { showAlertMessage } from "../app/alertMessageController";

const initialShadow = "1px 5px 8px 5px rgba(0, 0, 0, 0.05)";
const errorShadow = "-1px 1px 8px 5px rgba(255, 0, 0, 0.3)";

const CustomStyledBox = ({ children, sx = {}, ...rest }) => (
  <Box
    sx={{
      borderRadius: 3,
      mt: 3,
      pt: 1,
      pr: 0,
      pb: 1,
      ...sx, // Merge with additional styles passed through sx prop
    }}
    {...rest}
  >
    {children}
  </Box>
);

const AddProducts = ({ closeDrawer }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const formData = useSelector((state) => state.form.formData);
  const defaultValues = {
    productOrRaw: true,
    category: 0,
    subCategory: 0,
    name: "",
    pricing: {
      price: "",
      priceQtyUnitValue: "",
      priceQtyUnit: 10,
    },
    supplyQty: "",
    orderQty: "",
    // supply: {
    //   supplyQty: "",
    //   supplyQtyUnitValue: "",
    //   supplyQtyUnit: 10,
    // },
    // order: {
    //   orderQty: "",
    //   orderQtyUnitValue: "",
    //   orderQtyUnit: 10,
    // },
    supplyFrequency: true,
    selectedMonths: [],
    otherDetails: "",
  };

  const [product, setProduct] = useState(defaultValues);
  const [error, setError] = useState("");

  useEffect(() => {
    const selectedProductIndex = store.getState().form.selectedProductIndex;
    if (selectedProductIndex !== 99) {
      setProduct(
        store.getState().form.formData?.productDetails[selectedProductIndex]
      );
    }
  }, [store.getState().form.selectedProductIndex]);

  const handleChange = (key, value, subKey = null) => {
    setError("");

    if (subKey) {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [key]: { ...prevProduct[key], [subKey]: value },
      }));
    } else {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [key]: value,
        // Reset subCategory to 0 if key is "category"
        ...(key === "category" && { subCategory: 0 }),
      }));
    }
  };

  // Function to toggle selection of a month
  const handleMonthSelection = (month) => {
    const isSelected = product.selectedMonths.includes(month);
    const updatedMonths = isSelected
      ? product.selectedMonths.filter((m) => m !== month)
      : [...product.selectedMonths, month];

    handleChange("selectedMonths", updatedMonths);
  };

  const renderMonthSelection = () => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return (
      <Grid container spacing={2}>
        {months.map((month, index) => (
          <Grid
            key={index}
            item
            xs={3}
            display={"flex"}
            justifyContent={"center"}
          >
            <Box
              bgcolor={
                product.selectedMonths.includes(month) ? "#F47621" : "#D5D8DC"
              }
              onClick={() => handleMonthSelection(month)}
              sx={{
                borderRadius: 2,
                width: 60,
                height: 40,
                "&:hover": {
                  cursor: "pointer",
                  border: "2px solid #F47621",
                },
              }}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography textAlign={"center"}>{month}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  };

  const validation = () => {
    if (product.productOrRaw) {
      if (product.category == 0) {
        showAlertMessage({
          message: "Please select a product category !",
          type: "error",
        });
        setError("category");
        return 0;
      } else if (product.subCategory == 0) {
        showAlertMessage({
          message: "Please select a product subcategory !",
          type: "error",
        });
        setError("subCategory");
        return 0;
      }
    }

    if (product.name == "") {
      showAlertMessage({
        message: "Please enter the product name !",
        type: "error",
      });
      setError("name");
      return 0;
    }

    if (product.pricing.price == "") {
      showAlertMessage({
        message: "Please enter the product price !",
        type: "error",
      });
      setError("price");
      return 0;
    } else if (product.pricing.priceQtyUnitValue == "") {
      showAlertMessage({
        message: "Please enter the price unit quantity!",
        type: "error",
      });
      setError("unit");
      return 0;
    }

    if (product.supplyQty == "") {
      showAlertMessage({
        message: "Please enter the monthly supply quantity !",
        type: "error",
      });
      setError("supplyQty");
      return 0;
    }

    if (!product.supplyFrequency && product.selectedMonths.length == 0) {
      showAlertMessage({
        message: "Please select the month range !",
        type: "error",
      });
      return 0;
    }

    return 1;
  };

  const save = () => {
    console.log(product);
    const isValidate = validation();
    if (isValidate) {
      const updatedProductDetails = [...formData.productDetails];
      if (store.getState().form.selectedProductIndex !== 99) {
        // Update the existing object in the array
        updatedProductDetails[store.getState().form.selectedProductIndex] =
          product;
      } else {
        // Add a new object to the array
        updatedProductDetails.push(product);
      }
      dispatch(setProductDetails(updatedProductDetails));
      setProduct(defaultValues);
      dispatch(setSelectedProductIndex(99));
      closeDrawer();
    }
  };

  const Discard = () => {
    setProduct(defaultValues);
    dispatch(setSelectedProductIndex(99));
    closeDrawer();
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        bgcolor: "#F9FAFB",
        // borderRadius: 4,
      }}
    >
      <Grid
        container
        sx={{
          minHeight: "90svh",
          p: 2,
          width: 500,
          borderRadius: 4,
        }}
      >
        <Grid item xs={12}>
          <Typography textAlign="center" fontWeight={600} mb={2}>
            {t("translation:AddProduct:heading")}
          </Typography>
          <Divider style={{ width: "100%", marginBottom: 25 }} />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={product.productOrRaw.toString()}
            onChange={(e) =>
              handleChange("productOrRaw", e.target.value === "true")
            }
            name="radio-buttons-group"
          >
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h5">
                  {t("translation:AddProduct:product")}
                </Typography>
              </Grid>
              <Grid item xs={6} display="flex" justifyContent="end" mb={2}>
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  labelPlacement="start"
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5">
                  {t("translation:AddProduct:rawMaterial")}
                </Typography>
              </Grid>
              <Grid item xs={6} display="flex" justifyContent="end" mb={2}>
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  labelPlacement="start"
                />
              </Grid>
            </Grid>
          </RadioGroup>
          {product.productOrRaw && (
            <>
              {" "}
              <CustomStyledBox
                sx={{
                  boxShadow: error === "category" ? errorShadow : initialShadow,
                }}
              >
                <Typography
                  variant="b1"
                  fontWeight={500}
                  color="primary"
                  pl={2}
                >
                  {t("translation:AddProduct:category")}
                </Typography>
                <FormControl fullWidth>
                  <Select
                    id="demo-simple-select"
                    value={product.category}
                    sx={{
                      boxShadow: "none",
                      ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      borderRadius: 3,
                      height: 30,
                    }}
                    onChange={(e) => handleChange("category", e.target.value)}
                  >
                    <MenuItem value={0}>Select a product category</MenuItem>
                    <MenuItem value={10}>Spices</MenuItem>
                    <MenuItem value={20}>Oils</MenuItem>
                    <MenuItem value={30}>condiments</MenuItem>
                  </Select>
                </FormControl>
              </CustomStyledBox>
              <CustomStyledBox
                sx={{
                  boxShadow:
                    error === "subCategory" ? errorShadow : initialShadow,
                }}
              >
                <Typography
                  variant="b1"
                  fontWeight={500}
                  color="primary"
                  pl={2}
                >
                  {t("translation:AddProduct:subCategory")}
                </Typography>
                <FormControl fullWidth>
                  <Select
                    id="demo-simple-select"
                    value={product.subCategory}
                    sx={{
                      boxShadow: "none",
                      ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      borderRadius: 3,
                      height: 30,
                    }}
                    disabled={product.category == 0}
                    onChange={(e) =>
                      handleChange("subCategory", e.target.value)
                    }
                  >
                    <MenuItem value={0}>Select a product sub category</MenuItem>
                    <MenuItem value={10}>Cinnamon</MenuItem>
                    <MenuItem value={20}>Turmeric</MenuItem>
                    <MenuItem value={30}>Pepper</MenuItem>
                  </Select>
                </FormControl>
              </CustomStyledBox>
            </>
          )}

          <CustomStyledBox
            sx={{
              boxShadow: error === "name" ? errorShadow : initialShadow,
            }}
          >
            <Typography color="primary" pl={2}>
              {t("translation:AddProduct:name")}
            </Typography>
            <TextField
              size="small"
              sx={{
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
              }}
              placeholder="Product Name ABC"
              fullWidth
              value={product.name}
              onChange={(e) => handleChange("name", e.target.value)}
            ></TextField>
          </CustomStyledBox>
        </Grid>

        <Grid item xs={12} mt={3}>
          <Typography fontWeight={600}>
            {t("translation:AddProduct:pricing")}
          </Typography>
          <Typography fontSize={"13px"} mt={1}>
            <Trans i18nKey="AddProduct.text1">
              Please select the units of quantity when adding price. <br />
              (For example: per kg, per liter, per gram, per one piece, etc.)
            </Trans>
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <CustomStyledBox
                sx={{
                  boxShadow: error === "price" ? errorShadow : initialShadow,
                }}
              >
                <Typography color="primary" pl={2}>
                  Price (Rupees)
                </Typography>
                <TextField
                  size="small"
                  sx={{
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  }}
                  placeholder="0000"
                  fullWidth
                  type="number"
                  inputProps={{ style: { fontWeight: "bold" } }}
                  value={product.pricing.price}
                  onChange={(e) =>
                    handleChange("pricing", e.target.value, "price")
                  }
                ></TextField>
              </CustomStyledBox>
            </Grid>
            <Grid item xs={6}>
              <CustomStyledBox
                height={85}
                sx={{
                  boxShadow: error === "unit" ? errorShadow : initialShadow,
                }}
              >
                <Typography color="primary" pl={2} mb={1}>
                  Quantity unit
                </Typography>
                <Grid container>
                  <Grid item xs={5} mb={3}>
                    <TextField
                      size="small"
                      sx={{
                        boxShadow: "none",
                        ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      }}
                      placeholder="00"
                      fullWidth
                      type="number"
                      inputProps={{ style: { fontWeight: "bold" } }}
                      value={product.pricing.priceQtyUnitValue}
                      onChange={(e) =>
                        handleChange(
                          "pricing",
                          e.target.value,
                          "priceQtyUnitValue"
                        )
                      }
                    ></TextField>
                  </Grid>
                  <Grid item xs={7} mt={0.5}>
                    <FormControl fullWidth>
                      <Select
                        id="demo-simple-select"
                        sx={{
                          boxShadow: "none",
                          ".MuiOutlinedInput-notchedOutline": { border: 0 },
                          borderRadius: 3,
                          height: 30,
                        }}
                        fullWidth
                        value={product.pricing.priceQtyUnit}
                        onChange={(e) =>
                          handleChange(
                            "pricing",
                            e.target.value,
                            "priceQtyUnit"
                          )
                        }
                      >
                        <MenuItem value={10}>kg</MenuItem>
                        <MenuItem value={20}>gram</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </CustomStyledBox>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} mt={3}>
          <Typography fontWeight={600}>
            {t("translation:AddProduct:supplyQuantity")}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CustomStyledBox
                sx={{
                  boxShadow:
                    error === "supplyQty" ? errorShadow : initialShadow,
                }}
              >
                <Typography color="primary" pl={2}>
                  Quantity
                </Typography>
                <TextField
                  size="small"
                  sx={{
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  }}
                  placeholder="0000"
                  fullWidth
                  type="number"
                  inputProps={{ style: { fontWeight: "bold" } }}
                  value={product.supplyQty}
                  onChange={(e) => handleChange("supplyQty", e.target.value)}
                ></TextField>
              </CustomStyledBox>
            </Grid>
            {/* <Grid item xs={6}>
              <CustomStyledBox height={85}>
                <Typography color="primary" pl={2} mb={0}>
                  Quantity unit
                </Typography>
                <Grid container>
                  <Grid item xs={5} mb={3}>
                    <TextField
                      size="small"
                      sx={{
                        boxShadow: "none",
                        ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      }}
                      placeholder="000"
                      fullWidth
                      inputProps={{ style: { fontWeight: "bold" } }}
                      value={product.supply.supplyQtyUnitValue}
                      onChange={(e) =>
                        handleChange(
                          "supply",
                          e.target.value,
                          "supplyQtyUnitValue"
                        )
                      }
                    ></TextField>
                  </Grid>
                  <Grid item xs={7} mt={0.5}>
                    <FormControl fullWidth>
                      <Select
                        id="demo-simple-select"
                        sx={{
                          boxShadow: "none",
                          ".MuiOutlinedInput-notchedOutline": { border: 0 },
                          borderRadius: 3,
                          height: 30,
                        }}
                        value={product.supply.supplyQtyUnit}
                        onChange={(e) =>
                          handleChange(
                            "supply",
                            e.target.value,
                            "supplyQtyUnit"
                          )
                        }
                      >
                        <MenuItem value={10}>kg</MenuItem>
                        <MenuItem value={20}>gram</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </CustomStyledBox>
            </Grid> */}
          </Grid>
        </Grid>

        <Grid item xs={12} mt={3}>
          <Typography fontWeight={600}>
            {t("translation:AddProduct:orderQuantity")}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CustomStyledBox
                sx={{
                  boxShadow: initialShadow,
                }}
              >
                <Typography color="primary" pl={2}>
                  Quantity
                </Typography>
                <TextField
                  size="small"
                  sx={{
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  }}
                  placeholder="0000"
                  fullWidth
                  type="number"
                  inputProps={{ style: { fontWeight: "bold" } }}
                  value={product.orderQty}
                  onChange={(e) => handleChange("orderQty", e.target.value)}
                ></TextField>
              </CustomStyledBox>
            </Grid>
            {/* <Grid item xs={6}>
              <CustomStyledBox height={85}>
                <Typography color="primary" pl={2} mb={1}>
                  Quantity unit
                </Typography>
                <Grid container>
                  <Grid item xs={5} mb={3}>
                    <TextField
                      size="small"
                      sx={{
                        boxShadow: "none",
                        ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      }}
                      placeholder="000"
                      fullWidth
                      inputProps={{ style: { fontWeight: "bold" } }}
                      value={product.order.orderQtyUnitValue}
                      onChange={(e) =>
                        handleChange(
                          "order",
                          e.target.value,
                          "orderQtyUnitValue"
                        )
                      }
                    ></TextField>
                  </Grid>
                  <Grid item xs={7} mt={0.5}>
                    <FormControl fullWidth>
                      <Select
                        id="demo-simple-select"
                        sx={{
                          boxShadow: "none",
                          ".MuiOutlinedInput-notchedOutline": { border: 0 },
                          borderRadius: 3,
                          height: 30,
                        }}
                        value={product.order.orderQtyUnit}
                        onChange={(e) =>
                          handleChange("order", e.target.value, "orderQtyUnit")
                        }
                      >
                        <MenuItem value={10}>kg</MenuItem>
                        <MenuItem value={20}>gram</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </CustomStyledBox>
            </Grid> */}
          </Grid>
        </Grid>

        <Grid item xs={12} mt={3}>
          <Typography variant="h6" fontWeight={700} mt={2} mb={2}>
            {t("translation:AddProduct:supplyFrequency")}
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <FormControl fullWidth sx={{ pl: 2, pr: 2 }}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={product.supplyFrequency.toString()}
              onChange={(e) =>
                handleChange("supplyFrequency", e.target.value === "true")
              }
              name="radio-buttons-group"
            >
              <Grid container>
                <Grid item xs={9}>
                  <Typography variant="h5">
                    {t("translation:AddProduct:monthly")}
                  </Typography>
                </Grid>
                <Grid item xs={3} display="flex" justifyContent="end" mb={2}>
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    labelPlacement="start"
                  />
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="h5">
                    {t("translation:AddProduct:custom")}
                  </Typography>
                </Grid>
                <Grid item xs={3} display="flex" justifyContent="end" mb={2}>
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    labelPlacement="start"
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
          {!product.supplyFrequency && (
            <>
              <Typography fontWeight={700} mt={2} mb={2}>
                {t("translation:AddProduct:monthRange")}
              </Typography>
              {renderMonthSelection()}
            </>
          )}
          <Divider sx={{ mt: 3 }} />
        </Grid>

        <Grid item xs={12} mt={3}>
          <Typography fontWeight={700} mt={2} mb={2}>
            {t("translation:AddProduct:otherDetails")}
          </Typography>
          <Typography fontSize={"13px"} mt={1} mb={1}>
            {t("translation:AddProduct:text2")}
          </Typography>
          <TextField
            fullWidth
            InputProps={{ sx: { borderRadius: 3 } }}
            multiline
            rows={7}
            value={product.otherDetails}
            onChange={(e) => handleChange("otherDetails", e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{
              height: 50,
              borderRadius: 3,
              color: "white",
              mt: 2,
            }}
            onClick={() => save()}
          >
            <Typography textTransform="capitalize" variant="h6">
              Save Product
            </Typography>
          </Button>
          <Button
            size="large"
            fullWidth
            sx={{
              height: 50,
              borderRadius: 3,
              color: "grey",
              mt: 2,
            }}
            variant="outlined"
            color="secondary"
            onClick={() => Discard()}
          >
            <Typography textTransform="capitalize" variant="h6">
              Discard
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddProducts;

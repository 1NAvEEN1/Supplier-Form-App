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
  Autocomplete,
} from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  setProductCategoryNames,
  setProductDetails,
  setSelectedProductIndex,
} from "../reducers/formSlice";
import store from "../app/store";
import { showAlertMessage } from "../app/alertMessageController";
import {
  GetProductCategories,
  GetProductSubCategories,
} from "../services/CategoryService";

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
  const { t, i18n } = useTranslation();
  const formData = useSelector((state) => state.form.formData);
  const categoryNames = useSelector((state) => state.form.productCategoryNames);
  const defaultValues = {
    productOrRaw: true,
    category: 0,
    subCategory: 0,
    name: "",
    pricing: {
      price: "",
      priceQtyUnitValue: "",
      priceQtyUnit: "kg",
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

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [subCategoriesLoading, setSubCategoriesLoading] = useState(false);

  const getCategories = async () => {
    try {
      setCategoriesLoading(true);
      const response = await GetProductCategories();
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching Categories:", error);
    } finally {
      setCategoriesLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const getSubCategories = async () => {
    try {
      setSubCategoriesLoading(true);
      const response = await GetProductSubCategories(product.category);
      setSubCategories(response.data);
    } catch (error) {
      console.error("Error fetching SubCategories:", error);
    } finally {
      setSubCategoriesLoading(false);
    }
  };

  useEffect(() => {
    if (product.category !== 0) {
      getSubCategories();
    }
  }, [product.category]);

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
    if (product.category == 0) {
      showAlertMessage({
        message: "Please select a product category !",
        type: "error",
      });
      setError("category");
      return 0;
    }

    if (product.productOrRaw) {
      if (product.subCategory == 0) {
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
      const updatedProductCategoryNames = [...categoryNames];

      const categoryNamesObject = {
        category: categories.find(
          (category) => category.id === product.category
        ),
        subCategory: subCategories.find(
          (subCategory) => subCategory.id === product.subCategory
        ),
      };

      if (store.getState().form.selectedProductIndex !== 99) {
        // Update the existing object in the array
        updatedProductDetails[store.getState().form.selectedProductIndex] =
          product;

        updatedProductCategoryNames[
          store.getState().form.selectedProductIndex
        ] = categoryNamesObject;
      } else {
        // Add a new object to the array
        updatedProductDetails.push(product);
        updatedProductCategoryNames.push(categoryNamesObject);
      }
      dispatch(setProductDetails(updatedProductDetails));
      dispatch(setProductCategoryNames(updatedProductCategoryNames));
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

          <CustomStyledBox
            sx={{
              boxShadow: error === "category" ? errorShadow : initialShadow,
            }}
          >
            <Typography variant="b1" fontWeight={500} color="primary" pl={2}>
              {t("translation:AddProduct:category")}
            </Typography>
            <FormControl fullWidth>
              <Autocomplete
                value={
                  categories.find(
                    (category) => category.id === product.category
                  ) || null
                }
                size="small"
                options={categories}
                getOptionLabel={(option) =>
                  i18n.language === "en"
                    ? option.nameEnglish
                    : i18n.language === "si"
                    ? option.nameSinhala
                    : option.nameTamil
                }
                onChange={(_, newValue) => {
                  handleChange("category", newValue ? newValue.id : 0);
                  setSubCategories([]);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder={t("translation:AddProduct:selectCategory")}
                    sx={{
                      ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      borderRadius: 3,
                      height: 40,
                    }}
                  />
                )}
                loading={categoriesLoading} // Add loading prop
              />
            </FormControl>
          </CustomStyledBox>

          {product.productOrRaw && (
            <>
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
                  <Autocomplete
                    value={
                      subCategories.find(
                        (subCategory) => subCategory.id === product.subCategory
                      ) || null
                    }
                    size="small"
                    options={subCategories}
                    getOptionLabel={(option) =>
                      i18n.language === "en"
                        ? option.nameEnglish
                        : i18n.language === "si"
                        ? option.nameSinhala
                        : option.nameTamil
                    }
                    onChange={(_, newValue) => {
                      handleChange("subCategory", newValue ? newValue.id : 0);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder={t(
                          "translation:AddProduct:selectSubCategory"
                        )}
                        sx={{
                          ".MuiOutlinedInput-notchedOutline": { border: 0 },
                          borderRadius: 3,
                          height: 40,
                        }}
                      />
                    )}
                    disabled={product.category === 0}
                    loading={subCategoriesLoading} // Add loading prop
                  />
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
              placeholder={t("translation:AddProduct:productName")}
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
            <Grid item xs={12}>
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
                    pl: 2,
                    pr: 2,
                  }}
                  placeholder="0000"
                  fullWidth
                  type="number"
                  inputProps={{ style: { fontWeight: "bold" } }}
                  value={product.pricing.price}
                  onChange={(e) => {
                    const value = Math.max(0, e.target.value);
                    handleChange("pricing", value, "price");
                  }}
                ></TextField>
              </CustomStyledBox>
            </Grid>
            <Grid item xs={12} mt={-2}>
              <CustomStyledBox
                height={85}
                sx={{
                  boxShadow: error === "unit" ? errorShadow : initialShadow,
                }}
              >
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
                        pl: 2,
                      }}
                      placeholder="00"
                      fullWidth
                      type="number"
                      inputProps={{
                        style: { fontWeight: "bold" },
                      }}
                      value={product.pricing.priceQtyUnitValue}
                      onChange={(e) => {
                        const value = Math.max(0, e.target.value);
                        handleChange("pricing", value, "priceQtyUnitValue");
                      }}
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
                          textAlign: "center",
                          pl: 2,
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
                        <MenuItem value={"kg"}>Kilogram (kg)</MenuItem>
                        <MenuItem value={"g"}>Gram (g)</MenuItem>
                        <MenuItem value={"ml"}>Milliliter (ml)</MenuItem>
                        <MenuItem value={"l"}>Liter (l)</MenuItem>
                        <MenuItem value={"Packet"}>Packet</MenuItem>
                        <MenuItem value={"Unit"}>Unit</MenuItem>
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
                    pl: 2,
                    pr: 2,
                  }}
                  placeholder="0000"
                  fullWidth
                  type="number"
                  inputProps={{ style: { fontWeight: "bold" } }}
                  value={product.supplyQty}
                  onChange={(e) => {
                    const value = Math.max(0, e.target.value); // Ensure non-negative value
                    handleChange("supplyQty", value);
                  }}
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
                    pl: 2,
                    pr: 2,
                  }}
                  placeholder="0000"
                  fullWidth
                  type="number"
                  inputProps={{ style: { fontWeight: "bold" } }}
                  value={product.orderQty}
                  onChange={(e) => {
                    const value = Math.max(0, e.target.value);
                    handleChange("orderQty", value);
                  }}
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

import React, { useState } from "react";
import {
  Typography,
  Button,
  SwipeableDrawer,
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

const CustomStyledBox = ({ children, ...rest }) => (
  <Box
    sx={{
      boxShadow: "1px 5px 8px 5px rgba(0, 0, 0, 0.05)",
      borderRadius: 3,
      mt: 3,
      pt: 1,
      pr: 2,
      pb: 1,
      ...rest, // Apply additional styles passed as props
    }}
  >
    {children}
  </Box>
);

const AddProducts = ({ closeDrawer }) => {
  const { t } = useTranslation();
  const [category, setCategory] = useState(10);
  const [subCategory, setSubCategory] = useState(10);

  const [unit, setUnit] = useState(10);

  const [supplyFrequency, setSupplyFrequency] = useState(true);
  const [mothRange, setMothRange] = useState();

  const handleFrequencyChange = (event) => {
    setSupplyFrequency(event.target.value === "true");
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
          <Typography textAlign="center" fontWeight={600}>
            {t("translation:AddProduct:heading")}
          </Typography>
          <CustomStyledBox>
            <Typography variant="b1" fontWeight={500} color="primary" pl={2}>
              {t("translation:AddProduct:category")}
            </Typography>
            <FormControl fullWidth>
              <Select
                id="demo-simple-select"
                value={category}
                sx={{
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  borderRadius: 3,
                  height: 30,
                }}
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value={10}>Spices</MenuItem>
                <MenuItem value={20}>Oils</MenuItem>
                <MenuItem value={30}>condiments</MenuItem>
              </Select>
            </FormControl>
          </CustomStyledBox>
          <CustomStyledBox>
            <Typography variant="b1" fontWeight={500} color="primary" pl={2}>
              {t("translation:AddProduct:subCategory")}
            </Typography>
            <FormControl fullWidth>
              <Select
                id="demo-simple-select"
                value={subCategory}
                sx={{
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  borderRadius: 3,
                  height: 30,
                }}
                onChange={(e) => setSubCategory(e.target.value)}
              >
                <MenuItem value={10}>Cinnamon</MenuItem>
                <MenuItem value={20}>Turmeric</MenuItem>
                <MenuItem value={30}>Pepper</MenuItem>
              </Select>
            </FormControl>
          </CustomStyledBox>
          <CustomStyledBox>
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
            <Grid item xs={6.5}>
              <CustomStyledBox>
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
                  inputProps={{ style: { fontWeight: "bold" } }}
                ></TextField>
              </CustomStyledBox>
            </Grid>
            <Grid item xs={5.5}>
              <CustomStyledBox height={85}>
                <Typography color="primary" pl={2} mb={1}>
                  Quantity unit
                </Typography>
                <FormControl fullWidth>
                  <Select
                    id="demo-simple-select"
                    value={unit}
                    sx={{
                      boxShadow: "none",
                      ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      borderRadius: 3,
                      height: 30,
                    }}
                    onChange={(e) => setUnit(e.target.value)}
                  >
                    <MenuItem value={10}>kg</MenuItem>
                    <MenuItem value={20}>gram</MenuItem>
                  </Select>
                </FormControl>
              </CustomStyledBox>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} mt={3}>
          <Typography fontWeight={600}>
            {t("translation:AddProduct:supplyQuantity")}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6.5}>
              <CustomStyledBox>
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
                  inputProps={{ style: { fontWeight: "bold" } }}
                ></TextField>
              </CustomStyledBox>
            </Grid>
            <Grid item xs={5.5}>
              <CustomStyledBox height={85}>
                <Typography color="primary" pl={2} mb={1}>
                  Quantity unit
                </Typography>
                <FormControl fullWidth>
                  <Select
                    id="demo-simple-select"
                    value={unit}
                    sx={{
                      boxShadow: "none",
                      ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      borderRadius: 3,
                      height: 30,
                    }}
                    onChange={(e) => setUnit(e.target.value)}
                  >
                    <MenuItem value={10}>kg</MenuItem>
                    <MenuItem value={20}>gram</MenuItem>
                  </Select>
                </FormControl>
              </CustomStyledBox>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} mt={3}>
          <Typography fontWeight={600}>
            {t("translation:AddProduct:orderQuantity")}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6.5}>
              <CustomStyledBox>
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
                  inputProps={{ style: { fontWeight: "bold" } }}
                ></TextField>
              </CustomStyledBox>
            </Grid>
            <Grid item xs={5.5}>
              <CustomStyledBox height={85}>
                <Typography color="primary" pl={2} mb={1}>
                  Quantity unit
                </Typography>
                <FormControl fullWidth>
                  <Select
                    id="demo-simple-select"
                    value={unit}
                    sx={{
                      boxShadow: "none",
                      ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      borderRadius: 3,
                      height: 30,
                    }}
                    onChange={(e) => setUnit(e.target.value)}
                  >
                    <MenuItem value={10}>kg</MenuItem>
                    <MenuItem value={20}>gram</MenuItem>
                  </Select>
                </FormControl>
              </CustomStyledBox>
            </Grid>
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
              value={supplyFrequency.toString()}
              onChange={handleFrequencyChange}
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
          {!supplyFrequency && (
            <>
              <Typography fontWeight={700} mt={2} mb={2}>
                {t("translation:AddProduct:monthRange")}
              </Typography>
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
            maxRows={7}
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
            onClick={() => closeDrawer()} // Update this line
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
            }}
            onClick={() => closeDrawer()} // Update this line
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

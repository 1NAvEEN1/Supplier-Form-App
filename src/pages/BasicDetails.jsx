import {
  Typography,
  FormControl,
  Divider,
  Box,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import store from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../reducers/formSlice";
import { GetProvinces } from "../services/LocationService";
import { setErrorsBasicDetails } from "../reducers/errorMessages";

const initialShadow = "1px 5px 8px 5px rgba(0, 0, 0, 0.05)";
const errorShadow = "-1px 1px 8px 5px rgba(255, 0, 0, 0.3)";

const BasicDetails = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [details, setDetails] = useState({
    province: store.getState().form.formData.basicDetails.province,
    district: store.getState().form.formData.basicDetails.district,
    city: store.getState().form.formData.basicDetails.city,
    name: store.getState().form.formData.basicDetails.name,
    phone: store.getState().form.formData.basicDetails.contactNo,
    phone2: store.getState().form.formData.basicDetails.contactNo2,
    email: store.getState().form.formData.basicDetails.email,
  });

  const [provinces, setProvinces] = useState();
  // const [error, setError] = useState(
  //   store.getState().errors.basicDetails.error
  // );
  let error = useSelector((state) => state.errors.basicDetails.error);
  // useEffect(() => {
  //   error = store.getState().errors.basicDetails.error;
  //   console.log(error);
  // }, [store.getState().errors.basicDetails.error]);

  const handleChange = (key, value) => {
    dispatch(setErrorsBasicDetails({}));
    setDetails({ ...details, [key]: value });
    dispatch(setFormData({ ...details, [key]: value }));
  };

  const handlePhoneNumberChange = (key, value) => {
    const numericValue = value.replace(/\D/g, "");
    const limitedValue = numericValue.slice(0, 10);
    dispatch(setErrorsBasicDetails({}));
    setDetails({ ...details, [key]: limitedValue });
    dispatch(setFormData({ ...details, [key]: limitedValue }));
  };

  const provinceDistrictCityMapping = {
    Western: {
      Colombo: ["Colombo City", "Dehiwala", "Mount Lavinia"],
      Gampaha: ["Gampaha", "Negombo", "Kadawatha"],
      Kalutara: ["Kalutara", "Panadura", "Horana"],
      // ...Other districts and cities in the Western province
    },
    Central: {
      Kandy: ["Kandy", "Peradeniya", "Gampola"],
      Matale: ["Matale", "Dambulla", "Galewela"],
      "Nuwara Eliya": ["Nuwara Eliya", "Hatton", "Maskeliya"],
      // ...Other districts and cities in the Central province
    },
    // ...Other provinces and their districts and cities
  };

  const handleProvinceChange = (value) => {
    setDetails({ ...details, province: value, district: "0" });
  };

  const getProvinces = async () => {
    const provinces = await GetProvinces();
    setProvinces(provinces);
    console.log("provinces", provinces);
  };

  // useEffect(() => {
  //   getProvinces();
  // }, []);

  return (
    <div>
      <Typography variant="h4" fontWeight={700} mt={2} mb={2}>
        {t("translation:BasicDetails:heading")}
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Box
        sx={{
          boxShadow: error === "province" ? errorShadow : initialShadow,
          borderRadius: 3,
          // border: 2,
          // borderColor: "#d32f2f",
          pt: 1,
          pr: 2,
          pb: 1,
        }}
      >
        <Typography variant="b1" fontWeight={600} color="primary" pl={2}>
          {t("translation:BasicDetails:province")}
        </Typography>
        <FormControl fullWidth>
          <Select
            value={details.province}
            onChange={(e) => handleChange("province", e.target.value)}
            sx={{
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
              borderRadius: 3,
              height: 30,
            }}
            placeholder="Select a Province"
          >
            <MenuItem value={"0"}>Select a Province</MenuItem>
            {Object.keys(provinceDistrictCityMapping).map((province) => (
              <MenuItem key={province} value={province}>
                {province}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          boxShadow: error === "district" ? errorShadow : initialShadow,
          borderRadius: 3,
          pt: 1,
          pr: 2,
          mt: 3,
          pb: 1,
        }}
      >
        <Typography variant="b1" fontWeight={600} color="primary" pl={2}>
          {t("translation:BasicDetails:district")}
        </Typography>
        <FormControl fullWidth>
          <Select
            value={details.district}
            onChange={(e) => handleChange("district", e.target.value)}
            disabled={details.province === "0"}
            sx={{
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
              borderRadius: 3,
              height: 30,
            }}
          >
            <MenuItem value={"0"}>Select a District</MenuItem>
            {details.province !== "0" &&
              Object.keys(
                provinceDistrictCityMapping[details.province] || {}
              ).map((district) => (
                <MenuItem key={district} value={district}>
                  {district}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          boxShadow: error === "city" ? errorShadow : initialShadow,
          borderRadius: 3,
          mt: 3,
          pt: 1,
          pr: 2,
          pb: 1,
        }}
      >
        <Typography variant="b1" fontWeight={600} color="primary" pl={2}>
          {t("translation:BasicDetails:city")}
        </Typography>
        <FormControl fullWidth>
          <Select
            value={details.city}
            onChange={(e) => handleChange("city", e.target.value)}
            disabled={details.district === "0"}
            sx={{
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
              borderRadius: 3,
              height: 30,
            }}
          >
            <MenuItem value={"0"}>Select a City</MenuItem>
            {details.district !== "0" &&
              Array.isArray(
                provinceDistrictCityMapping[details.province]?.[
                  details.district
                ]
              ) &&
              provinceDistrictCityMapping[details.province]?.[
                details.district
              ]?.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>

      <TextField
        fullWidth
        InputProps={{ sx: { borderRadius: 3, mt: 4 } }}
        placeholder={t("translation:BasicDetails:name")}
        value={details.name}
        error={error === "name"}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <TextField
        fullWidth
        InputProps={{
          sx: { borderRadius: 3, mt: 4 },
          inputProps: {
            inputMode: "numeric",
            pattern: "[0-9]*", // Allow only numbers
            maxLength: 10, // Limit to 10 characters
          },
        }}
        error={error === "number" || error === "Invalid Contact Number"}
        placeholder={t("translation:BasicDetails:number")}
        value={details.phone}
        onChange={(e) => handlePhoneNumberChange("phone", e.target.value)}
      />
      <TextField
        fullWidth
        InputProps={{
          sx: { borderRadius: 3, mt: 4 },
          inputProps: {
            inputMode: "numeric",
            pattern: "[0-9]*", // Allow only numbers
            maxLength: 10, // Limit to 10 characters
          },
        }}
        error={error === "Invalid Secondary Contact Number"}
        placeholder={t("translation:BasicDetails:number2")}
        value={details.phone2}
        onChange={(e) => handlePhoneNumberChange("phone2", e.target.value)}
      />
      <TextField
        fullWidth
        error={error === "email"}
        InputProps={{ sx: { borderRadius: 3, mt: 4 } }}
        placeholder={t("translation:BasicDetails:email")}
        value={details.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />
    </div>
  );
};

export default BasicDetails;

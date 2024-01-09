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
import {
  GetCities,
  GetDistricts,
  GetProvinces,
} from "../services/LocationService";
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

  let error = useSelector((state) => state.errors.basicDetails.error);

  const handleChange = (key, value) => {
    console.log(key + " , " + value);
    if (key === "province") {
      setDetails({ ...details, province: value, district: "0", city: "0" });
    } else if (key === "district") {
      setDetails({ ...details, [key]: value, city: "0" });
    } else {
      setDetails({ ...details, [key]: value });
    }
    dispatch(setErrorsBasicDetails({}));
    dispatch(setFormData({ ...details, [key]: value }));
  };

  const handlePhoneNumberChange = (key, value) => {
    const numericValue = value.replace(/\D/g, "");
    const limitedValue = numericValue.slice(0, 10);
    dispatch(setErrorsBasicDetails({}));
    setDetails({ ...details, [key]: limitedValue });
    dispatch(setFormData({ ...details, [key]: limitedValue }));
  };

  const [provinces, setProvinces] = useState([]);

  const getProvinces = async () => {
    try {
      const response = await GetProvinces();
      setProvinces(response.data);
    } catch (error) {
      console.error("Error fetching provinces:", error);
    }
  };

  useEffect(() => {
    getProvinces();
  }, []);

  const [districts, setDistricts] = useState([]);

  const getDistricts = async () => {
    try {
      const response = await GetDistricts(details.province);
      setDistricts(response.data);
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  };

  useEffect(() => {
    if (!details.province == 0) {
      getDistricts();
    }
  }, [details.province]);

  const [cities, setCities] = useState([]);

  const getCities = async () => {
    try {
      const response = await GetCities(details.district);
      setCities(response.data);
    } catch (error) {
      console.error("Error fetching Cities:", error);
    }
  };

  useEffect(() => {
    if (!details.district == 0) {
      getCities();
    }
  }, [details.district]);

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
            {provinces.map((province) => (
              <MenuItem key={province.id} value={province.id}>
                {province.provinceEnglish}
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
            {districts.map((district) => (
              <MenuItem key={district.id} value={district.id}>
                {district.districtEnglish}
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
            {cities.map((city) => (
              <MenuItem key={city.id} value={city.id}>
                {city.cityEnglish}
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

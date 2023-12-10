import {
  Typography,
  FormControl,
  Divider,
  Box,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import store from "../app/store";
import { useDispatch } from "react-redux";
import { setFormData } from "../reducers/formSlice";

const BasicDetails = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [details, setDetails] = useState({
    province: store.getState().form.formData.basicDetails.province,
    district: store.getState().form.formData.basicDetails.district,
    city: store.getState().form.formData.basicDetails.city,
    name: store.getState().form.formData.basicDetails.name,
    phone: store.getState().form.formData.basicDetails.contactNo,
    email: store.getState().form.formData.basicDetails.email,
  });

  const handleChange = (key, value) => {
    setDetails({ ...details, [key]: value });
    dispatch(setFormData({ [key]: value }));
  };

  return (
    <div>
      <Typography variant="h4" fontWeight={700} mt={2} mb={2}>
        {t("translation:BasicDetails:heading")}
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Box
        sx={{
          boxShadow: "0px 5px 8px 5px rgba(0, 0, 0, 0.03)",
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
            id="demo-simple-select"
            value={details.province}
            sx={{
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
              borderRadius: 3,
              height: 30,
            }}
            onChange={(e) => handleChange("province", e.target.value)}
          >
            <MenuItem value={0}>Select a Province</MenuItem>
            <MenuItem value={10}>Western</MenuItem>
            <MenuItem value={20}>Southern</MenuItem>
            <MenuItem value={30}>Central</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          boxShadow: "0px 5px 8px 5px rgba(0, 0, 0, 0.03)",
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
            id="demo-simple-select"
            value={details.district}
            sx={{
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
              borderRadius: 3,
              height: 30,
            }}
            onChange={(e) => handleChange("district", e.target.value)}
          >
            <MenuItem value={0}>Select a District</MenuItem>
            <MenuItem value={10}>Gampaha</MenuItem>
            <MenuItem value={20}>Southern</MenuItem>
            <MenuItem value={30}>Central</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          boxShadow: "0px 5px 8px 5px rgba(0, 0, 0, 0.03)",
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
            id="demo-simple-select"
            value={details.city}
            sx={{
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
              borderRadius: 3,
              height: 30,
            }}
            onChange={(e) => handleChange("city", e.target.value)}
          >
            <MenuItem value={0}>Select a City</MenuItem>
            <MenuItem value={10}>Wattala</MenuItem>
            <MenuItem value={20}>Southern</MenuItem>
            <MenuItem value={30}>Central</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <TextField
        fullWidth
        InputProps={{ sx: { borderRadius: 3, mt: 4 } }}
        placeholder={t("translation:BasicDetails:name")}
        value={details.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <TextField
        fullWidth
        InputProps={{ sx: { borderRadius: 3, mt: 4 } }}
        placeholder={t("translation:BasicDetails:number")}
        value={details.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
      />
      <TextField
        fullWidth
        InputProps={{ sx: { borderRadius: 3, mt: 4 } }}
        placeholder={t("translation:BasicDetails:email")}
        value={details.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />
    </div>
  );
};

export default BasicDetails;

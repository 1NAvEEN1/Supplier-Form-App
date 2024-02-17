import {
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Divider,
  Grid,
  Box,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import store from "../app/store";
import { useDispatch } from "react-redux";
import { setBusinessRegDetails } from "../reducers/formSlice";

const BusinessDetails = () => {
  const dispatch = useDispatch();
  const data = store.getState().form.formData?.businessRegDetails;
  console.log(data);
  const { t } = useTranslation();
  const [businessType, setBusinessType] = useState(data.businessType);
  const [registeredBusiness, setRegisteredBusiness] = useState(
    data.registered === 0 ? false : true
  );
  const [businessName, setBusinessName] = useState(data.businessName);

  const handleRegistrationChange = (event) => {
    setRegisteredBusiness(event.target.value === "true");
    dispatch(
      setBusinessRegDetails({
        registered: event.target.value === "true" ? 1 : 0,
      })
    );
    if (event.target.value === "false") {
      dispatch(
        setBusinessRegDetails({
          businessType: 0,
          businessName: "",
        })
      );
      setBusinessName("");
      setBusinessType(0);
    }
  };

  const handleBusinessTypeChange = (data) => {
    setBusinessType(data);
    dispatch(
      setBusinessRegDetails({
        businessType: data,
      })
    );
  };

  return (
    <div>
      <Typography variant="h6" fontWeight={700} mt={2} mb={2}>
        {t("translation:BusinessDetails:heading")}
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <FormControl fullWidth sx={{ pl: 2, pr: 2 }}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={registeredBusiness.toString()}
          onChange={handleRegistrationChange}
          name="radio-buttons-group"
        >
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h5">
                {t("translation:BusinessDetails:yes")}
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
                {t("translation:BusinessDetails:no")}
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
      </FormControl>
      {registeredBusiness && (
        <>
          <Typography fontWeight={700} mt={2} mb={2}>
            {t("translation:BusinessDetails:type")}
          </Typography>
          <Box
            sx={{
              borderRadius: 2,
              border: businessType === 2 ? 2 : 1,
              p: 1,
              borderColor: businessType === 2 ? "#F47621" : "lightgrey",
              mt: 4,
              "&:hover": {
                backgroundColor: "lightgray",
                cursor: "pointer",
              },
            }}
            onClick={() => handleBusinessTypeChange(2)}
          >
            <Typography fontWeight={500}>
              {t("translation:BusinessDetails:pvt")}
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: 2,
              border: businessType === 1 ? 2 : 1,
              p: 1,
              borderColor: businessType === 1 ? "#F47621" : "lightgrey",
              mt: 2,
              mb: 2,
              "&:hover": {
                backgroundColor: "lightgray",
                cursor: "pointer",
              },
            }}
            onClick={() => handleBusinessTypeChange(1)}
          >
            <Typography fontWeight={500}>
              {t("translation:BusinessDetails:partnership")}
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: 2,
              border: businessType === 0 ? 2 : 1,
              p: 1,
              borderColor: businessType === 0 ? "#F47621" : "lightgrey",
              "&:hover": {
                backgroundColor: "lightgray",
                cursor: "pointer",
              },
            }}
            onClick={() => handleBusinessTypeChange(0)}
          >
            <Typography fontWeight={500}>
              {t("translation:BusinessDetails:solo")}
            </Typography>
          </Box>
          <Typography fontWeight={700} mt={4} mb={2}>
            {t("translation:BusinessDetails:name")}
          </Typography>
          <TextField
            fullWidth
            InputProps={{ sx: { borderRadius: 3 } }}
            placeholder="ABC Private Limited"
            multiline
            value={businessName}
            rows={4}
            maxRows={4}
            onChange={(e) => {
              setBusinessName(e.target.value);
              dispatch(setBusinessRegDetails({ businessName: e.target.value }));
            }}
          ></TextField>
        </>
      )}
    </div>
  );
};

export default BusinessDetails;

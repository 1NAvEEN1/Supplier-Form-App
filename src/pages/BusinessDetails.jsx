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

const BusinessDetails = () => {
  const { t } = useTranslation();
  const [businessType, setBusinessType] = useState("pvt");
  const [registeredBusiness, setRegisteredBusiness] = useState(true);

  const handleRegistrationChange = (event) => {
    setRegisteredBusiness(event.target.value === "true");
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
              border: businessType === "pvt" ? 2 : 1,
              p: 1,
              borderColor: businessType === "pvt" ? "#F47621" : "lightgrey",
              mt: 4,
              "&:hover": {
                backgroundColor: "lightgray",
                cursor: "pointer",
              },
            }}
            onClick={() => setBusinessType("pvt")}
          >
            <Typography fontWeight={500}>
              {t("translation:BusinessDetails:pvt")}
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: 2,
              border: businessType === "partnership" ? 2 : 1,
              p: 1,
              borderColor:
                businessType === "partnership" ? "#F47621" : "lightgrey",
              mt: 2,
              mb: 2,
              "&:hover": {
                backgroundColor: "lightgray",
                cursor: "pointer",
              },
            }}
            onClick={() => setBusinessType("partnership")}
          >
            <Typography fontWeight={500}>
              {t("translation:BusinessDetails:partnership")}
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: 2,
              border: businessType === "solo" ? 2 : 1,
              p: 1,
              borderColor: businessType === "solo" ? "#F47621" : "lightgrey",
              "&:hover": {
                backgroundColor: "lightgray",
                cursor: "pointer",
              },
            }}
            onClick={() => setBusinessType("solo")}
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
            rows={4}
            maxRows={4}
          ></TextField>
        </>
      )}
    </div>
  );
};

export default BusinessDetails;

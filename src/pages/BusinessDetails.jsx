import {
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Divider,
  Grid,
  Box,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const BusinessDetails = () => {
  const [businessType, setBusinessType] = useState("pvt");
  const [registeredBusiness, setRegisteredBusiness] = useState(false);

  const handleRegistrationChange = (event) => {
    setRegisteredBusiness(event.target.value === "true");
  };

  return (
    <div>
      <Typography variant="h6" fontWeight={700} mt={2} mb={2}>
        Have you registered your business?
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
              <Typography variant="h5">Yes</Typography>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="end" mb={2}>
              <FormControlLabel
                value="true"
                control={<Radio />}
                labelPlacement="start"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5">No</Typography>
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
            If Yes, what is the type of your business?
          </Typography>
          <Box
            sx={{
              borderRadius: 2,
              border: businessType === "pvt" ? 2 : 1,
              p: 1,
              borderColor: businessType === "pvt" ? "#F47621" : "lightgrey",
              mt: 4,
            }}
            onClick={() => setBusinessType("pvt")}
          >
            <Typography fontWeight={700}>Private Limited Company</Typography>
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
            }}
            onClick={() => setBusinessType("partnership")}
          >
            <Typography fontWeight={700}>Partnership</Typography>
          </Box>
          <Box
            sx={{
              borderRadius: 2,
              border: businessType === "solo" ? 2 : 1,
              p: 1,
              borderColor: businessType === "solo" ? "#F47621" : "lightgrey",
            }}
            onClick={() => setBusinessType("solo")}
          >
            <Typography fontWeight={700}>Solo Proprietor</Typography>
          </Box>
          <Typography fontWeight={700} mt={4} mb={2}>
            Please mention your business name
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

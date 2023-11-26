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

const CertificatesDetails = () => {
  const [certificates, setCertificates] = useState(true);

  const handleRegistrationChange = (event) => {
    setCertificates(event.target.value === "true");
  };

  return (
    <div>
      <Typography variant="h6" fontWeight={700} mt={2} mb={2}>
        Do you have any quality certificates?
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <FormControl fullWidth sx={{ pl: 2, pr: 2 }}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={certificates.toString()}
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
      {certificates && (
        <>
          <Typography fontWeight={700} mt={2} mb={2}>
            If Yes, please note them here
          </Typography>
          <TextField
            fullWidth
            InputProps={{ sx: { borderRadius: 3 } }}
            placeholder="GMP | HAPPC | SLS | HALAL"
            multiline
            rows={5}
            maxRows={5}
          ></TextField>
        </>
      )}
    </div>
  );
};

export default CertificatesDetails;

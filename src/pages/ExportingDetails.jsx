import {
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const ExportingDetails = () => {
  const [exporting, setExporting] = useState(true);

  const handleRegistrationChange = (event) => {
    setExporting(event.target.value === "true");
  };

  return (
    <div>
      <Typography variant="h6" fontWeight={700} mt={2} mb={2}>
        Are you presently exporting your product?
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <FormControl fullWidth sx={{ pl: 2, pr: 2 }}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={exporting.toString()}
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
      {exporting && (
        <>
          <Typography fontWeight={700} mt={2} mb={2}>
            If Yes, which countries are you exporting to?
          </Typography>
          <TextField
            fullWidth
            InputProps={{ sx: { borderRadius: 3 } }}
            placeholder="USA, UK ,Canada, Japan , India"
            multiline
            rows={7}
            maxRows={7}
          ></TextField>
        </>
      )}
    </div>
  );
};

export default ExportingDetails;

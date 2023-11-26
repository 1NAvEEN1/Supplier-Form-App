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

const AskForExport = () => {
  const [exporting, setExporting] = useState(true);

  const handleRegistrationChange = (event) => {};

  return (
    <div>
      <Typography  fontWeight={700} mt={2} mb={2}>
        Would you be open to supplying your product for us to handle the export?
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
    </div>
  );
};

export default AskForExport;

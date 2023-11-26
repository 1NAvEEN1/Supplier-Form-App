import {
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Divider,
  Grid,
} from "@mui/material";
import React from "react";

const Business = () => {
  return (
    <div>
      <Typography variant="h4" fontWeight={700} mt={2} mb={2}>
        Please select language
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <FormControl fullWidth sx={{pl:2,pr:2}}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="English"
          name="radio-buttons-group"
          
        >
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h6">English</Typography>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="end" mb={3}>
              <FormControlLabel
                value="English"
                control={<Radio />}
                labelPlacement="start"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Sinhala</Typography>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="end" mb={3}>
              <FormControlLabel
                value="Sinhala"
                control={<Radio />}
                labelPlacement="start"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Tamil</Typography>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="end" mb={3}>
              <FormControlLabel
                value="Tamil"
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

export default Business;

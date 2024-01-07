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
import { useTranslation } from "react-i18next";
import store from "../app/store";
import { useDispatch } from "react-redux";
import { setAskForExporting } from "../reducers/formSlice";

const AskForExport = () => {
  let data = store.getState().form.formData.askForExporting;
  const dispatch = useDispatch(0);
  const { t } = useTranslation();
  const [exporting, setExporting] = useState(data === 0 ? false : true);

  const handleRegistrationChange = (event) => {
    setExporting(event.target.value === "true");
    dispatch(setAskForExporting(event.target.value === "true" ? 1 : 0));
  };

  return (
    <div>
      <Typography fontWeight={700} variant="h6" mt={2} mb={2}>
        {t("translation:AskForExport:heading")}
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
              <Typography variant="h5">
                {t("translation:AskForExport:yes")}
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
                {t("translation:AskForExport:no")}
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
    </div>
  );
};

export default AskForExport;

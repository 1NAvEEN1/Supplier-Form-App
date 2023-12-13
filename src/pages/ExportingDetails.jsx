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
import { setExportingDetails } from "../reducers/formSlice";

const ExportingDetails = () => {
  let data = store.getState().form.formData.exportingDetails;
  const dispatch = useDispatch(0);
  const { t } = useTranslation();
  const [exporting, setExporting] = useState(
    data.exporting === 0 ? false : true
  );
  const [countries, setCountries] = useState(data.countries);

  const handleRegistrationChange = (event) => {
    setExporting(event.target.value === "true");
    dispatch(
      setExportingDetails({
        exporting: event.target.value === "true" ? 1 : 0,
      })
    );
  };

  return (
    <div>
      <Typography variant="h6" fontWeight={700} mt={2} mb={2}>
        {t("translation:ExportingDetails:heading")}
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
                {t("translation:ExportingDetails:yes")}
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
                {t("translation:ExportingDetails:no")}
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
      {exporting && (
        <>
          <Typography fontWeight={700} mt={2} mb={2}>
            {t("translation:ExportingDetails:note")}
          </Typography>
          <TextField
            fullWidth
            InputProps={{ sx: { borderRadius: 3 } }}
            placeholder="USA, UK ,Canada, Japan , India"
            multiline
            rows={7}
            value={countries}
            onChange={(e) => {
              setCountries(e.target.value);
              dispatch(
                setExportingDetails({
                  countries: e.target.value,
                })
              );
            }}
          ></TextField>
        </>
      )}
    </div>
  );
};

export default ExportingDetails;

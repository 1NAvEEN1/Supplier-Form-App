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
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setFormData } from "../reducers/formSlice";

const LanguageSelect = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (language) => {
    dispatch(
      setFormData({
        FormData: { SessionThrough: language },
      })
    );
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <Typography variant="h4" fontWeight={700} mt={2} mb={2}>
        {t("translation:LanguageSelect:heading")}
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <FormControl fullWidth sx={{ pl: 2, pr: 2 }}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={i18n.language}
          name="radio-buttons-group"
          onChange={(e) => handleLanguageChange(e.target.value)}
        >
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h6">
                {t("translation:LanguageSelect:English")}
              </Typography>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="end" mb={3}>
              <FormControlLabel
                value="en"
                control={<Radio />}
                labelPlacement="start"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">
                {t("translation:LanguageSelect:Sinhala")}
              </Typography>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="end" mb={3}>
              <FormControlLabel
                value="si"
                control={<Radio />}
                labelPlacement="start"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">
                {t("translation:LanguageSelect:Tamil")}
              </Typography>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="end" mb={3}>
              <FormControlLabel
                value="ta"
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

export default LanguageSelect;

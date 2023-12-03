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

const CertificatesDetails = () => {
  const { t } = useTranslation();
  const [certificates, setCertificates] = useState(true);

  const handleRegistrationChange = (event) => {
    setCertificates(event.target.value === "true");
  };

  return (
    <div>
      <Typography variant="h6" fontWeight={700} mt={2} mb={2}>
      {t("translation:CertificatesDetails:heading")}
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
              <Typography variant="h5">{t("translation:CertificatesDetails:yes")}</Typography>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="end" mb={2}>
              <FormControlLabel
                value="true"
                control={<Radio />}
                labelPlacement="start"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5">{t("translation:CertificatesDetails:no")}</Typography>
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
          {t("translation:CertificatesDetails:note")}
          </Typography>
          <TextField
            fullWidth
            InputProps={{ sx: { borderRadius: 3 } }}
            placeholder="GMP | HAPPC | SLS | HALAL"
            multiline
            rows={7}
            maxRows={7}
          ></TextField>
        </>
      )}
    </div>
  );
};

export default CertificatesDetails;

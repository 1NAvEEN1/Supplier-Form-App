import {
  Typography,
  FormControl,
  Divider,
  Box,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const BasicDetails = () => {
  const { t, i18n } = useTranslation();
  const [province, setProvince] = useState(10);

  const handleChange = (e) => {
    setProvince(e);
  };

  return (
    <div>
      <Typography variant="h4" fontWeight={700} mt={2} mb={2}>
        {t("translation:BasicDetails:heading")}
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Box
        sx={{
          boxShadow: "0px 5px 8px 5px rgba(0, 0, 0, 0.03)",
          borderRadius: 3,
          pt: 1,
          pr: 2,
          pb: 1,
        }}
      >
        <Typography variant="b1" fontWeight={600} color="primary" pl={2}>
          {t("translation:BasicDetails:province")}
        </Typography>
        <FormControl fullWidth>
          <Select
            id="demo-simple-select"
            value={province}
            sx={{
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
              borderRadius: 3,
              height: 30,
            }}
            onChange={(e) => handleChange(e.target.value)}
          >
            <MenuItem value={10}>Western</MenuItem>
            <MenuItem value={20}>Southern</MenuItem>
            <MenuItem value={30}>Central</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          boxShadow: "0px 5px 8px 5px rgba(0, 0, 0, 0.03)",
          borderRadius: 3,
          pt: 1,
          pr: 2,
          mt: 3,
          pb: 1,
        }}
      >
        <Typography variant="b1" fontWeight={600} color="primary" pl={2}>
          {t("translation:BasicDetails:district")}
        </Typography>
        <FormControl fullWidth>
          <Select
            id="demo-simple-select"
            value={province}
            sx={{
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
              borderRadius: 3,
              height: 30,
            }}
            onChange={(e) => handleChange(e.target.value)}
          >
            <MenuItem value={10}>Gampaha</MenuItem>
            <MenuItem value={20}>Southern</MenuItem>
            <MenuItem value={30}>Central</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          boxShadow: "0px 5px 8px 5px rgba(0, 0, 0, 0.03)",
          borderRadius: 3,
          mt: 3,
          pt: 1,
          pr: 2,
          pb: 1,
        }}
      >
        <Typography variant="b1" fontWeight={600} color="primary" pl={2}>
          {t("translation:BasicDetails:city")}
        </Typography>
        <FormControl fullWidth>
          <Select
            id="demo-simple-select"
            value={province}
            sx={{
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
              borderRadius: 3,
              height: 30,
            }}
            onChange={(e) => handleChange(e.target.value)}
          >
            <MenuItem value={10}>Wattala</MenuItem>
            <MenuItem value={20}>Southern</MenuItem>
            <MenuItem value={30}>Central</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <TextField
        fullWidth
        InputProps={{ sx: { borderRadius: 3, mt: 4 } }}
        placeholder={t("translation:BasicDetails:name")}
      />
      <TextField
        fullWidth
        InputProps={{ sx: { borderRadius: 3, mt: 4 } }}
        placeholder={t("translation:BasicDetails:number")}
      />
      <TextField
        fullWidth
        InputProps={{ sx: { borderRadius: 3, mt: 4 } }}
        placeholder={t("translation:BasicDetails:email")}
      />
    </div>
  );
};

export default BasicDetails;

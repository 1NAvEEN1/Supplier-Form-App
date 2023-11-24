import {
  Typography,
  FormControl,
  Divider,
  Box,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const BasicDetails = () => {
  const [province, setProvince] = useState(10);

  const handleChange = (e) => {
    setProvince(e);
  };

  return (
    <div>
      <Typography variant="h4" fontWeight={700} mt={2} mb={2}>
        BasicDetails
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
          Province
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
            <MenuItem value={10}>
              <b>Western</b>
            </MenuItem>
            <MenuItem value={20}>
              <b>Southern</b>
            </MenuItem>
            <MenuItem value={30}>
              <b>Central</b>
            </MenuItem>
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
          District
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
            <MenuItem value={10}>
              <b>Gampaha</b>
            </MenuItem>
            <MenuItem value={20}>
              <b>Southern</b>
            </MenuItem>
            <MenuItem value={30}>
              <b>Central</b>
            </MenuItem>
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
          City
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
            <MenuItem value={10}>
              <b>Wattala</b>
            </MenuItem>
            <MenuItem value={20}>
              <b>Southern</b>
            </MenuItem>
            <MenuItem value={30}>
              <b>Central</b>
            </MenuItem>
          </Select>
        </FormControl>
      </Box>

      <TextField
        fullWidth
        InputProps={{ sx: { borderRadius: 3, mt: 4 } }}
        placeholder="Your Name"
      />
      <TextField
        fullWidth
        InputProps={{ sx: { borderRadius: 3, mt: 4 } }}
        placeholder="Contact Number"
      />
      <TextField
        fullWidth
        InputProps={{ sx: { borderRadius: 3, mt: 4 } }}
        placeholder="Email (Optional)"
      />
    </div>
  );
};

export default BasicDetails;

import React, { useState } from "react";
import {
  Typography,
  Button,
  SwipeableDrawer,
  Divider,
  Box,
  FormControl,
  TextField,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";

const AddProducts = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  //------------------------------------------//

  const [province, setProvince] = useState(10);

  const handleChange = (e) => {
    setProvince(e); 
  };

  const drawerContent = (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#DCDCDC",

      }}
    >
      <Grid
        container
        sx={{
          minHeight: "90svh",
          p: 2,
          width: 500,
          borderRadius:4,
          bgcolor:"white",
          opacity:1
        }}
      >
        <Grid item xs={12}>
          <Typography textAlign="center" fontWeight={600}>
            Add new product
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            role="presentation"
            // onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
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
                Product category
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
                    <b>Spices</b>
                  </MenuItem>
                  <MenuItem value={20}>
                    <b>Oils</b>
                  </MenuItem>
                  <MenuItem value={30}>
                    <b>condiments</b>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{
              height: 50,
              borderRadius: 3,
              color: "white",
              mt: 2,
            }}
            onClick={toggleDrawer(false)}
          >
            <Typography textTransform="capitalize" variant="h6">
              Save Product
            </Typography>
          </Button>
          <Button
            size="large"
            fullWidth
            sx={{
              height: 50,
              borderRadius: 3,
              color: "grey",
            }}
            onClick={toggleDrawer(false)}
          >
            <Typography textTransform="capitalize" variant="h6">
              Discard
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <div>
      <Typography variant="h4" fontWeight={700} mt={2} mb={2}>
        Product Details
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Typography textAlign="center">
        Click the button below to add your product
      </Typography>
      <Box display="flex" justifyContent="center" mt={2}>
        <Button
          variant="contained"
          size="medium"
          sx={{
            borderRadius: 2,
            color: "white",
          }}
          onClick={toggleDrawer(true)}
        >
          <Typography textTransform="capitalize" variant="b1">
            Add Product
          </Typography>
        </Button>
        <SwipeableDrawer
          anchor="bottom"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
          sx={{opacity:0.}}
        >
          {drawerContent}
        </SwipeableDrawer>
      </Box>
    </div>
  );
};

export default AddProducts;

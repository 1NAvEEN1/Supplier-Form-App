import React, { useState } from "react";
import {
  Typography,
  Button,
  SwipeableDrawer,
  Divider,
  Box,
  useMediaQuery,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
} from "@mui/material";
import AddProducts from "./AddProducts";
import { useTranslation } from "react-i18next";
import store from "../app/store";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const ProductDetails = () => {
  const { t } = useTranslation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");
  const isDesktop = useMediaQuery("(min-width:769px)");
  const products = store.getState().form.formData.productDetails;

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

  const drawerContent = (
    <>
      <AddProducts closeDrawer={() => setIsDrawerOpen(false)} />
    </>
  );

  return (
    <div>
      <Typography variant="h4" fontWeight={700} mt={2} mb={2}>
        {t("translation:ProductDetails:heading")}
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Box display="flex" flexDirection="column">
        {products.map((product, index) => (
          <Box
            key={index}
            sx={{
              boxShadow: "1px 5px 8px 5px rgba(0, 0, 0, 0.05)",
              borderRadius: 3,
              mt: 2,
              p: 3,
              bgcolor: "#FFFFFF",
              // Add other styles as needed
            }}
          >
            <Grid container>
              <Grid item xs={7}>
                <Typography fontWeight={600}>{product.name}</Typography>
                <Typography>{product.name}</Typography>
              </Grid>
              <Grid item xs={5} display={"flex"} justifyContent={"end"}>
                <IconButton>
                  <BorderColorIcon />
                </IconButton>
              </Grid>
              <Grid item xs={12}>
                <Typography fontWeight={600} mt={4}>
                  Product Details
                </Typography>
                <Typography>
                  Grade A 1kg Rs.2,500 Grade B 1kg Rs.2,000 can supply 100kg per
                  week. packaging can be done any size. we do not deliver.{" "}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
      {!products.length > 0 && (
        <>
          <Typography textAlign="center">
            {t("translation:ProductDetails:clickText")}
          </Typography>
        </>
      )}

      <Box display="flex" justifyContent="center" mt={2}>
        <Button
          variant="contained"
          size="medium"
          sx={{
            borderRadius: 2,
            color: "white",
            ml: isMobile ? 2 : 0,
          }}
          onClick={toggleDrawer(true)}
        >
          <Typography textTransform="capitalize" variant="b1">
            Add Product
          </Typography>
        </Button>

        {isMobile && (
          <SwipeableDrawer
            anchor="bottom"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
          >
            {drawerContent}
          </SwipeableDrawer>
        )}
        {isDesktop && (
          <Dialog
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            aria-labelledby="add-product-modal"
            fullWidth
            maxWidth="md"
          >
            <DialogContent>
              <Box
                sx={{
                  bgcolor: "#F9FAFB",
                  borderRadius: 4,
                  p: 4,
                }}
              >
                {drawerContent}
              </Box>
            </DialogContent>
          </Dialog>
        )}
      </Box>
    </div>
  );
};

export default ProductDetails;

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
} from "@mui/material";
import AddProducts from "./AddProducts";
import { useTranslation } from "react-i18next";

const ProductDetails = () => {
  const { t } = useTranslation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");
  const isDesktop = useMediaQuery("(min-width:769px)");

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
      <Typography textAlign="center">
        {t("translation:ProductDetails:clickText")}
      </Typography>
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

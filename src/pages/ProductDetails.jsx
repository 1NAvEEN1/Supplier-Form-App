import React, { useState, useEffect, useRef } from "react";
import {
  Typography,
  Button,
  Drawer,
  Divider,
  Box,
  useMediaQuery,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  DialogTitle,
} from "@mui/material";
import AddProducts from "./AddProducts";
import { useTranslation } from "react-i18next";
import store from "../app/store";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useDispatch } from "react-redux";
import {
  setProductDetails,
  setSelectedProductIndex,
} from "../reducers/formSlice";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const ProductDetails = () => {
  const dialogContentRef = useRef(null);
  const drawerContentRef = useRef(null);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");
  const isDesktop = useMediaQuery("(min-width:769px)");
  const products = store.getState().form.formData.productDetails;
  const productsCategories = store.getState().form.productCategoryNames;
  const [deleteIndex, setDeleteIndex] = useState(0);

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

  const handleEditClick = (index) => {
    dispatch(setSelectedProductIndex(index));
    setIsDrawerOpen(true);
  };

  const handleDeleteClick = () => {
    const updatedProductDetails = [...products];
    updatedProductDetails.splice(deleteIndex, 1);

    dispatch(setProductDetails(updatedProductDetails));

    handleCloseDelete();
  };

  useEffect(() => {
    if (isDrawerOpen && dialogContentRef.current) {
      dialogContentRef.current.scrollTop =
        dialogContentRef.current.scrollHeight;
    }
    if (isDrawerOpen && drawerContentRef.current) {
      drawerContentRef.current.scrollTop =
        drawerContentRef.current.scrollHeight;
    }
  }, [isDrawerOpen]);

  const handleClickOpenDelete = (index) => {
    setDeleteIndex(index);
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

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
            }}
          >
            <Grid container>
              <Grid item xs={9}>
                {/* <Typography fontWeight={600} variant="h6">
                  {product?.name}
                </Typography> */}
                {product.productOrRaw ? (
                  <>
                    <Typography fontWeight={600} variant="h6">
                      {i18n.language == "en"
                        ? productsCategories[index].category?.nameEnglish
                        : i18n.language == "si"
                        ? productsCategories[index].category?.nameSinhala
                        : productsCategories[index].category?.nameTamil}
                      {productsCategories[index].subCategory?.nameEnglish &&
                        " - " +
                          (i18n.language == "en"
                            ? productsCategories[index].subCategory?.nameEnglish
                            : i18n.language == "si"
                            ? productsCategories[index].subCategory?.nameSinhala
                            : productsCategories[index].subCategory?.nameTamil)}
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography fontWeight={600} variant="h6">
                      {i18n.language == "en"
                        ? productsCategories[index].category?.nameEnglish
                        : i18n.language == "si"
                        ? productsCategories[index].category?.nameSinhala
                        : productsCategories[index].category?.nameTamil}
                      {" - "}
                      {t("translation:AddProduct:rawMaterial")}
                    </Typography>
                  </>
                )}
              </Grid>
              <Grid
                item
                xs={3}
                display={"flex"}
                justifyContent={"end"}
                alignItems={"center"}
                gap={3}
              >
                <IconButton
                  size="small"
                  onClick={() => handleClickOpenDelete(index)}
                >
                  <DeleteForeverIcon fontSize="medium" />
                </IconButton>
                <IconButton size="small" onClick={() => handleEditClick(index)}>
                  <BorderColorIcon fontSize="small" />
                </IconButton>
              </Grid>
              <Grid item xs={12}>
                <Typography mt={product?.description ? 2 : 0}>
                  {product?.description}
                  {/* {product.supplyQuantity +
                    (product.unitType == 0
                      ? "Kg"
                      : product.unitType == 1
                      ? "g"
                      : product.unitType == 2
                      ? "mg"
                      : product.unitType == 3
                      ? "l"
                      : product.unitType == 4
                      ? "ml"
                      : product.unitType == 5
                      ? " packets"
                      : " Unit") +
                    " at Rs." +
                    product.price +
                    " can supply " +
                    product.monthlySupplyQuantity +
                    " units monthly."} */}
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
            {!products.length > 0 ? "Add Product" : "Add Another Product"}
          </Typography>
        </Button>

        {isMobile && (
          <Drawer
            anchor="bottom"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
            slotProps={{
              backdrop: {
                sx: {
                  background: "rgba(0,0,0,0.4)",
                },
              },
            }}
          >
            <div
              ref={drawerContentRef}
              style={{ overflowY: "auto", height: "100%" }}
            >
              {drawerContent}
            </div>
          </Drawer>
        )}
        {isDesktop && (
          <Dialog
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            aria-labelledby="add-product-modal"
            fullWidth
            maxWidth="md"
            slotProps={{
              backdrop: {
                sx: {
                  background: "rgba(0,0,0,0.5)",
                },
              },
            }}
          >
            <DialogContent ref={dialogContentRef}>
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
      <Dialog
        open={openDelete}
        onClose={() => handleCloseDelete(false)}
        aria-labelledby="add-product-modal"
        maxWidth="xs"
        slotProps={{
          backdrop: {
            sx: {
              background: "rgba(0,0,0,0.7)",
            },
          },
        }}
      >
        <DialogTitle>Are you sure to delete? </DialogTitle>
        <DialogContent ref={dialogContentRef}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            pt={2}
            pl={2}
            pr={2}
          >
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={() => handleCloseDelete(false)}
            >
              No
            </Button>
            <Button
              size="small"
              // color="error"
              variant="contained"
              onClick={() => handleDeleteClick()}
            >
              Yes
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductDetails;

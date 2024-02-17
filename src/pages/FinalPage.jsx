import { Typography, Box } from "@mui/material";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { resetFormData } from "../reducers/formSlice";

const FinalPage = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const handleResetForm = () => {
    dispatch(resetFormData());
  };

  useEffect(() => {
    handleResetForm();
  }, []);

  return (
    <div style={{ whiteSpace: "pre-line" }}>
      <Box
        display={"flex"}
        alignItems={"center"}
        sx={{
          height: {
            xs: "100svh",
            lg: 800,
          },
        }}
      >
        <Box>
          <Typography
            variant="h4"
            textAlign="center"
            fontFamily={i18n.language === "si" ? "Noto Sans Sinhala" : "Nunito"}
            fontSize="18px"
          >
            {t("translation:FinalPage:heading1")}
          </Typography>
          <Typography
            variant="h4"
            textAlign="center"
            fontFamily={i18n.language === "si" ? "Noto Sans Sinhala" : "Nunito"}
            fontSize="18px"
          >
            {t("translation:FinalPage:heading2")}
          </Typography>

          <Typography
            textAlign="center"
            fontFamily={i18n.language === "si" ? "Noto Sans Sinhala" : "Nunito"}
            mt={6}
            sx={{
              fontSize: {
                lg: "14px",
                sm: "14px",
                xs: "11px",
              },
            }}
          >
            {t("translation:FinalPage:text")}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default FinalPage;

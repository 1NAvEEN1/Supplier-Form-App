import { Typography, Box } from "@mui/material";
import React from "react";

const FinalPage = () => {
  return (
    <div>
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
        <Box p={5}>
          <Typography variant="h4" textAlign="center">
            Thank you for submitting
          </Typography>
          <Typography variant="h4" textAlign="center">
            your application!
          </Typography>

          <Typography
            textAlign="center"
            mt={6}
            sx={{
              fontSize: {
                lg: "14px",
                sm: "14px",
                xs: "11px",
              },
            }}
          >
            Our Ceylon Exports Hub Supply Management Team
            <br />
            will contact you after reviewing your details.
            <br />
            <br />
            For further assistance, feel free to reach out to us via
            <br />
            email at info.cehub@gmail.lk or contact us on WhatsApp at
            <br />
            0702300325.
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default FinalPage;

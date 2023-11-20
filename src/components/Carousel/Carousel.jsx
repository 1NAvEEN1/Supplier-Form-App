import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Container, Typography } from "@mui/material"; // Import Box and Typography from Material-UI

const CarouselComponent = () => {
  var items = [
    {
      name: "Welcome to Ceylon Exports Hub",
      description:
        "We're delighted to invite you to become a new supplier contributing to the growth of Sri Lanka's rural economy by showcasing its quality products on the global stage.",
    },
    {
      name: "Welcome to Ceylon Exports Hub",
      description:
        "Y%S ,xldfõ .=Kd;aul ksIamdok f.da,Sh fjf<ofmd<g iïnkaO lrñka Y%S ,xld .%dóh wd¾:slh j¾Okh lsÍu wruqKq lr.;a wm jHdmdrhg kjl iemhqïlrefjl= f,i Tng iïnkaO úh yels nj i;=áka oekqïfouq¡",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Box key={i}>
          <Typography variant="h5">{item.name}</Typography>
          <Typography mt={2} variant="h4">
            {item.description}
          </Typography>{" "}
        </Box>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;

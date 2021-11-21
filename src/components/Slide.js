import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Container, Grid } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function Slide({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };
  return (
    <div>
      <Container style={{ padding: "0px" }}>
        <Grid item xs={12} sm={12} md={12}>
          <Slider {...settings}>
            {images
              ? images.map((val, key) => {
                  return (
                    <div key={key}>
                      <Image
                        src={val}
                        style={{
                          width: "100%",
                          maxHeight: "500px",
                        }}
                      />
                    </div>
                  );
                })
              : ""}
          </Slider>
        </Grid>
      </Container>
    </div>
  );
}

export default Slide;

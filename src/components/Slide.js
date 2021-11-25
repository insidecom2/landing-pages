import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Container, Grid } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function Slide({ images }) {
  const settings = {
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
                    <div
                      key={key}
                      style={{
                        position: "relative",
                        width: "100vw",
                        height: "30vw",
                      }}
                    >
                      <Image
                        src={val}
                        width={1000}
                        height={800}
                        layout="responsive"
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

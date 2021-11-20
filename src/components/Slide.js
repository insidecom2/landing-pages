import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Container, Grid } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slide({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Container>
        <Grid item xs={12} sm={10} md={8}>
          <Slider {...settings}>
            {images
              ? images.map((val, key) => {
                  return (
                    <div key={key}>
                      <img src={val} />
                    </div>
                  );
                })
              : ""}
            {/* <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div> */}
          </Slider>
        </Grid>
      </Container>
    </div>
  );
}

export default Slide;

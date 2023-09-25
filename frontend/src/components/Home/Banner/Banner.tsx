import React, { useState } from "react";
import "./Banner.css";
import Carousel from "react-bootstrap/Carousel";
import banner from "../../../images/banner/banner.png";
import banner1 from "../../../images/banner/banner1.png";
import banner2 from "../../../images/banner/banner2.png";
import banner3 from "../../../images/banner/banner3.png";
import banner4 from "../../../images/banner/banner4.png";
import { Image } from "react-bootstrap";

interface PropTypes {}

const Banner: React.FC<PropTypes> = () => {
  return (
    <div className="banner">
      <Carousel slide={false} className="carosel">
        <Carousel.Item className="carosel-item">
          <Image
            className="d-block"
            src={banner1}
            alt="First slide"
            fluid
          />
          <Carousel.Caption>
            <h3 className="animate__backOutUp">First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carosel-item">
          <Image className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carosel-item">
          <Image
            className="d-block"
            src={banner3}
            alt="Third slide"
            fluid
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carosel-item">
          <Image
            className="d-block"
            src={banner4}
            alt="Third slide"
            fluid
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="poster-img">
        <Image src={banner} alt="banner" fluid />
      </div>
    </div>
  );
};

export default Banner;

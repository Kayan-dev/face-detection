import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./Carousel.css";

export default function ImageCarousel(props) {
  return (
    <Carousel>
      {props.image.map((image) => {
        return (
          <Carousel.Item key={image.id}>
            <img
              className="carousel"
              src={image.ImageUrl}
              alt={image.ImageUrl}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

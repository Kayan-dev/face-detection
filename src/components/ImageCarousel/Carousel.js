import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

export default function ImageCarousel(props) {
  return (
    <Carousel>
      {props.image.map((image) => {
        return (
          <Carousel.Item key={image.id}>
            <img
              className="d-block w-100"
              src={image.ImageUrl}
              alt={image.ImageUrl}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

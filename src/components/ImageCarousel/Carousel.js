import React from "react";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch } from "react-redux";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { deleteStory } from "../../store/image/actions";
import "./Carousel.css";

export default function ImageCarousel(props) {
  const dispatch = useDispatch();
  const onDelete = (id) => {
    console.log("deleting image!", id);
    dispatch(deleteStory(id));
  };
  return (
    <Carousel classname="">
      {props.image.map((image) => {
        return (
          <Carousel.Item key={image.id}>
            <img
              className="carousel w-60"
              src={image.ImageUrl}
              alt={image.ImageUrl}
            ></img>
            <Carousel.Caption className="p-5">
              <Button variant="danger" onClick={() => onDelete(image.id)}>
                Delete Image
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

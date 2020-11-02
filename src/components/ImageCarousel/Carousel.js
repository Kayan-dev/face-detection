import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";

export default function StoryCarousel(props) {
  const dispatch = useDispatch();

  //   const onDelete = (id) => {
  //     console.log("deleting story!", id);
  //     dispatch(deleteStory(id));
  //   };

  return (
    <Carousel className="mt-5">
      {props.image.map((image) => {
        return (
          <Carousel.Item key={image.id}>
            {image.imageUrl ? (
              <img
                className="d-block w-100"
                src={image.imageUrl}
                alt={"added face from user"}
              />
            ) : null}
            <Carousel.Caption className="p-5"></Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

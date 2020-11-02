import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import { selectAllImages } from "../../store/image/selectors";
import { Container } from "react-bootstrap";
import ImageCarousel from "../../components/ImageCarousel/Carousel";
import { getAllImages } from "../../store/image/actions";

export default function Ranks() {
  const image = useSelector(selectAllImages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllImages);
    console.log("dispatched");
  }, []);

  //Buffer render time
  if (!image) return <div>{Loading}</div>;
  console.log("image:", image);

  return (
    <div>
      <Container>
        <ImageCarousel image={image} />
      </Container>
    </div>
  );
}

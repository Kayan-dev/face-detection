import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import { selectAllImages } from "../../store/image/selectors";
import { Container } from "react-bootstrap";
import ImageCarousel from "../../components/ImageCarousel/Carousel";
import { getAllImages } from "../../store/image/actions";
import { selectUser } from "../../store/user/selectors";

export default function Ranks() {
  const image = useSelector(selectAllImages);
  const get_User = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllImages);
    console.log("dispatched");
  }, [dispatch]);

  //Buffer render time
  if (!image) return <div>{Loading}</div>;
  console.log("image:", image);

  //Filter specific images for each user using ID
  const filtered_Image = [...image].filter(function (user) {
    return get_User.id === user.id;
  });
  const entry = filtered_Image.length;

  return (
    <div>
      <h3>{`${get_User.name}, so far you have entried ${entry} images in the database`}</h3>
      <br></br>
      <div>
        <Container>
          <ImageCarousel image={filtered_Image} />
        </Container>
      </div>
    </div>
  );
}

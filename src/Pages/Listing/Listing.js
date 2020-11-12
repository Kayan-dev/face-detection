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
  }, [dispatch]);

  //Buffer render time
  if (!image) return <div>{Loading}</div>;
  //Filter specific images for each user using ID
  const filtered_Image = [...image].filter(function (user) {
    return get_User.id === user.userId;
  });

  //Filter out imageUrls in database that are empty strings
  const nonEmpty_Images = [...filtered_Image].filter(function (url) {
    return url.ImageUrl !== "";
  });
  //Total length of posted images per user
  const entry = nonEmpty_Images.length;

  return (
    <div>
      <h3>{`${get_User.name}, you have entered ${entry} image(s) in the database so far`}</h3>
      <br></br>
      <div>
        <Container>
          <ImageCarousel image={nonEmpty_Images} />
        </Container>
      </div>
    </div>
  );
}

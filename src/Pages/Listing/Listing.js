import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import { selectAllImages } from "../../store/image/selectors";
import { Container } from "react-bootstrap";
import StoryCarousel from "../../components/ImageCarousel/Carousel";
import { getAllImages } from "../../store/image/actions";

export default function Ranks() {
  const image = useSelector(selectAllImages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllImages);
    console.log("dispatched");
  }, []);

  // const all_images = useSelector(selectAllUsers);

  //Buffer render time
  if (!image) return <div>{Loading}</div>;
  console.log("image:", image);

  return (
    // <div>
    //   {ranks.map((user, index) => {
    //     return (
    //       <div key={user.id}>
    //         <h4>{user.name}</h4>
    //         <br></br>

    //         <Link to={`rank/${user.userId}`}>
    //           <button type="submit">Visit profile</button>
    //         </Link>
    //       </div>
    //     );
    //   })}
    // </div>
    <div>
      <h1>Test</h1>

      <Container>
        <h1>TESTING</h1>
        {/* <StoryCarousel image={image} /> */}
      </Container>
    </div>
  );
}

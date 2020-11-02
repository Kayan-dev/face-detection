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

  // const all_images = useSelector(selectAllUsers);

  //Buffer render time
  if (!image) return <div>{Loading}</div>;
  console.log("image:", image);

  return (
    // <div>
    //   {image.map((img, index) => {
    //     return (
    //       <div key={img.id}>
    //         <h4>{img.name}</h4>
    //         <br></br>

    //         {/* <Link to={`rank/${user.userId}`}>
    //           <button type="submit">Visit profile</button>
    //         </Link> */}
    //       </div>
    //     );
    //   })}
    //   </div>

    <div>
      <Container>
        <ImageCarousel image={image} />
      </Container>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Logo from "../../components/Logo/Logo";
import ImageLinkForm from "../../components/Form/ImageLinkForm";
import FaceRecognition from "../../components/Recognition/FaceRecognition";
import Rank from "../../components/Rank/Rank";
import Clarifai from "clarifai";
import { useDispatch, useSelector } from "react-redux";
import LogIn from "../LogIn/LogIn";
import SignIn from "../SignIn/SignIn";
import { selectUser } from "../../store/user/selectors";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { selectAllUsers } from "../../store/image/selectors";
import { allUsers } from "../../store/image/actions";

export default function Ranks() {
  const dispatch = useDispatch();
  //console.log("Hello");
  useEffect(() => {
    // console.log("useeffect");
    dispatch(allUsers);
  }, []);

  const ranks = useSelector(selectAllUsers);
  console.log("rank:", ranks);

  //Buffer render time
  if (!ranks) return <div>{Loading}</div>;

  return (
    <div>
      {ranks.map((user, index) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <br></br>

            <Link to={`rank/${user.userId}`}>
              <button type="submit">Visit profile</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import Tilt from "react-tilt";
import "../Logo/Logo.css";
import brain from "./brain.png";

export default function Logo() {
  return (
    <Link to="/">
      <div className="ma4 mt0">
        <Tilt
          className="Tilt br2 shadow-2"
          options={{ max: 55 }}
          style={{ height: 150, width: 150 }}
        >
          <div className="Tilt-inner pa3">
            {" "}
            <img style={{ paddingTop: "10px" }} alt="logo" src={brain} />{" "}
          </div>
        </Tilt>
      </div>
    </Link>
  );
}

import React from "react";

const Card = ({ id, title, text, logo, link }) => {
  return (
    <div className="bg-black-40  mw6 dib br3 pa3 ma2 grow bw2 shadow-5">
      <div>
        <h2>{title}</h2>
        <img alt="logo" src={logo} />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;

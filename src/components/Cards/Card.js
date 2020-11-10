import React from "react";

const Card = ({ id, title, text, logo, link }) => {
  return (
    <a href={link}>
      <div className="bg-black-40  mw6 dib br3 pa3 ma2 grow bw2 shadow-5">
        <div>
          <h2>{title}</h2>
          <img alt="logo" class="w-25" src={logo} />
          <p>{text}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;

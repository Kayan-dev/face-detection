import React from "react";

const Stack = ({ id, title, text, link }) => {
  return (
    <a href={link}>
      <div className="bg-navy  mw6 dib br3 pa3 ma2 grow bw2 shadow-5">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </a>
  );
};

export default Stack;

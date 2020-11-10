import React from "react";

const Stack = ({ id, title, text, link }) => {
  return (
    <div className="bg-navy  mw6 dib br3 pa3 ma2 grow bw2 shadow-5">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Stack;

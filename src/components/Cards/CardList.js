import React from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import Card from "./Card";

const CardList = ({ info }) => {
  console.log("CardInfo:", info);
  const cardArray = info.map((card, i) => {
    return (
      <Card
        key={i}
        id={info[i].id}
        title={info[i].title}
        logo={info[i].logo}
        text={info[i].text}
      />
    );
  });
  return <div>{cardArray}</div>;
};
export default CardList;

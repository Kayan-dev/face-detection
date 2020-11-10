import React from "react";
import Card from "./Card";

const CardList = ({ info }) => {
  const cardArray = info.map((card, i) => {
    return (
      <Card
        key={i}
        id={info[i].id}
        title={info[i].title}
        logo={info[i].logo}
        text={info[i].text}
        link={info[i].link}
      />
    );
  });
  return <div>{cardArray}</div>;
};
export default CardList;

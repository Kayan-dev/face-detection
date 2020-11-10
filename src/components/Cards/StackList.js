import React from "react";
import { Link } from "react-router-dom";
import Stack from "./Stack";

const StackList = ({ stack }) => {
  const StackArray = stack.map((card, i) => {
    return (
      <Stack
        key={i}
        id={stack[i].id}
        title={stack[i].title}
        text={stack[i].text}
      />
    );
  });
  return <div>{StackArray}</div>;
};
export default StackList;

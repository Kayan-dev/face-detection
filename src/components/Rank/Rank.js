import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";

export default function Rank() {
  const user = useSelector(selectUser);

  return (
    <div>
      <div className="white f3">{`${user.name}, your current rank is...`}</div>
      <div className="white f1">{"#5"}</div>
    </div>
  );
}

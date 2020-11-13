import React from "react";
import CardList from "../../components/Cards/CardList";
import StackList from "../../components/Cards/StackList";
import Loading from "../../components/Loading";
import { info, stack } from "./info";

import history from "../../history";

export default function About(props) {
  history.push("/about");

  return !info.length || !stack.length ? (
    <Loading />
  ) : (
    <div>
      <CardList info={info}></CardList>
      <StackList stack={stack}></StackList>
    </div>
  );
}

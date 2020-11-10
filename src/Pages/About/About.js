import React from "react";
import CardList from "../../components/Cards/CardList";
import StackList from "../../components/Cards/StackList";
import Loading from "../../components/Loading";
import { info, stack } from "./info";

export default function About() {
  return !info.length || !stack.length ? (
    <Loading />
  ) : (
    <div>
      <CardList info={info}></CardList>
      <StackList stack={stack}></StackList>
    </div>
  );
}

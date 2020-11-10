import React from "react";
import Card from "../../components/Cards/Card";
import CardList from "../../components/Cards/CardList";
import Loading from "../../components/Loading";
import { info } from "./info";

export default function About() {
  return !info.length ? <Loading /> : <CardList info={info}></CardList>;
}

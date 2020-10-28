import React from "react";
import NavbarItem from "./NavbarItem";

export default function LoggedOut() {
  return (
    <>
      <NavbarItem path="/login" linkText="Login" />
      <NavbarItem path="/about" linkText="About" />
    </>
  );
}

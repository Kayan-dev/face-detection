import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import NavbarItem from "./NavbarItem";
import { Link } from "react-router-dom";

export default function LoggedIn() {
  const dispatch = useDispatch();
  return (
    <>
      <NavbarItem path="/" linkText="Detector" />
      <NavbarItem path="/list" linkText="My Images" />
      <NavbarItem path="/about" linkText="About" />
      {/* <NavbarItem path="/profile" linkText="Profile" /> */}
      <Link to="/">
        <Button variant="outline-primary" onClick={() => dispatch(logOut())}>
          Logout
        </Button>
      </Link>
    </>
  );
}

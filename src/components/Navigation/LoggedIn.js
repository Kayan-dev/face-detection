import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import NavbarItem from "./NavbarItem";
export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      {/* <Nav.Item style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <Link to="/">Detector</Link>
        <Link to="/list">Images</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </Nav.Item> */}
      <NavbarItem path="/" linkText="Detector" />
      <NavbarItem path="/list" linkText="Images" />
      <NavbarItem path="/about" linkText="About" />
      <NavbarItem path="/profile" linkText="Profile" />
      <Button variant="outline-primary" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </>
  );
}

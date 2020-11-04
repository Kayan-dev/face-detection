import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import NavbarItem from "./NavbarItem";

export default function LoggedIn() {
  const dispatch = useDispatch();
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

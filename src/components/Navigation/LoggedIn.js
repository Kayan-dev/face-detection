import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <Nav.Item style={{ display: "flex", justifyContent: "flex-end" }}>
        {" "}
        <Link to="/">Detector</Link>
        <Link to="/rank">Ranks</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Button onClick={() => dispatch(logOut())}>Logout</Button>
      </Nav.Item>
    </>
  );
}

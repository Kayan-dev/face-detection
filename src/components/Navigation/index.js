import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";

import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import NavbarItem from "./NavbarItem";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar bg="light" expand="lg">
      {/* <Navbar.Brand as={NavLink} to="/"></Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Face Detector" />
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

// import React from "react";
// import { useSelector } from "react-redux";
// import LogIn from "../../Pages/LogIn/LogIn";
// import SignIn from "../../Pages/SignIn/SignIn";
// // import { NavLink } from "react-router-dom";

// export default function Navigation({ onRouteChange, isSignedIn }) {
//   const token = useSelector(selectToken);

//   const loginLogoutControls = token ? <LogIn /> : <SignIn />;

//   return (
//     <div>
//       {isSignedIn ? (
//         <nav style={{ display: "flex", justifyContent: "flex-end" }}>
//           <p
//             onClick={() => onRouteChange("signout")}
//             className="f3 link dim black underline pa3 pointer"
//           >
//             Sign Out
//           </p>
//         </nav>
//       ) : (
//         <div>
//           <nav style={{ display: "flex", justifyContent: "flex-end" }}>
//             <p
//               onClick={() => onRouteChange("signin")}
//               className="f3 link dim black underline pa3 pointer"
//             >
//               Sign In
//             </p>
//             <p
//               onClick={() => onRouteChange("register")}
//               className="f3 link dim black underline pa3 pointer"
//             >
//               Register
//             </p>
//           </nav>
//         </div>
//       )}
//     </div>
//   );
// }

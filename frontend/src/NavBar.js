import React, { useContext } from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand } from "reactstrap";
import UserContext from "./UserContext";

function NavBar({ logout }) {
  const currUser = {name: 'test'};
  // const { currUser } = useContext(UserContext);

  function loggedIn() {
    return (
      <div className="signedOut">
        <NavLink className="nav-link" to="/companies">
          Companies
        </NavLink>

        <NavLink className="nav-link" to="/jobs">
          Jobs
        </NavLink>

        <NavLink className="nav-link" to="/profile">
          Profile
        </NavLink>

        {/* <li className="nav-item">
          <Link className="nav-link" to="/" onClick={logout}>
            Log out {currUser.first_name || currUser.username}
          </Link>
        </li> */}
      </div>
    );
  }

  function loggedOut() {
    return (
      <div className="signedOut">
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>

        <NavLink className="nav-link" to="/signup">
          Sign Up
        </NavLink>
      </div>
    );
  }

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid grey",
        paddingLeft: "1em",
        paddingTop: ".5em",
        paddingBottom: ".5em"
      }}
    >
      <Link
        style={{
          fontWeight: "bold",
          textDecoration: "none",
          color: "black",

          fontSize: 20,
        }}
        to="/"
      >
        Jobly
      </Link>
      {currUser ? loggedIn() : loggedOut()}
    </nav>
  );
}

export default NavBar;

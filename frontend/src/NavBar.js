import React, {useContext} from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand } from "reactstrap";
import UserContext from "./UserContext";

function NavBar({ logout }) {
  const currUser = { username: "testuser" };
  // const { currUser } = useContext(UserContext);

  function loggedIn() {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/companies">
            Companies
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/jobs">
            Jobs
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/profile">
            Profile
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/" onClick={logout}>
            Log out {currUser.first_name || currUser.username}
          </Link>
        </li> */}
      </ul>
    );
  }

  function loggedOut() {
    return (
      <ul>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/logout">Sign Up</NavLink>
        </li>
      </ul>
    );
  }

  return (
    <nav className="Navigation navbar navbar-expand-md">
      <Link className="navbar-brand" to="/">
        Jobly
      </Link>
      {currUser ? loggedIn() : loggedOut()}
    </nav>
  );
}

export default NavBar;

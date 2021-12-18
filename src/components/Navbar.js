import React from "react";
import "./Navbar.css";

import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="Nav">
      <Link to="/">
        <h1 className="nav-left">GITBOOK</h1>
      </Link>
      <div className="nav-center">
        <NavLink
          to="/"
          exact
          style={(isActive) => ({
            filter: isActive ? "brightness(2)" : ""
          })}
        >
          <i className="fas fa-home nav-item item-one " title="Home" />
        </NavLink>
        <NavLink
          to="/compare-profile"
          exact
          style={(isActive) => ({
            filter: isActive ? "brightness(2)" : ""
          })}
        >
          <i
            className="fas fa-less-than nav-item item-two"
            title="Compare Profile"
          />
        </NavLink>
        <NavLink
          to="/profile"
          exact
          style={(isActive) => ({
            filter: isActive ? "brightness(2)" : ""
          })}
        >
          <i className="fas fa-user nav-item item-three" title="Your Profile" />
        </NavLink>
        <NavLink
          to="/developer"
          exact
          style={(isActive) => ({
            filter: isActive ? "brightness(2)" : ""
          })}
        >
          <i className="fas fa-code nav-item item-four" title="Developer" />
        </NavLink>
      </div>
      <div className="nav-right">
        <NavLink
          to="/sign-up"
          exact
          style={(isActive) => ({
            filter: isActive ? "brightness(2)" : ""
          })}
        >
          <i className="fas fa-user-plus nav-item" title="profile" />
        </NavLink>
        <NavLink
          to="/contact-us"
          exact
          style={(isActive) => ({
            filter: isActive ? "brightness(2)" : ""
          })}
        >
          <i className="fas fa-headphones-alt nav-item" />
        </NavLink>
        <i className="fas fa-random nav-item" titlw="Contact Us" />
      </div>
    </div>
  );
}

export default Navbar;

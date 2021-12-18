import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Nav">
      <Link to="/">
        <h1 className="nav-left">GITBOOK</h1>
      </Link>
      <div className="nav-center">
        <Link to="/">
          <i className="fas fa-home nav-item item-one " title="Home" />
        </Link>
        <Link to="/compare-profile">
          <i
            className="fas fa-less-than nav-item item-two"
            title="Compare Profile"
          />
        </Link>
        <Link to="/profile">
          <i className="fas fa-user nav-item item-three" title="Your Profile" />
        </Link>
        <Link to="/developer">
          <i className="fas fa-code nav-item item-four" title="Developer" />
        </Link>
      </div>
      <div className="nav-right">
        <Link to="/sign-up">
          <i className="fas fa-user-plus nav-item" title="profile" />
        </Link>
        <Link to="/contact-us">
          <i className="fas fa-headphones-alt nav-item" />
        </Link>
        <i className="fas fa-random nav-item" />
      </div>
    </div>
  );
}

export default Navbar;

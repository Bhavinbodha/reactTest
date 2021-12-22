import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="outnav">
        <nav className="navbar navbar-expand-sm bg-light justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/dashboard/jokes" class="nav-link">
                Jokes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" class="nav-link">
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;

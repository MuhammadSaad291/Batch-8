import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link  active" data-nav-link>
            About
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/resume" className="navbar-link" data-nav-link>
            Resume
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/portfolio" className="navbar-link" data-nav-link>
            Portfolio
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/blog" className="navbar-link" data-nav-link>
            Blog
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/contact" className="navbar-link" data-nav-link>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

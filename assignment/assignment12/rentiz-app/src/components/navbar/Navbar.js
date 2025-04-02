import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div id="container">
        <div className="para1">
          <h2>Rentiz</h2>
        </div>
        <div className="para2">
          <ul>
            <li>
              <Link className="link" to="/">Home</Link>
            </li>
            <li>
              <Link className="link" to="/">About Us</Link>
            </li>
            <li>
              <Link className="link" to="/">Buying</Link>
            </li>
            <li>
              <Link className="link" to="/">Renting</Link>
            </li>
            <li>
              <Link className="link"  to="/">Selling</Link>
            </li>
            <li>
              <Link className="link"  to="/">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="para3">
          <ul>
            <li>
              <Link className="link"  to="/">Sign In</Link>
            </li>
            <li>
              <Link className="link signupbtn"  to="/">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

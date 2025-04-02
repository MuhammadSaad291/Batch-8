import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import "./footer.css";
export default function Footer() {
  return (
    <div className="lastfootersection">
      <div>
        <h1>Rentiz</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, quod?
        </p>
        <div className="footericon">
          <div>
            <FaFacebook />
          </div>
          <div>
            <IoLogoInstagram />
          </div>
          <div>
            <IoLogoTwitter />
          </div>
          <div>
            <IoLogoYoutube />
          </div>
        </div>
      </div>
      <div className="footer1">
        <ul>
          <h2>Porject</h2>
          <li>Houses</li>
          <li>Rooms</li>
          <li>Flats</li>
          <li>Appartments</li>
        </ul>
      </div>
      <div className="footer1">
        <ul>
          <h2>Company</h2>
          <li>How we works ?</li>
          <li>Capital</li>
          <li>Security</li>
        </ul>
      </div>
      <div className="footer1">
        <ul>
          <h2>Movement</h2>
          <li>How are we </li>
          <li>Support Us</li>
        </ul>
      </div>
      <div className="footer1">
        <ul>
          <h2>Help</h2>
          <li>Privacy</li>
          <li>Condition</li>
          <li>Blog</li>
          <li>FAQs</li>
        </ul>
      </div>
    </div>
  );
}

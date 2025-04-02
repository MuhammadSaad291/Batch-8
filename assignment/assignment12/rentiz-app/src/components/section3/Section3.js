import React from "react";
import "./section3.css";
import loupe from "../../assets/loupe.png";
import tag from "../../assets/tag.png";
import quick from "../../assets/quick.png";
import comma from "../../assets/comma.png";
import { IoIosArrowBack } from "react-icons/io";
export default function Section3() {
  return (
    <div className="secondcontainer">
      <div className="sectioncard1">
        <h2 className="head">Why To Choose Us</h2>
        <div className="sectionbox1">
          <div className="firstcard1">
            <div className="circle1">
              <img src={loupe} width=" 45px" alt="" />
            </div>
            <h2>Easy To Find</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Alias temporibus ipsa iusto minus, magnam at.
            </p>
          </div>
          <div className="firstcard1">
            <div className="circle1">
              <img src={tag} width=" 45px" alt="" />
            </div>
            <h2>Affordable Prices</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Alias temporibus ipsa iusto minus, magnam at.
            </p>
          </div>
          <div className="firstcard1">
            <div className="circle1">
              <img src={quick} width=" 45px" alt="" />
            </div>
            <h2>Quickly Process</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Alias temporibus ipsa iusto minus, magnam at.
            </p>
          </div>
        </div>
      </div>
      <div className="sectionbox2">
        <div className="comma">
          <img src={comma} alt="" />
          <p><b>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            repudiandae doloremque maxime temporibus odit, ab esse non vel
            facilis iure! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Assumenda, deserunt!
            </b></p>
          <h3>Elena Pravo</h3>
          <p>Ceo Upstate</p>
        </div>
      </div>
    </div>
  );
}

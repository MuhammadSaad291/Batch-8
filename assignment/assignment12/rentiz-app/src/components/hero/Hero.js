import React from "react";
import Homepicture from "../../assets/Homepicture.png";
import "./hero.css";
import { IoIosArrowDown } from "react-icons/io";
export default function Hero() {
  return (
    <div className="container">
      <div className="part1">
        <h1>Perfect Way to Buy And Sell A Home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem porro
          voluptas amet soluta doloribus necessitatibus?
        </p>
        <div className="search">
            <div className="box">
                <div className="box1">
                    <div>Purpose</div>
                    <div><IoIosArrowDown color="aqua"/> </div>
                </div>
                <div>
                    Buy
                </div>
            </div>
            <div className="box">
                <div className="box1">
                    <div>Location</div>
                    <div><IoIosArrowDown color="aqua"/> </div>
                </div>
                <div>
                    Toronto,Canada
                </div>
            </div>
            <div className="box">
                <div className="box1">
                    <div>Type</div>
                    <div><IoIosArrowDown color="aqua"/> </div>
                </div>
                <div>
                    Industrial Home
                </div>
                
            </div>
            <div className="searchbar">
                Search
            </div>
        </div>
      </div>
      <div class="part2"> 
        <img src={Homepicture} alt="" width="80%"/>
      </div>
    </div>
  );
}

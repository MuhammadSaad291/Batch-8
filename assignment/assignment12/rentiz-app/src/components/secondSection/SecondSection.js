import React from "react";
import "./secondSection.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import katiemusial from "../../assets/katiemusial.png";
import lanceanderson from "../../assets/lanceanderson.png";
import pexelsscott from "../../assets/pexelsscott.png";
export default function SecondSection() {
  return (
    <div>
      <div className="firstcontainer">
        <div className="sectionCard">
          <h2 className="head">Popular Residence</h2>
          <div className='sectionbox'>
            <div>
              <div className="circle">
                <IoIosArrowBack size={20} color="white" />
              </div>
            </div>
            <div className="firstCard">
              <img src={katiemusial} width="300px" alt="" />
              <h2>Aliva Priva Jalvin</h2>
              <p>1807 Pin Oak Drive,Clinton,USA</p>
            </div>
            <div className="firstCard">
              <img src={lanceanderson} width="300px" alt="" />
              <h2>Hard Line Orchar</h2>
              <p>1807 Pin Oak Drive,Clinton,USA</p>
            </div>
            <div className="firstCard">
              <img src={pexelsscott} width="300px" alt="" />
              <h2>Allpine Lenevote</h2>
              <p>1807 Pin Oak Drive,Clinton,USA</p>
            </div>
            
            <div>
              <div className="circle">
                <IoIosArrowForward size={20} color="white" />
              </div>
            </div>
          </div>
        </div>
        <div className="sectionbtn">
          <button>View All Properties</button>
        </div>
      </div>
    </div>
  );
}

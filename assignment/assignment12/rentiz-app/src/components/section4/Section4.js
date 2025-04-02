import React from "react";
import joelfilipe from "../../assets/joelfilipe.png";
import pexelsvecislavas from "../../assets/pexelsvecislavas.png";
import "./section4.css";
export default function Section4() {
  return (
    <div className="thirdcontainer">
      <div className="section3left">
        <div className="imagecard">
          <img src={joelfilipe} alt="" />
        </div>
        <div className="imagecard">
          <img src={pexelsvecislavas} alt="" />
        </div>
        <div className="section3right">
          <div className="section3rightheadingtext">
            <h1>We Help People To Find Home</h1>
          </div>
          <div className="section3rightpara">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              ut excepturi nulla nemo velit aspernatur voluptates tenetur quidem
              minus eius. Delectus nam dolor mollitia magnam qui dignissimos, a
              excepturi rem.
            </p>
          </div>
          <div className="section3rightbtn"><button>Get In Touch</button>
          </div>
        </div>
      </div>
    </div>
  );
}

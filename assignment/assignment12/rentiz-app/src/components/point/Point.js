import React from 'react'
import Logo4 from '../../assets/logo4.png';
import Logo3 from '../../assets/logo3.png';
import Vector from '../../assets/Vector.png';
import Logo2 from '../../assets/logo2.png';
import Logo1 from '../../assets/logo1.png';
import './point.css';
export default function Point() {
  return (
    <div>
     <div className="container1">
        <div className="point1">
            <h2>Featured In</h2> 
       </div>
         <div className="point2">
            <img src={Logo4} alt=""/>
            <img src={Logo3} alt=""/>
            <img src={Vector} alt=""/>
            <img src={Logo2} alt=""/>
            <img src={Logo1} alt=""/>
            </div>
     </div>
    </div>
  )
}

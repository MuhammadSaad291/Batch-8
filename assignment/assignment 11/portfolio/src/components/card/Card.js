import React from 'react'

export default function Card(props) {
  return (
    <>
     <li className="service-item">
        <div className="service-icon-box">
          <img
            src={props.image}
            alt="design icon"
            width="40"
          />
        </div>

        <div className="service-content-box">
          <h4 className="h4 service-item-title">{props.title}</h4>

          <p className="service-item-text">
            {props.desc}
          </p>
        </div>
      </li> 
    </>
  )
}

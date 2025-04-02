import React from "react";

export default function TestimonialCard(props) {
  return (
    <>
      <li class="testimonials-item">
        <div class="content-card" data-testimonials-item>
          <figure class="testimonials-avatar-box">
            <img
              src={props.image}
              alt="Daniel lewis"
              width="60"
              data-testimonials-avatar
            />
          </figure>

          <h4 class="h4 testimonials-item-title" data-testimonials-title>
            {props.title}
          </h4>

          <div class="testimonials-text" data-testimonials-text>
            <p>{props.desc}</p>
          </div>
        </div>
      </li>
    </>
  );
}

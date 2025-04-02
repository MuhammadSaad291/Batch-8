import React from "react";
import Card from "../card/Card";
import iconsvg from "../../assets/icon-design.svg";
import icondev from "../../assets/icon-dev.svg";
import iconapp from "../../assets/icon-app.svg";
import iconphoto from "../../assets/icon-photo.svg";
import TestimonialCard from "../testimonialCard/TestimonialCard";
import avatar1 from "../../assets/avatar-1.png";
import avatar2 from "../../assets/avatar-2.png";
import avatar3 from "../../assets/avatar-3.png";
import avatar4 from "../../assets/avatar-4.png";

export default function AboutUs() {
  const TESTIMONIAL_DATA = [
    {
      id: 1,
      image: avatar1,
      title: "Daniel lewis",
      desc: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
    },
    {
      id: 2,
      image: avatar2,
      title: "Jessica miller",
      desc: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels magnarels alia.",
    },
    {
      id: 3,
      image: avatar3,
      title: "Emily evans",
      desc: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
    },
    {
      id: 4,
      image: avatar4,
      title: "Henry william",
      desc: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
    },
  ];
  return (
    <>
      <article class="about  active" data-page="about">
        <header>
          <h2 class="h2 article-title">About me</h2>
        </header>

        <section class="about-text">
          <p>
            I'm Creative Director and UI/UX Designer from Sydney, Australia,
            working in web development and print media. I enjoy turning complex
            problems into simple, beautiful and intuitive designs.
          </p>

          <p>
            My job is to build your website so that it is functional and
            user-friendly but at the same time attractive. Moreover, I add
            personal touch to your product and make sure that is eye-catching
            and easy to use. My aim is to bring across your message and identity
            in the most creative way. I created web design for many famous brand
            companies.
          </p>
        </section>

        {/* <!--
  - service
--> */}

        <section class="service">
          <h3 class="h3 service-title">What i'm doing</h3>

          <ul class="service-list">
            <Card
              image={iconsvg}
              title="Web design"
              desc="The most modern and high-quality design made at a professional
                  level."
            />
            <Card
              image={icondev}
              title="Web development"
              desc="High-quality development of sites at the professional level."
            />
            <Card
              image={iconapp}
              title="Mobile apps"
              desc="Professional development of applications for iOS and Android."
            />
            <Card
              image={iconphoto}
              title="Photography"
              desc="  I make high-quality photos of any category at a professional
                  level."
            />
          </ul>
        </section>

        {/* <!--
  - testimonials
--> */}

        <section class="testimonials">
          <h3 class="h3 testimonials-title">Testimonials</h3>

          <ul class="testimonials-list has-scrollbar">
            {TESTIMONIAL_DATA?.map((item, index) => {
              <TestimonialCard
                key={index}
                image={item.image}
                title={item.title}
                desc={item.desc}
              />;
            })}
          </ul>
        </section>

        {/* 
<!--
  - testimonials modal
--> */}

        <div class="modal-container" data-modal-container>
          <div class="overlay" data-overlay></div>

          <section class="testimonials-modal">
            <button class="modal-close-btn" data-modal-close-btn>
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div class="modal-img-wrapper">
              <figure class="modal-avatar-box">
                <img
                  src="./assets/images/avatar-1.png"
                  alt="Daniel lewis"
                  width="80"
                  data-modal-img
                />
              </figure>

              <img src="./assets/images/icon-quote.svg" alt="quote icon" />
            </div>

            <div class="modal-content">
              <h4 class="h3 modal-title" data-modal-title>
                Daniel lewis
              </h4>

              <time datetime="2021-06-14">14 June, 2021</time>

              <div data-modal-text>
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* 
<!--
  - clients
--> */}

        <section class="clients">
          <h3 class="h3 clients-title">Clients</h3>

          <ul class="clients-list has-scrollbar">
            <li class="clients-item">
              <a href="#">
                <img src="./assets/images/logo-1-color.png" alt="client logo" />
              </a>
            </li>

            <li class="clients-item">
              <a href="#">
                <img src="./assets/images/logo-2-color.png" alt="client logo" />
              </a>
            </li>

            <li class="clients-item">
              <a href="#">
                <img src="./assets/images/logo-3-color.png" alt="client logo" />
              </a>
            </li>

            <li class="clients-item">
              <a href="#">
                <img src="./assets/images/logo-4-color.png" alt="client logo" />
              </a>
            </li>

            <li class="clients-item">
              <a href="#">
                <img src="./assets/images/logo-5-color.png" alt="client logo" />
              </a>
            </li>

            <li class="clients-item">
              <a href="#">
                <img src="./assets/images/logo-6-color.png" alt="client logo" />
              </a>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}

import React from 'react'
import myavator from '../../assets/my-avatar.png'

export default function SideBar() {
  return (
    <div>
       <aside class="sidebar" data-sidebar>

<div class="sidebar-info">

  <figure class="avatar-box">
    <img src={myavator} alt="Richard hanrick" width="80"/>
  </figure>

  <div class="info-content">
    <h1 class="name" title="Richard hanrick">Richard hanrick</h1>

    <p class="title">Web developer</p>
  </div>

  <button class="info_more-btn" data-sidebar-btn>
    <span>Show Contacts</span>

    <ion-icon name="chevron-down"></ion-icon>
  </button>

</div>

<div class="sidebar-info_more">

  <div class="separator"></div>

  <ul class="contacts-list">

    <li class="contact-item">

      <div class="icon-box">
        <ion-icon name="mail-outline"></ion-icon>
      </div>

      <div class="contact-info">
        <p class="contact-title">Email</p>

        <a href="mailto:richard@example.com" class="contact-link">richard@example.com</a>
      </div>

    </li>

    <li class="contact-item">

      <div class="icon-box">
        <ion-icon name="phone-portrait-outline"></ion-icon>
      </div>

      <div class="contact-info">
        <p class="contact-title">Phone</p>

        <a href="tel:+12133522795" class="contact-link">+1 (213) 352-2795</a>
      </div>

    </li>

    <li class="contact-item">

      <div class="icon-box">
        <ion-icon name="calendar-outline"></ion-icon>
      </div>

      <div class="contact-info">
        <p class="contact-title">Birthday</p>

        <time datetime="1982-06-23">June 23, 1982</time>
      </div>

    </li>

    <li class="contact-item">

      <div class="icon-box">
        <ion-icon name="location-outline"></ion-icon>
      </div>

      <div class="contact-info">
        <p class="contact-title">Location</p>

        <address>Sacramento, California, USA</address>
      </div>

    </li>

  </ul>

  <div class="separator"></div>

  <ul class="social-list">

    <li class="social-item">
      <a href="#" class="social-link">
        <ion-icon class = "socials-icons" name="logo-facebook"></ion-icon>
      </a>
    </li>

    <li class="social-item">
      <a href="#" class="social-link">
        <ion-icon class = "socials-icons" name="logo-twitter"></ion-icon>
      </a>
    </li>

    <li class="social-item">
      <a href="#" class="social-link">
        <ion-icon class = "socials-icons" name="logo-instagram"></ion-icon>
      </a>
    </li>

  </ul>

</div>

</aside>
    </div>
  )
}

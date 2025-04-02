import React from 'react'
import ContactUs from '../../components/contactUs/ContactUs'
import SideBar from '../../components/sideBar/SideBar'
import NavBar from '../../components/navBar/NavBar'

export default function Contact() {
  return (
    <main>
          <SideBar/>
          <div className="main-content">
          <NavBar/>
          <ContactUs/>
          </div>
        </main>
  )
}

import React from 'react'
import SideBar from '../../components/sideBar/SideBar'
import AboutUs from '../../components/aboutUs/AboutUs'
import NavBar from '../../components/navBar/NavBar'

export default function About() {
  return (
    <main>
      <SideBar/>
      <div className="main-content">
      <NavBar/>
      <AboutUs/>
      </div>
    </main>
  )
}

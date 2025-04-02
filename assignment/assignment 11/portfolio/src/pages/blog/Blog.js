import React from 'react'
import BlogUs from '../../components/blogUs/BlogUs'
import SideBar from '../../components/sideBar/SideBar'
import NavBar from '../../components/navBar/NavBar'

export default function Blog() {
  return (
    <main>
          <SideBar/>
          <div className="main-content">
          <NavBar/>
          <BlogUs/>
          </div>
        </main>
  )
}

import React from 'react' 
import SideBar from '../../components/sideBar/SideBar'
import NavBar from '../../components/navBar/NavBar'
import ResumeUs from '../../components/resumeUs/ResumeUs'
export default function Resume() {
  return (
    <main>
          <SideBar/>
          <div className="main-content">
          <NavBar/>
          <ResumeUs/>
          </div>
        </main>
  )
}

import React from 'react'
import PortfolioUs from '../../components/portfolioUs/PortfolioUs'
import SideBar from '../../components/sideBar/SideBar'
import NavBar from '../../components/navBar/NavBar'

export default function Portfolio() {
  return (
    <main>
          <SideBar/>
          <div className="main-content">
          <NavBar/>
          <PortfolioUs/>
          </div>
        </main>
  )
}

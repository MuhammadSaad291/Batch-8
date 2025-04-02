import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from './../../components/hero/Hero';
import Point from './../../components/point/Point';
import SecondSection from './../../components/secondSection/SecondSection';
import Section3 from '../../components/section3/Section3';
import Section4 from './../../components/section4/Section4';
import Section5 from '../../components/section5/Section5';
import Footer from '../../components/footer/Footer';
export default function Home() {
  return (
    <div style={{backgroundColor: "black"}}>
      <Hero />
      <Point />
      <SecondSection/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>
    </div>
  )
}

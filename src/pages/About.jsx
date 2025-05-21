import React from 'react'
import LanguageBar from '../components/LanguageBar'
import NavBar from '../components/NavBar'
import AboutHero from '../components/AboutPage/AboutHero'
import ProductSupportSection from '../components/AboutPage/ProductSupportSection'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <LanguageBar/>
      <NavBar/>
      <AboutHero/>
      <ProductSupportSection/>
      <Footer/>
    </div>
  )
}

export default About

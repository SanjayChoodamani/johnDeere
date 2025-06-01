import React from 'react'
import LanguageBar from '../components/LanguageBar'
import NavBar from '../components/NavBar'
import AboutHero from '../components/AboutPage/AboutHero'
import ProductSupportSection from '../components/AboutPage/ProductSupportSection'
import Footer from '../components/Footer'
import OurFounder from '../components/AboutPage/OurFounder'
import OurStory from '../components/AboutPage/OurStory'

const About = () => {
  return (
    <div>
      <LanguageBar/>
      <NavBar/>
      <OurFounder/>
      <OurStory/>
      <AboutHero/>
      <ProductSupportSection/>
      <Footer/>
    </div>
  )
}

export default About

import React from 'react'
import LanguageBar from '../components/LanguageBar'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroSection from '../components/HomePage/HeroSection'
import AllProducts from '../components/HomePage/AllProducts'
import FarmingSolutions from '../components/HomePage/FarmingSolutions'
import JDLinkAppSection from '../components/HomePage/JDLinkAppSection'
import ProductionSystemSolutions from '../components/HomePage/ProductionSystemSolutions'
import FAQSection from '../components/HomePage/FAQSection'
import AboutHero from '../components/AboutPage/AboutHero'

const Home = () => {
    return (
        <div>
        <LanguageBar/>
        <NavBar/>
        <HeroSection/>
        <AllProducts/>
        {/* <FarmingSolutions/> */}
        <AboutHero/>
        <JDLinkAppSection/>
        <ProductionSystemSolutions/>
        <FAQSection/>
        <Footer/>

        </div>
    )
}

export default Home

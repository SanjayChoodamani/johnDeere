import React from 'react'
import LanguageBar from '../components/LanguageBar'
import NavBar from '../components/NavBar'
import ProductHero from '../components/ProductPage/ProductHero'
import TractorsSection from '../components/ProductPage/TractorsSection'
import WhyChooseSection from '../components/ProductPage/WhyChooseSection'
import Footer from '../components/Footer'
const Products = () => {
    return (
        <div>
            <LanguageBar/>
            <NavBar/>
            <ProductHero/>
            <TractorsSection/>
            <WhyChooseSection/>
            <Footer/>
        </div>
    )
}

export default Products

import React from 'react'
import LanguageBar from '../components/LanguageBar'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import DealerSection from '../components/Dealer/DealerSection'

const DealerLocator = () => {
    return (
        <div>
            <LanguageBar/>
            <NavBar/>
            <DealerSection/>
            <Footer/>
        </div>
    )
}

export default DealerLocator

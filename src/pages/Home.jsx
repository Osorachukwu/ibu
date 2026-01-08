import React from 'react'
import WhyUs from '../components/WhyUs'
import ThemeController from '../components/ui/ThemeController'
import Navbar from '../components/ui/Navbar'
import AboutUs from '../components/AboutUs'
import OurServices from '../components/OurServices'
import Footer from '../components/Footer'
import Hero from '../components/InvestmentHero'
import TestHero from '../components/TestHero'

export default function Home() {
    return (
        <div >
            <TestHero />
            <WhyUs />
            <AboutUs />
            <OurServices />
        </div>
    )
}

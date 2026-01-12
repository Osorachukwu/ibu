import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tracking from '../pages/Tracking'
import Home from '../pages/Home'
import Footer from '../components/Footer'
import NotFound from '../pages/NotFound'
import AsideHome from '../pages/AsideHome'
import About from '../pages/About'
import Contact from '../pages/Contact'
// import HeadroomNav from '../components/ui/nav/HeadromNav'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            {/* <HeadroomNav /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route element={<AsideHome />}>
                    <Route path="/tracking" element={<Tracking />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
                {/* <Route path="/contact" element={<Contact />} /> */}
                {/* <Route path="/services" element={<Services />} /> */}
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

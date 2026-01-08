import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tracking from '../pages/Tracking'
import Home from '../pages/Home'
import Footer from '../components/Footer'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tracking" element={<Tracking />} />
                {/* <Route path="*" element={<NotFound />} /> */}
                {/* <Route path="/about" element={<About />} /> */}
                {/* <Route path="/contact" element={<Contact />} /> */}
                {/* <Route path="/services" element={<Services />} /> */}
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

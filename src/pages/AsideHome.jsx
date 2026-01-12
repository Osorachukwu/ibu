import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import Navbar from '../components/ui/nav/Navbar'
import bgImage from "../assets/truck-on-the-road.jpg"

export default function AsideHome() {
    const location = useLocation();

    // Map your paths to the titles you want to show
    // const pageTitles = {
    //     '/about': 'About Us',
    //     '/services': 'Our Services',
    //     '/contact': 'Get In Touch',
    //     '/tracking': 'Track Your Shipment',
    // };

    // Define content for each route (title and subtitle)
    const pageContent = {
        '/about': {
            title: 'About Us',
            subtitle: 'Learn more about our mission and the team behind the scenes.'
        },
        '/services': {
            title: 'Our Services',
            subtitle: 'We provide high-quality solutions tailored to your business.'
        },
        '/contact': {
            title: 'Contact Us',
            subtitle: 'Have a question? We would love to hear from you.'
        },
        '/tracking': {
            title: 'Tracking',
            subtitle: 'Track your shipment in real-time with our advanced tracking system.'
        }
    };
    console.log(pageContent)


    // Fallback title if path isn't found
    // const current = pageContent[location.pathname] || 'Welcome to Our Website'; this one is for single one
    const current = pageContent[location.pathname] || {
        title: 'Welcome',
        subtitle: 'Explore our website to find what you need.'
    };;
    return (
        <div>
            <Navbar />
            <div className='text-6xl py-10 relative h-[75vh]'>
                <div className='bg-black/60 backdrop-blur-xs absolute h-full w-full top-0 left-0'></div>
                <img src={bgImage} alt="" className="absolute inset-0 w-full h-full object-cover -z-10" />

                <div className="absolute text-white px-10">
                    <Breadcrumbs />
                    {/* Render Title */}
                    <p className="font-bold">{current.title}</p>

                    {/* Render Subtitle */}
                    <p className="text-xl mt-4 opacity-90">{current.subtitle}</p>
                </div>

            </div>

            <main className="">
                <Outlet />
            </main>
        </div>
    )
}

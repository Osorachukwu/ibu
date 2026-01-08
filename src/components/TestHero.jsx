import React from 'react'
// import van from "../assets/van-2.webp"
import van from "../assets/van-1.jpg"
// import van from "../assets/van-1-flip.jpg"
import Navbar from './ui/Navbar'
import { Link } from 'react-router-dom'

export default function TestHero() {
    return (
        <div>
            <section className="lg:pt-5 pt-0 lg:pl-16 h-full mb-10">
                <div
                    className="md:rounded-2xl bg-base-300 py-10 overflow-hidden lg:m-0 2xl:py-16 xl:py-8  lg:rounded-tl-3xl lg:rounded-bl-3xl ">
                    <Navbar />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
                        <div className="grid grid-cols-1 gap-14 items-center lg:grid-cols-12 lg:gap32">
                            <div className="w-full xl:col-span-5 lg:col-span-6 2xl:-mx-5 xl:-mx-0">
                                {/* <div className="flex items-center text-sm font-medium text-gray-500 justify-center lg:justify-start">
                                    <span className="bg-indigo-600 py-1 px-3 rounded-2xl text-xs font-medium text-white mr-3 ">#1</span>
                                    Investment app
                                </div> */}
                                <h1 className="py-8 md:text-center font-bold font-manrope text-5xl md:text-6xl lg:text-left">
                                     <span className='text-secondary'>Terke</span> Logistics 
                                     <br /><span className='text-secondary'> & </span><br /> 
                                     Cargo Transport Services
                                </h1>
                                {/* <h1 className="py-8 md:text-center font-bold font-manrope text-5xl md:text-6xl lg:text-left">
                                    We will <span className='text-secondary'>deliver</span> your package all over <span className='text-secondary'>the world </span>.
                                </h1> */}
                                {/* <div className="card w-96 bg-base-300 card-md shadow-sm">
                                    <div className="card-body">
                                        <h2 className="card-title">Small Card</h2>
                                        <p>The fater easier way to book and manage your international shipments.</p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-secondary">Learn more</button>
                                        </div>
                                    </div>
                                </div> */}
                                <p className="text-xl md:text-center lg:text-left">
                                    Generate with ai
                                </p>
                                <div className='flex md:justify-center lg:justify-start'>
                                    <Link to="/tracking"className='btn btn-md btn-secondary rounded-full mt-6'>Track Shipment</Link>
                                </div>
                               
                            </div>
                            <div className="w-full xl:col-span-7  lg:col-span-6 block">
                                <div className="w-full  sm:w-auto lg:w-[60.8125rem] xl:ml-40 ">
                                    <img src={van} alt="Dashboard image" className="rounded-l-3xl object-cover w-full lg:h-auto"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
// className="w-full  lg:h-auto "
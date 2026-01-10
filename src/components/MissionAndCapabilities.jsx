import React from 'react'

export default function MissionAndCapabilities() {
    return (
        <section className='px-3 lg:px-16'>
            <div className="card bg-base-300 container px-4 mx-auto py-5 md:p-10 mb-10 rounded-xl md:rounded-3xl">
                <div className="space-y-10 mx-auto">

                    {/* Capabilities Section - Image on Left, Text on Right */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="rounded-2xl overflow-hidden shadow-xl h-[400px]">
                            <img
                                // src={capabilitiesImg}
                                src='https://readymadeui.com/images/digital-img-1.webp'
                                alt="Our Capabilities"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm">Capabilities</h2>
                            <h3 className="text-4xl font-bold text-slate-900">Efficiency without compromise</h3>
                            <p className="sm:text-lg leading-relaxed">
                                We tirelessly troubleshoot to eliminate choke points, prevent stock depletion,
                                streamline unnecessary redundancies, and make delays a thing of the past.
                            </p>
                        </div>
                    </div>

                    {/* Mission Section - Text on Left, Image on Right */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-">
                        {/* order-2 md:order-1 makes text come first on desktop */}
                        <div className="space-y-6 order-2 md:order-1">
                            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm">Our Mission</h2>
                            <h3 className="text-4xl font-bold text-slate-900">Innovation for a global market</h3>
                            <p className="sm:text-lg leading-relaxed">
                                Our mission is to design, build and implement innovative, profitable and
                                sustainable products and services that help our customers meet consumer
                                and industrial demands globally and irrespective of fulfillment channels.
                            </p>
                        </div>
                        {/* order-1 md:order-2 makes image come second on desktop but first on mobile */}
                        <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] order-1 md:order-2">
                            <img
                                // src={missionImg}
                                src='https://readymadeui.com/images/digital-img-2.webp'
                                alt="Our Mission"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}


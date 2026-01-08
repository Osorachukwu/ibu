import React from 'react'

export default function AboutUs() {
    return (
        <div className='px-3 lg:px-16'>
            <div className='card bg-base-300 container px-4 mx-auto py-5 md:p-10 mb-56 rounded-xl md:rounded-3xl'>
                <div className='max-w-4xl mb-6'>
                    <p className='text-secondary font-bold mb-3'>About Us</p>
                    <p className='text-4xl md:text-5xl font-bold mb-6'><span className='text-secondary'>Tereke </span>is ine of the best shipping and logistics companies in the world.</p>
                    <p className='sm:text-xl'>
                        Making Terek as one of the best companies in shipping and logistics services by optionally serving the needs and intrests of our customers.
                    </p>
                </div>

                {/* <div className='flex gap-6 md:gap-8 mb-16'>
                    {[{ title: "100k+", subTitle: "Operational Vehicles" }, { title: "1k+", subTitle: "Office" }, { title: "10+", subTitle: "Years Exprience" }, { title: "3M+", subTitle: "Happy Clients" }].map((item, i) => (
                        <div key={i}>
                            <p className='text-xl md:text-3xl font-bold'>{item.title}</p>
                            <p className='text-xs sm:text-sm'>{item.subTitle}</p>
                        </div>
                    ))}

                </div> */}
                <div className="stats w-1/2 lg:stats-horizontal">
                    <div className="stat">
                        {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
                        <div className="stat-value">100k+</div>
                        <div className="stat-title">Operational Vehicles</div>
                    </div>

                    <div className="stat">
                        {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
                        <div className="stat-value">20+</div>
                        <div className="stat-title">Countries of operation</div>
                    </div>

                    <div className="stat">
                        {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
                        <div className="stat-value">10+</div>
                        <div className="stat-title">Years of Exprience</div>
                    </div>
                </div>
                {/* <span className="text-rotate text-xl duration-6000">
                    <span className="justify-items-center">
                        <span>BLAZING</span>
                        <span className="font-bold italic px-2">FAST ▶︎▶︎</span>
                    </span>
                </span> */}
                <div className='h-80 bg-amber-200 rounded-3xl -mb-36'></div>

            </div>
        </div>
    )
}

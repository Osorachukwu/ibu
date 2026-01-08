import React from 'react'
import warf from "../assets/containers-at-dock.jpg"

export default function OurServices() {
    return (
        <div className='px-3 lg:px-16'>
            <div className='card container px-4 mx-auto py-5 md:p-10 mb-56 rounded-xl md:rounded-3xl'>
                <div className='max-w-4xl mb-6'>
                    <p className='text-secondary font-bold mb-3'>Our Services</p>
                    <p className='text-4xl md:text-5xl font-bold mb-6'>Manage your package from local <br className='hidden lg:block'/> <span className='text-secondary'>to the world </span>.</p>
                    <p className='sm:text-xl'>
                        Making Terek as one of the best companies in shipping and logistics services by optionally serving the needs and intrests of our customers.
                    </p>
                </div>

                <div className='flex flex-col sm:flex-row gap-6'>
                    <div className='sm:w-1/2 rounded-3xl relative overflow-hidden h-60 lg:h-auto'>
                        <div className='bg-linear-to-t from-black/40 to-transparent h-full w-full absolute'></div>
                        <img src={warf} alt="" className='rounded-3xl' />
                    </div>
                    {/* Faq */}
                    <div className='join join-vertical items-center sm:w-1/2'>
                        {[1, 2, 3].map((item, i) => (
                            <div className="collapse collapse-arrow join-item bg-base-200 border border-base-300 mb-1 md:mb-3 rounded-2xl">
                                <input type="radio" name="my-accordion-3" defaultChecked />
                                <div className="collapse-title md:text-2xl font-semibold"><span className='text-secondary'>How</span> do I create an account?</div>
                                <div className="collapse-content md:text-lg">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
                            </div>

                        ))}
                    </div>
                </div>


            </div>
        </div>
    )
}
// photo of ship with shipping containers arial view
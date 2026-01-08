import React from 'react'

export default function Tracking() {
    return (
        <div className='py-52 bg-amber-200'>
            <div className="card max-w-xl bg-base-200 border-base-300 card-md shadow-sm rounded-3xl mx-auto py-4">
                <div className="card-body pt-9">
                    <span className="card-title bg-amber-30 absolute -top-5 text-2xl">Shipment Tracking:</span>
                    <form action="" className='space-y-2 '>
                        <label htmlFor="" className='text-base sm:text-lg font-medium text-base-content'>Select your services</label>
                        <select defaultValue="Type of shipment" className="select w-full md:mb-4">
                            <option disabled={true}>Type of shipment</option>
                            <option>Air Shipment</option>
                            <option>Road Shipment</option>
                            <option>Ocean Shipment</option>
                        </select>

                        <label htmlFor="" className='text-base sm:text-lg font-medium text-base-content'>Enter your shipmemt code</label>
                        
                        <input type="text" className="input validator w-full" required placeholder="123467"
                            pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="10" title="Only letters, numbers or dash" />
                        <p className="validator-hint hidden">
                            Must be 3 to 10 characters
                            <br />containing only letters, numbers or dash
                        </p>
                        {/* <label htmlFor="" className='text-base sm:text-lg font-medium text-base-content'>Example</label>
                        <input type="text" placeholder="12345" className="input w-full bg-base-300" disabled /> */}

                        <button className='btn btn-secondary rounded-full mt-4'>Track Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

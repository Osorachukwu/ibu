import { ChevronDown, Menu } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function MobileNav({ handleItemClick }) {
    return (
        <div className="dropdown dropdown-start md:hidden block">
            <div tabIndex={0} role="button" className="btn btn-ghost shadow-md btn-square btn-sm sm:btn-md m-1"><Menu /></div>
            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li onClick={handleItemClick}><Link to="/">Home</Link></li>
                <li onClick={handleItemClick}><Link to="/about">About</Link></li>
                <li onClick={handleItemClick}><Link to="/tracking">Track</Link></li>
                <li>
                    <div className="dropdown dropdown-right">
                        <div tabIndex={0} role="button" className="flex items-center gap-1 m-0 p-0">Services <ChevronDown size={18} /></div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm -ml-20">
                            <li onClick={handleItemClick} className='rounded-none'><a>Air Shipment</a></li>
                            <li onClick={handleItemClick}><a>Road Shipment</a></li>
                            <li onClick={handleItemClick}><a>Sea Shipment</a></li>
                            <li onClick={handleItemClick}><a>Project Import</a></li>
                            <li onClick={handleItemClick}><a>Customer Clearance</a></li>
                            <li onClick={handleItemClick}><a>Container Shipping</a></li>
                            <li onClick={handleItemClick}><a>Car Shipping</a></li>
                            <li onClick={handleItemClick}><a>Destination</a></li>
                            <li onClick={handleItemClick}><a>Quality & Safty</a></li>
                            <li onClick={handleItemClick}><a>Cargo Handling</a></li>

                        </ul>
                    </div>
                </li>

                <li onClick={handleItemClick}><a>Contact</a></li>
            </ul>

        </div>
    )
}

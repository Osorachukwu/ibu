import React from 'react'
import ThemeController from './ThemeController';
import { ChevronDown, Menu } from 'lucide-react';

export default function Navbar() {
    const handleItemClick = () => {
        document.activeElement.blur();
    };


    return (
        <div className="navbar bg-base-300 md:bg-base-100 py-0">
             {/* Mobile */}
            <div className="dropdown dropdown-start md:hidden block">
                <div tabIndex={0} role="button" className="btn btn-ghost m-1"><Menu /></div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={handleItemClick}><a>Home</a></li>
                    <li onClick={handleItemClick}><a>About</a></li>
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
                    <li onClick={handleItemClick}><a>Track</a></li>
                    <li onClick={handleItemClick}><a>Contact</a></li>
                </ul>
                    
            </div>
            {/* Desktop */}
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>

            <div className="flex-none hidden md:block navbar-cente">
                <ul className="menu menu-horizontal px-1 py-0">
                    <ul className='flex items-center font-medium'>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li>
                            <div className="dropdown dropdown-center">
                                <div tabIndex={0} role="button" className="flex items-center gap-1 m-0 p-0">Services <ChevronDown size={18} /></div>
                                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
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
                        <li><a>Track</a></li>
                        <li><a className='btn btn-secondary btn-sm font-medium rounded-full'>Get in touch</a></li>
                    </ul>
                </ul>
            </div>
            <div className='ml-3 navbar-en'>
                        <ThemeController />
            </div>
        </div>
    )
}


// import React from 'react'
// import ThemeController from './ThemeController'

// export default function Navbar() {
//     return (
//         <div className="navbar bg-base-300">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//                     </div>
//                     <ul
//                         tabIndex="-1"
//                         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//                         <li><a>Home</a></li>
//                         <li><a>About</a></li>
//                         <li><a>Track</a></li>
//                         <li>
//                             <details>
//                                 <summary>Services</summary>
//                                 <ul className="p-2 bg-base-100 w-40 z-1">
//                                     <li className='rounded-none'><a>Air Shipment</a></li>
//                                     <li><a>Road Shipment</a></li>
//                                     <li><a>Sea Shipment</a></li>
//                                     <li><a>Project Import</a></li>
//                                     <li><a>Customer Clearance</a></li>
//                                     <li><a>Container Shipping</a></li>
//                                     <li><a>Car Shipping</a></li>
//                                     <li><a>Destination</a></li>
//                                     <li><a>Quality & Safty</a></li>
//                                     <li><a>Cargo Handling</a></li>
//                                 </ul>
//                             </details>
//                         </li>
//                         <li><a className='btn btn-secondary btn-sm font-medium rounded-full'>Get in touch</a></li>
                        
//                     </ul>
//                 </div>
//                 <a className="btn btn-ghost text-xl">daisyUI</a>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     <li><a>Home</a></li>
//                     <li><a>About</a></li>
//                     <li>
//                         <details>
//                             <summary>Services</summary>
//                             <ul className="p-2 bg-base-100 w-40 z-1">
//                                 <li className='rounded-none'><a>Air Shipment</a></li>
//                                 <li><a>Road Shipment</a></li>
//                                 <li><a>Sea Shipment</a></li>
//                                 <li><a>Project Import</a></li>
//                                 <li><a>Customer Clearance</a></li>
//                                 <li><a>Container Shipping</a></li>
//                                 <li><a>Car Shipping</a></li>
//                                 <li><a>Destination</a></li>
//                                 <li><a>Quality & Safty</a></li>
//                                 <li><a>Cargo Handling</a></li>
//                             </ul>
//                         </details>
//                     </li>
//                     <li><a>Track</a></li>
//                     <li><a className='btn btn-secondary btn-sm font-medium rounded-full'>Get in touch</a></li>
//                 </ul>
//             </div>
//             <div className="navbar-end">
//                 <ThemeController />

//             </div>
//         </div>
//     )
// }


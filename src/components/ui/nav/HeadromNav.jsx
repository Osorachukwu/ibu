import React, { useState, useEffect } from 'react';
import ThemeController from '../ThemeController';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';

export default function HeadroomNav() {
    const [isVisible, setIsVisible] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleItemClick = () => {
        document.activeElement.blur();
    };

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            // 1. Check if we are at the very top
            setIsAtTop(currentScrollY < 10);

            // 2. Headroom Logic: Show if scrolling up, hide if scrolling down
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setIsVisible(false); // Scrolling down
            } else {
                setIsVisible(true); // Scrolling up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    return (
        <div 
            className={`navbar fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out py-0
                ${isVisible ? 'translate-y-0' : '-translate-y-full'}
                ${isAtTop 
                    ? 'bg-base-300 md:bg-base-100 border-transparent' 
                    : 'bg-base-100/80 backdrop-blur-md shadow-md border-b border-base-content/10'
                }
            `}
        >
            {/* Mobile menu */}
            <MobileNav handleItemClick={handleItemClick} />
            
            {/* Desktop menu*/}
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>

            <div className="flex-none hidden md:block navbar-center">
                <ul className="menu menu-horizontal px-1 py-0">
                    <ul className='flex items-center font-medium'>
                        <li><a className='rounded-full'>Home</a></li>
                        <li><a className='rounded-full'>About</a></li>
                        <li><a className='rounded-full'>Contact</a></li>
                        
                        <li>
                            <div className="dropdown dropdown-center rounded-full">
                                <div tabIndex={0} role="button" className="flex items-center gap-1 m-0 p-0">
                                    Services <ChevronDown size={18} />
                                </div>
                                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    {["Air", "Road", "Sea", "Project", "Customer", "Container", "Car", "Destination", "Quality", "Cargo"].map((item) => (
                                        <li key={item} onClick={handleItemClick}><a>{item} Shipment</a></li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                        
                        <li onClick={handleItemClick}>
                            <Link to="/tracking" className='btn btn-secondary btn-sm font-medium rounded-full ml-2'>Track</Link>
                        </li>
                    </ul>
                </ul>
            </div>
            <div className='ml-3 navbar-end'>
                <ThemeController />
            </div>
        </div>
    );
}
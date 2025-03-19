import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logoimg from '../assets/WhatsApp_Image_2024-12-30_at_3.36.45_PM-removebg-preview.png';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home'); 
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (link) => {
        setActiveLink(link);
        setIsOpen(false);
    
        // Use react-router-dom for navigation
        const section = document.getElementById(link);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const linkClasses = (link) =>
        `transition-colors duration-300 flex items-center space-x-2 ${
            activeLink === link ? 'text-white underline underline-offset-4' : 'text-gray-300'
        } hover:text-white`;

    return (
        <div className="text-center font-Poppins mx-auto bg-gradient-to-r from-sky-900 to-sky-800">
            <div className="flex justify-between items-center p-4">
                <div className="flex items-center gap-3">
                    <img src={Logoimg} alt="Logo" className="h-12" />
                    <span className="text-2xl text-gray-200 font-semibold">Syntree Studio</span>
                </div>
                <div className="md:hidden" onClick={toggleMenu}>
                    {isOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
                </div>
                <ul className="hidden md:flex space-x-6 text-xl">
                    {['home', 'about', 'service', 'why-choose-us', 'contact'].map((link) => (
                        <li key={link}>
                            <a 
                                onClick={() => handleClick(link)}
                                className={linkClasses(link)}
                            >
                                <span className="capitalize cursor-pointer">{link.replace('-', ' ')}</span>
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={() => handleClick('contact')}
                    className="cursor-pointer hidden md:block bg-white text-sky-900 px-4 py-2 font-bold rounded hover:bg-gray-300 transition-colors duration-100"
                >
                    Contact Us →
                </button>
            </div>

            {/* Responsive Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-sky-800">
                    <ul className="flex flex-col space-y-2 p-4 text-white text-xl">
                        {['home', 'about', 'service', 'why-choose-us', 'contact'].map((link) => (
                            <li key={link}>
                                <a
                                    onClick={() => handleClick(link)}
                                    className={`block py-2 text-white ${
                                        activeLink === link ? 'underline underline-offset-4' : ''
                                    } hover:text-gray-300`}
                                >
                                    {link.replace('-', ' ')}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;

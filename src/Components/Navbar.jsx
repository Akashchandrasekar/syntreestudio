import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logoimg from '../assets/WhatsApp_Image_2024-12-30_at_3.36.45_PM-removebg-preview.png';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [isOpen, setIsOpen] = useState(false);

    // Smooth scroll function
    const smoothScroll = (element) => {
        const top = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top, behavior: 'smooth' });
    };

    // Handle click on a link
    const handleClick = (link) => {
        setActiveLink(link);
        setIsOpen(false);

        const section = document.getElementById(link);
        if (section) {
            smoothScroll(section);
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const linkClasses = (link) =>
        `transition-colors duration-300 ${
            activeLink === link ? 'text-pink-500 underline underline-offset-4' : 'text-gray-300'
        } hover:text-white`;

    return (
        <div className="text-center font-Poppins mx-auto bg-gradient-to-r from-sky-900 to-sky-800">
            <div className="flex justify-between items-center p-4 md:px-8">
                {/* Logo and Title - Always Visible */}
                <div className="flex items-center gap-3">
                    <img src={Logoimg} alt="Logo" className="h-12" />
                    <span className="text-2xl text-gray-200 font-semibold">Syntree Studio</span>
                </div>

                {/* Hamburger Icon - Visible on Mobile and Tablet */}
                <div className="lg:hidden" onClick={toggleMenu}>
                    {isOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
                </div>

                {/* Desktop Navbar - Visible on Laptop/Desktop */}
                <ul className="hidden lg:flex space-x-6 text-xl">
    {['home', 'about', 'service', 'why-choose-us', 'contact'].map((link) => (
        <li key={link}>
            <a
                onClick={() => handleClick(link)}
                className={`capitalize cursor-pointer transition-colors duration-300 ${
                    activeLink === link ? 'text-pink-500 underline underline-offset-4' : 'text-gray-300'
                } hover:text-white`}
            >
                {link.replace('-', ' ')}
            </a>
        </li>
    ))}
</ul>


                {/* Contact Button - Visible on Laptop/Desktop */}
                <button
                    onClick={() => handleClick('contact')}
                    className="hidden lg:block bg-white text-sky-900 px-4 py-2 font-bold rounded hover:bg-gray-300 transition-colors duration-100"
                >
                    Contact Us →
                </button>
            </div>

            {isOpen && (
    <div className="lg:hidden bg-sky-800">
        <ul className="flex flex-col items-center space-y-2 py-4">
            {['home', 'about', 'service', 'why-choose-us', 'contact'].map((link) => (
                <li key={link} className="w-full text-center">
                    <a
                        onClick={() => handleClick(link)}
                        className={`capitalize cursor-pointer block py-2 transition-colors duration-300 ${
                            activeLink === link ? 'text-pink-500 underline underline-offset-4' : 'text-gray-300'
                        } hover:text-white`}
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

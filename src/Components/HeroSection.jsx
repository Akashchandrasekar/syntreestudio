import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/Gemini_Generated_Image_chsukhchsukhchsu.jpg';

const HeroSection = () => {
    const navigate = useNavigate();

    const handleLearnMore = () => {
        navigate('/about');
    };

    return (
        <div className="font-Poppins">
            <div
                className="relative bg-cover bg-no-repeat h-auto flex items-center justify-end pr-8 md:pr-20 mt-0 pb-5"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundPosition: "center calc(50% + 50px)",
                }}
            >
                {/* Background Contrast Overlay */}
                <div className="absolute inset-0 bg-black opacity-60"></div>

                {/* Hero Content */}
                <div className="relative mt-15 mb-10 max-w-xl text-right z-10 p-4 md:p-8">
                    <h1 className="text-white text-3xl md:text-5xl font-bold py-2 md:py-4">
                        Welcome to Syntree <span className="text-pink-500">Studio</span>
                    </h1>
                    <p className="text-white text-lg md:text-2xl py-2 md:py-4">
                        Empower your business with cutting-edge IT solutions designed to fuel growth and innovation.
                        Our team of experts is ready to bring your ideas to life and take your success to new heights.
                        Contact us now and transform your vision into reality!
                    </p>
                    <button
                        onClick={handleLearnMore}
                        className="mt-4 bg-blue-500 text-white px-6 py-3 rounded cursor-pointer transition transform hover:bg-blue-600 hover:scale-105"
                    >
                        Learn More →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

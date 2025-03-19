import React from 'react';
import backgroundImage from "../assets/freepik__upload__66934.png";
import aboutImage from "../assets/business-concept-with-team-close-up.jpg";

const About = () => {
    return (
        <div
            className="relative font-raleway bg-cover bg-center min-h-screen flex items-center justify-center p-4 md:p-8"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            {/* Overlay for Background Opacity */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur"></div>

            {/* Content Section */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-5xl p-6 md:p-10 text-center md:text-left space-y-6 md:space-y-0">
                {/* Text Content */}
                <div className="flex-1 md:pr-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
                        Little About <span className="text-pink-500">Us ~</span>
                    </h1>
                    <p className="text-gray-200 text-sm md:text-lg leading-relaxed">
                        We specialize in crafting innovative and user-friendly applications tailored to meet your unique business needs. Whether you're a startup, a small business, or an enterprise, our team is dedicated to delivering high-quality solutions that enhance your digital presence and engage your audience.
                        <br /><br />
                        We're passionate about turning ideas into innovative digital solutions. With expertise in app development, web design, and software creation, we help businesses thrive in a fast-changing digital world.
                        <br /><br />
                        Our mission is simple: to deliver exceptional services tailored to your unique needs. From startups to established enterprises, we pride ourselves on creating user-friendly, scalable, and impactful applications that drive success.
                        <br /><br />
                        Let's grow together and bring your vision to life with technology that works for you.
                    </p>
                </div>

                {/* Right-Side Image */}
                <div className="flex-shrink-0 md:ml-8">
                    <img
                        src={aboutImage}
                        alt="About Us"
                        className="w-80 h-80 object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;

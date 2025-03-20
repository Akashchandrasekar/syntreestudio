import React from 'react';
import backgroundImage from "../assets/Gemini_Generated_Image_5jyf9x5jyf9x5jyf.jpg";
import { useNavigate } from 'react-router-dom';

const WhyChooseUs = () => {
    const navigate = useNavigate();
    return (
        <div
            className="relative font-raleway bg-cover bg-center min-h-screen flex flex-col items-center justify-center p-4 md:p-8"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            {/* Overlay for Background Opacity */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black opacity-70 backdrop-blur-md"></div>

            {/* Heading Section */}
            <div className="relative text-center my-5 p-4 md:my-10 md:p-6 z-10">
                <h1 className="text-3xl font-raleway md:text-5xl font-bold text-gray-200 mb-2">
                    Why Choose <span className="text-pink-500">Us?</span>
                </h1>
                <p className="py-2 text-gray-300 font-raleway sm:text-lg">
                    At Syntree Studio, we believe that your success is our success. Let’s collaborate to turn your vision into reality and take your business to new heights.
                </p>
            </div>

            {/* Service Cards */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 z-10">
                {[
                    {
                        title: "Agile Development",
                        image: "https://static.vecteezy.com/system/resources/previews/013/567/543/large_2x/agile-development-workflow-concept-vector.jpg",
                        description:
                            "Agile empowers teams to deliver better software through collaboration, adaptability, and iterative progress to meet needs.",
                    },
                    {
                        title: "Experienced Developer",
                        image: "https://img.freepik.com/premium-photo/developer-computer-engineer-coding-hacker-concept-flat-vector-illustration-daily-activities-working-ai-generated_705708-31368.jpg",
                        description:
                            "We blend innovation with expertise, delivering cutting-edge solutions and seamless success for any challenge.",
                    },
                    {
                        title: "24 x 7 User Support",
                        image: "https://static.vecteezy.com/system/resources/thumbnails/004/397/549/small_2x/service-24-7-concept-call-center-support-illustration-flat-vector.jpg",
                        description:
                            "At Syntree Studio, we craft exceptional digital solutions, offering 24/7 support to ensure your success around the clock.",
                    },
                    {
                        title: "Business Growth",
                        image: "https://img.freepik.com/free-vector/hand-drawn-finance-leaders-illustration_23-2149163550.jpg?semt=ais_hybrid",
                        description:
                            "We help businesses scale, innovate, and thrive with tailored solutions for sustainable growth, from startup to enterprise.",
                    },
                    {
                        title: "End-to-End Service",
                        image: "https://static.vecteezy.com/system/resources/thumbnails/008/258/234/small_2x/best-cloud-server-consultation-for-storing-data-free-vector.jpg",
                        description:
                            "We provide end-to-end services, delivering tailored, innovative solutions for startups or enterprises, from start to finish.",
                    },
                    {
                        title: "Modern Design",
                        image: "https://img.freepik.com/free-vector/social-media-3d-concept-background_52683-96688.jpg",
                        description:
                            "At Syntree Studio, we craft meaningful, functional, and timeless designs, blending simplicity, innovation, and sustainability.",
                    },
                ].map((service, index) => (
                    <div
                        key={index}
                        className="w-full max-w-xs mx-auto bg-gradient-to-r from-gray-800 via-gray-700 to-gray-850 bg-opacity-40 backdrop-blur-3xl shadow-2xl rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-3xl flex flex-col justify-between cursor-pointer min-h-[350px]"
                    >
                     <img
    src={service.image}
    alt={service.title}
    style={{ objectPosition: "center center" }}
    className="w-full h-40 sm:h-48 object-cover rounded-t-2xl"
/>


                        <div className="p-4 flex flex-col justify-between flex-grow">
                            <h2 className="text-lg md:text-xl text-pink-500 font-bold mb-2">{service.title}</h2>
                            <p className="text-gray-100 text-sm md:text-base mb-4">{service.description}</p>
                            <button
                                onClick={() => navigate('/contact')}
                                className="mt-auto bg-pink-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-pink-600 transition shadow-md hover:shadow-lg"
                            >
                                Contact Us &rarr;
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;

import React from 'react';
import HeroSection from '../Components/HeroSection';
import Services from './Services';
import WhyChooseUs from './WhyCooseUs';
import About from './About';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <section id="home"><HeroSection /></section>
            <section id="about"><About /></section>
            <section id="service"><Services /></section>
            <section id="why-choose-us"><WhyChooseUs /></section>
            <section id="contact"><Contact /></section>
        </div>
    );
};

export default Home;

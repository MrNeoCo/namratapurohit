import React from 'react';
import Hero from './../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import TestimonialCarousel from '../components/TestimonialCarousel';
import Contact from './../components/Contact';
import Footer from './../components/Footer';

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Programs />
            <TestimonialCarousel />
            <Contact />
            <Footer />
        </div >
    );
};

export default Home;

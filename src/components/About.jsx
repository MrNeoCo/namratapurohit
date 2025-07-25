import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    return (
        <section className="w-full px-6 py-16 bg-white text-black">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

                {/* Left - Image */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg"
                >
                    <img
                        src="/images/namrata-about.jpg" // Place image in public/images/
                        alt="Namrata Purohit"
                        className="w-full h-auto object-cover"
                    />
                </motion.div>

                {/* Right - Text & Stats */}
                <div className="w-full md:w-1/2 space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold"
                    >
                        Your Fitness Journey Starts Here
                    </motion.h2>

                    <p className="text-lg text-gray-700 leading-relaxed">
                        Namrata Purohit has revolutionized Pilates in India with her holistic and empowering training approach. She believes fitness should be fun, accessible, and sustainable for everyone.
                    </p>

                    {/* Read More Button */}
                    <button
                        onClick={() => navigate("/about")}
                        className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                    >
                        Read More
                    </button>

                    {/* Stat Bar */}
                    <div className="flex flex-wrap gap-6 mt-8">
                        <StatBox number="10+" label="Years Experience" />
                        <StatBox number="5000+" label="Clients Trained" />
                        <StatBox number="20+" label="Programs Created" />
                    </div>
                </div>
            </div>
        </section>
    );
};

// Stat Box Sub-component
const StatBox = ({ number, label }) => (
    <div className="text-center">
        <h3 className="text-2xl font-bold text-black">{number}</h3>
        <p className="text-gray-600">{label}</p>
    </div>
);

export default About;

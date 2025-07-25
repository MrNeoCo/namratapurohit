import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {

    const navigate = useNavigate();
    return (
        <div className="w-full min-h-screen bg-white text-black">
            {/* Hero Banner */}
            <section className="px-6 py-20 text-center text-white"
                style={{
                    background: "linear-gradient(90deg, #22C1C3 0%, #FDBB2D 100%)",
                }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                    Meet Namrata Purohit
                </motion.h1>
                <p className="text-lg text-rose-50 max-w-2xl mx-auto">
                    A journey of strength, passion, and purpose – empowering thousands through fitness and Pilates.
                </p>
            </section>

            {/* Detailed Bio */}
            <section className="px-6 py-16 max-w-5xl mx-auto space-y-6">
                <h2 className="text-3xl font-semibold">Her Story</h2>
                <p className="text-gray-700 leading-relaxed">
                    Namrata Purohit is one of India’s leading Pilates instructors, known for training celebrities, athletes, and fitness enthusiasts alike. Starting her fitness journey at a young age, she co-founded The Pilates Studio and became one of the youngest certified Stott Pilates instructors globally.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Her dedication to making fitness fun and accessible has inspired thousands. She combines Pilates, EMS, and other modalities to create holistic programs that are safe, effective, and tailored to all body types.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    With a strong background in sports science and a passion for helping others, Namrata continues to revolutionize the Indian fitness scene with her innovative training style.
                </p>
            </section>

            {/* Image Gallery / Full Width */}
            <section className="px-6 py-10 bg-gray-50">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto ">
                    {["1.jpg", "3.jpg", "2.jpg"].map((img, i) => (
                        <motion.img
                            key={i}
                            src={`/images/gallery/${img}`}
                            alt="Namrata Gallery"
                            className="rounded-xl object-cover object-top w-full h-72"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.4 }}
                        />
                    ))}
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="px-6 py-16 max-w-5xl mx-auto text-center space-y-6">
                <h2 className="text-3xl font-semibold">Her Philosophy</h2>
                <p className="text-gray-700 leading-relaxed">
                    “Fitness is not about perfection, it’s about progress. It’s about loving your body and nurturing it with strength, movement, and care.”
                </p>
                <p className="text-gray-700">
                    Namrata believes in fitness that fits into your life – not the other way around. Her goal is to help people feel good in their own skin, no matter where they are starting from.
                </p>
            </section>

            {/* CTA Bottom */}
            <section className="px-6 py-12 bg-black text-white text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Begin Your Journey?</h3>
                <p className="mb-6">Join one of Namrata’s exclusive programs and transform your body & mind.</p>
                <button
                    onClick={() => navigate("/productdetail")}
                    className="px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-300 transition">
                    Explore Programs
                </button>
            </section>
        </div>
    );
};

export default About;

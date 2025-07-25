import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
    };

    // Auto-hide thank you message
    useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => setSubmitted(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [submitted]);

    return (
        <section
            className="w-full min-h-screen flex items-center justify-center px-4 py-20 md:px-10"
            style={{
                background: "radial-gradient(#DED1D1 0%, #097975 30%, #121212 100%)",
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-3xl bg-white/10 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20 text-white"
            >
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-2">Get in Touch</h2>
                    <p className="text-lg text-gray-200 mb-6">
                        We'd love to hear from you! Drop your details and we’ll connect back soon.
                    </p>
                </div>

                {submitted && (
                    <div className="mb-6 text-green-200 text-center font-semibold bg-green-800/40 p-3 rounded-xl">
                        ✅ Thank you! Your message has been sent.
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="👤 Your Full Name"
                        className="w-full px-5 py-3 rounded-xl bg-white/80 text-gray-800 shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-200 placeholder-gray-600"
                    />
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="📧 Your Email Address"
                        className="w-full px-5 py-3 rounded-xl bg-white/80 text-gray-800 shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-200 placeholder-gray-600"
                    />
                    <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="💬 Type your message here..."
                        rows="4"
                        className="w-full px-5 py-3 rounded-xl bg-white/80 text-gray-800 shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-200 placeholder-gray-600"
                    ></textarea>

                    <div className="text-center pt-2">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-green-300 to-blue-500 hover:from-blue-500 hover:to-green-300 text-white font-semibold text-xl px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                        >
                            Connect Now
                        </button>
                    </div>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;

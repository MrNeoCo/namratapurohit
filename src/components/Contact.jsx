import { motion } from "framer-motion";
import { useState } from "react";

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

    return (
        <section
            className="w-full py-20 px-4 md:px-10"
            style={{
                background: "radial-gradient(#DED1D1 0%, #097975 30%, #121212 100%)",
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto text-center"
            >
                <h2 className="text-4xl font-bold text-gray-100 mb-4">Get in Touch</h2>
                <p className="text-lg text-gray-200 mb-8">
                    We'd love to hear from you! Drop your details and we’ll connect back soon.
                </p>

                {submitted && (
                    <div className="mb-6 text-green-700 font-semibold">
                        ✅ Thank you! Your message has been sent.
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="👤 Your Full Name"
                        className="w-full px-5 py-3 rounded-xl bg-white shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-800 placeholder-gray-500"
                    />
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="📧 Your Email Address"
                        className="w-full px-5 py-3 rounded-xl bg-white shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-800 placeholder-gray-500"
                    />
                    <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="💬 Type your message here..."
                        rows="4"
                        className="w-full px-5 py-3 rounded-xl bg-white shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-800 placeholder-gray-500"
                    ></textarea>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-green-200 to-blue-500 hover:from-blue-500 hover:to-green-200 text-white font-semibold text-3xl px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
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

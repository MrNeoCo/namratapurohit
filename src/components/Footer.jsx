import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer
            className="relative py-16 text-white"
            style={{
                backgroundImage: `url('/images/footer/black.jpeg')`, // Add your image in public/images/
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10">
                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><button onClick={() => navigate('/about')} className="hover:underline">About</button></li>
                        <li><button onClick={() => navigate('/products')} className="hover:underline">Programs</button></li>
                        <li><button onClick={() => navigate('/contact')} className="hover:underline">Contact</button></li>
                    </ul>
                </div>

                {/* Social & Contact */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Connect</h3>
                    <p>Follow me on social media:</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="https://instagram.com/namratapurohit" className="hover:underline">Instagram</a>
                        <a href="https://www.facebook.com/NamrataPurohit248/" className="hover:underline">Facebook</a>
                    </div>
                </div>

                {/* Copyright */}
                <div>
                    <h3 className="text-xl font-bold mb-4">The Pilates Studio</h3>
                    <p>© {new Date().getFullYear()} The Pilates Studio</p>
                    <p>made with ❤️ by GRATITUDE</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

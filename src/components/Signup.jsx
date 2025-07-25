// Signup.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSignup = (e) => {
        e.preventDefault();

        // Store user in localStorage (mock backend)
        localStorage.setItem("user", JSON.stringify(form));
        alert("Signup successful!");

        navigate("/login"); // Redirect to login
    };

    return (
        <div className="h-screen w-full bg-gradient-to-br from-purple-300 to-blue-300 flex justify-center items-center">
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/20"
            >
                <h2 className="text-white text-2xl font-bold mb-6 text-center">
                    Create Account
                </h2>
                <form onSubmit={handleSignup} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full p-3 rounded-lg bg-white/20 placeholder-white text-white outline-none border border-white/30"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full p-3 rounded-lg bg-white/20 placeholder-white text-white outline-none border border-white/30"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        placeholder="Password"
                        className="w-full p-3 rounded-lg bg-white/20 placeholder-white text-white outline-none border border-white/30"
                        required
                    />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="w-full bg-white/30 backdrop-blur-lg text-white font-semibold py-3 rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/40"
                    >
                        Sign Up
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default Signup;

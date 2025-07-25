// Login.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError(""); // Clear error when typing
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const savedUser = JSON.parse(localStorage.getItem("user"));

        if (
            savedUser &&
            savedUser.email === form.email &&
            savedUser.password === form.password
        ) {
            alert("Login successful!");
            navigate("/"); // Go to home or dashboard
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="h-screen w-full bg-gradient-to-br from-indigo-400 to-blue-400 flex justify-center items-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/20"
            >
                <h2 className="text-white text-2xl font-bold mb-6 text-center">
                    Login to Your Account
                </h2>
                <form onSubmit={handleLogin} className="space-y-4">
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
                    {error && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-red-300 text-sm"
                        >
                            {error}
                        </motion.p>
                    )}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="w-full bg-white/30 backdrop-blur-lg text-white font-semibold py-3 rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/40"
                    >
                        Login
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default Login;

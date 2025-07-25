import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Login from './../components/Login';

const AuthHome = () => {
    const navigate = useNavigate();

    return (
        <div className="h-screen w-full overflow-hidden relative flex items-center justify-center bg-black">
            {/* 🔮 Colorful Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 animate-gradient-xy blur-2xl opacity-70 z-0" />

            {/* 🌟 Foreground Content */}
            <div className="relative z-10 text-center p-8 max-w-xl w-full">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg"
                >
                    Unleash Your <span className="text-yellow-300">Health Power</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-white/90 mt-4 text-lg"
                >
                    Begin your fitness journey with technology and dedication.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-10 flex gap-6 justify-center"
                >
                    <button
                        onClick={() => navigate("/login")}
                        className="px-6 py-3 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-xl hover:bg-white/20 hover:scale-105 transition-all duration-300"
                    >
                        Login
                    </button>
                    <button
                        onClick={() => navigate("/signup")}
                        className="px-6 py-3 bg-yellow-300 text-black font-semibold rounded-xl hover:bg-yellow-400 hover:scale-105 transition-all duration-300"
                    >
                        Signup
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default AuthHome;

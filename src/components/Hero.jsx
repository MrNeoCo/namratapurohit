import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
    const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section ref={ref}
            className="relative h-screen w-full overflow-hidden bg-gray-900 text-white">
            {/* 🎥 Background Video */}
            <motion.video
                style={{ scale: bgScale }}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-140 z-0 pointer-events-none"

            >
                <source src="/videos/bgdark.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </motion.video>

            {/* 🧊 Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10" />

            {/* 🌟 Hero Content */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold"
                >
                    Train with the Best |{" "}
                    <span className="bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 bg-clip-text text-transparent animate-textShimmer font-extrabold tracking-wide">
                        Namrata Purohit
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                    className="text-lg md:text-xl mt-4 max-w-xl text-gray-200"
                >
                    Redefining fitness with grace, strength & Pilates precision.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.6 }}
                    className="mt-6 flex gap-4 flex-wrap justify-center"
                >
                    <button
                        onClick={() => navigate("/authhome")}
                        className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105"
                    >
                        Join My Classes
                    </button>
                    <button
                        onClick={() => navigate("/about")}
                        className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
                        Read Me
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30"
            >
                <ArrowDown size={32} className="text-white drop-shadow-lg animate-pulse" />
            </motion.div>
        </section>
    );
};

export default Hero;

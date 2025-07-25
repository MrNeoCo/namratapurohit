// src/pages/Products.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaDumbbell, FaBolt, FaRunning, FaWater, FaSpa, FaHeartbeat } from "react-icons/fa";

const services = [
    {
        title: "Pilates",
        desc: "Strengthen core, improve posture & flexibility.",
        icon: <FaDumbbell />,
        link: "/productdetail",
        color: "pink",
    },
    {
        title: "EMS Training",
        desc: "Muscle activation via Electric Muscle Stimulation.",
        icon: <FaBolt />,
        link: "/productdetail",
        color: "blue",
    },
    {
        title: "Core Stix",
        desc: "Functional resistance training for full-body control.",
        icon: <FaRunning />,
        link: "/productdetail",
        color: "green",
    },
    {
        title: "Flowin",
        desc: "Slide-based movement for strength & fluidity.",
        icon: <FaWater />,
        link: "/productdetail",
        color: "purple",
    },
    {
        title: "Physio Care",
        desc: "Recovery & pain management by experts.",
        icon: <FaSpa />,
        link: "/productdetail",
        color: "orange",
    },
    {
        title: "Posture Rehab",
        desc: "Corrective movements & spine alignment.",
        icon: <FaHeartbeat />,
        link: "/productdetail",
        color: "red",
    },
];

const colorMap = {
    pink: { bg: "bg-pink-50", icon: "text-pink-600", border: "border-pink-600" },
    blue: { bg: "bg-blue-50", icon: "text-blue-600", border: "border-blue-600" },
    green: { bg: "bg-green-50", icon: "text-green-600", border: "border-green-600" },
    purple: { bg: "bg-purple-50", icon: "text-purple-600", border: "border-purple-600" },
    orange: { bg: "bg-orange-50", icon: "text-orange-600", border: "border-orange-600" },
    red: { bg: "bg-red-50", icon: "text-red-600", border: "border-red-600" },
};

export default function Products() {
    return (
        <div
            className="min-h-screen bg-cover bg-center relative"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1752606402449-0c14a2d6af70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
        >
            {/* FIXED overlay using bg-black with inline opacity */}
            <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>

            <div className="relative z-10 text-white text-center py-16 px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore All Programs</h1>
                <p className="text-lg max-w-2xl mx-auto">
                    Each program is tailored to your body and fitness goals.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-4 max-w-6xl mx-auto">
                    {services.map((svc, index) => {
                        const c = colorMap[svc.color];
                        return (
                            <Link to={svc.link} key={index}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className={`${c.bg} ${c.border} border-2 rounded-3xl shadow-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all`}
                                >
                                    <div className={`${c.icon} text-4xl mb-4`}>{svc.icon}</div>
                                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{svc.title}</h2>
                                    <p className="text-gray-700 text-sm">{svc.desc}</p>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>

    );
}

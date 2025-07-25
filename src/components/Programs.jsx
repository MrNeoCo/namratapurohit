import { FaDumbbell, FaLaptop, FaBuilding, FaHeartbeat } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Quote } from "lucide-react";




const programs = [
    {
        title: 'Personal Pilates Training',
        description: 'Tailored 1-on-1 sessions focused on your specific fitness goals and flexibility needs.',
        icon: <FaDumbbell className="text-pink-500 text-4xl mb-4" />,
        bg: 'bg-pink-50'
    },
    {
        title: 'Online Courses / App',
        description: 'Access guided routines and exclusive content from anywhere through the app.',
        icon: <FaLaptop className="text-blue-500 text-4xl mb-4" />,
        bg: 'bg-blue-50'
    },
    {
        title: 'Corporate Wellness',
        description: 'Wellness programs designed to energize teams and reduce workplace stress.',
        icon: <FaBuilding className="text-green-500 text-4xl mb-4" />,
        bg: 'bg-green-50'
    },
    {
        title: 'Special Populations Program',
        description: 'Gentle Pilates designed for seniors, prenatal clients, or post-injury recovery.',
        icon: <FaHeartbeat className="text-red-500 text-4xl mb-4" />,
        bg: 'bg-red-50'
    }
];

const ProgramsSection = () => {
    const navigate = useNavigate();
    return (
        <section className="w-full py-16 px-4 bg-blue-300" id="programs">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">What I Offer</h2>

                <div className="flex flex-wrap justify-center gap-6">
                    {programs.map((item, index) => (
                        <div
                            key={index}
                            className={`w-full sm:w-[48%] lg:w-[23%] ${item.bg} p-6 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center`}

                        >
                            <div className="flex justify-center">{item.icon}</div>
                            <h3 className="text-lg md:text-xl font-semibold mb-2 text-slate-800 mt-3">{item.title}</h3>
                            <p className="text-sm md:text-base text-gray-700 mt-15">{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <button
                        onClick={() => navigate("/products")}
                        className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300">
                        View All Programs
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProgramsSection;

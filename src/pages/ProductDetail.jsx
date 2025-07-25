// src/pages/Training.jsx
import { useNavigate } from "react-router-dom";

const Training = () => {
    const navigate = useNavigate();

    const trainingPrograms = [
        {
            title: "Strength Training",
            description: "Build muscle and improve endurance through guided strength exercises.",
            image: "/images/productDetails/training1.jpg",
        },
        {
            title: "Yoga & Flexibility",
            description: "Increase flexibility and reduce stress with calming yoga sessions.",
            image: "/images/productDetails/training2.jpg",
        },
        {
            title: "HIIT Workouts",
            description: "High-Intensity Interval Training to burn fat and boost metabolism.",
            image: "/images/productDetails/training3.jpg",
        },
        {
            title: "Cardio Conditioning",
            description: "Improve your heart health with energetic cardio routines.",
            image: "/images/productDetails/training4.jpg",
        },
        {
            title: "Functional Fitness",
            description: "Enhance daily movement with functional training techniques.",
            image: "/images/productDetails/training5.jpg",
        },
        {
            title: "Personal Coaching",
            description: "One-on-one guidance tailored to your unique health goals.",
            image: "/images/productDetails/training6.jpg",
        },
    ];

    return (
        <section className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-gray-800 to-black py-16 px-4 md:px-12 text-white">
            <h2 className="text-4xl font-bold text-center mb-12">Our Training Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {trainingPrograms.map((program, index) => (
                    <div
                        key={index}
                        className="bg-white/10 backdrop-blur-md p-5 rounded-2xl shadow-xl flex flex-col justify-between h-[420px] hover:shadow-2xl transition-shadow duration-300"
                    >
                        <div>
                            <img
                                src={program.image}
                                alt={program.title}
                                className="rounded-xl mb-4 w-full h-60 object-cover object-top"
                            />
                            <h3 className="text-xl font-semibold text-white mb-2">{program.title}</h3>
                            <p className="text-gray-200 text-sm">{program.description}</p>
                        </div>

                        <button
                            onClick={() => navigate("/signup")}
                            className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full shadow hover:scale-105 transition-all duration-300"
                        >
                            Book a Session
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Training;

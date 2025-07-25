import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
    {
        name: "JACQUELINE FERNANDEZ",
        role: "Actress",
        text: "A lot of the times I forget that Namrata is my trainer as she makes workouts an experience that I would enjoy with a friend.",
        image: "/images/testimonial/JACQUELINE.jpeg",
    },
    {
        name: "JHANVI KAPOOR",
        role: "Actress, Fitness Enthusiast",
        text: "Pilates with Namrata has literally changed my life and how I see my body. Which in turn has completely changed my mindset too, for the better.",
        image: "/images/testimonial/jhanvi.jpeg",
    },
    {
        name: "LAUREN GOTTLIEB",
        role: "American dancer and actress",
        text: "Joining the Pilates studio was one of the best things I’ve done! To workout with Namrata is so much of fun because she makes me do different things every session.",
        image: "/images/testimonial/LAUREN.jpeg",
    },
    {
        name: "ELLI AVRRAM",
        role: "Swedish-Greek actress",
        text: "I have been doing Pilates for about 5 years now. When I moved to Mumbai and was looking for a Pilates instructor I kept hearing just one name. After meeting Namrata I quickly realized why everyone was raving about her.",
        image: "/images/testimonial/Elli AvrRam.jpeg",
    },
    {
        name: "Manasi Scott",
        role: "Indian singer and songwriter",
        text: "Over time I have realised that for me, being fit is far more important than simple weight loss or muscle gain and that my mind must stay as focused and fit as well.",
        image: "/images/testimonial/Manasi.jpeg",
    },
    {
        name: "Neha Dhupia",
        role: "Indian actress and model",
        text: "Getting trained by Namrata is an extremely pleasing experience for the mind and a grilling experience physically, which according to me is a great way to start the day.",
        image: "/images/testimonial/Neha Duphia.jpeg",
    },
    {
        name: "Vishal Dadlani",
        role: "Indian singer and songwriter",
        text: "Namrata is a real pain to work with, and I mean that as a compliment! She’s merciless and, what’s worse, it comes with a smile, so you don’t feel the pain until the next day. It is good pain though. She has really sorted me out.",
        image: "/images/testimonial/Vishal.jpeg",
    },
];

const TestimonialCarousel = () => {
    return (
        <div
            className="py-20"
            style={{
                background: "linear-gradient(180deg, #097975 30%, #121212 100%)",
            }}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-14">
                    What Celebrities Say About Us
                </h2>

                <Swiper
                    navigation={true}
                    loop={true}
                    modules={[Navigation]}
                    className="w-full"
                >
                    {testimonials.map((t, index) => (
                        <SwiperSlide key={index}>
                            <div className="grid md:grid-cols-2 gap-8 items-center text-center md:text-left">
                                {/* Image (Now on the left) */}
                                <div className="flex justify-center md:justify-start">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 object-cover object-top rounded-full"
                                    />
                                </div>

                                {/* Text Card (Now on the right) */}
                                <div className="bg-gray-100 p-6 md:p-8 rounded-2xl">
                                    <p className="text-base md:text-lg text-gray-800 mb-6 leading-relaxed">
                                        “{t.text}”
                                    </p>
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                                        {t.name}
                                    </h3>
                                    <p className="text-sm text-gray-600">{t.role}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default TestimonialCarousel;

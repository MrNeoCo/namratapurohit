import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // you can also use any icon lib

const Nav = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const navLinks = [
        { to: "/", text: "Home" },
        { to: "products", text: "Service" },
        { to: "productdetail", text: "Training" },
        { to: "about", text: "About" },
        { to: "authhome", text: "Get Started" },
    ];

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
                {/* Desktop Navbar */}
                <div className="hidden md:flex justify-center mt-4">
                    <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-10 py-3 flex gap-8 shadow-lg">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                className={({ isActive }) =>
                                    `transition-colors duration-200 hover:text-green-300 ${isActive ? "text-green-300" : "text-white"
                                    }`
                                }
                                to={link.to}
                            >
                                {link.text}
                            </NavLink>
                        ))}
                    </div>
                </div>

                {/* Mobile Navbar */}
                <div className="md:hidden flex justify-between items-center py-3">
                    <h1 className="text-xl font-light bg-gradient-to-r from-[#EEAECA] via-[#D1C4E9] to-[#94BBE9] bg-clip-text text-transparent font-[Brush_Script_MT,cursive]">
                        Namrata Purohit
                    </h1>



                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white"
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {menuOpen && (
                    <div className="md:hidden bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-4 shadow-lg mt-2 space-y-4">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                className={({ isActive }) =>
                                    `block transition-colors duration-200 hover:text-green-300 ${isActive ? "text-green-300" : "text-white"
                                    }`
                                }
                                to={link.to}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.text}
                            </NavLink>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Nav;

import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from '../pages/Home'
import Products from '../pages/Products'
import ProductDetail from "../pages/ProductDetail"
// import Login from "../pages/AuthHome"
import About from "../pages/About"
import Contact from './../components/Contact';
import TestimonialCarousel from '../components/TestimonialCarousel'
import Signup from './../components/Signup';
import AuthHome from './../pages/AuthHome';
import Login from './../components/Login';


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            {/* <Route path="/products/:id" element={<ProductDetail />} /> */}
            <Route path="/productdetail" element={<ProductDetail />} />
            <Route path="/authhome" element={<AuthHome />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonial" element={<TestimonialCarousel />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

        </Routes>
    );
}

export default AppRouter;
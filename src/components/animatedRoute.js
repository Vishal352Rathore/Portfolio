import React from "react";
import {
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import About from '../components/about/about'
import Home from '../components/home/home'
import Project from '../components/projects/project'
import Contact from './contact/contact'
import Services from "../components/services/service";
import { AnimatePresence } from 'framer-motion'
export default function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/project" element={<Project />} />
            </Routes>
         </AnimatePresence>
    );
}
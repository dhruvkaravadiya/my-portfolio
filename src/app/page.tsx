import React, { useState } from "react";
import MarqueeAnimation from "@/components/marquee-animation";
import TopNavbar from "@/components/top-navbar";
import HeroSection from "@/components/sections/hero-section";
import Projects from "@/components/sections/projects";
import FloatingNavbar from "@/components/floating-navbar";
import IconGrid from "@/components/sections/skills-section";
import Services from "@/components/sections/services";
import Contact from "@/components/sections/contact-form";
import Footer from "@/components/sections/footer";
export default function Home() {
    return (
        <>
            <main className="bg-white">
                {/* Navbar */}
                <div className="">
                    <TopNavbar />
                </div>
                {/* Marquee for Small Devices */}
                <div className="lg:hidden md:hidden w-full p-3 flex  justify-center items-center">
                    <MarqueeAnimation />
                </div>
                {/* Hero Section */}
                <div id="about">
                    <HeroSection />
                </div>
                {/* Projects section */}
                <div id="projects">
                    <Projects />
                </div>
                {/* SKills Icon Grid */}
                <div id="skills">
                    <IconGrid />
                </div>
                {/* Services Section */}
                <div id="services">
                    <Services />
                </div>
                {/* Contact Form
                <div id="contact">
                    <Contact />
                </div> */}
                {/* Footer */}
                <div id="contact">
                    <Footer />
                </div>
                {/* Floating Navbar */}
                <div className="sm:hidden hidden md:flex lg:flex fixed left-0 bottom-4 w-full justify-center">
                    <div className="w-auto bg-white rounded-full p-2 shadow-[1px_2px_18px_0px_#63b3ed,1px_2px_18px_0px_#ed64a6]">
                        <FloatingNavbar />
                    </div>
                </div>
            </main>
        </>
    );
}

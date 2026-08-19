import React from "react";
import MarqueeAnimation from "@/components/marquee-animation";
import TopNavbar from "@/components/top-navbar";
import HeroSection from "@/components/sections/hero-section";
import Projects from "@/components/sections/projects";
import FloatingNavbar from "@/components/floating-navbar";
import IconGrid from "@/components/sections/skills-section";
import Services from "@/components/sections/services";
import StatsSection from "@/components/sections/stats-section";
import Footer from "@/components/sections/footer";

export default function Home() {
    return (
        <>
            <main className="bg-cream">
                {/* Navbar */}
                <div className="">
                    <TopNavbar />
                </div>
                {/* Marquee for Small Devices */}
                <div className="md:hidden w-full p-3 flex justify-center items-center">
                    <MarqueeAnimation />
                </div>
                {/* Hero Section */}
                <div id="about">
                    <HeroSection />
                </div>
                {/* Stats bar */}
                <StatsSection />
                {/* Projects section */}
                <div id="projects">
                    <Projects />
                </div>
                {/* Skills Honeycomb */}
                <div id="skills">
                    <IconGrid />
                </div>
                {/* Services Section */}
                <div id="services">
                    <Services />
                </div>
                {/* Footer */}
                <div id="contact">
                    <Footer />
                </div>
                {/* Floating Navbar */}
                <div className="sm:hidden hidden md:flex lg:flex fixed left-0 bottom-4 w-full justify-center z-30">
                    <div className="w-auto">
                        <FloatingNavbar />
                    </div>
                </div>
            </main>
        </>
    );
}

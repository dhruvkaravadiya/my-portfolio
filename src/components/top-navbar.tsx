"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Button } from "@nextui-org/button";

export default function TopNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems = ["About", "Projects", "Skills", "Services", "Contact"];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = (sectionId: any) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className="flex px-4 md:px-8 items-center h-20 justify-between border-b-[3px] border-ink bg-cream sticky top-0 z-40">
                <div className="flex items-center gap-3">
                    <button
                        className="text-ink md:hidden text-xl mr-1"
                        onClick={toggleMenu}
                        aria-label="Open menu"
                    >
                        <FiMenu />
                    </button>
                    <div className="w-9 h-9 bg-ink flex items-center justify-center text-cream font-display text-xs -rotate-3">
                        DK
                    </div>
                    <span className="text-ink font-display text-base uppercase tracking-tight">
                        Dhruv Karavadiya
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-1 font-mono text-xs">
                    {menuItems.map((item, i) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={(e) => {
                                e.preventDefault();
                                handleMenuItemClick(item.toLowerCase());
                            }}
                            className="group flex items-center gap-1.5 uppercase tracking-wide text-ink/70 hover:text-ink px-3 py-2 transition-colors"
                        >
                            <span className="text-signal">0{i + 1}</span>
                            <span className="border-b border-transparent group-hover:border-ink">
                                {item}
                            </span>
                        </a>
                    ))}
                </div>

                <Button
                    radius="none"
                    className="notch bg-ink font-mono text-xs uppercase tracking-wide border-2 border-ink text-cream hover:bg-signal hover:border-signal hover:text-ink transition-colors"
                    onClick={() => window.open("https://bit.ly/dhruvresumev2")}
                    endContent={<FaArrowTrendUp />}
                >
                    Resume
                </Button>
            </nav>

            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-50 bg-ink/40"
                    onClick={toggleMenu}
                ></div>
            )}
            <div
                className={`${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                } transform md:hidden fixed inset-y-0 left-0 z-50 w-64 bg-cream border-r-[3px] border-ink overflow-y-auto ease-in-out transition-all duration-300`}
            >
                <div className="p-4 flex justify-between items-center border-b-[3px] border-ink">
                    <span className="font-display uppercase text-sm text-ink">
                        Menu
                    </span>
                    <button
                        className="text-ink text-xl"
                        onClick={toggleMenu}
                        aria-label="Close menu"
                    >
                        <FiX />
                    </button>
                </div>
                <div className="flex flex-col">
                    {menuItems.map((item, index) => (
                        <a
                            key={`${item}-${index}`}
                            className="p-4 font-mono uppercase text-xs tracking-wide text-ink border-b border-ink/10 hover:bg-signal hover:text-cream transition-colors flex items-center gap-3"
                            href={`#${item.toLowerCase()}`}
                            onClick={() => handleMenuItemClick(item.toLowerCase())}
                        >
                            <span className="text-signal">0{index + 1}</span>
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}

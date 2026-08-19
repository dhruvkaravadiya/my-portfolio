"use client";
import React from "react";

export default function FloatingNavbar() {
    const handleMenuItemClick = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    const menuItems = ["About", "Projects", "Skills", "Services", "Contact"];
    return (
        <div className="flex items-center gap-1 bg-ink px-2 py-2 border-2 border-ink shadow-hard-signal">
            {menuItems.map((item) => (
                <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                        e.preventDefault();
                        handleMenuItemClick(item.toLowerCase());
                    }}
                    className="group text-cream text-xs font-mono uppercase tracking-wide px-4 py-2 hover:bg-signal hover:text-ink transition-colors flex items-center gap-1.5"
                >
                    <span className="text-signal group-hover:text-ink">·</span>
                    {item}
                </a>
            ))}
        </div>
    );
}

"use client";
import React from "react";
import { Button, ButtonGroup } from "@nextui-org/button";

export default function FloatingNavbar() {
    const handleMenuItemClick = (sectionId: any) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    const menuItems = ["About", "Projects", "Skills", "Services", "Contact"];
    return (

        <ButtonGroup radius="full" className="bg-white  ">

            {menuItems.map((item, index) => (
                <Button key={`${item}-${index}`} className="text-black bg-white font-medium">
                    <a
                        key={`${item}-${index}`}
                        className=""
                        href={`#${item.toLowerCase()}`}
                        onClick={() => handleMenuItemClick(item.toLowerCase())} 
                    >
                        {item}
                    </a>
                </Button>
            ))}

        </ButtonGroup>

    );
}


"use client";
import React from "react";
import { Button, ButtonGroup } from "@nextui-org/button";

export default function FloatingNavbar() {
    const menuItems = ["About", "Projects", "Skills", "Services", "Contact"];
    return (
        
                <ButtonGroup radius="full" className="bg-white  ">

                    {menuItems.map((item, index) => (
                        <Button key={`${item}-${index}`} className="text-black bg-white font-medium">
                            {item}
                        </Button>
                    ))}
                   
                </ButtonGroup>
            
    );
}


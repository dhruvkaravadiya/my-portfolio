"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import MarqueeAnimation from "@/components/marquee-animation";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Button } from "@nextui-org/button";
export default function TopNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["About", "Projects", "Skills", "Services", "Contact"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (sectionId:any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };


  return (
    <>
      <nav className="flex px-3 items-center h-20 justify-between border-b border-gray-200">
        <div className="p-2 flex items-center">
          <button
            className="text-black md:hidden text-lg font-black mr-4"
            onClick={toggleMenu}
          >
            <FiMenu />
          </button>
          <span className="text-black md:ms-14 text-lg font-bold">dhruvkaravadiya.</span>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <MarqueeAnimation />
        </div>

        <Button className="bg-transparent font-medium border-2 shadow-lg border-slate-800 min-h-4 md:me-14 text-black"
          onClick={() => window.open("https://bit.ly/dhruvresumev2")}
          endContent={<FaArrowTrendUp />}>
          Resume
        </Button>
      </nav>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-25"
          onClick={toggleMenu}
        ></div>
      )}
      <div
        className={`${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transform lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white overflow-y-auto ease-in-out transition-all duration-300`}
      >
        <div className="p-4">
          <Button
            className="text-black text-lg font-black"
            onClick={toggleMenu}
          >
            Close
          </Button>
        </div>
        <div className="flex flex-col">
          {menuItems.map((item, index) => (
            <a
              key={`${item}-${index}`}
              className="p-4 text-gray-700 hover:bg-gray-100"
              href={`#${item.toLowerCase()}`} // Use the section name as the id
              onClick={() => handleMenuItemClick(item.toLowerCase())} // Pass the section id to the click handler
            >
              {item}
            </a>

          ))}
        </div>
      </div>
    </>
  );
}
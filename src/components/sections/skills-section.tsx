import React from "react";

import { FaGithub } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { SiNextui } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { SiDaisyui } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { IoLogoPython } from "react-icons/io";
import { SiGnubash } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiRedis } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { IoLogoDocker } from "react-icons/io5";
import { SiLinux } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { SiJest } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiBabel } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { BsStripe } from "react-icons/bs";
import { SiSocketdotio } from "react-icons/si";
import { SiCloudinary } from "react-icons/si";
import { SiAmazonaws } from "react-icons/si";
const icons = [
    { icon: <FaHtml5 />, link: "https://github.com" },
    { icon: <FaCss3Alt />, link: "https://github.com" },
    { icon: <RiJavascriptFill />, link: "https://github.com" }, 
    { icon: <BiLogoTypescript/>, link: "https://github.com" }, 
    { icon: <SiNextui/>, link: "https://github.com" }, 
    { icon: <SiShadcnui/>, link: "https://github.com" }, 
    { icon: <SiDaisyui/>, link: "https://github.com" }, 
    { icon: <SiBootstrap/>, link: "https://github.com" }, 
    { icon: <FaJava/>, link: "https://github.com" }, 
    { icon: <IoLogoPython/>, link: "https://github.com" }, 
    { icon: <RiNextjsFill/>, link: "https://github.com" }, 
    { icon: <IoLogoNodejs/>, link: "https://github.com" }, 
    { icon: <SiGnubash/>, link: "https://github.com" }, 
    { icon: <SiExpress/>, link: "https://github.com" }, 
    { icon: <SiRedux/>, link: "https://github.com" }, 
    { icon: <SiMongodb/>, link: "https://github.com" }, 
    { icon: <SiRedis/>, link: "https://github.com" }, 
    { icon: <DiMsqlServer/>, link: "https://github.com" }, 
    { icon: <SiPostgresql/>, link: "https://github.com" },

    { icon: <IoLogoDocker/>, link: "https://github.com" },
    { icon: <SiLinux/>, link: "https://github.com" },
    { icon: <FaGitAlt/>, link: "https://github.com" },
    { icon: <SiJest/>, link: "https://github.com" },
    { icon: <SiBabel/>, link: "https://github.com" },
    { icon: <SiVite/>, link: "https://github.com" },
    { icon: <SiTailwindcss/>, link: "https://github.com" },
    { icon: <SiFigma/>, link: "https://github.com" },
    { icon: <SiGraphql/>, link: "https://github.com" },
    { icon: <SiPostman/>, link: "https://github.com" },
    { icon: <BsStripe/>, link: "https://github.com" },    
    { icon: <SiSocketdotio/>, link: "https://github.com" },
    { icon: <SiCloudinary/>, link: "https://github.com" },
    { icon: <SiAmazonaws/>, link: "https://github.com" },
   ];

const IconGrid = () => {
    return (
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-lg sm:py-16 lg:px-6 flex flex-col gap-6 items-center">
          <h2 className="mb-12 text-4xl font-extrabold text-black">My Top Skills</h2>
          <div className="flex flex-wrap justify-center">
            {icons.map((item, index) => (
              <div
                key={index}  
              >
                {React.cloneElement(item.icon, {
                  className: "h-14 w-14 fill-slate-800 bg-white border border-2 border-slate-800 shadow-md rounded-xl m-1.5 transition duration-300 ease-in-out transform hover:bg-slate-800 hover:border-transparent p-2 bg-green-400 transition hover:fill-white",
                })}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default IconGrid;
  
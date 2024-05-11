import React from "react";
import { Tooltip } from "@nextui-org/tooltip";
import { Button } from "@nextui-org/button";
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
    { icon: <FaHtml5 />, name: "HTML", link: "https://github.com" },
    { icon: <FaCss3Alt />, name: "CSS", link: "https://github.com" },
    {
        icon: <RiJavascriptFill />,
        name: "JavaScript",
        link: "https://github.com",
    },
    {
        icon: <BiLogoTypescript />,
        name: "TypeScript",
        link: "https://github.com",
    },
    { icon: <SiNextui />, name: "Next.js UI", link: "https://github.com" },
    { icon: <SiShadcnui />, name: "Shadcn UI", link: "https://github.com" },
    { icon: <SiDaisyui />, name: "Daisy UI", link: "https://github.com" },
    { icon: <SiBootstrap />, name: "Bootstrap", link: "https://github.com" },
    { icon: <FaJava />, name: "Java", link: "https://github.com" },
    { icon: <IoLogoPython />, name: "Python", link: "https://github.com" },
    { icon: <RiNextjsFill />, name: "Next.js", link: "https://github.com" },
    { icon: <IoLogoNodejs />, name: "Node.js", link: "https://github.com" },
    { icon: <SiGnubash />, name: "GNU Bash", link: "https://github.com" },
    { icon: <SiExpress />, name: "Express.js", link: "https://github.com" },
    { icon: <SiRedux />, name: "Redux", link: "https://github.com" },
    { icon: <SiMongodb />, name: "MongoDB", link: "https://github.com" },
    { icon: <SiRedis />, name: "Redis", link: "https://github.com" },
    {
        icon: <DiMsqlServer />,
        name: "Microsoft SQL Server",
        link: "https://github.com",
    },
    { icon: <SiPostgresql />, name: "PostgreSQL", link: "https://github.com" },

    { icon: <IoLogoDocker />, name: "Docker", link: "https://github.com" },
    { icon: <SiLinux />, name: "Linux", link: "https://github.com" },
    { icon: <FaGitAlt />, name: "Git", link: "https://github.com" },
    { icon: <SiJest />, name: "Jest", link: "https://github.com" },
    { icon: <SiBabel />, name: "Babel", link: "https://github.com" },
    { icon: <SiVite />, name: "Vite", link: "https://github.com" },
    {
        icon: <SiTailwindcss />,
        name: "Tailwind CSS",
        link: "https://github.com",
    },
    { icon: <SiFigma />, name: "Figma", link: "https://github.com" },
    { icon: <SiGraphql />, name: "GraphQL", link: "https://github.com" },
    { icon: <SiPostman />, name: "Postman", link: "https://github.com" },
    { icon: <BsStripe />, name: "Stripe", link: "https://github.com" },
    { icon: <SiSocketdotio />, name: "Socket.IO", link: "https://github.com" },
    { icon: <SiCloudinary />, name: "Cloudinary", link: "https://github.com" },
    {
        icon: <SiAmazonaws />,
        name: "Amazon Web Services",
        link: "https://github.com",
    },
];

const IconGrid = () => {
    return (
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-lg sm:py-16 lg:px-6 flex flex-col gap-6 items-center">
                <h2 className="mb-12 text-4xl font-extrabold text-black">
                    My Top Skills
                </h2>
                <div className="flex flex-wrap justify-center">
                    {icons.map((item, index) => (
                        <Tooltip
                            key="top"
                            placement="top"
                            content={item.name}
                            classNames={{
                                base: [
                                    // arrow color
                                    "before:bg-slate-700",
                                ],
                                content: [
                                    "py-1 px-2 text-sm shadow-xl",
                                    "text-white bg-slate-700 rounded-lg",
                                ],
                            }}
                            offset={-7}
                        >
                            <div key={index}>
                                {React.cloneElement(item.icon, {
                                    className:
                                        "h-14 w-14 fill-slate-800 bg-white border border-2 border-slate-800 shadow-md rounded-xl m-1.5 transition duration-300 ease-in-out transform hover:bg-slate-800 hover:border-transparent p-2 bg-green-400 transition hover:fill-white",
                                })}
                            </div>
                        </Tooltip>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IconGrid;

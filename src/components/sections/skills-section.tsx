"use client";
import React from "react";
import { FaJava, FaGitAlt } from "react-icons/fa";
import { FaHtml5, FaCss3Alt } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import {
    SiNextui,
    SiShadcnui,
    SiDaisyui,
    SiBootstrap,
    SiExpress,
    SiRedux,
    SiMongodb,
    SiRedis,
    SiPostgresql,
    SiLinux,
    SiTailwindcss,
    SiBabel,
    SiVite,
    SiGraphql,
    SiPostman,
    SiSocketdotio,
    SiCloudinary,
} from "react-icons/si";
import { IoLogoPython } from "react-icons/io";
import { IoLogoDocker, IoLogoNodejs } from "react-icons/io5";
import { DiMsqlServer } from "react-icons/di";
import { BsStripe } from "react-icons/bs";
import SectionHeading from "@/components/section-heading";

const icons = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <RiJavascriptFill />, name: "JavaScript" },
    { icon: <BiLogoTypescript />, name: "TypeScript" },
    { icon: <SiNextui />, name: "Next.js UI" },
    { icon: <SiShadcnui />, name: "Shadcn UI" },
    { icon: <SiDaisyui />, name: "Daisy UI" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <FaJava />, name: "Java" },
    { icon: <IoLogoPython />, name: "Python" },
    { icon: <RiNextjsFill />, name: "Next.js" },
    { icon: <IoLogoNodejs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiRedis />, name: "Redis" },
    { icon: <DiMsqlServer />, name: "MS SQL Server" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <IoLogoDocker />, name: "Docker" },
    { icon: <SiLinux />, name: "Linux" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <SiBabel />, name: "Babel" },
    { icon: <SiVite />, name: "Vite" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiGraphql />, name: "GraphQL" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <BsStripe />, name: "Stripe" },
    { icon: <SiSocketdotio />, name: "Socket.IO" },
    { icon: <SiCloudinary />, name: "Cloudinary" },
];

const SkillTile = ({ icon, name }: { icon: JSX.Element; name: string }) => (
    <div className="group flex flex-col items-center justify-center gap-2 border-2 border-ink bg-white w-[92px] h-[92px] shrink-0 hover:bg-signal transition-colors">
        {React.cloneElement(icon, {
            className: "h-6 w-6 fill-ink group-hover:fill-cream transition-colors",
        })}
        <span className="font-mono text-[9px] uppercase tracking-wide text-ink/60 group-hover:text-cream text-center leading-tight px-1">
            {name}
        </span>
    </div>
);

const IconGrid = () => {
    return (
        <section className="bg-paper border-b-[3px] border-ink">
            {/* Ticker tape */}
            <div className="bg-ink border-b-2 border-ink overflow-hidden py-3">
                <div className="ticker-track">
                    {[0, 1].map((rep) => (
                        <div key={rep} className="flex items-center">
                            {icons.map((s, i) => (
                                <span
                                    key={`${rep}-${i}`}
                                    className="font-mono text-xs uppercase tracking-widest text-cream/80 px-4 flex items-center gap-4"
                                >
                                    {s.name}
                                    <span className="text-signal">/</span>
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="py-16 md:py-24 px-4 md:px-8 mx-auto max-w-screen-xl flex flex-col gap-10 items-center">
                <SectionHeading
                    eyebrow="Stack"
                    title="My Top Skills"
                    align="center"
                />
                <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
                    {icons.map((item, i) => (
                        <SkillTile key={i} icon={item.icon} name={item.name} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IconGrid;

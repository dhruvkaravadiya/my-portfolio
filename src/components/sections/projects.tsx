import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";
import SectionHeading from "@/components/section-heading";

const cards = [
    {
        imageSrc:
            "https://res.cloudinary.com/ddxq9mouk/image/upload/v1715414085/Portfolio/WIDEO/kpwrxsdi5rfptycz783a.png",
        title: "WIDEO",
        description:
            "A Video Sharing Web App inspired from YouTube with features like search, play video, like, dislike, comment, share, subscribe, login, logout etc.",
        githubLink: "#",
        liveLink: "https://wideo-client.vercel.app",
        techStack: [
            "Reactjs",
            "Nodejs",
            "Expressjs",
            "Mongodb",
            "Vercel",
            "Cloudinary",
        ],
    },
    {
        imageSrc:
            "https://res.cloudinary.com/ddxq9mouk/image/upload/v1715409998/Portfolio/Food%20Ordering%20App/uwkzqp8y61wxzpcqwiql.png",
        title: "Chew Chew",
        description:
            "A real time food ordering web app for managing restaurants , managing delivery man account and ordering for customers",
        githubLink: "https://www.github.com/dhruvkaravadiya/ChewChew",
        liveLink: "#",
        techStack: [
            "Reactjs",
            "Nodejs",
            "Expressjs",
            "Socket.io",
            "Mongodb",
            "Daisy UI",
        ],
    },
    {
        imageSrc:
            "https://res.cloudinary.com/ddxq9mouk/image/upload/v1715415368/Portfolio/Queue%20Overflow/mp8obsskml5vcjrgskio.png",
        title: "Queue Overflow (Ongoing)",
        description:
            "A Platform for developers with features like asking questions, answering questions, upvote, downvote, comment, search, login, logout etc.",
        githubLink: "#",
        liveLink: "#",
        techStack: [
            "Nextjs",
            "Typescript",
            "Zod",
            "Mongodb",
            "Vercel",
            "Docker",
        ],
    },
];

const ProjectCard = ({
    card,
    index,
}: {
    card: (typeof cards)[number];
    index: number;
}) => (
    <div
        className="relative border-2 border-ink bg-white flex flex-col h-full shadow-hard hover:shadow-hard-signal hover:-translate-y-1 transition-all"
    >
        <span className="absolute -top-4 -left-2 font-display text-6xl text-ink/[0.06] select-none pointer-events-none">
            0{index}
        </span>
        <div className="p-4 pb-0 relative">
            <div className="relative aspect-video overflow-hidden border-2 border-ink">
                <Image
                    className="object-cover"
                    src={card.imageSrc}
                    loading="lazy"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    alt={card.title}
                />
            </div>
        </div>
        <div className="p-5 flex flex-col flex-1">
            <h3 className="font-display text-xl uppercase tracking-tight text-ink">
                {card.title}
            </h3>
            <p className="text-muted text-sm mt-2 leading-relaxed font-mono">
                {card.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t-2 border-ink/10">
                {card.techStack.map((tech, i) => (
                    <span
                        key={i}
                        className="font-mono text-[10px] uppercase tracking-wide bg-ink text-cream px-2 py-1"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            <div className="flex gap-2 mt-auto pt-5">
                <a
                    href={card.githubLink}
                    aria-label={`${card.title} on GitHub`}
                    className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-ink px-3 py-2 font-mono text-[10px] uppercase tracking-wide text-ink hover:bg-ink hover:text-cream transition-colors"
                >
                    <FaGithub className="h-4 w-4" />
                    GitHub
                </a>
                <a
                    href={card.liveLink}
                    aria-label={`View ${card.title} live`}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-signal border-2 border-ink px-3 py-2 font-mono text-[10px] uppercase tracking-wide text-ink hover:bg-ink hover:text-cream transition-colors"
                >
                    <IoOpenOutline className="h-4 w-4" />
                    Live Demo
                </a>
            </div>
        </div>
    </div>
);

const Projects = () => {
    return (
        <div className="bg-cream py-16 md:py-24 px-4 md:px-8 border-b-[3px] border-ink">
            <div className="max-w-screen-xl mx-auto">
                <SectionHeading
                    eyebrow="Selected Work"
                    title="Projects"
                    subtitle="Here is a showcase of my projects I have worked on."
                />

                <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 items-stretch">
                    <ProjectCard card={cards[0]} index={1} />
                    <ProjectCard card={cards[1]} index={2} />
                    <ProjectCard card={cards[2]} index={3} />
                </div>
            </div>
        </div>
    );
};

export default Projects;

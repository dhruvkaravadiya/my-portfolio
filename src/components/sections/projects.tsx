import React from "react";
import { Avatar } from "@nextui-org/avatar";
import { Chip } from "@nextui-org/chip";
const cards = [
    {
        imageSrc:
            "https://res.cloudinary.com/ddxq9mouk/image/upload/v1715414085/Portfolio/WIDEO/kpwrxsdi5rfptycz783a.png",
        title: "WIDEO",
        description:
            "A Video Sharing Web App inspired from YouTube with features like search, play video, like, dislike, comment, share, subscribe, login, logout etc.",
        link: "https://wideo-client.vercel.app",
        iconUrl:
            "https://res.cloudinary.com/ddxq9mouk/image/upload/v1715413720/Portfolio/WIDEO/e8sejf0hnwnd5hm8wfux.png",

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
        link: "https://www.github.com/dhruvkaravadiya/ChewChew",
        iconUrl:
            "https://res.cloudinary.com/ddxq9mouk/image/upload/v1715412805/Portfolio/Food%20Ordering%20App/wflsndqux3aresb5ue2h.png",

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
        link: "#",
        techStack: [
            "Nextjs",
            "Typescript",
            "Zod",
            "Mongodb",
            "Vercel",
            "AWS",
            "Docker",
        ],
    },
];

const Projects = () => {
    return (
        <div className="py-8 px-4 mx-auto max-w-screen-2xl sm:py-16 lg:px-6 flex flex-col justify-center items-center p-2">
            <div className="max-w-screen-md flex flex-col items-center mb-3 lg:mb-6">
                <h2 className="mb-4 text-4xl font-extrabold text-black ">
                    Designed for business teams like yours
                </h2>
                <p className="text-gray-500 sm:text-xl">
                    Here at Flowbite we focus on markets where technology,
                    innovation, and capital can unlock long-term value and drive
                    economic growth.
                </p>
            </div>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 lg:w-8/12 md:w-10/12 p-4 md:p-2 xl:p-5">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="relative hover:bg-gray-200 rounded-lg bg-gray-100"
                    >
                        <div className="p-5 flex justify-center">
                            <a href={card.link}>
                                <img
                                    className="rounded-md shadow-sm w-full h-auto"
                                    src={card.imageSrc}
                                    loading="lazy"
                                    alt="card"
                                />
                            </a>
                        </div>
                        <div className="px-4 gap-2 flex">
                            {/* <div className="h-12 w-12 p-1">
                                <Avatar
                                    src={card.iconUrl}
                                    size="lg"
                                    className="h-12 w-12 bg-white rounded-full shadow-sm"
                                />
                            </div> */}

                            <div className="flex flex-col">
                                <a href={card.link}>
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                                        {card.title}
                                    </h5>
                                </a>
                                <p className="antialiased text-gray-600 text-sm break-all">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2 px-4 pb-4 pt-3">
                            {card.techStack.map((tech, index) => (
                                <Chip
                                    key={index}
                                    className="bg-black mb-1 text-white font-md text-regular"
                                    size="sm"
                                >
                                    <span className="mx-1">{tech}</span>
                                </Chip>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

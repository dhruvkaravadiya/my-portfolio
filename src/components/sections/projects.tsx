import React from "react";
import {Avatar} from "@nextui-org/avatar";
import {Chip} from "@nextui-org/chip";
const cards = [
  { 
    imageSrc: "https://media.licdn.com/dms/image/C5112AQHKDG-dPKbkvA/article-cover_image-shrink_720_1280/0/1548996596472?e=2147483647&v=beta&t=ecDsmyC3TQZ66TucBImUfMud-t2bk2veeJlJrvbOARk",
    title: "WIDEO",
    description: "A Video Sharing Web App inspired from YouTube",
    link: "#",
    techStack:["Reactjs","Nodejs","Expressjs","Mongodb","Vercel"]
  },
  {
    imageSrc: "https://media.licdn.com/dms/image/C5112AQHKDG-dPKbkvA/article-cover_image-shrink_720_1280/0/1548996596472?e=2147483647&v=beta&t=ecDsmyC3TQZ66TucBImUfMud-t2bk2veeJlJrvbOARk",
    title: "Input",
    description: "Portfolio framework",
    link: "#",
    techStack:["Reactjs","Nodejs","Expressjs","Mongodb","Vercel","Nextjs"]
  },
  {
    imageSrc: "https://media.licdn.com/dms/image/C5112AQHKDG-dPKbkvA/article-cover_image-shrink_720_1280/0/1548996596472?e=2147483647&v=beta&t=ecDsmyC3TQZ66TucBImUfMud-t2bk2veeJlJrvbOARk",
    title: "Button",
    description: "description",
    link: "#",
    techStack:["Reactjs","Nodejs","Expressjs","Mongodb","Vercel","AWS","Nextjs","Docker"]
  },
  {
    imageSrc: "https://media.licdn.com/dms/image/C5112AQHKDG-dPKbkvA/article-cover_image-shrink_720_1280/0/1548996596472?e=2147483647&v=beta&t=ecDsmyC3TQZ66TucBImUfMud-t2bk2veeJlJrvbOARk",
    title: "Button",
    description: "description",
    link: "#",
    techStack:["Reactjs","Nodejs","Expressjs","Mongodb","Vercel"]
  },
  {
    imageSrc: "https://media.licdn.com/dms/image/C5112AQHKDG-dPKbkvA/article-cover_image-shrink_720_1280/0/1548996596472?e=2147483647&v=beta&t=ecDsmyC3TQZ66TucBImUfMud-t2bk2veeJlJrvbOARk",
    title: "Button",
    description: "description",
    link: "#",
    techStack:["Reactjs","Nodejs","Expressjs","Mongodb","Vercel"]
  },
  // Add more cards as needed
];

const Projects = () => {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-2xl sm:py-16 lg:px-6 flex flex-col justify-center items-center p-2">
      <div className="max-w-screen-md flex flex-col items-center mb-3 lg:mb-6">
        <h2 className="mb-4 text-4xl font-extrabold text-black ">Designed for business teams like yours</h2>
        <p className="text-gray-500 sm:text-xl">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
      </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-2 xl:p-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative hover:bg-gray-200 bg-white rounded-lg bg-gray-100"
          >
            <div className="p-5 flex justify-center">
              <a href={card.link}>
                <img className="rounded-md shadow-sm w-full h-auto" src={card.imageSrc} loading="lazy" alt="card" />
              </a>
            </div>
            <div className="px-4 flex flex-row gap-2">
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="lg" />
              <div>
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
                    <Chip key={index} className="bg-black mb-1 text-white font-md text-regular" size="sm">
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

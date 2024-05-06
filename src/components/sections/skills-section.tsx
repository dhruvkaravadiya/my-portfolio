import React from "react";

import { FaGithub } from "react-icons/fa";


const icons = [
    { icon: <FaGithub/>, link: "https://github.com" },
    { icon: <FaGithub/>, link: "https://github.com" },
     { icon: <FaGithub/>, link: "https://github.com" },
    { icon: <FaGithub/>, link: "https://github.com" }, { icon: <FaGithub/>, link: "https://github.com" }, { icon: <FaGithub/>, link: "https://github.com" }, { icon: <FaGithub/>, link: "https://github.com" }, { icon: <FaGithub/>, link: "https://github.com" }, { icon: <FaGithub/>, link: "https://github.com" }, { icon: <FaGithub/>, link: "https://github.com" }, { icon: <FaGithub/>, link: "https://github.com" }, { icon: <FaGithub/>, link: "https://github.com" }, { icon: <FaGithub/>, link: "https://github.com" }, { icon: <FaGithub/>, link: "https://github.com" }, { icon: <FaGithub/>, link: "https://github.com" }, { icon: <FaGithub/>, link: "https://github.com" }, { icon: <FaGithub/>, link: "https://github.com" }, { icon: <FaGithub/>, link: "https://github.com" }, { icon: <FaGithub/>, link: "https://github.com" }, { icon: <FaGithub/>, link: "https://github.com" }, { icon: <FaGithub/>, link: "https://github.com" }, { icon: <FaGithub/>, link: "https://github.com" },
   ];

const IconGrid = () => {
    return (
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-lg sm:py-16 lg:px-6 flex flex-col items-center">
          <h2 className="mb-4 text-4xl font-extrabold text-black">My Top Skills</h2>
          <div className="flex flex-wrap justify-center">
            {icons.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {React.cloneElement(item.icon, {
                  className: "h-14 w-14 fill-slate-800 bg-white border border-2 border-slate-800 shadow-md rounded-xl m-1.5 transition duration-300 ease-in-out transform hover:bg-slate-800 hover:border-transparent p-2 bg-green-400 transition hover:fill-white",
                })}
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default IconGrid;
  
import React from "react";

const cards = [
  { 
    imageSrc: "https://tailwindflex.com/public/images/thumbnails/coming-soon-page/thumb_u.min.webp",
    title: "Card",
    description: "A card component",
    link: "#"
  },
  {
    imageSrc: "https://tailwindflex.com/public/images/thumbnails/radio-buttons/thumb_u.min.webp",
    title: "Input",
    description: "Portfolio website madeusing next js, tailwind css and nextui framework",
    link: "#"
  },
  {
    imageSrc: "https://tailwindflex.com/public/images/thumbnails/buttons-with-border-bottom/thumb_u.min.webp",
    title: "Button",
    description: "description",
    link: "#"
  },
  {
    imageSrc: "https://tailwindflex.com/public/images/thumbnails/buttons-with-border-bottom/thumb_u.min.webp",
    title: "Button",
    description: "description",
    link: "#"
  },
  {
    imageSrc: "https://tailwindflex.com/public/images/thumbnails/buttons-with-border-bottom/thumb_u.min.webp",
    title: "Button",
    description: "description",
    link: "#"
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
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-4 md:p-2 xl:p-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative hover:bg-gray-100 bg-white rounded-lg shadow-md transform transition duration-500 hover:scale-105"
          >
            <div className="p-2 flex justify-center">
              <a href={card.link}>
                <img className="rounded-md shadow-sm" src={card.imageSrc} loading="lazy" alt="card" />
              </a>
            </div>
            <div className="px-4 pb-3">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

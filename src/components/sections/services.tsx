import React from "react";
import { RiSettings3Fill } from "react-icons/ri";
import { PiPaintBrushBroadFill } from "react-icons/pi";
import { LiaLaptopCodeSolid } from "react-icons/lia";

interface FeatureProps {
    title: String;
    description: String;
    icon: JSX.Element; // Define the type for the icon prop
}

const features = [
    {
        title: "Front End Development",
        description:
            "Crafting responsive and user-friendly websites using cutting-edge technologies such as React.js, Tailwind CSS, and Next.js. We leverage a variety of UI libraries like Material UI, Daisy UI, Shad-cn, Nextui, Bootstrap, and more to ensure your website stands out and delivers an exceptional user experience.",
        icon: <PiPaintBrushBroadFill className="h-10 w-10 fill-white" />,
    },
    {
        title: "Landing Pages, Blogs, and E-commerce Sites",
        description:
            "Excel in building lightning-fast, secure, and intuitive landing pages, blogs, and e-commerce sites. Whether showcasing your brand, sharing engaging content, or selling products online, our solutions leave a lasting impression and drive results.",
        icon: <LiaLaptopCodeSolid className="h-10 w-10 fill-white" />,
    },
    {
        title: "API Development",
        description:
            "Specializing in developing robust and scalable APIs using state-of-the-art technologies like Node.js, Express, and MongoDB. Our expertise ensures your APIs are reliable, efficient, and capable of meeting the demands of your applications, facilitating seamless communication and data exchange.",
        icon: <RiSettings3Fill className="h-10 w-10 fill-white" />,
    },
];

const Feature = ({ title, description, icon }: FeatureProps) => (
    <div className="p-4 max-w-sm">
        <div className="flex gap-3 rounded-lg h-full  p-4 flex-col">
            <div className="flex  flex-row gap-2 items-start mb-3">
                <div className="w-12 h-12 mr-3 inline-flex bg-slate-800 p-2 items-center justify-center rounded-full text-white flex-shrink-0">
                    {icon}
                </div>
                <h2 className="text-slate-800 text-lg font-semibold">
                    {title}
                </h2>
            </div>
            <p className="leading-relaxed text-base text-slate-800">
                {description}
            </p>
        </div>
    </div>
);

export default function Services() {
    return (
        <div className="mb-14 flex flex-col items-center p-6 w-auto justify-center mt-10 gap-4">
            <div className="max-w-screen-md flex flex-col items-center w-full mb-3 lg:mb-6">
                <h2 className="mb-4 text-4xl font-extrabold text-black">
                    Services
                </h2>
                <p className="text-gray-500 sm:text-xl">
                    I provide a wide range of services to help you achieve your
                    goals.
                </p>
            </div>
            <div className="flex flex-wrap bg-white p-8 rounded-2xl shadow-2xl">
                {features.map((feature, index) => (
                    <Feature
                        key={index}
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                    />
                ))}
            </div>
        </div>
    );
}

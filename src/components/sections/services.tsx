import React from "react";
import { RiSettings3Fill } from "react-icons/ri";
import { PiPaintBrushBroadFill } from "react-icons/pi";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import SectionHeading from "@/components/section-heading";

interface FeatureProps {
    index: number;
    title: string;
    description: string;
    tags: string[];
    icon: JSX.Element;
}

const features = [
    {
        title: "Front End Development",
        description:
            "Crafting responsive and user-friendly websites using cutting-edge technologies such as React.js, Tailwind CSS, and Next.js. We leverage a variety of UI libraries like Material UI, Daisy UI, Shad-cn, Nextui, Bootstrap, and more to ensure your website stands out and delivers an exceptional user experience.",
        tags: ["React.js", "Tailwind CSS", "Next.js", "Shadcn UI"],
        icon: <PiPaintBrushBroadFill className="h-6 w-6 fill-cream" />,
    },
    {
        title: "Landing Pages, Blogs, and E-commerce Sites",
        description:
            "Excel in building lightning-fast, secure, and intuitive landing pages, blogs, and e-commerce sites. Whether showcasing your brand, sharing engaging content, or selling products online, our solutions leave a lasting impression and drive results.",
        tags: ["Landing Pages", "Blogs", "E-commerce"],
        icon: <LiaLaptopCodeSolid className="h-6 w-6 fill-cream" />,
    },
    {
        title: "API Development",
        description:
            "Specializing in developing robust and scalable APIs using state-of-the-art technologies like Node.js, Express, and MongoDB. Our expertise ensures your APIs are reliable, efficient, and capable of meeting the demands of your applications, facilitating seamless communication and data exchange.",
        tags: ["Node.js", "Express", "MongoDB"],
        icon: <RiSettings3Fill className="h-6 w-6 fill-cream" />,
    },
];

const Feature = ({ index, title, description, tags, icon }: FeatureProps) => (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start border-t-2 border-ink py-8 group hover:bg-white/60 transition-colors">
        <div className="md:col-span-1 flex md:block items-center gap-3">
            <span className="font-mono text-sm text-signal-dark">0{index}</span>
        </div>
        <div className="md:col-span-1">
            <div className="w-12 h-12 flex items-center justify-center bg-ink group-hover:bg-signal transition-colors">
                {icon}
            </div>
        </div>
        <div className="md:col-span-6">
            <h3 className="font-display text-xl uppercase tracking-tight text-ink mb-2">
                {title}
            </h3>
            <p className="leading-relaxed text-sm text-muted">{description}</p>
        </div>
        <div className="md:col-span-4 flex flex-wrap gap-2 md:justify-end content-start">
            {tags.map((tag) => (
                <span
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-wide border-2 border-ink text-ink px-2 py-1"
                >
                    {tag}
                </span>
            ))}
        </div>
    </div>
);

export default function Services() {
    return (
        <div className="bg-cream py-16 md:py-24 px-4 md:px-8 border-b-[3px] border-ink">
            <div className="max-w-screen-xl mx-auto">
                <SectionHeading
                    eyebrow="What I Do"
                    title="Services"
                    subtitle="I provide a wide range of services to help you achieve your goals."
                />
                <div className="flex flex-col mt-12 border-b-2 border-ink">
                    {features.map((feature, index) => (
                        <Feature
                            key={feature.title}
                            index={index + 1}
                            title={feature.title}
                            description={feature.description}
                            tags={feature.tags}
                            icon={feature.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

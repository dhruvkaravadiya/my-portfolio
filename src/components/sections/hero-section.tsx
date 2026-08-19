"use client";

import { Button } from "@nextui-org/button";
import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const spec = [
    { label: "Focus", value: "Full-Stack Web" },
    { label: "Stack", value: "React · Next · Node" },
    { label: "Base", value: "MongoDB / Postgres" },
    { label: "Status", value: "Open to work" },
];

export default function HeroSection() {
    return (
        <section className="bg-cream border-b-[3px] border-ink relative overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left column */}
                <div className="lg:col-span-8 flex flex-col">
                    <span className="eyebrow mb-5">Full-Stack Developer</span>

                    <h1 className="font-display uppercase leading-[0.92] tracking-tight text-5xl md:text-6xl xl:text-[5.2rem]">
                        <span className="block text-ink/30">Hi, I&apos;m</span>
                        <span className="block text-ink">Dhruv</span>
                        <span className="block text-transparent [-webkit-text-stroke:2px_#111111]">
                            Karavadiya.
                        </span>
                    </h1>

                    <p className="max-w-xl mt-7 text-base md:text-lg text-muted leading-relaxed">
                        I am a passionate developer who loves to code and
                        build using technologies like{" "}
                        <b className="text-ink">
                            React, Next.js, Node.js, Express.js, Mongodb,
                            PostgresSQL{" "}
                        </b>{" "}
                        and many more. I have worked as a Software Developer
                        Intern at PW-Skills for 6 months and 5+ months as a
                        Freelancer.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mt-9">
                        <a href="mailto:dhruvkaravadiya.work@gmail.com">
                            <Button
                                radius="none"
                                className="notch bg-ink text-cream text-md font-mono uppercase tracking-wide min-h-4 h-12 px-6 shadow-hard-signal hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all"
                                endContent={<IoArrowForwardOutline />}
                            >
                                Hire Now
                            </Button>
                        </a>
                        <Button
                            radius="none"
                            className="bg-transparent text-md font-mono uppercase tracking-wide border-2 border-ink min-h-4 h-12 px-6 text-ink hover:bg-ink hover:text-cream transition-colors"
                            onClick={() =>
                                window.open("https://bit.ly/dhruvresumev2")
                            }
                        >
                            View Resume
                        </Button>
                    </div>

                    <div className="flex justify-start mt-10 gap-3">
                        {[
                            {
                                href: "https://www.github.com/dhruvkaravadiya",
                                label: "GitHub",
                                icon: <FaGithub className="h-4 w-4" />,
                            },
                            {
                                href: "https://www.twitter.com/DhruvKaravadiya",
                                label: "Twitter / X",
                                icon: <BsTwitterX className="h-4 w-4" />,
                            },
                            {
                                href: "mailto:dhruvkaravadiya.work@gmail.com",
                                label: "Email",
                                icon: <MdEmail className="h-4 w-4" />,
                            },
                            {
                                href: "https://www.linkedin.com/in/dhruv-karavadiya-703369416",
                                label: "LinkedIn",
                                icon: <FaLinkedinIn className="h-4 w-4" />,
                            },
                            {
                                href: "https://leetcode.com/u/dhruvkaravadiya/",
                                label: "LeetCode",
                                icon: <SiLeetcode className="h-4 w-4" />,
                            },
                        ].map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                aria-label={s.label}
                                className="w-10 h-10 flex items-center justify-center border-2 border-ink text-ink hover:bg-signal hover:border-signal hover:text-ink transition-colors"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right column — pinned spec card */}
                <div className="lg:col-span-4 flex lg:justify-end">
                    <div className="w-full lg:w-72 border-2 border-ink bg-white p-5 rotate-1 shadow-hard self-start">
                        <div className="flex items-center justify-between border-b-2 border-ink pb-3 mb-4">
                            <span className="font-mono text-[11px] uppercase tracking-widest text-ink">
                                Dev / Card
                            </span>
                            <span className="w-2.5 h-2.5 bg-signal rounded-full" />
                        </div>
                        <dl className="flex flex-col gap-3">
                            {spec.map((row) => (
                                <div key={row.label} className="flex flex-col">
                                    <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">
                                        {row.label}
                                    </dt>
                                    <dd className="font-display text-sm uppercase text-ink mt-0.5">
                                        {row.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                        <div className="mt-5 pt-4 border-t-2 border-dashed border-ink/30 font-mono text-[10px] uppercase tracking-widest text-signal-dark">
                            Build. Ship. Iterate. Repeat.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

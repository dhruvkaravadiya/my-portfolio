import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const navLinks = ["About", "Projects", "Skills", "Services"];

export default function Footer() {
    return (
        <footer className="bg-ink text-cream">
            {/* Big CTA */}
            <div className="border-b-2 border-cream/15 px-4 md:px-8 py-14 md:py-20">
                <div className="max-w-screen-xl mx-auto">
                    <span className="eyebrow text-signal block mb-4">
                        Get In Touch
                    </span>
                    <a
                        href="mailto:dhruvkaravadiya.work@gmail.com"
                        className="font-display uppercase leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-6xl xl:text-7xl block hover:text-signal transition-colors"
                    >
                        Let&apos;s build
                        <br />
                        something.
                    </a>
                </div>
            </div>

            <div className="mx-auto max-w-screen-xl px-4 md:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-signal flex items-center justify-center text-ink font-display text-xs -rotate-3">
                            DK
                        </div>
                        <span className="font-display uppercase tracking-tight text-base">
                            Dhruv Karavadiya
                        </span>
                    </div>
                    <p className="text-cream/60 text-sm leading-relaxed max-w-xs font-mono">
                        A full-stack developer who&apos;d rather build than talk
                        about building. Open for freelance work and new
                        opportunities.
                    </p>
                </div>

                <div>
                    <h4 className="eyebrow text-signal mb-4">Navigate</h4>
                    <ul className="flex flex-col gap-3 text-sm font-mono uppercase tracking-wide">
                        {navLinks.map((item, i) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="text-cream/70 hover:text-signal transition-colors"
                                >
                                    0{i + 1} — {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="eyebrow text-signal mb-4">Connect</h4>
                    <p className="text-cream/60 text-sm mb-4 font-mono">
                        Connect with me!!
                    </p>
                    <div className="flex gap-2">
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
                                className="w-10 h-10 flex items-center justify-center border-2 border-cream/20 hover:bg-signal hover:border-signal hover:text-ink transition-colors"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="border-t-2 border-cream/10 py-6 px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-screen-xl mx-auto text-xs">
                <span className="text-cream/50 font-mono">
                    Made with{" "}
                    <b className="text-cream/80">
                        Next.js, NextUI, TailwindCSS, TypeScript
                    </b>
                </span>
                <span className="eyebrow text-cream/40">
                    Build. Ship. Iterate. Repeat.
                </span>
            </div>
        </footer>
    );
}

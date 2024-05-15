import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
export default function Footer() {
    return (
        <footer className="border bg-slate-100">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center gap-6 flex-col">
                    <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Incidunt consequuntur amet culpa cum itaque neque.
                    </p>
                    <div className="flex justify-start gap-4 bg-gray-200 p-2 px-4 rounded-full">
                        <a href="https://www.github.com/dhruvkaravadiya">
                            <FaGithub className="fill-slate-700 hover:fill-black cursor-pointer h-6 w-6" />
                        </a>
                        <a href="https://www.twitter.com/DhruvKaravadiya">
                            <BsTwitterX className="fill-slate-700 hover:fill-black cursor-pointer h-6 w-6" />
                        </a>
                        <a href="mailto:dhruvkaravadiya.work@gmail.com">
                            <MdEmail className="fill-slate-700 hover:fill-black cursor-pointer h-6 w-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/dhruvkaravadiya/">
                            <FaLinkedinIn className="fill-slate-700 hover:fill-black cursor-pointer h-6 w-6" />
                        </a>{" "}
                    </div>
                    <div className="border-top p-4 w-full lg:h-20 text-gray-600 flex items-center justify-center">
                        Made With &nbsp;{" "}
                        <b>
                            <i> Next.js, NextUI, TailwindCSS, TypeScript</i>
                        </b>
                    </div>
                </div>
            </div>
        </footer>
    );
}

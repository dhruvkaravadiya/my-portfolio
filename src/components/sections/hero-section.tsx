import { Button } from "@nextui-org/button";
import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
export default function HeroSection() {
    return (
        <section className="bg-white min-h-screen-60  flex justify-center h-full">
            <div className="grid items-center  max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">Hi ! I am <br /> Dhruv Karavadiya</h1>
                    <p className="max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-black">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>

                    <div className="flex justify-start my-8 space-x-5">
                        <FaGithub className="fill-black h-6 w-6"/>
                        <BsTwitterX className="fill-black h-6 w-6"/>
                        <MdEmail className="fill-black h-6 w-6"/>
                        <FaLinkedinIn className="fill-black h-6 w-6"/>
                    </div>
                    <Button className="bg-transparent text-md font-medium border-2 shadow-lg border-slate-800 min-h-4 h-12 md:me-14 text-black" endContent={<IoArrowForwardOutline />}>
                        Hire Now
                    </Button>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="https://res.cloudinary.com/ddxq9mouk/image/upload/v1714917411/test/qoxqpnddh53f6t9h5vuj.jpg" alt="mockup" />
                </div>
            </div>
        </section>
    );
}

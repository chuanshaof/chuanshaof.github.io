"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="pb-12 md:pb-48">
        {/* TODO: Fix the responsiveness of this to be flexible to multiple screens */}
        {/* https://tailwindcss.com/docs/responsive-design */}
        <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
          <div className="md:mt-2 md:w-1/2">
            {/* Insert image into src */}
            <Image
              src=""
              alt=""
              width={325}
              height={325}
              className="rounded-full shadow-2xl"
            />
          </div>
          <div className="md:mt-2 md:w-3/5">
            <p className="text-2xl pt-5">Hello there, I&apos;m</p>
            <h1 className="text-4xl font-bold md:text-7xl">Chuan Shao</h1>
            {/* TODO: Change this font? */}
            <p className="text-lg mt-4 mb-6 md:text-xl">
              a penultimate Computer Science undergraduate at Singapore
              University Of Technology and Design (SUTD)
            </p>
          </div>
        </div>
        {/* TODO: Make this responsive to all screen sizes to always be shown */}
        <div className="flex flex-row items-center text-center justify-center ">
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <HiArrowDown size={35} className="animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

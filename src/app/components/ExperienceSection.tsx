import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const experiences = [
  {
    name: "",
    description: "",
    image: "",
    github: "",
    link: "",
  },
];

const ExperiencesSection = () => {
  return (
    <section id="experiences">
      <h1 className="my-10 text-center font-bold text-4xl">
        Experiences
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      {/* TODO: Experience in a form of a timeline */}
      <div className="flex flex-col space-y-28">
        <div className="border-button border-2 h-timeline absolute left-3.5 top-4"/>
      </div>
    </section>
  );
};

export default ExperiencesSection;

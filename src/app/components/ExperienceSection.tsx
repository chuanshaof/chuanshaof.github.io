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
        {experiences.map((experience, idx) => {
          return (
            <div key={idx}>
              <div className="flex flex-col animation-delay-2 md:flex-row md:space-x-12">
                <div className=" md:w-1/2">
                  <Link href={experience.link}>
                    <Image
                      src={experience.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{experience.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {experience.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={experience.github} target="_blank">
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                    <Link href={experience.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperiencesSection;

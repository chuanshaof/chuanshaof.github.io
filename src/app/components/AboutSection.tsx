import React from "react";
import Image from "next/image";

import python from "devicon/icons/python/python-original.svg";
import java from "devicon/icons/java/java-original.svg";
import javascript from "devicon/icons/javascript/javascript-original.svg";
import typescript from "devicon/icons/typescript/typescript-original.svg";
import jest from "devicon/icons/jest/jest-plain.svg";
import selenium from "devicon/icons/selenium/selenium-original.svg";
import react from "devicon/icons/react/react-original.svg";
import nextjs from "devicon/icons/nextjs/nextjs-original.svg";
import tailwind from "devicon/icons/tailwindcss/tailwindcss-plain.svg";
import git from "devicon/icons/git/git-original.svg";
import firebase from "devicon/icons/firebase/firebase-plain.svg";
import mysql from "devicon/icons/mysql/mysql-original.svg";
import pandas from "devicon/icons/pandas/pandas-original.svg";
import googleCloud from "devicon/icons/googlecloud/googlecloud-original.svg";
import heroku from "devicon/icons/heroku/heroku-original.svg";

const skills = [
  { skill: "Python", logo: python },
  { skill: "Java", logo: java },
  { skill: "JavaScript", logo: javascript },
  { skill: "TypeScript", logo: typescript },
  { skill: "Git", logo: git },
  { skill: "React", logo: react },
  { skill: "Next.js", logo: nextjs },
  { skill: "Jest", logo: jest },
  { skill: "Selenium", logo: selenium },
  { skill: "Tailwind CSS", logo: tailwind },
  { skill: "Firebase", logo: firebase },
  { skill: "MySQL", logo: mysql },
  { skill: "Pandas", logo: pandas },
  { skill: "Google Cloud", logo: googleCloud },
  { skill: "Heroku", logo: heroku },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <div className="space-y-4">
              <p>
                Hi! I'm Chuan Shao, a penultimate undergraduate student at the
                Singapore University of Technology and Design (SUTD), pursuing a
                B.Eng in Computer Science and Design. I'm set to graduate in
                2024.
              </p>
              <p>
                Growing up, I've always been captivated by games and movies,
                which sparked my interest in tech and its potential to create
                amazing experiences. Now, as I delve into the world of tech, I'm
                determined to contribute and turn once-perceived impossibilities
                into reality.
              </p>
              <p>
                Beyond tech, I love cooking. My favourite dish to prepare is
                Rösti—a simple yet satisfying dish that is able to be paired
                with anything. No frills needed.
              </p>
              <p>
                Reach out to me at{" "}
                <a
                  href="mailto:chuanshaof@gmail.com"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  chuanshaof@gmail.com
                </a>
                !
              </p>
            </div>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="flex flex-row bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    <Image
                      src={item.logo}
                      alt={item.skill}
                      height="15"
                      width="15"
                      className="mr-2"
                    />
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import React from "react";
import python from "programming-languages-logos/src/python/python.svg";

// TODO: Add logo here
const skills = [
  { skill: "Java" },
  { skill: "Jest" },
  { skill: "Selenium" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Firebase" },
  { skill: "MySQL" },
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
            <p>Hi, I am Chuan Shao, a</p>
            <p>
              Currently, I am a penultimate undergraduate student at the
              Singapore University of Technology and Design (SUTD) pursing a BS
              in Computer Science. Expected to graduate in 2024.
            </p>
            <p>
              In my free time, I enjoy cooking. My favourite dish to prepare is
              Rosti, for its simplicity and its ability to be able to be paired
              with anything. Eat it plain or pair it with anything.
            </p>
            <p>
              I believe that life is simple. Do good and good will come to you.
              No frills needed.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
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

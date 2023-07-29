import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const experiences = [
  {
    dateStart: "MAY 2023",
    dateEnd: "SEP 2023",
    organisation: "Defence Science Technology Agency (DSTA)",
    title: "Software Developer Intern",
    description: [
      `During my second role in DSTA, I undertook the role of a Software Developer 
      working on a MINDEF product, uweLearn, undergoing cloud migration. `,
      `In the team, I was in-charge of testing, for both code coverage, and automated testing. 
      In code coverage, I had written upwards of 900 tests using Jest to cover the 
      frontend correctness of the code, and managed to hit their requirement of 70% 
      coverage before the app’s deployment.`,
      `Afterwhich, to reduce the manual labor required for the User Acceptance Tests, 
      I suggested and developed an automated test using Playwright.`,
    ],
  },
  {
    dateStart: "JAN 2023",
    dateEnd: "MAY 2023",
    organisation: "Defence Science Technology Agency (DSTA)",
    title: "Product Manager Intern",
    description: [
      `In my first role in DSTA,  I undertook the role of a Product Manager (PM) 
      where I applied the Design Thinking Process where I ideated personas, product 
      roadmap, product delivery phases, Figma mock-up, and evaluation metrics for a 
      product called ‘EZ-Checklist’.`,
      `This role showed me the considerations of the industry and the evaluation on 
      how an application lifecycle would be, giving good insights both as a developer 
      and a user.`,
    ],
  },
  {
    dateStart: "APR 2017",
    dateEnd: "APR 2018",
    organisation: "KOFO Trading",
    title: "Founder",
    description: [
      `Took this up as part of my specialization in Singapore Polytechnic. 
      As the initial founder, I did everything from seed funding, business model, 
      sales forecast, operations, sales and marketing,  and accounting. 
      Although exhausting, it was a good experience that taught me many soft 
      skills such as drive, responsibility, teamwork, patience, and determination.`,
    ],
  },
];

const ExperiencesSection = () => {
  return (
    <section id="experiences">
      <div className="pb-12 md:pb-48">
        <h1 className="my-10 text-center font-bold text-4xl">
          Work Experiences
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        {/* https://flowbite.com/docs/components/timeline/ */}
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {experiences.map((item, idx) => {
            return (
              <div key={idx}>
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
                    {item.dateStart} - {item.dateEnd}
                  </time>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {item.organisation}
                  </h3>
                  <div className="text-lg opacity-70 italic mb-4 leading-snug">
                    {item.title}
                  </div>
                  <div className="text-base font-normal text-gray-600 dark:text-gray-300">
                    {item.description.map((text) => {
                      return <p key={idx} className="mb-1.5">{text}</p>;
                    })}
                  </div>
                </li>
              </div>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default ExperiencesSection;

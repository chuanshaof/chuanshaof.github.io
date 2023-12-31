import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "PSA CodeSprint 2023",
    description: `Over the course of 3 days, we thought of ways to bolster port competitiveness using Machine Learning and GenAI and developed it!`,
    // languages: [{ logo: "", skill: "" }],
    image: "/PSA-CodeSprint.png",
    github:
      "https://github.com/59CRAWL/59CRAWL",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7118209847644356608/",
  },
  {
    name: "GIC CodeToImpact 2023",
    description: `In this hackathon, over 24 hours, I along with 3 strangers developed and deployed a dashboard application with GenAI. Really exciting and insightful process!`,
    // languages: [{ logo: "", skill: "" }],
    image: "/GIC-CodeToImpact.jpg",
    github:
      "https://github.com/chuanshaof/GIC-CodeToImpact2023",
    link: "https://gic.careers/events/codetoimpact2023/",
  },
  {
    name: "Welcome Onboard!",
    description: `Welcome Onboard! is a web app built in collaboration with DBS aimed to reduce the drop-off rate during their current onboarding process.`,
    // languages: [{ logo: "", skill: "" }],
    image: "/welcome-onboard.png",
    github:
      "https://github.com/Service-Design-Studio/final-project-group-2-designerdz",
    link: "https://sites.google.com/mymail.sutd.edu.sg/team2-designerdz/",
  },
  {
    name: "And many more!",
    description: `Click the link below to view my GitHub link for more projects that I have done!`,
    // languages: [{ logo: "", skill: "" }],
    image: "/github.png",
    link: "https://github.com/chuanshaof",
    github: "",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="pb-12 md:pb-48">
        <h1 className="my-10 text-center font-bold text-4xl">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-28">
          {projects.map((project, idx) => {
            return (
              <div key={idx}>
                <SlideUp offset="-300px 0px -300px 0px">
                  <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                    <div className=" md:w-1/2">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={1920}
                        height={1024}
                        className="rounded-xl shadow-xl"
                      />
                    </div>
                    <div className="mt-8 md:w-1/2">
                      <h1 className="text-4xl font-bold mb-6">
                        {project.name}
                      </h1>
                      <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        {project.description}
                      </p>
                      <div className="flex flex-row align-bottom space-x-4">
                        {project.github ? (
                          <Link href={project.github} target="_blank">
                            <BsGithub
                              size={30}
                              className="hover:-translate-y-1 transition-transform cursor-pointer"
                            />
                          </Link>
                        ) : (
                          <></>
                        )}
                        {project.link ? (
                          <Link href={project.link} target="_blank">
                            <BsArrowUpRightSquare
                              size={30}
                              className="hover:-translate-y-1 transition-transform cursor-pointer"
                            />
                          </Link>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                </SlideUp>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

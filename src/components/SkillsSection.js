import React from "react";
import { useInView } from "react-intersection-observer";
import divider from "../assets/divider-bg.jpg";
import {
  FaReact,
  FaWordpress,
  FaHtml5,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import {
  SiDjango,
  SiMongodb,
  SiPostman,
  SiExpress,
  SiElementor,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const Skill = () => {
  const frontendSkills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-orange-500 text-2xl md:text-3xl" />,
    },
    {
      name: "CSS",
      icon: <IoLogoCss3 className="text-blue-700 text-2xl md:text-3xl" />,
    },
    {
      name: "JavaScript",
      icon: (
        <IoLogoJavascript className="text-yellow-500 text-2xl md:text-3xl" />
      ),
    },
    {
      name: "React Js",
      icon: <FaReact className="text-blue-500 text-2xl md:text-3xl" />,
    },
    {
      name: "Next Js",
      icon: <RiNextjsFill className="text-white text-2xl md:text-3xl" />,
    },
    {
      name: "Tailwind",
      icon: (
        <RiTailwindCssFill className="text-cyan-400 text-2xl md:text-3xl" />
      ),
    },
    {
      name: "WordPress",
      icon: <FaWordpress className="text-white text-2xl md:text-3xl" />,
    },
    {
      name: "Elementor",
      icon: <SiElementor className="text-pink-500 text-2xl md:text-3xl" />,
    },
  ];

  const backendSkills = [
    {
      name: "Node Js",
      icon: <FaNodeJs className="text-green-500 text-2xl md:text-3xl" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600 text-2xl md:text-3xl" />,
    },
    {
      name: "Express",
      icon: <SiExpress className="text-white text-2xl md:text-3xl" />,
    },
    {
      name: "Python",
      icon: <FaPython className="text-yellow-200 text-2xl md:text-3xl" />,
    },
    {
      name: "Django",
      icon: <SiDjango className="text-green-600 text-2xl md:text-3xl" />,
    },
    {
      name: "Firebase",
      icon: <IoLogoFirebase className="text-yellow-700 text-2xl md:text-3xl" />,
    },
    {
      name: "MySQL",
      icon: <GrMysql className="text-blue-700 text-2xl md:text-3xl" />,
    },
    {
      name: "Postman",
      icon: <SiPostman className="text-orange-700 text-2xl md:text-3xl" />,
    },
  ];

  const { ref: skillsRef, inView: isSkillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
      ref={skillsRef}
      className={`main bg-slate-950 font-poppins mt-24 md:mt-96 text-white transition-all duration-700 ${
        isSkillsInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      aria-label="Skills Section"
    >
      <div
        className="h-12 w-full bg-repeat bg-center opacity-85"
        style={{
          backgroundImage: `url(${divider})`,
          backgroundSize: "contain",
        }}
      />
      <div className="md:mt-16 mt-10">
        <h1 className="text-white text-3xl md:text-4xl font-semibold text-center">
          Skills
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-around mt-4 md:mt-12 p-10 space-y-8 md:space-y-0">
        {/* Front-End Development */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg md:text-2xl mb-4">Front-End Development</h2>
          <div className="grid grid-cols-3 gap-4">
            {frontendSkills.map((skill, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-4 bg-blue-950 rounded-lg shadow-md transition-all duration-700 ${
                  isSkillsInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="mb-2">{skill.icon}</div>
                <span className="text-xs md:text-lg font-semibold">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Back-End Development */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg md:text-2xl mb-4">Back-End Development</h2>
          <div className="grid grid-cols-3 gap-4">
            {backendSkills.map((skill, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-4 bg-blue-950 rounded-lg shadow-md transition-all duration-700 ${
                  isSkillsInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="mb-2">{skill.icon}</div>
                <span className="text-xs md:text-lg font-semibold">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;

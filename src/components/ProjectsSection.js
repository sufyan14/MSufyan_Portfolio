import React, { useEffect, useRef } from "react";
import divider from "../assets/divider-bg.jpg";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";
import project5 from "../assets/project-5.png";
import project6 from "../assets/project-6.png";

const projects = [
  {
    id: 1,
    image: project1,
    title: "GenZ Consultancy",
    description:
      "Professional Consultancy Web Design with modern UI and animations",
    techStack: "React Js, Tailwind CSS",
    link: "https://genz-consultancy.vercel.app",
  },
  {
    id: 2,
    image: project2,
    title: "Guston Grill",
    description: "Modern Fully Responsive Restaurant Website",
    techStack: "React Js",
    link: "https://gustongrill.netlify.app",
  },
  {
    id: 3,
    image: project3,
    title: "Career-Up",
    description:
      "Full Stack Career Counceling and Educational Website for students",
    techStack: "MERN Stack",
    link: "https://career-up-st.vercel.app",
  },
  {
    id: 4,
    image: project4,
    title: "Popcorn Time",
    description:
      "My First React App, used for searching latest movies with omdb api",
    techStack: "React Js",
    link: "https://popcorn-hub.netlify.app",
  },
  {
    id: 5,
    image: project6,
    title: "Youtube Video Pauser",
    description:
      "Chrome extension which automatically play/pause videos on switching tabs",
    techStack: "React Js, Webpack",
    link: "https://chromewebstore.google.com/detail/youtube-video-pauser/fjififngdlpcdfdnjngajkokjkonjamg",
  },
  {
    id: 6,
    image: project5,
    title: "KSK Coffee",
    description: "Coffee Ordering Website with functionalities and elegant UI",
    techStack: "HTML, CSS, Javascript",
    link: "https://ksk-coffee.netlify.app",
  },
];

const Project = () => {
  const projectRefs = useRef([]);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Number(entry.target.getAttribute("data-index"));
        entry.target.style.transition = `all 0.6s ease-in-out ${index * 0.2}s`;
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  });

  useEffect(() => {
    projectRefs.current.forEach((project) => {
      project.style.opacity = 0;
      project.style.transform = "translateY(50px)";
      observer.observe(project);
    });
  }, []);

  return (
    <section id="projects" className="bg-slate-950 mt-24 md:mt-80 font-poppins">
      <div
        className="h-12 w-full bg-repeat bg-center opacity-85"
        style={{
          backgroundImage: `url(${divider})`,
          backgroundSize: "contain",
        }}
      />
      <h1 className="text-center text-3xl md:text-4xl font-semibold text-white mt-16 md:mb-16">
        Projects
      </h1>
      <div className="container mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:px-5 md:py-14 p-10 md:mt-0 mt-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-index={index}
            ref={(el) => (projectRefs.current[index] = el)}
            className="bg-blue-950 p-6 rounded-lg shadow-lg flex flex-col items-center text-white h-full"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl md:text-2xl text-center font-semibold mb-2">
              {project.title}
            </h2>
            <p className="md:text-md text-sm text-center mb-4 overflow-hidden h-16">
              {" "}
              {project.description}
            </p>
            <p className="md:text-md text-sm text-center mb-4">
              <span className="md:text-md text-sm mr-2 font-semibold text-indigo-200">
                Tech Stack:
              </span>
              {project.techStack}
            </p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition duration-200">
                View Project
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;

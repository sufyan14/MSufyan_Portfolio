import React, { useEffect, useRef, useState } from "react";
import about_pic from "../assets/about-pic.jpg";
import divider from "../assets/divider-bg.jpg";

const AboutSection = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTextVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="w-full mx-auto font-poppins md:mt-96 mt-24"
      ref={contentRef} // Attach the ref here for observation
    >
      {/* Divider */}
      <div
        className="h-12 w-full bg-repeat bg-center opacity-85"
        style={{
          backgroundImage: `url(${divider})`,
          backgroundSize: "contain",
        }}
      />

      {/* Background Container */}
      <div className="bg-slate-950 bg-opacity-70 p-10">
        {/* Inner Centered Container */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center bg-zinc-900 md:rounded-lg rounded-none md:shadow-lg">
          {/* Image Div */}
          <div className="relative w-full md:w-1/3">
            <img
              src={about_pic}
              className="w-full rounded-l-lg"
              alt="Muhammad Sufyan - a passionate developer"
            />
            <p className="absolute bottom-0 left-0 text-white bg-slate-900 bg-opacity-70 p-2 md:rounded-md rounded-none text-lg">
              <span className="font-bold md:text-2xl">1.5</span>
              <br />
              <span className="md:text-xl text-sm">Years of</span>
              <br />
              <span className="md:text-xl text-sm">Experience</span>
            </p>
          </div>

          {/* About Content */}
          <div className="w-full md:w-2/3 md:p-0 p-6 mx-10 space-y-12">
            <h1
              className={`md:text-4xl text-xl text-white text-center p-2 border-2 w-1/2 mx-auto transition-transform duration-1000 ease-out ${
                isTextVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              About Me
            </h1>
            <div
              className={`transition-transform duration-1000 ease-out ${
                isTextVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <p className="text-white md:text-md text-sm md:text-left text-center leading-8">
                I’m <span className="font-bold">Muhammad Sufyan,</span> a
                passionate developer with expertise in UI/UX and Web development
                specifically in Front-End frameworks. <br />I focus on crafting
                seamless, user-centered interfaces with a blend of creativity
                and functionality. <br />
                My approach combines design and coding expertise to deliver
                polished, impactful digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

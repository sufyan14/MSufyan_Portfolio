import React, { useEffect, useRef, useState } from "react";
import about_pic from "../assets/about-pic.jpg";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={contentRef}
      className="bg-[#0c0c2b] py-16 px-4 md:px-20 min-h-screen"
    >
      <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl p-6 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <div className="relative w-full md:w-1/3">
            <img
              src={about_pic}
              alt="Muhammad Sufyan"
              className="rounded-xl w-full h-auto object-cover shadow-lg"
            />
            <div className="absolute bottom-4 left-4 bg-slate-900 bg-opacity-90 text-white px-3 py-2 rounded-lg text-sm md:text-base shadow-md">
              <span className="text-xl font-bold">1.5</span> Years of
              <br />
              Technical Experience
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-2/3 text-white space-y-6">
            <h2
              className={`text-3xl md:text-4xl font-semibold text-center md:text-left transition-all duration-700 ease-in-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              About Me
            </h2>
            <p
              className={`md:text-lg text-sm leading-7 text-justify text-gray-300 transition-all duration-700 ease-in-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              I’m <strong className="text-white">Muhammad Sufyan,</strong> a
              passionate Data Analyst focused on transforming data into
              actionable insights. I specialize in tools like Python, SQL, and
              Power BI to uncover trends, identify opportunities, and support
              strategic decision-making. With a strong foundation in data
              handling, visualization, and storytelling,
              <br />I aim to drive value by turning raw data into meaningful
              business outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

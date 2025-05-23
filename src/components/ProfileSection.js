import React, { useEffect, useState } from "react";
import "../App.css";
import pfp from "../assets/coding.png";

const ProfileSection = () => {
  const words = [
    "Junior Data Analyst.",
    "Developer.",
    "Software Engineer.",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        setSpeed(50);
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, speed]);

  return (
    <section className="flex flex-col md:flex-row justify-center items-center p-10 space-y-10 md:space-x-40 md:space-y-0 text-white w-full">
      <div className="section__profile-container flex justify-center items-center">
        <div className="floating-glow relative">
          <img
            src={pfp}
            alt="Muhammad Sufyan pfp"
            className="lg:h-80 lg:w-80 object-cover rounded-full"
          />
        </div>
      </div>

      <div className="section__text text-center md:text-center space-y-4">
        <p className="section__text__p1 text-cyan-200 md:text-2xl">
          Hey there, I'm
        </p>
        <h1 className="title md:text-4xl text-xl font-semibold">Muhammad Sufyan</h1>
        <p className="section__text__p2 flex justify-center">
          <span
            className="multi-text md:text-2xl text-cyan-200"
            style={{ display: "inline-block", minWidth: "200px" }}
          >
            {currentText}
          </span>
          <span className="blinking-cursor">|</span>
        </p>
        <div className="btn-container space-x-4 flex justify-center md:justify-center">
          <button
            className="btn btn-color-2 border-2 p-4 px-8 rounded-full bg-white text-black font-semibold border-black transition duration-300 ease-in-out hover:bg-transparent hover:text-white hover:border-white"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/assets/Muhammad_Sufyan_Data_Analyst_Resume.pdf";
              link.download = "Muhammad_Sufyan_Data_Analyst_Resume.pdf";
              link.click();
            }}
          >
            Resume
          </button>
          <button
            className="btn btn-color-1 border-2 rounded-full p-4 px-5 border-white font-semibold transition duration-300 ease-in-out hover:bg-white hover:text-black"
            onClick={() => (window.location.href = "./#contact")}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;

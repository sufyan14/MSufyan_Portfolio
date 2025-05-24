import React, { useEffect, useState } from "react";
import "../App.css";
import pfp from "../assets/coding.png";

const ProfileSection = () => {
  const words = ["Junior Data Analyst.", "Developer.", "Software Engineer."];
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
    <section
      id="profile"
      className="flex flex-col md:flex-row font-poppins justify-center items-center pt-32 md:pt-24 md:pb-96 pb-20 bg-[#0a0a23] text-white px-6 space-y-10 md:space-x-20 md:space-y-0"
    >
      <div className="section__profile-container flex justify-center items-center">
        <div className="floating-glow relative">
          <img
            src={pfp}
            alt="Muhammad Sufyan"
            className="h-40 w-40 sm:h-52 sm:w-52 lg:h-72 lg:w-72 object-cover rounded-full shadow-lg shadow-cyan-500/30 transition-all"
          />
        </div>
      </div>

      <div className="text-center space-y-4">
        <p className="text-cyan-400 text-lg md:text-xl tracking-wide">
          Hey there, I'm
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold">Muhammad Sufyan</h1>
        <p className="text-cyan-300 text-lg md:text-2xl font-mono">
          <span style={{ minWidth: "180px" }}>{currentText}</span>
          <span className="blinking-cursor ml-1">|</span>
        </p>

        <div className="btn-container space-x-4 flex justify-center pt-2">
          <button
            className="bg-cyan-400 text-black font-semibold px-6 py-2 rounded-full border-2 border-cyan-400 hover:bg-transparent hover:text-cyan-400 transition"
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
            className="bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold px-6 py-2 rounded-full hover:bg-cyan-400 hover:text-black transition"
            onClick={() => (window.location.href = "#contact")}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;

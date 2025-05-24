import React, { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FaKaggle } from "react-icons/fa6";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center bg-[#0b0b24] m-6 p-8 font-poppins text-white">
      <div className="social-icons flex gap-6">
        <div
          className="hover:cursor-pointer"
          onClick={() =>
            window.open("https://www.linkedin.com/in/msufyan/", "_blank")
          }
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-white hover:text-blue-400 transition-colors duration-300"
            size="2x"
          />
        </div>
        <div
          className="hover:cursor-pointer"
          onClick={() => window.open("https://github.com/sufyan14", "_blank")}
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-white hover:text-blue-400 transition-colors duration-300"
            size="2x"
          />
        </div>
        <div
          className="hover:cursor-pointer"
          onClick={() =>
            window.open("https://www.kaggle.com/sufyan145", "_blank")
          }
        >
          <FaKaggle className="text-white hover:text-blue-400 transition-colors duration-300 text-2xl" />
        </div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden relative">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links - shown below the hamburger icon */}
        <div
          className={`absolute top-full right-0 bg-gray-800 p-4 rounded shadow-md ${
            isOpen ? "block" : "hidden"
          }`}
          style={{ zIndex: 1000 }}
        >
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="#about"
                className="relative inline-block underline-animation text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="relative inline-block underline-animation text-white"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="relative inline-block underline-animation text-white"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                className="relative inline-block underline-animation text-white"
              >
                Certifications
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="relative inline-block underline-animation text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:block">
        <ul className="nav-links flex space-x-10 mr-10">
          <li>
            <a
              href="#about"
              className="relative inline-block underline-animation"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="relative inline-block underline-animation"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="relative inline-block underline-animation"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#certifications"
              className="relative inline-block underline-animation"
            >
              Certifications
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="relative inline-block underline-animation"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

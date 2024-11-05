import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="font-poppins py-4 text-center text-white mt-12 md:mt-52 mb-4 space-y-4">
      <ul className="nav-links flex justify-center space-x-10 items-center mb-2 text-md md:text-xl">
        <li>
          <a
            href="#about"
            className="relative inline-block underline-animation"
            aria-label="About Section"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="relative inline-block underline-animation"
            aria-label="Skills Section"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="relative inline-block underline-animation"
            aria-label="Projects Section"
          >
            Projects
          </a>
        </li>
      </ul>
      <p className="text-xs md:text-sm">
        &copy; {currentYear} Muhammad Sufyan. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;

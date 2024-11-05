import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import email from "../assets/email.png";

const ContactSection = () => {
  return (
    <section id="contact" className="font-poppins text-white mt-24 md:mt-64 mb-4 md:mb-24">
      <div className="text-center space-y-4 md:p-0 p-12">
        <p className="text-3xl md:text-4xl font-semibold">Get in touch</p>
        <div className="flex flex-col items-center space-y-4 ">
          {/* Email */}
          <p className="text-sm md:text-lg flex gap-2 items-center">
            <img src={email} alt="Email Icon" className="md:w-6 md:h-6 w-4 h-4" />
            muhammadsufyan00ms@gmail.com
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 justify-center items-center">
            <div
              className="hover:cursor-pointer"
              onClick={() =>
                window.open("https://www.linkedin.com/in/msufyan/", "_blank")
              }
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white hover:text-blue-400 transition-colors duration-300"
                size="xl"
              />
            </div>
            <div
              className="hover:cursor-pointer"
              onClick={() =>
                window.open("https://github.com/sufyan14", "_blank")
              }
              aria-label="GitHub Profile"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-white hover:text-blue-400 transition-colors duration-300"
                size="xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

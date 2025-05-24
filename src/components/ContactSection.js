import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FaKaggle } from "react-icons/fa6";
import email from "../assets/email.png";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="font-poppins text-white mt-24 md:mt-64 mb-16 px-6"
    >
      <div className="text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold">Get in Touch</h2>
        <p className="text-sm md:text-lg flex justify-center items-center gap-2">
          <img src={email} alt="Email" className="w-5 h-5 md:w-6 md:h-6" />
          muhammadsufyan00ms@gmail.com
        </p>
        <div className="flex gap-6 justify-center">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="cursor-pointer hover:text-blue-400 transition-colors"
            onClick={() =>
              window.open("https://www.linkedin.com/in/msufyan/", "_blank")
            }
          />
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className="cursor-pointer hover:text-blue-400 transition-colors"
            onClick={() => window.open("https://github.com/sufyan14", "_blank")}
          />
          <div
            className="hover:cursor-pointer"
            onClick={() =>
              window.open("https://www.kaggle.com/sufyan145", "_blank")
            }
          >
            <FaKaggle className="text-white hover:text-blue-400 transition-colors duration-300 text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

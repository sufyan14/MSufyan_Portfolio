import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/ProfileSection";
import About from "./components/AboutSection";
import Skills from "./components/SkillsSection";
import Projects from "./components/ProjectsSection";
import Certification from "./components/CertificationSection";
import Contact from "./components/ContactSection";
import Footer from "./components/FooterSection";
import "./App.css";

function App() {
  // Smooth scroll effect for anchor links
  useEffect(() => {
    const handleSmoothScroll = (event) => {
      const target = event.target;
      // Check if the clicked element is an anchor link with a hash
      if (
        target.tagName === "A" &&
        target.getAttribute("href").startsWith("#")
      ) {
        event.preventDefault();
        const section = document.querySelector(target.getAttribute("href"));
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Add event listener to the document
    document.addEventListener("click", handleSmoothScroll);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Profile />
      <About />
      <Skills />
      <Projects />
      <Certification />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

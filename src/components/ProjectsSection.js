import { motion } from "framer-motion";
import { MdPhoneAndroid } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { FaChartBar } from "react-icons/fa";
import p1 from "../assets/project1.jpg";
import p2 from "../assets/project2.jpg";
import p3 from "../assets/project3.jpg";
import p4 from "../assets/project4.jpg";
import p5 from "../assets/project5.jpg";
import p6 from "../assets/project6.jpg";
import dashboard1 from "../assets/Video Game Sales Dashboard.pdf";
import dashboard2 from "../assets/Global Unemployment Rate.pdf";
import dashboard3 from "../assets/Netflix Movies and Shows IMDb Score Dashboard.pdf";

const projects = [
  {
    title: "Video Game Sales Dashboard (Power BI)",
    icon: <FaChartBar className="text-yellow-400 text-3xl" />,
    tools: ["Power BI", "Excel"],
    image: p3,
    github: "https://github.com/sufyan14/Video-Game-Sales-Dashboard",
    linkText: "View PDF",
    link: dashboard1,
    description:
      "This Power BI report analyzes video game sales by platform, genre, publisher, and region. It highlights trends, top-selling titles, and market performance to provide valuable insights for business and research",
  },
  {
    title: "Global Unemployment Rate Dashboard (Power BI)",
    icon: <FaChartBar className="text-yellow-400 text-3xl" />,
    tools: ["Power BI", "Excel"],
    image: p4,
    github: "https://github.com/sufyan14/Global-Unemployment-Rate-Dashboard",
    linkText: "View PDF",
    link: dashboard2,
    description:
      "Developed an interactive Power BI dashboard to analyze global unemployment trends (2013–2024) by country, gender, and age, providing actionable insights through dynamic visualizations",
  },
  {
    title: "Netflix Movies/Shows IMDb Score Dashboard (Power BI)",
    icon: <FaChartBar className="text-yellow-400 text-3xl" />,
    tools: ["Power BI", "Excel"],
    image: p5,
    github:
      "https://github.com/sufyan14/Netflix-Movies-Shows-IMDb-Score-Dashboard",
    linkText: "View PDF",
    link: dashboard3,
    description:
      "Created a interactive Power BI dashboard to analyze Netflix Movies/Shows IMDb Scores through genre, year released, most watched through advanced dashboard techniques and visuals",
  },
  {
    title: "Weather Forecast Dashboard",
    icon: <FaChartBar className="text-yellow-400 text-3xl" />,
    tools: ["Streamlit", "Excel", "Python"],
    image: p6,
    github: "https://github.com/sufyan14/Weather-Data-Analysis",
    linkText: "View Site",
    link: "https://sufyan-weather-forecast-analysis.streamlit.app/",
    description:
      "Created and deployed a Weather Forecast App using Python and Streamlit which analyzes weather data and displays output in form of a dashboard",
  },
  {
    title: "Mobile Price Classifier (RandomForest)",
    icon: <MdPhoneAndroid className="text-pink-400 text-3xl" />,
    tools: ["Python", "NumPy", "scikit-learn", "matplotlib", "Seaborn"],
    image: p1,
    github: "https://github.com/sufyan14/ML-Mobile-Price-Classifier",
    description:
      "This project uses a Random Forest Classifier to predict mobile phone price range categories based on features, built and evaluated with Python",
  },
  {
    title: "Student GPA Prediction (KNN)",
    icon: <PiStudentFill className="text-green-400 text-3xl" />,
    tools: ["Python", "NumPy", "scikit-learn", "matplotlib", "Seaborn"],
    image: p2,
    github: "https://github.com/sufyan14/ML-Student-GPA-Prediction",
    description:
      "K-Nearest Neighbors (KNN) algorithm to predict student performance from behavioral and demographic data, implemented in Python",
  },
];

const DataProjects = () => {
  return (
    <section
      id="projects"
      className="bg-[#0f172a] text-white py-20 px-4 lg:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="md:text-4xl text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Data Projects & Dashboards
        </h2>
        <p className="text-gray-400 mt-3 md:text-lg text-md max-w-2xl mx-auto">
          Real-world data problems I’ve worked on — from machine learning models
          to BI dashboards.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-xl flex flex-col justify-between shadow-md hover:bg-white/10 transition-all"
          >
            {/* Image wrapper with padding */}
            {project.image && (
              <div className="p-4 bg-white/10 rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="mb-4">{project.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-3">
                {project.description}
              </p>
              <div className="text-sm text-gray-300 mb-4 mt-auto">
                <strong>Tools:</strong> {project.tools.join(", ")}
              </div>

              {/* Buttons */}
              <div className="mt-4 flex gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded bg-cyan-500 text-sm text-white hover:bg-cyan-600"
                  >
                    {project.linkText}
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded bg-gray-700 text-sm text-white hover:bg-gray-800"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DataProjects;

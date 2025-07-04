import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import {
  SiPython,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiTableau,
  SiMicrosoftsqlserver,
  SiMysql,
  SiPowerbi,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { SiJupyter, SiApachespark } from "react-icons/si";

const skills = {
  programming: [
    { name: "Python", icon: <SiPython className="text-yellow-300" /> },
    { name: "PySpark", icon: <SiApachespark className="text-red-400" /> },
    { name: "NumPy", icon: <SiNumpy className="text-blue-500" /> },
    { name: "Pandas", icon: <SiPandas className="text-indigo-300" /> },
    {
      name: "scikit-learn",
      icon: <SiScikitlearn className="text-yellow-400" />,
    },
    { name: "Jupyter", icon: <SiJupyter className="text-orange-300" /> },
  ],
  ml_analytics: [
    { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
    { name: "Keras", icon: <SiKeras className="text-red-400" /> },
    { name: "Power BI", icon: <SiPowerbi className="text-yellow-300" /> },
    { name: "Tableau", icon: <SiTableau className="text-orange-300" /> },
    {
      name: "Excel",
      icon: <PiMicrosoftExcelLogoFill className="text-green-400" />,
    },
  ],
  tools: [
    { name: "SQL", icon: <FaDatabase className="text-blue-200" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  ],
};

const DataSkills = () => {
  return (
    <section
      id="skills"
      className="bg-[#111827] py-20 px-4 lg:px-20 min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="md:text-4xl text-3xl font-bold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
          Data & Analytical Skills
        </h2>
        <p className="text-gray-400 mt-3 md:text-lg text-md max-w-xl mx-auto">
          Technologies and tools I use in data science, machine learning, and
          data analysis.
        </p>
      </motion.div>

      {Object.entries(skills).map(([section, skillsList], idx) => {
        const titles = {
          programming: "Programming & Libraries",
          ml_analytics: "Machine Learning & Analytics",
          tools: "Databases and Querying",
        };

        return (
          <motion.div
            key={section}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="md:text-2xl text-xl font-semibold text-white text-center mb-6">
              {titles[section]}
            </h3>
            <Marquee pauseOnHover gradient={false} speed={60}>
              {skillsList.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center mx-6 bg-white/10 backdrop-blur-md rounded-xl p-4 text-white shadow-md hover:bg-white/20 transition-all duration-300 min-w-[120px]"
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <p className="text-sm">{skill.name}</p>
                </div>
              ))}
            </Marquee>
          </motion.div>
        );
      })}
    </section>
  );
};

export default DataSkills;

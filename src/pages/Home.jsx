import {
  FaPaw,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCode,
  FaChartLine,
  FaRobot,
  FaEnvelope,
} from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { IoMdArrowRoundForward } from "react-icons/io";
import logo from "../assets/logo.png";
import pikachuDark from "../assets/pikachu.png"; 
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-6">
  
  {/* Hero Section */}
  <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-100 mb-4">
        Hi, I'm <span className="text-yellow-400">Pruthviraj</span>
      </h1>
      <h2 className="text-2xl md:text-3xl font-poppins text-gray-300 mb-6">
        AI & Data Science Engineer
      </h2>
      <p className="text-gray-400 font-poppins mb-8 max-w-lg">
        Recent graduate passionate about building intelligent solutions and
        deriving insights from data. Combining software development
        expertise with data analytics to create impactful applications.
      </p>
      <div className="flex space-x-4">
        <Link
          to="/contact"
          className="px-6 py-3 bg-yellow-600 text-gray-900 rounded-lg hover:bg-yellow-500 transition-colors flex items-center font-medium"
        >
          <FaEnvelope className="mr-2" />
          Contact Me
        </Link>
        <Link
          to="/projects"
          className="px-6 py-3 border-2 border-yellow-600 text-yellow-400 rounded-lg hover:bg-gray-700 transition-colors flex items-center font-medium"
        >
          My Projects
          <IoMdArrowRoundForward className="ml-2" />
        </Link>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >
      <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gray-800 rounded-full flex items-center justify-center border-4 border-yellow-500 shadow-lg shadow-yellow-500/20">
        <div className="absolute inset-0 rounded-full animate-pulse opacity-20 bg-yellow-500"></div>
        <img 
          src={pikachuDark} 
          alt="Dark Pikachu" 
          className="w-3/4 h-3/4 object-contain"
        />
      </div>
    </motion.div>
  </section>

  {/* Skills Section */}
  <section id="skills" className="max-w-6xl mx-auto mb-24">
    <h2 className="text-3xl font-playfair font-bold text-center text-gray-100 mb-12">
      My <span className="text-yellow-400">Expertise</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[{
        icon: <FaCode className="w-10 h-10 text-yellow-400" />,
        title: "Software Development",
        skills: ["Python", "Java", "JavaScript", "HTML/CSS"],
      }, {
        icon: <FaChartLine className="w-10 h-10 text-yellow-400" />,
        title: "Data Analytics",
        skills: ["Power BI", "SQL", "Excel", "Data Visualization"],
      }, {
        icon: <FaRobot className="w-10 h-10 text-yellow-400" />,
        title: "AI & Machine Learning",
        skills: ["ML Models", "Chatbots", "NLP", "Predictive Analytics"],
      }].map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -5 }}
          className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-yellow-400 transition-all hover:shadow-yellow-400/10"
        >
          <div className="flex justify-center mb-4">{item.icon}</div>
          <h3 className="text-xl font-playfair font-bold text-center text-gray-100 mb-4">
            {item.title}
          </h3>
          <ul className="flex flex-wrap justify-center gap-2">
            {item.skills.map((skill, i) => (
              <li
                key={i}
                className="px-3 py-1 bg-gray-700 text-yellow-300 rounded-full text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>

  {/* CTA Section */}
  <section className="max-w-4xl mx-auto bg-gray-800 rounded-xl p-8 md:p-12 mb-24 text-center border border-yellow-400/30">
    <div className="flex justify-center mb-6">
      <FaPaw className="w-10 h-10 text-yellow-400" />
    </div>
    <h2 className="text-2xl md:text-3xl font-playfair font-bold text-gray-100 mb-6">
      Interested in working together?
    </h2>
    <p className="text-gray-400 font-poppins mb-8 max-w-2xl mx-auto">
      I'm currently looking for new opportunities in AI and Data Science.
      Whether you have a question or just want to say hi, I'll get back to
      you!
    </p>
    <Link
      to="/contact"
      className="inline-block px-8 py-3 bg-yellow-600 text-gray-900 rounded-lg hover:bg-yellow-500 transition-colors font-medium"
    >
      Get In Touch
    </Link>
  </section>
</div>



  );
}
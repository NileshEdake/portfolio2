import { FaPaw, FaCode, FaDatabase, FaTools, FaClinicMedical, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "Doctors Assistance Machine",
      description: "Developed a machine learning-powered medical chatbot that provides quick, 24/7 medical advice for minor symptoms. The system includes NFC integration for retrieving previous medical records and facilitates communication with doctors before generating accurate prescriptions.",
      icon: <FaClinicMedical className="w-10 h-10" />,
      technologies: ["Python", "Machine Learning", "NFC", "Healthcare", "Chatbot"],
      features: [
        "24/7 medical advice for minor symptoms",
        "NFC integration for medical records",
        "Doctor communication system",
        "Prescription generation"
      ]
    },
    {
      title: "Auto Email Generator",
      description: "Developed a comprehensive platform specifically tailored for students and teachers to effortlessly generate customized emails for academic purposes.",
      icon: <FaEnvelope className="w-10 h-10" />,
      technologies: ["Python", "Automation", "Email Templates", "Education"],
      features: [
        "Customizable email templates",
        "Academic-focused content",
        "Easy-to-use interface",
        "Time-saving solution"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      
      {/* Header */}  
      <header className="flex items-center mb-8">
        <h1 className="text-4xl font-bold ml-4 text-gray-100">
         My <span className="text-yellow-400">Projects</span> 
        </h1>
      </header>
      {/* Projects Showcase - New Card Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-700 hover:border-yellow-400 transition-all group"
          >
            <div className="p-6">
              <div className="flex items-start mb-4">
                <div className="bg-gray-700 p-3 rounded-lg mr-4 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-gray-900 transition-colors">
                  {project.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-100">{project.title}</h2>
                  <p className="text-gray-400 mt-1">{project.description}</p>
                </div>
              </div>

              {/* Technologies as Progress Bars */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-300 mb-3">TECH STACK</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-700 text-yellow-300 rounded-full text-xs hover:bg-yellow-400 hover:text-gray-900 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features with Animated Bullets */}
              <div>
                <h3 className="text-sm font-semibold text-gray-300 mb-3">KEY FEATURES</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-yellow-400 mr-3 mt-1">•</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Project Footer */}
            <div className="bg-gray-700/50 px-6 py-4 border-t border-gray-700 flex justify-between items-center">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                <span className="text-sm text-gray-300">Completed</span>
              </div>
              <button className="px-4 py-2 bg-yellow-600 text-gray-900 rounded-lg hover:bg-yellow-500 transition-colors text-sm font-medium flex items-center">
                View Case Study
                <FaPaw className="ml-2" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skills Showcase - New Circular Design */}
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-gray-100 mb-8 flex items-center"
        >
          <FaPaw className="text-yellow-400 mr-4" />
          Technical Skills Demonstrated
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 hover:border-yellow-400 transition-all text-center"
          >
            <div className="bg-gray-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-yellow-400">
              <FaCode className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-100 mb-4">Programming</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Python', 'Core Java', 'JavaScript', 'HTML/CSS'].map((lang, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-gray-700 text-yellow-300 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-colors"
                >
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>
          
          {/* Data Skills */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 hover:border-yellow-400 transition-all text-center"
          >
            <div className="bg-gray-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-yellow-400">
              <FaDatabase className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-100 mb-4">Data & Analytics</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Data Science', 'Machine Learning', 'SQL', 'Power BI', 'Excel'].map((skill, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-gray-700 text-yellow-300 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          
          {/* Tools */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 hover:border-yellow-400 transition-all text-center"
          >
            <div className="bg-gray-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-yellow-400">
              <FaTools className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-100 mb-4">Tools & Platforms</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['GitHub', 'Eclipse', 'IoT Platforms', 'NFC Technology'].map((tool, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-gray-700 text-yellow-300 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div> 
    </div>
  );
}
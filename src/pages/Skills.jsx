import { FaPaw, FaBolt, FaUsers, FaCode, FaDatabase } from 'react-icons/fa';

export default function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-6">
      {/* Header */}
      <header className="flex items-center mb-8">
        <h1 className="text-4xl font-bold ml-4 text-gray-100">
         My <span className="text-yellow-400">Skills</span> 
        </h1>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Technical Skills Card */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 hover:border-yellow-400 transition-all hover:shadow-yellow-400/10">
          <div className="flex items-center mb-4">
            <FaBolt className="w-8 h-8 text-yellow-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-100">Technical Skills</h2>
          </div>
          <ul className="space-y-3">
            {['Python, Core Java, SQL', 'HTML, CSS, JavaScript', 'Power BI, Excel', 'GitHub, Eclipse', 'IoT Projects'].map((skill) => (
              <li key={skill} className="flex items-center">
                <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></span>
                <span className="font-medium text-gray-300">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Soft Skills Card */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 hover:border-yellow-400 transition-all hover:shadow-yellow-400/10">
          <div className="flex items-center mb-4">
            <FaUsers className="w-8 h-8 text-yellow-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-100">Soft Skills</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Teamwork', 'Problem Solving', 'Time Management', 'Attention to Detail'].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-gray-700 text-yellow-300 rounded-full text-sm font-medium hover:bg-yellow-400 hover:text-gray-900 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Projects Card */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 hover:border-yellow-400 transition-all hover:shadow-yellow-400/10 md:col-span-2">
          <div className="flex items-center mb-4">
            <FaCode className="w-8 h-8 text-yellow-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-100">Projects</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Doctor's Assistance Machine */}
            <div className="bg-gray-700 p-5 rounded-lg border border-gray-600 hover:border-yellow-400 transition-colors">
              <h3 className="text-xl font-bold text-gray-100 mb-2">Doctors Assistance Machine</h3>
              <p className="text-gray-400 mb-3">
                ML-powered medical chatbot with NFC integration for medical records retrieval.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Machine Learning', 'NFC', 'Healthcare'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-600 text-yellow-300 rounded-full text-xs hover:bg-yellow-400 hover:text-gray-900 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Auto Email Generator */}
            <div className="bg-gray-700 p-5 rounded-lg border border-gray-600 hover:border-yellow-400 transition-colors">
              <h3 className="text-xl font-bold text-gray-100 mb-2">Auto Email Generator</h3>
              <p className="text-gray-400 mb-3">
                Platform for students and teachers to generate customized academic emails.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Automation', 'Email'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-600 text-yellow-300 rounded-full text-xs hover:bg-yellow-400 hover:text-gray-900 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Card */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 hover:border-yellow-400 transition-all hover:shadow-yellow-400/10 md:col-span-2">
          <div className="flex items-center mb-4">
            <FaDatabase className="w-8 h-8 text-yellow-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-100">Certifications</h2>
          </div>
          <ul className="space-y-4">
            {[
              { title: "Python & AI Training", org: "Goldenbird Education", year: "2024" },
              { title: "Data Science For Engineers", org: "NPTEL", year: "2024" },
              { title: "Joy of Computing using Python", org: "NPTEL", year: "2023" },
              { title: "Python Developer Workshop", org: "Universal Computers", year: "2023" }
            ].map((cert, index) => (
              <li key={index} className="flex group">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 group-hover:animate-pulse"></span>
                <div>
                  <h3 className="font-bold text-gray-100 group-hover:text-yellow-400 transition-colors">{cert.title}</h3>
                  <p className="text-gray-500 text-sm">{cert.org}, {cert.year}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
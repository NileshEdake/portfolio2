// src/pages/Education.jsx
import { PikachuIcon, GraduationCap, Trophy, School } from '../components/Icons';

export default function Education() {
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      {/* Header */}
      <header className="flex items-center mb-8">
        <h1 className="text-4xl font-bold ml-4 text-gray-100">
        <span className="text-yellow-400">Education</span> 
        </h1>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 h-full w-1 bg-yellow-500 transform -translate-x-1/2"></div>

          {/* Education Items */}
          <div className="space-y-8">
            {/* BE in AI & Data Science */}
            <div className="relative pl-16">
              <div className="absolute left-5 w-4 h-4 bg-yellow-400 rounded-full transform -translate-x-1/2 border-2 border-yellow-500"></div>
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-yellow-700 hover:border-yellow-500 transition-colors">
                <div className="flex items-start">
                  <GraduationCap className="w-8 h-8 text-yellow-400 mr-4 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">Bachelor of Engineering</h2>
                    <h3 className="text-xl text-yellow-300 mb-2">Artificial Intelligence and Data Science Engineering</h3>
                    <p className="text-gray-300 mb-3">Sharnbasva Institute of Technology and College of Engineering, Yadrav-Ichalkaranji</p>
                    <div className="flex items-center text-sm text-gray-400">
                      <span>2021 - 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Higher Secondary */}
            <div className="relative pl-16">
              <div className="absolute left-5 w-4 h-4 bg-yellow-400 rounded-full transform -translate-x-1/2 border-2 border-yellow-500"></div>
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-yellow-700 hover:border-yellow-500 transition-colors">
                <div className="flex items-start">
                  <School className="w-8 h-8 text-yellow-400 mr-4 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">Higher Secondary Certificate</h2>
                    <p className="text-gray-300 mb-3">Ichalkaranji High School and Junior College, Ichalkaranji</p>
                    <div className="flex items-center text-sm text-gray-400">
                      <span>2019 - 2021</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SSC */}
            <div className="relative pl-16">
              <div className="absolute left-5 w-4 h-4 bg-yellow-400 rounded-full transform -translate-x-1/2 border-2 border-yellow-500"></div>
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-yellow-700 hover:border-yellow-500 transition-colors">
                <div className="flex items-start">
                  <School className="w-8 h-8 text-yellow-400 mr-4 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">Secondary School Certificate (SSC)</h2>
                    <p className="text-gray-300 mb-3">Shri. Ramarao Ingawale Highschool, Hatkanangale</p>
                    <div className="flex items-center text-sm text-gray-400">
                      <span>2014 - 2019</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Trophy className="w-8 h-8 text-yellow-400 mr-4" />
            Academic Achievements
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 1st Rank */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-yellow-700 hover:border-yellow-500 transition-colors">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">🏆</span>
                <h3 className="text-xl font-bold text-white">1st Rank in Zonal Level Project Competition</h3>
              </div>
              <p className="text-gray-300">DBAT University, Lonere (Kolhapur, Satara Zone)</p>
            </div>

            {/* Python Bootcamp */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-yellow-700 hover:border-yellow-500 transition-colors">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">🐍</span>
                <h3 className="text-xl font-bold text-white">Python Developer Bootcamp</h3>
              </div>
              <p className="text-gray-300">Universal Computers, Ichalkaranji</p>
              <ul className="mt-2 space-y-1 text-gray-400 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  Learned Python fundamentals, OOP, and data structures
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  Built data visualization tool and email automation script
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

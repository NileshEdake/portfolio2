import { Link } from 'react-router-dom';
import { FaCode, FaPaperPlane } from 'react-icons/fa'; // updated icons

function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-yellow-600/30 shadow-lg shadow-yellow-500/10">
      <div className="container mx-auto flex justify-between items-center p-4">
      
        <Link to="/" className="flex items-center space-x-2 group">
          <FaCode className="text-yellow-400 text-2xl group-hover:text-yellow-300 transition-colors" />
          <span className="text-yellow-400 text-2xl font-bold font-playfair group-hover:text-yellow-300 transition-colors">
            Pruthvi
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className="text-gray-300 hover:text-yellow-400 font-medium font-playfair transition-colors relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/skills" 
            className="text-gray-300 hover:text-yellow-400 font-medium font-playfair transition-colors relative group"
          >
            Skills
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/projects" 
            className="text-gray-300 hover:text-yellow-400 font-medium font-playfair transition-colors relative group"
          >
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/education" 
            className="text-gray-300 hover:text-yellow-400 font-medium font-playfair transition-colors relative group"
          >
            Education
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/contact" 
            className="px-4 py-2 bg-yellow-600 text-gray-900 rounded-md font-medium font-playfair hover:bg-yellow-500 transition-colors flex items-center"
          >
            Contact
            <FaPaperPlane className="ml-2" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-300 hover:text-yellow-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;

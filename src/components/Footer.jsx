// src/components/Footer.jsx
import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 pt-0">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Yellow Line */}
        <div className="border-t border-yellow-600 my-6"></div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-8 mb-8">
          <a 
            href="https://www.linkedin.com/in/pruthviraj-khedkar-bba53b28a/" 
            className="hover:text-yellow-400 transition-transform duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>

          <a 
            href="mailto:pruthvirajkhedkar23@gmail.com" 
            className="hover:text-yellow-400 transition-transform duration-300 hover:scale-110"
            aria-label="Email"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

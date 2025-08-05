// src/components/Header.jsx

import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4 px-6 md:px-12">
        
        {/* --- THIS IS THE UPDATED LOGO --- */}
        <div className="text-2xl font-russo font-bold text-white tracking-wider">
          <span>JF</span>
          <span className="text-brand-yellow">SD</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-300 hover:text-brand-yellow transition duration-300">Home</a>
          <a href="#projects" className="text-gray-300 hover:text-brand-yellow transition duration-300">Projects</a>
          <a href="#certificates" className="text-gray-300 hover:text-brand-yellow transition duration-300">Certificates</a>
          <a href="#contact" className="text-gray-300 hover:text-brand-yellow transition duration-300">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
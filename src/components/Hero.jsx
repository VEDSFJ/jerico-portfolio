import React from 'react';
import profilePhoto from '../assets/profile.jpg'; 
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-navy">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-6 md:px-12">
        
        {/* Left Side: Image */}
        <motion.div 
          className="w-full md:w-2/5 lg:w-1/3 p-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-brand-yellow p-1.5">
            <img src={profilePhoto} alt="Jerico" className="w-full h-full object-cover"/>
          </div>
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div 
          className="w-full md:w-3/5 lg:w-2/3 text-center md:text-left p-4 md:pl-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-russo text-white uppercase tracking-wider">
            Full-Stack
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-russo text-brand-yellow uppercase tracking-wider mb-4">
            Developer
          </h1>
          <p className="text-gray-400 max-w-lg mb-8 italic">
            "Developers are meant to learn and adapt to the current tech trends.
            AI should become a tool not a threat."
          </p>

          {/* --- THIS IS THE UPDATED BUTTON --- */}
          <a 
            href="#projects" 
              className="mt-4 inline-block bg-transparent border-2 border-brand-yellow text-brand-yellow font-bold py-2 px-5 rounded-lg shadow-[-4px_4px_0px_#FFA500] hover:shadow-none hover:-translate-x-1 hover:translate-y-1 transition-all duration-200"
          >
            {'>>'} VIEW PROJECTS
          </a>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
// src/components/Projects.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ecommerceImage from '../assets/ecommerce-mockup.jpg'; 

// Dummy data for projects. Replace with your own.
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A complete e-commerce solution built with Laravel and Vue.js, featuring product management, a shopping cart, and a secure checkout process powered by Stripe.',
    image: ecommerceImage,
    logo: 'https://placehold.co/100x100/FFFFFF/000000?text=P1'
  },
  {
    id: 2,
    title: 'Real-time Chat App',
    description: 'Developed a real-time chat application using React, Node.js, and Socket.IO. Users can join rooms and send messages instantly.',
    image: 'https://placehold.co/800x450/F59E0B/FFFFFF?text=Chat+App',
    logo: 'https://placehold.co/100x100/FFFFFF/000000?text=P2'
  },
  {
    id: 3,
    title: 'Data Dashboard',
    description: 'A data visualization dashboard using PHP and Chart.js, connected to a MongoDB Atlas database to display analytics in a user-friendly way.',
    image: 'https://placehold.co/800x450/10B981/FFFFFF?text=Dashboard',
    logo: 'https://placehold.co/100x100/FFFFFF/000000?text=P3'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section id="projects" className="min-h-screen flex items-center bg-light-navy py-20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Project Details */}
            <div>
              <h2 className="text-4xl font-russo text-white uppercase mb-4">{selectedProject.title}</h2>
              <p className="text-gray-400 mb-6">{selectedProject.description}</p>
              
              <div className="flex items-center space-x-8">
                <a href="#" className="inline-block bg-transparent border-2 border-brand-yellow text-brand-yellow font-bold py-3 px-8 hover:bg-brand-yellow hover:text-navy transition duration-300">
                  {'>>'} LIVE
                </a>
                <span className="font-russo text-gray-600">2025</span>
              </div>
              
              {/* Project Selector */}
              <div className="mt-12 flex space-x-4">
                {projects.map(project => (
                  <div 
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className={`cursor-pointer p-2 bg-navy border-2 transition-all duration-300 ${selectedProject.id === project.id ? 'border-brand-yellow' : 'border-gray-700 hover:border-brand-yellow'}`}
                  >
                    <img src={project.logo} alt={project.title} className="w-16 h-16 object-cover"/>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Project Image */}
            <div className="relative">
              <motion.img 
                key={selectedProject.id} // This makes the image re-animate on change
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="rounded-lg shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
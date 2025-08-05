import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- 1. Import all your project images and logos ---
import ecommerceImage from '../assets/ecommerce-mockup.png';
import chatAppImage from '../assets/chatapp-mockup.png';
import dashboardImage from '../assets/dashboard-mockup.png';
import p1Logo from '../assets/P1.png';
import p2Logo from '../assets/P2.png';
import p3Logo from '../assets/P3.png';

// --- 2. Your project data array, now with the correct local logo imports ---
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Developed a complete e-commerce platform using Laravel and Vue.js. The project features robust product management, a shopping cart, and a secure payment gateway powered by Stripe.',
    image: ecommerceImage,
    logo: p1Logo
  },
  {
    id: 2,
    title: 'Real-time Chat App',
    description: 'Created a real-time chat application using React, Node.js, and Socket.IO. The app allows users to join different chat rooms and exchange messages instantly.',
    image: chatAppImage,
    logo: p2Logo
  },
  {
    id: 3,
    title: 'Data Dashboard',
    description: 'Designed and built a dynamic data dashboard with PHP and Chart.js. It connects to a MongoDB Atlas database to visualize key business metrics in a clean, user-friendly interface.',
    image: dashboardImage,
    logo: p3Logo
  }
];

const Projects = () => {
  // --- 3. State to manage the currently selected project index ---
  const [activeIndex, setActiveIndex] = useState(0); 

  
  const selectedProject = projects[activeIndex];

  return (
    <section 
      id="projects" 
      className="relative min-h-screen flex items-center bg-navy py-20 overflow-hidden"
    >
      {/* Background arc graphic */}
      <div 
        className="absolute top-0 right-0 w-full h-full bg-no-repeat"
        style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(252, 211, 77, 0.1), transparent 30%)' }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Project Details */}
            <div>
              <motion.div
                key={selectedProject.id} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl font-russo text-white uppercase mb-4">
                  PROJECT <span className="text-brand-yellow">{selectedProject.title.toUpperCase()}</span>
                </h2>
                <p className="text-gray-400 mb-6">{selectedProject.description}</p>
              </motion.div>
              
              <div className="flex items-center justify-between mt-8">
                <span className="font-russo text-gray-600">2025</span>
                <a 
                  href="#" 
                  className="inline-block bg-transparent border-2 border-brand-yellow text-brand-yellow font-bold py-2 px-5 rounded-lg shadow-[-4px_4px_0px_#FFA500] hover:shadow-none hover:-translate-x-1 hover:translate-y-1 transition-all duration-200"
                >
                  &gt;&gt; LIVE
                </a>
              </div>
              
              {/* --- 4. The new Project Selector --- */}
              <div className="mt-16 flex justify-center items-center space-x-4">
                {projects.map((project, index) => (
                  <div 
                    key={project.id}
                    onClick={() => setActiveIndex(index)}
                    className={`cursor-pointer p-2 border-2 rounded-md transition-all duration-300 
                      ${activeIndex === index 
                        ? 'bg-white border-white scale-110' 
                        : 'bg-light-navy border-transparent opacity-40 scale-90 hover:opacity-100'
                      }`
                    }
                  >
                    <img src={project.logo} alt={project.title} className="w-20 h-20 object-contain"/>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Project Image */}
            <div className="relative">
              <motion.img 
                key={selectedProject.id + '-image'} 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full rounded-mg"
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
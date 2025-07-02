// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-navy">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Column 1: Contacts */}
          <div>
            <h3 className="text-2xl font-russo text-white uppercase mb-6">Contacts</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-brand-yellow" />
                <span>(+63) 975-645-1051</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-brand-yellow" />
                <span>contact.ocirej.dev@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-brand-yellow" />
                <span>Manila, Philippines</span>
              </div>
            </div>
          </div>

          {/* Column 2: Send an Email */}
          <div>
            <h3 className="text-2xl font-russo text-white uppercase mb-6">Send me an Email</h3>
            <form action="#">
              <div className="mb-4">
                <input type="email" placeholder="contact.ocirej.dev@gmail.com" className="w-full p-3 bg-light-navy border border-gray-700 focus:border-brand-yellow outline-none transition-colors" />
              </div>
              <div className="mb-4">
                <textarea placeholder="What can I help you with?" rows="4" className="w-full p-3 bg-light-navy border border-gray-700 focus:border-brand-yellow outline-none transition-colors"></textarea>
              </div>
              <button type="submit" className="bg-transparent border-2 border-brand-yellow text-brand-yellow font-bold py-2 px-6 hover:bg-brand-yellow hover:text-navy transition duration-300">
                Send
              </button>
            </form>
          </div>

                    {/* Column 3: Follow Me */}
          <div>
            <h3 className="text-2xl font-russo text-white uppercase mb-6">Follow Me</h3>
            <div className="flex space-x-4">
              
              {/* --- Each link below will open in its OWN reusable new tab --- */}

              <a 
                href="https://www.facebook.com/your-username" 
                target="facebook"  
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-brand-yellow text-navy rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <FaFacebookF />
              </a>
              
              <a 
                href="https://www.twitter.com/your-username" 
                target="twitter"   
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-brand-yellow text-navy rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <FaTwitter />
              </a>
              
              <a 
                href="https://github.com/VEDSFJ/VEDSFJ" 
                target="github" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-brand-yellow text-navy rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <FaGithub />
              </a>

              <a 
                href="https://www.linkedin.com/in/your-username" 
                target="linkedin"
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-brand-yellow text-navy rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <FaLinkedinIn />
              </a>

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
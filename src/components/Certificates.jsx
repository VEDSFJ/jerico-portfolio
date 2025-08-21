import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaLink } from 'react-icons/fa';

const certificateData = [
  { title: "Laravel 10 for Beginners", issuer: "Issued by Udemy", link: "#" },
  { title: "React - The Complete Guide", issuer: "Issued by Academind", link: "#" },
  { title: "MongoDB for Developers", issuer: "Issued by MongoDB University", link: "#" },
  { title: "PHP Full Course", issuer: "Issued by freeCodeCamp", link: "#" },
  { title: "Vue.js 3 Fundamentals", issuer: "Issued by Vue Mastery", link: "#" },
  { title: "Full-Stack Web Development", issuer: "Issued by The Odin Project", link: "#" },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-navy">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2 
          className="text-4xl font-russo text-white text-center uppercase mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Certificates & Awards
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificateData.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-light-navy p-6 rounded-lg shadow-lg flex flex-col text-center items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-brand-yellow text-5xl mb-4">
                <FaCertificate />
              </div>
              <h3 className="font-russo text-white text-xl mb-2">{cert.title}</h3>
              <p className="text-gray-400 mb-6">{cert.issuer}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center bg-transparent border-2 border-brand-yellow text-brand-yellow font-bold py-2 px-6 hover:bg-brand-yellow hover:text-navy transition duration-300"
              >
                <FaLink className="mr-2" />
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
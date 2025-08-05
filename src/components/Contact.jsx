import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  
  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResultMessage('');

    const finalFormData = new FormData();
    finalFormData.append("access_key", "6d2563b9-c85f-4f9b-9a98-7237eac30ba9"); 
    finalFormData.append("name", "New message from Portfolio");
    finalFormData.append("email", formData.email);
    finalFormData.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: finalFormData
      });
      const result = await response.json();
      if (result.success) {
        setResultMessage("✅ Success! Your message has been sent.");
        setFormData({ email: '', message: '' });
      } else {
        setResultMessage(`❌ Error: ${result.message}`);
      }
    } catch (error) {
      setResultMessage("❌ An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };


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
          {/* Column 1: Your Contacts */}
          <div>
            <h3 className="text-2xl font-russo text-white uppercase mb-6">Contacts</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3"><FaPhone className="text-brand-yellow" /><span>(+63) 975-645-1051</span></div>
              <div className="flex items-center space-x-3"><FaEnvelope className="text-brand-yellow" /><span>contact.ocirej.dev@gmail.com</span></div>
              <div className="flex items-center space-x-3"><FaMapMarkerAlt className="text-brand-yellow" /><span>Manila, Philippines</span></div>
            </div>
          </div>

          {/* Column 2: Send an Email */}
          <div>
            <h3 className="text-2xl font-russo text-white uppercase mb-6">Send me an <span className="text-brand-yellow">Email</span></h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4"><input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email Address" required className="w-full p-3 bg-light-navy border border-gray-700 rounded-lg focus:border-brand-yellow outline-none transition-colors" /></div>
              <div className="mb-4"><textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="What can I help you with?" rows="4" required className="w-full p-3 bg-light-navy border border-gray-700 rounded-lg focus:border-brand-yellow outline-none transition-colors"></textarea></div>
              <button type="submit" disabled={isSubmitting} className="inline-block bg-transparent border-2 border-brand-yellow text-brand-yellow font-bold py-2 px-6 rounded-lg shadow-[-4px_4px_0px_#FFA500] hover:shadow-none hover:-translate-x-1 hover:translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">{isSubmitting ? 'Sending...' : 'Send'}</button>
            </form>
            {resultMessage && <p className="mt-4 text-sm">{resultMessage}</p>}
          </div>

          {/* Column 3: Follow Me (New U-Shape Style) */}
          <div>
            <h3 className="text-2xl font-russo text-white uppercase mb-6">
              FOLLOW <span className="text-brand-yellow">ME</span>
            </h3>
            {/* Parent container needs to be relative and have a set height */}
            <div className="relative mt-12 h-56 w-full">
              
              {/* Center "X" Icon (Twitter) */}
              <a href="https://www.twitter.com/your-username" target="_blank" rel="noopener noreferrer" 
                 className="absolute top-[0%] left-[41%] w-14 h-14 bg-brand-yellow text-white hover:bg-white hover:text-red-500 rounded-full flex items-center justify-center text-2xl transition-all duration-300">
                <FaTwitter />
              </a>

              {/* U-Shape Icons Start Here */}
              
              {/* Facebook Icon */}
              <a href="https://www.facebook.com/contact.ocirej.dev.nigg4" target="_blank" rel="noopener noreferrer" 
                 className="absolute top-[25%] left-[10%] w-14 h-14 bg-brand-yellow text-white hover:bg-white hover:text-red-500 rounded-full flex items-center justify-center text-2xl transition-all duration-300">
                <FaFacebookF />
              </a>
              
              {/* LinkedIn Icon */}
              <a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" 
                 className="absolute top-[60%] left-[0%] w-14 h-14 bg-brand-yellow text-white hover:bg-white hover:text-red-500 rounded-full flex items-center justify-center text-2xl transition-all duration-300">
                <FaLinkedinIn />
              </a>

              {/* GitHub Icon */}
              <a href="https://github.com/VEDSFJ" target="_blank" rel="noopener noreferrer" 
                 className="absolute top-[75%] left-[41%] w-14 h-14 bg-brand-yellow text-white hover:bg-white hover:text-red-500 rounded-full flex items-center justify-center text-2xl transition-all duration-300">
                <FaGithub />
              </a>
              
              {/* Instagram Icon */}
              <a href="#" target="_blank" rel="noopener noreferrer" 
                 className="absolute top-[60%] left-[82%] w-14 h-14 bg-brand-yellow text-white hover:bg-white hover:text-red-500 rounded-full flex items-center justify-center text-2xl transition-all duration-300">
                <FaInstagram />
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
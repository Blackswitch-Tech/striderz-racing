import React from 'react';
import { Link } from 'react-router-dom';
import { ImFacebook2 } from 'react-icons/im';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logoImage from '../assets/images/tsr_logo.png'; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="bg-[#0033CC] text-white py-8">
      <div className="container mx-auto px-4">
        {/* Contact Details, Email, and Social Media */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-8">
          {/* Contact Details */}
          <div className="flex flex-col items-center sm:items-start mb-6 sm:mb-0 text-center sm:text-left">
          <p className="text-lg mt-1">Paul J Illickan</p>
            <p className="text-sm font-medium">+91 70126 06474</p>
           
            <p className="text-sm">Team Captain</p>
            teamstriderz.saintgits@gmail.com
          </div>

          {/* Centered Bold Email */}
        
          {/* Right-Aligned Social Media Icons */}
          <div className="flex justify-center sm:justify-end space-x-4 text-xl">
            <motion.a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }} // Grow on hover
              className="text-white transition-transform duration-200"
            >
              <ImFacebook2 />
            </motion.a>
            <motion.a
              href="https://wa.me/917012606474"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }} // Grow on hover
              className="text-white transition-transform duration-200"
            >
              <FaWhatsapp />
            </motion.a>
            <motion.a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }} // Grow on hover
              className="text-white transition-transform duration-200"
            >
              <FaInstagram />
            </motion.a>
          </div>
        </div>

        {/* Footer Links and Logo */}
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          
          <div className="flex justify-center mb-4 md:mb-0">
            <img src={logoImage} alt="TSR Logo" className="h-24 sm:h-32" />
          </div>
          <div className="text-center">
            <p className="text-sm">&copy; 2024 TSR. All rights reserved</p>
            <a href="https://blackswitch.in/">
              <p className="text-sm mt-1">Powered by Blackswitch Technologies</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

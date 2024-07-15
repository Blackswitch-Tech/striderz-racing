import React from 'react';
import { ImFacebook2 } from "react-icons/im";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion } from 'framer-motion';

const ContactPage = ({ fadeInUp, sectionPadding }) => {
  return (
    <div className="bg-[#0033CC] min-h-screen flex items-center justify-start pl-4 md:pl-20">
      <div className="w-full px-4 md:px-0">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">Contact Us</h1>
        <motion.form 
            className="w-full max-w-2xl space-y-6 mb-8 sm:ml-20"
            variants={fadeInUp}
          >        {['Name', 'Contact No.', 'Email'].map((label) => (
              <div key={label} className="relative">
                <label htmlFor={label.toLowerCase()} className="block text-sm font-medium text-white mb-2">
                  {label} <span className='text-red-400'>*</span>
                </label>
                <input
                  type={label === 'Email' ? 'email' : label === 'Contact No.' ? 'tel' : 'text'}
                  id={label.toLowerCase()}
                  className="w-full p-3 rounded-md bg-white bg-opacity-10 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder={label}
                  required
                  style={{
                    '::placeholder': {
                      color: 'white',
                      opacity: '1'
                    }
                  }}
                />
              </div>
            ))}
            <div className='flex justify-end'>
              <motion.button
                type="submit"
                className=" bg-white bg-opacity-10 text-white border-2  py-2 px-6 rounded-full hover:bg-white hover:text-[#0033CC] transition duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                whileHover={{ scale: 1.05 }}
              >
                SUBMIT <motion.span 
                  style={{ 
                    display: 'inline-block', 
                    marginLeft: '8px', 
                    fontSize: '15px',
                  }}
                  className="rotate-arrow"
                  animate={{ rotate: 0 }}
                  whileHover={{ rotate: -30 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  ➔
                </motion.span>   
              </motion.button>
            </div>
        </motion.form>
        <motion.div 
            className="w-full flex flex-col gap-5 sm:flex-row sm:justify-between sm:items-start sm:px-10"
            variants={fadeInUp}
          >
            {/* Left side: Phone and Captain info */}
            <div className="text-left text-white">
              <p className="font-semibold text-lg">+91 70126 06474</p>
              <p className="text-sm opacity-80">Paul J Illickan</p>
              <p className="text-sm opacity-80">Team Captain</p>
            </div>

            {/* Center: Email */}
            <div className="text-center text-white">
              <p className="text-lg">teamstriderz.saintgits@gmail.com</p>
            </div>

            {/* Right side: Social media icons */}
            <div className="flex space-x-8 justify-center">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-opacity-80 transition-opacity duration-300">
                <ImFacebook2 className="text-3xl" />
              </a>
              <a href="https://wa.me/917012606474" target="_blank" rel="noopener noreferrer" className="text-white hover:text-opacity-80 transition-opacity duration-300">
                <FaWhatsapp className="text-3xl" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-opacity-80 transition-opacity duration-300">
                <FaInstagram className="text-3xl" />
              </a>
            </div>
          </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;

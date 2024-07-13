import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { ImFacebook2 } from "react-icons/im";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const ContactPage = () => {
  return (
    
      
        
       
        <div className="bg-[#0033CC] min-h-screen flex items-center justify-start pl-20">
      <div className="w-full ">
        <h1 className="text-5xl font-bold text-white mb-8">Contact Us</h1>
        <form className="space-y-6 ">
          <div>
            <label htmlFor="name" className="block text-white mb-2">Name <span className='text-red-700'>*</span></label>
            <input type="text" id="name" className="w-[720px] p-3 rounded" required />
          </div>
          <div>
            <label htmlFor="contact" className="block text-white mb-2">Contact No. <span className='text-red-700'>*</span></label>
            <input type="tel" id="contact" className="w-[720px] p-3 rounded" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-white mb-2">Email <span className='text-red-700'>*</span></label>
            <input type="email" id="email" className="w-[720px] p-3 rounded" required />
          </div>
          <div className=' flex items-center justify-center'> <button type="submit" className="bg-blue-400 text-white py-2 px-6 rounded hover:bg-blue-500 transition  duration-300">
            SUBMIT →
          </button></div>
         
        </form>
        <div className="pt-20 flex flex-col lg:flex-row text-white">
  <div className="flex flex-col justify-center text-white">
    <p>+91 70126 06474</p>
    <div className="pl-2 text-gray-50" style={{ opacity: 0.7 }}>
      <p className="mt-2">Paul J Illickan</p>
      <p>Team Captain</p>
    </div>
  </div>
  <div className="flex items-center justify-center mt-4 lg:mt-0 lg:ml-auto">
    <p>teamstriderz.saintgits@gmail.com</p>
  </div>
  <div className="flex flex-row justify-center mt-4 lg:mt-0 lg:ml-auto space-x-3">
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
      <ImFacebook2 className="text-white text-2xl" />
    </a>
    <a href="https://wa.me/917012606474" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp className="text-white text-2xl" />
    </a>
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="text-white text-2xl" />
    </a>
  </div>
</div>

      </div>
    </div>
    
      
    
  );
};

export default ContactPage;
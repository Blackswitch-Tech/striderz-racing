import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/tsr_logo.png'; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="bg-[#0033CC]  text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold"><Link to="/terms" className="hover:text-gray-300">Terms of Service</Link></h3>
        </div>
        <div className="flex justify-center mb-4 md:mb-0">
          <img src={logoImage} alt="TSR Logo" className="h-32" /> {/* Adjusted the height of the logo */}
        </div>
        <div>
          <p className='flex justify-center items-center '>&copy; 2024 TSR. All rights reserved </p>
          <a href="https://blackswitch.in/"><p>Powered by Blackswitch Technologies</p></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

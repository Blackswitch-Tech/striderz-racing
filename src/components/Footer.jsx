import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <img src="/assets/images/tsr_logo.png" alt="TSR Logo" className="h-12 mb-4" />
            <p>&copy; 2024 TSR. All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li><Link to="/team" className="hover:text-gray-300">Team</Link></li>
              <li><Link to="/journey" className="hover:text-gray-300">Journey</Link></li>
              <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            {/* Add social media icons/links here */}
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul>
              <li><Link to="/terms" className="hover:text-gray-300">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import tsrLogo from '../assets/images/tsr_logo.png';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center py-2">
          <motion.div
            className="flex-1 flex justify-between items-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <NavLink to="/team">Team</NavLink>
            <NavLink to="/journey">Journey</NavLink>
            <motion.div className="flex items-center justify-center" style={{ height: '40px', overflow: 'visible' }}>
              <Link to="/">
                <motion.img
                  src={tsrLogo}
                  alt="TSR Logo"
                  className="h-20 w-auto cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              </Link>
            </motion.div>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-white hover:text-gray-300 transition-colors duration-300 text-lg font-bold px-8"
  >
    {children}
  </Link>
);

export default Navigation;
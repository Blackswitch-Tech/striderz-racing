import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import tsrLogo from '../assets/images/tsr_logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleContactClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToContact: true } });
    } else {
      const contactSection = document.getElementById('contact-us');
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToTop: true } });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  return (
    <div>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg' : 'bg-transparent'} hidden md:block`}>
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
                <Link to="/" onClick={handleLogoClick}>
                  <motion.img
                    src={tsrLogo}
                    alt="TSR Logo"
                    className="h-20 w-auto cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </Link>
              </motion.div>
              <NavLink to="/gallery">Gallery</NavLink>
              <NavLink to="/contact-us">Contact Us</NavLink>
            </motion.div>
          </div>
        </div>
      </nav>

      <div className="fixed top-0 left-0 md:hidden z-50 flex justify-between items-center w-full  bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg">
        {!overlayVisible && (
          <Link to="/" onClick={handleLogoClick}>
            <motion.img
              src={tsrLogo}
              alt="TSR Logo"
              className="h-16 w-auto cursor-pointer ml-6"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </Link>
        )}
        <button onClick={toggleOverlay} className="text-white text-3xl opacity-80 hover:opacity-100 transition-opacity duration-300 ml-auto">
          {overlayVisible ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {overlayVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center text-white">
          <motion.div className="flex items-center justify-center" style={{ height: '40px', overflow: 'visible' }}>
            <Link to="/" onClick={toggleOverlay}>
              <motion.img
                src={tsrLogo}
                alt="TSR Logo"
                className="h-20 w-auto cursor-pointer mb-10"
                initial={{ x: -100, y: -200 }}
                animate={{ x: 0, y: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            </Link>
          </motion.div>
          <NavLink to="/team" onClick={toggleOverlay}>Team</NavLink>
          <NavLink to="/journey" onClick={toggleOverlay}>Journey</NavLink>
          <NavLink to="/gallery" onClick={toggleOverlay}>Gallery</NavLink>
          <NavLink to="/contact-us" onClick={(e) => { toggleOverlay();  }}>Contact Us</NavLink>
        </div>
      )}
    </div>
  );
};

const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-white hover:text-gray-300 transition-colors duration-300 text-lg font-bold px-8 py-4"
  >
    {children}
  </Link>
);

export default Navigation;

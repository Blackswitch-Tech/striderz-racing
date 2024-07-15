import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import backgroundImage from '../assets/images/home_bg.jpg';


import ContactUs from "./ContactPage"
import carImage from '../assets/images/car1.png'
import Autocar from '../assets/images/autocar.png'
import Manorama from "../assets/images/malayalamanorama.png"
import Carousel from "../components/Carousel"
import Merc from "../assets/images/merch.png"

import sponsor1 from '../assets/images/sponsor1.png';
import sponsor2 from '../assets/images/sponsor2.png';
import teamImage from '../assets/images/team.png';





const AnimatedSection = ({ children, className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 }
      }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const LandingPage = () => {
  const merchandiseItems = [
    { name: 'T-Shirt', price: 19.99, image: '/path/to/tshirt.jpg' },
    { name: 'Cap', price: 14.99, image: '/path/to/cap.jpg' },
    { name: 'Poster', price: 9.99, image: '/path/to/poster.jpg' },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const sectionPadding = 'py-16';

  return (
    <div className='w-full'>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div 
        className={`min-h-screen bg-cover bg-center flex items-center justify-center ${sectionPadding}`} 
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Content inside the full-screen background */}
      </div>
    </motion.div>
  

      <div className="h-[1px] w-full bg-[#0033CC] flex justify-center">
        <div className="w-full bg-white h-[1px] opacity-50"></div>
      </div>

      <div className={`min-h-screen bg-[#0033CC] text-white flex items-center justify-end pr-4 sm:pr-16 relative overflow-hidden ${sectionPadding}`}>
      <motion.img 
        src={carImage} 
        alt="Car"
        className="absolute left-0 h-[200px] sm:h-[400px] lg:h-[600px] w-auto"
        style={{ top: '-5%' }}
        initial={{ x: -1000 }}
        animate={{ x: 250 }}
        transition={{ type: 'spring', stiffness: 80, damping: 50 }}
      />
      <motion.div 
        className="relative w-full"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-right p-4 sm:p-0">
          <motion.h5 variants={fadeInUp} className="text-2xl sm:text-4xl mb-2 font-bold">Fueling Passion,</motion.h5>
          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-4xl mb-2 font-bold">Engineering Excellence</motion.h2>
          <motion.p variants={fadeInUp} className="text-base sm:text-xl">We take pride in our dedication, talent, and the</motion.p>
          <motion.p variants={fadeInUp} className="text-base sm:text-xl">incredible performances that define us. Driven</motion.p>
          <motion.p variants={fadeInUp} className="text-base sm:text-xl">by a love for racing, we represent our college</motion.p>
          <motion.p variants={fadeInUp} className="text-base sm:text-xl">with genuine passion and engineering prowess.</motion.p>
          <motion.p variants={fadeInUp} className="text-base sm:text-xl mb-6">Dive deeper into our story.</motion.p>
          <motion.div variants={fadeInUp}>
            <Link to="/about" className="flex items-center justify-end group hover:text-yellow-500 transition-colors duration-300 text-base sm:text-xl text-white">
              READ MORE
              <motion.span 
                style={{ 
                  display: 'inline-block', 
                  marginLeft: '8px', 
                  fontSize: '15px',
                }}
                className="rotate-arrow"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                ➔
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>

      <div className="h-[1px] w-full bg-[#0033CC] flex justify-center">
        <div className="w-full bg-white h-[1px] opacity-50"></div>
      </div>

      <div className={`min-h-screen bg-[#0033CC] text-white flex flex-col items-center sm:items-start justify-center p-4 sm:pl-12 ${sectionPadding}`}>
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <h5 className="text-4xl font-bold sm:ml-16 text-center sm:text-left">MEET THE BUGGY</h5>
      </motion.div>
      <motion.div 
        className="flex flex-col items-center justify-center w-full mt-12"
        initial="hidden"
        whileInView="visible"
        variants={staggerChildren}
        viewport={{ once: false }}
      >
        <motion.img 
          src={carImage} 
          alt="Buggy Car"
          className="h-[300px] sm:h-[600px] w-auto mb-12 sm:mt-[-150px]"
          variants={fadeInUp}
        />
        
        <motion.div variants={fadeInUp}>
          <Link to="/journey" className="flex items-center text-xl text-white group hover:text-yellow-500 transition-colors duration-300 mb-12 sm:mt-[-100px] font-bold">
            Discover More
            <motion.span 
              style={{ 
                display: 'inline-block', 
                marginLeft: '8px', 
                fontSize: '15px',
              }}
              className="rotate-arrow"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              ➔
            </motion.span>
          </Link>
        </motion.div>
        
        <motion.div 
          className="flex flex-col items-center space-y-8"
          variants={staggerChildren}
        >
          <div className="flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-40">
            <motion.div className="text-center" variants={fadeInUp}>
              <p className="text-xl font-extrabold">10hp @</p>
              <p className="text-xl">3600rpm</p>
              <p className="text-sm mt-2">Peak Power</p>
            </motion.div>
            <motion.div className="text-center" variants={fadeInUp}>
              <p className="text-xl font-extrabold">CVT</p>
              <p className="text-sm mt-2">Transmission</p>
              <p className="text-sm">Type</p>
            </motion.div>
            <motion.div className="text-center" variants={fadeInUp}>
              <p className="text-xl font-extrabold">19.66 Nm @</p>
              <p className="text-xl">2800rpm</p>
              <p className="text-sm mt-2">Peak Torque</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>

      <div className="h-[1px] w-full bg-[#0033CC] flex justify-center">
        <div className="w-full bg-white h-[1px] opacity-50"></div>
      </div>

      <div className="bg-[#0033CC] text-white p-8">
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex-shrink-0 mb-8 sm:mb-0 sm:ml-16">
            <h5 className="text-2xl sm:text-4xl font-bold text-left">Proudly</h5>
            <h5 className="text-2xl sm:text-4xl font-bold text-left">Sponsored By</h5>
          </div>
          <motion.div
            className="flex flex-wrap gap-2 justify-center space-x-0 sm:space-x-12 sm:ml-32"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <motion.div
              className="w-32 h-24 sm:w-40 sm:h-32 flex items-center justify-center mb-8 sm:mb-0"
              variants={fadeInUp}
            >
              <img
                src={sponsor1}
                alt="Sponsor 1"
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
            <motion.div
              className="w-32 h-24 sm:w-40 sm:h-32 flex items-center justify-center"
              variants={fadeInUp}
            >
              <img
                src={sponsor2}
                alt="Sponsor 2"
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
      <div className="h-[1px] w-full bg-[#0033CC] flex justify-center">
        <div className="w-full bg-white h-[1px] opacity-50"></div>
      </div>

      <div className={`max-h-[95vh] bg-[#0033CC] text-white flex flex-col justify-center items-center  ${sectionPadding}`}>
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <Link
          to="/team"
          className="flex-shrink-0 mb-8 flex items-center group p-2 hover:text-yellow-500 transition-colors duration-300"
        >
          <div className="flex items-center ml-0 sm:ml-24">
            <h5 className="text-2xl sm:text-4xl font-bold text-left">Meet the Team</h5>
            <motion.span
              style={{
                display: 'inline-block',
                marginLeft: '12px',
                fontSize: '18px',
                sm: { fontSize: '24px' },
              }}
              className="rotate-arrow"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              ➔
            </motion.span>
          </div>
        </Link>

        <div className="flex flex-col items-center">
          <motion.img
            src={teamImage}
            alt="STRIDERZ RACING Team"
            className="w-full sm:w-3/4 h-auto mb-8"
            variants={fadeInUp}
          />
          <motion.div
            className="w-full text-center sm:pr-48 sm:text-right"
            variants={fadeInUp}
          >
            <p className="text-md sm:text-base inline-block p-5 max-w-xl">
              Meet the team behind <strong>STRIDERZ RACING</strong>, showcasing exceptional
              <br className="hidden sm:block" />
              engineering talent and a passion for racing. Join us as we push
              <br className="hidden sm:block" />
              boundaries and achieve racing excellence.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>

      <div className="h-[1px] w-full bg-[#0033CC] flex justify-center">
        <div className="w-full bg-white h-[1px] opacity-50"></div>
      </div>

      

      <div className="h-[1px] w-full bg-[#0033CC] flex justify-center">
        <div className="w-full bg-white h-[1px] opacity-50"></div>
      </div> {/* Separator */}

      <div className={` bg-[#0033CC] text-white flex items-center justify-center ${sectionPadding}`}>
      <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
    >
      <div className="text-center flex flex-col sm:flex-row sm:items-center sm:justify-between w-full max-w-6xl px-4 mx-auto">
        <h2 className="text-3xl sm:text-5xl sm:p-10">Featured On</h2>
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 mt-6 sm:mt-0">
          <div className="h-20 sm:h-32 rounded-lg flex items-center justify-center">
            <img src={Autocar} alt="Autocar" className="h-full w-auto" />
          </div>
          <div className="h-20 sm:h-32 rounded-lg flex items-center justify-center">
            <img src={Manorama} alt="Manorama" className="h-full w-auto" />
          </div>
        </div>
      </div>
    </motion.div>
</div>
<div className="h-[1px] w-full bg-[#0033CC] flex justify-center">
        <div className="w-full bg-white h-[1px] opacity-50"></div>
      </div> {/* Separator */}

<div className={`min-h-screen bg-[#0033CC] text-white flex items-center justify-center ${sectionPadding}`}>
  <motion.div 
    className="w-full"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: false }}
  >
    <h2 className="text-5xl mb-24 text-center">Gallery</h2>
    <div className="px-24  mx-auto">
      <Carousel  />
    </div>
  </motion.div>
</div>




      <div className="h-[1px] w-full bg-[#0033CC] flex justify-center">
        <div className="w-full bg-white h-[1px] opacity-50"></div>
      </div> {/* Separator */}

      <div className={`min-h-screen bg-[#0033CC] text-white flex items-center justify-center ${sectionPadding}`}>
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <h2 className="text-5xl mb-20 text-center">Merchandise</h2>
          <div className='flex items-center justify-center'><img src={Merc} alt="" /></div>
          
        </motion.div>
      </div>

      <div className="h-[1px] w-full bg-[#0033CC] flex justify-center">
        <div className="w-full bg-white h-[1px] opacity-50"></div>
      </div>

      <div className={`min-h-screen bg-[#0033CC] text-white flex items-center justify-center ${sectionPadding}`}>
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
           <div className=" min-h-screen  p-4">
           <ContactUs/>
    </div>
        
        </motion.div>
      </div>
      
    </div>
  );
};

export default LandingPage;
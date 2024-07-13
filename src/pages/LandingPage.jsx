import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import backgroundImage from '../assets/images/home_bg.jpg';
import bglogo from "../assets/images/bglogo.svg";
import Merchandise from '../components/Merchandise';
import carImage from '../assets/images/car1.png';
import sponsor1 from '../assets/images/sponsor1.png';
import sponsor2 from '../assets/images/sponsor2.png';
import teamImage from '../assets/images/team.png';
import featured1 from '../assets/images/featured1.png';
import featured2 from '../assets/images/featured2.png';
import Autocar from '../assets/images/autocar.svg';
import Manorama from "../assets/images/malayalamanorama.svg";
import Carousel from "../components/Carousel";

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
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div 
          className={`h-screen bg-cover bg-center flex items-center justify-center ${sectionPadding}`} 
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
        </div>
      </motion.div>

      <div className="h-[1px] w-full bg-[#0033CC] flex justify-center">
        <div className="w-full bg-white h-[1px] opacity-50"></div>
      </div>

      <div className={`min-h-screen bg-[#0033CC] text-white flex items-center justify-end pr-16 relative overflow-hidden ${sectionPadding}`}>
        <motion.img 
          src={carImage} 
          alt="Car"
          className="absolute left-0 h-[600px] w-auto"
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
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-right">
            <motion.h5 variants={fadeInUp} className="text-4xl mb-2 font-bold">Fueling Passion,</motion.h5>
            <motion.h2 variants={fadeInUp} className="text-4xl mb-2 font-bold">Engineering Excellence</motion.h2>
            <motion.p variants={fadeInUp} className="text-xl">We take pride in our dedication, talent, and the</motion.p>
            <motion.p variants={fadeInUp} className="text-xl">incredible performances that define us. Driven</motion.p>
            <motion.p variants={fadeInUp} className="text-xl">by a love for racing, we represent our college</motion.p>
            <motion.p variants={fadeInUp} className="text-xl">with genuine passion and engineering prowess.</motion.p>
            <motion.p variants={fadeInUp} className="text-xl mb-6">Dive deeper into our story.</motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/about" className="flex items-center justify-end group hover:text-yellow-500 transition-colors duration-300 mb-12 text-xl text-white">
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

      <div className={`min-h-screen bg-[#0033CC] text-white flex flex-col items-start justify-center pl-12 ${sectionPadding}`}>
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <h5 className="text-4xl font-bold ml-16">MEET THE BUGGY</h5>
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
            className="h-[600px] w-auto mb-12 mt-[-150px]"
            variants={fadeInUp}
          />
          
          <motion.div variants={fadeInUp}>
            <Link to="/journey" className="flex items-center text-xl text-white group hover:text-yellow-500 transition-colors duration-300 mb-12 mt-[-100px] font-bold">
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
            <div className="flex flex-row items-center space-x-40">
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
          <div className="flex items-center">
            <div className="flex-shrink-0 ml-16">
              <h5 className="text-4xl font-bold text-left">Proudly</h5>
              <h5 className="text-4xl font-bold text-left">Sponsored By</h5>
            </div>
            <motion.div 
              className="flex justify-center space-x-12 ml-32"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              <motion.div 
                className="w-40 h-32 flex items-center justify-center"
                variants={fadeInUp}
              >
                <img 
                  src={sponsor1} 
                  alt="Sponsor 1"
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>
              <motion.div 
                className="w-40 h-32 flex items-center justify-center"
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

      <div className={`min-h-screen bg-[#0033CC] text-white flex flex-col ${sectionPadding}`}>
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <Link to="/team" className="flex-shrink-0 ml-24 mb-8 flex items-center group hover:text-yellow-500 transition-colors duration-300">
            <div className="flex items-center">
              <h5 className="text-4xl font-bold text-left">Meet the Team</h5>
              <motion.span 
                style={{ 
                  display: 'inline-block', 
                  marginLeft: '12px',
                  fontSize: '24px',
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
              className="w-3/4 h-auto mb-8"
              variants={fadeInUp}
            />
            <motion.div 
              className="w-full pr-48 text-right"
              variants={fadeInUp}
            >
              <p className="text-base inline-block max-w-xl">
                Meet the team behind <strong>STRIDERZ RACING</strong>, showcasing exceptional
                <br />
                engineering talent and a passion for racing. Join us as we push
                <br />
                boundaries and achieve racing excellence.
              </p>
            </motion.div>
          </div>
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
          <div className="flex items-center">
            <div className="flex-shrink-0 ml-16">
              <h5 className="text-4xl font-bold text-left">Featured On</h5>
            </div>
            <motion.div 
              className="flex justify-center space-x-12 ml-32"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              <motion.div 
                className="w-40 h-32 flex items-center justify-center"
                variants={fadeInUp}
              >
                <img 
                  src={featured1} 
                  alt="featured 1"
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>
              <motion.div 
                className="w-40 h-32 flex items-center justify-center"
                variants={fadeInUp}
              >
                <img 
                  src={featured2} 
                  alt="featured 2"
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
          <h2 className="text-5xl mb-24 text-center">Gallery</h2>
          <div className="px-24  mx-auto">
            <Carousel  />
          </div>
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
          <h2 className="text-5xl mb-8 text-center">Merchandise</h2>
          <Merchandise items={merchandiseItems} />
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
          <h2 className="text-5xl mb-8 text-center">Contact Us</h2>
          {/* Add your contact form or contact information here */}
        </motion.div>
      </div>
      
    </div>
  );
};

export default LandingPage;
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import desktopbg from "../assets/images/home_bg.jpg";
import mobilebg from "../assets/images/mobnew.jpg";
import carImage from "../assets/images/car1.png";
import Carousel from "../components/Carousel";
import Merc from "../assets/images/merch.png";
import sponsor1 from "../assets/images/sponsor1.png";
import sponsor2 from "../assets/images/sponsor2.png";
import teamImage from "../assets/images/newteam.png";
import featured1 from "../assets/images/featured1.png";
import featured2 from "../assets/images/featured2.png";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer"

import tsrLogo from "../assets/images/tsr_logo.png";
const AnimatedSection = ({ children, className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const LandingPage = () => {
  const getScreenSize = () => {
    const width = window.innerWidth;
    
    if (width < 700) return 'mobile';
    if (width < 1100) return 'tablet';
    return 'desktop';
  };
  const location = useLocation();
  const [screenSize, setScreenSize] = useState(getScreenSize());
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width < 600;
  const backgroundImage = isMobile ? mobilebg : desktopbg;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenSize(getScreenSize());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  useEffect(() => {
    if (location.state?.scrollToContact) {
      setIsLoaded(true)
      const contactSection = document.getElementById("contact-us");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else if (location.state?.scrollToTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 2000);
    };
  }, [backgroundImage]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const sectionPadding = "py-16";
 
  const mobileMotion = {
    hidden: { opacity: 0, x: -1000 },
    visible: { opacity: 1, x: 60, scale: 0.8 },
    transition: { type: "spring", stiffness: 80, damping: 50 },
  };
  const tabletMotion = {
    
    hidden: { opacity: 0, x: -1000 },
    visible: { opacity: 1, x: -190, scale:0.5  },
    transition: { type: 'spring', stiffness: 70, damping: 45 },
  };

  const desktopMotion = {
    hidden: { opacity: 0, x: -1000 },
    visible: { opacity: 1, x: 200, y: 30  },
    transition: { type: "spring", stiffness: 80, damping: 50 },
  };
  console.log(screenSize)
  const motionConfig =
    
      screenSize === 'mobile'
      ? mobileMotion
      : screenSize === 'tablet'
      ? tabletMotion
      : desktopMotion;
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0033CC]">
        <motion.img
          src={tsrLogo}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 2] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-24 h-24"
        ></motion.img>
      </div>
    );
  }

  return (
    <div className="w-full ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className={`min-h-screen bg-cover bg-center flex items-center justify-center ${sectionPadding}`}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Content inside the full-screen background */}
        </div>
      </motion.div>
      <div className="h-[1px] w-full bg-[#0033CC] flex justify-center">
        <div className="w-full bg-white h-[1px] opacity-50"></div>
      </div>
      <div
        className={`min-h-screen bg-[#0033CC] text-white flex  items-center justify-end pr-4 md:pr-16 relative overflow-hidden ${sectionPadding}`}
      >
         <motion.img
          src={carImage}
          alt="Car"
          className="absolute left-0 sm:b top-0 h-1/2 md:h-5/6 w-auto"
          initial="hidden"
          animate="visible"
          variants={motionConfig}
          viewport={{ once: false }}
        />

        <motion.div
          className="absolute w-full sm:max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <div className="absolute font-exo-2 right-0 top-1/2 transform -translate-y-1/2 text-right p-4 sm:p-0 mt-24 md:mt-0">
            <motion.h5
              variants={fadeInUp}
              className="text-3xl md:text-4xl mb-2 font-bold"
            >
              Fueling Passion,
            </motion.h5>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl mb-2 font-bold font-exo-2"
            >
              Engineering Excellence
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-base md:text-lg lg:text-xl 2xl:text-2xl sm:text-2xl">
              We take pride in our dedication, talent, and the
            </motion.p>
            <motion.p variants={fadeInUp} className="text-base md:text-lg lg:text-xl 2xl:text-2xl sm:text-2xl">
              incredible performances that define us. Driven
            </motion.p>
            <motion.p variants={fadeInUp} className="text-base md:text-lg lg:text-xl 2xl:text-2xl sm:text-2xl">
              by a love for racing, we represent our college
            </motion.p>
            <motion.p variants={fadeInUp} className="text-base md:text-lg  lg:text-xl 2xl:text-2xl sm:text-2xl">
              with genuine passion and engineering prowess.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-base md:text-xl 2xl:text-2xl sm:text-2xl   mb-6"
            >
              Dive deeper into our story.
            </motion.p>
          </div>
        </motion.div>
      </div>
      <div className="h-[1px] w-full bg-[#0033CC] flex justify-center">
        <div className="w-full bg-white h-[1px] opacity-50"></div>
      </div>
      <div
        className={`min-h-screen font-exo-2 bg-[#0033CC] text-white flex flex-col items-center sm:items-start justify-center p-4 sm:pl-12 ${sectionPadding}`}
      >
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <h5 className="text-4xl font-bold sm:ml-24 text-center sm:text-left">
            Meet the Buggy
          </h5>
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
            className="h-[500px] sm:h-[600px] w-auto mb-12 mt-[-100px] sm:mt-[-150px]"
            variants={fadeInUp}
          />

          <motion.div variants={fadeInUp}>
            <Link
              to="/team"
              state={{ activeTab: "buggy" }}
              className="flex items-center text-xl text-white group hover:text-yellow-500 transition-colors duration-300 mb-12 sm:mt-[-100px] font-bold"
            >
              Discover More
              <motion.span
                style={{
                  display: "inline-block",
                  marginLeft: "8px",
                  fontSize: "15px",
                }}
                className="rotate-arrow"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
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
    className="w-full max-w-7xl mx-auto"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: false }}
  >
            <div className="flex flex-col sm:flex-row items-center justify-between">
  <div className="flex-shrink-0 mb-8 sm:mb-0 sm:ml-24 font-exo-2">
    <h5 className="text-2xl sm:text-4xl font-bold text-left">
      Proudly
    </h5>
    <h5 className="text-2xl sm:text-4xl font-bold text-left">
      Supported By
    </h5>
  </div>
  <motion.div
    className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-end w-full sm:w-auto sm:mr-24"
    variants={staggerChildren}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
  >
    <motion.div
      className="w-32 h-24 sm:w-48 sm:h-40 flex items-center justify-center mb-8 sm:mb-0 relative"
      style={{ left: '-0.5rem' }}  // Adjusted value to move slightly to the left
      variants={fadeInUp}
    >
      <img
        src={sponsor1}
        alt="Sponsor 1"
        className="max-w-full max-h-full object-contain"
      />
    </motion.div>
    <motion.div
      className="w-32 h-24 sm:w-48 sm:h-40 flex items-center justify-center sm:ml-24"
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

      <div
        className={`min-h-screen bg-[#0033CC] text-white flex flex-col justify-center items-center  ${sectionPadding}`}
      >
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <Link
            to="/team"
            state={{ activeTab: "people" }}
            className="flex-shrink-0 mb-8 flex items-center group p-2 hover:text-yellow-500 transition-colors duration-300"
          >
            <div className="flex items-center ml-0 sm:ml-32 font-exo-2">
              <h5 className="text-2xl sm:text-4xl font-bold text-left">
                Meet the Team
              </h5>
              <motion.span
                style={{
                  display: "inline-block",
                  marginLeft: "12px",
                  fontSize: "18px",
                  sm: { fontSize: "24px" },
                }}
                className="rotate-arrow"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
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
              <p className="text-md sm:text-base inline-block p-5 max-w-xl font-exo-2">
                Meet the team behind <strong>STRIDERZ RACING</strong>,
                showcasing exceptional {" "}
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
      <div className="bg-[#0033CC] text-white p-8">
  <motion.div
    className="w-full max-w-7xl mx-auto"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: false }}
  >
    <div className="flex flex-col sm:flex-row items-center justify-between">
  <div className="flex-shrink-0 mb-8 sm:mb-0 sm:ml-24 font-exo-2">
    <h5 className="text-2xl sm:text-4xl font-bold text-left">
      Featured On
    </h5>
  </div>
  <motion.div
    className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-end w-full sm:w-auto sm:mr-24"
    variants={staggerChildren}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
  >
    <motion.div
      className="w-32 h-24 sm:w-48 sm:h-40 flex items-center justify-center mb-8 sm:mb-0 relative"
      style={{ left: '-0.5rem' }}  // Adjusted value to move slightly to the left
      variants={fadeInUp}
    >
      <img
        src={featured1}
        alt="featured1"
        className="max-w-full max-h-full object-contain"
      />
    </motion.div>
    <motion.div
      className="w-32 h-24 sm:w-48 sm:h-40 flex items-center justify-center sm:ml-24"
      variants={fadeInUp}
    >
      <img
        src={featured2}
        alt="featured2"
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
      <div
        className={`min-h-screen bg-[#0033CC] text-white flex items-center justify-center ${sectionPadding}`}
      >
        <motion.div
          className="w-full relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <Link
      to="/gallery"
      className="flex-shrink-0 mb-8 flex items-center group p-2 hover:text-yellow-500 transition-colors duration-300"
    >
      <div className="flex items-center ml-0 sm:ml-32">
        <h5 className="text-2xl sm:text-4xl font-bold text-left">Gallery</h5>
        <motion.span
          style={{
            display: 'inline-block',
            marginLeft: '12px',
            fontSize: '18px',
            sm: { fontSize: '24px' },
          }}
          className="rotate-arrow"
          whileHover={{ x: 5, rotate: -30 }} // Rotate by -30 degrees on hover
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          ➔
        </motion.span>
      </div>
    </Link>
          <div className=" sm:px-10 mx-auto pt-10 sm:pt-16">
            <Carousel />
          </div>
        </motion.div>
      </div>
      <div className="h-[1px] w-full bg-[#0033CC] flex justify-center">
        <div className="w-full bg-white h-[1px] opacity-50"></div>
      </div>
      <div
        className={`min-h-screen bg-[#0033CC] text-white flex items-center justify-center ${sectionPadding}`}
      >
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <div className="flex-shrink-0 flex justify-center sm:justify-start sm:ml-32">
  <h5 className="text-4xl font-bold text-left">Merchandise</h5>
</div>

      <div className="flex items-center justify-center">
  <img src={Merc} alt="" className="sm:w-2/5 mt-28" />
</div>
        </motion.div>
      </div>
      <div className="h-[1px] w-full bg-[#0033CC] flex justify-center">
        <div className="w-full bg-white h-[1px] opacity-50"></div>
      </div>
      <ContactUs fadeInUp={fadeInUp} sectionPadding={sectionPadding} />
      <div className="h-[1px] w-full bg-[#0033CC] flex justify-center">
        <div className="w-full bg-white h-[1px] opacity-50"></div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;

import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#0033CC] text-white">
      <Section>
        <motion.h1
          className="text-6xl text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h1>
        {/* Add team member cards or grid here */}
      </Section>

      
    </div>
  );
};




export default AboutPage;
import React, { useState, useRef } from 'react';
import { ImFacebook2 } from "react-icons/im";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const ContactPage = ({ fadeInUp, sectionPadding }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  const iframeRef = useRef(null);
const nav=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = formRef.current;
    const iframe = iframeRef.current;

    iframe.onload = () => {
      setIsSubmitting(false);
      alert('Form submitted successfully!');
      form.reset();
      nav('/')
    };

    form.submit();
    
  };

  return (
    <div id="contact-us" className="bg-[#0033CC] min-h-screen flex items-center justify-start pl-4 md:pl-20">
      <div className="w-full px-4 md:px-0">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">Contact Us</h1>
        <motion.form 
          ref={formRef}
          className="w-full max-w-2xl space-y-6 mb-8 sm:ml-20"
          variants={fadeInUp}
          onSubmit={handleSubmit}
          method='POST'
          target="hidden_iframe"
          action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSeBaVib7KdQZbk1XGVVe4jdwvBgrM7KsP58nFhzJJudFlYdxw/formResponse'
        >
          {['Name', 'Contact No.', 'Email'].map((label, index) => (
            <div key={label} className="relative">
              <label htmlFor={label.toLowerCase()} className="block text-sm font-medium text-white mb-2">
                {label} <span className='text-red-400'>*</span>
              </label>
              <input
                type={label === 'Email' ? 'email' : label === 'Contact No.' ? 'tel' : 'text'}
                id={label.toLowerCase()}
                name={["entry.2005620554", "entry.1166974658", "entry.1045781291"][index]}
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
              className="bg-white bg-opacity-10 text-white border-2 py-2 px-6 rounded-full hover:bg-white hover:text-[#0033CC] transition duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              whileHover={{ scale: 1.05 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'SUBMIT'} <motion.span 
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
        <iframe name="hidden_iframe" ref={iframeRef} style={{display: 'none'}}></iframe>
        {/* Rest of the component remains the same */}
      </div>
    </div>
  );
};

export default ContactPage;
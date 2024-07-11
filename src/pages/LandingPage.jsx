import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import backgroundImage from '../assets/images/home_bg.jpg';
import Gallery from '../components/Gallery';
import Merchandise from '../components/Merchandise';

const LandingPage = () => {
  // Sample data for Gallery and Merchandise components
  const galleryImages = [
    '/path/to/image1.jpg',
    '/path/to/image2.jpg',
    '/path/to/image3.jpg',
  ];

  const merchandiseItems = [
    { name: 'T-Shirt', price: 19.99, image: '/path/to/tshirt.jpg' },
    { name: 'Cap', price: 14.99, image: '/path/to/cap.jpg' },
    { name: 'Poster', price: 9.99, image: '/path/to/poster.jpg' },
  ];

  return (
    <div className="min-h-screen">
      <Section 
        className="h-screen bg-cover bg-center" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <Section className="bg-[#0033CC] text-white">
        <h2 className="text-4xl mb-4">Introducing Our New Car</h2>
        <p className="text-xl">Experience the future of automotive engineering.</p>
      </Section>

      <Section className="bg-[#0033CC] text-white">
        <h2 className="text-4xl mb-4">Our Car Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src="/path/to/car-image.jpg" alt="Our New Car" className="rounded-lg shadow-lg" />
          <ul className="list-disc list-inside">
            <li>Top Speed: 200 mph</li>
            <li>0-60 mph: 3.2 seconds</li>
            <li>Weight: 1,500 kg</li>
            {/* Add more specifications */}
          </ul>
        </div>
      </Section>

      <Section className="bg-[#0033CC] text-white">
        <h2 className="text-4xl mb-4">Our Sponsors</h2>
        {/* Add sponsor logos or names here */}
      </Section>

      <Section className="bg-[#0033CC] text-white">
        <h2 className="text-4xl mb-4">Meet the Team</h2>
        {/* Add team member cards or grid here */}
      </Section>

      <Section className="bg-[#0033CC] text-white">
        <h2 className="text-4xl mb-4">Featured On</h2>
        {/* Add logos or names of platforms featuring your cars */}
      </Section>

      <Section className="bg-[#0033CC] text-white">
        <h2 className="text-4xl mb-4">Gallery</h2>
        <Gallery images={galleryImages} />
      </Section>

      <Section className="bg-[#0033CC] text-white">
        <h2 className="text-4xl mb-4">Merchandise</h2>
        <Merchandise items={merchandiseItems} />
      </Section>
    </div>
  );
};

export default LandingPage;
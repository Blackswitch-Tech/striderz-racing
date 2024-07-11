import React from 'react';
import { Link } from 'react-router-dom';
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
    <div>
      <Section 
        className="h-screen bg-cover bg-center flex items-center justify-center" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* You can add a welcome message or leave it empty for just the background */}
      </Section>

      <Section className="min-h-screen bg-[#0033CC] text-white flex items-center justify-end pr-16">
        <div className="relative w-full">
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-right">
  <h5 className="text-4xl mb-2 font-bold">Fueling Passion,</h5>
  <h2 className="text-4xl mb-2 font-bold">Engineering Excellence</h2>
  <p className="text-xl">We take pride in our dedication, talent, and the</p>
  <p className="text-xl">incredible performances that define us. Driven</p>
  <p className="text-xl">by a love for racing, we represent our college</p>
  <p className="text-xl">with genuine passion and engineering prowess.</p>
  <p className="text-xl mb-6">Dive deeper into our story.</p>
  <Link to="/about" className="flex items-center justify-end group hover:text-yellow-500 transition-colors duration-300 mb-12 text-xl text-white">
  READ MORE
  <span 
    style={{ 
      display: 'inline-block', 
      marginLeft: '8px', 
      fontSize: '15px',
      transition: 'transform 0.3s, color 0.3s'
    }}
    className="rotate-arrow"
  >
    ➔
  </span>
</Link>


          </div>
        </div>
      </Section>

      <Section className="min-h-screen bg-[#0033CC] text-white flex flex-col items-center justify-center pl-12">
  <div className="text-left mb-8">
    <h2 className="text-4xl ">Meet the Buggy</h2>
  </div>
  <div className="flex flex-col items-center mt-12">
    {/* Placeholder for the buggy car image */}
    <div className="w- h-80 bg-gray-300 mb-12 flex items-center justify-center">
      {/* Replace the div below with the actual image when available */}
      <p className="text-2xl">Buggy Car Image Placeholder</p>
    </div>
    
    <Link to="/journey" className="flex items-center text-xl text-white group hover:text-yellow-500 transition-colors duration-300 mb-12">
  DISCOVER MORE
  <span 
    style={{ 
      display: 'inline-block', 
      marginLeft: '8px', 
      fontSize: '15px',
      transition: 'transform 0.3s, color 0.3s'
    }}
    className="rotate-arrow"
  >
    ➔
  </span>
</Link>
    
    <div className="flex flex-row items-center space-x-16">
      <div className="text-center">
        <p className="text-xl font-bold">10hp</p>
        <p className="text-xl font-bold">@ 3600rpm</p>
        <p className="text-xl">Peak Power</p>
      </div>
      <div className="text-center">
        <p className="text-xl font-bold">CVT</p>
        <p className="text-xl">Transmission</p>
        <p className="text-xl">Type</p>
      </div>
      <div className="text-center">
        <p className="text-xl font-bold">19.66 Nm</p>
        <p className="text-xl font-bold">@ 2800rpm</p>
        <p className="text-xl">Peak Torque</p>
      </div>
    </div>
  </div>
</Section>




      <Section className="min-h-screen bg-[#0033CC] text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-5xl mb-8">Our Sponsors</h2>
          {/* Add sponsor logos or names here */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Add sponsor logos or names here */}
            <div className="bg-white h-24 w-full rounded-lg"></div>
            <div className="bg-white h-24 w-full rounded-lg"></div>
            <div className="bg-white h-24 w-full rounded-lg"></div>
            <div className="bg-white h-24 w-full rounded-lg"></div>
          </div>
        </div>
      </Section>

      <Section className="min-h-screen bg-[#0033CC] text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-5xl mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add team member cards here */}
            <div className="bg-white text-black p-4 rounded-lg">
              <img src="/path/to/team-member1.jpg" alt="Team Member 1" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-bold">John Doe</h3>
              <p>Engineer</p>
            </div>
            <div className="bg-white text-black p-4 rounded-lg">
              <img src="/path/to/team-member2.jpg" alt="Team Member 2" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p>Designer</p>
            </div>
            <div className="bg-white text-black p-4 rounded-lg">
              <img src="/path/to/team-member3.jpg" alt="Team Member 3" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-bold">Mike Johnson</h3>
              <p>Mechanic</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="min-h-screen bg-[#0033CC] text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-5xl mb-8">Featured On</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Add logos or names of platforms featuring your cars */}
            <div className="bg-white h-24 w-full rounded-lg"></div>
            <div className="bg-white h-24 w-full rounded-lg"></div>
            <div className="bg-white h-24 w-full rounded-lg"></div>
            <div className="bg-white h-24 w-full rounded-lg"></div>
          </div>
        </div>
      </Section>

      <Section className="min-h-screen bg-[#0033CC] text-white flex items-center justify-center">
        <div className="w-full">
          <h2 className="text-5xl mb-8 text-center">Gallery</h2>
          <Gallery images={galleryImages} />
        </div>
      </Section>

      <Section className="min-h-screen bg-[#0033CC] text-white flex items-center justify-center">
        <div className="w-full">
          <h2 className="text-5xl mb-8 text-center">Merchandise</h2>
          <Merchandise items={merchandiseItems} />
        </div>
      </Section>
    </div>
  );
};

export default LandingPage;

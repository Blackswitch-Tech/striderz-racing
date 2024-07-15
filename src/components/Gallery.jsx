import React from 'react';
import { motion } from 'framer-motion';

const Gallery = ({ images = [] }) => {
  // Default images if none are provided
  const defaultImages = [
    'https://via.placeholder.com/400x300',
    'https://via.placeholder.com/400x300',
    'https://via.placeholder.com/400x300',
  ];

  const displayImages = images.length > 0 ? images : defaultImages;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {displayImages.map((image, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-48 object-cover" />
        </motion.div>
      ))}
    </div>
  );
};

export default Gallery;

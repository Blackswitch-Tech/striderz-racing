import React from 'react';
import { motion } from 'framer-motion';

const Merchandise = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600">${item.price}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Merchandise;
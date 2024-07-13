import React from 'react';
import { motion } from 'framer-motion';
import Merc from "../assets/images/merch.svg"
const Merchandise = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className=" rounded-lg shadow-lg overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={Merc} alt={item.name} className="w-full h-ful object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="">${item.price}</p>
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
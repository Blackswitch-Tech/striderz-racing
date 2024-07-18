import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from 'react-icons/ai'; 
import photos from '../components/photos.json';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxPhoto, setLightboxPhoto] = useState(null);

  // Ensure the page scrolls to the top and sets the initial state
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxPhoto(photos[index]);
  };

  const closeLightbox = () => {
    setLightboxPhoto(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    setLightboxPhoto(photos[newIndex]);
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
    setLightboxPhoto(photos[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="bg-[#0033CC] min-h-screen flex flex-col items-center justify-center pt-20 md:px-4">
      <div className="w-full md:px-0">
        <h1 className='flex items-center justify-center pb-6 text-white text-3xl font-bold'>Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => openLightbox(index)}
            >
              <motion.img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-auto object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
        {/* Separator */}
        {/* Separator */}
<div className="w-full bg-[#0033CC] flex justify-center">
  <div className="w-full max-w-7xl bg-white h-[1px] opacity-50"></div>
</div>

        {lightboxPhoto && (
          <motion.div
            className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div onClick={closeLightbox} className="text-white absolute top-6 right-8 hover:scale-110 cursor-pointer">
              <AiOutlineClose className="h-8 w-8 text-white hover:text-gray-300" />
            </div>
            <motion.div
              className="max-w-3xl w-full p-4 rounded-lg flex items-center justify-between"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.button
                className="text-lg text-white hover:bg-white hover:text-black focus:outline-none"
                onClick={goToPrevious}
                whileHover={{ scale: 1.1 }}
              >
                <AiOutlineLeft />
              </motion.button>
              <motion.div
                className="flex flex-col items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <img
                  src={lightboxPhoto.url}
                  alt={lightboxPhoto.alt}
                  className="w-full  h-auto object-contain"
                />
              </motion.div>
              <motion.button
                className="text-xl  text-white hover:bg-white hover:text-black focus:outline-none"
                onClick={goToNext}
                whileHover={{ scale: 1.1 }}
              >
                <AiOutlineRight />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Gallery;

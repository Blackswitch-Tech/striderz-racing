import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import photos from './photos.json'; 

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 5,
    slidesToSlide: 3
  },
  mobile: {
    breakpoint: { max: 767, min: 300 },
    items: 1,
    slidesToSlide: 1
  }
};

const Carouselc = () => {
  const nav = useNavigate();
  const select_photos = photos.slice(0, 8);

  return (
    <div className="w-full mx-auto">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
        dynamicHeight={true}
        containerClass="w-full h-96" // Set height for the carousel container
        itemClass="p-2"
        transitionDuration={500}
      >
        {select_photos.map((photo, index) => (
          <div key={index} className="slider h-96"> {/* Set a fixed height for each slide */}
            <img
              src={photo.url}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain" // Maintain aspect ratio and fit within height
              onClick={() => nav("/gallery")}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carouselc;

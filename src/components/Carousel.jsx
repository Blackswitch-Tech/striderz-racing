import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
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

  return (
    <div className="parent">
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
        containerClass="carousel-container"
        itemClass="carousel-item-padding"
        transitionDuration={500}
      >
        {photos.map((photos, index) => (
          <div key={index} className="slider">
            <img
              src={photos.url}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
              onClick={() =>  nav("/gallery")}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carouselc;

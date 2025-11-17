import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Your images
import slide1 from '../assets/slide-1.jpg';
import slide2 from '../assets/slide-3.png';
import slide3 from '../assets/slide-4.png';
import slide4 from '../assets/slide-5.png';

// Slide data array to keep JSX clean
const slideData = [
  {
    img: slide1,
    title: "Redefining Modern Spaces",
    subtitle: "Experience comfort and style, perfectly blended."
  },
  {
    img: slide2,
    title: "Elegant & Minimalist",
    subtitle: "Simplicity is the ultimate sophistication."
  },
  {
    img: slide3,
    title: "Luxury Kitchens",
    subtitle: "Where culinary dreams meet design."
  },
  {
    img: slide4,
    title: "Progressive Office Design",
    subtitle: "Inspiring productivity, beautifully."
  }
];

const Banner = () => {
  return (
    // Container is full-screen height
    <div className="h-screen w-full"> 
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade" // Elegant fade transition
        pagination={{ clickable: true }} // The "app-like" dots
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full" // Swiper container takes full space
      >
        {slideData.map((slide, index) => (
          <SwiperSlide 
            key={index} 
            className="relative bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            {/* 1. Dark Overlay for contrast */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            
            {/* 2. Slide Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center p-4">
              <h1 
                className="font-playfair text-4xl md:text-6xl font-bold text-shadow-md mb-4"
              >
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl font-light text-shadow-sm mb-8 max-w-2xl">
                {slide.subtitle}
              </p>
              <button 
                className="py-3 px-8 text-sm font-semibold uppercase tracking-wider 
                           bg-transparent border-2 border-white text-white rounded-sm 
                           transition-all duration-300 hover:bg-white hover:text-black"
              >
                View Our Portfolio
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
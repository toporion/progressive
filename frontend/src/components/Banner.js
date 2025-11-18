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
    subtitle: "Experience comfort and style, perfectly blended. Our designs focus on sustainability and timeless elegance, ensuring your space is both beautiful and functional."
  },
  {
    img: slide2,
    title: "Elegant & Minimalist Design",
    subtitle: "Simplicity is the ultimate sophistication. We strip away the unnecessary to highlight the purity of form and function in every piece."
  },
  {
    img: slide3,
    title: "Luxury Kitchens & Living",
    subtitle: "Where culinary dreams meet design. Integrated appliances and custom cabinetry create a seamless, high-end experience for the modern home chef."
  },
  {
    img: slide4,
    title: "Progressive Office Layouts",
    subtitle: "Inspiring productivity, beautifully. Our workspaces promote collaboration and well-being with thoughtful lighting and ergonomic solutions."
  }
];

const Banner = () => {
  return (
    <div className="h-screen w-full overflow-hidden"> 
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide 
            key={index} 
            className="relative bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            {/* 1. Dark Overlay for general contrast */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            
            {/* 2. NEW: Subtle Gradient on the Right Edge */}
            <div 
                className="absolute inset-0 z-10"
                style={{
                    // Gradient from transparent on the left to black/10 (very subtle) on the right
                    backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.2) 100%)'
                }}
            ></div>
            
            {/* 3. Left-aligned Slide Content (z-20 ensures it's on top) */}
            <div className="relative z-20 flex flex-col justify-center h-full text-white p-6 md:p-16">
              <div className="max-w-4xl text-left">
                <h1 
                  className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 uppercase leading-tight" 
                  style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
                >
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl font-light mb-10 max-w-xl">
                  {slide.subtitle}
                </p>
                <button 
                  className="py-3 px-10 text-sm font-bold uppercase tracking-widest 
                             bg-white text-black border-2 border-white rounded-full 
                             transition-all duration-300 hover:bg-transparent hover:text-white"
                >
                  View Our Portfolio
                </button>
              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
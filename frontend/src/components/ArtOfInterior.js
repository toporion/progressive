import React from 'react';
// We need two icons now
import resi1 from '../assets/resi1.png'
import resi2 from '../assets/comer12.png'
import resi3 from '../assets/custom1.png'
import { ArrowRight, MoveRight } from 'lucide-react';

// --- FANCY SERVICE CARD COMPONENT ---
// This is a much "fancier" card.
// - Image is the background.
// - Content is overlaid on a gradient.
// - Description is hidden and appears on hover for a clean look.
// - Link is a "fancy" icon button that peeks out.
const ServiceCard = ({ imageUrl, title, description }) => (
  // Card container: Set a specific height and make it relative
  <div className="group relative h-96 overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl">
    
    {/* 1. The Image (as background) */}
    <img
      src={imageUrl}
      alt={title}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
    />
    
    {/* 2. The Gradient Overlay (for text readability) */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

    {/* 3. The Content (positioned at the bottom) */}
    {/* On hover, the container moves up to reveal more description */}
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-300 ease-in-out group-hover:pb-8">
      
      {/* 4. The "Fancy" Link (Icon Button) */}
      {/* This peeks out from the top right, a very modern touch */}
      <div
        className="absolute right-6 -top-5 flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 
                   text-zinc-900 shadow-md transition-all duration-300 
                   group-hover:rotate-45 group-hover:scale-110"
      >
        <ArrowRight className="h-4 w-4" />
      </div>

      <h3 className="font-playfair text-2xl font-bold">
        {title}
      </h3>
      
      {/* Description is revealed on hover using max-h for smooth animation */}
      <p className="mt-2 text-base leading-7 text-stone-200 opacity-0 max-h-0 
                   transition-all duration-300 group-hover:opacity-100 group-hover:max-h-40">
        {description}
      </p>
    </div>
  </div>
);


// --- MAIN COMPONENT ---
const ArtOfInterior = () => {
  
  // Define our services
  const services = [
    {
      title: "Residential Design",
      description: "Bespoke themes and finishes that reflect your unique style and personality, from concept to completion.",
      imageUrl:resi1// Darker placeholder
    },
    {
      title: "Commercial Spaces",
      description: "Full-service space planning and 3D rendering to create functional and inspiring environments for your business.",
      imageUrl:resi2 // Darker placeholder
    },
    {
      title: "Custom Furnishings",
      description: "Smart lighting and custom-designed furniture, curated to create the perfect mood and complete your space.",
      imageUrl:resi3 // Darker placeholder
    },
  ];

  return (
    // Main Section Container - NOW DARK
    <div className="w-full bg-zinc-800 py-24 sm:py-32">
      
      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* --- 1. The Header Section - NOW ASYMMETRICAL --- */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          
          {/* Left Column: Title */}
          <div>
            <span className="font-semibold text-sm tracking-widest uppercase text-amber-500">
              Welcome to Progressive INT
            </span>
            <h2 className="mt-4 font-playfair text-5xl sm:text-6xl font-bold text-white titan-one-regular">
              The Art of <span className='text-yellow-600'>Interior</span>
            </h2>
          </div>

          {/* Right Column: Description + Button */}
          <div>
            <p className="text-lg leading-8 text-stone-300">
              We are a creative studio dedicated to progressive design. 
              We believe that a space should not only look beautiful, but 
              feel personal. Let us transform your vision into a reality.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-x-2 text-lg font-semibold text-amber-500 
                         transition-colors duration-300 hover:text-amber-400"
            >
              View All Services
              <MoveRight className="h-5 w-5" />
            </a>
          </div>

        </div>

        {/* --- 2. The Service Grid --- */}
        {/* This stacks to 1 column on mobile, and becomes 3 on desktop */}
        <div className="mt-24 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ArtOfInterior;
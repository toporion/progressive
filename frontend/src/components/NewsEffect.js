import React, { useMemo } from 'react';

// Custom CSS for animations: continuous scrolling and 360-degree rotation.
// This is embedded inside the component for single-file deployment.
const CustomStyles = () => (
  <style>
    {`
      /* Keyframe for seamless right-to-left scrolling. 
         Moves the content by 50% of its total width, which is the exact width of one group, 
         ensuring a perfect, continuous loop. */
      @keyframes marquee-scroll {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); } 
      }

      /* Apply the marquee animation to the content */
      .marquee-container {
        white-space: nowrap;
        display: flex;
        width: max-content; /* Allow content to dictate width */
        /* Animation duration adjusted for readable speed and continuous loop */
        animation: marquee-scroll 60s linear infinite; 
      }
      
      /* Keyframe for continuous 360-degree rotation */
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      /* Apply the spin animation to the star icon */
      .star-icon {
        display: inline-block;
        animation: spin 3s linear infinite; /* 3s duration for rotation speed */
        vertical-align: middle;
        margin-left: 1rem; /* Equivalent to ml-4 */
        margin-right: 1rem; /* Equivalent to mr-4 */
      }
    `}
  </style>
);

// Star Icon Component - Increased size to 40px
const RotatingStar = () => (
  <svg
    className="star-icon text-yellow-400 drop-shadow-lg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 1.5L15.09 7.74L22.5 8.24L17.25 13.06L18.82 20.44L12 17.1L5.18 20.44L6.75 13.06L1.5 8.24L8.91 7.74L12 1.5Z"
    />
  </svg>
);

const NewsEffect = () => {
  // Define the list of services
  const services = useMemo(() => [
    'Interior Design',
    'Space Planning',
    'Furniture Selection',
    'Lighting Solutions',
    'Project Management',
    'Custom Millwork',
    'Color Consulting',
  ], []);

  // Create the combined content span: Service Name + Rotating Icon
  const serviceElement = (
    // Padding and margin added to space out the elements in the loop
    <span className="inline-flex items-center px-16">
      {services.map((service, index) => (
        <React.Fragment key={index}>
          <span className="mr-4">{service}</span>
          <RotatingStar />
        </React.Fragment>
      ))}
    </span>
  );

  return (
    <div className="bg-zinc-800 overflow-hidden shadow-2xl ">
      <CustomStyles />
      
      {/* Container with 200px height, full width, and a thin border 
        The border-white/30 class creates a subtle white border. 
      */}
      <div className="w-full h-[200px] flex items-center p-4 border border-white/30">
        
        {/* The scrolling element container (marquee-container) */}
        <div className="marquee-container">
          
          {/* Group 1: This is one full instance of your services list */}
          <div className="flex-shrink-0 flex items-center">
            <p className="text-6xl font-extrabold text-white uppercase tracking-widest leading-none">
              {serviceElement}
            </p>
          </div>
          
          {/* Group 2: This is the exact duplicate, positioned immediately after Group 1 
              The animation scrolls Group 1 off-screen as Group 2 takes its place, 
              creating a perfect loop. 
          */}
          <div className="flex-shrink-0 flex items-center">
            <p className="text-6xl font-extrabold text-white uppercase tracking-widest leading-none">
              {serviceElement}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsEffect;
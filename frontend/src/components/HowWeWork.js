import React from 'react';
import bg from '../assets/h1-bg01-1.png'
import wp1 from '../assets/h1-banner04.jpg'
import wp2 from '../assets/h1-banner05.jpg'
import wp3 from '../assets/h1-banner06.jpg'
import wp4 from '../assets/h1-banner09.jpg'

// --- MOCK ASSET IMPORTS ---
// Since we cannot use actual file imports (like from '../assets/...') in this single-file environment,
// we will use high-quality placeholder URLs and a subtle background pattern URL to simulate the imports.

const MOCK_ASSETS = {
  // Mock transparent background pattern image
  bg: bg,
  // Mock images for the 4 steps
  wp1: wp1, // Consultation
  wp2: wp2, // Design & Planning
  wp3: wp3, // Implementation
  wp4: wp4, // Handover
};

const workSteps = [
    { number: '01', title: 'Initial Consultation', description: 'We start by understanding your vision, budget, and functional needs to lay the perfect groundwork for your project.' , image: MOCK_ASSETS.wp1 },
    { number: '02', title: 'Design & Planning', description: 'Our experts craft bespoke 3D renders, mood boards, material palettes, and detailed floor plans for your final approval.', image: MOCK_ASSETS.wp2 },
    { number: '03', title: 'Implementation', description: 'The approved design comes to life through meticulous construction, precise installations, and stringent quality control.', image: MOCK_ASSETS.wp3 },
    { number: '04', title: 'Project Handover', description: 'We present you with the finished, move-in-ready space, complete with maintenance guides and a comprehensive final walkthrough.', image: MOCK_ASSETS.wp4 },
];

// Component for a single process step card
const ProcessCard = ({ number, title, description, image, staggerClass }) => (
    <div className={`
        relative flex flex-col items-start
        ${staggerClass} // MODIFIED: On desktop, this applies 'lg:relative' and 'lg:top-X' classes
                         // 'top' offset is used instead of 'margin-top' to ensure all cards maintain the same height in the grid container.
        bg-zinc-700/50 backdrop-blur-sm p-6 lg:p-8 rounded-2xl
        shadow-2xl shadow-zinc-900/50 border border-zinc-700/80
        transition-all duration-300 ease-in-out hover:shadow-cyan-500/20 hover:border-cyan-500/50
        group
    `}>
        {/* Step Image */}
        <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/3f3f46/ffffff?text=Image+Load+Error"; }}
            />
        </div>

        <div className="flex flex-col flex-1">
            {/* Step Number */}
            <h3 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 mb-2 opacity-90 font-['Inter']">
                {number}
            </h3>

            {/* Title */}
            <h4 className="text-2xl font-bold text-white mb-3 tracking-wide">
                {title}
            </h4>

            {/* Description */}
            <p className="text-zinc-300 text-base leading-relaxed">
                {description}
            </p>
        </div>
    </div>
);

// Utility function to determine the stagger class based on index
const getStaggerClass = (index) => {
    // MODIFIED: Using cumulative 'top' offsets (0px, 32px, 64px, 96px) for the staggered effect.
    // This uses relative positioning (top-X) to shift the card down visually without changing its actual height or the grid cell size,
    // ensuring consistent card dimensions.
    // Tailwind classes: top-0, top-8 (32px), top-16 (64px), top-24 (96px)
    const offsets = ['lg:top-0', 'lg:top-8', 'lg:top-16', 'lg:top-24'];
    return offsets[index] || 'lg:top-0';
}


const HowWeWork = () => {
    return (
        <div
            className="min-h-screen bg-zinc-800 py-16 lg:py-24 font-['Inter']"
            style={{
                backgroundImage: `url(${MOCK_ASSETS.bg})`,
                backgroundSize: 'cover',
                backgroundBlendMode: 'overlay',
                backgroundColor: '#27272a', // Ensure bg-zinc-800 fallback/base color is present
            }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section: Big title on left, description on right */}
                <header className="mb-16 lg:mb-24 grid grid-cols-1 lg:grid-cols-3 items-end gap-6">
                    {/* Left Column: Big Title */}
                    <div className="lg:col-span-2 text-center lg:text-left">
                        <p className="text-teal-400 uppercase tracking-widest text-base font-medium mb-1">Our Seamless Approach</p>
                        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                            The <span className="text-cyan-400">Future</span> of Design Execution
                        </h2>
                    </div>
                    {/* Right Column: Short Description */}
                    <div className="lg:col-span-1 text-center lg:text-right">
                        <p className="mt-4 text-xl text-zinc-400 font-light max-w-sm ml-auto">
                            We blend innovative technology with artisanal craftsmanship to deliver projects on time and beyond expectation.
                        </p>
                    </div>
                </header>

                {/* Work Process Grid with Staggered Layout */}
                <div className="
                    grid gap-6
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-4 lg:gap-x-4
                ">
                    {workSteps.map((step, index) => (
                        <ProcessCard
                            key={step.number}
                            {...step}
                            staggerClass={getStaggerClass(index)}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default HowWeWork;
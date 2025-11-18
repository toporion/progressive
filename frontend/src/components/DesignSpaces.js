import React from 'react';
import bg1 from '../assets/h1-bg01.jpg';
import over from '../assets/over.PNG'; // Your image is now used
// Import 'motion' from framer-motion
import { motion } from 'framer-motion';
// We'll use an arrow icon for the button
import { FaArrowRight } from 'react-icons/fa';

const DesignSpaces = () => {

    // --- Animation Variants ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, 
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 }, 
        visible: {
            opacity: 1,
            y: 0, 
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };
    // --- End Animation ---


    return (
        // Main Container: Kept 'justify-end' to push all content to the bottom
        <div 
            className="relative w-full min-h-screen flex flex-col justify-end"
            style={{ 
                backgroundImage: `url(${bg1})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed' 
            }}
        >
            {/* "Glassmorphism" Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div> 
            
            
            {/* Content Block (Animated) */}
            {/* 1. This is now a FLEX container that fills the width. */}
            {/* 2. 'flex-col lg:flex-row' creates the responsive split. */}
            {/* 3. 'items-end' aligns both blocks to the bottom. */}
            {/* 4. 'justify-between' pushes them to opposite sides. */}
            {/* 5. We removed 'max-w-5xl' to make it 'w-full' as you wanted. */}
            <motion.div 
                className="relative z-10 w-full flex flex-col lg:flex-row items-end justify-between items-center gap-16 px-8 lg:px-20 py-24"
                variants={containerVariants}
                initial="hidden"
                animate="visible" // Triggers the animation on load
            >
                {/* --- Left Column (Text) --- */}
                {/* This wrapper holds all your text content */}
                <div className="lg:w-1/2 w-full text-center lg:text-left">
                    {/* Decorative Line (Architectural Touch) */}
                    <motion.div 
                        className="w-20 h-1.5 bg-amber-400 mb-6 mx-auto lg:mx-0"
                        variants={itemVariants}
                    ></motion.div>

                    {/* Eyebrow Text */}
                    <motion.p 
                        className="text-amber-300 text-sm uppercase tracking-widest font-medium mb-4"
                        variants={itemVariants}
                    >
                        started in 2008
                    </motion.p>
                    
                    {/* Main Headline (5xl as requested) */}
                    <motion.h1 
                        className="text-white text-5xl md:text-7xl font-bold leading-tight font-serif"
                        variants={itemVariants}
                    >
                        Where Spaces <span className="text-amber-300">Inspire</span>,<br />
                        And Design Comes <span className="text-amber-300">Alive</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p 
                        className="text-gray-200 text-lg max-w-lg mt-6 mx-auto lg:mx-0"
                        variants={itemVariants}
                    >
                        Timeless design and unparalleled craftsmanship, 
                        brought to life in your home.
                    </motion.p>
                    
                    {/* Button (Modern "Pill" Shape) */}
                    <motion.div 
                        variants={itemVariants} 
                        className="mt-12 flex justify-center lg:justify-start"
                    >
                        <button 
                            className="bg-amber-400 text-black font-bold text-lg 
                                       px-8 py-3 rounded-full flex items-center gap-2
                                       transition duration-300 ease-in-out
                                       hover:bg-amber-300 hover:shadow-xl 
                                       transform hover:-translate-y-1"
                        >
                            Explore Our Work
                            <FaArrowRight size={16} />
                        </button>
                    </motion.div>
                </div>

                {/* --- Right Column (Image) --- */}
                {/* This is the new block for your 'over' image */}
                {/* It will also animate in using 'itemVariants' */}
                <motion.div 
                    className="lg:w-5/12 w-full mt-12 lg:mt-0"
                    variants={itemVariants}
                >
                    <img 
                        src={over} 
                        alt="Interior Design Showcase"
                        className="rounded-lg rounded-br-3xl rounded-tl-3xl shadow-2xl w-full object-cover"
                    />
                </motion.div>
            
            </motion.div>
        </div>
    );
};

export default DesignSpaces;
import React, { useState, useEffect } from 'react';
// Import Framer Motion for advanced animations
import { motion, AnimatePresence } from 'framer-motion';

// Your imported slide images
import slide1 from '../assets/slide-1.jpg';
import slide2 from '../assets/slide-3.png';
import slide3 from '../assets/slide-4.png';
import slide4 from '../assets/slide-5.png';

// --- UPDATED SLIDES ARRAY ---
// Now includes unique text for each slide
const slides = [
    { 
        src: slide1, 
        alt: 'Modern interior design', 
        title: 'Design Your Future',
        subtitle: 'Ergonomic and inspiring spaces since 2008.'
    },
    { 
        src: slide2, 
        alt: 'Corporate office space',
        title: 'Corporate Excellence',
        subtitle: 'Professional environments that inspire productivity.'
    },
    { 
        src: slide3, 
        alt: 'Luxury home decor',
        title: 'Luxury Home Décor',
        subtitle: 'Bringing your dream home to life, one detail at a time.'
    },
    { 
        src: slide4, 
        alt: 'Professional reception area',
        title: 'The First Impression',
        subtitle: 'Welcoming reception areas that define your brand.'
    },
];

// --- Animation Variants ---

// 1. For the Slideshow (Unchanged)
const slideVariants = {
    enter: { y: '-100vh', opacity: 0 },
    center: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] },
    },
    exit: {
        y: '100vh',
        opacity: 0,
        transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] },
    },
};

// 2. For the Glass Box (UPDATED with delay and exit)
const boxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.5, // Wait 0.5s for slide to enter
            type: 'spring',
            stiffness: 100,
            staggerChildren: 0.2, // Stagger children as before
        },
    },
    exit: { // Animate out
        opacity: 0,
        y: -20,
        transition: { duration: 0.3 }
    }
};

// 3. For the Text/Button items (Unchanged)
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 100 },
    },
};


const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Effect for handling the slideshow logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === slides.length - 1 ? 0 : prevSlide + 1
            );
        }, 5000); // 5-second interval

        return () => clearInterval(timer);
    }, []);

    return (
        // Main Banner Container
        <div className="relative h-screen w-full overflow-hidden">
            
            {/* Image Slideshow (Unchanged) */}
            <AnimatePresence initial={false}>
                <motion.img
                    key={currentSlide}
                    src={slides[currentSlide].src}
                    alt={slides[currentSlide].alt}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = `https://placehold.co/1920x1080/333/FFF?text=${slides[currentSlide].alt.replace(/\s/g, '+')}`; 
                    }}
                />
            </AnimatePresence>

            {/* Dark Overlay (Unchanged) */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content Container (UPDATED) */}
            <div className="relative z-10 flex h-full items-center justify-center text-center">
                
                {/* UPDATED:
                  - Wrapped the box in <AnimatePresence>
                  - Added a 'key' to the <motion.div> to force re-animation
                  - Added 'exit' prop
                */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide} // This is the magic!
                        className="
                            w-11/12 max-w-2xl 
                            rounded-2xl 
                            bg-white/20 
                            backdrop-blur-lg 
                            shadow-2xl
                            p-8 md:p-14
                            border border-white/20
                        "
                        variants={boxVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit" // Tell it to use the exit animation
                    >
                        {/* Animated Title (UPDATED to use dynamic text) */}
                        <motion.h1
                            className="
                                text-4xl font-bold text-white 
                                md:text-6xl
                            "
                            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}
                            variants={itemVariants}
                        >
                            {slides[currentSlide].title}
                        </motion.h1>

                        {/* Animated Subtitle (UPDATED to use dynamic text) */}
                        <motion.p
                            className="
                                mt-4 text-lg text-gray-200
                                md:text-xl
                            "
                            variants={itemVariants}
                        >
                            {slides[currentSlide].subtitle}
                        </motion.p>

                        {/* Animated Button (Unchanged, will re-animate with parent) */}
                        <motion.a
                            href="/projects"
                            className="
                                inline-block
                                mt-8 
                                rounded-full 
                                bg-gradient-to-r from-blue-500 to-blue-700
                                py-3 px-8 
                                text-lg font-semibold text-white 
                                shadow-lg
                                transition-all duration-300 
                                hover:shadow-[0_0_25px_theme(colors.blue.400)]
                                hover:-translate-y-1
                                hover:scale-105
                            "
                            variants={itemVariants}
                        >
                            Discover Now
                        </motion.a>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Banner;
import React, { useState, useEffect, useRef } from 'react';
import bg from '../assets/h1-bg01-1.png'

// --- MOCK ASSET IMPORTS ---
// Reusing the general dark background style from the previous component.
const MOCK_ASSETS = {
  bg: bg,
};

// Define the statistics data
const statsData = [
    { label: 'Years of Experience', target: 15, suffix: '+', delay: 0 },
    { label: 'Projects Completed', target: 850, suffix: '+', delay: 200 },
    { label: 'Skilled Tradespeople', target: 120, suffix: '+', delay: 400 },
    { label: 'Client Satisfaction', target: 98, suffix: '%', delay: 600 },
];

/**
 * AnimatedCounter Component
 * Handles the counting animation from 0 up to the target number when visible.
 */
const AnimatedCounter = ({ target, suffix, label, delay }) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);
    const animationDuration = 2000; // 2 seconds

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Start counting when the element enters the viewport
                    let startTime;
                    const step = (timestamp) => {
                        if (!startTime) startTime = timestamp;
                        const progress = timestamp - startTime;
                        const percentage = Math.min(progress / animationDuration, 1);
                        
                        // Use a custom easing function for a smoother look
                        const easedProgress = 1 - Math.pow(1 - percentage, 3); // Cubic ease-out
                        
                        const currentValue = Math.floor(easedProgress * target);
                        setCount(currentValue);

                        if (progress < animationDuration) {
                            requestAnimationFrame(step);
                        } else {
                            // Ensure the final target value is set
                            setCount(target);
                            observer.unobserve(counterRef.current);
                        }
                    };

                    // Add the initial delay before starting the animation
                    const delayTimer = setTimeout(() => {
                        requestAnimationFrame(step);
                    }, delay);

                    return () => clearTimeout(delayTimer);
                }
            },
            {
                root: null, // viewport
                rootMargin: '0px',
                threshold: 0.5, // Trigger when 50% of the item is visible
            }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, [target, delay]);

    return (
        <div ref={counterRef} className="text-center">
            {/* The actual counter value display */}
            <h3 className="
                text-6xl sm:text-7xl font-extrabold mb-2 leading-none
                text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500
                drop-shadow-lg
            ">
                {count.toLocaleString()}
                <span className="text-3xl font-light align-top ml-1">{suffix}</span>
            </h3>
            
            {/* Divider added between number and label */}
            <div className="w-16 h-1 bg-cyan-500/80 mx-auto my-4 rounded-full shadow-lg shadow-cyan-500/30"></div> 
            
            {/* The label/description */}
            <p className="text-lg sm:text-xl font-medium uppercase tracking-wider text-zinc-300">
                {label}
            </p>
        </div>
    );
};

// Main StatCounter Component
const StatCounter = () => {
    return (
        <section 
            // Ensures background color matches HowWeWork component (bg-zinc-800)
            className="py-16 lg:py-24 bg-zinc-800 font-['Inter']"
            style={{
                backgroundImage: `url(${MOCK_ASSETS.bg})`,
                backgroundSize: 'cover',
                backgroundBlendMode: 'overlay',
                // Fallback color for bg-zinc-800
                backgroundColor: '#27272a', 
            }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
             

                {/* Statistics Grid */}
                <div className="
                    grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8
                    p-6 sm:p-10 lg:p-12
                    bg-zinc-800/60 backdrop-blur-md rounded-3xl
                    border border-zinc-700/70 shadow-2xl shadow-zinc-900/70
                ">
                    {statsData.map((stat) => (
                        // We use a responsive separator on mobile only
                        <div key={stat.label} className="
                            relative
                            after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-[-24px] 
                            md:after:hidden 
                            after:w-px after:bg-zinc-700/50 
                            last:after:hidden
                        ">
                            <AnimatedCounter 
                                target={stat.target} 
                                suffix={stat.suffix} 
                                label={stat.label}
                                delay={stat.delay}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatCounter;
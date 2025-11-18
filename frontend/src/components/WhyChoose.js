import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import img1 from '../assets/2.PNG';
import img2 from '../assets/3.PNG';
import img3 from '../assets/4.PNG';
import graphic1 from '../assets/graphic1.png';
import graphic2 from '../assets/graphic2.png';

const WhyChoose = () => {
    return (
        <div className='bg-zinc-900  pb-32 md:pb-64'>
            <div className='max-w-7xl mx-auto text-white py-12 px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 md:gap-16 relative'>
                
                {/* ================= LEFT SIDE: PROFESSIONAL CONTENT ================= */}
                <div className='flex flex-col justify-center space-y-8'>
                    
                    {/* Header Section */}
                    <div>
                        <span className='text-orange-400 font-semibold tracking-wider uppercase text-sm'>
                            Best interior decoration company in Bangladesh
                        </span>
                        <h2 className='text-4xl md:text-5xl font-serif font-bold mt-3 leading-tight'>
                            Progressive INT. Interior <span className='text-gray-500'>Solution</span>
                        </h2>
                        <div className='w-20 h-1 bg-orange-500 mt-6 mb-6 rounded-full'></div>
                    </div>

                    {/* Description */}
                    <div className='space-y-4 text-gray-300 text-lg leading-relaxed'>
                        <p>
                            <strong className='text-white'>Progressive INT.Interior Solution</strong> is a trusted interior design company in Dhaka, Bangladesh. We create stylish and functional spaces for homes, offices, and commercial projects.
                        </p>
                        <p>
                            From apartments and villas to offices, showrooms, and restaurants, we provide customized designs that balance <span className='text-orange-300 italic'>creativity, comfort, and budget.</span>
                        </p>
                    </div>

                    {/* Feature List */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-4'>
                        {[
                            "Modern design ideas",
                            "Smart space planning",
                            "Custom furniture",
                            "Budget-friendly service",
                            "Creative decoration",
                            "Timely handover"
                        ].map((item, index) => (
                            <div key={index} className='flex items-center space-x-3'>
                                <CheckCircle className='w-5 h-5 text-orange-500 flex-shrink-0' />
                                <span className='font-medium text-gray-200'>{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action Area */}
                    <div className='bg-gray-800 p-6 rounded-xl border border-gray-700'>
                        <p className='text-gray-400 text-sm mb-3'>
                            Turn your ideas into reality. Call now at <span className='text-white font-mono'>01715-006404</span>
                        </p>
                        <button className='group flex items-center justify-center w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-orange-500/20'>
                            Start Your Project
                            <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                        </button>
                    </div>
                </div>

                {/* ================= RIGHT SIDE: IMAGES ================= */}
                {/* Changed to grid-cols-1 on mobile to fix distortion, grid-cols-2 on md+ */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-8 lg:mt-0'>
                    
                    {/* --- Column 1: img1 & The Floating Group --- */}
                    <div className='relative'>
                        {/* Base Image (img1) */}
                        <img 
                            src={img1} 
                            alt="Main Feature" 
                            className='w-full h-auto rounded-lg object-cover' 
                        />

                        {/* === FLOATING GROUP WRAPPER === */}
                        {/* md:absolute makes it stack on mobile (static) and float on desktop (absolute) */}
                        <div className='md:absolute mt-6 md:mt-0 md:top-[60%] md:left-[50%] w-full z-20'>
                            
                            {/* Graphic 1 */}
                            <img 
                                src={graphic1} 
                                alt="Decoration" 
                                className='hidden md:block absolute -left-28 top-3/4 -translate-y-1/2 w-36 h-36 object-contain animate-pulse z-0' 
                            />

                            {/* --- GLOSSY BORDER WRAPPER FOR IMG3 --- */}
                            {/* This div creates the running light border effect */}
                            <div className='relative p-[3px] rounded-xl overflow-hidden shadow-xl'>
                                {/* The Rotating Gradient Background (The Glossy Light) */}
                                <div className='absolute inset-[-50%] bg-[conic-gradient(transparent,transparent,#fbbf24,transparent,transparent)] animate-[spin_3s_linear_infinite]'></div>
                                
                                {/* The Image sitting on top of the gradient */}
                                <img 
                                    src={img3} 
                                    alt="Overlay Feature" 
                                    // Added bg-gray-900 to cover the center of the gradient so only border shows
                                    className='relative z-10 w-full h-auto rounded-lg object-cover bg-gray-900' 
                                />
                            </div>

                            {/* Graphic 2 */}
                            {/* <img 
                                src={graphic2} 
                                alt="Decoration" 
                                className='absolute -right-8 md:-right-12 top-[80%] w-24 h-24 object-contain animate-pulse z-20' 
                            /> */}
                        </div>
                    </div>

                    {/* --- Column 2: Just img2 --- */}
                    {/* mt-10 ensures spacing, on mobile it naturally follows the column above */}
                    <div className='mt-10'> 
                        <img 
                            src={img2} 
                            alt="Secondary Feature" 
                            className='relative z-10 w-full h-auto rounded-lg object-cover shadow-lg' 
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhyChoose;
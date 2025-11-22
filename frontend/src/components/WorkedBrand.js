import React, { useState, useEffect } from 'react';

// [USER ACTION REQUIRED]: UNCOMMENT THESE LINES IN YOUR PROJECT
// import brack from '../assets/brack.png';
// import brand from '../assets/HSBC.png';
// import brand1 from '../assets/Ific-Bank.png';
// import brand2 from '../assets/Logo_of_Navana_Group.svg.png';
// import brand3 from '../assets/oneBank.png';
// import brand4 from '../assets/wori.png';
// import brand5 from '../assets/1631363744719.jpeg';
// import brand6 from '../assets/Standard.png';

// [FOR PREVIEW ONLY]: Placeholders. DELETE these in your real project.
const brack = 'https://placehold.co/400x200/09090b/22d3ee?text=Brac+Bank&font=montserrat';
const brand = 'https://placehold.co/400x200/09090b/22d3ee?text=HSBC&font=montserrat';
const brand1 = 'https://placehold.co/400x200/09090b/22d3ee?text=IFIC&font=montserrat';
const brand2 = 'https://placehold.co/400x200/09090b/22d3ee?text=Navana&font=montserrat';
const brand3 = 'https://placehold.co/400x200/09090b/22d3ee?text=One+Bank&font=montserrat';
const brand4 = 'https://placehold.co/400x200/09090b/22d3ee?text=Woori&font=montserrat';
const brand5 = 'https://placehold.co/400x200/09090b/22d3ee?text=Partner&font=montserrat';
const brand6 = 'https://placehold.co/400x200/09090b/22d3ee?text=Standard+C&font=montserrat';

const WorkedBrand = () => {
    // Loading external fonts dynamically for that "Funky" typography
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Space+Grotesk:wght@300;500;700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        return () => document.head.removeChild(link);
    }, []);

    const brandList = [
        { id: 1, src: brack, name: "Brac Bank" },
        { id: 2, src: brand, name: "HSBC" },
        { id: 3, src: brand1, name: "IFIC Bank" },
        { id: 4, src: brand2, name: "Navana Group" },
        { id: 5, src: brand3, name: "One Bank" },
        { id: 6, src: brand4, name: "Woori Bank" },
        { id: 7, src: brand5, name: "Partner Brand" },
        { id: 8, src: brand6, name: "Standard Chartered" },
    ];

    return (
        <section className="relative w-full bg-zinc-950 py-20 md:py-32 overflow-hidden selection:bg-cyan-500 selection:text-black">
            
            {/* --- DYNAMIC BACKGROUND --- */}
            {/* Grid Lines */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
                style={{ 
                    backgroundImage: 'linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)', 
                    backgroundSize: '60px 60px' 
                }}>
            </div>
            
            {/* Massive Watermark Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full text-center pointer-events-none overflow-hidden">
                <h1 className="text-[12vw] md:text-[15vw] leading-none font-bold text-zinc-900/80 tracking-tighter whitespace-nowrap" 
                    style={{ fontFamily: "'Syncopate', sans-serif", WebkitTextStroke: "2px rgba(34, 211, 238, 0.05)" }}>
                    ALLIANCES
                </h1>
            </div>

            {/* Floating Orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[128px]"></div>


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* --- HEADER WITH TYPOGRAPHY --- */}
                <div className="mb-20 border-b border-zinc-800 pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest mb-4 font-['Space_Grotesk'] animate-pulse">
                            ● SYSTEM: ONLINE
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-widest" style={{ fontFamily: "'Syncopate', sans-serif" }}>
                            Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Partners</span>
                        </h2>
                    </div>
                    <div className="max-w-md text-right">
                        <p className="text-zinc-400 text-sm md:text-base font-['Space_Grotesk'] leading-relaxed">
                            Collaborating with industry titans to architect the future of interior spaces.
                        </p>
                        <div className="flex justify-end gap-2 mt-2">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="w-2 h-2 bg-cyan-500/50 rounded-sm"></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- THE HOLOGRAPHIC GRID --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {brandList.map((item, index) => (
                        <div 
                            key={item.id}
                            className="group relative h-40 md:h-52 perspective-1000"
                        >
                            {/* Card Body */}
                            <div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/60 rounded-xl flex flex-col items-center justify-center overflow-hidden transition-all duration-500 group-hover:bg-zinc-900/80 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] group-hover:-translate-y-2">
                                
                                {/* THE SCANNER EFFECT (Animated gradient line) */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent -translate-y-[100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out z-0"></div>
                                
                                {/* Corner Brackets (Tech Look) */}
                                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-zinc-700 group-hover:border-cyan-500 transition-colors duration-300"></div>
                                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-zinc-700 group-hover:border-cyan-500 transition-colors duration-300"></div>
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-zinc-700 group-hover:border-cyan-500 transition-colors duration-300"></div>
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-zinc-700 group-hover:border-cyan-500 transition-colors duration-300"></div>

                                {/* Logo */}
                                <div className="relative z-10 p-6 transition-transform duration-300 group-hover:scale-110">
                                    <img 
                                        src={item.src} 
                                        alt={item.name} 
                                        className="w-full h-full object-contain filter grayscale sepia brightness-75 contrast-125 transition-all duration-500 group-hover:filter-none group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                    {/* Fallback Text */}
                                    <div className="hidden flex-col items-center justify-center text-center">
                                        <span className="text-zinc-500 text-sm font-bold font-['Space_Grotesk'] uppercase tracking-wider group-hover:text-cyan-400 transition-colors">{item.name}</span>
                                    </div>
                                </div>

                                {/* Reveal Text on Hover */}
                                <div className="absolute bottom-3 left-0 w-full text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    <p className="text-[10px] text-cyan-500 font-['Space_Grotesk'] tracking-[0.2em]">VERIFIED</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- FOOTER TICKER --- */}
                <div className="mt-16 pt-8 border-t border-zinc-800/50 flex justify-between items-center text-zinc-600 text-xs font-['Space_Grotesk']">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-ping"></div>
                        PROGRESSIVE INT. DATABASE // V.2.4
                    </div>
                    <div className="hidden md:block font-mono tracking-tight opacity-50">
                        X: {Math.floor(Math.random() * 900)} Y: {Math.floor(Math.random() * 900)} Z: 04
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WorkedBrand;
import React, { useEffect } from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight, Hexagon } from 'lucide-react';

const Footer = () => {
    // Ensure fonts are loaded if this component renders alone
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Space+Grotesk:wght@300;500;700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        return () => document.head.removeChild(link);
    }, []);

    return (
        <footer className="relative w-full bg-zinc-950 pt-20 pb-10 overflow-hidden border-t border-zinc-800">
            
            {/* --- BACKGROUND FX --- */}
            {/* Grid overlay */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
                style={{ 
                    backgroundImage: 'linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)', 
                    backgroundSize: '40px 40px' 
                }}>
            </div>
            {/* Glow spots */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* --- TOP SECTION: CTA & NEWSLETTER --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider mb-4" style={{ fontFamily: "'Syncopate', sans-serif" }}>
                            Let's Build <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">The Future</span>
                        </h2>
                        <p className="text-zinc-400 font-['Space_Grotesk'] max-w-md">
                            Join our exclusive network. Get architectural insights and design blueprints delivered to your terminal.
                        </p>
                    </div>

                    {/* Terminal Style Input */}
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
                        <div className="relative flex items-center bg-zinc-900 rounded-lg border border-zinc-700 overflow-hidden p-1">
                            <span className="pl-4 pr-2 text-cyan-500 font-mono text-lg animate-pulse">{'>'}</span>
                            <input 
                                type="email" 
                                placeholder="ENTER_EMAIL_ADDRESS" 
                                className="w-full bg-transparent text-white placeholder-zinc-600 font-mono text-sm focus:outline-none py-3 px-2"
                            />
                            <button className="bg-cyan-500/10 hover:bg-cyan-500 text-cyan-500 hover:text-zinc-950 font-bold py-2 px-6 rounded transition-all duration-300 flex items-center gap-2 font-['Space_Grotesk'] uppercase tracking-wider border border-cyan-500/50">
                                Init <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- MIDDLE SECTION: LINKS --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-zinc-800 pt-16 pb-8">
                    
                    {/* Col 1: Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <Hexagon className="text-cyan-500 fill-cyan-500/10" size={32} strokeWidth={1.5} />
                            <span className="text-xl font-bold text-white tracking-widest" style={{ fontFamily: "'Syncopate', sans-serif" }}>
                                PROGRESSIVE
                            </span>
                        </div>
                        <p className="text-zinc-500 text-sm leading-relaxed font-['Space_Grotesk']">
                            Redefining spaces through algorithmic design and industrial elegance. 
                            Est. 2024.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-cyan-400 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300 group">
                                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6 flex items-center gap-2 text-sm" style={{ fontFamily: "'Syncopate', sans-serif" }}>
                            <span className="w-1 h-4 bg-cyan-500"></span> Navigation
                        </h4>
                        <ul className="space-y-3 font-['Space_Grotesk']">
                            {['Home', 'Projects', 'Process', 'About Us', 'Careers'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-zinc-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 text-sm group">
                                        <span className="w-1 h-1 bg-zinc-600 rounded-full group-hover:bg-cyan-500 transition-colors"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Services */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6 flex items-center gap-2 text-sm" style={{ fontFamily: "'Syncopate', sans-serif" }}>
                            <span className="w-1 h-4 bg-blue-600"></span> Services
                        </h4>
                        <ul className="space-y-3 font-['Space_Grotesk']">
                            {['Interior Architecture', 'Corporate Design', 'Renovation Logic', 'Consultancy', '3D Rendering'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-zinc-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 text-sm group">
                                        <span className="w-1 h-1 bg-zinc-600 rounded-full group-hover:bg-blue-500 transition-colors"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4: Contact */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6 flex items-center gap-2 text-sm" style={{ fontFamily: "'Syncopate', sans-serif" }}>
                            <span className="w-1 h-4 bg-purple-500"></span> Coordinate
                        </h4>
                        <ul className="space-y-4 font-['Space_Grotesk'] text-sm">
                            <li className="flex items-start gap-3 text-zinc-400">
                                <MapPin className="text-cyan-500 mt-1 shrink-0" size={18} />
                                <span>
                                    Unit D1,H-58,R-16,banani<br />
                                    Dhaka, Bangladesh - 1212
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-400">
                                <Phone className="text-cyan-500 shrink-0" size={18} />
                                <span>01715-006-404</span>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-400">
                                <Mail className="text-cyan-500 shrink-0" size={18} />
                                <span>ceo@progressiveintbd.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* --- BOTTOM BAR --- */}
                <div className="border-t text-white border-zinc-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs  font-mono">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        SYSTEM STATUS: OPERATIONAL
                    </div>
                    <div className="text-center md:text-right text-white">
                        &copy; {new Date().getFullYear()} PROGRESSIVE INT. ALL RIGHTS RESERVED. <br className="md:hidden"/> DESIGNED BY TOPORION.
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
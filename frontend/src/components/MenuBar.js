import React, { useState, useEffect } from 'react';

// --- SVG Icons for the component ---

// Hamburger/Menu Icon
const MenuIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

// Close/X Icon
const XIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// Social Icons (Simple representations)
const FacebookIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z"></path>
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.27 0 .34.04.67.11.98C7.6 9.09 4.03 7.13 1.64 4.16c-.33.57-.52 1.23-.52 1.94 0 1.48.75 2.79 1.9 3.56-.7-.02-1.36-.21-1.93-.53v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.73.15-1.12.15-.27 0-.54-.03-.8-.08.54 1.7 2.1 2.93 3.95 2.97-1.45 1.14-3.28 1.8-5.26 1.8-.34 0-.68-.02-1.01-.06 1.88 1.2 4.12 1.9 6.56 1.9 7.85 0 12.15-6.5 12.15-12.15 0-.18 0-.37-.01-.55.83-.6 1.56-1.36 2.14-2.23z"></path>
  </svg>
);

const LinkedInIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
  </svg>
);

// --- The MenuBar Component ---

const MenuBar = () => {
    // State to track if the page is scrolled
    const [isScrolled, setIsScrolled] = useState(false);
    // State to track if the mobile menu is open
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Effect to add and remove the scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            // Set state to true if scrolled more than 100px, false otherwise
            setIsScrolled(window.scrollY > 100);
        };

        // Add event listener when component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array means this effect runs once on mount

    // CSS classes for the nav element
    const navClasses = `
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500 ease-in-out
        ${isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-lg' // Scrolled state
            : 'bg-gradient-to-b from-black/30 to-transparent' // Default state (not scrolled)
        }
        ${isMenuOpen && !isScrolled ? 'bg-white shadow-lg' : ''} // Mobile menu open override
    `;

    // CSS classes for menu links (changes text color on scroll)
    const linkClasses = `
        relative py-2 px-3
        font-medium
        transition-colors duration-300
        ${isScrolled || isMenuOpen
            ? 'text-gray-700 hover:text-blue-600'
            : 'text-white hover:text-gray-200'
        }
        after:content-['']
        after:absolute after:left-3 after:right-3 after:bottom-0
        after:h-0.5
        after:bg-blue-600
        after:scale-x-0
        after:transition-transform after:duration-300
        hover:after:scale-x-100
    `;

    // CSS classes for mobile menu links
    const mobileLinkClasses = `
        block py-3 px-4 text-lg font-medium text-gray-700 
        hover:bg-gray-100 rounded-md
    `;

    const socialIconClasses = `
        h-6 w-6 
        transition-colors duration-300
        ${isScrolled || isMenuOpen
            ? 'text-gray-600 hover:text-blue-600'
            : 'text-white hover:text-gray-200'
        }
    `;

    return (
        <nav className={navClasses}>
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Left Section: Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className={`
                            text-2xl font-bold 
                            ${isScrolled || isMenuOpen ? 'text-gray-900' : 'text-white'}
                        `}>
                            Progressive INT.
                        </a>
                    </div>

                    {/* Middle Section: Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:space-x-2">
                        <a href="/" className={linkClasses}>Home</a>
                        <a href="/about" className={linkClasses}>About Us</a>
                        <a href="/services" className={linkClasses}>Services</a>
                        <a href="/projects" className={linkClasses}>Projects</a>
                        <a href="/contact" className={linkClasses}>Contact</a>
                    </div>

                    {/* Right Section: Desktop Socials & Login */}
                    <div className="hidden md:flex items-center space-x-5">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon className={socialIconClasses} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <TwitterIcon className={socialIconClasses} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon className={socialIconClasses} />
                        </a>
                        <a
                            href="/login"
                            className="
                                bg-blue-600 text-white 
                                py-2 px-5 rounded-full 
                                font-medium
                                transition-all duration-300
                                hover:bg-blue-700
                                hover:shadow-lg
                            "
                        >
                            Login
                        </a>
                    </div>

                    {/* Mobile: Hamburger Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`
                                p-2 rounded-md
                                transition-colors duration-300
                                ${isScrolled || isMenuOpen
                                    ? 'text-gray-800 hover:bg-gray-100'
                                    : 'text-white hover:bg-white/20'
                                }
                            `}
                            aria-label="Toggle menu"
                        >
                            {/* Animate between Menu and X icon */}
                            {isMenuOpen ? (
                                <XIcon className="h-7 w-7" />
                            ) : (
                                <MenuIcon className="h-7 w-7" />
                            )}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Menu: Dropdown Panel */}
            {/* Uses a smooth transition for height */}
            <div
                className={`
                    transition-all duration-500 ease-in-out overflow-hidden md:hidden
                    ${isMenuOpen ? 'max-h-screen shadow-xl' : 'max-h-0'}
                `}
            >
                <div className="px-2 pt-2 pb-6 space-y-2 sm:px-3 bg-white">
                    <a href="/" className={mobileLinkClasses}>Home</a>
                    <a href="/about" className={mobileLinkClasses}>About Us</a>
                    <a href="/services" className={mobileLinkClasses}>Services</a>
                    <a href="/projects" className={mobileLinkClasses}>Projects</a>
                    <a href="/contact" className={mobileLinkClasses}>Contact</a>

                    {/* Separator */}
                    <div className="border-t border-gray-200 my-4"></div>

                    {/* Login Button for Mobile */}
                    <a
                        href="/login"
                        className="
                            block w-full text-center
                            bg-blue-600 text-white 
                            py-3 px-5 rounded-lg 
                            font-medium
                            transition-all duration-300
                            hover:bg-blue-700
                        "
                    >
                        Login
                    </a>

                    {/* Social Icons for Mobile */}
                    <div className="flex justify-center items-center space-x-6 pt-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon className="h-7 w-7 text-gray-600 hover:text-blue-600" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <TwitterIcon className="h-7 w-7 text-gray-600 hover:text-blue-600" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon className="h-7 w-7 text-gray-600 hover:text-blue-600" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MenuBar;
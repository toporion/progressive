import React from 'react';
import { 
  Menu, Search, Bell, ChevronDown
} from 'lucide-react';

// Profile data mock (Needed for the user avatar in the topbar)
const profile = {
  name: "Anya Taylor",
  role: "Lead Designer",
  initials: "AT",
  avatar: "https://placehold.co/100x100/38bdf8/ffffff?text=AT"
};

/**
 * Topbar Component for Search, Notifications, and User Menu.
 * Uses zinc-900 background and sky-400 (glowing blue) accents.
 */
const Topbar = ({ toggleSidebar }) => {
  // Use a default no-op function if toggleSidebar is not passed, for safety
  const onToggle = toggleSidebar || (() => console.log('Toggle called'));

  return (
    <header className="fixed top-0 right-0 z-30 h-16 bg-zinc-900 shadow-xl shadow-zinc-900/50 border-b border-zinc-800 
                       w-full lg:w-[calc(100%-16rem)] transition-all duration-300">
      <div className="flex items-center justify-between h-full px-6">
        
        {/* Title / Mobile Menu Button */}
        <div className="flex items-center">
            <button 
                onClick={onToggle} 
                className="lg:hidden p-2 text-sky-400 hover:text-sky-300 transition-colors mr-3"
                aria-label="Toggle Menu"
            >
                <Menu className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-semibold text-white tracking-wide hidden sm:block">
                Projects Overview
            </h2>
        </div>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
          
          {/* Search Input (Hidden on mobile, visible on desktop) */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search clients, projects..."
              className="w-64 py-2 pl-10 pr-4 text-sm bg-zinc-800 text-white rounded-lg focus:outline-none 
                         focus:ring-2 focus:ring-sky-500 border border-transparent focus:border-sky-500/50 transition-all"
            />
          </div>

          {/* Notifications Icon */}
          <button className="p-2 text-zinc-300 hover:text-sky-400 transition-colors relative">
            <Bell className="w-5 h-5" />
            {/* Notification Badge */}
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-zinc-900" />
          </button>

          {/* User Profile Summary */}
          <div className="flex items-center cursor-pointer p-1 rounded-full hover:bg-zinc-800 transition-colors">
            <img 
              src={profile.avatar}
              alt={profile.initials}
              className="w-8 h-8 rounded-full object-cover border border-sky-400/50"
              onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/100x100/38bdf8/ffffff?text=${profile.initials}`; }}
            />
            <ChevronDown className="w-4 h-4 text-zinc-400 ml-1" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
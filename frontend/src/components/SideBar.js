import React from 'react';
import { LayoutDashboard, Trello, Users, Receipt, Settings, Menu, X, Component, Sun } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '#dashboard' },
  { name: 'Projects', icon: Trello, href: '#projects' },
  { name: 'Clients', icon: Users, href: '#clients' },
  { name: 'Finances', icon: Receipt, href: '#finances' },
];

const NavLink = ({ item, active = false }) => {
  const Icon = item.icon;
  const baseClasses = "flex items-center p-3 rounded-xl transition-all duration-200 cursor-pointer";
  const activeClasses = "bg-zinc-700 text-sky-400 shadow-md shadow-cyan-500/30 font-semibold";
  const inactiveClasses = "text-zinc-300 hover:bg-zinc-700 hover:text-sky-300";

  return (
    <a 
      href={item.href} 
      className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}
    >
      <Icon className="w-5 h-5 mr-3" />
      <span className="text-sm">{item.name}</span>
    </a>
  );
};

// Now accepts props from Dashboard
const SideBar = ({ isOpen, toggleSidebar }) => {
  const currentPath = '#projects'; 

  const profile = {
    name: "Anya Taylor",
    role: "Lead Designer",
    initials: "AT"
  };

  return (
    <>
      {/* Backdrop for Mobile - Closes menu when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-[60] lg:hidden backdrop-blur-sm" 
          onClick={toggleSidebar}
        />
      )}

      {/* Main Sidebar Structure */}
      {/* z-[70] ensures it sits ABOVE the Topbar on mobile */}
      <aside 
        className={`
          fixed inset-y-0 left-0 w-64 bg-zinc-800 text-zinc-50 p-6 
          transform transition-transform duration-300 ease-in-out z-[70]
          lg:translate-x-0 lg:shadow-2xl lg:shadow-zinc-900/50 border-r border-zinc-700/50
          ${isOpen ? 'translate-x-0 shadow-2xl shadow-zinc-900/50' : '-translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full">
          
          {/* Header & Logo */}
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-zinc-700/50">
            <div className="flex items-center space-x-2">
              <Component className="w-8 h-8 text-sky-400 shadow-lg shadow-cyan-500/50 rounded-md p-1" />
              <h1 className="text-xl font-extrabold tracking-wider text-sky-200">
                Design<span className="text-sky-400">Hub</span>
              </h1>
            </div>
            
            {/* Close Button for Mobile */}
            <button 
              onClick={toggleSidebar} 
              className="lg:hidden p-1 text-zinc-300 hover:text-sky-400 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-grow space-y-2">
            {navItems.map((item) => (
              <NavLink 
                key={item.name} 
                item={item} 
                active={item.href === currentPath} 
              />
            ))}
          </nav>

          {/* Settings & User Profile */}
          <div className="mt-auto pt-6 border-t border-zinc-700/50 space-y-4">
            <NavLink 
              item={{ name: 'Settings', icon: Settings, href: '#settings' }} 
              active={false} 
            />

            <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-700/50">
                <span className="text-sm text-zinc-300 flex items-center">
                    <Sun className="w-4 h-4 mr-2 text-yellow-300" />
                    Dark Mode
                </span>
                <div className="w-10 h-5 flex items-center rounded-full p-0.5 cursor-pointer bg-sky-500">
                    <div className="w-4 h-4 bg-zinc-100 rounded-full shadow-md transform translate-x-4 transition-transform duration-200"></div>
                </div>
            </div>

            <div className="flex items-center p-3 bg-zinc-900 rounded-xl shadow-lg border border-zinc-700">
              <div className="w-10 h-10 bg-sky-600/70 rounded-full flex items-center justify-center font-bold text-lg text-white ring-2 ring-sky-400 shadow-sky-400/30">
                {profile.initials}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">{profile.name}</p>
                <p className="text-xs text-zinc-400">{profile.role}</p>
              </div>
            </div>

          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
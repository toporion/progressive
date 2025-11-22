import React, { useState, useMemo } from 'react';
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Settings,
  Menu,
  X,
  Sparkles,
  Home,
  Star,
  User,
  LogOut,
  ChevronRight,
  Sun,
  Moon,
} from 'lucide-react';

// --- Configuration and Data ---
// EDIT THIS ARRAY to change the sidebar/mobile menu items.
const NAV_ITEMS = [
  { name: 'Dashboard', icon: LayoutDashboard, route: 'dashboard' },
  { name: 'Projects', icon: Briefcase, route: 'projects' },
  { name: 'Clients', icon: Users, route: 'clients' },
  { name: 'Team', icon: User, route: 'team' },
  { name: 'Settings', icon: Settings, route: 'settings' },
];

const accentColor = 'text-sky-400';
const hoverBg = 'hover:bg-zinc-800';
const activeBg = 'bg-zinc-800/70 border-r-4 border-sky-400';
const mobileActiveBg = 'text-sky-400';
const shadowGlow = 'shadow-lg shadow-sky-500/30';
const buttonGlow = 'hover:ring-2 hover:ring-sky-400 transition-all duration-200';

// --- Components (All contained within the single file) ---

// 1. Sidebar Component (Desktop only)
const SideBarComponent = ({ activePage, setActivePage }) => {
  return (
    <div
      className={`hidden lg:flex flex-col w-64 bg-zinc-900 border-r border-zinc-700 h-full fixed top-0 left-0 transition-all duration-300 z-30`}
      style={{ minHeight: '100vh' }}
    >
      <div className="p-6 flex items-center justify-center border-b border-zinc-800">
        <Sparkles className="w-8 h-8 text-sky-400 mr-2" />
        <h1 className="text-xl font-extrabold text-white tracking-wider">
          <span className={accentColor}>Design</span> HQ
        </h1>
      </div>
      <nav className="flex-grow p-4 space-y-2 mt-4">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.route}
            onClick={() => setActivePage(item.route)}
            className={`flex items-center w-full p-3 rounded-xl text-zinc-200 font-medium ${hoverBg} ${buttonGlow} ${
              activePage === item.route ? activeBg : ''
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-zinc-800">
        <div className="flex items-center p-3 bg-zinc-800/50 rounded-xl">
          <div className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
            AD
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Alex Design</p>
            <p className="text-xs text-zinc-400">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. Topbar Component (Mobile/Tablet and Desktop Header)
const TopbarComponent = ({ pageTitle, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <header className="sticky top-0 bg-zinc-900/95 backdrop-blur-sm z-20 shadow-md shadow-zinc-900/50">
      <div className="flex items-center justify-between h-16 px-4 lg:px-8 w-full">
        {/* Mobile Menu Button (Shows only on Mobile) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 rounded-full text-zinc-200 ${hoverBg} ${buttonGlow}`}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Page Title */}
        <h2 className="text-xl font-semibold text-white tracking-tight flex-grow text-center lg:text-left">
          {pageTitle}
        </h2>

        {/* Right Side Controls (Desktop Only) */}
        <div className="hidden lg:flex items-center space-x-4">
            <button
              className={`p-2 rounded-full text-zinc-200 ${hoverBg} ${buttonGlow}`}
              aria-label="Toggle Dark Mode"
            >
              <Sun className="w-5 h-5 text-yellow-300" />
            </button>
            <div className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center text-white font-bold text-sm cursor-pointer">
                AD
            </div>
            <button
                className={`p-2 rounded-full text-zinc-200 ${hoverBg} ${buttonGlow}`}
                aria-label="Logout"
            >
                <LogOut className="w-5 h-5 text-red-400" />
            </button>
        </div>
      </div>
    </header>
  );
};

// 3. MobileBar Component (Bottom Navigation - Mobile only, acts like a mobile app tab bar)
const MobileBarComponent = ({ activePage, setActivePage }) => {
    // Only show the most important 4 icons on the bottom bar
    const mobileNavItems = NAV_ITEMS.slice(0, 4); 

    return (
        <div className="fixed bottom-0 left-0 w-full lg:hidden bg-zinc-900 border-t border-zinc-800 z-40 p-1">
            <nav className="flex justify-around">
                {mobileNavItems.map((item) => (
                    <button
                        key={item.route}
                        onClick={() => setActivePage(item.route)}
                        className={`flex flex-col items-center justify-center w-full p-2 rounded-lg transition-colors duration-150 ${hoverBg} ${
                            activePage === item.route ? mobileActiveBg : 'text-zinc-400'
                        }`}
                        aria-label={item.name}
                    >
                        <item.icon className="w-6 h-6" />
                        <span className="text-xs mt-1 hidden xs:block">{item.name}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
};

// 4. AdminHome Component (Content Renderer - where page content goes)
const AdminHomeComponent = ({ activePage }) => {
    const pageData = useMemo(() => {
        switch (activePage) {
            case 'dashboard':
                return {
                    title: 'System Overview',
                    icon: LayoutDashboard,
                    content: 'Welcome back, Alex. Your key performance indicators and recent activities are summarized here. Focus on the upcoming client presentation.',
                    stats: [
                        { label: 'Total Projects', value: 45, icon: Briefcase, color: 'text-sky-400' },
                        { label: 'Active Clients', value: 12, icon: Users, color: 'text-emerald-400' },
                        { label: 'Revenue (Q3)', value: '$1.2M', icon: Star, color: 'text-yellow-400' },
                    ],
                };
            case 'projects':
                return {
                    title: 'Project Management',
                    icon: Briefcase,
                    content: 'Manage all ongoing and completed interior design projects. Use the filter below to find specific project stages.',
                };
            case 'clients':
                return {
                    title: 'Client Database',
                    icon: Users,
                    content: 'Access all client contact information, historical preferences, and project history.',
                };
            case 'team':
                return {
                    title: 'Team Directory',
                    icon: User,
                    content: 'Review team member roles, current assignments, and manage access permissions.',
                };
            case 'settings':
                return {
                    title: 'System Settings',
                    icon: Settings,
                    content: 'Configure general application settings, notifications, and integration endpoints.',
                };
            default:
                return { title: '404 Not Found', content: 'The requested admin page could not be located.' };
        }
    }, [activePage]);

    const Card = ({ label, value, icon: Icon, color }) => (
        <div className={`p-5 rounded-xl bg-zinc-800/70 border border-zinc-700 transition-all duration-300 hover:bg-zinc-800 hover:${shadowGlow} cursor-pointer`}>
            <div className="flex justify-between items-center">
                <Icon className={`w-8 h-8 ${color}`} />
                <p className="text-3xl font-bold text-white">{value}</p>
            </div>
            <p className="mt-3 text-sm font-medium text-zinc-400">{label}</p>
        </div>
    );

    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <div className="flex items-center mb-6">
                <pageData.icon className={`w-8 h-8 mr-3 ${accentColor}`} />
                <h1 className="text-3xl font-extrabold text-white">{pageData.title}</h1>
            </div>

            <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700 mb-8">
                <p className="text-zinc-300 leading-relaxed">{pageData.content}</p>
                {activePage === 'dashboard' && (
                    <button className={`mt-4 px-6 py-2 bg-sky-600 text-white font-semibold rounded-full ${buttonGlow} ${shadowGlow} transition-transform transform hover:scale-[1.02]`}>
                        View Full Report <ChevronRight className="w-4 h-4 inline ml-1" />
                    </button>
                )}
            </div>

            {activePage === 'dashboard' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {pageData.stats.map((stat, index) => (
                        <Card key={index} {...stat} />
                    ))}
                </div>
            )}

            {/* Placeholder Content */}
            <div className="bg-zinc-800/30 p-6 rounded-2xl border border-zinc-700 min-h-[300px]">
                <h3 className="text-xl font-semibold text-white mb-4 border-b border-zinc-700 pb-2">Recent Activity Log</h3>
                <ul className="space-y-3 text-zinc-400">
                    <li><span className={`${accentColor} font-bold`}>[09:30]</span> Project 'Zen Garden' updated status to 'Rendering'.</li>
                    <li><span className={`${accentColor} font-bold`}>[09:25]</span> New client 'Innovate Corp' added to database.</li>
                    <li><span className={`${accentColor} font-bold`}>[08:45]</span> Team meeting scheduled for 11:00 AM today.</li>
                    <li><span className={`${accentColor} font-bold`}>[Yesterday]</span> Budget approved for 'Luxury Condo' phase 2.</li>
                </ul>
            </div>
        </div>
    );
};

// 5. App Component (Integrates all - acts as the main Dashboard layout)
const App = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Derive the current page title for the Topbar
  const currentPageTitle = useMemo(() => {
    const item = NAV_ITEMS.find(item => item.route === activePage);
    return item ? item.name : 'Dashboard';
  }, [activePage]);

  // Mobile drawer component (used for the slide-out menu on mobile)
  const MobileDrawer = () => (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-zinc-900/90 backdrop-blur-sm z-50 transform ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 lg:hidden`}
    >
      <div className="w-3/4 h-full bg-zinc-900 p-6 border-r border-zinc-700">
        <div className="flex justify-between items-center pb-6 border-b border-zinc-800">
          <div className="flex items-center">
            <Sparkles className="w-7 h-7 text-sky-400 mr-2" />
            <h1 className="text-xl font-extrabold text-white tracking-wider">
              <span className={accentColor}>Admin</span> Panel
            </h1>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className={`p-2 rounded-full text-zinc-200 ${hoverBg} ${buttonGlow}`}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-grow pt-8 space-y-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.route}
              onClick={() => {
                setActivePage(item.route);
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center w-full p-4 rounded-xl text-zinc-200 font-medium ${hoverBg} ${buttonGlow} ${
                activePage === item.route ? activeBg : ''
              }`}
            >
              <item.icon className="w-5 h-5 mr-4" />
              {item.name}
            </button>
          ))}
        </nav>
        
        {/* Mobile bottom user info and logout */}
        <div className="absolute bottom-4 left-4 right-4 p-4 bg-zinc-800/50 rounded-xl">
             <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                        AD
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-white">Alex Design</p>
                        <p className="text-xs text-zinc-400">Admin</p>
                    </div>
                </div>
                <button className={`p-2 rounded-full text-red-400 ${hoverBg} ${buttonGlow}`} aria-label="Logout">
                    <LogOut className="w-5 h-5" />
                </button>
            </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-zinc-900 font-sans">
      {/* 1. Desktop Sidebar */}
      <SideBarComponent activePage={activePage} setActivePage={setActivePage} />

      {/* 2. Main Content Area */}
      <div className="lg:ml-64 pb-16 lg:pb-0">
        {/* 2a. Top Bar */}
        <TopbarComponent
          pageTitle={currentPageTitle}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        {/* 2b. Main Content */}
        <main className="min-h-[calc(100vh-4rem)]">
            <AdminHomeComponent activePage={activePage} />
        </main>
      </div>
      
      {/* 3. Mobile Bottom Bar */}
      <MobileBarComponent activePage={activePage} setActivePage={setActivePage} />

      {/* 4. Mobile Drawer Overlay */}
      <MobileDrawer />
    </div>
  );
};

export default App;
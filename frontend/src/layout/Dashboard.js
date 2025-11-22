import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Topbar from '../components/Topbar';

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Sidebar - Passed state and toggle function */}
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Topbar - Passed toggle function to open sidebar on mobile */}
      <Topbar toggleSidebar={toggleSidebar} />

      {/* Main Content Area */}
      {/* lg:ml-64 = Push content right on desktop */}
      {/* pt-20 = Push content down so it's not hidden behind Topbar */}
      <main className="transition-all duration-300 lg:ml-64 pt-20 p-4 lg:p-6 text-white">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
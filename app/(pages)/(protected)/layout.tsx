'use client';
import Header from '@/app/components/header';
import Sidebar from '@/app/components/sidebar';
import { useTheme } from '@/app/context/ThemeContext';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  const [expanded, setExpanded] = useState(true);

  return (
    <div
      className={`min-h-screen flex flex-col md:flex-row ${
        theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'
      }`}
    >
      {/* Sidebar - hidden on mobile, shown on md screens and up */}
      <div
        className={`hidden md:block flex-shrink-0 fixed h-screen ${!expanded ? 'md:w-10 lg:w-16' : 'md:w-64 lg:w-72'}`}
      >
        <Sidebar setExpanded={setExpanded} expanded={expanded} />
      </div>

      {/* Main content area */}
      <div className={`flex-1 flex flex-col ${!expanded ? 'md:ml-10 lg:ml-16' : 'md:ml-64 lg:ml-72'}`}>
        <Header />
        <main className="flex-1 p-4 md:p-6 overflow-auto">{children}</main>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Layout;

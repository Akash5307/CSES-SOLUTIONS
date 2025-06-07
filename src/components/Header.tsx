
import React from 'react';

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  return (
    <header className="bg-gray-800 shadow-md p-4 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center">
        <button 
          onClick={onToggleSidebar} 
          className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 mr-3"
          aria-label="Toggle sidebar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <h1 className="text-xl sm:text-2xl font-bold text-blue-400">
          CSES Solutions Viewer
        </h1>
      </div>
      <a 
        href="https://cses.fi/problemset/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center"
      >
        CSES Problemset
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </a>
    </header>
  );
};

export default Header;
    
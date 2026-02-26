import React from 'react';

interface HeaderProps {
  onToggleSidebar: () => void;
  sidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, sidebarOpen }) => (
  <header className="h-14 flex-shrink-0 flex items-center justify-between px-4
    bg-zinc-950 border-b border-zinc-800 z-30 relative">

    {/* Left */}
    <div className="flex items-center gap-3">
      <button
        onClick={onToggleSidebar}
        aria-label="Toggle sidebar"
        className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
      >
        {sidebarOpen
          ? /* X */
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          : /* Hamburger */
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        }
      </button>

      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-900/50">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
          </svg>
        </div>
        <span className="font-semibold text-zinc-100 tracking-tight text-[15px]">
          CSES Solutions
        </span>
      </div>
    </div>

    {/* Right */}
    <a
      href="https://cses.fi/problemset/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 text-sm text-zinc-400
        hover:text-indigo-400 hover:bg-indigo-500/10
        px-3 py-1.5 rounded-lg transition-colors border border-transparent hover:border-indigo-500/20"
    >
      <span className="hidden sm:inline">CSES Problemset</span>
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
    </a>
  </header>
);

export default Header;

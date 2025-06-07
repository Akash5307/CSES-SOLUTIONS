
import React, { useState, useCallback } from 'react';
import type { Solution } from './types';
import { csesProblemSet } from './data/csesSolutions';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SolutionDisplay from './components/SolutionDisplay';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const handleSelectSolution = useCallback((solution: Solution) => {
    setSelectedSolution(solution);
    if (window.innerWidth < 768) { // md breakpoint in Tailwind
      setIsSidebarOpen(false);<App />
    }
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);
  

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
      <Header onToggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          problemSet={csesProblemSet} 
          onSelectSolution={handleSelectSolution}
          selectedSolutionId={selectedSolution?.id}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <main className={`flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto transition-all duration-300 ease-in-out ${isSidebarOpen && 'md:ml-72'}`}>
          {selectedSolution ? (
            <SolutionDisplay solution={selectedSolution} />
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-center p-8 bg-gray-800 rounded-lg shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto mb-4 text-blue-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>
                <h2 className="text-2xl font-semibold mb-2 text-gray-100">Welcome to CSES Solutions Viewer</h2>
                <p className="text-gray-400">Select a problem from the sidebar to view its C++ solution.</p>
                <p className="text-sm mt-4 text-gray-500">Explore categories and challenges to enhance your competitive programming skills.</p>
              </div>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
    
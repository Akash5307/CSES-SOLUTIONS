import React, { useState, useCallback } from 'react';
import type { Solution } from './types';
import { csesProblemSet } from './data/csesSolutions';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SolutionDisplay from './components/SolutionDisplay';
import Footer from './components/Footer';

const totalProblems = csesProblemSet.reduce((s, c) => s + c.problems.length, 0);

const WelcomeScreen: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-full py-20 px-6 text-center">
    <div className="fade-in max-w-md">
      <div className="w-16 h-16 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
        <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      </div>

      <h2 className="text-3xl font-bold text-zinc-100 mb-3">CSES Solutions</h2>
      <p className="text-zinc-400 mb-10 leading-relaxed">
        Browse clean C++ solutions with explanations for every problem.
      </p>

      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {[
          { v: totalProblems, l: 'Problems' },
          { v: csesProblemSet.length, l: 'Categories' },
          { v: 'C++17', l: 'Language' },
        ].map(({ v, l }) => (
          <div key={l} className="bg-zinc-800/80 border border-zinc-700/60 rounded-xl px-6 py-3">
            <div className="text-xl font-bold text-zinc-100">{v}</div>
            <div className="text-xs text-zinc-500 mt-0.5">{l}</div>
          </div>
        ))}
      </div>

      <p className="text-sm text-zinc-600 flex items-center justify-center gap-2">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        Pick a problem from the sidebar
      </p>
    </div>
  </div>
);

const App: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSelect = useCallback((s: Solution) => {
    setSelectedSolution(s);
    if (window.innerWidth < 768) setSidebarOpen(false);
  }, []);

  const categoryName = selectedSolution
    ? csesProblemSet.find(c => c.problems.some(p => p.id === selectedSolution.id))?.name
    : undefined;

  return (
    // Full-height flex column – header + content row
    <div className="flex flex-col h-screen bg-zinc-950 text-zinc-100 overflow-hidden">

      <Header onToggleSidebar={() => setSidebarOpen(p => !p)} sidebarOpen={sidebarOpen} />

      {/* Content row */}
      <div className="flex flex-1 min-h-0 relative">

        {/* Mobile backdrop */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-black/60 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <Sidebar
          problemSet={csesProblemSet}
          onSelectSolution={handleSelect}
          selectedId={selectedSolution?.id}
          open={sidebarOpen}
        />

        <main className="flex-1 overflow-y-auto min-w-0">
          {selectedSolution ? (
            <SolutionDisplay
              key={selectedSolution.id}
              solution={selectedSolution}
              categoryName={categoryName}
            />
          ) : (
            <WelcomeScreen />
          )}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default App;

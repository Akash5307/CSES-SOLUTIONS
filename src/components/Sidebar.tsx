
import React, { useState } from 'react';
import type { ProblemSet, Solution, ProblemCategory } from '../types';
import ChevronDownIcon from './icons/ChevronDownIcon';
import ChevronUpIcon from './icons/ChevronUpIcon';

interface SidebarProps {
  problemSet: ProblemSet;
  onSelectSolution: (solution: Solution) => void;
  selectedSolutionId?: string;
  isOpen: boolean;
  onClose: () => void;
}

const CategoryAccordion: React.FC<{
  category: ProblemCategory;
  onSelectSolution: (solution: Solution) => void;
  selectedSolutionId?: string;
}> = ({ category, onSelectSolution, selectedSolutionId }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-3 text-left text-gray-300 hover:bg-gray-700 rounded-md transition-colors duration-150 focus:outline-none focus:bg-gray-700"
      >
        <span className="font-semibold">{category.name}</span>
        {isOpen ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
      </button>
      {isOpen && (
        <ul className="mt-1 pl-4 border-l-2 border-gray-700">
          {category.problems.map((problem) => (
            <li key={problem.id} className="my-1">
              <button
                onClick={() => onSelectSolution(problem)}
                className={`w-full text-left py-2 px-3 rounded-md text-sm transition-colors duration-150 focus:outline-none 
                  ${selectedSolutionId === problem.id 
                    ? 'bg-blue-600 text-white font-medium' 
                    : 'text-gray-400 hover:bg-gray-700 hover:text-gray-200 focus:bg-gray-700 focus:text-gray-200'}`}
              >
                {problem.title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ problemSet, onSelectSolution, selectedSolutionId, isOpen, onClose }) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black opacity-50 md:hidden"
          onClick={onClose}
        ></div>
      )}
      <aside 
        className={`fixed md:static top-0 left-0 z-40 w-72 h-full bg-gray-800 shadow-lg p-4 overflow-y-auto transition-transform duration-300 ease-in-out 
                  ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 flex-shrink-0`}
        aria-label="Sidebar"
      >
        <div className="flex justify-between items-center mb-4 md:hidden">
            <h2 className="text-lg font-semibold text-blue-400">Problems</h2>
            <button
                onClick={onClose}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                aria-label="Close sidebar"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <nav>
          {problemSet.map((category) => (
            <CategoryAccordion
              key={category.name}
              category={category}
              onSelectSolution={onSelectSolution}
              selectedSolutionId={selectedSolutionId}
            />
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
    
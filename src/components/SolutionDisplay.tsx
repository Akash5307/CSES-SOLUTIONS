import React from 'react';
import type { Solution } from '../types';
import CodeBlock from './CodeBlock';

interface Props {
  solution: Solution;
  categoryName?: string;
}

const BADGE: Record<string, string> = {
  Easy:   'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
  Medium: 'bg-amber-500/10  text-amber-400  border-amber-500/25',
  Hard:   'bg-red-500/10    text-red-400    border-red-500/25',
  Varies: 'bg-violet-500/10 text-violet-400 border-violet-500/25',
};

const SolutionDisplay: React.FC<Props> = ({ solution, categoryName }) => (
  <article className="max-w-4xl mx-auto px-5 sm:px-8 py-8 fade-in">

    {/* Breadcrumb */}
    {categoryName && (
      <p className="flex items-center gap-1.5 text-sm text-zinc-500 mb-4">
        <span>{categoryName}</span>
        <svg className="w-3 h-3 text-zinc-700" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        <span className="text-zinc-400">{solution.title}</span>
      </p>
    )}

    {/* Title */}
    <h1 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-5 leading-tight">
      {solution.title}
    </h1>

    {/* Meta row */}
    <div className="flex flex-wrap items-center gap-3 mb-8">
      <a
        href={solution.csesLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm text-zinc-400
          hover:text-indigo-400 border border-zinc-700/60 hover:border-indigo-500/40
          hover:bg-indigo-500/5 px-3 py-1.5 rounded-lg transition-all"
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
        View on CSES
      </a>

      <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold border ${
        BADGE[solution.difficulty] ?? 'bg-zinc-700/50 text-zinc-300 border-zinc-600'
      }`}>
        {solution.difficulty}
      </span>
    </div>

    {/* Approach */}
    {solution.notes && (
      <div className="mb-8 flex gap-4 p-5 bg-indigo-950/40 border border-indigo-800/30 rounded-xl">
        <div className="flex-shrink-0 w-7 h-7 bg-indigo-500/15 rounded-lg flex items-center justify-center mt-0.5">
          <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-indigo-300 mb-1.5">Approach</h3>
          <p className="text-sm text-zinc-300 leading-relaxed">{solution.notes}</p>
        </div>
      </div>
    )}

    {/* Code */}
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">
        C++ Solution
      </h3>
      <CodeBlock code={solution.cppCode.trim()} language="cpp" filename={`${solution.id}.cpp`} />
    </div>
  </article>
);

export default SolutionDisplay;

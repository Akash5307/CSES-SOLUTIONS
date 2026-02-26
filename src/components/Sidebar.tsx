import React, { useState } from 'react';
import type { ProblemSet, Solution, ProblemCategory } from '../types';

interface SidebarProps {
  problemSet: ProblemSet;
  onSelectSolution: (s: Solution) => void;
  selectedId?: string;
  open: boolean;
}

const DOT: Record<string, string> = {
  Easy:   'bg-emerald-400',
  Medium: 'bg-amber-400',
  Hard:   'bg-red-400',
  Varies: 'bg-violet-400',
};

const Category: React.FC<{
  cat: ProblemCategory;
  onSelect: (s: Solution) => void;
  selectedId?: string;
  query: string;
}> = ({ cat, onSelect, selectedId, query }) => {
  const [open, setOpen] = useState(true);

  const matches = cat.problems.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );
  if (matches.length === 0) return null;

  return (
    <div className="mb-2">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-2 py-1.5 rounded-md group"
      >
        <span className="text-[11px] font-semibold tracking-widest uppercase text-zinc-500 group-hover:text-zinc-400 transition-colors">
          {cat.name}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-zinc-600 tabular-nums">{matches.length}</span>
          <svg
            className={`w-3 h-3 text-zinc-600 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </button>

      {open && (
        <ul className="mt-0.5 space-y-0.5">
          {matches.map(p => {
            const active = selectedId === p.id;
            return (
              <li key={p.id}>
                <button
                  onClick={() => onSelect(p)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] text-left transition-all ${
                    active
                      ? 'bg-indigo-600 text-white font-medium shadow-md shadow-indigo-900/40'
                      : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    active ? 'bg-white/60' : (DOT[p.difficulty] ?? 'bg-zinc-600')
                  }`} />
                  <span className="truncate">{p.title}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ problemSet, onSelectSolution, selectedId, open }) => {
  const [query, setQuery] = useState('');
  const total = problemSet.reduce((s, c) => s + c.problems.length, 0);

  const noResults = query.length > 0 &&
    problemSet.every(c => c.problems.every(p =>
      !p.title.toLowerCase().includes(query.toLowerCase())
    ));

  return (
    /*
     * LAYOUT STRATEGY
     * ─────────────────────────────────────────────────────────────
     * Mobile  : position:fixed overlay sliding in from left (z-30)
     * Desktop : in-flow flex child; outer width animates 0 ↔ 280px
     *
     * The outer <aside> is the "shell" that controls size/position.
     * The inner <div> is always 280 px wide – it gets clipped by the
     * outer's overflow:hidden when the shell shrinks to w-0.
     * ─────────────────────────────────────────────────────────────
     */
    <aside
      className={[
        // ── Mobile: fixed overlay ──────────────────────────────
        'fixed top-14 left-0 bottom-0 z-30 w-72',
        // ── Desktop: static flex child ─────────────────────────
        'md:relative md:top-auto md:bottom-auto md:left-auto md:z-auto',
        'md:overflow-hidden md:flex-shrink-0',
        // ── Transitions ────────────────────────────────────────
        'transition-all duration-300 ease-in-out',
        // ── Open / closed ──────────────────────────────────────
        open
          ? 'translate-x-0 md:w-72'
          : '-translate-x-full md:w-0 md:translate-x-0',
      ].join(' ')}
    >
      {/* Inner — fixed 288 px, actual visible sidebar */}
      <div className="w-72 h-full flex flex-col bg-zinc-900 border-r border-zinc-800">

        {/* Header */}
        <div className="flex-shrink-0 px-3 pt-4 pb-3 border-b border-zinc-800">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-sm font-semibold text-zinc-200">Problems</span>
            <span className="text-xs bg-zinc-800 border border-zinc-700/60 text-zinc-500 px-2 py-0.5 rounded-full tabular-nums">
              {total}
            </span>
          </div>

          {/* Search */}
          <div className="relative">
            <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500 pointer-events-none"
              fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search problems…"
              className="w-full bg-zinc-800 text-zinc-200 placeholder-zinc-600
                rounded-lg pl-8 pr-8 py-2 text-sm outline-none
                border border-zinc-700/50 focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30
                transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Problem list */}
        <nav className="flex-1 overflow-y-auto px-2 py-3 space-y-3">
          {problemSet.map(cat => (
            <Category
              key={cat.name}
              cat={cat}
              onSelect={onSelectSolution}
              selectedId={selectedId}
              query={query}
            />
          ))}
          {noResults && (
            <p className="text-center text-sm text-zinc-600 py-8">No problems found</p>
          )}
        </nav>

        {/* Difficulty legend */}
        <div className="flex-shrink-0 px-4 py-3 border-t border-zinc-800">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {Object.entries(DOT).map(([label, color]) => (
              <div key={label} className="flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${color}`} />
                <span className="text-[11px] text-zinc-600">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

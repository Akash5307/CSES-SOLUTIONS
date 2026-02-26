import React from 'react';

const Footer: React.FC = () => (
  <footer className="max-w-4xl mx-auto px-5 sm:px-8 pb-10 mt-10">
    <div className="border-t border-zinc-800 pt-6 flex items-center justify-between gap-4 flex-wrap">
      <span className="text-xs text-zinc-600">
        Not affiliated with CSES &mdash; built for learning.
      </span>
      <a
        href="https://cses.fi/problemset/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-zinc-600 hover:text-indigo-400 transition-colors"
      >
        cses.fi/problemset ↗
      </a>
    </div>
  </footer>
);

export default Footer;

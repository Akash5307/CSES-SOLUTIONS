import React, { useState, useCallback, useRef, useEffect } from 'react';

declare const hljs: { highlightElement(el: HTMLElement): void };

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, filename }) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = codeRef.current;
    if (el && typeof hljs !== 'undefined') {
      el.removeAttribute('data-highlighted');
      hljs.highlightElement(el);
    }
  }, [code]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code)
      .then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); })
      .catch(() => alert('Failed to copy.'));
  }, [code]);

  return (
    <div className="rounded-xl overflow-hidden border border-zinc-700/50 shadow-2xl shadow-black/50">

      {/* ── Title bar ── */}
      <div className="flex items-center justify-between px-4 py-3
        bg-zinc-800 border-b border-zinc-700/50">

        <div className="flex items-center gap-3">
          {/* macOS dots */}
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-amber-500/60" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/60" />
          </div>
          {filename && (
            <span className="text-xs text-zinc-500 font-mono">{filename}</span>
          )}
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all border ${
            copied
              ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
              : 'bg-zinc-700/60 text-zinc-400 border-transparent hover:bg-zinc-700 hover:text-zinc-200'
          }`}
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      {/* ── Code area ── */}
      {/*
       * bg-[#0d1117] = GitHub dark background.
       * The hljs theme also sets this color on the <code> element,
       * but we set it here on the <pre> too so padding areas match.
       */}
      <div className="overflow-x-auto" style={{ backgroundColor: '#0d1117' }}>
        <pre className="p-5 m-0 text-sm leading-relaxed" style={{ background: 'none' }}>
          <code ref={codeRef} className={`language-${language}`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;

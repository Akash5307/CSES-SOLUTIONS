
import React, { useState, useCallback } from 'react';
import ClipboardIcon from './icons/ClipboardIcon';
import CheckIcon from './icons/CheckIcon'; // Assuming you'll create this for feedback

interface CodeBlockProps {
  code: string;
  language: string; // Not used for styling yet, but good for future extension
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
      // You could add more user-friendly error handling here
      alert('Failed to copy code to clipboard.');
    });
  }, [code]);

  return (
    <div className="relative group bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-700">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1.5 bg-gray-700 text-gray-300 rounded-md opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-200 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        aria-label="Copy code to clipboard"
      >
        {copied ? <CheckIcon className="w-5 h-5 text-green-400" /> : <ClipboardIcon className="w-5 h-5" />}
      </button>
      <pre className="p-4 text-sm overflow-x-auto text-gray-200">
        <code className={`language-${language} whitespace-pre-wrap break-all`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
    
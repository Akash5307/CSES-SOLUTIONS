
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-center p-4 text-sm text-gray-500 border-t border-gray-700">
      &copy; {new Date().getFullYear()} CSES Solutions Viewer. Created for educational purposes.
      Not affiliated with CSES.
    </footer>
  );
};

export default Footer;
    
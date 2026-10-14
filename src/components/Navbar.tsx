import React from 'react';
import { Bus } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a href="#" className="flex items-center gap-2.5 text-slate-900 tracking-tight font-bold text-xl whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity">
          <div className="w-9 h-9 rounded-lg bg-blue-700 flex items-center justify-center text-white shadow-sm">
            <Bus className="w-5 h-5" />
          </div>
          <span>TN IV Express</span>
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#smart-suggester" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0">
            Smart Suggester
          </a>
          <a href="#fleet" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0">
            Transport Fleet
          </a>
          <a href="#packages" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0">
            Tour Packages
          </a>
          <a href="#calculator" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0">
            Cost Splitter
          </a>
          <a href="#formalities" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0">
            College Formalities
          </a>
          <a href="#industries" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0">
            Industry Directory
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenQuote}
            className="px-4 py-2.5 text-xs font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors shadow-sm whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-600 cursor-pointer"
          >
            Get Instant IV Quote
          </button>
        </div>
      </div>
    </header>
  );
};

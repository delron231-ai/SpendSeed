import React, { useState, useEffect } from 'react';

interface HeaderNavProps {
  onOpenAppPreview?: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ onOpenAppPreview }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full h-16 bg-[#F2F4F1]/90 backdrop-blur-md transition-all duration-200 ${
        scrolled ? 'border-b border-[#DCE3DD] shadow-xs' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between px-6">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-serif-display text-2xl font-semibold text-[#125238] tracking-tight group-hover:text-[#2F6B4F] transition-colors">
            SpendSeed
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#problem"
            className="text-[13px] font-sans-body font-medium text-[#404943] hover:text-[#125238] transition-colors duration-150 action-target py-1 px-2 rounded-sm"
          >
            The problem
          </a>
          <a
            href="#how-it-works"
            className="text-[13px] font-sans-body font-medium text-[#404943] hover:text-[#125238] transition-colors duration-150 action-target py-1 px-2 rounded-sm"
          >
            How it works
          </a>
          <a
            href="#remainder"
            className="text-[13px] font-sans-body font-medium text-[#404943] hover:text-[#125238] transition-colors duration-150 action-target py-1 px-2 rounded-sm"
          >
            The remainder
          </a>
          <a
            href="#model"
            className="text-[13px] font-sans-body font-medium text-[#404943] hover:text-[#125238] transition-colors duration-150 action-target py-1 px-2 rounded-sm"
          >
            The model
          </a>

          {/* Prototype Badge / App Trigger */}
          <button
            onClick={onOpenAppPreview}
            className="inline-flex items-center gap-1.5 px-3 py-1 border border-[#D9A521] text-[#5e4400] bg-[#ffdfa0]/20 rounded-full text-[12px] font-mono-code font-medium hover:bg-[#ffdfa0]/40 transition-colors duration-150 action-target cursor-pointer"
            title="Launch interactive SpendSeed mobile prototype"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9A521] animate-pulse"></span>
            <span>Prototype — no real money</span>
          </button>
        </nav>

        {/* Mobile Navigation (Requirement 7: Nav links collapse to a single "How it works" anchor rather than a hamburger menu) */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="#how-it-works"
            className="text-[13px] font-sans-body font-medium text-[#125238] underline underline-offset-4 hover:text-[#2F6B4F] transition-colors px-2 py-1"
          >
            How it works
          </a>
          {onOpenAppPreview && (
            <button
              onClick={onOpenAppPreview}
              className="px-2.5 py-1 border border-[#D9A521] text-[#5e4400] bg-[#ffdfa0]/20 rounded-full text-[11px] font-mono-code font-medium cursor-pointer"
            >
              App Demo
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

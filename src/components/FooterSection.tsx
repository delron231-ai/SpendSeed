import React from 'react';

interface FooterSectionProps {
  onOpenAppPreview?: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenAppPreview }) => {
  return (
    <footer className="w-full bg-[#191C1B] text-[#F2F4F1] py-16 sm:py-20 border-t border-[#404943]">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-12">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-[#404943] pb-12">
          <div className="flex flex-col gap-2">
            <a href="#" className="font-serif-display text-3xl font-semibold text-[#F2F4F1] tracking-tight">
              SpendSeed
            </a>
            <p className="text-[14px] text-[#9FBF9C] font-mono-code">
              Financial stillness for Singapore, 18–30.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[14px] font-sans-body">
            <a href="#goal-planner" className="hover:text-[#9FBF9C] transition-colors">Goal planner</a>
            <a href="#how-it-works" className="hover:text-[#9FBF9C] transition-colors">The Ladder</a>
            <a href="#problem" className="hover:text-[#9FBF9C] transition-colors">The problem</a>
            <a href="#partner-pots" className="hover:text-[#9FBF9C] transition-colors">Partner pots</a>
            <a href="#whats-different" className="hover:text-[#9FBF9C] transition-colors">What's different</a>
            {onOpenAppPreview && (
              <button
                onClick={onOpenAppPreview}
                className="text-[#D9A521] hover:underline cursor-pointer font-mono-code text-[13px]"
              >
                App Prototype
              </button>
            )}
          </div>
        </div>

        {/* Disclaimer & Copyright Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[13px] font-mono-code text-[#a0aba2]">
          <p className="max-w-[650px] leading-relaxed">
            SpendSeed is a prototype conceptualized for financial mindfulness. Not a bank. Not a licensed financial adviser. Not investment advice. A student design project for Vercel deploy.
          </p>

          <span>© SpendSeed Singapore</span>
        </div>

      </div>
    </footer>
  );
};

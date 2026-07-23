import React from 'react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onOpenAppPreview: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAppPreview }) => {
  return (
    <section className="w-full py-[56px] sm:py-[80px] md:py-[120px] bg-[#F2F4F1]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24">
          
          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col gap-6 sm:gap-8"
          >
            {/* Eyebrow (Mono, lighter Ink) */}
            <div className="mono-caption font-mono-code text-[#707972] font-medium text-[13px] tracking-[0.04em]">
              For Singapore
            </div>

            {/* Headline (Newsreader, very large, three lines) */}
            <h1 className="hero-headline text-[#191C1B] font-serif-display font-semibold text-[clamp(2.75rem,6vw,5.5rem)] leading-[1.08] tracking-tight">
              Your savings<br />
              should pay you<br />
              on day one.
            </h1>

            {/* Sub-line (Body) */}
            <p className="body-copy font-sans-body text-[#404943] text-[17px] leading-[1.6] max-w-[65ch]">
              Commit money you've already set aside for something. Get the value up front, as credit with the merchant you were going to spend it with. Your money stays yours, in your own account, and you get it all back.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <a
                href="#partner-pots"
                className="action-target inline-flex items-center justify-center px-7 py-3.5 bg-[#2F6B4F] text-[#F2F4F1] font-sans-body font-medium text-[15px] rounded-md hover:bg-[#125238] active:scale-[0.99] transition-all"
              >
                See what your money could unlock
              </a>

              <a
                href="#how-it-works"
                className="action-target inline-flex items-center gap-1.5 text-[#191C1B] font-sans-body font-medium text-[15px] underline underline-offset-4 hover:text-[#2F6B4F] transition-colors"
              >
                <span>How this works</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>
          </motion.div>

          {/* Interactive Abstract Vessels / Mobile Frame Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="flex items-center justify-center w-full"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] bg-[#F8FAF7] rounded-[32px] p-6 sm:p-7 border border-[#c0c9c1] shadow-lg flex flex-col gap-6">
              
              {/* Mock App Header */}
              <div className="flex items-center justify-between border-b border-[#DCE3DD] pb-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#2F6B4F]">grain</span>
                  <span className="font-serif-display font-semibold text-[#125238] text-lg">SpendSeed</span>
                </div>
                <button
                  onClick={onOpenAppPreview}
                  className="px-2.5 py-1 text-[11px] font-mono-code bg-[#2F6B4F]/10 text-[#2F6B4F] rounded-full hover:bg-[#2F6B4F] hover:text-white transition-colors cursor-pointer"
                >
                  Interactive Demo
                </button>
              </div>

              {/* Ladder Header */}
              <div className="flex flex-col gap-1">
                <span className="mono-caption text-[11px] font-mono-code text-[#707972] tracking-[0.04em]">
                  THE SYSTEM
                </span>
                <h2 className="font-serif-display text-2xl font-medium text-[#191C1B]">
                  Two-tier allocation
                </h2>
              </div>

              {/* Ladder Vessel Sequence - 2 Tiers */}
              <div className="relative pl-6 flex flex-col gap-6">
                {/* Connecting Vertical Line between 1 & 2 */}
                <div className="absolute left-[9px] top-4 bottom-4 w-[2px] bg-[#2F6B4F]" />

                {/* Vessel 1: Buffer */}
                <div className="relative flex flex-col gap-2 bg-[#F2F4F1] p-3.5 rounded-lg border border-[#2F6B4F]">
                  <div className="absolute -left-[23px] top-3.5 w-5 h-5 rounded-full bg-[#2F6B4F] text-[#F2F4F1] font-mono-code text-[11px] flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex justify-between items-center text-[13px] font-sans-body font-medium">
                    <span className="text-[#191C1B]">Buffer</span>
                    <span className="font-mono-code text-[#2F6B4F] text-[11px]">Required first</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#DCE3DD] rounded-full overflow-hidden">
                    <div className="h-full bg-[#2F6B4F] w-full"></div>
                  </div>
                </div>

                {/* Vessel 2: Commitment Pots */}
                <div className="relative flex flex-col gap-2 bg-[#F2F4F1] p-3.5 rounded-lg border border-[#9FBF9C]">
                  <div className="absolute -left-[23px] top-3.5 w-5 h-5 rounded-full bg-[#9FBF9C] text-[#125238] font-mono-code text-[11px] flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex justify-between items-center text-[13px] font-sans-body font-medium">
                    <span className="text-[#191C1B]">Commitment pots</span>
                    <span className="font-mono-code text-[#125238] text-[11px]">The product</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#DCE3DD] rounded-full overflow-hidden">
                    <div className="h-full bg-[#9FBF9C] w-[60%]"></div>
                  </div>
                </div>
              </div>

              {/* Tap to launch interactive prompt */}
              <button
                onClick={onOpenAppPreview}
                className="w-full py-3 bg-[#2F6B4F] text-white rounded-lg text-[13px] font-sans-body font-medium hover:bg-[#125238] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Explore App Prototype</span>
                <span className="material-symbols-outlined text-[16px]">touch_app</span>
              </button>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

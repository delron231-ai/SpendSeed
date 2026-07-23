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
            {/* Mono Caption (Requirement 3: 13px, letter-spacing 0.04em, uppercase off) */}
            <div className="mono-caption font-mono-code text-[#2F6B4F] font-medium text-[13px] tracking-[0.04em]">
              for singapore, 18–30
            </div>

            {/* Hero Headline (Requirement 3: clamp(3rem, 7vw, 6.5rem), Newsreader, line-height 1.05, letter-spacing -0.02em) */}
            <h1 className="hero-headline text-[#191C1B] font-serif-display font-semibold">
              Buffer first.<br />
              Then goals.<br />
              Then seed.
            </h1>

            {/* Body Copy (Requirement 3: 17px, line-height 1.6, max-width 65 characters) */}
            <p className="body-copy font-sans-body text-[#404943] text-[17px] leading-[1.6] max-w-[65ch]">
              SpendSeed decides where your next dollar goes so you don't have to. Built on a philosophy of financial stillness, it moves money based on priority, not panic.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <a
                href="#how-it-works"
                className="action-target inline-flex items-center justify-center px-7 py-3.5 bg-[#2F6B4F] text-[#F2F4F1] font-sans-body font-medium text-[15px] rounded-md hover:bg-[#125238] active:scale-[0.99]"
              >
                See how it works
              </a>

              <button
                onClick={onOpenAppPreview}
                className="action-target inline-flex items-center gap-2 text-[#191C1B] font-sans-body font-medium text-[15px] underline underline-offset-4 hover:text-[#2F6B4F] cursor-pointer"
              >
                <span>Launch App Prototype</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
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

              {/* Phase Banner */}
              <div className="flex flex-col gap-1">
                <span className="mono-caption text-[11px] font-mono-code text-[#707972] tracking-[0.04em]">
                  CURRENT PHASE
                </span>
                <h2 className="font-serif-display text-3xl font-medium text-[#191C1B]">
                  Buffer
                </h2>
              </div>

              {/* Ladder Vessel Sequence */}
              <div className="relative pl-6 flex flex-col gap-6">
                {/* Connecting Vertical Line */}
                <div className="absolute left-[9px] top-3 bottom-3 w-[2px]">
                  <div className="h-[45%] bg-[#2F6B4F]"></div>
                  <div className="h-[55%] bg-[#DCE3DD]"></div>
                </div>

                {/* Vessel 1: Buffer */}
                <div className="relative flex flex-col gap-2 bg-[#F2F4F1] p-3.5 rounded-lg border border-[#2F6B4F]">
                  <div className="absolute -left-[23px] top-3.5 w-5 h-5 rounded-full bg-[#2F6B4F] text-[#F2F4F1] font-mono-code text-[11px] flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex justify-between items-center text-[13px] font-sans-body font-medium">
                    <span className="text-[#191C1B]">Buffer</span>
                    <span className="tabular-nums font-mono-code text-[#2F6B4F] text-[12px]">S$1,840 / Done</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#DCE3DD] rounded-full overflow-hidden">
                    <div className="h-full bg-[#2F6B4F] w-full"></div>
                  </div>
                </div>

                {/* Vessel 2: Goals */}
                <div className="relative flex flex-col gap-2 bg-[#F2F4F1] p-3.5 rounded-lg border border-[#9FBF9C]">
                  <div className="absolute -left-[23px] top-3.5 w-5 h-5 rounded-full bg-[#9FBF9C] text-[#191C1B] font-mono-code text-[11px] flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex justify-between items-center text-[13px] font-sans-body font-medium">
                    <span className="text-[#191C1B]">Personal Goals</span>
                    <span className="tabular-nums font-mono-code text-[#496548] text-[12px]">3 Active (40%)</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#DCE3DD] rounded-full overflow-hidden">
                    <div className="h-full bg-[#9FBF9C] w-[40%]"></div>
                  </div>
                </div>

                {/* Vessel 3: Seed (Locked) */}
                <div className="relative flex flex-col gap-2 bg-[#F2F4F1]/60 p-3.5 rounded-lg border border-[#DCE3DD] opacity-50">
                  <div className="absolute -left-[23px] top-3.5 w-5 h-5 rounded-full bg-[#DCE3DD] text-[#707972] font-mono-code text-[11px] flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex justify-between items-center text-[13px] font-sans-body font-medium">
                    <div className="flex items-center gap-1.5 text-[#707972]">
                      <span>Seed Fund</span>
                      <span className="material-symbols-outlined text-[14px]">lock</span>
                    </div>
                    <span className="font-mono-code text-[#707972] text-[11px]">Locked</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#DCE3DD] rounded-full"></div>
                </div>
              </div>

              {/* Tap to launch interactive prompt */}
              <button
                onClick={onOpenAppPreview}
                className="w-full py-3 bg-[#2F6B4F] text-white rounded-lg text-[13px] font-sans-body font-medium hover:bg-[#125238] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Explore Full App Screens (7 Views)</span>
                <span className="material-symbols-outlined text-[16px]">touch_app</span>
              </button>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

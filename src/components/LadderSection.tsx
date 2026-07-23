import React from 'react';
import { motion } from 'motion/react';

export const LadderSection: React.FC = () => {
  return (
    <section id="how-it-works" className="w-full py-[56px] sm:py-[80px] md:py-[120px] bg-[#F2F4F1]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col gap-4 mb-12 sm:mb-16 max-w-[720px]"
        >
          <div className="mono-caption font-mono-code text-[#2F6B4F] text-[13px] tracking-[0.04em]">
            THE WATERFALL METHODOLOGY
          </div>
          <h2 className="section-heading font-serif-display text-[#191C1B] font-medium">
            How it works
          </h2>
          <p className="body-copy font-sans-body text-[#404943] text-[17px] leading-[1.6] max-w-[65ch]">
            Money shouldn't flow everywhere at once. It follows a strict, logical sequence designed to protect you first, then fulfill your life, then grow your wealth.
          </p>
        </motion.div>

        {/* The Ladder Vertical Sequence */}
        <div className="relative pl-8 sm:pl-12 max-w-[900px] flex flex-col gap-12 sm:gap-16">
          
          {/* Vertical Connecting Line down the left edge */}
          <div className="absolute left-[13px] sm:left-[19px] top-4 bottom-8 w-[2px] pointer-events-none">
            {/* Top segment (between 1 & 2): Forest #2F6B4F */}
            <div className="h-[48%] w-full bg-[#2F6B4F]"></div>
            {/* Bottom segment (between 2 & 3): Mist #DCE3DD */}
            <div className="h-[52%] w-full bg-[#DCE3DD]"></div>
          </div>

          {/* STAGE 1: BUFFER */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative flex flex-col gap-4 bg-[#F8FAF7] p-6 sm:p-8 rounded-xl border border-[#c0c9c1]"
          >
            {/* Number badge on the vertical line */}
            <div className="absolute -left-[32px] sm:-left-[48px] top-6 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#2F6B4F] text-[#F2F4F1] font-mono-code font-bold text-[13px] sm:text-[15px] flex items-center justify-center border-2 border-[#F2F4F1]">
              1
            </div>

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="flex items-center gap-3">
                <h3 className="font-serif-display text-2xl sm:text-3xl font-medium text-[#191C1B]">
                  Buffer
                </h3>
                <span className="mono-caption font-mono-code text-[11px] sm:text-[12px] bg-[#2F6B4F]/10 text-[#2F6B4F] px-2.5 py-0.5 rounded-full font-medium">
                  STAGE 1 · COMPLETE
                </span>
              </div>
              <span className="font-mono-code text-[13px] text-[#2F6B4F] tabular-nums font-medium">
                S$2,400 / S$2,400 (100%)
              </span>
            </div>

            {/* One line of copy as requested in Requirement 4 */}
            <p className="body-copy font-sans-body text-[#404943] text-[16px] sm:text-[17px] leading-[1.6]">
              We start by building a 3-month safety net. This money stays liquid, safe, and silent.
            </p>

            {/* Horizontal Progress Track (Animates 900ms left-to-right on viewport enter) */}
            <div className="w-full h-3 bg-[#DCE3DD] rounded-full overflow-hidden mt-2">
              <motion.div
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-[#2F6B4F] rounded-full"
              ></motion.div>
            </div>
          </motion.div>

          {/* STAGE 2: GOALS */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="relative flex flex-col gap-4 bg-[#F8FAF7] p-6 sm:p-8 rounded-xl border border-[#9FBF9C]"
          >
            {/* Number badge on the vertical line */}
            <div className="absolute -left-[32px] sm:-left-[48px] top-6 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#9FBF9C] text-[#125238] font-mono-code font-bold text-[13px] sm:text-[15px] flex items-center justify-center border-2 border-[#F2F4F1]">
              2
            </div>

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="flex items-center gap-3">
                <h3 className="font-serif-display text-2xl sm:text-3xl font-medium text-[#191C1B]">
                  Goals
                </h3>
                <span className="mono-caption font-mono-code text-[11px] sm:text-[12px] bg-[#9FBF9C]/30 text-[#125238] px-2.5 py-0.5 rounded-full font-medium">
                  STAGE 2 · ACTIVE (40%)
                </span>
              </div>
              <span className="font-mono-code text-[13px] text-[#496548] tabular-nums font-medium">
                S$740 / S$1,850
              </span>
            </div>

            {/* One line of copy as requested in Requirement 4 */}
            <p className="body-copy font-sans-body text-[#404943] text-[16px] sm:text-[17px] leading-[1.6]">
              Once the buffer is full, every spare cent flows toward your short-term desires.
            </p>

            {/* Horizontal Progress Track (Animates 900ms left-to-right, staggered 200ms) */}
            <div className="w-full h-3 bg-[#DCE3DD] rounded-full overflow-hidden mt-2">
              <motion.div
                initial={{ width: '0%' }}
                whileInView={{ width: '40%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-[#9FBF9C] rounded-full"
              ></motion.div>
            </div>
          </motion.div>

          {/* STAGE 3: SEED (Locked state at 45% opacity with small lock icon as specified in Requirement 4) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="relative flex flex-col gap-4 bg-[#F8FAF7]/60 p-6 sm:p-8 rounded-xl border border-[#DCE3DD] opacity-[0.45] transition-opacity duration-300 hover:opacity-75"
          >
            {/* Number badge on the vertical line */}
            <div className="absolute -left-[32px] sm:-left-[48px] top-6 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#DCE3DD] text-[#707972] font-mono-code font-bold text-[13px] sm:text-[15px] flex items-center justify-center border-2 border-[#F2F4F1]">
              3
            </div>

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="flex items-center gap-2 sm:gap-3">
                <h3 className="font-serif-display text-2xl sm:text-3xl font-medium text-[#191C1B] flex items-center gap-2">
                  <span>Seed</span>
                  <span className="material-symbols-outlined text-[20px] text-[#707972]">lock</span>
                </h3>
                <span className="mono-caption font-mono-code text-[11px] sm:text-[12px] bg-[#DCE3DD] text-[#404943] px-2.5 py-0.5 rounded-full font-medium">
                  STAGE 3 · LOCKED
                </span>
              </div>
              <span className="font-mono-code text-[12px] text-[#707972]">
                Unlocks when Stage 2 fills
              </span>
            </div>

            {/* One line of copy as requested in Requirement 4 */}
            <p className="body-copy font-sans-body text-[#404943] text-[16px] sm:text-[17px] leading-[1.6]">
              When your needs and wants are secured, we plant your wealth in diversified, low-cost indices.
            </p>

            {/* Horizontal Progress Track (Empty Mist track) */}
            <div className="w-full h-3 bg-[#DCE3DD] rounded-full overflow-hidden mt-2">
              <div className="h-full bg-transparent w-0"></div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

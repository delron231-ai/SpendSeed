import React from 'react';
import { motion } from 'motion/react';

export const LadderSection: React.FC = () => {
  return (
    <section id="the-ladder" className="w-full py-[56px] sm:py-[80px] md:py-[120px] bg-[#F2F4F1]">
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
            THE TWO-TIER SYSTEM
          </div>
          <h2 className="section-heading font-serif-display text-[#191C1B] font-medium">
            The Ladder
          </h2>
          <p className="body-copy font-sans-body text-[#404943] text-[17px] leading-[1.6] max-w-[65ch]">
            Your money flows through a strict two-stage system designed to protect your essential cash flow first before putting your savings to work.
          </p>
        </motion.div>

        {/* The Ladder Vertical Sequence (2 Tiers) */}
        <div className="relative pl-8 sm:pl-12 max-w-[900px] flex flex-col gap-12 sm:gap-16">
          
          {/* Vertical Connecting Line between Tier 1 & Tier 2 ONLY */}
          <div className="absolute left-[13px] sm:left-[19px] top-6 bottom-16 w-[2px] bg-[#2F6B4F] pointer-events-none" />

          {/* TIER 1: BUFFER */}
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
              </div>
              <span className="mono-caption font-mono-code text-[12px] text-[#2F6B4F] font-semibold tracking-wider">
                Required first
              </span>
            </div>

            {/* Exact copy requested */}
            <p className="body-copy font-sans-body text-[#404943] text-[16px] sm:text-[17px] leading-[1.6]">
              "One month of expenses, in cash. This is what makes a commitment safe."
            </p>

            {/* Horizontal Progress Track: Fully filled Forest (#2F6B4F) */}
            <div className="w-full h-3 bg-[#DCE3DD] rounded-full overflow-hidden mt-2">
              <motion.div
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-[#2F6B4F] rounded-full"
              />
            </div>
          </motion.div>

          {/* TIER 2: COMMITMENT POTS */}
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
                  Commitment pots
                </h3>
              </div>
              <span className="mono-caption font-mono-code text-[12px] text-[#125238] font-semibold tracking-wider">
                The product
              </span>
            </div>

            {/* Exact copy requested */}
            <p className="body-copy font-sans-body text-[#404943] text-[16px] sm:text-[17px] leading-[1.6]">
              "Money with a date, earning something you can actually use."
            </p>

            {/* Horizontal Progress Track: 60% filled Sage (#9FBF9C) */}
            <div className="w-full h-3 bg-[#DCE3DD] rounded-full overflow-hidden mt-2">
              <motion.div
                initial={{ width: '0%' }}
                whileInView={{ width: '60%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-[#9FBF9C] rounded-full"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

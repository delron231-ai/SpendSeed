import React from 'react';
import { motion } from 'motion/react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="w-full py-[56px] sm:py-[80px] md:py-[120px] bg-[#EBEEEA] border-y border-[#DCE3DD]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* 3-Column Stats Band (Requirement 7: stacks vertically on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16">
          
          {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col gap-3 text-center md:text-left border-b md:border-b-0 pb-6 md:pb-0 border-[#DCE3DD]"
          >
            <span className="section-heading font-serif-display text-[#125238] font-semibold tabular-nums">
              9 in 10
            </span>
            <p className="body-copy font-sans-body text-[#404943] text-[16px] sm:text-[17px] leading-[1.6]">
              Young Singaporeans feel anxious about "missing out" on investment cycles.
            </p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
            className="flex flex-col gap-3 text-center md:text-left border-b md:border-b-0 pb-6 md:pb-0 border-[#DCE3DD]"
          >
            <span className="section-heading font-serif-display text-[#125238] font-semibold tabular-nums">
              1 in 3
            </span>
            <p className="body-copy font-sans-body text-[#404943] text-[16px] sm:text-[17px] leading-[1.6]">
              Admit to following financial advice from social media without research.
            </p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16, ease: 'easeOut' }}
            className="flex flex-col gap-3 text-center md:text-left"
          >
            <span className="section-heading font-serif-display text-[#125238] font-semibold tabular-nums">
              1.08%
            </span>
            <p className="body-copy font-sans-body text-[#404943] text-[16px] sm:text-[17px] leading-[1.6]">
              The average real return on idle cash in standard savings accounts while life gets 4% more expensive.
            </p>
          </motion.div>

        </div>

        {/* Center Statement with 48px spacing from stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-[720px] mx-auto text-center flex flex-col items-center gap-6 pt-6"
        >
          {/* Section Heading (Requirement 3: clamp(2rem, 3.5vw, 3rem), Newsreader, line-height 1.15) */}
          <h2 className="section-heading font-serif-display text-[#191C1B] font-medium">
            The problem was never saving.
          </h2>

          {/* Body Copy (Requirement 3: 17px, line-height 1.6, max-width 65ch) */}
          <p className="body-copy font-sans-body text-[#404943] text-[17px] leading-[1.6] max-w-[65ch]">
            It's the friction of choice. In a world of 4% HYSAs, volatile tokens, and complex ETFs, we freeze. Idle money is expensive money. Most apps encourage gambling; we prioritize financial stillness.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

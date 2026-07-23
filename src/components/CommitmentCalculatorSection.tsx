import React from 'react';
import { motion } from 'motion/react';
import { CommitmentCalculator } from './CommitmentCalculator';

export const CommitmentCalculatorSection: React.FC = () => {
  return (
    <section id="commitment-calculator" className="w-full py-[56px] sm:py-[80px] md:py-[100px] bg-[#F8FAF7]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col gap-4 mb-10 sm:mb-12 max-w-[720px]"
        >
          <div className="mono-caption font-mono-code text-[#2F6B4F] text-[13px] tracking-[0.04em]">
            PRIMARY VALUE CALCULATOR
          </div>
          <h2 className="section-heading font-serif-display text-[#191C1B] font-medium">
            See what your commitment unlocks today
          </h2>
          <p className="body-copy font-sans-body text-[#404943] text-[17px] leading-[1.6] max-w-[65ch]">
            Instead of waiting years for trickle interest, get your merchant value delivered up front while your principal stays safe in your account.
          </p>
        </motion.div>

        {/* Commitment Calculator Widget */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        >
          <CommitmentCalculator />
        </motion.div>

      </div>
    </section>
  );
};

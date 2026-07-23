import React from 'react';
import { motion } from 'motion/react';
import { PartnerCalculator } from './PartnerCalculator';

export const PartnerCalculatorSection: React.FC = () => {
  return (
    <section id="partner-pots" className="w-full py-[56px] sm:py-[80px] md:py-[100px] bg-[#EBEEEA] border-y border-[#DCE3DD]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col gap-4 mb-10 sm:mb-12 max-w-[720px]"
        >
          <div className="mono-caption font-mono-code text-[#906a0c] text-[13px] tracking-[0.04em]">
            PARTNER REBATE ENGINE
          </div>
          <h2 className="section-heading font-serif-display text-[#191C1B] font-medium">
            Partner pot calculator
          </h2>
          <p className="body-copy font-sans-body text-[#404943] text-[17px] leading-[1.6] max-w-[65ch]">
            When you commit future spending to verified ethical partners, merchants redirect their customer acquisition budgets straight to your yield.
          </p>
        </motion.div>

        {/* Calculator Widget */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="max-w-[840px] mx-auto"
        >
          <PartnerCalculator />
        </motion.div>

      </div>
    </section>
  );
};

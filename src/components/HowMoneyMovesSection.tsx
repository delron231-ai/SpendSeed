import React from 'react';
import { motion } from 'motion/react';

interface MoneyRule {
  num: number;
  title: string;
  copy: string;
  emphasized?: boolean;
}

const RULES: MoneyRule[] = [
  {
    num: 1,
    title: 'Everything fills the Buffer first',
    copy: 'Until you hold one month of expenses in cash, every captured dollar goes there.',
  },
  {
    num: 2,
    title: 'If the Buffer drops, Seed pauses',
    copy: 'Spend your emergency fund and contributions redirect to refill it. We never sell your investments to do this.',
  },
  {
    num: 3,
    title: 'Your money never leaves the trust account',
    copy: "Partners fund a higher rate. They don't hold your money — nobody does but the licensed custodian.",
    emphasized: true,
  },
  {
    num: 4,
    title: 'Leaving a partner pot costs nothing',
    copy: "Keep what you've earned after 30 days, revert to the standard rate, and the balance routes back through rule 1. No exit fee, no clawback.",
  },
  {
    num: 5,
    title: 'You choose what happens at the finish line',
    copy: 'Spend it, roll it into the next goal, or move it to Seed.',
  },
];

export const HowMoneyMovesSection: React.FC = () => {
  return (
    <section id="how-money-moves" className="w-full py-[56px] sm:py-[80px] md:py-[100px] bg-[#F8FAF7]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col gap-4 mb-12 sm:mb-16 max-w-[720px]"
        >
          <div className="mono-caption font-mono-code text-[#2F6B4F] text-[13px] tracking-[0.04em]">
            SYSTEM GOVERNANCE & SAFETY
          </div>
          <h2 className="section-heading font-serif-display text-[#12241C] font-medium">
            How money moves
          </h2>
          <p className="body-copy font-sans-body text-[#404943] text-[17px] leading-[1.6] max-w-[65ch]">
            Clear, unyielding governance rules that dictate how every cent is routed, protected, and preserved.
          </p>
        </motion.div>

        {/* Vertical Rules List connected by 2px Mist line */}
        <div className="relative max-w-[800px] pl-6 sm:pl-10 flex flex-col gap-8">
          
          {/* 2px Mist line down the left edge */}
          <div className="absolute left-[11px] sm:left-[19px] top-4 bottom-4 w-[2px] bg-[#DCE3DD]" />

          {RULES.map((rule, idx) => (
            <motion.div
              key={rule.num}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: 'easeOut' }}
              className={`relative flex items-start gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl transition-all ${
                rule.emphasized
                  ? 'bg-white border border-[#2F6B4F] shadow-sm'
                  : 'bg-[#F2F4F1] border border-transparent hover:border-[#DCE3DD]'
              }`}
            >
              {/* Rule Number Badge resting on vertical line */}
              <div
                className={`absolute -left-[29px] sm:-left-[37px] top-6 w-8 h-8 rounded-full font-mono-code font-bold text-[14px] flex items-center justify-center border-2 ${
                  rule.emphasized
                    ? 'bg-[#2F6B4F] text-white border-[#F8FAF7]'
                    : 'bg-[#F2F4F1] text-[#2F6B4F] border-[#DCE3DD]'
                }`}
              >
                {rule.num}
              </div>

              <div className="flex flex-col gap-1.5 pl-2 sm:pl-3">
                <h3 className="font-sans-body font-semibold text-[17px] sm:text-[18px] text-[#12241C]">
                  {rule.title}
                </h3>
                <p className="font-sans-body text-[15px] text-[#404943] leading-relaxed max-w-[68ch]">
                  "{rule.copy}"
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

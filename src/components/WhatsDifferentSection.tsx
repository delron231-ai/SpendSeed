import React from 'react';
import { motion } from 'motion/react';

interface ModelCard {
  title: string;
  metric: string;
  copy: string;
}

const MODEL_CARDS: ModelCard[] = [
  {
    title: 'Free, always',
    metric: 'S$0',
    copy: 'No fee, no subscription, no charge on your balance. Not at any size.',
  },
  {
    title: 'Merchants pay',
    metric: '80%',
    copy: 'They fund most of your credit, because a committed customer costs them less than a discount.',
  },
  {
    title: 'The bank pays',
    metric: '20%',
    copy: 'They hold your deposit and share the spread. You keep SDIC protection either way.',
  },
];

export const WhatsDifferentSection: React.FC = () => {
  return (
    <section id="the-model" className="w-full py-[56px] sm:py-[80px] md:py-[120px] bg-[#F2F4F1]">
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
            OUR BUSINESS MODEL
          </div>
          <h2 className="section-heading font-serif-display text-[#191C1B] font-medium">
            The model
          </h2>
          <p className="body-copy font-sans-body text-[#404943] text-[17px] leading-[1.6] max-w-[65ch]">
            How we align merchant customer-acquisition budgets with your savings goals.
          </p>
        </motion.div>

        {/* Three Model Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1050px] mx-auto">
          {MODEL_CARDS.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              className="flex flex-col gap-4 bg-[#F8FAF7] p-8 rounded-2xl border border-[#c0c9c1] justify-between shadow-xs"
            >
              <div className="flex flex-col gap-2">
                <h3 className="font-sans-body font-semibold text-[17px] text-[#12241C]">
                  {card.title}
                </h3>
                <div className="font-serif-display text-4xl sm:text-5xl font-semibold text-[#125238] tabular-nums my-1">
                  {card.metric}
                </div>
              </div>
              <p className="body-copy font-sans-body text-[#404943] text-[15px] sm:text-[16px] leading-[1.6]">
                "{card.copy}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Honesty Quote Block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="p-8 sm:p-10 bg-[#E8ECE7] rounded-2xl border border-[#DCE3DD] text-center mt-12 max-w-[840px] mx-auto"
        >
          <blockquote className="font-serif-display text-xl sm:text-2xl text-[#125238] italic leading-relaxed">
            "Your savings should work for you on day one as merchant credit without asking you to risk your capital or pay subscription fees."
          </blockquote>
        </motion.div>

      </div>
    </section>
  );
};

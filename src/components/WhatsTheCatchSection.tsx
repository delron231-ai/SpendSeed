import React from 'react';
import { motion } from 'motion/react';

interface CatchCard {
  question: string;
  answer: string;
}

const CARDS: CatchCard[] = [
  {
    question: "Why would a merchant give me S$400?",
    answer: "Because you've told them you're coming. A gym pays far more than that to win a member who might leave in three months. You've committed for twelve.",
  },
  {
    question: "Where does my money actually sit?",
    answer: "In a deposit account in your own name at our partner bank, protected under SDIC. We never hold it. Neither does the merchant.",
  },
  {
    question: "What if I change my mind?",
    answer: "Withdraw any time after 90 days and you keep the credit and get your money back in full. No exit fee, no clawback. Before 90 days, unvested credit is reversed.",
  },
];

export const WhatsTheCatchSection: React.FC = () => {
  return (
    <section id="whats-the-catch" className="w-full py-[56px] sm:py-[80px] md:py-[100px] bg-[#F8FAF7]">
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
            TRANSPARENCY & MECHANICS
          </div>
          <h2 className="section-heading font-serif-display text-[#12241C] font-medium">
            What's the catch
          </h2>
          <p className="body-copy font-sans-body text-[#404943] text-[17px] leading-[1.6] max-w-[65ch]">
            Nothing here is free money. Here's exactly who pays for what.
          </p>
        </motion.div>

        {/* 3 Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {CARDS.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1, ease: 'easeOut' }}
              className="p-6 sm:p-8 bg-[#F2F4F1] rounded-2xl border border-[#DCE3DD] flex flex-col gap-4 justify-between"
            >
              <div className="flex flex-col gap-3">
                <h3 className="font-sans-body font-semibold text-[17px] sm:text-[18px] text-[#12241C]">
                  "{card.question}"
                </h3>
                <p className="font-sans-body text-[#404943] text-[15px] sm:text-[16px] leading-relaxed">
                  "{card.answer}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Centered Summary Line */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
          className="text-center font-sans-body text-[#404943] text-[16px] sm:text-[17px] max-w-[650px] mx-auto pt-2"
        >
          "You give up about 1% a year in interest. You get several times that, today."
        </motion.div>

      </div>
    </section>
  );
};

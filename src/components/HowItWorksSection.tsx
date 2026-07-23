import React from 'react';
import { motion } from 'motion/react';

interface Step {
  num: number;
  title: string;
  copy: string;
}

const STEPS: Step[] = [
  {
    num: 1,
    title: 'Commit',
    copy: 'Pick a goal, a merchant and a term. The money moves into a deposit account in your own name.',
  },
  {
    num: 2,
    title: 'Give up the interest',
    copy: "It's about 1% a year. You won't miss it.",
  },
  {
    num: 3,
    title: 'Get the credit today',
    copy: 'Worth several times the interest, usable immediately, with the merchant you were already going to pay.',
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="w-full py-[56px] sm:py-[80px] md:py-[100px] bg-[#F2F4F1]">
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
            THREE SIMPLE STEPS
          </div>
          <h2 className="section-heading font-serif-display text-[#12241C] font-medium">
            How it works
          </h2>
          <p className="body-copy font-sans-body text-[#404943] text-[17px] leading-[1.6] max-w-[65ch]">
            Transform locked savings into upfront purchasing value in three straightforward steps.
          </p>
        </motion.div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1, ease: 'easeOut' }}
              className="p-6 sm:p-8 bg-white rounded-2xl border border-[#DCE3DD] flex flex-col justify-between gap-6 shadow-xs"
            >
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-full bg-[#2F6B4F] text-white font-mono-code font-bold text-[16px] flex items-center justify-center">
                  {step.num}
                </div>
                <h3 className="font-serif-display font-medium text-2xl text-[#12241C]">
                  {step.title}
                </h3>
              </div>

              <p className="font-sans-body text-[#404943] text-[15px] sm:text-[16px] leading-relaxed">
                "{step.copy}"
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

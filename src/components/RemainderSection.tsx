import React, { useState } from 'react';
import { motion } from 'motion/react';

export const RemainderSection: React.FC = () => {
  // Interactive Simulator State
  const [amountInput, setAmountInput] = useState<string>('4.60');
  
  const parsed = parseFloat(amountInput) || 0;
  const nextWhole = Math.ceil(parsed) === parsed ? parsed + 1 : Math.ceil(parsed);
  const remainderVal = parsed > 0 ? (nextWhole - parsed).toFixed(2) : '0.00';

  const setSample = (val: string) => {
    setAmountInput(val);
  };

  return (
    <section id="remainder" className="w-full py-[56px] sm:py-[80px] md:py-[120px] bg-[#E8ECE7] border-y border-[#DCE3DD]">
      <div className="max-w-[1200px] mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mono-caption font-mono-code text-[#2F6B4F] text-[13px] tracking-[0.04em] mb-8"
        >
          THE SIGNATURE MECHANISM
        </motion.div>

        {/* Centered Pair Signature Display (Requirement 5: S$4.60 in Newsreader, +0.40 in Geist Mono at exact same size clamp(4rem, 9vw, 8rem)) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-wrap items-baseline justify-center gap-2 sm:gap-4 md:gap-6 mb-8 text-[#191C1B]"
        >
          <span className="remainder-number font-serif-display font-semibold tabular-nums tracking-tight">
            S$4.60
          </span>
          <span className="remainder-plus font-mono-code font-bold tabular-nums tracking-tight text-[#D9A521]">
            +0.40
          </span>
        </motion.div>

        {/* Caption 32px below in body type (Requirement 5) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="flex flex-col items-center gap-3 mb-12"
        >
          <p className="body-copy font-sans-body text-[#191C1B] text-[19px] sm:text-[22px] font-medium max-w-[65ch]">
            Every transaction leaves a remainder. We plant it.
          </p>

          <p className="mono-caption font-mono-code text-[#404943] text-[13px] sm:text-[14px] tabular-nums">
            41 transactions last week · S$18.40 captured
          </p>
        </motion.div>

        {/* Interactive Round-Up Tester Widget */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="w-full max-w-[560px] bg-[#F2F4F1] p-6 sm:p-8 rounded-2xl border border-[#c0c9c1] text-left flex flex-col gap-6 shadow-xs"
        >
          <div className="flex justify-between items-center border-b border-[#DCE3DD] pb-4">
            <span className="font-mono-code text-[12px] text-[#2F6B4F] font-semibold tracking-wider uppercase">
              Interactive Round-Up Calculator
            </span>
            <span className="font-mono-code text-[12px] text-[#707972]">
              Auto Round-Up
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-sans-body text-[#404943]">
              Enter any item or receipt amount (S$):
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-4 font-serif-display text-xl text-[#707972]">S$</span>
              <input
                type="number"
                step="0.05"
                value={amountInput}
                onChange={(e) => setAmountInput(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-[#DCE3DD] rounded-lg font-serif-display text-2xl text-[#191C1B] focus:border-[#2F6B4F] focus:ring-1 focus:ring-[#2F6B4F] outline-none tabular-nums"
                placeholder="4.60"
              />
            </div>
          </div>

          {/* Quick Preset Buttons */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[12px] font-mono-code text-[#707972]">Try:</span>
            <button
              onClick={() => setSample('4.60')}
              className="px-2.5 py-1 text-[12px] font-mono-code bg-[#E8ECE7] text-[#191C1B] rounded-md hover:bg-[#DCE3DD] transition-colors cursor-pointer"
            >
              Ah Huat Kopi S$4.60
            </button>
            <button
              onClick={() => setSample('11.20')}
              className="px-2.5 py-1 text-[12px] font-mono-code bg-[#E8ECE7] text-[#191C1B] rounded-md hover:bg-[#DCE3DD] transition-colors cursor-pointer"
            >
              Grab S$11.20
            </button>
            <button
              onClick={() => setSample('38.15')}
              className="px-2.5 py-1 text-[12px] font-mono-code bg-[#E8ECE7] text-[#191C1B] rounded-md hover:bg-[#DCE3DD] transition-colors cursor-pointer"
            >
              FairPrice S$38.15
            </button>
          </div>

          {/* Result Calculation Output */}
          <div className="p-4 bg-[#125238] text-[#F2F4F1] rounded-xl flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[12px] font-mono-code opacity-80">
                Calculated Seed Remainder
              </span>
              <span className="text-[14px] font-sans-body">
                Rounded to next dollar (S${nextWhole.toFixed(2)})
              </span>
            </div>
            <div className="font-mono-code text-2xl sm:text-3xl font-bold text-[#D9A521] tabular-nums">
              +S${remainderVal}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';

export const WhatsDifferentSection: React.FC = () => {
  return (
    <section id="whats-different" className="w-full py-[56px] sm:py-[80px] md:py-[120px] bg-[#F2F4F1]">
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
            OUR PHILOSOPHY & BUSINESS MODEL
          </div>
          <h2 className="section-heading font-serif-display text-[#191C1B] font-medium">
            What's different
          </h2>
          <p className="body-copy font-sans-body text-[#404943] text-[17px] leading-[1.6] max-w-[65ch]">
            Most micro-investing apps charge S$2–S$5 a month on a S$100 balance—a 24% to 60% annual fee drag. We aligned our incentives with your stillness instead.
          </p>
        </motion.div>

        {/* Two Fee Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-[900px] mx-auto">
          
          {/* Card 1: Starter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col gap-4 bg-[#F8FAF7] p-8 rounded-xl border border-[#c0c9c1] justify-between"
          >
            <div className="flex flex-col gap-2">
              <span className="mono-caption font-mono-code text-[12px] text-[#2F6B4F] font-semibold">
                TIER 1 · STARTER
              </span>
              <div className="font-serif-display text-4xl sm:text-5xl font-semibold text-[#125238] tabular-nums my-1">
                S$0
              </div>
              <h3 className="font-serif-display text-xl font-medium text-[#191C1B]">
                Free, permanently
              </h3>
            </div>
            <p className="body-copy font-sans-body text-[#404943] text-[15px] sm:text-[16px] leading-[1.6]">
              No subscription fees. No platform fees for your first S$10,000 in Buffer and Goals.
            </p>
          </motion.div>

          {/* Card 2: Scale */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="flex flex-col gap-4 bg-[#F8FAF7] p-8 rounded-xl border border-[#c0c9c1] justify-between"
          >
            <div className="flex flex-col gap-2">
              <span className="mono-caption font-mono-code text-[12px] text-[#707972] font-semibold">
                TIER 2 · SCALE
              </span>
              <div className="font-serif-display text-4xl sm:text-5xl font-semibold text-[#191C1B] tabular-nums my-1">
                0.35%
              </div>
              <h3 className="font-serif-display text-xl font-medium text-[#191C1B]">
                We charge later
              </h3>
            </div>
            <p className="body-copy font-sans-body text-[#404943] text-[15px] sm:text-[16px] leading-[1.6]">
              Only when your Seed grows beyond S$50,000 do we take a tiny 0.35% annual management cut.
            </p>
          </motion.div>

        </div>

        {/* Honesty Quote Block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="p-8 sm:p-10 bg-[#E8ECE7] rounded-2xl border border-[#DCE3DD] text-center my-12 max-w-[840px] mx-auto"
        >
          <blockquote className="font-serif-display text-xl sm:text-2xl text-[#125238] italic leading-relaxed">
            "Most micro-investing apps charge most when you have least. That arithmetic never worked."
          </blockquote>
        </motion.div>

        {/* 4 Differentiator Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="p-6 bg-[#F8FAF7] rounded-xl border border-[#DCE3DD] flex flex-col gap-2"
          >
            <span className="material-symbols-outlined text-[#2F6B4F]">edit_note</span>
            <h4 className="font-sans-body font-semibold text-[#191C1B] text-[16px]">Rules you write</h4>
            <p className="text-[14px] text-[#404943] leading-relaxed">
              Set natural conditions like "Every time I order food delivery, move S$3 to Osaka".
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 bg-[#F8FAF7] rounded-xl border border-[#DCE3DD] flex flex-col gap-2"
          >
            <span className="material-symbols-outlined text-[#2F6B4F]">receipt_long</span>
            <h4 className="font-sans-body font-semibold text-[#191C1B] text-[16px]">We check bills</h4>
            <p className="text-[14px] text-[#404943] leading-relaxed">
              Auto-detect recurring subscription creep and prompt zero-stress cancellations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="p-6 bg-[#F8FAF7] rounded-xl border border-[#DCE3DD] flex flex-col gap-2"
          >
            <span className="material-symbols-outlined text-[#2F6B4F]">handshake</span>
            <h4 className="font-sans-body font-semibold text-[#191C1B] text-[16px]">Partners pay</h4>
            <p className="text-[14px] text-[#404943] leading-relaxed">
              Rebates from local, intentional businesses flow directly back into your Goal pots.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-6 bg-[#F8FAF7] rounded-xl border border-[#DCE3DD] flex flex-col gap-2"
          >
            <span className="material-symbols-outlined text-[#2F6B4F]">shortcut</span>
            <h4 className="font-sans-body font-semibold text-[#191C1B] text-[16px]">We'll tell you when to leave</h4>
            <p className="text-[14px] text-[#404943] leading-relaxed">
              When your Seed reaches S$100k, we guide you to institutional advisory without friction.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

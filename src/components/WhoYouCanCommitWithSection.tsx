import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface MerchantCategory {
  initial: string;
  category: string;
  description: string;
  rate: string;
}

const EVERYDAY_MERCHANTS: MerchantCategory[] = [
  {
    initial: 'G',
    category: 'Gym and fitness',
    description: 'Annual memberships and studio credit',
    rate: 'up to 5.0%',
  },
  {
    initial: 'T',
    category: 'Telco',
    description: 'Mobile and broadband plans',
    rate: 'up to 4.5%',
  },
  {
    initial: 'D',
    category: 'Delivery',
    description: 'Annual delivery passes',
    rate: 'up to 4.5%',
  },
  {
    initial: 'I',
    category: 'Insurance',
    description: 'Motor and travel cover',
    rate: 'up to 4.0%',
  },
];

const BIG_TICKET_MERCHANTS: MerchantCategory[] = [
  {
    initial: 'R',
    category: 'Renovation',
    description: 'Contractors and interior firms',
    rate: 'up to 6.7%',
  },
  {
    initial: 'W',
    category: 'Wedding',
    description: 'Banquet venues and vendors',
    rate: 'up to 6.5%',
  },
  {
    initial: 'F',
    category: 'Furnishing',
    description: 'Furniture and appliances',
    rate: 'up to 6.0%',
  },
  {
    initial: 'T',
    category: 'Travel',
    description: 'Flights and hotels',
    rate: 'up to 5.5%',
  },
];

export const WhoYouCanCommitWithSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'everyday' | 'big-ticket'>('everyday');

  const currentMerchants = activeTab === 'everyday' ? EVERYDAY_MERCHANTS : BIG_TICKET_MERCHANTS;

  return (
    <section id="who-you-can-commit-with" className="w-full py-[56px] sm:py-[80px] md:py-[100px] bg-[#F2F4F1]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col gap-4 mb-8 max-w-[720px]"
        >
          <div className="mono-caption font-mono-code text-[#2F6B4F] text-[13px] tracking-[0.04em]">
            PARTNER ECOSYSTEM
          </div>
          <h2 className="section-heading font-serif-display text-[#12241C] font-medium">
            Who you can commit with
          </h2>
        </motion.div>

        {/* Two Tabs */}
        <div className="flex items-center gap-8 border-b border-[#DCE3DD] mb-8">
          <button
            onClick={() => setActiveTab('everyday')}
            className={`pb-3 text-[15px] sm:text-[16px] font-sans-body font-medium transition-colors relative cursor-pointer ${
              activeTab === 'everyday'
                ? 'text-[#12241C] font-semibold border-b-2 border-[#2F6B4F] -mb-[1px]'
                : 'text-[#707972] hover:text-[#12241C]'
            }`}
          >
            Everyday
          </button>
          <button
            onClick={() => setActiveTab('big-ticket')}
            className={`pb-3 text-[15px] sm:text-[16px] font-sans-body font-medium transition-colors relative cursor-pointer ${
              activeTab === 'big-ticket'
                ? 'text-[#12241C] font-semibold border-b-2 border-[#2F6B4F] -mb-[1px]'
                : 'text-[#707972] hover:text-[#12241C]'
            }`}
          >
            Big-ticket
          </button>
        </div>

        {/* Merchant Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {currentMerchants.map((item) => (
              <div
                key={item.category}
                className="p-6 bg-white rounded-2xl border border-[#DCE3DD] flex flex-col justify-between shadow-xs gap-4 min-h-[180px]"
              >
                <div className="flex flex-col gap-3">
                  {/* 48px Monogram Square */}
                  <div className="w-[48px] h-[48px] bg-[#F2F4F1] border border-[#DCE3DD] rounded-xl flex items-center justify-center font-serif-display text-[20px] font-semibold text-[#12241C]">
                    {item.initial}
                  </div>

                  {/* Category Title */}
                  <h3 className="font-sans-body font-semibold text-[16px] text-[#12241C]">
                    {item.category}
                  </h3>

                  {/* Description */}
                  <p className="font-sans-body text-[#404943] text-[14px] leading-snug">
                    {item.description}
                  </p>
                </div>

                {/* Credit Rate in Turmeric Mono at bottom right */}
                <div className="font-mono-code text-[#D9A521] text-[13px] font-semibold text-right pt-2">
                  {item.rate}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Disclaimer */}
        <div className="font-mono-code text-[11px] text-[#707972]">
          Illustrative categories. No commercial agreements exist.
        </div>

      </div>
    </section>
  );
};

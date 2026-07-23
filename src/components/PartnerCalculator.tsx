import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export interface PartnerData {
  id: string;
  name: string;
  category: string;
  rate: number; // e.g. 0.048
  rateLabel: string; // "4.8%"
  initial: string;
  initialColor: string;
  contextPhrase: string;
}

const PARTNERS: PartnerData[] = [
  {
    id: 'skylane',
    name: 'Skylane',
    category: 'Flights and hotels',
    rate: 0.048,
    rateLabel: '4.8%',
    initial: 'S',
    initialColor: '#2F6B4F', // Forest
    contextPhrase: "flights you're taking next year",
  },
  {
    id: 'rumah',
    name: 'Rumah Living',
    category: 'Furniture and homeware',
    rate: 0.042,
    rateLabel: '4.2%',
    initial: 'R',
    initialColor: '#9FBF9C', // Sage
    contextPhrase: "furniture you're buying next year",
  },
  {
    id: 'ironhouse',
    name: 'Ironhouse',
    category: 'Gym and studio credit',
    rate: 0.039,
    rateLabel: '3.9%',
    initial: 'I',
    initialColor: '#D9A521', // Turmeric
    contextPhrase: "gym credit you're using next year",
  },
  {
    id: 'voltbox',
    name: 'Voltbox',
    category: 'Phones and laptops',
    rate: 0.036,
    rateLabel: '3.6%',
    initial: 'V',
    initialColor: '#2F6B4F', // Forest
    contextPhrase: "tech gear you're buying next year",
  },
  {
    id: 'kopitiam',
    name: 'Kopitiam Collective',
    category: 'Daily coffee and food',
    rate: 0.035,
    rateLabel: '3.5%',
    initial: 'K',
    initialColor: '#9FBF9C', // Sage
    contextPhrase: "daily coffee and food next year",
  },
  {
    id: 'greenmart',
    name: 'Greenmart',
    category: 'Groceries',
    rate: 0.032,
    rateLabel: '3.2%',
    initial: 'G',
    initialColor: '#D9A521', // Turmeric
    contextPhrase: "groceries you're buying next year",
  },
];

const OBJECTIONS = [
  {
    question: 'What if I change my mind?',
    answer:
      "Withdraw any time and the pot reverts to the standard Buffer rate of 2.1%. You keep what you earned up to that point. There's no lock-in and no exit fee.",
  },
  {
    question: 'Is this a deposit? Is it insured?',
    answer:
      "No. It isn't a bank deposit and it isn't covered by SDIC. It's a commitment held with a licensed partner, and it carries the partner's credit risk. We say this plainly because it's the first question a regulator would ask.",
  },
  {
    question: "What's the catch?",
    answer:
      "The money is only spendable with that partner. If you commit S$2,000 to flights and then don't fly, you've earned a good rate on money that's now sitting in a narrow pot. Only commit what you were genuinely going to spend.",
  },
  {
    question: 'Why would a merchant agree to this?',
    answer:
      "Because pre-committed spend is the cheapest revenue they can buy. Funding your rate costs them a fraction of a discount, and far less than acquiring you through advertising. They're buying certainty, and you're the one selling it.",
  },
];

export const PartnerCalculator: React.FC = () => {
  const [selectedPartnerId, setSelectedPartnerId] = useState<string>('skylane');
  const [amount, setAmount] = useState<number>(2000);
  const [months, setMonths] = useState<6 | 12 | 24>(12);
  const [openObjectionIndex, setOpenObjectionIndex] = useState<number | null>(null);

  const selectedPartner = PARTNERS.find((p) => p.id === selectedPartnerId) || PARTNERS[0];

  const bankRate = 0.0108;
  const bufferRate = 0.0210;
  const partnerRate = selectedPartner.rate;

  const years = months / 12;

  const bankEarnings = Math.round(amount * bankRate * years);
  const bufferEarnings = Math.round(amount * bufferRate * years);
  const partnerEarnings = Math.round(amount * partnerRate * years);

  const delta = partnerEarnings - bankEarnings;

  // Merchant gross rate calculations for Block 2
  const grossMerchantRateNum = partnerRate + 0.007;
  const grossMerchantRateLabel = (grossMerchantRateNum * 100).toFixed(1) + '%';
  const grossEarnings = Math.round(amount * grossMerchantRateNum * years);
  const discountVal = Math.round(amount * 0.10);
  const feeEarnings = Math.round(amount * 0.007 * years);

  // Bar width scale relative to max scale (5%)
  const maxScaleRate = 0.05;
  const bankWidth = Math.min(100, Math.max(10, (bankRate / maxScaleRate) * 100));
  const bufferWidth = Math.min(100, Math.max(16, (bufferRate / maxScaleRate) * 100));
  const partnerWidth = Math.min(100, Math.max(22, (partnerRate / maxScaleRate) * 100));

  return (
    <div className="w-full flex flex-col gap-12 sm:gap-16 text-[#12241C]">
      
      {/* =========================================================================
          BLOCK 1 — CHOOSE AND MODEL
         ========================================================================= */}
      <div className="bg-[#F2F4F1] border border-[#DCE3DD] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs flex flex-col gap-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 6 Partners List (Desktop) / Horizontal Scroll (Mobile) */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="font-mono-code text-[12px] text-[#707972] uppercase tracking-wider mb-1">
              Select Partner
            </div>

            {/* Mobile horizontal scrolling row (<768px) */}
            <div className="flex md:hidden overflow-x-auto gap-3 pb-3 scrollbar-none -mx-2 px-2">
              {PARTNERS.map((partner) => {
                const isSelected = partner.id === selectedPartnerId;
                return (
                  <button
                    key={partner.id}
                    onClick={() => setSelectedPartnerId(partner.id)}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all shrink-0 cursor-pointer text-left ${
                      isSelected
                        ? 'border-l-4 border-l-[#2F6B4F] border-y-[#DCE3DD] border-r-[#DCE3DD] bg-white shadow-xs'
                        : 'border-[#DCE3DD] bg-[#F2F4F1] hover:bg-white/60'
                    }`}
                  >
                    {/* Monogram tile */}
                    <div className="w-[44px] h-[44px] min-w-[44px] bg-[#F2F4F1] border border-[#DCE3DD] rounded-lg flex items-center justify-center">
                      <span
                        className="font-serif-display text-[20px] font-semibold"
                        style={{ color: partner.initialColor }}
                      >
                        {partner.initial}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans-body font-semibold text-[#12241C] text-[14px]">
                        {partner.name}
                      </span>
                      <span className="font-mono-code font-bold text-[#D9A521] text-[13px]">
                        {partner.rateLabel}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Desktop vertical list (>=768px) */}
            <div className="hidden md:flex flex-col gap-2">
              {PARTNERS.map((partner) => {
                const isSelected = partner.id === selectedPartnerId;
                return (
                  <button
                    key={partner.id}
                    onClick={() => setSelectedPartnerId(partner.id)}
                    className={`flex items-center justify-between p-3.5 rounded-xl transition-all cursor-pointer text-left border ${
                      isSelected
                        ? 'border-l-4 border-l-[#2F6B4F] border-y-[#DCE3DD] border-r-[#DCE3DD] bg-white shadow-xs'
                        : 'border-transparent bg-transparent hover:bg-white/60'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      {/* Monogram Tile: 56px rounded square, Paper fill, 1px Mist border */}
                      <div className="w-[56px] h-[56px] min-w-[56px] min-h-[56px] bg-[#F2F4F1] border border-[#DCE3DD] rounded-xl flex items-center justify-center">
                        <span
                          className="font-serif-display text-[24px] font-semibold leading-none"
                          style={{ color: partner.initialColor }}
                        >
                          {partner.initial}
                        </span>
                      </div>

                      <div className="flex flex-col gap-0.5">
                        <span className="font-sans-body font-semibold text-[#12241C] text-[15px]">
                          {partner.name}
                        </span>
                        <span className="font-sans-body text-[13px] text-[#707972]">
                          {partner.category}
                        </span>
                      </div>
                    </div>

                    <span className="font-mono-code font-bold text-[#D9A521] text-[15px] tabular-nums pl-2">
                      {partner.rateLabel}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Right Column: Controls & Comparison Bars */}
          <div className="md:col-span-7 flex flex-col gap-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#DCE3DD]">
            
            {/* Controls */}
            <div className="flex flex-col gap-5">
              
              {/* Slider "What you'd commit" */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-baseline">
                  <label className="text-[14px] font-sans-body font-medium text-[#12241C]">
                    What you'd commit
                  </label>
                  {/* Large Newsreader Display */}
                  <span className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#12241C] tabular-nums">
                    S${amount.toLocaleString('en-US')}
                  </span>
                </div>

                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="100"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-[#DCE3DD] rounded-lg appearance-none cursor-pointer accent-[#2F6B4F]"
                />
              </div>

              {/* Three Duration Buttons: 6, 12, 24 months */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <span className="text-[13px] font-sans-body font-medium text-[#404943]">
                  Commitment period
                </span>
                <div className="flex bg-[#F2F4F1] p-1 rounded-lg border border-[#DCE3DD] gap-1">
                  {([6, 12, 24] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setMonths(m)}
                      className={`px-3.5 py-1.5 rounded-md text-[13px] font-mono-code font-medium transition-colors cursor-pointer ${
                        months === m
                          ? 'bg-[#2F6B4F] text-white shadow-xs'
                          : 'text-[#404943] hover:text-[#12241C]'
                      }`}
                    >
                      {m} months
                    </button>
                  ))}
                </div>
              </div>

              {/* Static line in Mono, lighter Ink */}
              <div className="font-mono-code text-[12px] text-[#707972]">
                Money you were going to spend here anyway.
              </div>

            </div>

            {/* Comparison Bars */}
            <div className="flex flex-col gap-4 bg-[#F2F4F1] p-5 rounded-xl border border-[#DCE3DD]">
              
              {/* Bar 1: Your bank today */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-[13px] font-sans-body text-[#12241C]">
                  <span>Your bank today (1.08%)</span>
                  <span className="font-mono-code text-[14px] font-bold text-[#12241C] tabular-nums">
                    S${bankEarnings}
                  </span>
                </div>
                <div className="w-full h-3 bg-[#DCE3DD]/50 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ width: `${bankWidth}%` }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="h-full bg-[#DCE3DD] rounded-full"
                  />
                </div>
              </div>

              {/* Bar 2: SpendSeed Buffer */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-[13px] font-sans-body text-[#2F6B4F]">
                  <span className="font-medium">SpendSeed Buffer (2.10%)</span>
                  <span className="font-mono-code text-[14px] font-bold text-[#2F6B4F] tabular-nums">
                    S${bufferEarnings}
                  </span>
                </div>
                <div className="w-full h-3 bg-[#DCE3DD]/50 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ width: `${bufferWidth}%` }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="h-full bg-[#9FBF9C] rounded-full"
                  />
                </div>
              </div>

              {/* Bar 3: Selected partner */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-[13px] font-sans-body text-[#12241C] font-semibold">
                  <span>{selectedPartner.name} ({selectedPartner.rateLabel})</span>
                  <span className="font-mono-code text-[14px] font-bold text-[#D9A521] tabular-nums">
                    S${partnerEarnings}
                  </span>
                </div>
                <div className="w-full h-3 bg-[#DCE3DD]/50 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ width: `${partnerWidth}%` }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="h-full bg-[#D9A521] rounded-full"
                  />
                </div>
              </div>

            </div>

            {/* Beneath bars: Newsreader line at 2rem */}
            <div className="pt-2 flex flex-col gap-1">
              <motion.div
                key={`${delta}-${selectedPartnerId}`}
                initial={{ opacity: 0.5, y: 2 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="font-serif-display text-[28px] sm:text-[32px] font-medium text-[#2F6B4F] leading-tight"
              >
                S${delta} more than your bank would pay.
              </motion.div>
            </div>

          </div>

        </div>

      </div>

      {/* =========================================================================
          BLOCK 2 — HOW THIS ACTUALLY WORKS
         ========================================================================= */}
      <div className="bg-[#F2F4F1] border border-[#DCE3DD] rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col gap-8">
        
        <div className="flex flex-col gap-2">
          <span className="mono-caption font-mono-code text-[12px] text-[#2F6B4F] font-semibold uppercase tracking-wider">
            MECHANICS
          </span>
          <h3 className="font-serif-display text-2xl sm:text-3xl font-medium text-[#12241C]">
            How this actually works
          </h3>
        </div>

        {/* 3 Column Flow with Connecting Line on Desktop */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Connecting Forest Line (Desktop) */}
          <div className="hidden md:block absolute top-[18px] left-[15%] right-[15%] h-[1px] bg-[#2F6B4F]/30 z-0" />

          {/* Column 1 */}
          <div className="relative z-10 flex flex-col gap-3 bg-[#F2F4F1]">
            <div className="w-9 h-9 rounded-full bg-[#F2F4F1] border-2 border-[#2F6B4F] text-[#2F6B4F] font-mono-code font-bold text-[14px] flex items-center justify-center">
              1
            </div>
            <h4 className="font-sans-body font-semibold text-[#12241C] text-[17px]">
              You commit
            </h4>
            <p className="font-sans-body text-[14px] text-[#404943] leading-relaxed">
              You put S${amount.toLocaleString('en-US')} toward {selectedPartner.contextPhrase}. It stays yours. You just can't spend it somewhere else.
            </p>
          </div>

          {/* Column 2 */}
          <div className="relative z-10 flex flex-col gap-3 bg-[#F2F4F1]">
            <div className="w-9 h-9 rounded-full bg-[#F2F4F1] border-2 border-[#2F6B4F] text-[#2F6B4F] font-mono-code font-bold text-[14px] flex items-center justify-center">
              2
            </div>
            <h4 className="font-sans-body font-semibold text-[#12241C] text-[17px]">
              {selectedPartner.name} funds the rate
            </h4>
            <p className="font-sans-body text-[14px] text-[#404943] leading-relaxed">
              They pay {grossMerchantRateLabel} into your pot — S${grossEarnings} — because you've told them you're coming. A 10% discount to win the same sale would cost them S${discountVal}.
            </p>
          </div>

          {/* Column 3 */}
          <div className="relative z-10 flex flex-col gap-3 bg-[#F2F4F1]">
            <div className="w-9 h-9 rounded-full bg-[#F2F4F1] border-2 border-[#2F6B4F] text-[#2F6B4F] font-mono-code font-bold text-[14px] flex items-center justify-center">
              3
            </div>
            <h4 className="font-sans-body font-semibold text-[#12241C] text-[17px]">
              We keep the difference
            </h4>
            <p className="font-sans-body text-[14px] text-[#404943] leading-relaxed">
              You receive {selectedPartner.rateLabel}, S${partnerEarnings}. We retain 0.7%, S${feeEarnings}. That's how SpendSeed makes money without charging you anything.
            </p>
          </div>

        </div>

        {/* Centered line in Body, lighter Ink */}
        <div className="pt-4 border-t border-[#DCE3DD] text-center font-sans-body text-[15px] text-[#707972]">
          Nobody in this arrangement is paying for the privilege of saving.
        </div>

      </div>

      {/* =========================================================================
          BLOCK 3 — THE OBJECTIONS
         ========================================================================= */}
      <div className="bg-[#F2F4F1] border border-[#DCE3DD] rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col gap-6">
        
        <div className="flex flex-col gap-2">
          <span className="mono-caption font-mono-code text-[12px] text-[#707972] font-semibold uppercase tracking-wider">
            TRANSPARENCY
          </span>
          <h3 className="font-serif-display text-2xl sm:text-3xl font-medium text-[#12241C]">
            Direct answers to hard questions
          </h3>
        </div>

        <div className="flex flex-col divide-y divide-[#DCE3DD] border-t border-b border-[#DCE3DD]">
          {OBJECTIONS.map((obj, idx) => {
            const isOpen = openObjectionIndex === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  onClick={() => setOpenObjectionIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left font-sans-body font-semibold text-[16px] text-[#12241C] hover:text-[#2F6B4F] transition-colors cursor-pointer py-1"
                >
                  <span>"{obj.question}"</span>
                  <span className="material-symbols-outlined text-[20px] text-[#707972] ml-4 shrink-0 transition-transform duration-200">
                    {isOpen ? 'expand_less' : 'expand_more'}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="font-sans-body text-[15px] text-[#404943] leading-relaxed pt-3 pb-1 overflow-hidden"
                    >
                      "{obj.answer}"
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>

      {/* Fictional Disclaimer */}
      <div className="font-mono-code text-[11px] text-[#707972] text-center">
        Illustrative partners. No commercial agreements exist.
      </div>

    </div>
  );
};

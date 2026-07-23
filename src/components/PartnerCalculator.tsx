import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PartnerOption {
  id: 'travel' | 'home' | 'fitness' | 'coffee';
  name: string;
  category: string;
  rate: number;
  rateLabel: string;
}

const PARTNERS: PartnerOption[] = [
  { id: 'travel', name: 'Travel', category: 'Travel', rate: 0.048, rateLabel: '4.8%' },
  { id: 'home', name: 'Home', category: 'Home', rate: 0.042, rateLabel: '4.2%' },
  { id: 'fitness', name: 'Fitness', category: 'Fitness', rate: 0.039, rateLabel: '3.9%' },
  { id: 'coffee', name: 'Coffee', category: 'Coffee', rate: 0.035, rateLabel: '3.5%' },
];

export const PartnerCalculator: React.FC = () => {
  const [activePartnerId, setActivePartnerId] = useState<PartnerOption['id']>('travel');
  const [amount, setAmount] = useState<number>(2000);
  const [months, setMonths] = useState<6 | 12 | 24>(12);
  const [isWhyExpanded, setIsWhyExpanded] = useState<boolean>(false);

  const activePartner = PARTNERS.find(p => p.id === activePartnerId) || PARTNERS[0];

  const bankRate = 0.0108;
  const bufferRate = 0.0210;
  const partnerRate = activePartner.rate;

  const years = months / 12;

  const bankEarnings = Math.round(amount * bankRate * years);
  const bufferEarnings = Math.round(amount * bufferRate * years);
  const partnerEarnings = Math.round(amount * partnerRate * years);

  const delta = partnerEarnings - bankEarnings;

  // Max rate for scaling bar widths visually (max is 5% or partnerRate)
  const maxScaleRate = 0.05;
  const bankWidth = Math.min(100, Math.max(8, (bankRate / maxScaleRate) * 100));
  const bufferWidth = Math.min(100, Math.max(12, (bufferRate / maxScaleRate) * 100));
  const partnerWidth = Math.min(100, Math.max(16, (partnerRate / maxScaleRate) * 100));

  return (
    <div className="flex flex-col gap-6 bg-[#F8FAF7] p-6 sm:p-8 rounded-xl border border-[#D9A521] shadow-xs">
      
      {/* Header Badge */}
      <div className="flex justify-between items-center border-b border-[#DCE3DD] pb-3">
        <span className="mono-caption font-mono-code text-[12px] text-[#906a0c] font-semibold">
          TIER 2 · PARTNER POT CALCULATOR
        </span>
        <span className="font-mono-code text-[11px] bg-[#D9A521]/15 text-[#735400] px-2 py-0.5 rounded-full font-medium">
          Rebate Engine
        </span>
      </div>

      {/* Four partner tabs across top */}
      <div className="flex border-b border-[#DCE3DD] overflow-x-auto scrollbar-none">
        {PARTNERS.map(partner => {
          const isActive = partner.id === activePartnerId;
          return (
            <button
              key={partner.id}
              onClick={() => setActivePartnerId(partner.id)}
              className={`relative px-3.5 py-2.5 text-[13px] sm:text-[14px] font-sans-body font-medium transition-colors whitespace-nowrap cursor-pointer ${
                isActive ? 'text-[#125238]' : 'text-[#707972] hover:text-[#191C1B]'
              }`}
            >
              <span>{partner.name} {partner.rateLabel}</span>
              {isActive && (
                <motion.div
                  layoutId="activePartnerTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2F6B4F]"
                  transition={{ duration: 0.2 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-5">
        
        {/* Slider: Amount you'd commit (S$500 to S$5,000, step 100, default 2000) */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center text-[13px] font-sans-body text-[#404943]">
            <span>Amount you'd commit</span>
            <span className="font-mono-code font-bold text-[#191C1B] text-[15px] tabular-nums">
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

        {/* Duration Toggles: 6, 12, 24 months. Default 12 */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-[13px] font-sans-body text-[#404943]">Duration</span>
          <div className="flex bg-[#E8ECE7] p-1 rounded-lg border border-[#DCE3DD] gap-1">
            {([6, 12, 24] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMonths(m)}
                className={`px-3 py-1 rounded-md text-[12px] font-mono-code font-medium transition-colors cursor-pointer ${
                  months === m
                    ? 'bg-[#2F6B4F] text-white shadow-xs'
                    : 'text-[#404943] hover:text-[#191C1B]'
                }`}
              >
                {m} mo
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Output — Three Horizontal Bars */}
      <div className="flex flex-col gap-4 bg-[#F2F4F1] p-4 sm:p-5 rounded-xl border border-[#c0c9c1]">
        
        {/* Bar 1: Your bank */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-center text-[12px] font-sans-body text-[#404943]">
            <span>Your bank (1.08%)</span>
            <span className="font-mono-code text-[13px] font-bold text-[#404943] tabular-nums">
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
          <div className="flex justify-between items-center text-[12px] font-sans-body text-[#125238]">
            <span className="font-medium">SpendSeed Buffer (2.10%)</span>
            <span className="font-mono-code text-[13px] font-bold text-[#125238] tabular-nums">
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

        {/* Bar 3: Partner Name & Rate */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-center text-[12px] font-sans-body text-[#735400] font-semibold">
            <span>{activePartner.name} ({activePartner.rateLabel})</span>
            <span className="font-mono-code text-[13px] font-bold text-[#D9A521] tabular-nums">
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

        {/* Beneath bars: Newsreader medium size line */}
        <div className="pt-2 border-t border-[#DCE3DD] flex flex-col gap-1">
          <motion.div
            key={delta}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="font-serif-display text-[18px] sm:text-[20px] font-medium text-[#125238]"
          >
            S${delta} more than your bank would pay.
          </motion.div>

          {/* Small Body lighter Ink honesty line */}
          <p className="text-[12px] font-sans-body text-[#707972] leading-normal">
            Spendable only with this partner. Withdraw anytime at 2.1%.
          </p>
        </div>

      </div>

      {/* Collapsed row: Why can they pay more than a bank? */}
      <div className="border-t border-[#DCE3DD] pt-3">
        <button
          onClick={() => setIsWhyExpanded(!isWhyExpanded)}
          className="flex items-center justify-between w-full text-[13px] font-sans-body text-[#404943] hover:text-[#191C1B] transition-colors py-1 cursor-pointer text-left"
        >
          <span className="font-medium">Why can they pay more than a bank?</span>
          <span className="material-symbols-outlined text-[18px] text-[#707972]">
            {isWhyExpanded ? 'expand_less' : 'expand_more'}
          </span>
        </button>

        <AnimatePresence>
          {isWhyExpanded && (
            <motion.p
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-[13px] font-sans-body text-[#404943] leading-relaxed pt-2 overflow-hidden"
            >
              Because you've told them you're coming. Committed spend is cheaper for them to buy than advertising, so they hand you the difference.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};

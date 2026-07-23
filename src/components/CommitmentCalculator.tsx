import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

type TierType = 'everyday' | 'big-ticket';

interface MerchantOption {
  id: string;
  label: string;
  initial: string;
}

const EVERYDAY_MERCHANTS: MerchantOption[] = [
  { id: 'gym', label: 'Gym membership', initial: 'G' },
  { id: 'telco', label: 'Telco plan', initial: 'T' },
  { id: 'delivery', label: 'Delivery pass', initial: 'D' },
  { id: 'insurance', label: 'Motor insurance', initial: 'M' },
];

const BIG_TICKET_MERCHANTS: MerchantOption[] = [
  { id: 'renovation', label: 'Renovation', initial: 'R' },
  { id: 'wedding', label: 'Wedding banquet', initial: 'W' },
  { id: 'furnishing', label: 'Furnishing', initial: 'F' },
  { id: 'honeymoon', label: 'Honeymoon', initial: 'H' },
];

export const CommitmentCalculator: React.FC = () => {
  const [tier, setTier] = useState<TierType>('everyday');

  // Selected merchant chip
  const merchants = tier === 'everyday' ? EVERYDAY_MERCHANTS : BIG_TICKET_MERCHANTS;
  const [selectedMerchantId, setSelectedMerchantId] = useState<string>(merchants[0].id);

  // Slider state
  const [balance, setBalance] = useState<number>(6000);

  // Term state
  const [term, setTerm] = useState<number>(12);

  // Reset parameters when switching tier
  const handleTierSwitch = (newTier: TierType) => {
    setTier(newTier);
    if (newTier === 'everyday') {
      setSelectedMerchantId(EVERYDAY_MERCHANTS[0].id);
      setBalance(6000);
      setTerm(12);
    } else {
      setSelectedMerchantId(BIG_TICKET_MERCHANTS[0].id);
      setBalance(30000);
      setTerm(18);
    }
  };

  // Ensure selectedMerchantId is valid if tier changes
  useEffect(() => {
    const validIds = merchants.map((m) => m.id);
    if (!validIds.includes(selectedMerchantId)) {
      setSelectedMerchantId(validIds[0]);
    }
  }, [tier, merchants, selectedMerchantId]);

  // Computations
  const creditRate = tier === 'everyday' ? 0.05 : 0.067;
  const credit = Math.round(balance * creditRate * (term / 12));
  const interest = Math.round(balance * 0.01 * (term / 12));
  const difference = credit - interest;

  // Slider bounds based on tier
  const sliderMin = tier === 'everyday' ? 3000 : 20000;
  const sliderMax = tier === 'everyday' ? 8000 : 60000;
  const sliderStep = tier === 'everyday' ? 500 : 2500;

  return (
    <div className="w-full flex flex-col gap-8 bg-[#F2F4F1] border border-[#DCE3DD] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs text-[#12241C]">
      
      {/* TIER TOGGLE at the top */}
      <div className="flex justify-center">
        <div className="inline-flex bg-[#EBEEEA] p-1.5 rounded-full border border-[#DCE3DD] gap-1">
          <button
            onClick={() => handleTierSwitch('everyday')}
            className={`px-5 py-2.5 rounded-full font-sans-body font-medium text-[14px] sm:text-[15px] transition-all cursor-pointer ${
              tier === 'everyday'
                ? 'bg-[#2F6B4F] text-[#F2F4F1] shadow-xs'
                : 'text-[#404943] hover:text-[#12241C]'
            }`}
          >
            Everyday commitment
          </button>
          <button
            onClick={() => handleTierSwitch('big-ticket')}
            className={`px-5 py-2.5 rounded-full font-sans-body font-medium text-[14px] sm:text-[15px] transition-all cursor-pointer ${
              tier === 'big-ticket'
                ? 'bg-[#2F6B4F] text-[#F2F4F1] shadow-xs'
                : 'text-[#404943] hover:text-[#12241C]'
            }`}
          >
            Big-ticket goal
          </button>
        </div>
      </div>

      {/* MERCHANT ROW — horizontally scrolling chips */}
      <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-none -mx-2 px-2 justify-start sm:justify-center">
        {merchants.map((m) => {
          const isSelected = selectedMerchantId === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setSelectedMerchantId(m.id)}
              className={`flex items-center gap-3 px-3.5 py-2 rounded-xl transition-all cursor-pointer border shrink-0 bg-[#F2F4F1] ${
                isSelected
                  ? 'border-2 border-[#2F6B4F] bg-white shadow-xs'
                  : 'border-[#DCE3DD] hover:bg-white/60'
              }`}
            >
              {/* 40px monogram square */}
              <div className="w-[40px] h-[40px] min-w-[40px] bg-[#F2F4F1] border border-[#DCE3DD] rounded-lg flex items-center justify-center">
                <span className="font-serif-display text-[20px] font-semibold text-[#12241C] leading-none">
                  {m.initial}
                </span>
              </div>
              <span className="font-sans-body font-medium text-[14px] text-[#12241C] whitespace-nowrap">
                {m.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* CONTROLS (Left Column) & OUTPUT (Right Column) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2">
        
        {/* Left Column: Controls */}
        <div className="md:col-span-6 flex flex-col gap-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#DCE3DD]">
          
          {/* Slider "How much you'd commit" */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-baseline">
              <label className="text-[14px] font-sans-body font-medium text-[#12241C]">
                How much you'd commit
              </label>
              <span className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#12241C] tabular-nums">
                S${balance.toLocaleString('en-US')}
              </span>
            </div>

            <input
              type="range"
              min={sliderMin}
              max={sliderMax}
              step={sliderStep}
              value={balance}
              onChange={(e) => setBalance(Number(e.target.value))}
              className="w-full h-2 bg-[#DCE3DD] rounded-lg appearance-none cursor-pointer accent-[#2F6B4F]"
            />

            <div className="flex justify-between text-[12px] font-mono-code text-[#707972] pt-1">
              <span>S${sliderMin.toLocaleString()}</span>
              <span>S${sliderMax.toLocaleString()}</span>
            </div>
          </div>

          {/* Term buttons: 12 / 18 / 24 months */}
          <div className="flex flex-col gap-2 pt-2 border-t border-[#DCE3DD]">
            <span className="text-[13px] font-sans-body font-medium text-[#12241C]">
              Commitment term
            </span>
            <div className="grid grid-cols-3 bg-[#F2F4F1] p-1 rounded-xl border border-[#DCE3DD] gap-1">
              {[12, 18, 24].map((m) => (
                <button
                  key={m}
                  onClick={() => setTerm(m)}
                  className={`py-2 rounded-lg text-[14px] font-mono-code font-medium transition-colors cursor-pointer text-center ${
                    term === m
                      ? 'bg-[#2F6B4F] text-white shadow-xs'
                      : 'text-[#404943] hover:text-[#12241C]'
                  }`}
                >
                  {m} months
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Output (Visual Hero) */}
        <div className="md:col-span-6 flex flex-col gap-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#DCE3DD] shadow-xs">
          
          <div className="flex flex-col gap-1">
            <span className="text-[14px] font-sans-body text-[#707972]">
              You receive, today
            </span>

            {/* Credit value in Newsreader at clamp(3rem, 7vw, 5.5rem), Turmeric */}
            <motion.div
              key={`${credit}-${interest}-${balance}-${term}-${tier}`}
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="font-serif-display text-[#D9A521] font-semibold text-[clamp(3rem,7vw,5.5rem)] leading-none tracking-tight py-1"
            >
              S${credit.toLocaleString('en-US')}
            </motion.div>

            {/* Directly beneath, in JetBrains Mono, lighter Ink */}
            <div className="font-mono-code text-[13px] sm:text-[14px] text-[#707972] pt-1">
              vs S${interest.toLocaleString('en-US')} you'd have earned in interest over {term} months
            </div>

            {/* One line in Body, Forest */}
            <div className="font-sans-body text-[16px] sm:text-[17px] font-semibold text-[#2F6B4F] pt-2">
              S${difference.toLocaleString('en-US')} better off, and you have it now.
            </div>
          </div>

          {/* Three small stacked lines in Mono, lighter Ink */}
          <div className="pt-4 border-t border-[#DCE3DD] flex flex-col gap-2 font-mono-code text-[12px] text-[#707972]">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[#12241C]">Your money</span>
              <span>stays in your own account</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[#12241C]">Protected</span>
              <span>SDIC, via our partner bank</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[#12241C]">At the end</span>
              <span>you get all of it back</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

import React, { useState } from 'react';
import { motion } from 'motion/react';

export const GoalPlanner: React.FC = () => {
  const [goalName, setGoalName] = useState('Osaka');
  const [targetInput, setTargetInput] = useState<string>('3000');
  const [savedInput, setSavedInput] = useState<string>('740');
  const [topUpSlider, setTopUpSlider] = useState<number>(0);

  const target = parseFloat(targetInput) || 0;
  const saved = parseFloat(savedInput) || 0;
  const remaining = Math.max(0, target - saved);

  const roundUpRate = 22;

  // Zero-top-up baseline logic
  const baselineMonthly = roundUpRate;
  const baselineMonths = remaining <= 0 ? 0 : Math.ceil(remaining / baselineMonthly);

  // Current monthly rate (22 + slider)
  const currentMonthly = roundUpRate + topUpSlider;
  const currentMonths = remaining <= 0 ? 0 : Math.ceil(remaining / currentMonthly);

  // Time brought forward delta against zero-top-up baseline
  const deltaMonths = Math.max(0, baselineMonths - currentMonths);

  // Format landing date e.g. "November 2027"
  const getLandingDate = (months: number) => {
    if (remaining <= 0) return 'Goal Reached';
    const date = new Date();
    date.setMonth(date.getMonth() + months);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const landingDateStr = getLandingDate(currentMonths);

  const formatMoney = (val: number) => {
    return 'S$' + Math.round(val).toLocaleString('en-US');
  };

  const progressRatio = target > 0 ? Math.min(1, Math.max(0, saved / target)) : 0;

  return (
    <div className="w-full bg-[#F8FAF7] border border-[#9FBF9C] rounded-2xl p-6 sm:p-8 shadow-xs">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Controls */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            
            {/* Goal Name Text Input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-sans-body font-medium text-[#404943]">
                Goal
              </label>
              <input
                type="text"
                value={goalName}
                onChange={(e) => setGoalName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#DCE3DD] rounded-lg font-sans-body text-[15px] text-[#191C1B] focus:border-[#2F6B4F] focus:ring-1 focus:ring-[#2F6B4F] outline-none"
                placeholder="Osaka"
              />
            </div>

            {/* Target Amount & Already Saved Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Target Amount Input with S$ Prefix */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-sans-body font-medium text-[#404943]">
                  Target amount
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 font-mono-code text-[14px] text-[#707972] pointer-events-none">
                    S$
                  </span>
                  <input
                    type="number"
                    value={targetInput}
                    onChange={(e) => setTargetInput(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#DCE3DD] rounded-lg font-mono-code text-[15px] text-[#191C1B] focus:border-[#2F6B4F] focus:ring-1 focus:ring-[#2F6B4F] outline-none tabular-nums"
                    placeholder="3000"
                  />
                </div>
              </div>

              {/* Already Saved Input */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-sans-body font-medium text-[#404943]">
                  Already saved
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 font-mono-code text-[14px] text-[#707972] pointer-events-none">
                    S$
                  </span>
                  <input
                    type="number"
                    value={savedInput}
                    onChange={(e) => setSavedInput(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#DCE3DD] rounded-lg font-mono-code text-[15px] text-[#191C1B] focus:border-[#2F6B4F] focus:ring-1 focus:ring-[#2F6B4F] outline-none tabular-nums"
                    placeholder="740"
                  />
                </div>
              </div>

            </div>

            {/* Monthly top-up slider: range 0 to 300, step 10, default 0 */}
            <div className="flex flex-col gap-2 pt-2">
              <div className="flex justify-between items-center text-[13px] font-sans-body font-medium text-[#404943]">
                <span>Monthly top-up</span>
                <span className="font-mono-code font-bold text-[#2F6B4F] text-[14px] tabular-nums">
                  +S${topUpSlider}/mo
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="300"
                step="10"
                value={topUpSlider}
                onChange={(e) => setTopUpSlider(Number(e.target.value))}
                className="w-full h-2 bg-[#DCE3DD] rounded-lg appearance-none cursor-pointer accent-[#2F6B4F]"
              />
            </div>

          </div>

          {/* Static line in Mono */}
          <div className="font-mono-code text-[12px] text-[#707972] pt-3 border-t border-[#DCE3DD]">
            Round-ups add about S$22/month based on 41 transactions a week
          </div>
        </div>

        {/* Right Column: Output (Hero of component) */}
        <div className="lg:col-span-6 bg-[#E8ECE7] p-6 sm:p-8 rounded-xl border border-[#c0c9c1] flex flex-col justify-between gap-6">
          
          <div className="flex flex-col gap-2">
            {/* Small Body label */}
            <span className="text-[14px] font-sans-body text-[#404943]">
              At your current pace you land in
            </span>

            {/* Computed date in Newsreader at clamp(2.5rem, 5vw, 4.5rem), Ink with 200ms live fade */}
            <motion.div
              key={landingDateStr}
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="font-serif-display text-[#191C1B] font-semibold tracking-tight text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05]"
            >
              {landingDateStr}
            </motion.div>
          </div>

          <div className="flex flex-col gap-3">
            
            {/* Below in Mono: "S$740 of S$3,000" */}
            <div className="font-mono-code text-[14px] font-medium text-[#191C1B] tabular-nums">
              {formatMoney(saved)} of {formatMoney(target)}
            </div>

            {/* Thin Sage progress track (no percentage printed) */}
            <div className="w-full h-1.5 bg-[#DCE3DD] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#9FBF9C] rounded-full transition-all duration-300"
                style={{ width: `${progressRatio * 100}%` }}
              />
            </div>

            {/* When top-up > 0, Sage-tinted line beneath */}
            {topUpSlider > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-2 p-3 bg-[#9FBF9C]/20 border border-[#9FBF9C]/50 text-[#125238] rounded-lg text-[13px] font-mono-code font-medium leading-relaxed"
              >
                S${topUpSlider} a month brings this forward by {deltaMonths} month{deltaMonths === 1 ? '' : 's'}.
              </motion.div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};

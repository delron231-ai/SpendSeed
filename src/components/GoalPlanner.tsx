import React, { useState } from 'react';
import { motion } from 'motion/react';

interface GoalTemplate {
  id: string;
  name: string;
  target: number;
  saved: number;
}

const TEMPLATES: GoalTemplate[] = [
  { id: 'japan', name: 'Trip to Japan', target: 3000, saved: 740 },
  { id: 'laptop', name: 'New laptop', target: 1800, saved: 310 },
  { id: 'emergency', name: 'Emergency fund', target: 4800, saved: 4800 },
  { id: 'bto', name: 'BTO deposit', target: 20000, saved: 2400 },
  { id: 'wedding', name: 'Wedding', target: 30000, saved: 5000 },
];

interface ToggleOption {
  id: string;
  name: string;
  description: string;
  monthlyAmount: number;
  defaultOn: boolean;
}

const FUNDING_SOURCES: ToggleOption[] = [
  {
    id: 'roundups',
    name: 'Round-ups',
    description: '41 transactions a week',
    monthlyAmount: 22,
    defaultOn: true,
  },
  {
    id: 'delivery',
    name: 'Delivery rule',
    description: 'S$3 every time you order in',
    monthlyAmount: 12,
    defaultOn: true,
  },
  {
    id: 'transport',
    name: 'Transport rule',
    description: 'MRT instead of Grab',
    monthlyAmount: 8,
    defaultOn: false,
  },
  {
    id: 'payday',
    name: 'Payday sweep',
    description: 'Fires on salary credit',
    monthlyAmount: 100,
    defaultOn: false,
  },
];

export const GoalPlanner: React.FC = () => {
  // Active Template
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('japan');
  
  // Editable Goal Inputs
  const [goalName, setGoalName] = useState<string>('Trip to Japan');
  const [targetInput, setTargetInput] = useState<string>('3000');
  const [savedInput, setSavedInput] = useState<string>('740');

  // Toggle States
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    roundups: true,
    delivery: true,
    transport: false,
    payday: false,
  });

  // Slider State
  const [topUpSlider, setTopUpSlider] = useState<number>(0);

  // Handle template switch
  const handleSelectTemplate = (template: GoalTemplate) => {
    setSelectedTemplateId(template.id);
    setGoalName(template.name);
    setTargetInput(template.target.toString());
    setSavedInput(template.saved.toString());
  };

  // Derived numeric inputs
  const target = Math.max(0, parseFloat(targetInput) || 0);
  const saved = Math.max(0, parseFloat(savedInput) || 0);
  const remaining = Math.max(0, target - saved);

  // Sum of active toggle sources
  const activeSourcesSum = FUNDING_SOURCES.reduce((sum, src) => {
    return sum + (toggles[src.id] ? src.monthlyAmount : 0);
  }, 0);

  // Total monthly contribution
  const monthly = activeSourcesSum + topUpSlider;

  // Months needed calculation
  const monthsNeeded =
    remaining <= 0 ? 0 : monthly <= 0 ? Infinity : Math.ceil(remaining / monthly);

  // Date formatting helpers
  const getLandingDate = (months: number) => {
    if (remaining <= 0) return 'Goal Reached';
    if (!isFinite(months)) return '—';
    const date = new Date();
    date.setMonth(date.getMonth() + months);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const getShortDate = (months: number) => {
    if (!isFinite(months)) return '—';
    const date = new Date();
    date.setMonth(date.getMonth() + months);
    return date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
  };

  const landingDateStr = getLandingDate(monthsNeeded);

  // Format money
  const formatMoney = (val: number) => {
    return 'S$' + Math.round(val).toLocaleString('en-US');
  };

  // Progress ratio (0 to 1)
  const progressRatio = target > 0 ? Math.min(1, saved / target) : 0;

  // Lever calculation (Block 4)
  // Baseline without topUp
  const baselineMonthly = activeSourcesSum;
  const baselineMonths =
    remaining <= 0 ? 0 : baselineMonthly <= 0 ? Infinity : Math.ceil(remaining / baselineMonthly);

  // Recomputed +S$40 lever
  const leverAdd40Monthly = monthly + 40;
  const leverAdd40Months =
    remaining <= 0 ? 0 : Math.ceil(remaining / leverAdd40Monthly);
  const leverAdd40Date = getLandingDate(leverAdd40Months);
  const leverAdd40MonthsSooner =
    isFinite(monthsNeeded) ? Math.max(0, monthsNeeded - leverAdd40Months) : 0;

  // Top-up active delta
  const topUpDeltaMonths =
    isFinite(baselineMonths) && isFinite(monthsNeeded)
      ? Math.max(0, baselineMonths - monthsNeeded)
      : 0;

  // Check if Buffer / Emergency Fund template
  const isEmergencyFund =
    selectedTemplateId === 'emergency' ||
    goalName.toLowerCase().includes('emergency') ||
    goalName.toLowerCase().includes('buffer');

  // Toggle handler
  const toggleSource = (id: string) => {
    setToggles((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full flex flex-col gap-8 bg-[#F2F4F1] border border-[#DCE3DD] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs text-[#12241C]">
      
      {/* =========================================================================
          BLOCK 1 — PICK A GOAL
         ========================================================================= */}
      <div className="flex flex-col gap-3">
        <div className="mono-caption font-mono-code text-[12px] text-[#707972] uppercase tracking-wider">
          Pick a template or customize below
        </div>

        {/* Template Chips Horizontal Row */}
        <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-none -mx-2 px-2 md:mx-0 md:px-0 md:flex-wrap">
          {TEMPLATES.map((tmpl) => {
            const isSelected = selectedTemplateId === tmpl.id;
            return (
              <button
                key={tmpl.id}
                onClick={() => handleSelectTemplate(tmpl)}
                className={`flex flex-col items-start px-4 py-2.5 rounded-xl transition-all cursor-pointer border shrink-0 ${
                  isSelected
                    ? 'bg-[#2F6B4F] text-[#F2F4F1] border-[#2F6B4F] shadow-xs'
                    : 'bg-transparent text-[#12241C] border-[#DCE3DD] hover:bg-white/60'
                }`}
              >
                <span className="font-sans-body font-semibold text-[14px]">
                  {tmpl.name}
                </span>
                <span
                  className={`font-mono-code text-[12px] ${
                    isSelected ? 'text-[#F2F4F1]/80' : 'text-[#707972]'
                  }`}
                >
                  target {tmpl.target.toLocaleString()} · saved {tmpl.saved.toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          BLOCK 2 — INPUTS AND FUNDING
         ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: The Goal */}
        <div className="md:col-span-5 flex flex-col gap-5 bg-white p-6 rounded-2xl border border-[#DCE3DD]">
          <div className="mono-caption font-mono-code text-[12px] text-[#2F6B4F] font-semibold uppercase tracking-wider">
            1. The Goal
          </div>

          {/* Goal Name Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-sans-body font-medium text-[#12241C]">
              Goal name
            </label>
            <input
              type="text"
              value={goalName}
              onChange={(e) => {
                setGoalName(e.target.value);
                setSelectedTemplateId('');
              }}
              className="w-full px-3.5 py-2.5 bg-[#F2F4F1] border border-[#DCE3DD] rounded-xl font-sans-body text-[15px] text-[#12241C] focus:border-[#2F6B4F] focus:bg-white outline-none transition-colors"
              placeholder="e.g. Trip to Japan"
            />
          </div>

          {/* Target Amount */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-sans-body font-medium text-[#12241C]">
              Target amount
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 font-mono-code text-[14px] text-[#707972] pointer-events-none">
                S$
              </span>
              <input
                type="number"
                value={targetInput}
                onChange={(e) => {
                  setTargetInput(e.target.value);
                  setSelectedTemplateId('');
                }}
                className="w-full pl-9 pr-3 py-2.5 bg-[#F2F4F1] border border-[#DCE3DD] rounded-xl font-mono-code text-[15px] text-[#12241C] focus:border-[#2F6B4F] focus:bg-white outline-none tabular-nums transition-colors"
                placeholder="3000"
              />
            </div>
          </div>

          {/* Already Saved */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-sans-body font-medium text-[#12241C]">
              Already saved
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 font-mono-code text-[14px] text-[#707972] pointer-events-none">
                S$
              </span>
              <input
                type="number"
                value={savedInput}
                onChange={(e) => {
                  setSavedInput(e.target.value);
                  setSelectedTemplateId('');
                }}
                className="w-full pl-9 pr-3 py-2.5 bg-[#F2F4F1] border border-[#DCE3DD] rounded-xl font-mono-code text-[15px] text-[#12241C] focus:border-[#2F6B4F] focus:bg-white outline-none tabular-nums transition-colors"
                placeholder="740"
              />
            </div>
          </div>
        </div>

        {/* Right Column: What's feeding this goal */}
        <div className="md:col-span-7 flex flex-col gap-6 bg-white p-6 rounded-2xl border border-[#DCE3DD]">
          <div className="mono-caption font-mono-code text-[12px] text-[#2F6B4F] font-semibold uppercase tracking-wider">
            2. What's feeding this goal
          </div>

          {/* 4 Toggle Rows */}
          <div className="flex flex-col gap-3">
            {FUNDING_SOURCES.map((src) => {
              const isOn = !!toggles[src.id];
              return (
                <div
                  key={src.id}
                  onClick={() => toggleSource(src.id)}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-[#DCE3DD] bg-[#F2F4F1] hover:bg-white cursor-pointer transition-colors"
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="font-sans-body font-semibold text-[15px] text-[#12241C]">
                      {src.name}
                    </span>
                    <span className="font-sans-body text-[13px] text-[#707972]">
                      "{src.description}"
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono-code font-bold text-[14px] text-[#2F6B4F] tabular-nums">
                      +S${src.monthlyAmount}/mo
                    </span>

                    {/* Toggle Switch */}
                    <div
                      className={`w-11 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out flex items-center ${
                        isOn ? 'bg-[#2F6B4F]' : 'bg-[#DCE3DD]'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full bg-white shadow-xs transform transition-transform duration-200 ease-in-out ${
                          isOn ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Extra monthly top-up slider */}
          <div className="flex flex-col gap-2 pt-2 border-t border-[#DCE3DD]">
            <div className="flex justify-between items-center text-[13px] font-sans-body font-medium text-[#12241C]">
              <span>Extra monthly top-up</span>
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

          {/* Live sum beneath list in Newsreader */}
          <div className="flex justify-between items-baseline pt-2 border-t border-[#DCE3DD]">
            <span className="text-[14px] font-sans-body text-[#707972]">
              Total monthly flow
            </span>
            <span className="font-serif-display text-2xl font-semibold text-[#2F6B4F] tabular-nums">
              S${monthly}/mo
            </span>
          </div>
        </div>

      </div>

      {/* =========================================================================
          BLOCK 3 — THE OUTPUT (Visual Hero)
         ========================================================================= */}
      <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-[#DCE3DD] flex flex-col gap-6 shadow-xs">
        
        <div className="flex flex-col gap-2">
          <span className="text-[14px] font-sans-body text-[#707972]">
            At your current pace you land in
          </span>

          {/* Computed Date in Newsreader, clamp(2.5rem, 6vw, 5rem), Ink */}
          <motion.div
            key={`${landingDateStr}-${target}-${saved}-${monthly}`}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="font-serif-display text-[#12241C] font-semibold text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-tight"
          >
            {landingDateStr}
          </motion.div>
        </div>

        {/* Beneath in Mono: "S$740 of S$3,000 · S$34 a month" */}
        <div className="font-mono-code text-[14px] font-medium text-[#12241C] tabular-nums">
          {formatMoney(saved)} of {formatMoney(target)} · {formatMoney(monthly)} a month
        </div>

        {/* Thin Sage progress track (No percentage figure anywhere) */}
        <div className="w-full h-2 bg-[#DCE3DD] rounded-full overflow-hidden">
          <motion.div
            animate={{ width: `${progressRatio * 100}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="h-full bg-[#9FBF9C] rounded-full"
          />
        </div>

        {/* Buffer Gate line beneath output */}
        <div className="font-mono-code text-[12px] text-[#707972] pt-2">
          {isEmergencyFund
            ? 'This is your Buffer. It fills before anything else.'
            : 'Your Buffer is full, so everything here funds the goal.'}
        </div>

      </div>

      {/* =========================================================================
          BLOCK 5 — HONESTY CHECKS (Show at most one at a time, above lever card)
         ========================================================================= */}
      {saved >= target ? (
        /* Honesty Check 1: Goal Reached */
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-5 bg-[#E8ECE7] border border-[#2F6B4F] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="font-sans-body font-medium text-[15px] text-[#12241C]">
            You're there. Spend it, roll it into a new goal, or move it to Seed.
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => alert('Option selected: Spend it!')}
              className="px-3 py-1.5 border border-[#2F6B4F] text-[#2F6B4F] font-sans-body font-medium text-[13px] rounded-lg hover:bg-[#2F6B4F] hover:text-white transition-colors cursor-pointer"
            >
              Spend it
            </button>
            <button
              onClick={() => handleSelectTemplate(TEMPLATES[0])}
              className="px-3 py-1.5 border border-[#2F6B4F] text-[#2F6B4F] font-sans-body font-medium text-[13px] rounded-lg hover:bg-[#2F6B4F] hover:text-white transition-colors cursor-pointer"
            >
              Roll into new goal
            </button>
            <button
              onClick={() => alert('Option selected: Move to Seed!')}
              className="px-3 py-1.5 border border-[#2F6B4F] text-[#2F6B4F] font-sans-body font-medium text-[13px] rounded-lg hover:bg-[#2F6B4F] hover:text-white transition-colors cursor-pointer"
            >
              Move to Seed
            </button>
          </div>
        </motion.div>
      ) : monthly === 0 ? (
        /* Honesty Check 2: Monthly is 0 */
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-white border border-[#DCE3DD] rounded-xl font-sans-body text-[14px] text-[#707972]"
        >
          Turn on at least one source to see a date.
        </motion.div>
      ) : monthsNeeded > 120 ? (
        /* Honesty Check 3: Takes >10 years (Turmeric-bordered card) */
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-5 bg-[#D9A521]/10 border border-[#D9A521] rounded-xl font-sans-body text-[14px] text-[#12241C] leading-relaxed"
        >
          At this pace this takes {Math.round(monthsNeeded / 12)} years. Round-ups alone won't get you there — this goal needs a payday sweep or a smaller target.
        </motion.div>
      ) : null}

      {/* =========================================================================
          BLOCK 4 — THE LEVER
         ========================================================================= */}
      {saved < target && monthly > 0 && (
        <div className="p-5 bg-[#9FBF9C]/15 border border-[#9FBF9C] rounded-xl text-[#12241C] font-sans-body text-[15px] leading-relaxed">
          {topUpSlider === 0 ? (
            <span>
              Add S$40 a month and you land in <strong className="font-semibold text-[#2F6B4F]">{leverAdd40Date}</strong> — {leverAdd40MonthsSooner} month{leverAdd40MonthsSooner === 1 ? '' : 's'} sooner.
            </span>
          ) : (
            <span>
              Your S${topUpSlider} top-up brought this forward by <strong className="font-semibold text-[#2F6B4F]">{topUpDeltaMonths}</strong> month{topUpDeltaMonths === 1 ? '' : 's'}.
            </span>
          )}
        </div>
      )}

      {/* =========================================================================
          BLOCK 6 — TIMELINE
         ========================================================================= */}
      {saved < target && isFinite(monthsNeeded) && monthsNeeded > 0 && (
        <div className="flex flex-col gap-3 pt-2">
          <div className="mono-caption font-mono-code text-[12px] text-[#707972] uppercase tracking-wider">
            Timeline Milestones
          </div>

          <div className="relative w-full pt-6 pb-2">
            {/* Base line */}
            <div className="w-full h-1.5 bg-[#DCE3DD] rounded-full overflow-hidden relative">
              <motion.div
                animate={{ width: `${progressRatio * 100}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="h-full bg-[#9FBF9C] rounded-full"
              />
            </div>

            {/* 4 Evenly spaced milestone markers */}
            <div className="flex justify-between items-start mt-3">
              {[0, 0.33, 0.66, 1].map((pct, idx) => {
                const mOffset = Math.round(monthsNeeded * pct);
                const label = pct === 0 ? 'Today' : getShortDate(mOffset);
                return (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-[#2F6B4F] -mt-4 mb-1.5" />
                    <span className="font-mono-code text-[11px] sm:text-[12px] text-[#707972] tabular-nums">
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

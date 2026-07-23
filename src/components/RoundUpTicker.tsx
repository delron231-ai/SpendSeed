import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TickerTransaction {
  id: string;
  merchant: string;
  paid: string;
  remainder: number;
  remainderStr: string;
}

const RAW_DATA = [
  { merchant: 'Ah Huat Kopi', paid: 'S$4.60', remainder: 0.40, remainderStr: '+0.40' },
  { merchant: 'Grab', paid: 'S$11.20', remainder: 0.80, remainderStr: '+0.80' },
  { merchant: 'FairPrice', paid: 'S$38.15', remainder: 0.85, remainderStr: '+0.85' },
  { merchant: 'Koi Thé', paid: 'S$5.50', remainder: 0.50, remainderStr: '+0.50' },
  { merchant: 'MRT', paid: 'S$1.79', remainder: 0.21, remainderStr: '+0.21' },
  { merchant: 'Don Don Donki', paid: 'S$22.40', remainder: 0.60, remainderStr: '+0.60' },
  { merchant: 'Sheng Siong', paid: 'S$14.75', remainder: 0.25, remainderStr: '+0.25' },
  { merchant: 'Toast Box', paid: 'S$6.30', remainder: 0.70, remainderStr: '+0.70' },
];

export const RoundUpTicker: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [uniqueIdCounter, setUniqueIdCounter] = useState(0);

  // Initial base savings for Osaka Goal (S$740.00)
  const initialGoalSaved = 740.00;
  const targetGoalAmount = 3000.00;

  // Visible rows list & accumulated round-up additions
  const [visibleRows, setVisibleRows] = useState<TickerTransaction[]>([]);
  const [accumulatedAdditions, setAccumulatedAdditions] = useState(0);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Initialize initial visible rows
  useEffect(() => {
    if (prefersReducedMotion) {
      // Show full static list
      const staticList = RAW_DATA.map((item, idx) => ({
        id: `static-${idx}`,
        ...item,
      }));
      setVisibleRows(staticList);
      const totalSum = RAW_DATA.reduce((acc, curr) => acc + curr.remainder, 0);
      setAccumulatedAdditions(totalSum);
      return;
    }

    // Seed the first 3 items so the box isn't empty on arrival
    const initialSeed = RAW_DATA.slice(0, 3).reverse().map((item, idx) => ({
      id: `seed-${idx}`,
      ...item,
    }));
    setVisibleRows(initialSeed);
    const initialSum = RAW_DATA.slice(0, 3).reduce((acc, curr) => acc + curr.remainder, 0);
    setAccumulatedAdditions(initialSum);
    setCurrentIndex(3 % RAW_DATA.length);
    setUniqueIdCounter(3);
  }, [prefersReducedMotion]);

  // Interval timer for 1.2s auto-play
  useEffect(() => {
    if (prefersReducedMotion || isHovered) return;

    const interval = setInterval(() => {
      const nextData = RAW_DATA[currentIndex % RAW_DATA.length];
      const newTransaction: TickerTransaction = {
        id: `tx-${uniqueIdCounter}`,
        ...nextData,
      };

      setVisibleRows((prev) => [newTransaction, ...prev.slice(0, 5)]);
      setAccumulatedAdditions((prev) => prev + nextData.remainder);

      setCurrentIndex((prev) => (prev + 1) % RAW_DATA.length);
      setUniqueIdCounter((prev) => prev + 1);
    }, 1200);

    return () => clearInterval(interval);
  }, [isHovered, prefersReducedMotion, currentIndex, uniqueIdCounter]);

  const currentTotal = initialGoalSaved + accumulatedAdditions;
  const progressRatio = Math.min(1, currentTotal / targetGoalAmount);

  return (
    <section
      className="w-full bg-[#E8ECE7] border-y border-[#DCE3DD] py-8 sm:py-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Ticker Transaction Ledger */}
          <div className="md:col-span-7 flex flex-col gap-3">
            
            <div className="flex items-center justify-between border-b border-[#DCE3DD] pb-2">
              <span className="mono-caption font-mono-code text-[12px] text-[#2F6B4F] font-semibold tracking-wider">
                LIVE REMAINDER FEED
              </span>
              <span className="font-mono-code text-[11px] text-[#707972] flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${isHovered ? 'bg-[#D9A521]' : 'bg-[#2F6B4F] animate-pulse'}`}></span>
                {isHovered ? 'Paused on hover' : 'Auto-capturing (1.2s)'}
              </span>
            </div>

            {/* Transaction Rows Container */}
            <div className="relative min-h-[260px] sm:min-h-[270px] flex flex-col gap-2 overflow-hidden py-1">
              {prefersReducedMotion ? (
                // Reduced motion static view
                RAW_DATA.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center px-4 py-2 bg-[#F8FAF7] rounded-lg border border-[#DCE3DD] text-[14px]"
                  >
                    <span className="font-sans-body text-[#191C1B] font-medium">{item.merchant}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-sans-body text-[#191C1B]">{item.paid}</span>
                      <span className="font-mono-code font-bold text-[#D9A521]">{item.remainderStr}</span>
                    </div>
                  </div>
                ))
              ) : (
                // Animated live stream
                <AnimatePresence initial={false}>
                  {visibleRows.map((tx) => (
                    <motion.div
                      key={tx.id}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="flex justify-between items-center px-4 py-2.5 bg-[#F8FAF7] rounded-lg border border-[#DCE3DD] shadow-2xs text-[14px] sm:text-[15px]"
                    >
                      <span className="font-sans-body text-[#191C1B] font-medium">
                        {tx.merchant}
                      </span>
                      <div className="flex items-center gap-2 font-sans-body">
                        <span className="text-[#191C1B] tabular-nums">{tx.paid}</span>
                        <span className="font-mono-code font-bold text-[#D9A521] tabular-nums">
                          {tx.remainderStr}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

          </div>

          {/* Right Column: Running total & progress track */}
          <div className="md:col-span-5 bg-[#F8FAF7] p-6 sm:p-8 rounded-2xl border border-[#c0c9c1] flex flex-col justify-center gap-5 shadow-xs">
            
            <div className="flex flex-col gap-1">
              <span className="mono-caption font-mono-code text-[12px] text-[#707972] uppercase tracking-wider">
                GOAL ACCUMULATION
              </span>

              {/* Running total in Newsreader that counts up live */}
              <motion.div
                key={currentTotal.toFixed(2)}
                initial={{ scale: 0.98 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.15 }}
                className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#125238] tabular-nums tracking-tight"
              >
                S${currentTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </motion.div>
            </div>

            {/* Thin Sage track filling toward S$3,000 */}
            <div className="flex flex-col gap-2">
              <div className="w-full h-2 bg-[#DCE3DD] rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: `${progressRatio * 100}%` }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="h-full bg-[#9FBF9C] rounded-full"
                />
              </div>

              {/* Label in Mono: "into Osaka" */}
              <div className="flex justify-between items-center font-mono-code text-[12px] text-[#404943]">
                <span className="font-medium text-[#2F6B4F]">into Osaka</span>
                <span className="text-[#707972] tabular-nums">Target S$3,000</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

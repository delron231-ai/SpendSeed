import React from 'react';

interface TimelineStop {
  stage: string;
  title: string;
  copy: string;
  isHighlighted?: boolean;
  isCompleted?: boolean;
}

const STOPS: TimelineStop[] = [
  {
    stage: 'WEEK 1',
    title: 'Pick a goal',
    copy: 'Tell us what you\'re saving for and when you need it.',
    isCompleted: true,
  },
  {
    stage: 'WEEK 2',
    title: 'Fill the Buffer',
    copy: 'One month of expenses. Payday sweeps do most of it.',
    isCompleted: true,
  },
  {
    stage: 'MONTH 2',
    title: 'Commit',
    copy: 'Choose an amount, a term and who you\'ll spend it with.',
    isCompleted: true,
  },
  {
    stage: 'DAY ONE',
    title: 'Get your credit',
    copy: 'It lands the same day. Use it whenever you like.',
    isHighlighted: true,
    isCompleted: true,
  },
  {
    stage: 'ONGOING',
    title: 'Keep adding',
    copy: 'Top up the pot, or leave it. Either is fine.',
    isCompleted: false,
  },
  {
    stage: 'MATURITY',
    title: 'Take it back',
    copy: 'Full principal returned. Renew, switch goal, or walk.',
    isCompleted: false,
  },
];

export const TimelineSection: React.FC = () => {
  return (
    <section id="your-first-year" className="w-full py-[56px] sm:py-[80px] md:py-[100px] bg-[#F8FAF7]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-12 sm:mb-16 max-w-[720px]">
          <div className="mono-caption font-mono-code text-[#2F6B4F] text-[13px] tracking-[0.04em]">
            JOURNEY TIMELINE
          </div>
          <h2 className="section-heading font-serif-display text-[#12241C] font-medium text-3xl sm:text-4xl">
            Your first year
          </h2>
        </div>

        {/* DESKTOP TIMELINE (6 Columns) */}
        <div className="hidden md:block relative">
          
          {/* Connected 2px horizontal line */}
          <div className="absolute top-[18px] left-[5%] right-[5%] h-[2px] flex pointer-events-none z-0">
            {/* Completed line portion (Stops 1 to 4 = 60% of width) */}
            <div className="w-[60%] h-full bg-[#2F6B4F]" />
            {/* Remaining line portion (Stops 4 to 6 = 40% of width) */}
            <div className="w-[40%] h-full bg-[#DCE3DD]" />
          </div>

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {STOPS.map((stop, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                {/* Dot */}
                <div className="flex items-center justify-start mb-1">
                  <div
                    className={`w-[12px] h-[12px] rounded-full ring-4 ring-[#F8FAF7] ${
                      stop.isHighlighted
                        ? 'bg-[#D9A521] ring-2 ring-[#D9A521]/30 w-[14px] h-[14px]'
                        : stop.isCompleted
                        ? 'bg-[#2F6B4F]'
                        : 'bg-[#DCE3DD]'
                    }`}
                  />
                </div>

                {/* Stage Label */}
                <span className="font-mono-code text-[11px] font-semibold text-[#707972] tracking-wider">
                  {stop.stage}
                </span>

                {/* Title */}
                <h3
                  className={`font-sans-body font-semibold text-[15px] ${
                    stop.isHighlighted ? 'text-[#D9A521]' : 'text-[#12241C]'
                  }`}
                >
                  {stop.title}
                </h3>

                {/* Body Copy */}
                <p className="font-sans-body text-[#404943] text-[13px] leading-snug">
                  {stop.copy}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE TIMELINE (Vertical Stack) */}
        <div className="block md:hidden relative pl-6">
          {/* Connected 2px vertical line */}
          <div className="absolute top-2 bottom-6 left-[7px] w-[2px] flex flex-col pointer-events-none">
            <div className="h-[60%] w-full bg-[#2F6B4F]" />
            <div className="h-[40%] w-full bg-[#DCE3DD]" />
          </div>

          <div className="flex flex-col gap-8">
            {STOPS.map((stop, idx) => (
              <div key={idx} className="relative flex flex-col gap-1.5 pl-4">
                {/* Dot on the vertical line */}
                <div
                  className={`absolute -left-[23px] top-1 rounded-full ${
                    stop.isHighlighted
                      ? 'w-[14px] h-[14px] bg-[#D9A521] ring-4 ring-[#F8FAF7]'
                      : stop.isCompleted
                      ? 'w-[10px] h-[10px] bg-[#2F6B4F] ring-4 ring-[#F8FAF7]'
                      : 'w-[10px] h-[10px] bg-[#DCE3DD] ring-4 ring-[#F8FAF7]'
                  }`}
                />

                <span className="font-mono-code text-[11px] font-semibold text-[#707972] tracking-wider">
                  {stop.stage}
                </span>

                <h3
                  className={`font-sans-body font-semibold text-[16px] ${
                    stop.isHighlighted ? 'text-[#D9A521]' : 'text-[#12241C]'
                  }`}
                >
                  {stop.title}
                </h3>

                <p className="font-sans-body text-[#404943] text-[14px] leading-relaxed">
                  {stop.copy}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';

export const LadderSection: React.FC = () => {
  return (
    <section id="the-ladder" className="w-full py-[56px] sm:py-[80px] md:py-[100px] bg-[#F2F4F1]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-10 sm:mb-12 max-w-[720px]">
          <div className="mono-caption font-mono-code text-[#2F6B4F] text-[13px] tracking-[0.04em]">
            PRODUCT RESTRAINT
          </div>
          <h2 className="section-heading font-serif-display text-[#12241C] font-medium text-3xl sm:text-4xl">
            What we won't let you do
          </h2>
        </div>

        {/* The Two-Tier Restraint List */}
        <div className="relative pl-8 sm:pl-12 max-w-[900px] flex flex-col gap-8">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-[13px] sm:left-[19px] top-6 bottom-10 w-[2px] bg-[#DCE3DD] pointer-events-none" />

          {/* ITEM 1 */}
          <div className="relative flex flex-col gap-3 bg-[#F8FAF7] p-6 sm:p-8 rounded-2xl border border-[#DCE3DD]">
            {/* Number badge on the vertical line */}
            <div className="absolute -left-[32px] sm:-left-[48px] top-6 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#EBEEEA] text-[#12241C] font-mono-code font-bold text-[13px] sm:text-[15px] flex items-center justify-center border border-[#DCE3DD]">
              1
            </div>

            <h3 className="font-sans-body text-xl sm:text-2xl font-semibold text-[#12241C]">
              Commit before you have a Buffer
            </h3>

            <p className="body-copy font-sans-body text-[#404943] text-[15px] sm:text-[16px] leading-[1.6]">
              Locking money you'll need back is how these products go wrong. One month of expenses first, no exceptions.
            </p>
          </div>

          {/* ITEM 2 */}
          <div className="relative flex flex-col gap-3 bg-[#F8FAF7] p-6 sm:p-8 rounded-2xl border border-[#DCE3DD]">
            {/* Number badge on the vertical line */}
            <div className="absolute -left-[32px] sm:-left-[48px] top-6 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#EBEEEA] text-[#12241C] font-mono-code font-bold text-[13px] sm:text-[15px] flex items-center justify-center border border-[#DCE3DD]">
              2
            </div>

            <h3 className="font-sans-body text-xl sm:text-2xl font-semibold text-[#12241C]">
              Commit money with no date on it
            </h3>

            <p className="body-copy font-sans-body text-[#404943] text-[15px] sm:text-[16px] leading-[1.6]">
              If you don't know when you need it, you don't need a commitment pot. Leave it liquid.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';

export const WhySingaporeSection: React.FC = () => {
  return (
    <section id="why-singapore" className="w-full py-[56px] sm:py-[80px] md:py-[100px] bg-[#F2F4F1]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col gap-4 mb-10 sm:mb-12 max-w-[720px]"
        >
          <div className="mono-caption font-mono-code text-[#2F6B4F] text-[13px] tracking-[0.04em]">
            MACROECONOMIC DYNAMICS
          </div>
          <h2 className="section-heading font-serif-display text-[#12241C] font-medium">
            Why this doesn't work everywhere
          </h2>
          <p className="body-copy font-sans-body text-[#404943] text-[17px] leading-[1.6] max-w-[65ch]">
            The same product runs in the UK. It doesn't transplant to Singapore unchanged, and the reason is a single number.
          </p>
        </motion.div>

        {/* Comparison Bars Container */}
        <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-[#DCE3DD] flex flex-col gap-8 shadow-xs max-w-[1000px]">
          
          {/* Bars Stack */}
          <div className="flex flex-col gap-6 sm:gap-8">
            
            {/* BAR 1: UNITED KINGDOM */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2 md:gap-6">
              <div className="md:col-span-3 font-sans-body font-semibold text-[15px] sm:text-[16px] text-[#12241C]">
                UNITED KINGDOM
              </div>

              <div className="md:col-span-9 w-full h-[56px] bg-[#EBEEEA] rounded-[8px] overflow-hidden flex relative border border-[#DCE3DD]">
                {/* Forest Segment (89%) */}
                <motion.div
                  initial={{ width: '0%' }}
                  whileInView={{ width: '89%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-[#2F6B4F] flex items-center justify-center px-2 overflow-hidden border-r border-[#EBEEEA]"
                >
                  <span className="font-mono-code text-[12px] text-white font-medium whitespace-nowrap truncate">
                    Bank funds 4.50%
                  </span>
                </motion.div>

                {/* Turmeric Segment (11%) */}
                <motion.div
                  initial={{ width: '0%' }}
                  whileInView={{ width: '11%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-[#D9A521] flex items-center justify-center px-1 overflow-hidden"
                >
                  <span className="font-mono-code text-[12px] text-[#12241C] font-bold whitespace-nowrap truncate">
                    Merchant 0.56%
                  </span>
                </motion.div>
              </div>
            </div>

            {/* BAR 2: SINGAPORE */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2 md:gap-6">
              <div className="md:col-span-3 font-sans-body font-semibold text-[15px] sm:text-[16px] text-[#12241C]">
                SINGAPORE
              </div>

              <div className="md:col-span-9 w-full h-[56px] bg-[#EBEEEA] rounded-[8px] overflow-hidden flex relative border border-[#DCE3DD]">
                {/* Forest Segment (20%) */}
                <motion.div
                  initial={{ width: '0%' }}
                  whileInView={{ width: '20%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-[#2F6B4F] flex items-center justify-center px-2 overflow-hidden border-r border-[#EBEEEA]"
                >
                  <span className="font-mono-code text-[12px] text-white font-medium whitespace-nowrap truncate">
                    Bank 1.00%
                  </span>
                </motion.div>

                {/* Turmeric Segment (80%) */}
                <motion.div
                  initial={{ width: '0%' }}
                  whileInView={{ width: '80%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-[#D9A521] flex items-center justify-center px-2 overflow-hidden"
                >
                  <span className="font-mono-code text-[12px] text-[#12241C] font-bold whitespace-nowrap truncate">
                    Merchant funds 4.06%
                  </span>
                </motion.div>
              </div>
            </div>

          </div>

          {/* Key Insight Headline in Newsreader at 2rem */}
          <div className="pt-4 border-t border-[#DCE3DD]">
            <h3 className="font-serif-display text-[2rem] font-medium text-[#12241C] leading-tight">
              In Singapore the merchant funds 80% of it, not 11%.
            </h3>
          </div>

          {/* Two Paragraph Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-[#404943] font-sans-body text-[15px] sm:text-[16px] leading-[1.6]">
            <div>
              At UK deposit rates the bank does almost all the work. The merchant contributes a rounding error and the product is really a savings account with a gift card attached.
            </div>
            <div>
              At Singapore's 1%, the merchant carries four fifths of the benefit. That turns the whole thing into a customer-acquisition product, and it changes which merchants can afford to take part.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

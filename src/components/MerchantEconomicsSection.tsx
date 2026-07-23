import React from 'react';
import { motion } from 'motion/react';

interface MerchantRow {
  merchant: string;
  contract: string;
  margin: string;
  profit: string;
  mostFunded: string;
  verdict: 'Not fundable' | 'Fundable';
}

const MERCHANTS_DATA: MerchantRow[] = [
  {
    merchant: 'Global streaming',
    contract: 'S$240',
    margin: '50%',
    profit: 'S$120',
    mostFunded: 'S$5',
    verdict: 'Not fundable',
  },
  {
    merchant: 'Local gym chain',
    contract: 'S$1,200',
    margin: '75%',
    profit: 'S$900',
    mostFunded: 'S$204',
    verdict: 'Fundable',
  },
  {
    merchant: 'Telco plan',
    contract: 'S$480',
    margin: '55%',
    profit: 'S$264',
    mostFunded: 'S$101',
    verdict: 'Fundable',
  },
  {
    merchant: 'Delivery pass',
    contract: 'S$180',
    margin: '60%',
    profit: 'S$108',
    mostFunded: 'S$45',
    verdict: 'Fundable',
  },
  {
    merchant: 'Motor insurance',
    contract: 'S$1,400',
    margin: '25%',
    profit: 'S$350',
    mostFunded: 'S$168',
    verdict: 'Fundable',
  },
  {
    merchant: 'Renovation firm',
    contract: 'S$30,000',
    margin: '30%',
    profit: 'S$9,000',
    mostFunded: 'S$3,300',
    verdict: 'Fundable',
  },
  {
    merchant: 'Banquet venue',
    contract: 'S$28,000',
    margin: '35%',
    profit: 'S$9,800',
    mostFunded: 'S$3,360',
    verdict: 'Fundable',
  },
  {
    merchant: 'Furnishing retail',
    contract: 'S$12,000',
    margin: '38%',
    profit: 'S$4,560',
    mostFunded: 'S$1,800',
    verdict: 'Fundable',
  },
];

export const MerchantEconomicsSection: React.FC = () => {
  return (
    <section id="merchant-economics" className="w-full py-[56px] sm:py-[80px] md:py-[100px] bg-[#F8FAF7]">
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
            UNIT ECONOMICS & VIABILITY
          </div>
          <h2 className="section-heading font-serif-display text-[#12241C] font-medium">
            Which merchants can afford this
          </h2>
          <p className="body-copy font-sans-body text-[#404943] text-[17px] leading-[1.6] max-w-[65ch]">
            A merchant funds credit only when it costs less than the discount they'd otherwise offer. Run that test and one category drops out immediately.
          </p>
        </motion.div>

        {/* Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="w-full overflow-x-auto rounded-2xl border border-[#DCE3DD] bg-white shadow-xs mb-10"
        >
          <table className="w-full text-left border-collapse min-w-[720px]">
            <thead>
              <tr className="border-b border-[#DCE3DD] bg-[#EBEEEA] font-sans-body font-semibold text-[14px] text-[#12241C]">
                <th className="py-4 px-5">Merchant</th>
                <th className="py-4 px-5 font-mono-code text-right">Annual contract</th>
                <th className="py-4 px-5 font-mono-code text-right">Gross margin</th>
                <th className="py-4 px-5 font-mono-code text-right">Gross profit</th>
                <th className="py-4 px-5 font-mono-code text-right">Most they'd fund</th>
                <th className="py-4 px-5 text-right">Verdict</th>
              </tr>
            </thead>
            <tbody>
              {MERCHANTS_DATA.map((row, idx) => {
                const isNotFundable = row.verdict === 'Not fundable';
                const bgClass = idx % 2 === 0 ? 'bg-white' : 'bg-[#FAFCFB]';

                return (
                  <tr
                    key={row.merchant}
                    className={`border-b border-[#DCE3DD] transition-colors font-sans-body text-[15px] ${bgClass} ${
                      isNotFundable ? 'opacity-60' : 'hover:bg-[#F2F4F1]'
                    }`}
                  >
                    <td className="py-4 px-5 font-medium text-[#12241C]">
                      {row.merchant}
                    </td>
                    <td className="py-4 px-5 font-mono-code text-[#404943] text-right tabular-nums">
                      {row.contract}
                    </td>
                    <td className="py-4 px-5 font-mono-code text-[#404943] text-right tabular-nums">
                      {row.margin}
                    </td>
                    <td className="py-4 px-5 font-mono-code text-[#404943] text-right tabular-nums">
                      {row.profit}
                    </td>
                    <td className="py-4 px-5 font-mono-code text-[#404943] text-right tabular-nums">
                      {row.mostFunded}
                    </td>
                    <td className="py-4 px-5 text-right font-semibold">
                      <span
                        className={
                          isNotFundable
                            ? 'text-[#D9A521]'
                            : 'text-[#2F6B4F]'
                        }
                      >
                        {row.verdict}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>

        {/* The Streaming Problem Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="p-6 sm:p-8 rounded-2xl border border-[#D9A521] bg-transparent flex flex-col gap-6 max-w-[800px]"
        >
          <h3 className="font-sans-body font-semibold text-[18px] text-[#12241C]">
            The streaming problem
          </h3>

          {/* 4 Mono Lines */}
          <div className="flex flex-col gap-2 font-mono-code text-[13px] sm:text-[14px] text-[#12241C] border-b border-[#DCE3DD] pb-5">
            <div className="flex justify-between items-center gap-4">
              <span className="text-[#404943]">A year of streaming in Singapore</span>
              <span className="font-semibold tabular-nums">S$240</span>
            </div>
            <div className="flex justify-between items-center gap-4">
              <span className="text-[#404943]">Balance needed for the commission to matter</span>
              <span className="font-semibold tabular-nums">S$4,500</span>
            </div>
            <div className="flex justify-between items-center gap-4">
              <span className="text-[#404943]">Interest that balance throws off at 1%</span>
              <span className="font-semibold tabular-nums">S$45</span>
            </div>
            <div className="flex justify-between items-center gap-4 pt-1 font-bold text-[#2F6B4F]">
              <span>So the merchant has to fund</span>
              <span className="tabular-nums">S$195</span>
            </div>
          </div>

          {/* Body Conclusion */}
          <p className="font-sans-body text-[15px] sm:text-[16px] text-[#404943] leading-relaxed">
            "They'd be paying S$195 to capture S$120 of gross profit. It never happens — which is why we don't sell subscriptions people can already afford."
          </p>
        </motion.div>

      </div>
    </section>
  );
};

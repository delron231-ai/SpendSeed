import React from 'react';
import { Target, Shield, Zap } from 'lucide-react';

interface AppCard {
  icon: React.ReactNode;
  title: string;
  copy: string;
}

const CARDS: AppCard[] = [
  {
    icon: <Target className="w-5 h-5 text-[#2F6B4F]" />,
    title: 'Goal pots',
    copy: 'Name it, date it, and watch it fill. Osaka, the reno, the ring. Progress shows as a date you\'ll land on, not a percentage that means nothing.',
  },
  {
    icon: <Shield className="w-5 h-5 text-[#2F6B4F]" />,
    title: 'The Buffer',
    copy: 'One month of expenses, kept liquid, before you commit anything. It\'s what makes a fixed term safe to sign — and we won\'t let you commit until it\'s there.',
  },
  {
    icon: <Zap className="w-5 h-5 text-[#2F6B4F]" />,
    title: 'Payday sweeps',
    copy: 'Set an amount and it moves the day your salary lands, before you\'ve had a chance to notice it. Change it or switch it off any time.',
  },
];

export const RestOfAppSection: React.FC = () => {
  return (
    <section id="the-rest-of-the-app" className="w-full py-[56px] sm:py-[80px] md:py-[100px] bg-[#F2F4F1]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-10 sm:mb-12 max-w-[720px]">
          <div className="mono-caption font-mono-code text-[#2F6B4F] text-[13px] tracking-[0.04em]">
            COMPLETE UTILITY
          </div>
          <h2 className="section-heading font-serif-display text-[#12241C] font-medium text-3xl sm:text-4xl">
            The rest of the app
          </h2>
          <p className="body-copy font-sans-body text-[#404943] text-[17px] leading-[1.6] max-w-[65ch]">
            Commitment pots are the reason to open the app. These are the reasons to keep it.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-[#F8FAF7] rounded-2xl border border-[#DCE3DD] flex flex-col gap-4 justify-between shadow-xs"
            >
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EBEEEA] border border-[#DCE3DD] flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="font-sans-body font-semibold text-[18px] text-[#12241C]">
                  {card.title}
                </h3>
                <p className="font-sans-body text-[#404943] text-[15px] sm:text-[16px] leading-relaxed">
                  {card.copy}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion } from 'motion/react';

interface AppPrototypeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppPrototypeDrawer: React.FC<AppPrototypeDrawerProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'onboarding' | 'ladder' | 'goal' | 'partners' | 'profile'>('ladder');
  
  // Interactive Goal Selector state
  const [selectedGoal, setSelectedGoal] = useState<string>('osaka');
  const [extraMonthlyPace, setExtraMonthlyPace] = useState<number>(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative w-full max-w-[960px] h-[92vh] max-h-[820px] bg-[#F2F4F1] rounded-2xl border border-[#c0c9c1] shadow-2xl flex flex-col overflow-hidden text-[#191C1B]"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#EBEEEA] border-b border-[#DCE3DD]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#2F6B4F]">grain</span>
            <span className="font-serif-display font-semibold text-[#125238] text-lg">SpendSeed App Prototype</span>
            <span className="hidden sm:inline-block text-[11px] font-mono-code bg-[#D9A521]/20 text-[#5e4400] px-2 py-0.5 rounded-full ml-2">
              Interactive Mockup
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#707972] hover:text-[#191C1B] hover:bg-[#DCE3DD] rounded-full transition-colors cursor-pointer"
            title="Close modal"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* View Switcher Navigation Tabs */}
        <div className="flex items-center gap-1 px-4 py-2 bg-[#F8FAF7] border-b border-[#DCE3DD] overflow-x-auto text-[12px] font-mono-code scrollbar-none">
          <button
            onClick={() => setActiveTab('onboarding')}
            className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'onboarding' ? 'bg-[#2F6B4F] text-white font-semibold' : 'text-[#404943] hover:bg-[#E8ECE7]'
            }`}
          >
            1. Goal Picker
          </button>
          <button
            onClick={() => setActiveTab('ladder')}
            className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'ladder' ? 'bg-[#2F6B4F] text-white font-semibold' : 'text-[#404943] hover:bg-[#E8ECE7]'
            }`}
          >
            2. Home Ladder
          </button>
          <button
            onClick={() => setActiveTab('goal')}
            className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'goal' ? 'bg-[#2F6B4F] text-white font-semibold' : 'text-[#404943] hover:bg-[#E8ECE7]'
            }`}
          >
            3. Goal Details
          </button>
          <button
            onClick={() => setActiveTab('partners')}
            className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'partners' ? 'bg-[#2F6B4F] text-white font-semibold' : 'text-[#404943] hover:bg-[#E8ECE7]'
            }`}
          >
            4. Partner Pots
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'profile' ? 'bg-[#2F6B4F] text-white font-semibold' : 'text-[#404943] hover:bg-[#E8ECE7]'
            }`}
          >
            5. Governance / Safety
          </button>
        </div>

        {/* Prototype Main Screen Canvas */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#F2F4F1]">
          <div className="max-w-[480px] mx-auto bg-[#F8FAF7] border border-[#c0c9c1] rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col gap-6 min-h-[500px]">
            
            {/* SCREEN 1: ONBOARDING GOAL PICKER */}
            {activeTab === 'onboarding' && (
              <div className="flex flex-col gap-6">
                <div>
                  <span className="mono-caption font-mono-code text-[#2F6B4F] text-[11px] tracking-wider">ONBOARDING</span>
                  <h2 className="font-serif-display text-2xl font-semibold text-[#191C1B]">Set your commitment goal</h2>
                  <p className="text-[14px] text-[#404943] mt-1">What are we saving toward once your Buffer is secured?</p>
                </div>

                <div className="flex flex-col gap-3">
                  {[
                    { id: 'osaka', title: 'A trip somewhere quiet (Osaka)', target: 'S$3,000', icon: 'flight_takeoff' },
                    { id: 'laptop', title: 'New hardware / M3 Pro MacBook', target: 'S$1,800', icon: 'laptop_mac' },
                    { id: 'bto', title: 'BTO Housing Deposit', target: 'S$20,000', icon: 'apartment' },
                    { id: 'other', title: 'Something else', target: 'Custom', icon: 'add_circle' },
                  ].map(g => (
                    <button
                      key={g.id}
                      onClick={() => setSelectedGoal(g.id)}
                      className={`p-4 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                        selectedGoal === g.id
                          ? 'bg-[#E8ECE7] border-[#2F6B4F] ring-1 ring-[#2F6B4F]'
                          : 'bg-white border-[#DCE3DD] hover:border-[#9FBF9C]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#2F6B4F]">{g.icon}</span>
                        <div>
                          <h4 className="font-sans-body font-medium text-[15px] text-[#191C1B]">{g.title}</h4>
                          <span className="text-[12px] text-[#707972] font-mono-code">Target: {g.target}</span>
                        </div>
                      </div>
                      {selectedGoal === g.id && (
                        <span className="material-symbols-outlined text-[#2F6B4F]">check_circle</span>
                      )}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setActiveTab('ladder')}
                  className="w-full py-3 bg-[#2F6B4F] text-white rounded-lg font-sans-body font-medium hover:bg-[#125238] transition-colors cursor-pointer text-center"
                >
                  Continue to Dashboard
                </button>
              </div>
            )}

            {/* SCREEN 2: HOME LADDER DASHBOARD */}
            {activeTab === 'ladder' && (
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-[#DCE3DD] pb-3">
                  <div>
                    <span className="mono-caption text-[11px] font-mono-code text-[#707972]">WELCOME BACK</span>
                    <h2 className="font-serif-display text-2xl font-semibold text-[#191C1B]">Wei Jie</h2>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono-code text-[#2F6B4F] font-semibold">MONTHLY FLOW</span>
                    <div className="font-mono-code text-lg text-[#125238] font-bold tabular-nums">+S$250.00</div>
                  </div>
                </div>

                {/* Vessel 1: Buffer */}
                <div className="p-4 bg-[#F2F4F1] rounded-xl border border-[#2F6B4F] flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="font-serif-display font-medium text-[#191C1B]">1. Buffer</span>
                    <span className="font-mono-code text-[11px] text-[#2F6B4F] font-bold uppercase">Required first</span>
                  </div>
                  <div className="w-full h-2 bg-[#DCE3DD] rounded-full overflow-hidden">
                    <div className="h-full bg-[#2F6B4F] w-full"></div>
                  </div>
                  <span className="text-[12px] text-[#707972]">1 month expenses secured in cash.</span>
                </div>

                {/* Vessel 2: Commitment Pots */}
                <div className="p-4 bg-[#F2F4F1] rounded-xl border border-[#9FBF9C] flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <span className="font-serif-display font-medium text-[#191C1B]">2. Commitment pots</span>
                    <span className="font-mono-code text-[11px] text-[#125238] font-bold uppercase">The product</span>
                  </div>
                  <div className="w-full h-2 bg-[#DCE3DD] rounded-full overflow-hidden">
                    <div className="h-full bg-[#9FBF9C] w-[60%]"></div>
                  </div>
                  
                  {/* Goals breakdown */}
                  <div className="flex flex-col gap-2 pt-1">
                    <div
                      onClick={() => setActiveTab('goal')}
                      className="p-2.5 bg-white rounded-lg border border-[#DCE3DD] flex justify-between items-center cursor-pointer hover:border-[#2F6B4F]"
                    >
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-[#2F6B4F]">flight</span>
                        <span className="text-[13px] font-medium">Trip to Osaka (Skylane Credit)</span>
                      </div>
                      <span className="font-mono-code text-[12px] tabular-nums text-[#2F6B4F]">S$1,800 / S$3,000</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 3: GOAL DETAILS */}
            {activeTab === 'goal' && (
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between border-b border-[#DCE3DD] pb-3">
                  <button onClick={() => setActiveTab('ladder')} className="text-[#2F6B4F] text-[13px] font-mono-code flex items-center gap-1 cursor-pointer">
                    <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                    <span>Back</span>
                  </button>
                  <span className="text-[11px] font-mono-code bg-[#9FBF9C]/30 text-[#125238] px-2 py-0.5 rounded-full">Commitment Pot</span>
                </div>

                <div>
                  <h2 className="font-serif-display text-2xl font-semibold text-[#191C1B]">Trip to Osaka</h2>
                  <p className="text-[13px] text-[#707972]">Partner: Skylane (Up-front merchant credit)</p>
                </div>

                {/* Pace forecast box */}
                <div className="p-4 bg-[#E8ECE7] rounded-xl border border-[#DCE3DD] flex flex-col gap-3">
                  <span className="text-[12px] font-mono-code text-[#2F6B4F] font-semibold">FORECAST</span>
                  <div className="font-serif-display text-lg text-[#125238]">
                    At your current pace (+S$250/mo) you land in <span className="font-bold underline">November 2026</span>.
                  </div>

                  {/* Pace lever slider */}
                  <div className="flex flex-col gap-2 pt-2 border-t border-[#DCE3DD]">
                    <div className="flex justify-between text-[12px] font-mono-code">
                      <span>Extra monthly boost:</span>
                      <span className="font-bold text-[#2F6B4F]">+{extraMonthlyPace > 0 ? `S$${extraMonthlyPace}` : 'S$0'}/mo</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="200"
                      step="25"
                      value={extraMonthlyPace}
                      onChange={(e) => setExtraMonthlyPace(Number(e.target.value))}
                      className="w-full accent-[#2F6B4F] cursor-pointer"
                    />
                    {extraMonthlyPace > 0 && (
                      <span className="text-[12px] text-[#125238] font-mono-code">
                        🚀 Landing date accelerated to <span className="font-bold">July 2026</span>!
                      </span>
                    )}
                  </div>
                </div>

                {/* Associated Funding */}
                <div className="flex flex-col gap-2">
                  <span className="text-[12px] font-mono-code text-[#707972]">MONTHLY FLOWS</span>
                  <div className="p-3 bg-white rounded-lg border border-[#DCE3DD] text-[13px] flex justify-between items-center">
                    <span>Payday sweep</span>
                    <span className="font-mono-code text-[#2F6B4F]">+S$150/mo</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#DCE3DD] text-[13px] flex justify-between items-center">
                    <span>Recurring allocation</span>
                    <span className="font-mono-code text-[#2F6B4F]">+S$100/mo</span>
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 4: PARTNER POTS */}
            {activeTab === 'partners' && (
              <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center border-b border-[#DCE3DD] pb-3">
                  <h2 className="font-serif-display text-2xl font-semibold text-[#191C1B]">Partner Rebate Pots</h2>
                  <span className="text-[11px] font-mono-code text-[#D9A521] font-semibold">Up-front Merchant Value</span>
                </div>

                <div className="p-4 bg-[#EBEEEA] rounded-xl border border-[#DCE3DD] text-[13px] flex flex-col gap-2">
                  <div className="flex justify-between font-mono-code">
                    <span>Standard Bank Interest:</span>
                    <span className="text-[#707972]">Minimal annual trickle</span>
                  </div>
                  <div className="flex justify-between font-mono-code font-bold text-[#D9A521] text-[14px]">
                    <span>Partner Merchant Credit:</span>
                    <span>Delivered Day One</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {[
                    { name: 'Skylane', cat: 'Flight & Hotel Bookings', credit: 'S$240 credit', icon: 'flight' },
                    { name: 'Rumah Living', cat: 'Home & Furniture', credit: 'S$1,800 credit', icon: 'chair' },
                    { name: 'Ironhouse', cat: 'Gym & Studio Credit', credit: 'S$204 credit', icon: 'fitness_center' },
                    { name: 'Voltbox', cat: 'Tech & Laptops', credit: 'S$180 credit', icon: 'laptop' },
                  ].map((p, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-lg border border-[#DCE3DD] flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#2F6B4F]">{p.icon}</span>
                        <div>
                          <div className="font-medium text-[14px]">{p.name}</div>
                          <div className="text-[11px] text-[#707972]">{p.cat}</div>
                        </div>
                      </div>
                      <span className="font-mono-code font-bold text-[#D9A521] text-[14px]">{p.credit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SCREEN 5: GOVERNANCE & SAFETY */}
            {activeTab === 'profile' && (
              <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center border-b border-[#DCE3DD] pb-3">
                  <h2 className="font-serif-display text-2xl font-semibold text-[#191C1B]">System Safety</h2>
                  <span className="font-mono-code text-[11px] bg-[#2F6B4F] text-white px-2.5 py-0.5 rounded-full font-bold">Protected</span>
                </div>

                <div className="flex flex-col gap-3 text-[13px] text-[#404943]">
                  <div className="p-3 bg-white rounded-lg border border-[#2F6B4F] flex flex-col gap-1">
                    <span className="font-semibold text-[#191C1B]">Trust Account Custody</span>
                    <span>Your principal remains with a licensed custodian at all times.</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#DCE3DD] flex flex-col gap-1">
                    <span className="font-semibold text-[#191C1B]">Buffer Priority</span>
                    <span>1 month expenses held in cash before any commitment pot is funded.</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#DCE3DD] flex flex-col gap-1">
                    <span className="font-semibold text-[#191C1B]">Zero Exit Fee</span>
                    <span>Leave a partner pot after 30 days without penalty.</span>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="flex items-center justify-between px-6 py-3 bg-[#EBEEEA] border-t border-[#DCE3DD] text-[12px] font-mono-code text-[#707972]">
          <span>SpendSeed UI v2.0 · Singapore Prototype</span>
          <button onClick={onClose} className="text-[#2F6B4F] font-bold hover:underline cursor-pointer">
            Close Preview
          </button>
        </div>

      </motion.div>
    </div>
  );
};

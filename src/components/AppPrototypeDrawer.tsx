import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface AppPrototypeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppPrototypeDrawer: React.FC<AppPrototypeDrawerProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'onboarding' | 'ladder' | 'goal' | 'ledger' | 'rules' | 'partners' | 'seed' | 'profile'>('ladder');
  
  // Interactive Goal Selector state
  const [selectedGoal, setSelectedGoal] = useState<string>('osaka');
  const [extraMonthlyPace, setExtraMonthlyPace] = useState<number>(0);

  // Interactive Rules Toggles
  const [rules, setRules] = useState([
    { id: '1', title: 'Every food delivery order', action: 'Move S$3.00 to Osaka Goal', active: true, saved: 'S$36.00' },
    { id: '2', title: 'Take MRT instead of Grab', action: 'Move S$8.50 difference to Buffer', active: true, saved: 'S$112.50' },
    { id: '3', title: 'Payday round-up boost', action: 'Move S$150 to Seed', active: false, saved: 'S$450.00' },
  ]);

  // Seed Variant Toggle
  const [seedVariant, setSeedVariant] = useState<'locked' | 'unlocked'>('locked');

  const toggleRule = (id: string) => {
    setRules(prev => prev.map(r => r.id === id ? { ...r, active: !r.active } : r));
  };

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
              Interactive Mockup · Hardcoded Client State
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
            onClick={() => setActiveTab('ledger')}
            className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'ledger' ? 'bg-[#2F6B4F] text-white font-semibold' : 'text-[#404943] hover:bg-[#E8ECE7]'
            }`}
          >
            4. Activity Ledger
          </button>
          <button
            onClick={() => setActiveTab('rules')}
            className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'rules' ? 'bg-[#2F6B4F] text-white font-semibold' : 'text-[#404943] hover:bg-[#E8ECE7]'
            }`}
          >
            5. Auto Rules
          </button>
          <button
            onClick={() => setActiveTab('partners')}
            className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'partners' ? 'bg-[#2F6B4F] text-white font-semibold' : 'text-[#404943] hover:bg-[#E8ECE7]'
            }`}
          >
            6. Partner Pots
          </button>
          <button
            onClick={() => setActiveTab('seed')}
            className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'seed' ? 'bg-[#2F6B4F] text-white font-semibold' : 'text-[#404943] hover:bg-[#E8ECE7]'
            }`}
          >
            7. Seed Portfolio
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'profile' ? 'bg-[#2F6B4F] text-white font-semibold' : 'text-[#404943] hover:bg-[#E8ECE7]'
            }`}
          >
            8. You / Health
          </button>
        </div>

        {/* Prototype Main Screen Canvas */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#F2F4F1]">
          <div className="max-w-[480px] mx-auto bg-[#F8FAF7] border border-[#c0c9c1] rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col gap-6 min-h-[500px]">
            
            {/* SCREEN 1: ONBOARDING GOAL PICKER */}
            {activeTab === 'onboarding' && (
              <div className="flex flex-col gap-6">
                <div>
                  <span className="mono-caption font-mono-code text-[#2F6B4F] text-[11px] tracking-wider">ONBOARDING STEP 1</span>
                  <h2 className="font-serif-display text-2xl font-semibold text-[#191C1B]">Set your 18-month intention</h2>
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
                  Continue to Home Dashboard
                </button>
              </div>
            )}

            {/* SCREEN 2: HOME LADDER DASHBOARD */}
            {activeTab === 'ladder' && (
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-[#DCE3DD] pb-3">
                  <div>
                    <span className="mono-caption text-[11px] font-mono-code text-[#707972]">GOOD EVENING</span>
                    <h2 className="font-serif-display text-2xl font-semibold text-[#191C1B]">Wei Jie</h2>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono-code text-[#2F6B4F] font-semibold">THIS WEEK</span>
                    <div className="font-mono-code text-lg text-[#125238] font-bold tabular-nums">+S$18.40</div>
                  </div>
                </div>

                {/* Vessel 1: Buffer */}
                <div className="p-4 bg-[#F2F4F1] rounded-xl border border-[#2F6B4F] flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="font-serif-display font-medium text-[#191C1B]">1. Buffer</span>
                    <span className="font-mono-code text-[12px] text-[#2F6B4F] font-bold tabular-nums">S$1,840 / S$1,840</span>
                  </div>
                  <div className="w-full h-2 bg-[#DCE3DD] rounded-full overflow-hidden">
                    <div className="h-full bg-[#2F6B4F] w-full"></div>
                  </div>
                  <span className="text-[12px] text-[#707972]">3 months living expenses secured. Money flows down to Stage 2.</span>
                </div>

                {/* Vessel 2: Goals */}
                <div className="p-4 bg-[#F2F4F1] rounded-xl border border-[#9FBF9C] flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <span className="font-serif-display font-medium text-[#191C1B]">2. Goals (Active)</span>
                    <span className="font-mono-code text-[12px] text-[#496548] font-bold tabular-nums">S$740 / S$3,000</span>
                  </div>
                  <div className="w-full h-2 bg-[#DCE3DD] rounded-full overflow-hidden">
                    <div className="h-full bg-[#9FBF9C] w-[24.6%]"></div>
                  </div>
                  
                  {/* Goals breakdown */}
                  <div className="flex flex-col gap-2 pt-1">
                    <div
                      onClick={() => setActiveTab('goal')}
                      className="p-2.5 bg-white rounded-lg border border-[#DCE3DD] flex justify-between items-center cursor-pointer hover:border-[#2F6B4F]"
                    >
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-[#2F6B4F]">flight</span>
                        <span className="text-[13px] font-medium">Trip to Osaka</span>
                      </div>
                      <span className="font-mono-code text-[12px] tabular-nums text-[#2F6B4F]">S$740 / S$3,000</span>
                    </div>
                  </div>
                </div>

                {/* Vessel 3: Seed (Locked) */}
                <div className="p-4 bg-[#F2F4F1]/60 rounded-xl border border-[#DCE3DD] opacity-60 flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1.5">
                      <span className="font-serif-display font-medium text-[#707972]">3. Seed</span>
                      <span className="material-symbols-outlined text-[16px] text-[#707972]">lock</span>
                    </div>
                    <span className="font-mono-code text-[11px] text-[#707972]">Locked</span>
                  </div>
                  <span className="text-[12px] text-[#707972]">Will unlock automatically when your Osaka goal reaches 100%.</span>
                </div>
              </div>
            )}

            {/* SCREEN 3: GOAL DETAILS (OSAKA) */}
            {activeTab === 'goal' && (
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between border-b border-[#DCE3DD] pb-3">
                  <button onClick={() => setActiveTab('ladder')} className="text-[#2F6B4F] text-[13px] font-mono-code flex items-center gap-1 cursor-pointer">
                    <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                    <span>Back to Home</span>
                  </button>
                  <span className="text-[11px] font-mono-code bg-[#9FBF9C]/30 text-[#125238] px-2 py-0.5 rounded-full">Active Goal</span>
                </div>

                <div>
                  <h2 className="font-serif-display text-2xl font-semibold text-[#191C1B]">Trip to Osaka</h2>
                  <p className="text-[13px] text-[#707972]">Target S$3,000 · Current S$740.00 (24.6%)</p>
                </div>

                {/* Pace forecast box */}
                <div className="p-4 bg-[#E8ECE7] rounded-xl border border-[#DCE3DD] flex flex-col gap-3">
                  <span className="text-[12px] font-mono-code text-[#2F6B4F] font-semibold">FORECAST</span>
                  <div className="font-serif-display text-lg text-[#125238]">
                    At your current pace (+S$18.40/wk) you land in <span className="font-bold underline">November 2027</span>.
                  </div>

                  {/* Pace lever slider */}
                  <div className="flex flex-col gap-2 pt-2 border-t border-[#DCE3DD]">
                    <div className="flex justify-between text-[12px] font-mono-code">
                      <span>Add extra monthly boost:</span>
                      <span className="font-bold text-[#2F6B4F]">+{extraMonthlyPace > 0 ? `S$${extraMonthlyPace}` : 'S$0'}/mo</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="150"
                      step="25"
                      value={extraMonthlyPace}
                      onChange={(e) => setExtraMonthlyPace(Number(e.target.value))}
                      className="w-full accent-[#2F6B4F] cursor-pointer"
                    />
                    {extraMonthlyPace > 0 && (
                      <span className="text-[12px] text-[#125238] font-mono-code">
                        🚀 Projected landing accelerated to <span className="font-bold">March 2027</span>!
                      </span>
                    )}
                  </div>
                </div>

                {/* Associated Funding Rules */}
                <div className="flex flex-col gap-2">
                  <span className="text-[12px] font-mono-code text-[#707972]">FUNDING SOURCES</span>
                  <div className="p-3 bg-white rounded-lg border border-[#DCE3DD] text-[13px] flex justify-between items-center">
                    <span>Card round-ups (+0.40 average)</span>
                    <span className="font-mono-code text-[#2F6B4F]">+S$12.40/wk</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#DCE3DD] text-[13px] flex justify-between items-center">
                    <span>Food delivery rule (S$3 / order)</span>
                    <span className="font-mono-code text-[#2F6B4F]">+S$6.00/wk</span>
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 4: ACTIVITY LEDGER */}
            {activeTab === 'ledger' && (
              <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center border-b border-[#DCE3DD] pb-3">
                  <h2 className="font-serif-display text-2xl font-semibold text-[#191C1B]">Activity Ledger</h2>
                  <span className="font-mono-code text-[12px] text-[#2F6B4F]">Last 7 days</span>
                </div>

                <div className="flex flex-col gap-3">
                  <span className="text-[11px] font-mono-code text-[#707972]">TODAY</span>

                  <div className="p-3 bg-white rounded-lg border border-[#DCE3DD] flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#2F6B4F]">coffee</span>
                      <div>
                        <div className="text-[14px] font-medium">Ah Huat Kopi</div>
                        <div className="text-[11px] text-[#707972]">Card Spend S$4.60</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-mono-code text-[13px] text-[#D9A521] font-bold">+S$0.40</span>
                      <div className="text-[10px] text-[#707972]">Round-Up</div>
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-[#DCE3DD] flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#2F6B4F]">local_taxi</span>
                      <div>
                        <div className="text-[14px] font-medium">Grab Ride</div>
                        <div className="text-[11px] text-[#707972]">Card Spend S$11.20</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-mono-code text-[13px] text-[#D9A521] font-bold">+S$0.80</span>
                      <div className="text-[10px] text-[#707972]">Round-Up</div>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono-code text-[#707972] mt-2">YESTERDAY</span>

                  <div className="p-3 bg-white rounded-lg border border-[#DCE3DD] flex justify-between items-center bg-[#E8ECE7]">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#2F6B4F]">bolt</span>
                      <div>
                        <div className="text-[14px] font-medium">Food Delivery Rule</div>
                        <div className="text-[11px] text-[#707972]">Trigger: Deliveroo S$28.50</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-mono-code text-[13px] text-[#2F6B4F] font-bold">+S$3.00</span>
                      <div className="text-[10px] text-[#707972]">Auto Rule</div>
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-[#DCE3DD] flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#2F6B4F]">shopping_bag</span>
                      <div>
                        <div className="text-[14px] font-medium">FairPrice Finest</div>
                        <div className="text-[11px] text-[#707972]">Card Spend S$38.15</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-mono-code text-[13px] text-[#D9A521] font-bold">+S$0.85</span>
                      <div className="text-[10px] text-[#707972]">Round-Up</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 5: AUTOMATED RULES */}
            {activeTab === 'rules' && (
              <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center border-b border-[#DCE3DD] pb-3">
                  <h2 className="font-serif-display text-2xl font-semibold text-[#191C1B]">Automated Rules</h2>
                  <span className="text-[11px] font-mono-code bg-[#2F6B4F]/10 text-[#2F6B4F] px-2 py-0.5 rounded-full">3 Active</span>
                </div>

                <p className="text-[13px] text-[#404943]">Rules move money based on your real choices. No manual transfers required.</p>

                <div className="flex flex-col gap-3">
                  {rules.map(rule => (
                    <div key={rule.id} className="p-4 bg-white rounded-xl border border-[#DCE3DD] flex flex-col gap-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-[15px]">{rule.title}</h4>
                          <span className="text-[13px] text-[#2F6B4F] font-mono-code">{rule.action}</span>
                        </div>
                        <button
                          onClick={() => toggleRule(rule.id)}
                          className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                            rule.active ? 'bg-[#2F6B4F]' : 'bg-[#DCE3DD]'
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                              rule.active ? 'left-6' : 'left-1'
                            }`}
                          />
                        </button>
                      </div>
                      <div className="flex justify-between items-center text-[11px] font-mono-code text-[#707972] border-t border-[#F2F4F1] pt-2">
                        <span>Captured so far</span>
                        <span className="font-bold text-[#191C1B]">{rule.saved}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SCREEN 6: PARTNER POTS */}
            {activeTab === 'partners' && (
              <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center border-b border-[#DCE3DD] pb-3">
                  <h2 className="font-serif-display text-2xl font-semibold text-[#191C1B]">Partner Rebate Pots</h2>
                  <span className="text-[11px] font-mono-code text-[#D9A521] font-semibold">4.8% Max Rebate</span>
                </div>

                <div className="p-4 bg-[#EBEEEA] rounded-xl border border-[#DCE3DD] text-[13px] flex flex-col gap-2">
                  <div className="flex justify-between font-mono-code">
                    <span>Traditional Bank Yield:</span>
                    <span className="text-[#707972]">1.08%</span>
                  </div>
                  <div className="flex justify-between font-mono-code">
                    <span>SpendSeed Buffer Yield:</span>
                    <span className="text-[#2F6B4F]">2.10%</span>
                  </div>
                  <div className="flex justify-between font-mono-code font-bold text-[#D9A521] text-[14px]">
                    <span>Partner Deployment Rebate:</span>
                    <span>Up to 4.80%</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {[
                    { name: 'Skyward Travel', cat: 'Flight & Hotel Bookings', rebate: '4.8%', icon: 'flight' },
                    { name: 'Modu Living', cat: 'Home & Office Furniture', rebate: '4.2%', icon: 'chair' },
                    { name: 'Onyx Audio', cat: 'Noise Cancelling Headphones', rebate: '3.9%', icon: 'headphones' },
                    { name: 'Common Ground Coffee', cat: 'Local Roasters', rebate: '3.5%', icon: 'local_cafe' },
                  ].map((p, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-lg border border-[#DCE3DD] flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#2F6B4F]">{p.icon}</span>
                        <div>
                          <div className="font-medium text-[14px]">{p.name}</div>
                          <div className="text-[11px] text-[#707972]">{p.cat}</div>
                        </div>
                      </div>
                      <span className="font-mono-code font-bold text-[#D9A521] text-[14px]">{p.rebate} rebate</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SCREEN 7: SEED PORTFOLIO (LOCKED VS UNLOCKED VARIANT TOGGLE) */}
            {activeTab === 'seed' && (
              <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center border-b border-[#DCE3DD] pb-3">
                  <h2 className="font-serif-display text-2xl font-semibold text-[#191C1B]">Seed Portfolio</h2>
                  
                  {/* Variant Switcher */}
                  <div className="flex bg-[#E8ECE7] p-0.5 rounded-lg border border-[#DCE3DD] text-[11px] font-mono-code">
                    <button
                      onClick={() => setSeedVariant('locked')}
                      className={`px-2 py-1 rounded-md cursor-pointer ${seedVariant === 'locked' ? 'bg-[#2F6B4F] text-white' : 'text-[#707972]'}`}
                    >
                      Locked
                    </button>
                    <button
                      onClick={() => setSeedVariant('unlocked')}
                      className={`px-2 py-1 rounded-md cursor-pointer ${seedVariant === 'unlocked' ? 'bg-[#2F6B4F] text-white' : 'text-[#707972]'}`}
                    >
                      Unlocked
                    </button>
                  </div>
                </div>

                {seedVariant === 'locked' ? (
                  <div className="p-8 bg-[#E8ECE7] rounded-xl border border-[#DCE3DD] text-center flex flex-col items-center gap-4 my-4">
                    <span className="material-symbols-outlined text-4xl text-[#707972]">lock_clock</span>
                    <h3 className="font-serif-display text-xl font-medium text-[#191C1B]">
                      Not yet. And that's on purpose.
                    </h3>
                    <p className="text-[14px] text-[#404943] leading-relaxed max-w-[360px]">
                      Your Seed stage stays locked until Stage 2 (Osaka Goal) is 100% funded. We protect your peace of mind before exposing your cash to market risk.
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    <div className="p-4 bg-[#125238] text-white rounded-xl flex justify-between items-center">
                      <div>
                        <span className="text-[11px] font-mono-code opacity-80">UNLOCKED SEED BALANCE</span>
                        <div className="font-serif-display text-2xl font-bold tabular-nums">S$3,420.00</div>
                      </div>
                      <span className="font-mono-code text-[12px] bg-white/20 text-white px-2.5 py-1 rounded-full">+4.2% Return</span>
                    </div>

                    <div className="flex flex-col gap-2">
                      <span className="text-[12px] font-mono-code text-[#707972]">DIVERSIFIED ALLOCATION</span>
                      <div className="p-3 bg-white rounded-lg border border-[#DCE3DD] text-[13px] flex justify-between">
                        <span>Global Low-Cost Equities (VWRA)</span>
                        <span className="font-mono-code font-bold">55%</span>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-[#DCE3DD] text-[13px] flex justify-between">
                        <span>Asian Technology Indices</span>
                        <span className="font-mono-code font-bold">20%</span>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-[#DCE3DD] text-[13px] flex justify-between">
                        <span>Singapore Govt Securities (SGS)</span>
                        <span className="font-mono-code font-bold">20%</span>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-[#DCE3DD] text-[13px] flex justify-between">
                        <span>Physical Gold Reserve</span>
                        <span className="font-mono-code font-bold">5%</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* SCREEN 8: YOU / FINANCIAL HEALTH */}
            {activeTab === 'profile' && (
              <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center border-b border-[#DCE3DD] pb-3">
                  <h2 className="font-serif-display text-2xl font-semibold text-[#191C1B]">Financial Health</h2>
                  <span className="font-mono-code text-[11px] bg-[#2F6B4F] text-white px-2.5 py-0.5 rounded-full font-bold">Strong</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white rounded-lg border border-[#DCE3DD] flex flex-col gap-1">
                    <span className="text-[11px] font-mono-code text-[#707972]">BUFFER CAPACITY</span>
                    <span className="font-bold text-lg text-[#125238]">1.1 Months</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#DCE3DD] flex flex-col gap-1">
                    <span className="text-[11px] font-mono-code text-[#707972]">CONSISTENCY</span>
                    <span className="font-bold text-lg text-[#125238]">11 / 12 Wks</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#DCE3DD] flex flex-col gap-1">
                    <span className="text-[11px] font-mono-code text-[#707972]">ASSET DIVERSITY</span>
                    <span className="font-bold text-lg text-[#125238]">4 Types</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#DCE3DD] flex flex-col gap-1">
                    <span className="text-[11px] font-mono-code text-[#707972]">HIGH-COST DEBT</span>
                    <span className="font-bold text-lg text-[#125238]">S$0.00</span>
                  </div>
                </div>

                <div className="p-4 bg-[#E8ECE7] rounded-xl border border-[#DCE3DD] text-[13px] text-[#404943] leading-relaxed">
                  "Your habits show strong financial stillness. You're capturing S$18.40/week without added budget strain."
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="flex items-center justify-between px-6 py-3 bg-[#EBEEEA] border-t border-[#DCE3DD] text-[12px] font-mono-code text-[#707972]">
          <span>SpendSeed UI v1.0 · Singapore Prototype</span>
          <button onClick={onClose} className="text-[#2F6B4F] font-bold hover:underline cursor-pointer">
            Close Preview
          </button>
        </div>

      </motion.div>
    </div>
  );
};

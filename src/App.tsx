import React, { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { RoundUpTicker } from './components/RoundUpTicker';
import { GoalPlannerSection } from './components/GoalPlannerSection';
import { LadderSection } from './components/LadderSection';
import { ProblemSection } from './components/ProblemSection';
import { PartnerCalculatorSection } from './components/PartnerCalculatorSection';
import { WhatsDifferentSection } from './components/WhatsDifferentSection';
import { FooterSection } from './components/FooterSection';
import { AppPrototypeDrawer } from './components/AppPrototypeDrawer';

export default function App() {
  const [isAppDrawerOpen, setIsAppDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F2F4F1] text-[#191C1B] font-sans-body antialiased flex flex-col selection:bg-[#9FBF9C] selection:text-[#125238]">
      {/* 1. Navigation Header */}
      <HeaderNav onOpenAppPreview={() => setIsAppDrawerOpen(true)} />

      {/* Main Page Sections in exact order requested */}
      <main className="flex-1 w-full">
        {/* 2. Hero Section */}
        <HeroSection onOpenAppPreview={() => setIsAppDrawerOpen(true)} />

        {/* 3. Round-up Ticker */}
        <RoundUpTicker />

        {/* 4. Goal Planner */}
        <GoalPlannerSection />

        {/* 5. The Ladder */}
        <LadderSection />

        {/* 6. The Problem Statistics */}
        <ProblemSection />

        {/* 7. Partner Pot Calculator */}
        <PartnerCalculatorSection />

        {/* 8. What's Different */}
        <WhatsDifferentSection />
      </main>

      {/* 9. Footer */}
      <FooterSection onOpenAppPreview={() => setIsAppDrawerOpen(true)} />

      {/* Interactive Mobile App Prototype Modal */}
      <AppPrototypeDrawer
        isOpen={isAppDrawerOpen}
        onClose={() => setIsAppDrawerOpen(false)}
      />
    </div>
  );
}

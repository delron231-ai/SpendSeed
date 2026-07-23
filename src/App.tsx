import React, { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { CommitmentCalculatorSection } from './components/CommitmentCalculatorSection';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { RestOfAppSection } from './components/RestOfAppSection';
import { TimelineSection } from './components/TimelineSection';
import { WhatsTheCatchSection } from './components/WhatsTheCatchSection';
import { WhoYouCanCommitWithSection } from './components/WhoYouCanCommitWithSection';
import { LadderSection } from './components/LadderSection';
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

        {/* 3. Primary Commitment Calculator */}
        <CommitmentCalculatorSection />

        {/* 4. The Problem Statistics */}
        <ProblemSection />

        {/* 5. How It Works (3 steps) */}
        <HowItWorksSection />

        {/* 6. The Rest Of The App */}
        <RestOfAppSection />

        {/* 7. Your First Year (Timeline) */}
        <TimelineSection />

        {/* 8. What's The Catch */}
        <WhatsTheCatchSection />

        {/* 9. Who You Can Commit With */}
        <WhoYouCanCommitWithSection />

        {/* 10. The Ladder (What we won't let you do) */}
        <LadderSection />

        {/* 11. The Model */}
        <WhatsDifferentSection />
      </main>

      {/* 12. Footer */}
      <FooterSection onOpenAppPreview={() => setIsAppDrawerOpen(true)} />

      {/* Interactive Mobile App Prototype Modal */}
      <AppPrototypeDrawer
        isOpen={isAppDrawerOpen}
        onClose={() => setIsAppDrawerOpen(false)}
      />
    </div>
  );
}

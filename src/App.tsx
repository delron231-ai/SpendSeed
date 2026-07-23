import React, { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { LadderSection } from './components/LadderSection';
import { RemainderSection } from './components/RemainderSection';
import { ModelSection } from './components/ModelSection';
import { FooterSection } from './components/FooterSection';
import { AppPrototypeDrawer } from './components/AppPrototypeDrawer';

export default function App() {
  const [isAppDrawerOpen, setIsAppDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F2F4F1] text-[#191C1B] font-sans-body antialiased flex flex-col selection:bg-[#9FBF9C] selection:text-[#125238]">
      {/* Sticky Header Navigation */}
      <HeaderNav onOpenAppPreview={() => setIsAppDrawerOpen(true)} />

      {/* Main Page Sections */}
      <main className="flex-1 w-full">
        <HeroSection onOpenAppPreview={() => setIsAppDrawerOpen(true)} />
        <ProblemSection />
        <LadderSection />
        <RemainderSection />
        <ModelSection />
      </main>

      {/* Footer */}
      <FooterSection onOpenAppPreview={() => setIsAppDrawerOpen(true)} />

      {/* Interactive Mobile App Prototype Modal */}
      <AppPrototypeDrawer
        isOpen={isAppDrawerOpen}
        onClose={() => setIsAppDrawerOpen(false)}
      />
    </div>
  );
}


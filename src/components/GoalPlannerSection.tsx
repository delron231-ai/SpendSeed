import React from 'react';
import { motion } from 'motion/react';
import { GoalPlanner } from './GoalPlanner';

export const GoalPlannerSection: React.FC = () => {
  return (
    <section id="goal-planner" className="w-full py-[56px] sm:py-[80px] md:py-[100px] bg-[#F8FAF7]">
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
            INTERACTIVE GOAL PLANNER
          </div>
          <h2 className="section-heading font-serif-display text-[#191C1B] font-medium">
            Map out your goal timeline
          </h2>
          <p className="body-copy font-sans-body text-[#404943] text-[17px] leading-[1.6] max-w-[65ch]">
            Every micro round-up and deliberate top-up pulls your target date closer. Adjust parameters below to see your arrival date land live.
          </p>
        </motion.div>

        {/* The Interactive Goal Planner Widget */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        >
          <GoalPlanner />
        </motion.div>

      </div>
    </section>
  );
};

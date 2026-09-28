import React from "react";
import { Navbar } from "./components/ui/Navbar";
import { ScrollProgress } from "./components/ui/ScrollProgress";

// 17-Section Professional Showcase Flow
import { HeroSection } from "./components/sections/HeroSection";
import { ProblemSection } from "./components/sections/ProblemSection";
import { CentralizedBottleneckSection } from "./components/sections/CentralizedBottleneckSection";
import { SolutionSection } from "./components/sections/SolutionSection";
import { WorkflowSection } from "./components/sections/WorkflowSection";
import { FleetSection } from "./components/sections/FleetSection";
import { PathPlanningSection } from "./components/sections/PathPlanningSection";
import { ConflictSection } from "./components/sections/ConflictSection";
import { ArchitectureSection } from "./components/sections/ArchitectureSection";
import { TechStackSection } from "./components/sections/TechStackSection";
import { DashboardSection } from "./components/sections/DashboardSection";
import { CaseStudySection } from "./components/sections/CaseStudySection";
import { ProjectVideoSection } from "./components/sections/ProjectVideoSection";
import { TeamSection } from "./components/sections/TeamSection";
import { MentorsSection } from "./components/sections/MentorsSection";
import { FutureScopeSection } from "./components/sections/FutureScopeSection";
import { Footer } from "./components/sections/Footer";

export function App() {
  return (
    <div className="relative min-h-screen bg-[#F3F6F8] text-[#17242B] overflow-x-hidden selection:bg-[#2EC4C9]/30 selection:text-[#17242B]">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Sticky Robotics-Themed Navbar */}
      <Navbar />

      {/* Main Showcase Flow */}
      <main>
        {/* 01 — HERO */}
        <HeroSection />

        {/* 02 — THE PROBLEM */}
        <ProblemSection />

        {/* 03 — THE CENTRALIZED BOTTLENECK */}
        <CentralizedBottleneckSection />

        {/* 04 — OUR SOLUTION */}
        <SolutionSection />

        {/* 05 — HOW IT WORKS (Core System Flow) */}
        <WorkflowSection />

        {/* 06 — FIVE ROBOTS. ONE FLEET. */}
        <FleetSection />

        {/* 07 — DYNAMIC PATH PLANNING (D* Lite) */}
        <PathPlanningSection />

        {/* 08 — CONFLICT & DEADLOCK */}
        <ConflictSection />

        {/* 09 — EDGE ARCHITECTURE */}
        <ArchitectureSection />

        {/* 10 — TECHNOLOGY STACK */}
        <TechStackSection />

        {/* 11 — LIVE WAREHOUSE DASHBOARD */}
        <DashboardSection />

        {/* 12 — CASE STUDY */}
        <CaseStudySection />

        {/* 13 — PROJECT VIDEO */}
        <ProjectVideoSection />

        {/* 14 — TEAM SHAZAM */}
        <TeamSection />

        {/* 15 — MENTORS */}
        <MentorsSection />

        {/* 16 — FUTURE SCOPE */}
        <FutureScopeSection />

        {/* 17 — FOOTER */}
        <Footer />
      </main>
    </div>
  );
}

export default App;

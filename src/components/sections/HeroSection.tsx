import React from "react";
import { PROJECT_DATA } from "../../data/project";
import { HeroWarehouseCanvas } from "../ui/HeroWarehouseCanvas";
import { ArrowRight, ChevronRight, Cpu, Network, ShieldCheck, Box } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#17242B] via-[#0B2733] to-[#17242B] overflow-hidden"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[#168AAD]/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-12 left-10 w-96 h-96 bg-[#2EC4C9]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Floating robotics telemetry cues on large desktop */}
      <div className="hidden xl:flex absolute left-8 top-1/3 flex-col gap-6 text-[10px] font-mono text-[#2EC4C9]/70 border-l border-[#2EC4C9]/25 pl-3 select-none pointer-events-none">
        <div>
          <span className="block text-[#2EC4C9] font-bold">PROBLEM ID</span>
          <span>SIH26123 • SMART WAREHOUSES</span>
        </div>
        <div>
          <span className="block text-[#2EC4C9] font-bold">FLEET TOPOLOGY</span>
          <span>DISTRIBUTED EDGE-AI MESH</span>
        </div>
        <div>
          <span className="block text-[#2EC4C9] font-bold">MIDDLEWARE</span>
          <span>ROS 2 + FAST DDS</span>
        </div>
      </div>

      <div className="hidden xl:flex absolute right-8 top-1/3 flex-col gap-6 text-[10px] font-mono text-[#2EC4C9]/70 border-r border-[#2EC4C9]/25 pr-3 select-none pointer-events-none text-right">
        <div>
          <span className="block text-[#2EC4C9] font-bold">FLEET UNITS</span>
          <span>5 AUTONOMOUS MOBILE ROBOTS</span>
        </div>
        <div>
          <span className="block text-[#2EC4C9] font-bold">PATH PLANNER</span>
          <span>D* LITE DYNAMIC REPLAN</span>
        </div>
        <div>
          <span className="block text-[#2EC4C9] font-bold">DEMO ENVIRONMENT</span>
          <span>GAZEBO SIMULATION WORLD</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Top Text & Branding Container */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12">
          {/* Official Team SHAZAM Project Emblem */}
          <div className="flex justify-center mb-5">
            <div className="relative px-5 py-2.5 rounded-2xl bg-[#0B2733]/80 border border-[#2EC4C9]/35 shadow-[0_0_30px_rgba(46,196,201,0.2)] backdrop-blur-md inline-flex items-center justify-center">
              <img
                src="/logo-light.png"
                alt="Team SHAZAM Logo"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain drop-shadow-[0_0_15px_rgba(46,196,201,0.35)]"
              />
            </div>
          </div>

          {/* Small Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B2733]/90 border border-[#2EC4C9]/40 text-[#2EC4C9] text-xs font-mono uppercase tracking-widest mb-5 backdrop-blur-md shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#2EC4C9] animate-pulse"></span>
            <span>{PROJECT_DATA.eventName}</span>
          </div>

          {/* Main Title - Exact Match */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            Edge AI Based Distributed Fleet Coordination for Autonomous Mobile Robots for Smart Warehouses
          </h1>

          {/* Short Description */}
          <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed max-w-3xl mx-auto mb-8">
            {PROJECT_DATA.shortDescription}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <a
              href="#solution"
              className="shazam-btn-primary px-6 py-3 text-xs sm:text-sm shadow-md"
            >
              <span>Explore the Solution</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono font-semibold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/15 border border-[#2EC4C9]/40 hover:border-[#2EC4C9] transition-all backdrop-blur-sm"
            >
              <span>View Warehouse Dashboard</span>
              <ChevronRight className="w-4 h-4 text-[#2EC4C9]" />
            </a>
          </div>

          {/* Current Status Pill: Strict Honest Labeling */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2733] border border-[#2EC4C9]/40 text-[11px] font-mono text-slate-200 mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3FA66B] animate-ping"></span>
            <span className="font-semibold text-[#2EC4C9]">{PROJECT_DATA.statusBadge}</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-300 hidden sm:inline">Demonstrated via Gazebo Simulation</span>
          </div>

          {/* Hero Feature Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {PROJECT_DATA.heroTags.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1 rounded-full bg-[#0B2733]/90 border border-[#2EC4C9]/25 text-[11px] font-mono text-slate-200 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Centerpiece Hero Warehouse Simulation Canvas */}
        <div className="max-w-5xl mx-auto">
          <HeroWarehouseCanvas />
        </div>
      </div>

      {/* Smooth transition gradient into the light warehouse floor Problem section */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F3F6F8] via-[#F3F6F8]/60 to-transparent pointer-events-none z-20" />
    </section>
  );
};

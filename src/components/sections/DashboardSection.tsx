import React, { useState, useEffect } from "react";
import {
  FLEET_ROBOTS,
  FLEET_KPI,
  ACTIVE_TASKS,
  COORDINATION_EVENTS,
  RobotInfo,
} from "../../data/fleet";
import {
  Activity,
  Battery,
  BatteryCharging,
  Compass,
  AlertTriangle,
  CheckCircle2,
  Cpu,
  Layers,
  MapPin,
  Pause,
  Play,
  RefreshCw,
  Server,
  Zap,
  Radio,
  Boxes,
  ShieldAlert,
  ArrowRight,
  HardDrive,
  Eye,
  Sliders,
  ExternalLink,
  Video,
} from "lucide-react";

export const DashboardSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("map");
  const [selectedRobotId, setSelectedRobotId] = useState<string>("amr-02");
  const [isSimRunning, setIsSimRunning] = useState<boolean>(true);
  const [showAltPaths, setShowAltPaths] = useState<boolean>(true);
  const [simStep, setSimStep] = useState<number>(0);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === "tasks") {
      document.getElementById("dashboard-tasks")?.scrollIntoView({ behavior: "smooth" });
    } else if (tabId === "path") {
      document.getElementById("dashboard-path")?.scrollIntoView({ behavior: "smooth" });
    } else if (tabId === "conflicts") {
      document.getElementById("dashboard-conflicts")?.scrollIntoView({ behavior: "smooth" });
    } else if (tabId === "system") {
      document.getElementById("dashboard-system")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Subtle live position pulse for the 5 AMRs
  useEffect(() => {
    if (!isSimRunning) return;
    const interval = setInterval(() => {
      setSimStep((prev) => (prev + 1) % 100);
    }, 1200);
    return () => clearInterval(interval);
  }, [isSimRunning]);

  const selectedRobot =
    FLEET_ROBOTS.find((r) => r.id === selectedRobotId) || FLEET_ROBOTS[0];

  return (
    <section
      id="dashboard"
      className="py-16 sm:py-24 px-3 sm:px-6 lg:px-8 bg-[#F3F6F8] text-[#17242B] relative overflow-hidden border-t border-[#E8EDF0]"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8EDF0] border border-[#168AAD]/30 text-[#168AAD] text-xs font-mono uppercase tracking-wider mb-3">
            <Radio className="w-3.5 h-3.5" />
            <span>OPERATIONAL DIGITAL TWIN</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#17242B] tracking-tight leading-tight">
            Smart Warehouse Coordination Center
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#4B6370] font-light leading-relaxed">
            Real-time digital twin monitoring 5 Autonomous Mobile Robots negotiating intersections, dynamic D* Lite route adjustments, and decentralized edge arbitration.
          </p>

          <div className="mt-3 inline-flex items-center gap-2 text-xs font-mono text-[#4B6370] bg-white px-3.5 py-1 rounded-full border border-[#E8EDF0] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#3FA66B] animate-pulse" />
            <span className="font-semibold text-[#17242B]">DEMO ENVIRONMENT:</span>
            <span>GAZEBO MULTI-AGENT SIMULATION</span>
          </div>
        </div>

        {/* Master Command Center Frame */}
        <div className="rounded-2xl border border-[#E8EDF0] bg-white shadow-lg overflow-hidden flex flex-col">
          {/* ========================================================= */}
          {/* 8. TOP BAR                                                */}
          {/* ========================================================= */}
          <div className="px-5 py-3.5 bg-[#17242B] text-white flex flex-wrap items-center justify-between gap-3 border-b border-[#0B2733]">
            {/* Left Brand & Problem Statement */}
            <div className="flex items-center gap-3">
              <span className="font-heading font-bold text-base tracking-wider text-white">
                SHAZAM
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#168AAD]/25 text-[#2EC4C9] border border-[#2EC4C9]/40 font-semibold">
                SIH26123
              </span>
            </div>

            {/* Center Command Center Label */}
            <div className="hidden md:flex items-center gap-2 text-xs font-mono tracking-widest text-[#E8EDF0] uppercase font-semibold">
              <Activity className="w-4 h-4 text-[#2EC4C9]" />
              <span>SMART WAREHOUSE CONTROL</span>
            </div>

            {/* Right System Status & Video Action */}
            <div className="flex items-center gap-2.5 font-mono text-xs">
              <button
                onClick={() => setActiveTab(activeTab === "video" ? "map" : "video")}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#168AAD] hover:bg-[#2496D2] text-white text-[11px] font-mono font-bold transition-all shadow-xs cursor-pointer group"
                title="Watch YouTube Explanation Video"
              >
                <Play className="w-3 h-3 fill-current group-hover:scale-110 transition-transform" />
                <span>{activeTab === "video" ? "LIVE MAP" : "EXPLANATION VIDEO"}</span>
              </button>

              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B2733] border border-[#3FA66B]/50 text-[#3FA66B] text-[11px] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#3FA66B] animate-pulse" />
                <span>● SYSTEM ONLINE</span>
              </span>
              <span className="text-slate-400 text-[11px] hidden sm:inline">
                SIM TIME: 10:42:19
              </span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 10. TOP KPI BAR (Simulation Values)                       */}
          {/* ========================================================= */}
          <div className="px-5 py-3 bg-[#E8EDF0]/70 border-b border-[#E8EDF0] grid grid-cols-2 sm:grid-cols-5 gap-3 font-mono text-xs">
            <div className="p-2.5 rounded-lg bg-white border border-[#E8EDF0] shadow-xs">
              <span className="text-[10px] text-[#4B6370] block">ACTIVE ROBOTS</span>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xl font-bold text-[#17242B] font-heading">
                  {FLEET_KPI.activeRobots}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#E8EDF0] text-[#168AAD] font-semibold">
                  SIM
                </span>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-white border border-[#E8EDF0] shadow-xs">
              <span className="text-[10px] text-[#4B6370] block">ACTIVE TASKS</span>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xl font-bold text-[#17242B] font-heading">
                  {FLEET_KPI.activeTasks}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#E8EDF0] text-[#4B6370]">
                  QUEUED
                </span>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-white border border-[#E8EDF0] shadow-xs">
              <span className="text-[10px] text-[#4B6370] block">ROBOTS MOVING</span>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xl font-bold text-[#3FA66B] font-heading">
                  {FLEET_KPI.robotsMoving}
                </span>
                <span className="text-[10px] text-[#3FA66B] font-bold">● ACTIVE</span>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-white border border-[#E8EDF0] shadow-xs">
              <span className="text-[10px] text-[#4B6370] block">CONFLICTS</span>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xl font-bold text-[#F2A93B] font-heading">
                  {FLEET_KPI.conflicts}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-50 text-[#F2A93B] border border-amber-200 font-bold">
                  YIELDING
                </span>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-white border border-[#E8EDF0] shadow-xs col-span-2 sm:col-span-1">
              <span className="text-[10px] text-[#4B6370] block">SYSTEM STATUS</span>
              <div className="flex items-center justify-between mt-1">
                <span className="text-sm font-bold text-[#3FA66B]">
                  {FLEET_KPI.systemStatus}
                </span>
                <span className="text-[9px] text-[#4B6370]">SIMULATION</span>
              </div>
            </div>
          </div>

          {/* Main Dashboard Layout: Left Sidebar + Center Workspace + Right Fleet Status */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
            {/* ========================================================= */}
            {/* 9. LEFT SIDEBAR                                           */}
            {/* ========================================================= */}
            <aside className="lg:col-span-2 bg-[#0B2733] text-white p-4 flex flex-col justify-between border-r border-[#17242B]">
              <div className="space-y-1 font-mono text-xs">
                <div className="text-[10px] font-bold text-[#2EC4C9] tracking-wider uppercase px-2 mb-2">
                  NAVIGATION
                </div>

                {[
                  { id: "map", label: "WAREHOUSE MAP", icon: Compass },
                  { id: "video", label: "EXPLANATION VIDEO", icon: Play, isHighlight: true },
                  { id: "fleet", label: "FLEET", icon: Radio },
                  { id: "tasks", label: "TASKS", icon: Boxes },
                  { id: "path", label: "PATH PLANNING", icon: RefreshCw },
                  { id: "conflicts", label: "CONFLICTS", icon: ShieldAlert },
                  { id: "system", label: "SYSTEM", icon: Server },
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleTabClick(item.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all text-left cursor-pointer ${
                        isActive
                          ? "bg-[#168AAD] text-white font-bold shadow-xs"
                          : item.isHighlight
                          ? "text-[#2EC4C9] hover:bg-white/10 hover:text-white"
                          : "text-slate-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon
                          className={`w-3.5 h-3.5 shrink-0 ${
                            item.isHighlight && !isActive
                              ? "text-[#2EC4C9] animate-pulse"
                              : "text-[#2EC4C9]"
                          }`}
                        />
                        <span>{item.label}</span>
                      </div>
                      {item.isHighlight && (
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#2EC4C9]/20 text-[#2EC4C9] font-bold">
                          HD
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Edge AI Callout in Sidebar */}
              <div className="mt-6 p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
                <div className="flex items-center gap-1.5 text-[#2EC4C9] font-bold text-xs mb-1">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>EDGE NODE // 02</span>
                </div>
                <p className="text-[10px] text-slate-400 leading-snug">
                  Local arbitration active. Decisions made closer to the fleet.
                </p>
              </div>
            </aside>

            {/* ========================================================= */}
            {/* 11. MAIN WAREHOUSE MAP (Center Area)                      */}
            {/* ========================================================= */}
            <main className="lg:col-span-7 p-4 sm:p-6 bg-white flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E8EDF0]">
              {activeTab === "video" ? (
                <div className="flex-1 flex flex-col justify-between">
                  {/* Video View Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-[#E8EDF0] text-xs font-mono">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base sm:text-lg font-heading font-extrabold text-[#17242B]">
                          PROJECT EXPLANATION & DEMO VIDEO
                        </h3>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#168AAD]/15 text-[#168AAD] border border-[#168AAD]/30 font-bold uppercase">
                          OFFICIAL WALKTHROUGH
                        </span>
                      </div>
                      <span className="text-[11px] text-[#4B6370]">
                        SIH26123: Edge AI Based Distributed Fleet Coordination for Autonomous Mobile Robots
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href="https://youtu.be/lpk_R3frb90?si=V1cL-3aA0iu656at"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#E8EDF0] hover:bg-[#CBD5E1] text-[#17242B] font-mono text-[11px] font-semibold transition-all border border-[#CBD5E1]"
                      >
                        <span>Open on YouTube</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#168AAD]" />
                      </a>
                      <button
                        onClick={() => setActiveTab("map")}
                        className="px-3 py-1.5 rounded-lg bg-[#168AAD] hover:bg-[#2496D2] text-white font-mono text-[11px] font-semibold transition-all shadow-xs cursor-pointer"
                      >
                        Back to Live Map
                      </button>
                    </div>
                  </div>

                  {/* YouTube Player Frame */}
                  <div className="relative rounded-2xl overflow-hidden border border-[#0B2733] bg-[#0B2733] shadow-md aspect-video w-full flex items-center justify-center">
                    <iframe
                      src="https://www.youtube.com/embed/lpk_R3frb90?rel=0"
                      title="SIH26123 Explanation Video - Team SHAZAM"
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>

                  {/* Video Highlights / Key Chapters */}
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                    <div className="p-3 rounded-xl bg-[#F8FAFB] border border-[#E8EDF0]">
                      <span className="text-[10px] text-[#168AAD] font-bold block mb-1">
                        01 // THE CHALLENGE
                      </span>
                      <p className="text-[11px] text-[#4B6370] leading-snug">
                        Bottlenecks of centralized servers and latency vulnerabilities during peak warehouse hours.
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F8FAFB] border border-[#E8EDF0]">
                      <span className="text-[10px] text-[#168AAD] font-bold block mb-1">
                        02 // EDGE COORDINATION
                      </span>
                      <p className="text-[11px] text-[#4B6370] leading-snug">
                        Peer-to-peer Fast DDS heartbeat state exchange & D* Lite dynamic heuristic path rerouting.
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F8FAFB] border border-[#E8EDF0]">
                      <span className="text-[10px] text-[#168AAD] font-bold block mb-1">
                        03 // GAZEBO VALIDATION
                      </span>
                      <p className="text-[11px] text-[#4B6370] leading-snug">
                        Real-time 5 AMR collision avoidance, intersection negotiation, and zero-deadlock resolution.
                      </p>
                    </div>
                  </div>

                  {/* Edge AI Inline Callout Banner */}
                  <div className="mt-4 p-3.5 rounded-xl bg-[#E8EDF0]/50 border border-[#E8EDF0] flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-3 text-xs font-mono">
                      <div className="w-8 h-8 rounded-lg bg-[#168AAD] text-white flex items-center justify-center font-bold">
                        <Cpu className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-[#17242B] block">
                          DECISION CLOSER TO THE FLEET
                        </span>
                        <span className="text-[11px] text-[#4B6370]">
                          AMR-01 → Local Decision → Edge Node → Fleet Coordination
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveTab("map")}
                      className="text-[11px] font-mono px-3 py-1.5 rounded-lg bg-[#168AAD] hover:bg-[#2496D2] text-white font-semibold transition-all shadow-xs cursor-pointer shrink-0"
                    >
                      Return to Operational Map →
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {/* Map Header & Controls */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-[#E8EDF0] text-xs font-mono">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base sm:text-lg font-heading font-extrabold text-[#17242B]">
                          LIVE WAREHOUSE MAP
                        </h3>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E8EDF0] text-[#168AAD] font-bold uppercase">
                          SIMULATION
                        </span>
                      </div>
                      <span className="text-[11px] text-[#4B6370]">
                        Top-down operational twin with D* Lite active path lines
                      </span>
                    </div>

                    {/* Map Control Buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveTab("video")}
                        className="px-2.5 py-1 rounded text-[11px] font-mono border border-[#168AAD]/40 bg-[#168AAD]/10 hover:bg-[#168AAD]/20 text-[#168AAD] transition-all cursor-pointer flex items-center gap-1 font-semibold"
                        title="Watch YouTube Explanation Video"
                      >
                        <Play className="w-3 h-3 fill-current text-[#168AAD]" />
                        <span>VIDEO DEMO</span>
                      </button>

                      <button
                        onClick={() => setShowAltPaths(!showAltPaths)}
                        className={`px-2.5 py-1 rounded text-[11px] font-mono border transition-all cursor-pointer ${
                          showAltPaths
                            ? "bg-[#E8EDF0] text-[#168AAD] border-[#168AAD]/40 font-semibold"
                            : "bg-white text-slate-500 border-slate-200"
                        }`}
                        title="Toggle Alternative & Replanned Paths"
                      >
                        ALT PATHS
                      </button>

                  <button
                    onClick={() => setIsSimRunning(!isSimRunning)}
                    className="p-1.5 rounded-lg bg-[#E8EDF0] hover:bg-[#CBD5E1] text-[#17242B] border border-[#CBD5E1] transition-all cursor-pointer"
                    title={isSimRunning ? "Pause Simulation Stream" : "Resume Simulation"}
                  >
                    {isSimRunning ? (
                      <Pause className="w-3.5 h-3.5 text-[#168AAD]" />
                    ) : (
                      <Play className="w-3.5 h-3.5 text-[#3FA66B]" />
                    )}
                  </button>
                </div>
              </div>

              {/* Conflict Alert Banner above Map */}
              <div className="mb-3 px-3 py-2 rounded-lg bg-amber-50 border border-[#F2A93B]/40 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-[#17242B]">
                  <AlertTriangle className="w-4 h-4 text-[#F2A93B] shrink-0" />
                  <span className="font-bold text-[#F2A93B]">CONFLICT DETECTED:</span>
                  <span>Intersection IX-04 — AMR-02 assigned temporary wait state.</span>
                </div>
                <span className="text-[10px] text-[#168AAD] font-semibold hidden sm:inline">
                  LOCAL ARBITRATION ACTIVE
                </span>
              </div>

              {/* Digital Warehouse Floor Plan SVG Canvas */}
              <div className="relative aspect-[16/10] w-full rounded-xl bg-[#F8FAFB] border border-[#E8EDF0] p-3 overflow-hidden shadow-inner flex flex-col justify-between">
                {/* Subtle warehouse floor grid background */}
                <div className="absolute inset-0 warehouse-grid-light opacity-60 pointer-events-none" />

                <svg className="w-full h-full" viewBox="0 0 1000 620">
                  {/* Warehouse Outer Wall */}
                  <rect
                    x="15"
                    y="15"
                    width="970"
                    height="590"
                    fill="none"
                    stroke="#CBD5E1"
                    strokeWidth="2"
                    rx="6"
                  />

                  {/* Floor Safety Aisle Markings */}
                  <line x1="120" y1="310" x2="880" y2="310" stroke="#E2E8F0" strokeWidth="20" strokeLinecap="round" />
                  <line x1="260" y1="60" x2="260" y2="560" stroke="#E2E8F0" strokeWidth="18" strokeLinecap="round" />
                  <line x1="500" y1="60" x2="500" y2="560" stroke="#E2E8F0" strokeWidth="18" strokeLinecap="round" />
                  <line x1="740" y1="60" x2="740" y2="560" stroke="#E2E8F0" strokeWidth="18" strokeLinecap="round" />

                  {/* Warehouse Storage Racks (Clean Soft Gray Industrial Architecture) */}
                  {[
                    { x: 140, y: 70, w: 70, h: 200, label: "RACK A-14", aisle: "AISLE 01" },
                    { x: 140, y: 350, w: 70, h: 200, label: "RACK A-09", aisle: "AISLE 02" },
                    { x: 380, y: 70, w: 70, h: 200, label: "RACK B-07", aisle: "AISLE 03" },
                    { x: 380, y: 350, w: 70, h: 200, label: "RACK B-12", aisle: "AISLE 04" },
                    { x: 620, y: 70, w: 70, h: 200, label: "RACK C-21", aisle: "AISLE 05" },
                    { x: 620, y: 350, w: 70, h: 200, label: "RACK C-04", aisle: "AISLE 06" },
                  ].map((rk) => (
                    <g key={rk.label}>
                      <rect
                        x={rk.x}
                        y={rk.y}
                        width={rk.w}
                        height={rk.h}
                        fill="#FFFFFF"
                        stroke="#CBD5E1"
                        strokeWidth="1.5"
                        rx="4"
                      />
                      {/* Shelving slots */}
                      {[1, 2, 3, 4, 5].map((slot) => (
                        <line
                          key={slot}
                          x1={rk.x}
                          y1={rk.y + slot * 33}
                          x2={rk.x + rk.w}
                          y2={rk.y + slot * 33}
                          stroke="#E2E8F0"
                          strokeWidth="1"
                        />
                      ))}
                      <text
                        x={rk.x + rk.w / 2}
                        y={rk.y + rk.h / 2}
                        fill="#4B6370"
                        fontSize="10"
                        fontFamily="monospace"
                        fontWeight="bold"
                        textAnchor="middle"
                      >
                        {rk.label}
                      </text>
                    </g>
                  ))}

                  {/* Inbound / Outbound Loading Docks */}
                  <g>
                    <rect x="25" y="70" width="70" height="90" fill="#E8EDF0" stroke="#168AAD" strokeWidth="1.5" rx="4" />
                    <text x="60" y="115" fill="#168AAD" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                      DOCK-01
                    </text>
                    <text x="60" y="130" fill="#4B6370" fontSize="8" fontFamily="monospace" textAnchor="middle">
                      INBOUND
                    </text>

                    <rect x="25" y="460" width="70" height="90" fill="#E8EDF0" stroke="#168AAD" strokeWidth="1.5" rx="4" />
                    <text x="60" y="505" fill="#168AAD" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                      DOCK-02
                    </text>
                    <text x="60" y="520" fill="#4B6370" fontSize="8" fontFamily="monospace" textAnchor="middle">
                      INBOUND
                    </text>
                  </g>

                  {/* Outbound Sortation & Drop Zones */}
                  <g>
                    <rect x="905" y="70" width="70" height="90" fill="#E8EDF0" stroke="#3FA66B" strokeWidth="1.5" rx="4" />
                    <text x="940" y="115" fill="#3FA66B" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                      SORT-01
                    </text>
                    <text x="940" y="130" fill="#4B6370" fontSize="8" fontFamily="monospace" textAnchor="middle">
                      PICKUP
                    </text>

                    <rect x="905" y="460" width="70" height="90" fill="#E8EDF0" stroke="#3FA66B" strokeWidth="1.5" rx="4" />
                    <text x="940" y="505" fill="#3FA66B" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                      SORT-02
                    </text>
                    <text x="940" y="520" fill="#4B6370" fontSize="8" fontFamily="monospace" textAnchor="middle">
                      PICKUP
                    </text>
                  </g>

                  {/* Charging Stations */}
                  <g>
                    <rect x="470" y="30" width="60" height="40" fill="#FFFBEB" stroke="#F2A93B" strokeWidth="1.5" rx="4" />
                    <text x="500" y="52" fill="#B45309" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                      STATION-01
                    </text>
                    <text x="500" y="63" fill="#B45309" fontSize="7" fontFamily="monospace" textAnchor="middle">
                      [CHARGING]
                    </text>
                  </g>

                  {/* Intersections (IX-01 to IX-04) */}
                  {[
                    { x: 260, y: 310, label: "IX-01" },
                    { x: 500, y: 310, label: "IX-04" },
                    { x: 740, y: 310, label: "IX-03" },
                  ].map((ix) => (
                    <g key={ix.label}>
                      <circle
                        cx={ix.x}
                        cy={ix.y}
                        r="24"
                        fill={ix.label === "IX-04" ? "rgba(242, 169, 59, 0.15)" : "none"}
                        stroke={ix.label === "IX-04" ? "#F2A93B" : "#CBD5E1"}
                        strokeWidth="1.5"
                        strokeDasharray={ix.label === "IX-04" ? "4,4" : "2,2"}
                      />
                      <text
                        x={ix.x}
                        y={ix.y + 3}
                        fill={ix.label === "IX-04" ? "#B45309" : "#64748B"}
                        fontSize="9"
                        fontFamily="monospace"
                        fontWeight="bold"
                        textAnchor="middle"
                      >
                        {ix.label}
                      </text>
                    </g>
                  ))}

                  {/* Dynamic Obstacle (Muted Dark Gray) */}
                  <g>
                    <rect x="715" y="340" width="50" height="30" fill="#17242B" stroke="#64748B" strokeWidth="1" rx="3" />
                    <text x="740" y="358" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                      OBSTACLE
                    </text>
                  </g>

                  {/* PATH VISUALIZATIONS */}
                  {/* AMR-01: Solid Current Path (Cyan/Blue #2496D2) */}
                  <polyline
                    points="260,210 260,310 260,500"
                    fill="none"
                    stroke="#2496D2"
                    strokeWidth="3"
                  />
                  {/* Destination Marker */}
                  <circle cx="260" cy="500" r="4" fill="#2496D2" />

                  {/* AMR-02: Conflict & Waiting Path */}
                  <polyline
                    points="500,300 500,390 740,390"
                    fill="none"
                    stroke="#F2A93B"
                    strokeWidth="2.5"
                    strokeDasharray="4,4"
                  />

                  {/* Alternative Path (Subtle Dotted Line) */}
                  {showAltPaths && (
                    <polyline
                      points="500,290 380,290 380,480 740,480"
                      fill="none"
                      stroke="#168AAD"
                      strokeWidth="2"
                      strokeDasharray="3,5"
                      opacity="0.7"
                    />
                  )}

                  {/* AMR-03: Replanned Path (Brighter Highlighted Route via D* Lite) */}
                  {showAltPaths && (
                    <polyline
                      points="740,190 820,190 820,430 740,510"
                      fill="none"
                      stroke="#2EC4C9"
                      strokeWidth="3.5"
                    />
                  )}

                  {/* AMR-04: Charging Path */}
                  <polyline
                    points="500,140 500,70"
                    fill="none"
                    stroke="#CBD5E1"
                    strokeWidth="2"
                    strokeDasharray="2,2"
                  />

                  {/* AMR-05: Current Active Path */}
                  <polyline
                    points="650,470 500,470 380,470"
                    fill="none"
                    stroke="#2496D2"
                    strokeWidth="3"
                  />

                  {/* ROBOT VISUALIZATION: 5 AMRs as Clean Circular / Rounded Indicators */}
                  {FLEET_ROBOTS.map((bot) => {
                    const isSelected = selectedRobotId === bot.id;
                    const bx = bot.currentCoord.x * 10;
                    const by = bot.currentCoord.y * 6.2;

                    return (
                      <g
                        key={bot.id}
                        className="cursor-pointer"
                        onClick={() => setSelectedRobotId(bot.id)}
                      >
                        {/* Selected Soft Halo */}
                        {isSelected && (
                          <circle
                            cx={bx}
                            cy={by}
                            r="22"
                            fill="rgba(22, 138, 173, 0.15)"
                            stroke="#168AAD"
                            strokeWidth="1.5"
                          />
                        )}

                        {/* Robot Body */}
                        <circle
                          cx={bx}
                          cy={by}
                          r="14"
                          fill="#FFFFFF"
                          stroke={bot.statusColor}
                          strokeWidth="2.5"
                        />

                        {/* Heading Direction Arrow */}
                        <circle
                          cx={
                            bx + (bot.headingDeg === 90 ? 0 : bot.headingDeg === 180 ? -8 : 8)
                          }
                          cy={
                            by + (bot.headingDeg === 90 ? 8 : bot.headingDeg === 270 ? -8 : 0)
                          }
                          r="3"
                          fill={bot.statusColor}
                        />

                        {/* Robot ID Label */}
                        <text
                          x={bx}
                          y={by - 18}
                          fill="#17242B"
                          fontSize="9"
                          fontFamily="monospace"
                          fontWeight="bold"
                          textAnchor="middle"
                        >
                          {bot.name}
                        </text>

                        {/* Status Dot */}
                        <text
                          x={bx}
                          y={by + 24}
                          fill={bot.statusColor}
                          fontSize="7.5"
                          fontFamily="monospace"
                          fontWeight="bold"
                          textAnchor="middle"
                        >
                          ● {bot.status}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {/* Map Bottom Legend */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono text-[#4B6370] bg-white/90 px-3 py-1.5 rounded-lg border border-[#E8EDF0]">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-0.5 bg-[#2496D2]" />
                      <span>Current Path</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-0.5 border-t border-dashed border-[#168AAD]" />
                      <span>Alternative Path</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-0.5 bg-[#2EC4C9]" />
                      <span>D* Lite Replanned</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#F2A93B]" />
                      <span>Intersection Conflict</span>
                    </span>
                  </div>

                  <span className="text-[#168AAD] font-semibold">
                    INSPECTING: {selectedRobot.name}
                  </span>
                </div>
              </div>

              {/* Edge AI Inline Callout Banner */}
              <div className="mt-4 p-3.5 rounded-xl bg-[#E8EDF0]/50 border border-[#E8EDF0] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3 text-xs font-mono">
                  <div className="w-8 h-8 rounded-lg bg-[#168AAD] text-white flex items-center justify-center font-bold">
                    <Cpu className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-bold text-[#17242B] block">
                      DECISION CLOSER TO THE FLEET
                    </span>
                    <span className="text-[11px] text-[#4B6370]">
                      AMR-01 → Local Decision → Edge Node → Fleet Coordination
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2 py-1 rounded bg-white text-[#168AAD] border border-[#CBD5E1] font-semibold shrink-0">
                  FAST DDS PEER MESH
                </span>
              </div>
                </>
              )}
            </main>

            {/* ========================================================= */}
            {/* 12. ROBOT STATUS PANEL (Right-Side Panel)                 */}
            {/* ========================================================= */}
            <aside className="lg:col-span-3 p-4 sm:p-5 bg-[#F8FAFB] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#E8EDF0]">
                  <h3 className="font-heading font-extrabold text-[#17242B] text-sm">
                    FLEET STATUS
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#4B6370] border border-[#E8EDF0]">
                    5 AMRs SIMULATED
                  </span>
                </div>

                {/* 5 Compact Robot Cards */}
                <div className="space-y-2.5">
                  {FLEET_ROBOTS.map((bot) => {
                    const isSelected = selectedRobotId === bot.id;
                    return (
                      <div
                        key={bot.id}
                        onClick={() => setSelectedRobotId(bot.id)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? "bg-white border-[#168AAD] ring-1 ring-[#168AAD] shadow-sm"
                            : "bg-white/80 border-[#E8EDF0] hover:bg-white"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-mono font-bold text-xs text-[#17242B]">
                            {bot.name}
                          </span>
                          <span
                            className="text-[10px] font-mono font-bold flex items-center gap-1"
                            style={{ color: bot.statusColor }}
                          >
                            <span>●</span>
                            <span>{bot.status}</span>
                          </span>
                        </div>

                        <div className="text-xs text-[#4B6370] font-mono truncate mb-2">
                          Task: {bot.currentTask}
                        </div>

                        <div className="flex items-center justify-between text-[11px] font-mono text-[#4B6370] pt-1.5 border-t border-[#E8EDF0]">
                          <span className="flex items-center gap-1">
                            <Battery className="w-3.5 h-3.5 text-[#3FA66B]" />
                            <span>{bot.battery}%</span>
                          </span>
                          <span className="text-[10px] text-[#168AAD] font-semibold">
                            {bot.speed}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Edge Node Telemetry Mini-Card */}
              <div className="mt-4 pt-3 border-t border-[#E8EDF0] text-[11px] font-mono text-[#4B6370]">
                <div className="flex items-center justify-between mb-1">
                  <span>ACTIVE NODE:</span>
                  <span className="font-bold text-[#17242B]">{selectedRobot.edgeNodeId}</span>
                </div>
                <div className="flex items-center justify-between text-[10px]">
                  <span>RESERVATION STATE:</span>
                  <span
                    className={
                      selectedRobot.conflictState === "conflict_detected"
                        ? "text-[#F2A93B] font-bold"
                        : "text-[#3FA66B]"
                    }
                  >
                    {selectedRobot.conflictState === "conflict_detected"
                      ? "WAITING FOR IX-04"
                      : "ROUTE CLEAR"}
                  </span>
                </div>
              </div>
            </aside>
          </div>

          {/* ========================================================= */}
          {/* LOWER DASHBOARD SECTIONS (Tasks, Events, D* Lite, Arch)   */}
          {/* ========================================================= */}
          <div className="border-t border-[#E8EDF0] bg-white p-5 sm:p-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 13. TASK MANAGEMENT */}
            <div id="dashboard-tasks" className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#E8EDF0]">
                <span className="font-heading font-extrabold text-xs text-[#17242B] tracking-wider uppercase">
                  ACTIVE TASKS
                </span>
                <span className="text-[10px] font-mono text-[#4B6370]">
                  SIM QUEUE
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-xs">
                  <thead>
                    <tr className="text-[10px] text-[#4B6370] border-b border-[#E8EDF0]">
                      <th className="pb-1 font-semibold">ROBOT</th>
                      <th className="pb-1 font-semibold">TASK</th>
                      <th className="pb-1 font-semibold">FROM → TO</th>
                      <th className="pb-1 font-semibold">STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8EDF0] text-[11px]">
                    {ACTIVE_TASKS.map((t) => (
                      <tr key={t.id} className="hover:bg-[#F3F6F8]">
                        <td className="py-2 font-bold text-[#17242B]">{t.robot}</td>
                        <td className="py-2 text-[#4B6370]">{t.task}</td>
                        <td className="py-2 text-[#4B6370] text-[10px]">
                          {t.source} → {t.destination}
                        </td>
                        <td className="py-2">
                          <span
                            className="font-semibold text-[10px]"
                            style={{ color: t.statusColor }}
                          >
                            {t.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 14. CONFLICT MONITOR / COORDINATION EVENTS */}
            <div id="dashboard-conflicts" className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#E8EDF0]">
                <span className="font-heading font-extrabold text-xs text-[#17242B] tracking-wider uppercase">
                  COORDINATION EVENTS
                </span>
                <span className="text-[10px] font-mono text-[#F2A93B] font-bold">
                  ● LIVE STREAM
                </span>
              </div>

              <div className="space-y-2 font-mono text-xs max-h-48 overflow-y-auto">
                {COORDINATION_EVENTS.map((evt) => (
                  <div
                    key={evt.id}
                    className="p-2 rounded-lg bg-[#F8FAFB] border border-[#E8EDF0] text-[11px]"
                  >
                    <div className="flex items-center justify-between text-[10px] text-[#4B6370] mb-0.5">
                      <span className="font-bold text-[#17242B]">{evt.timestamp}</span>
                      <span className="text-[#168AAD]">{evt.robot}</span>
                    </div>
                    <p className="text-[#17242B] leading-tight text-[11px]">
                      {evt.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 15. DYNAMIC PATH PLANNING (D* Lite Visualizer) */}
            <div id="dashboard-path" className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#E8EDF0]">
                <span className="font-heading font-extrabold text-xs text-[#17242B] tracking-wider uppercase">
                  D* LITE — PATH PLANNER
                </span>
                <span className="text-[10px] font-mono text-[#168AAD] font-semibold">
                  INCREMENTAL
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#F8FAFB] border border-[#E8EDF0] space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#4B6370]">Original route:</span>
                  <span className="text-[#2496D2] font-semibold">Dock-1 → Corridor-2</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#F2A93B]">Obstacle detected:</span>
                  <span className="text-[#F2A93B] font-bold">Corridor-2 Blocked</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#3FA66B]">Replanned route:</span>
                  <span className="text-[#3FA66B] font-bold">Bypass South → Dest</span>
                </div>

                <div className="pt-2 border-t border-[#E8EDF0] text-[10px] text-[#4B6370]">
                  <span>Vertex costs updated locally without full graph restart.</span>
                </div>
              </div>
            </div>

            {/* 16. SYSTEM ARCHITECTURE PANEL */}
            <div id="dashboard-system" className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#E8EDF0]">
                <span className="font-heading font-extrabold text-xs text-[#17242B] tracking-wider uppercase">
                  SYSTEM ARCHITECTURE
                </span>
                <span className="text-[10px] font-mono text-[#168AAD]">
                  TOPOLOGY
                </span>
              </div>

              <div className="space-y-1.5 font-mono text-[10px] text-[#17242B]">
                <div className="p-1.5 rounded bg-[#E8EDF0] flex items-center justify-between font-semibold">
                  <span>AMRs (5 UNITS)</span>
                  <span className="text-[#168AAD]">SIMULATED</span>
                </div>
                <div className="text-center text-[#4B6370]">↓ ROS 2 / Fast DDS</div>
                <div className="p-1.5 rounded bg-[#E8EDF0] text-center font-semibold">
                  Distributed Coordination & D* Lite
                </div>
                <div className="text-center text-[#4B6370]">↓ Gazebo + React Dashboard</div>
                <div className="p-2 rounded bg-amber-50 border border-amber-300 text-amber-900 flex items-center justify-between font-bold">
                  <span>Raspberry Pi</span>
                  <span className="text-[9px] bg-amber-200/80 px-1.5 py-0.5 rounded">
                    TARGET EDGE HARDWARE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

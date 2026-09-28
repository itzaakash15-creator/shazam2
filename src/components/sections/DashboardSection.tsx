import React, { useState } from "react";
import { FLEET_ROBOTS, SIMULATION_EVENTS, RobotInfo } from "../../data/fleet";
import { Activity, Battery, Compass, Terminal, ShieldAlert, Cpu, RefreshCw, AlertTriangle, CheckCircle, Wifi } from "lucide-react";

export const DashboardSection: React.FC = () => {
  const [selectedRobotId, setSelectedRobotId] = useState<string>("amr-02");
  const [filterEvent, setFilterEvent] = useState<string>("all");

  const selectedRobot = FLEET_ROBOTS.find((r) => r.id === selectedRobotId) || FLEET_ROBOTS[0];

  const filteredEvents = SIMULATION_EVENTS.filter((evt) => {
    if (filterEvent === "all") return true;
    return evt.type === filterEvent;
  });

  return (
    <section id="dashboard" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#07101E] text-slate-200 relative overflow-hidden border-t border-cyan-500/20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>INDUSTRIAL ROBOTICS CONTROL INTERFACE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Live Warehouse Coordination Dashboard
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            A specialized fleet operations view displaying real-time coordinate positions, dynamic path reservations, battery states, and decentralized coordination events.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>GAZEBO SIMULATION STREAM • 5 AMRs CONCURRENT</span>
          </div>
        </div>

        {/* Industrial Dashboard Master Frame */}
        <div className="rounded-2xl border border-cyan-500/30 bg-[#0A1324] shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden">
          {/* Top Console Telemetry Header */}
          <div className="px-6 py-4 bg-[#08101E] border-b border-cyan-500/20 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="text-white font-bold flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span>FLEET SUPERVISOR CONSOLE</span>
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-cyan-300">ACTIVE FLEET: 5 ROBOTS</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">DDS DOMAIN: 0</span>
            </div>

            <div className="flex items-center gap-4 text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Wifi className="w-3.5 h-3.5" />
                <span>MESH SYNC: NOMINAL</span>
              </span>
              <span>SIM TIME: T+14:04.2</span>
            </div>
          </div>

          {/* 5 Robot Status Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-slate-800 bg-[#091528] border-b border-cyan-500/20">
            {FLEET_ROBOTS.map((bot) => {
              const isSelected = selectedRobotId === bot.id;
              return (
                <button
                  key={bot.id}
                  onClick={() => setSelectedRobotId(bot.id)}
                  className={`p-4 text-left transition-all cursor-pointer relative ${
                    isSelected ? "bg-cyan-950/40" : "hover:bg-slate-900/60"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-cyan-400" />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono font-bold text-white text-sm">
                      {bot.name}
                    </span>
                    <span
                      className={`text-[9px] font-mono px-2 py-0.5 rounded-full font-semibold ${
                        bot.status === "Yielding"
                          ? "bg-amber-950/80 text-amber-300 border border-amber-500/40"
                          : "bg-emerald-950/80 text-emerald-300 border border-emerald-500/40"
                      }`}
                    >
                      {bot.status}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 font-mono truncate mb-2">
                    {bot.currentTask}
                  </p>

                  <div className="space-y-1.5 font-mono text-[11px]">
                    <div className="flex items-center justify-between text-slate-400">
                      <span>BATTERY:</span>
                      <span className="text-emerald-400 font-bold">{bot.battery}%</span>
                    </div>
                    {/* Battery indicator bar */}
                    <div className="w-full h-1 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-emerald-400 rounded-full"
                        style={{ width: `${bot.battery}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-slate-400 text-[10px] pt-1">
                      <span>POS:</span>
                      <span className="text-cyan-300">{bot.currentCoord.x}m, {bot.currentCoord.y}m</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Main Dashboard Workspace: Map & Events Log */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            {/* Left 8 Cols: Large Interactive Warehouse Map */}
            <div className="lg:col-span-8 p-6 flex flex-col justify-between">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-cyan-400" />
                  <span className="text-white font-bold">WAREHOUSE TOP-DOWN TELEMETRY</span>
                  <span className="text-cyan-400">[GAZEBO 2D PROJECTION]</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span>Active AMR</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>Intersection Conflict</span>
                  </span>
                </div>
              </div>

              {/* Large Warehouse Schematic Map */}
              <div className="relative aspect-[16/10] w-full rounded-xl bg-[#060D1A] border border-cyan-500/25 p-4 overflow-hidden">
                <div className="absolute inset-0 warehouse-grid-dark opacity-40 pointer-events-none" />

                <svg className="w-full h-full" viewBox="0 0 1000 600">
                  {/* Warehouse Boundary Wall */}
                  <rect x="20" y="20" width="960" height="560" fill="none" stroke="rgba(6,182,212,0.25)" strokeWidth="2" />

                  {/* High-Bay Storage Racks */}
                  {[
                    { x: 140, y: 100, w: 80, h: 400, label: "BAY-A" },
                    { x: 320, y: 100, w: 80, h: 400, label: "BAY-B" },
                    { x: 500, y: 100, w: 80, h: 400, label: "BAY-C" },
                    { x: 680, y: 100, w: 80, h: 400, label: "BAY-D" },
                  ].map((bay) => (
                    <g key={bay.label}>
                      <rect x={bay.x} y={bay.y} width={bay.w} height={bay.h} fill="#0B1A2F" stroke="rgba(6,182,212,0.4)" strokeWidth="1" rx="4" />
                      <text x={bay.x + bay.w / 2} y={bay.y + bay.h / 2} fill="#64748B" fontSize="14" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                        {bay.label}
                      </text>
                    </g>
                  ))}

                  {/* Intersections (IX-01 to IX-04) */}
                  <rect x="420" y="260" width="60" height="80" fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3,3" />
                  <text x="450" y="305" fill="#F59E0B" fontSize="10" fontFamily="monospace" textAnchor="middle">IX-04</text>

                  {/* Inbound Docks */}
                  <rect x="30" y="80" width="70" height="90" fill="rgba(2, 132, 199, 0.2)" stroke="#38BDF8" strokeWidth="1" />
                  <text x="65" y="130" fill="#38BDF8" fontSize="10" fontFamily="monospace" textAnchor="middle">DOCK-1</text>

                  <rect x="30" y="430" width="70" height="90" fill="rgba(2, 132, 199, 0.2)" stroke="#38BDF8" strokeWidth="1" />
                  <text x="65" y="480" fill="#38BDF8" fontSize="10" fontFamily="monospace" textAnchor="middle">DOCK-2</text>

                  {/* Outbound Sortation Stations */}
                  <rect x="880" y="80" width="80" height="90" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" strokeWidth="1" />
                  <text x="920" y="130" fill="#10B981" fontSize="10" fontFamily="monospace" textAnchor="middle">SORT-1</text>

                  <rect x="880" y="430" width="80" height="90" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" strokeWidth="1" />
                  <text x="920" y="480" fill="#10B981" fontSize="10" fontFamily="monospace" textAnchor="middle">SORT-2</text>

                  {/* Active Trajectories */}
                  {FLEET_ROBOTS.map((bot) => {
                    const isFocus = bot.id === selectedRobotId;
                    return (
                      <g key={`path-${bot.id}`}>
                        <polyline
                          points={bot.pathWaypoints.map((p) => `${p.x * 9.6},${p.y * 5.6}`).join(" ")}
                          fill="none"
                          stroke={isFocus ? "#06B6D4" : "rgba(6,182,212,0.3)"}
                          strokeWidth={isFocus ? "3" : "1.5"}
                          strokeDasharray={isFocus ? "6,4" : "4,4"}
                        />
                      </g>
                    );
                  })}

                  {/* 5 Robots */}
                  {FLEET_ROBOTS.map((bot) => {
                    const isFocus = bot.id === selectedRobotId;
                    const bx = bot.currentCoord.x * 9.6;
                    const by = bot.currentCoord.y * 5.6;

                    return (
                      <g key={bot.id} className="cursor-pointer" onClick={() => setSelectedRobotId(bot.id)}>
                        {/* Lidar circle */}
                        <circle cx={bx} cy={by} r={isFocus ? "32" : "20"} fill={isFocus ? "rgba(6,182,212,0.2)" : "rgba(6,182,212,0.06)"} stroke="rgba(6,182,212,0.4)" strokeWidth="1" />
                        {/* Robot Body */}
                        <rect x={bx - 14} y={by - 10} width="28" height="20" rx="3" fill={isFocus ? "#0284C7" : "#0F1E36"} stroke={isFocus ? "#FFFFFF" : "#38BDF8"} strokeWidth={isFocus ? "2" : "1.2"} />
                        {/* Status Heading Dot */}
                        <circle cx={bx + 6} cy={by} r="3" fill={bot.status === "Yielding" ? "#F59E0B" : "#10B981"} />
                        {/* Label */}
                        <text x={bx} y={by - 16} fill={isFocus ? "#FFFFFF" : "#94A3B8"} fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                          {bot.name}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Focus Robot Footer Telemetry */}
              <div className="mt-4 p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-wrap items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-slate-400">INSPECTING:</span>{" "}
                  <strong className="text-white">{selectedRobot.name}</strong>{" "}
                  <span className="text-cyan-400">({selectedRobot.activeRoute})</span>
                </div>
                <div className="text-slate-400">
                  SPEED: <span className="text-white">{selectedRobot.speed}</span> | LOAD: <span className="text-white">{selectedRobot.payload}</span>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Simulation Events Log */}
            <div className="lg:col-span-4 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <h3 className="font-heading font-bold text-white text-base">
                      Simulation Events Log
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    REAL-TIME FEED
                  </span>
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-2 mb-4 text-[10px] font-mono">
                  {["all", "reroute", "conflict", "yield"].map((flt) => (
                    <button
                      key={flt}
                      onClick={() => setFilterEvent(flt)}
                      className={`px-2 py-1 rounded cursor-pointer transition-all uppercase ${
                        filterEvent === flt
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400"
                          : "bg-slate-900 text-slate-400 hover:text-white"
                      }`}
                    >
                      {flt}
                    </button>
                  ))}
                </div>

                {/* Events List */}
                <div className="space-y-3 font-mono text-xs">
                  {filteredEvents.map((evt) => (
                    <div
                      key={evt.id}
                      className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/30 transition-all"
                    >
                      <div className="flex items-center justify-between mb-1 text-[10px]">
                        <span className="text-cyan-400 font-bold">{evt.robotId}</span>
                        <span className="text-slate-500">{evt.time}</span>
                      </div>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        {evt.message}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Notice */}
              <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 italic">
                *All events are generated from the Gazebo simulation runtime. No fake benchmark statistics are published.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

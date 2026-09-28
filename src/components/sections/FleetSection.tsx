import React, { useState } from "react";
import { FLEET_ROBOTS, RobotInfo } from "../../data/fleet";
import { Battery, BatteryCharging, Compass, Navigation, Cpu, ArrowUpRight, Activity, ShieldCheck, AlertCircle } from "lucide-react";

export const FleetSection: React.FC = () => {
  const [selectedRobotId, setSelectedRobotId] = useState<string>("amr-01");
  const selectedRobot = FLEET_ROBOTS.find((r) => r.id === selectedRobotId) || FLEET_ROBOTS[0];

  return (
    <section id="fleet" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F3F6F8] relative overflow-hidden">
      {/* Background technical accents */}
      <div className="absolute top-1/4 left-1/3 w-[700px] h-[350px] bg-[#168AAD]/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8EDF0] border border-[#168AAD]/30 text-[#168AAD] text-xs font-mono uppercase tracking-wider mb-4 shadow-xs">
            <Cpu className="w-3.5 h-3.5" />
            <span>MULTI-AGENT SIMULATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#17242B] tracking-tight leading-tight">
            Five Robots. One Fleet.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#4B6370] font-light leading-relaxed">
            Five Autonomous Mobile Robots simultaneously navigating, sharing coordination states, and adapting their travel paths inside a simulated smart warehouse.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-[#4B6370] bg-white px-3 py-1 rounded-full border border-[#E8EDF0] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#3FA66B] animate-pulse" />
            <span>GAZEBO SIMULATED WORLD • NO PHYSICAL DEPLOYMENT CLAIMED</span>
          </div>
        </div>

        {/* 5-Robot Selection Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {FLEET_ROBOTS.map((robot) => {
            const isSelected = selectedRobotId === robot.id;
            return (
              <button
                key={robot.id}
                onClick={() => setSelectedRobotId(robot.id)}
                className={`shazam-card p-4 sm:p-5 flex flex-col justify-between text-left transition-all cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? "border-[#168AAD] ring-2 ring-[#168AAD]/40 shadow-md bg-white"
                    : "hover:border-[#CBD5E1] bg-white/90"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#17242B]">
                      {robot.name}
                    </span>
                    <span
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full font-bold flex items-center gap-1"
                      style={{
                        backgroundColor: `${robot.statusColor}15`,
                        color: robot.statusColor,
                        border: `1px solid ${robot.statusColor}40`,
                      }}
                    >
                      <span>●</span>
                      <span>{robot.status}</span>
                    </span>
                  </div>

                  <p className="text-xs text-[#4B6370] line-clamp-2 mb-3 font-mono">
                    Task: {robot.currentTask}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E8EDF0] flex items-center justify-between text-[11px] font-mono">
                  <span className="flex items-center gap-1 text-[#4B6370]">
                    <Battery className="w-3.5 h-3.5 text-[#3FA66B]" />
                    <span>{robot.battery}%</span>
                  </span>
                  <span className="text-[#168AAD] font-semibold">
                    {robot.speed.split(" ")[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Inspection Showcase for Selected AMR */}
        <div className="shazam-card p-6 sm:p-8 bg-white border border-[#E8EDF0] shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Telemetry Panel */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E8EDF0]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[#17242B]">
                      {selectedRobot.name}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-[#E8EDF0] text-[#168AAD] font-bold">
                      {selectedRobot.code}
                    </span>
                  </div>
                  <span className="text-xs text-[#4B6370] font-mono">
                    Edge Node: {selectedRobot.edgeNodeId}
                  </span>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-1.5 text-sm font-mono font-bold text-[#17242B] justify-end">
                    <BatteryCharging className="w-4 h-4 text-[#3FA66B]" />
                    <span>{selectedRobot.battery}% SOC</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#3FA66B] uppercase font-semibold">
                    STATUS: {selectedRobot.status}
                  </span>
                </div>
              </div>

              {/* Status and Active Task */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-xl bg-[#F8FAFB] border border-[#E8EDF0]">
                  <span className="text-[10px] font-mono text-[#4B6370] block mb-1">
                    CURRENT DISPATCH TASK
                  </span>
                  <span className="text-xs font-bold text-[#17242B] block">
                    {selectedRobot.currentTask}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#F8FAFB] border border-[#E8EDF0]">
                  <span className="text-[10px] font-mono text-[#4B6370] block mb-1">
                    COORDINATION STATUS
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: selectedRobot.statusColor }}
                    />
                    <span className="text-xs font-bold text-[#17242B]">
                      {selectedRobot.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Waypoints & Coordinates */}
              <div className="p-4 rounded-xl bg-[#E8EDF0]/50 border border-[#CBD5E1] space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between text-[#17242B]">
                  <span className="text-[#4B6370]">CURRENT POSITION:</span>
                  <span className="font-bold text-[#168AAD]">
                    X: {selectedRobot.currentCoord.x}m • Y: {selectedRobot.currentCoord.y}m (Heading: {selectedRobot.headingDeg}°)
                  </span>
                </div>
                <div className="flex items-center justify-between text-[#17242B]">
                  <span className="text-[#4B6370]">SOURCE → DEST:</span>
                  <span className="font-medium text-[#17242B]">
                    {selectedRobot.source} → {selectedRobot.destination}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[#17242B]">
                  <span className="text-[#4B6370]">SPEED:</span>
                  <span className="font-medium text-[#17242B]">{selectedRobot.speed}</span>
                </div>
                <div className="flex items-center justify-between text-[#17242B]">
                  <span className="text-[#4B6370]">EDGE LOGIC:</span>
                  <span className="font-medium text-[#168AAD]">Fast DDS QoS Profile: Fleet-Reliable</span>
                </div>
              </div>
            </div>

            {/* Right Map Visual Representation */}
            <div className="lg:col-span-6">
              <div className="relative aspect-video rounded-2xl bg-[#17242B] border border-[#168AAD]/30 overflow-hidden p-4 shadow-inner flex flex-col justify-between">
                <div className="absolute inset-0 warehouse-grid-subtle opacity-30 pointer-events-none" />

                {/* Top Legend */}
                <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-300">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0B2733]/90 border border-slate-700">
                    <Compass className="w-3 h-3 text-[#2EC4C9]" />
                    <span>GAZEBO 2D TOP-DOWN TELEMETRY</span>
                  </span>
                  <span className="text-[#2EC4C9] font-bold">
                    ACTIVE UNIT: {selectedRobot.name}
                  </span>
                </div>

                {/* Simulated Warehouse Grid with all 5 robots placed */}
                <div className="relative z-10 w-full h-44 flex items-center justify-center my-auto">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Warehouse Aisles / Shelves */}
                    <rect x="10" y="15" width="12" height="70" fill="rgba(14, 48, 62, 0.9)" stroke="rgba(46,196,201,0.3)" strokeWidth="0.8" />
                    <rect x="34" y="15" width="12" height="70" fill="rgba(14, 48, 62, 0.9)" stroke="rgba(46,196,201,0.3)" strokeWidth="0.8" />
                    <rect x="58" y="15" width="12" height="70" fill="rgba(14, 48, 62, 0.9)" stroke="rgba(46,196,201,0.3)" strokeWidth="0.8" />
                    <rect x="82" y="15" width="12" height="70" fill="rgba(14, 48, 62, 0.9)" stroke="rgba(46,196,201,0.3)" strokeWidth="0.8" />

                    {/* D* Lite Planned Trajectory Line for Selected Robot */}
                    <polyline
                      points={selectedRobot.pathWaypoints.map((p) => `${p.x},${p.y}`).join(" ")}
                      fill="none"
                      stroke="#2EC4C9"
                      strokeWidth="2"
                      strokeDasharray="2,2"
                    />

                    {/* All 5 Robots Placed on Map */}
                    {FLEET_ROBOTS.map((r) => {
                      const isTarget = r.id === selectedRobot.id;
                      return (
                        <g key={r.id}>
                          <circle
                            cx={r.currentCoord.x}
                            cy={r.currentCoord.y}
                            r={isTarget ? "4.5" : "3"}
                            fill={isTarget ? "#168AAD" : "#0B2733"}
                            stroke={isTarget ? "#FFFFFF" : r.statusColor}
                            strokeWidth={isTarget ? "1.5" : "1"}
                          />
                          <text
                            x={r.currentCoord.x}
                            y={r.currentCoord.y - 5}
                            fontSize="3.8"
                            fill={isTarget ? "#FFFFFF" : "#CBD5E1"}
                            textAnchor="middle"
                            fontFamily="monospace"
                            fontWeight={isTarget ? "bold" : "normal"}
                          >
                            {r.name}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* Bottom Bar */}
                <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-300 bg-[#0B2733]/90 px-3 py-1 rounded border border-slate-700">
                  <span>Fast DDS Topic: /fleet/amr_states</span>
                  <span className="text-[#3FA66B] font-bold">STATUS: OK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

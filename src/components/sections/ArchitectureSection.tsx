import React from "react";
import { Cpu, Layers, Server, Monitor, HardDrive, ArrowDown, ShieldCheck, Box } from "lucide-react";

export const ArchitectureSection: React.FC = () => {
  return (
    <section id="architecture" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#E8EDF0]/50 relative overflow-hidden border-t border-[#E8EDF0]">
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-[700px] h-[400px] bg-[#168AAD]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#168AAD]/30 text-[#168AAD] text-xs font-mono uppercase tracking-wider mb-4 shadow-xs">
            <Layers className="w-3.5 h-3.5" />
            <span>SYSTEM TOPOLOGY & LAYERING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#17242B] tracking-tight leading-tight">
            Edge Architecture
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#4B6370] font-light leading-relaxed">
            A modular multi-tiered framework separating physical robot perception, peer-to-peer edge coordination, high-fidelity simulation, and future target hardware.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#3FA66B] border border-emerald-300 font-semibold flex items-center gap-1.5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#3FA66B] animate-pulse" />
              <span>CURRENT STATUS: IMPLEMENTED IN SIMULATION</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-[#E8EDF0] text-[#168AAD] border border-[#168AAD]/30 font-semibold flex items-center gap-1.5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#168AAD]" />
              <span>RASPBERRY PI: TARGET HARDWARE DIRECTION</span>
            </span>
          </div>
        </div>

        {/* 4-Layer Architecture Diagram */}
        <div className="space-y-6 max-w-5xl mx-auto mb-12">
          {/* LAYER 1: ROBOT LAYER */}
          <div className="shazam-card p-6 sm:p-7 bg-white border border-[#E8EDF0] shadow-md relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-[#E8EDF0]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#E8EDF0] text-[#168AAD] flex items-center justify-center font-mono font-bold text-sm">
                  L1
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-[#17242B]">
                    ROBOT LAYER (AMR FLEET)
                  </h3>
                  <span className="text-xs text-[#4B6370]">Five simulated autonomous differential-drive warehouse units</span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#3FA66B] border border-emerald-200 font-bold uppercase self-start sm:self-auto">
                CURRENT: SIMULATION
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center font-mono text-xs">
              {["AMR-01", "AMR-02", "AMR-03", "AMR-04", "AMR-05"].map((bot) => (
                <div key={bot} className="p-3 rounded-xl bg-[#F8FAFB] border border-[#E8EDF0] hover:border-[#168AAD] transition-all">
                  <span className="font-bold text-[#17242B] block">{bot}</span>
                  <span className="text-[10px] text-[#4B6370]">Pose & Odometry</span>
                </div>
              ))}
            </div>
          </div>

          {/* Inter-layer Connector 1 */}
          <div className="flex justify-center text-slate-400">
            <div className="flex items-center gap-2 text-xs font-mono bg-white px-3 py-1 rounded-full border border-[#E8EDF0] shadow-2xs">
              <ArrowDown className="w-3.5 h-3.5 text-[#168AAD] animate-bounce" />
              <span>Sensory Stream & Twist Actuation</span>
            </div>
          </div>

          {/* LAYER 2: EDGE / COORDINATION LAYER */}
          <div className="shazam-card p-6 sm:p-7 bg-[#F3F6F8] border border-[#168AAD]/30 shadow-md relative overflow-hidden ring-1 ring-[#168AAD]/20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-[#CBD5E1]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#168AAD] text-white flex items-center justify-center font-mono font-bold text-sm shadow-xs">
                  L2
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-[#17242B]">
                    EDGE / COORDINATION LAYER
                  </h3>
                  <span className="text-xs text-[#168AAD]">Decentralized peer-to-peer intelligence running on each node</span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#E8EDF0] text-[#168AAD] border border-[#168AAD]/40 font-bold uppercase self-start sm:self-auto">
                CORE SYSTEM ENGINE
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-center font-mono text-xs">
              <div className="p-3 rounded-xl bg-white border border-[#E8EDF0] shadow-2xs">
                <span className="font-bold text-[#17242B] block mb-1">ROS 2</span>
                <span className="text-[10px] text-[#4B6370]">Node graph & lifecycle</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#E8EDF0] shadow-2xs">
                <span className="font-bold text-[#17242B] block mb-1">Fast DDS</span>
                <span className="text-[10px] text-[#4B6370]">Peer discovery & mesh</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#E8EDF0] shadow-2xs">
                <span className="font-bold text-[#17242B] block mb-1">Local Coordination</span>
                <span className="text-[10px] text-[#4B6370]">Right-of-way logic</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#E8EDF0] shadow-2xs">
                <span className="font-bold text-[#17242B] block mb-1">Task State</span>
                <span className="text-[10px] text-[#4B6370]">Urgency & reservation</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#E8EDF0] shadow-2xs">
                <span className="font-bold text-[#17242B] block mb-1">Path Planning</span>
                <span className="text-[10px] text-[#4B6370]">Waypoint tracking</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#E8EDF0] shadow-2xs">
                <span className="font-bold text-[#168AAD] block mb-1">D* Lite</span>
                <span className="text-[10px] text-[#4B6370]">Dynamic replanner</span>
              </div>
            </div>
          </div>

          {/* Inter-layer Connector 2 */}
          <div className="flex justify-center text-slate-400">
            <div className="flex items-center gap-2 text-xs font-mono bg-white px-3 py-1 rounded-full border border-[#E8EDF0] shadow-2xs">
              <ArrowDown className="w-3.5 h-3.5 text-[#168AAD] animate-bounce" />
              <span>Simulated Physics Feedback & Supervisor Telemetry</span>
            </div>
          </div>

          {/* LAYER 3: SIMULATION / VISUALIZATION */}
          <div className="shazam-card p-6 sm:p-7 bg-white border border-[#E8EDF0] shadow-md relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-[#E8EDF0]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#E8EDF0] text-[#168AAD] flex items-center justify-center font-mono font-bold text-sm">
                  L3
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-[#17242B]">
                    SIMULATION & VISUALIZATION LAYER
                  </h3>
                  <span className="text-xs text-[#4B6370]">Environment modeling and supervisor dashboard</span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#3FA66B] border border-emerald-200 font-bold uppercase self-start sm:self-auto">
                CURRENT DEMO
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#F8FAFB] border border-[#E8EDF0] flex items-start gap-3">
                <Box className="w-5 h-5 text-[#168AAD] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm font-bold text-[#17242B] block font-heading">
                    Gazebo Multi-Robot World
                  </strong>
                  <p className="text-xs text-[#4B6370] mt-1 leading-relaxed">
                    Provides 3D physics modeling, sensor synthesis (LIDAR, encoders), and realistic wheel slip / differential drive kinematics for the 5-AMR fleet.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFB] border border-[#E8EDF0] flex items-start gap-3">
                <Monitor className="w-5 h-5 text-[#168AAD] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm font-bold text-[#17242B] block font-heading">
                    React Warehouse Dashboard
                  </strong>
                  <p className="text-xs text-[#4B6370] mt-1 leading-relaxed">
                    Provides operators with live 2D top-down grid tracking, battery levels, active task assignments, and simulation event log auditing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Inter-layer Connector 3 */}
          <div className="flex justify-center text-slate-400">
            <div className="flex items-center gap-2 text-xs font-mono bg-white px-3 py-1 rounded-full border border-dashed border-amber-300 text-amber-900 shadow-2xs">
              <ArrowDown className="w-3.5 h-3.5 text-[#F2A93B]" />
              <span>Hardware Migration Direction (Target Roadmap)</span>
            </div>
          </div>

          {/* LAYER 4: EDGE HARDWARE DIRECTION */}
          <div className="shazam-card p-6 sm:p-7 bg-[#17242B] text-white border border-[#168AAD]/30 shadow-lg relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-700">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#0B2733] border border-[#2EC4C9]/40 text-[#2EC4C9] flex items-center justify-center font-mono font-bold text-sm">
                  L4
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-white">
                    EDGE HARDWARE DIRECTION: RASPBERRY PI
                  </h3>
                  <span className="text-xs text-slate-300">Target on-robot single board compute architecture</span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-[#0B2733] border border-[#F2A93B]/60 text-[#F2A93B] font-bold uppercase self-start sm:self-auto">
                TARGET DIRECTION // NOT PHYSICAL DEPLOYMENT YET
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-300">
              <div className="p-3.5 rounded-xl bg-white/5 border border-slate-700">
                <span className="text-[#2EC4C9] font-bold block mb-1">ARM Compute Host</span>
                <span>Planned on-robot SBC platform running Linux & ROS 2 Humble node daemon.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-slate-700">
                <span className="text-[#2EC4C9] font-bold block mb-1">Fast DDS Peer Radio</span>
                <span>Targeted local wireless ad-hoc mesh communication between onboard Pi nodes.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-slate-700">
                <span className="text-[#2EC4C9] font-bold block mb-1">Local D* Lite Execution</span>
                <span>Lightweight C++/Python implementation suited for embedded edge memory envelopes.</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 italic">
              *Clarification: Current project demonstration is validated inside Gazebo simulation. Raspberry Pi represents our physical deployment target architecture.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

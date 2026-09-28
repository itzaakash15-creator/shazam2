import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, RefreshCw, Cpu, Layers } from "lucide-react";

interface SimRobot {
  id: string;
  name: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  color: string;
  angle: number;
  waypoints: { x: number; y: number }[];
  currentWp: number;
  speed: number;
  battery: number;
  status: string;
}

export const HeroWarehouseCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRunning, setIsRunning] = useState(true);
  const [showMesh, setShowMesh] = useState(true);
  const [selectedRobot, setSelectedRobot] = useState<string | null>("AMR-01");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = 1200);
    let height = (canvas.height = 640);

    // Initial 5 AMRs with predefined cyclical warehouse paths
    const robots: SimRobot[] = [
      {
        id: "amr-01",
        name: "AMR-01",
        x: 180,
        y: 140,
        targetX: 180,
        targetY: 500,
        color: "#06B6D4",
        angle: Math.PI / 2,
        waypoints: [
          { x: 180, y: 140 },
          { x: 180, y: 500 },
          { x: 380, y: 500 },
          { x: 380, y: 140 },
        ],
        currentWp: 1,
        speed: 1.2,
        battery: 94,
        status: "In Transit",
      },
      {
        id: "amr-02",
        name: "AMR-02",
        x: 480,
        y: 480,
        targetX: 780,
        targetY: 480,
        color: "#38BDF8",
        angle: 0,
        waypoints: [
          { x: 480, y: 480 },
          { x: 780, y: 480 },
          { x: 780, y: 220 },
          { x: 480, y: 220 },
        ],
        currentWp: 1,
        speed: 1.0,
        battery: 88,
        status: "Yielding Check",
      },
      {
        id: "amr-03",
        name: "AMR-03",
        x: 880,
        y: 160,
        targetX: 880,
        targetY: 520,
        color: "#22D3EE",
        angle: Math.PI / 2,
        waypoints: [
          { x: 880, y: 160 },
          { x: 880, y: 520 },
          { x: 1040, y: 520 },
          { x: 1040, y: 160 },
        ],
        currentWp: 1,
        speed: 1.3,
        battery: 76,
        status: "Navigating",
      },
      {
        id: "amr-04",
        name: "AMR-04",
        x: 580,
        y: 150,
        targetX: 580,
        targetY: 420,
        color: "#67E8F9",
        angle: Math.PI / 2,
        waypoints: [
          { x: 580, y: 150 },
          { x: 580, y: 420 },
          { x: 700, y: 420 },
          { x: 700, y: 150 },
        ],
        currentWp: 1,
        speed: 0.9,
        battery: 82,
        status: "Priority Cross",
      },
      {
        id: "amr-05",
        name: "AMR-05",
        x: 320,
        y: 320,
        targetX: 950,
        targetY: 320,
        color: "#0284C7",
        angle: 0,
        waypoints: [
          { x: 320, y: 320 },
          { x: 950, y: 320 },
          { x: 950, y: 120 },
          { x: 320, y: 120 },
        ],
        currentWp: 1,
        speed: 1.1,
        battery: 91,
        status: "Approaching",
      },
    ];

    // Warehouse racks layout
    const racks = [
      { x: 80, y: 180, w: 60, h: 280, label: "RACK-A" },
      { x: 240, y: 180, w: 80, h: 280, label: "RACK-B" },
      { x: 440, y: 180, w: 80, h: 220, label: "RACK-C" },
      { x: 640, y: 180, w: 80, h: 100, label: "RACK-D1" },
      { x: 640, y: 360, w: 80, h: 100, label: "RACK-D2" },
      { x: 800, y: 180, w: 50, h: 280, label: "RACK-E" },
      { x: 940, y: 180, w: 60, h: 100, label: "RACK-F1" },
      { x: 940, y: 360, w: 60, h: 100, label: "RACK-F2" },
    ];

    let pulsePhase = 0;

    const render = () => {
      pulsePhase += 0.03;
      ctx.clearRect(0, 0, width, height);

      // 1. Dark Technical Slate Background
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, "#081325");
      bgGrad.addColorStop(0.5, "#0A172F");
      bgGrad.addColorStop(1, "#07101E");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Warehouse Floor Grid Lines
      ctx.strokeStyle = "rgba(6, 182, 212, 0.05)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 3. Navigation Corridors & Road Markings
      ctx.strokeStyle = "rgba(14, 165, 233, 0.15)";
      ctx.setLineDash([8, 8]);
      // Horizontal main highway
      ctx.beginPath();
      ctx.moveTo(60, 320);
      ctx.lineTo(width - 60, 320);
      ctx.stroke();
      // Vertical transit corridors
      [180, 380, 580, 780, 880].forEach((vx) => {
        ctx.beginPath();
        ctx.moveTo(vx, 100);
        ctx.lineTo(vx, 540);
        ctx.stroke();
      });
      ctx.setLineDash([]);

      // 4. Warehouse Storage Racks
      racks.forEach((rack) => {
        // Rack Shadow
        ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
        ctx.fillRect(rack.x + 3, rack.y + 4, rack.w, rack.h);

        // Rack Body
        const rkGrad = ctx.createLinearGradient(rack.x, rack.y, rack.x + rack.w, rack.y + rack.h);
        rkGrad.addColorStop(0, "#0F213A");
        rkGrad.addColorStop(1, "#091526");
        ctx.fillStyle = rkGrad;
        ctx.fillRect(rack.x, rack.y, rack.w, rack.h);

        // Rack Borders
        ctx.strokeStyle = "rgba(6, 182, 212, 0.25)";
        ctx.lineWidth = 1;
        ctx.strokeRect(rack.x, rack.y, rack.w, rack.h);

        // Shelving slots
        ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
        const slots = Math.floor(rack.h / 30);
        for (let i = 1; i < slots; i++) {
          ctx.beginPath();
          ctx.moveTo(rack.x, rack.y + i * 30);
          ctx.lineTo(rack.x + rack.w, rack.y + i * 30);
          ctx.stroke();
        }

        // Label
        ctx.fillStyle = "rgba(148, 163, 184, 0.45)";
        ctx.font = "9px 'JetBrains Mono', monospace";
        ctx.textAlign = "center";
        ctx.fillText(rack.label, rack.x + rack.w / 2, rack.y + 14);
      });

      // 5. Inbound / Outbound Docks & Zones
      const zones = [
        { x: 50, y: 50, w: 120, h: 45, label: "INBOUND DOCK 01", type: "dock" },
        { x: 50, y: 540, w: 120, h: 45, label: "INBOUND DOCK 02", type: "dock" },
        { x: 1020, y: 50, w: 130, h: 45, label: "OUTBOUND SORT 01", type: "outbound" },
        { x: 1020, y: 540, w: 130, h: 45, label: "OUTBOUND SORT 02", type: "outbound" },
      ];

      zones.forEach((z) => {
        ctx.fillStyle = "rgba(2, 132, 199, 0.08)";
        ctx.fillRect(z.x, z.y, z.w, z.h);
        ctx.strokeStyle = "rgba(6, 182, 212, 0.3)";
        ctx.strokeRect(z.x, z.y, z.w, z.h);
        ctx.fillStyle = "#38BDF8";
        ctx.font = "8px 'JetBrains Mono', monospace";
        ctx.textAlign = "center";
        ctx.fillText(z.label, z.x + z.w / 2, z.y + z.h / 2 + 3);
      });

      // 6. Planned Trajectory Paths for All 5 AMRs
      robots.forEach((bot) => {
        ctx.strokeStyle = "rgba(6, 182, 212, 0.35)";
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        bot.waypoints.forEach((wp, idx) => {
          if (idx === 0) ctx.moveTo(wp.x, wp.y);
          else ctx.lineTo(wp.x, wp.y);
        });
        ctx.closePath();
        ctx.stroke();
        ctx.setLineDash([]);

        // Waypoint dots
        bot.waypoints.forEach((wp) => {
          ctx.beginPath();
          ctx.arc(wp.x, wp.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(6, 182, 212, 0.6)";
          ctx.fill();
        });
      });

      // 7. Decentralized Fast DDS Peer-to-Peer Mesh Links between adjacent AMRs
      if (showMesh) {
        for (let i = 0; i < robots.length; i++) {
          for (let j = i + 1; j < robots.length; j++) {
            const dx = robots[i].x - robots[j].x;
            const dy = robots[i].y - robots[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Connect if in communication range (< 420 px)
            if (dist < 420) {
              const alpha = Math.max(0, 1 - dist / 420) * 0.45;
              ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
              ctx.lineWidth = 1;
              ctx.setLineDash([3, 5]);
              ctx.beginPath();
              ctx.moveTo(robots[i].x, robots[i].y);
              ctx.lineTo(robots[j].x, robots[j].y);
              ctx.stroke();
              ctx.setLineDash([]);

              // Data packet traveling along mesh link
              const packetOffset = (pulsePhase * 80) % dist;
              const px = robots[i].x + (-dx / dist) * packetOffset;
              const py = robots[i].y + (-dy / dist) * packetOffset;
              ctx.beginPath();
              ctx.arc(px, py, 1.8, 0, Math.PI * 2);
              ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
              ctx.fill();
            }
          }
        }
      }

      // 8. Update and Draw 5 AMRs
      robots.forEach((bot) => {
        if (isRunning) {
          const target = bot.waypoints[bot.currentWp];
          const tdx = target.x - bot.x;
          const tdy = target.y - bot.y;
          const tDist = Math.sqrt(tdx * tdx + tdy * tdy);

          if (tDist < bot.speed * 2) {
            bot.currentWp = (bot.currentWp + 1) % bot.waypoints.length;
          } else {
            bot.angle = Math.atan2(tdy, tdx);
            bot.x += Math.cos(bot.angle) * bot.speed;
            bot.y += Math.sin(bot.angle) * bot.speed;
          }
        }

        // Active selection halo
        const isSelected = selectedRobot === bot.name;

        // LIDAR Sensor Arc Pulse
        const lidarRadius = 45 + Math.sin(pulsePhase * 3) * 6;
        const gradLidar = ctx.createRadialGradient(bot.x, bot.y, 5, bot.x, bot.y, lidarRadius);
        gradLidar.addColorStop(0, "rgba(6, 182, 212, 0.25)");
        gradLidar.addColorStop(1, "rgba(6, 182, 212, 0)");
        ctx.fillStyle = gradLidar;
        ctx.beginPath();
        ctx.arc(bot.x, bot.y, lidarRadius, 0, Math.PI * 2);
        ctx.fill();

        // LIDAR Perimeter
        ctx.strokeStyle = "rgba(6, 182, 212, 0.25)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(bot.x, bot.y, lidarRadius, 0, Math.PI * 2);
        ctx.stroke();

        // AMR Chassis (Save context for rotation)
        ctx.save();
        ctx.translate(bot.x, bot.y);
        ctx.rotate(bot.angle);

        // Drop shadow
        ctx.shadowColor = "rgba(0, 0, 0, 0.6)";
        ctx.shadowBlur = 10;
        ctx.shadowOffsetY = 4;

        // Robot Chassis Rectangle
        ctx.fillStyle = isSelected ? "#0284C7" : "#0F172A";
        ctx.beginPath();
        ctx.roundRect(-16, -12, 32, 24, 4);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Border
        ctx.strokeStyle = isSelected ? "#38BDF8" : "rgba(6, 182, 212, 0.8)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Drive Wheels (Top & Bottom tracks)
        ctx.fillStyle = "#334155";
        ctx.fillRect(-12, -15, 24, 3);
        ctx.fillRect(-12, 12, 24, 3);

        // LIDAR Turret / Top Sensor
        ctx.beginPath();
        ctx.arc(0, 0, 5, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? "#22D3EE" : "#06B6D4";
        ctx.fill();

        // Heading Direction Light
        ctx.fillStyle = "#38BDF8";
        ctx.beginPath();
        ctx.arc(10, 0, 2.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        // Robot ID Label and Status Pill
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 10px 'JetBrains Mono', monospace";
        ctx.textAlign = "center";
        ctx.fillText(bot.name, bot.x, bot.y - 20);

        ctx.fillStyle = "#38BDF8";
        ctx.font = "8px 'JetBrains Mono', monospace";
        ctx.fillText(`BAT: ${bot.battery}%`, bot.x, bot.y + 26);
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [isRunning, showMesh, selectedRobot]);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-[#06B6D4]/30 bg-[#07101E] shadow-[0_20px_70px_-15px_rgba(2,132,199,0.35)] group">
      {/* Canvas Element */}
      <div className="relative aspect-[16/9] w-full overflow-hidden flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="w-full h-full block cursor-crosshair select-none"
        />

        {/* Top Floating Telemetry Overlay */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/80 border border-cyan-500/30 text-[10px] sm:text-xs font-mono text-cyan-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>GAZEBO SIMULATOR • 5 AMRs SYNCHRONIZED</span>
          </div>
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-sky-500/25 text-[10px] font-mono text-slate-300 backdrop-blur-md">
            <Cpu className="w-3 h-3 text-cyan-400" />
            <span>Fast DDS Peer Mesh: ACTIVE</span>
          </div>
        </div>

        {/* Top Right Controls */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-2">
          <button
            onClick={() => setShowMesh(!showMesh)}
            className={`px-2.5 py-1 rounded-lg text-[10px] font-mono flex items-center gap-1.5 border transition-all backdrop-blur-md cursor-pointer ${
              showMesh
                ? "bg-cyan-950/80 border-cyan-400/50 text-cyan-300"
                : "bg-slate-900/70 border-slate-700 text-slate-400"
            }`}
            title="Toggle Fast DDS Peer Communication Links"
          >
            <Layers className="w-3 h-3" />
            <span>PEER MESH</span>
          </button>

          <button
            onClick={() => setIsRunning(!isRunning)}
            className="p-1.5 sm:p-2 rounded-lg bg-slate-950/80 border border-cyan-500/30 text-cyan-300 hover:text-white backdrop-blur-md transition-all cursor-pointer"
            title={isRunning ? "Pause Simulation" : "Resume Simulation"}
            aria-label="Toggle Simulation Playback"
          >
            {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Bottom Legend Overlay */}
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] font-mono text-slate-300 bg-slate-950/85 px-3 py-1.5 rounded-xl border border-cyan-500/20 backdrop-blur-md">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-sm bg-cyan-400" />
            <span>AMR Unit</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full border border-cyan-400" />
            <span>LIDAR Radius</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 border-t border-dashed border-cyan-400" />
            <span>Peer DDS Link</span>
          </span>
          <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
            <span>D* Lite Path</span>
          </span>
        </div>

        {/* Bottom Gradient for smooth transition */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0A0F1D] to-transparent pointer-events-none" />
      </div>

      {/* Interactive Robot Quick Selector Strip */}
      <div className="px-4 py-2.5 bg-[#0A0F1D] border-t border-cyan-500/20 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
        <div className="flex items-center gap-2 text-slate-400">
          <span>FLEET UNITS:</span>
          {["AMR-01", "AMR-02", "AMR-03", "AMR-04", "AMR-05"].map((bot) => (
            <button
              key={bot}
              onClick={() => setSelectedRobot(bot)}
              className={`px-2 py-0.5 rounded text-[10px] transition-all cursor-pointer ${
                selectedRobot === bot
                  ? "bg-cyan-500/25 border border-cyan-400 text-cyan-200 font-bold"
                  : "bg-slate-800/60 text-slate-400 hover:text-slate-200"
              }`}
            >
              {bot}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-cyan-400/80">
          <RefreshCw className={`w-3 h-3 ${isRunning ? "animate-spin" : ""}`} />
          <span>ROS 2 Humble • Simulation Runtime</span>
        </div>
      </div>
    </div>
  );
};

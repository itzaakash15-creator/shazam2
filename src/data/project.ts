/**
 * Team SHAZAM — SIH26123 Project Data Configuration
 * 
 * Centralized data repository for SIH26123.
 * All project parameters, titles, URLs, and labels are maintained here.
 */

export interface ProjectResource {
  label: string;
  url: string;
  isAvailable: boolean;
  type?: "github" | "docs" | "video" | "simulation";
}

export interface ProjectData {
  problemStatement: string;
  projectTitle: string;
  shortTitle: string;
  teamName: string;
  eventName: string;
  eventYear: string;
  statusBadge: string;
  statusDescription: string;
  shortDescription: string;
  fullDescription: string;
  youtubeVideoUrl: string;
  heroTags: string[];
  contact: {
    email: string;
    teamLead: string;
  };
  resources: ProjectResource[];
}

export const PROJECT_DATA: ProjectData = {
  problemStatement: "SIH26123",
  projectTitle:
    "Edge AI Based Distributed Fleet Coordination for Autonomous Mobile Robots for Smart Warehouses",
  shortTitle: "Edge-AI Distributed Fleet Coordination for Smart Warehouses",
  teamName: "TEAM SHAZAM",
  eventName: "SMART INDIA HACKATHON • SIH26123",
  eventYear: "2026",
  statusBadge: "CURRENT STATUS: SIMULATION",
  statusDescription:
    "System architecture, multi-robot coordination, and D* Lite dynamic replanning are designed and demonstrated in simulation with 5 AMRs. Target deployment direction uses Raspberry Pi as edge-computing hardware.",
  shortDescription:
    "Enabling multiple autonomous robots to coordinate, adapt and navigate intelligently at the edge.",
  fullDescription:
    "A distributed Edge-AI coordination framework where Autonomous Mobile Robots (AMRs) share local state and make decentralized navigation decisions inside smart warehouses—eliminating single-point centralized bottlenecks and dynamically replanning routes using D* Lite.",
  youtubeVideoUrl: "https://youtu.be/lpk_R3frb90?si=V1cL-3aA0iu656at",
  heroTags: [
    "5 AMRs FLEET SIMULATION",
    "DECENTRALIZED EDGE COORDINATION",
    "D* LITE DYNAMIC REPLANNING",
  ],
  contact: {
    email: "teamshazam.sih@gmail.com",
    teamLead: "Akshayagomathy S",
  },
  resources: [
    {
      label: "GitHub Repository",
      url: "https://github.com/itzaakash15-creator/shazam2",
      isAvailable: true,
      type: "github",
    },
    {
      label: "Explanation Video",
      url: "https://youtu.be/lpk_R3frb90?si=V1cL-3aA0iu656at",
      isAvailable: true,
      type: "simulation",
    },
    {
      label: "Simulation Dashboard",
      url: "#dashboard",
      isAvailable: true,
      type: "simulation",
    },
    {
      label: "System Architecture",
      url: "#architecture",
      isAvailable: true,
      type: "docs",
    },
  ],
};

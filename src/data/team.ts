/**
 * Team SHAZAM — Team Members & Mentors Configuration
 * 
 * Reused from Team SHAZAM core roster:
 * 6 Team Members & 3 Mentors.
 */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  initials: string;
  code: string;
  specialization: string;
}

export interface Mentor {
  id: string;
  name: string;
}

/**
 * 6 Team SHAZAM Core Members
 */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "member-01",
    name: "Akshayagomathy S",
    role: "Team Lead & System Design",
    image: "/images/team/member-1.jpg",
    initials: "AS",
    code: "MEMBER // 01",
    specialization: "Team Lead & System Design",
  },
  {
    id: "member-02",
    name: "Bakirathan S",
    role: "Signal Processing & DSP",
    image: "/images/team/member-2.jpg",
    initials: "BS",
    code: "MEMBER // 02",
    specialization: "Signal Processing & DSP",
  },
  {
    id: "member-03",
    name: "Mohammed Ameen H",
    role: "Embedded Systems & STM32",
    image: "/images/team/member-3.jpg",
    initials: "MA",
    code: "MEMBER // 03",
    specialization: "Embedded Systems & STM32",
  },
  {
    id: "member-04",
    name: "Aakash K",
    role: "Hardware & Circuit Design",
    image: "/images/team/member-4.jpg",
    initials: "AK",
    code: "MEMBER // 04",
    specialization: "Hardware & Circuit Design",
  },
  {
    id: "member-05",
    name: "Shree Varshan P",
    role: "Sensor & Environmental Analysis",
    image: "/images/team/member-5.jpg",
    initials: "SV",
    code: "MEMBER // 05",
    specialization: "Sensor & Environmental Analysis",
  },
  {
    id: "member-06",
    name: "Rishikesh Potty R",
    role: "Testing & System Integration",
    image: "/images/team/member-6.jpg",
    initials: "RP",
    code: "MEMBER // 06",
    specialization: "Testing & System Integration",
  },
];

/**
 * 3 Mentors (Exact names as specified)
 */
export const MENTORS: Mentor[] = [
  {
    id: "mentor-01",
    name: "Muthusamy K",
  },
  {
    id: "mentor-02",
    name: "Gajendran Parthasarathi Er",
  },
  {
    id: "mentor-03",
    name: "Mukuntharaj C",
  },
];

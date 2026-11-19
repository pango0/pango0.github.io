export interface Experience {
  role: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    role: 'AI Application Researcher — COOL AI Companion',
    org: 'National Taiwan University, Mentor: Prof. Hsin-Mu Tsai',
    location: 'Taipei, Taiwan',
    period: 'Jul 2026 – Present',
    bullets: [
      "Sole desktop-client engineer of the COOL AI Companion, an AI lecture companion for NTU COOL officially released by NTU's Digital Learning Center to a 35,000-student campus.",
    ],
  },
  {
    role: 'Teaching Assistant — CSIE5213 Parallel Programming',
    org: 'Dept. of CSIE, NTU',
    location: 'Taipei, Taiwan',
    period: 'Sep 2025 – Dec 2025',
    bullets: [
      'Designed and graded a parallel programming assignment and instructed students on the use of high-performance computing clusters.',
    ],
  },
  {
    role: 'Cloud Application Researcher',
    org: 'Quanta Cloud Technology (Fortune Global 500)',
    location: 'Taoyuan, Taiwan',
    period: 'Jul 2025 – Aug 2025',
    bullets: [
      'Developed and simulated vision-language-action (VLA) models like GR00T for humanoid robot control in cloud-based simulation environments (Isaac Sim).',
    ],
  },
  {
    role: 'Undergraduate Researcher',
    org: 'ElsaLab, NTU CSIE — Advisor: Prof. Chun-Yi Lee',
    location: 'Taipei, Taiwan',
    period: 'Sep 2024 – Present',
    bullets: [
      'Conduct systems and ML research spanning LLM inference acceleration, distributed training, and GPU/HPC performance optimization.',
    ],
  },
  {
    role: 'Research Assistant',
    org: 'Academia Sinica, Mentor: Prof. Yuh-Jye Lee',
    location: 'Taipei, Taiwan',
    period: 'Jul 2024 – Aug 2024',
    bullets: [
      'Built persona agentic LLM systems with autonomous reasoning, planning, and external tool interaction using LangChain.',
    ],
  },
  {
    role: 'Open-Source Contributor — Inference Working Group',
    org: 'MLCommons',
    location: 'Remote',
    period: 'Ongoing',
    bullets: [
      'Implemented multi-node inference support for the MLCommons MLPerf Inference benchmark.',
      'Contributed code used by hardware vendors and AI labs to measure real-world inference performance.',
    ],
  },
];

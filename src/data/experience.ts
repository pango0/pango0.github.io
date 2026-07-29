export interface Experience {
  role: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    role: 'Cloud Application Researcher',
    org: 'Quanta Cloud Technology (Fortune Global 500)',
    location: 'Taoyuan, Taiwan',
    period: 'Jul 2024 – Aug 2024',
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
    period: 'Jul 2023 – Aug 2023',
    bullets: [
      'Built persona agentic LLM systems with autonomous reasoning, planning, and external tool interaction using LangChain.',
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

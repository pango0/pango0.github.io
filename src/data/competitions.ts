export interface Competition {
  event: string;
  location: string;
  result: string;
  period: string;
  /** Extra line of context shown in the compact list (team count, outcome). */
  context?: string;
  /** Featured entries render as the large highlight card. */
  featured?: boolean;
  /** Headline numbers shown on the featured card. */
  highlights?: { value: string; label: string }[];
  bullets: string[];
}

export const competitions: Competition[] = [
  {
    event: 'SC25 Student Cluster Competition',
    location: 'St. Louis, USA',
    result: 'Overall Winner',
    period: 'Nov 2025',
    featured: true,
    highlights: [
      { value: '561 TFLOPS', label: 'Top HPL, under 10 kW' },
      { value: 'Llama2-70B', label: 'Top MLPerf Inference' },
    ],
    bullets: [
      'First place overall among 8 invited international teams, including UC San Diego, ETH Zürich, and Nanyang Technological University, at the premier student supercomputing contest at SC25.',
      'Led on-site cluster deployment and the multi-node MLPerf Inference implementation (Llama2-70B); worked on HPL. The team recorded the top HPL and MLPerf Inference scores.',
    ],
  },
  {
    event: 'APAC HPC-AI Competition',
    location: 'Osaka, Japan',
    result: '2nd Place · Best AI Performance',
    period: 'Oct 2025',
    context: '48 international teams',
    bullets: [
      'Secured second place among 48 international teams, including National Tsing Hua University and Nanyang Technological University.',
      'Reduced communication time by 7x and improved offline inference throughput by 2x for DeepSeek-R1, earning the Best AI Performance Award.',
    ],
  },
  {
    event: 'ASC25 Supercomputer Challenge',
    location: 'Qinghai, China',
    result: 'First Prize · Group Award',
    period: 'May 2025',
    context: '118 teams',
    bullets: [
      'Earned First Prize and the Group Competition Award in an international contest of 118 teams, including Peking University, Tsinghua University, and Shanghai Jiao Tong University.',
      'Built and optimized the team cluster, parallelized a DNA sequence-alignment pipeline, and tuned HPL and HPCG benchmarks.',
    ],
  },
  {
    event: 'Small Object Tracking Challenge (MVA)',
    location: 'Kyoto, Japan',
    result: 'Third Place',
    period: 'Jul 2025',
    context: 'led to a peer-reviewed oral paper',
    bullets: [
      'Earned third place in the international small-object tracking challenge hosted at MVA 2025, leading to a peer-reviewed oral paper.',
      'Fine-tuned detection models with collaborative hybrid assignment (Co-DETR) and applied slicing-aided hyper inference (SAHI).',
    ],
  },
  {
    event: 'National Intercollegiate AI Competition (AICUP)',
    location: 'Taipei, Taiwan',
    result: 'Honorable Mention',
    period: 'Jun 2025',
    context: '6th nationally among thousands of teams',
    bullets: [
      'Secured 6th place nationally among thousands of competing teams, including National Taiwan University and National Tsing Hua University.',
      'Combined instruction-tuned LLMs with hybrid post-processing for medical speech privacy protection; work extended into a MEDINFO 2025 workshop paper.',
    ],
  },
];

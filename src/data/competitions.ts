export interface Competition {
  event: string;
  location: string;
  result: string;
  period: string;
  bullets: string[];
}

export const competitions: Competition[] = [
  {
    event: '2025 SC Student Cluster Competition (SCC25)',
    location: 'St. Louis, MO, USA',
    result: 'Overall Winner',
    period: 'Nov 2025',
    bullets: [
      'Won first place overall among 8 invited international teams, including UC San Diego, ETH Zürich, and Nanyang Technological University, at the premier student supercomputing contest at SC25.',
      'Led on-site cluster deployment and implemented multi-node MLPerf Inference (Llama2-70B), covering system optimization, CPU/GPU profiling, and performance tuning.',
    ],
  },
  {
    event: '2025 APAC HPC-AI Competition (HPC-AI)',
    location: 'Osaka, Japan',
    result: 'Second Place & Best AI Performance Award',
    period: 'Oct 2025',
    bullets: [
      'Secured second place among 48 international teams, including National Tsing Hua University and Nanyang Technological University.',
      'Reduced communication time by 7x and improved offline inference throughput by 2x for DeepSeek-R1, earning the Best AI Performance Award.',
    ],
  },
  {
    event: '2025 ASC Supercomputer Challenge (ASC25)',
    location: 'Qinghai, China',
    result: 'First Prize & Group Competition Award',
    period: 'May 2025',
    bullets: [
      'Earned First Prize and the Group Competition Award in an international contest of 118 teams, including Peking University, Tsinghua University, and Shanghai Jiao Tong University.',
      'Built and optimized the team cluster, parallelized a DNA sequence-alignment pipeline, and tuned HPL and HPCG benchmarks.',
    ],
  },
  {
    event: '2025 Small Object Tracking Challenge (MVA)',
    location: 'Kyoto, Japan',
    result: 'Third Place',
    period: 'Jul 2025',
    bullets: [
      'Earned third place in the international small-object tracking challenge hosted at MVA 2025, leading to a peer-reviewed oral paper.',
      'Fine-tuned detection models with collaborative hybrid assignment (Co-DETR) and applied slicing-aided hyper inference (SAHI).',
    ],
  },
  {
    event: '2025 National Intercollegiate Artificial Intelligence Competition (AICUP)',
    location: 'Taipei, Taiwan',
    result: 'Honorable Mention',
    period: 'Jun 2025',
    bullets: [
      'Secured 6th place nationally among thousands of competing teams, including National Taiwan University and National Tsing Hua University.',
      'Combined instruction-tuned LLMs with hybrid post-processing for medical speech privacy protection; work extended into a MEDINFO 2025 workshop paper.',
    ],
  },
];

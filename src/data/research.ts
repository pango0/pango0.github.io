export interface ResearchProject {
  title: string;
  org: string;
  period: string;
  description: string;
  bullets: string[];
  tags: string[];
  metric?: string;
}

export const research: ResearchProject[] = [
  {
    title: 'Parallel Decoding with Diffusion Large Language Models',
    org: 'NTU CSIE, Advisor: Prof. Chun-Yi Lee',
    period: 'Jan 2026 – Current',
    description:
      'A training-free method that exploits decoding deficiency to speed up diffusion LLM inference.',
    bullets: [
      'Improved tokens-per-second over 5x, surpassing baselines across multiple datasets.',
      'Parallelized intra-block decoding and improved decoding heuristics, achieving near 6 tokens per forward pass.',
    ],
    tags: ['LLM Inference', 'Diffusion Models', 'Python'],
    metric: '5x',
  },
  {
    title: 'Accelerating an Exascale Climate Emulator',
    org: 'ElsaLab, NTU CSIE — in collaboration with NVIDIA',
    period: 'Sep 2025 – Nov 2025',
    description:
      'A next-generation climate emulator built for GPU mixed-precision computing on a multi-GPU cluster.',
    bullets: [
      'Achieved a 777x speedup in climate simulation via mixed-precision computing and a distributed architecture.',
      'Scaled the emulator toward exascale performance, enabling high-fidelity modeling of extreme-weather and climate-policy scenarios.',
    ],
    tags: ['CUDA', 'Distributed Systems', 'HPC'],
    metric: '777x',
  },
  {
    title: 'Parallel Influence Maximization on HPC Systems',
    org: 'NTU CSIE, Advisor: Prof. Chun-Yi Lee',
    period: 'Sep 2025 – Dec 2025',
    description:
      'Performance analysis of parallel influence maximization algorithms on a distributed-memory HPC cluster.',
    bullets: [
      'Achieved up to a 15.3x speedup with the IMM 2D variant via asynchronous co-occurrence matrix preprocessing in C++, OpenMPI, and HClib.',
      'Analyzed scaling bottlenecks on a 768-core AMD EPYC cluster, identifying the transition from compute-bound to communication-bound phases in global All-Reduce operations.',
    ],
    tags: ['C++', 'OpenMPI', 'Graph Algorithms'],
    metric: '15.3x',
  },
  {
    title: 'Distributed LLM Inference across Heterogeneous CPU and GPU',
    org: 'NTU CSIE, Advisor: Prof. Chun-Yi Lee',
    period: 'Feb 2025 – May 2025',
    description:
      'Quantization and kernel fusion techniques for faster Transformer inference across CPU/GPU platforms.',
    bullets: [
      'Achieved a 15x inference throughput improvement via 8-bit quantization of weights, activations, and the KV cache, plus kernel fusion.',
      'Achieved a 3x inference latency speedup on Intel Xeon CPUs using AVX-512, AMX-BF16, and NUMA-aware thread placement.',
    ],
    tags: ['Quantization', 'AVX-512', 'CPU Inference'],
    metric: '15x',
  },
];

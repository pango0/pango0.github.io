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
    title: 'Accelerating Diffusion LLM Decoding via Tentative Context Pipelining',
    org: 'NTU CSIE, Advisor: Prof. Chun-Yi Lee',
    period: 'Jan 2026 – Oct 2026',
    description:
      'Proposed tentative context — reusing stable but uncommitted predictions as provisional context — the core idea behind TeCoP (co-first author).',
    bullets: [
      'TeCoP is a training-free pipelined decoder for diffusion LLMs; results published under Publications.',
      'Achieves up to 87% fewer forward passes and 11.77x throughput within a 1 percent accuracy drop on average.',
    ],
    tags: ['LLM Inference', 'Diffusion Models', 'Python'],
    metric: '11.77×',
  },
  {
    title: 'Accelerating an Exascale Climate Emulator',
    org: 'ElsaLab, NTU CSIE — in collaboration with NVIDIA',
    period: 'Sep 2025 – Nov 2025',
    description:
      'A next-generation climate emulator built for GPU mixed-precision computing on a multi-GPU cluster.',
    bullets: [
      "Accelerated the emulator's tile-based Cholesky factorization 777x over a 112-core CPU baseline (2.47 PFLOPS, 119.8x energy efficiency) with cuBLASLt, tile-level mixed precision, and tile-size and CUDA-stream tuning.",
      'Profiled the application and optimized its core numerical computations.',
    ],
    tags: ['CUDA', 'Distributed Systems', 'HPC'],
    metric: '777×',
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
    metric: '15.3×',
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
    metric: '15×',
  },
];

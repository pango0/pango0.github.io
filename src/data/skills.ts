export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: 'Languages & ML',
    items: ['Python', 'C', 'C++'],
  },
  {
    category: 'Parallel & GPU Computing',
    items: ['CUDA', 'ROCm', 'Pthreads', 'OpenMP', 'MPI (OpenMPI)'],
  },
  {
    category: 'LLM Serving',
    items: ['TensorRT-LLM', 'vLLM', 'SGLang'],
  },
];

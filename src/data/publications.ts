export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  note?: string;
  description: string;
  link?: string;
  image?: string;
}

export const publications: Publication[] = [
  {
    title: 'TeCoP: Accelerating Diffusion Large Language Model Decoding via Tentative Context Pipelining',
    authors:
      'Jui-Chien Tsou†, Hsuan-Chi Liu†, Wei-Chin Wang†, Yu-Syuan Xu, Chun-Yi Lee († equal contribution)',
    venue: 'Under review, ACL Rolling Review — targeting NAACL 2027',
    year: '2026',
    note: 'Under review',
    description:
      'Developed TeCoP, a training-free pipelined decoder for diffusion LLMs that achieves up to 87% fewer forward passes and 11.77x throughput within a 1 percent accuracy drop on average.',
    link: 'https://arxiv.org/abs/2610.27583',
    image: '/papers/2610.27583.png',
  },
  {
    title: 'Correct First, Fast Second: What a Local 7B Code Model Can and Cannot Do for GPU Kernel Optimization',
    authors: 'Jui-Chien Tsou, Po-Yi Wu',
    venue: 'arXiv preprint arXiv:2611.12079',
    year: '2026',
    note: 'Preprint',
    description:
      'Studies how the interaction strategy around a fixed, locally hosted 7B code model (Qwen2.5-Coder-7B-Instruct) affects its ability to replace PyTorch operators with custom CUDA kernels.',
    link: 'https://arxiv.org/abs/2611.12079',
    image: '/papers/2611.12079.png',
  },
  {
    title: 'Boosting Small Object Tracking via Collaborative Detection Transformer',
    authors:
      'B.-C. Chuang, J.-H. Lee, P.-T. Kuo, I.-H. Chu, Y.-S. Hsiao, C.-H. Wu, P.-Y. Wu, J.-C. Tsou, H.-C. Liu, C.-Y. Lee, Y.-F. Yang',
    venue: 'International Conference on Machine Vision and Applications (MVA)',
    year: '2025',
    note: 'Oral',
    description:
      'Co-developed CHAT, a small-object tracking pipeline integrating Co-DETR, SAHI, and BoostTrack++, achieving superior identity preservation on the SMOT4SB benchmark; selected for oral presentation.',
  },
  {
    title: 'Instruction-Tuned LLMs for Multilingual Medical ASR and Privacy Entity Extraction',
    authors: 'Jing Jin, Jui-Chien Tsou, Chih-Ho Chen, Po-Jen Ko, Tzu-Hung Huang',
    venue: 'The 20th World Congress on Medical and Health Informatics (MEDINFO), Workshop',
    year: '2025',
    description:
      'Built a parallelized ASR–LLM pipeline combining fine-tuned speech models with instruction-tuned LLM orchestration for multilingual medical transcription and privacy-entity extraction.',
  },
];

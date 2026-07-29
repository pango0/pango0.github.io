export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  note?: string;
  description: string;
}

export const publications: Publication[] = [
  {
    title: 'Boosting Small Object Tracking via Collaborative Detection Transformer',
    authors:
      'B.-C. Chuang, J.-H. Lee, P.-T. Kuo, I.-H. Chu, Y.-S. Hsiao, C.-H. Wu, P.-Y. Wu, J.-C. Tsou, H.-C. Liu, C.-Y. Lee, Y.-F. Yang',
    venue: 'International Conference on Machine Vision and Applications (MVA)',
    year: '2025',
    note: 'Oral',
    description:
      'Developed CHAT, a small-object tracking pipeline integrating Co-DETR, SAHI, and BoostTrack++, achieving superior identity preservation on the SMOT4SB benchmark; selected for oral presentation.',
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

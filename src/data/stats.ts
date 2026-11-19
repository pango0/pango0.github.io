export interface Stat {
  value: string;
  label: string;
  /** Count up from zero on reveal; leave off for non-numeric values. */
  animate?: boolean;
}

export const stats: Stat[] = [
  { value: '1st', label: 'SC25 Cluster Competition — Overall Winner' },
  { value: '777×', label: 'Exascale climate-emulator speedup', animate: true },
  { value: '11.77×', label: 'Diffusion-LLM decoding throughput', animate: true },
  { value: '4', label: 'Papers & preprints', animate: true },
];

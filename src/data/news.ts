export interface NewsItem {
  date: string;
  text: string;
  link?: string;
}

export const news: NewsItem[] = [
  {
    date: 'Nov 2026',
    text: 'New preprint: Correct First, Fast Second — what a local 7B code model can and cannot do for GPU kernel optimization.',
    link: 'https://arxiv.org/abs/2611.12079',
  },
  {
    date: 'Oct 2026',
    text: 'TeCoP, our training-free pipelined decoder for diffusion LLMs, is under review at ACL Rolling Review, targeting NAACL 2027.',
    link: 'https://arxiv.org/abs/2610.27583',
  },
  {
    date: 'Jul 2026',
    text: "Joined COOL AI Companion as sole desktop-client engineer; NTU's Digital Learning Center released the app to a 35,000-student campus.",
  },
  {
    date: 'Nov 2025',
    text: 'Overall Winner at the SC25 Student Cluster Competition in St. Louis — first place among 8 invited international teams.',
  },
  {
    date: 'Oct 2025',
    text: 'Second Place and the Best AI Performance Award at the APAC HPC-AI Competition in Osaka.',
  },
  {
    date: 'May 2025',
    text: 'First Prize and the Group Competition Award at the ASC25 Supercomputer Challenge, among 118 teams.',
  },
];

export interface Education {
  school: string;
  degree: string;
  location: string;
  period: string;
  details: string[];
}

export const education: Education = {
  school: 'National Taiwan University (NTU)',
  degree: 'B.S. in Computer Science, College of Electrical Engineering and Computer Science',
  location: 'Taipei, Taiwan',
  period: 'Sep 2022 – Jun 2026',
  details: ['Current GPA: 3.98 / 4.3', 'Last-60-Credit GPA: 4.16 / 4.3'],
};

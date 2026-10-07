export type ResumeEntryData = {
  title: string
  organization: string
  period: string
}

export const education = [
  {
    title: 'Bachelor of Computer Science',
    organization: 'Universite D’Abomey Calavi, Institut Polytechnique Le Citoyen, Benin Republic',
    period: '2014',
  },
  {
    title: 'Diploma in Computer Craft',
    organization: 'Trade Test 1–3, Federal Ministry of Labor & Productivity, Nigeria',
    period: '2007',
  },
] as const satisfies readonly ResumeEntryData[]

export const experience = [
  {
    title: 'Head of Marketing',
    organization: 'Cointracts Prop Firm, Media City, Dubai',
    period: 'June 2025 – Dec 2025',
  },
  {
    title: 'Growth Marketing Manager',
    organization: 'TXM Solutions, Media City, Dubai',
    period: 'Feb 2024 – Mar 2025',
  },
  {
    title: 'Marketing Manager',
    organization: 'RGP Properties, Max, Dubai',
    period: 'Jul 2023 – Jan 2024',
  },
  {
    title: 'Head of Growth & Marketing',
    organization: 'MaskEx Global Internet City, Dubai',
    period: 'Jul 2021 – Jan 2023',
  },
  {
    title: 'Recruitment Specialist',
    organization: 'Sadia HR Consultancy, Emirate Towers, Dubai',
    period: 'May 2020 – May 2021',
  },
] as const satisfies readonly ResumeEntryData[]

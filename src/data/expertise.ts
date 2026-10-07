export type ExpertiseCardData = {
  id: string
  title: string
  secondaryTitle: string
  tags: string[]
  description: string
}

export const expertiseCards: ExpertiseCardData[] = [
  {
    id: 'expertise-01',
    title: 'Analytics &',
    secondaryTitle: 'ROI',
    tags: ['Google Analytics', 'Zoho PageSense'],
    description: 'I use data driven marketing, analytics and ROI measurement to guide better decisions.',
  },
  {
    id: 'expertise-02',
    title: 'Search & ',
    secondaryTitle: 'Conversion',
    tags: ['Google Analytics', 'Sem Rush', 'Yoast SEO', 'Microsoft Clarity'],
    description: 'Use SEO and GEO to improve visibility in search and AI platforms, then CRO to turn that visibility into action.',
  },
  {
    id: 'expertise-03',
    title: 'Paid Media & ',
    secondaryTitle: 'Performance',
    tags: ['Google Ads', 'Facebook Ads', 'Meta', 'LinkedIn Ads'],
    description: 'I create and manage paid advertising campaigns across various platforms to drive traffic and conversions.',
  },
  {
    id: 'expertise-04',
    title: 'Market Expansion & ',
    secondaryTitle: 'Demand Generation',
    tags: ['Hubspot', 'Bitrix24', 'Zoho CRM'],
    description: 'Multi-market demand generation across GCC, MENA and Africa, supported by affiliate and partnership programs.',
  },
]

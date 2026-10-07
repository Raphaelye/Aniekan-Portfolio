import cointractsImage from '../assets/case_study1.webp'
import maskexImage from '../assets/case_study2.webp'
import txmImage from '../assets/case_study3.webp'
import puPrimeImage from '../assets/case_study4.webp'

export type CaseStudy = {
  slug: string
  company: string
  title: string
  description: string
  image: string
  imageAlt: string
  metric?: string
  metricLabel?: string
}

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: 'cointracts-prop-firm',
    company: 'Cointracts Prop Firm',
    title: 'From Market Entry to $340K in New Revenue.',
    description: 'Growth strategy that generated $340K in new revenue in three months.',
    image: cointractsImage,
    imageAlt: 'Trading chart illustrating the Cointracts Prop Firm case study',
    metric: '$340K',
    metricLabel: 'new revenue in 3 months',
  },
  {
    slug: 'maskex-global',
    company: 'MaskEX Global',
    title: 'Turning Crypto Campaigns into Users, Volume and Community.',
    description: 'Turning crypto campaigns into users, volume and community.',
    image: maskexImage,
    imageAlt: 'Voting hands representing the MaskEX Global community',
    metric: '+60%',
    metricLabel: 'trading volume growth',
  },
  {
    slug: 'txm-solutions',
    company: 'TXM Solutions',
    title: 'Building a Measurable B2B Demand Engine.',
    description: 'Building a measurable B2B demand engine.',
    image: txmImage,
    imageAlt: 'Bright office space representing the TXM Solutions case study',
    metric: '3.8x',
    metricLabel: 'ROAS achieved',
  },
  {
    slug: 'pu-prime',
    company: 'PU Prime',
    title: 'Building an Education-Led Financial Markets Growth Engine.',
    description: 'Building an education-led financial markets growth engine.',
    image: puPrimeImage,
    imageAlt: 'An instructor presenting to a class',
  },
]

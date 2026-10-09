import home from '../assets/Hero.png'
import about from '../assets/about_hero.webp'
import caseStudiesHero from '../assets/casestudies_hero.webp'
import expertise from '../assets/expertise_hero.webp'
import { caseStudies } from './caseStudies'

export const heroImages = {
  home,
  about,
  caseStudies: caseStudiesHero,
  expertise,
} as const

export const routeHeroImageUrls = [
  ...Object.values(heroImages),
  ...caseStudies.map(({ image }) => image),
]

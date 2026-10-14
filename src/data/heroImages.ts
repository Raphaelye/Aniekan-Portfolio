import home from '../assets/Hero.webp'
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

export function getRouteHeroImageUrl(pathname: string): string {
  const path = pathname.replace(/\/+$/, '') || '/'
  if (path === '/about') return heroImages.about
  if (path === '/expertise') return heroImages.expertise
  if (path === '/case-studies') return heroImages.caseStudies
  if (path.startsWith('/case-studies/')) {
    const slug = path.split('/')[2]
    return caseStudies.find((study) => study.slug === slug)?.image ?? heroImages.caseStudies
  }
  return heroImages.home
}

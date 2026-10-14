import cointract1 from '../assets/Case Studies details/cointract prop/cointract1.png'
import cointract2 from '../assets/Case Studies details/cointract prop/cointract2.png'
import cointract3 from '../assets/Case Studies details/cointract prop/cointract3.png'
import cointract4 from '../assets/Case Studies details/cointract prop/cointract4.png'
import maskex1 from '../assets/Case Studies details/maskex/maskex1.jpg'
import maskex2 from '../assets/Case Studies details/maskex/maskex2.jpg'
import maskex3 from '../assets/Case Studies details/maskex/maskex3.jpg'
import maskex4 from '../assets/Case Studies details/maskex/maskex4.jpg'
import maskex5 from '../assets/Case Studies details/maskex/maskex5.jpg'
import txm1 from '../assets/Case Studies details/txm/txm1.jpg'
import puprime1 from '../assets/Case Studies details/puprime/puprime1.jpg'
import puprime2 from '../assets/Case Studies details/puprime/puprime2.jpg'
import puprime3 from '../assets/Case Studies details/puprime/puprime3.jpg'
import puprime4 from '../assets/Case Studies details/puprime/puprime4.jpg'
import puprime5 from '../assets/Case Studies details/puprime/puprime5.jpg'

export type DetailImage = {
  src: string
  alt: string
  caption: string
  width: number
  height: number
  portrait?: boolean
}

type CaseStudyDetail = {
  introduction: string
  images: readonly DetailImage[]
}

export const caseStudyDetails: Record<string, CaseStudyDetail> = {
  'cointracts-prop-firm': {
    introduction: 'A look at the account insights behind the campaign, from reach and engagement to follower activity and conversations.',
    images: [
      { src: cointract1, alt: 'Cointracts account insights showing views and content types', caption: 'Audience reach', width: 911, height: 427 },
      { src: cointract2, alt: 'Cointracts account insights showing content interactions', caption: 'Content interactions', width: 882, height: 322 },
      { src: cointract3, alt: 'Cointracts profile and follower activity dashboard', caption: 'Follower activity', width: 953, height: 624 },
      { src: cointract4, alt: 'Cointracts messaging dashboard showing response and conversation activity', caption: 'Conversations', width: 855, height: 426 },
    ],
  },
  'maskex-global': {
    introduction: 'Selected social reporting views document reach, video engagement, visits, and messaging activity across the campaign.',
    images: [
      { src: maskex1, alt: 'MaskEX social analytics showing reach and engagement', caption: 'Reach and engagement', width: 949, height: 867 },
      { src: maskex2, alt: 'MaskEX video analytics showing views and minutes watched', caption: 'Video performance', width: 1079, height: 721 },
      { src: maskex3, alt: 'MaskEX video analytics showing audience and viewing trends', caption: 'Viewing trends', width: 1061, height: 719 },
      { src: maskex4, alt: 'MaskEX analytics showing page and Instagram profile visits', caption: 'Profile visits', width: 946, height: 813 },
      { src: maskex5, alt: 'MaskEX social performance and messaging dashboard', caption: 'Performance and messaging', width: 637, height: 700 },
    ],
  },
  'txm-solutions': {
    introduction: 'A snapshot of campaign conversations and delivery activity.',
    images: [
      { src: txm1, alt: 'TXM campaign dashboard showing ongoing ad message conversations', caption: 'Campaign conversations', width: 597, height: 1090, portrait: true },
    ],
  },
  'pu-prime': {
    introduction: 'Selected views from campaign reporting, audience planning, ad delivery, and community management.',
    images: [
      { src: puprime1, alt: 'PU Prime ads reporting dashboard with campaign performance trends', caption: 'Campaign reporting', width: 1278, height: 445 },
      { src: puprime2, alt: 'PU Prime account performance report showing reach and ad results', caption: 'Account performance', width: 1030, height: 423 },
      { src: puprime3, alt: 'PU Prime audience setup screen for advertising', caption: 'Audience planning', width: 1280, height: 410 },
      { src: puprime4, alt: 'PU Prime ad campaign management screen', caption: 'Ad delivery', width: 1258, height: 539 },
      { src: puprime5, alt: 'PU Prime social media comments management dashboard', caption: 'Community management', width: 1280, height: 576 },
    ],
  },
}

import speaking1 from '../assets/speaking1.webp'
import speaking2 from '../assets/speaking2.webp'
import speaking3 from '../assets/speaking3.webp'
import speaking4 from '../assets/speaking4.webp'

export type SpeakingEngagement = {
  title: string
  role: string
  image: string
  imageAlt: string
}

export const speakingEngagements = [
  {
    title: 'Dubai Crypto Summit',
    role: 'Keynote Speaker',
    image: speaking1,
    imageAlt: 'Aniekan presenting to a seated audience in a university lecture room',
  },
  {
    title: 'University Blockchain Education',
    role: 'Speaking & Training',
    image: speaking2,
    imageAlt: 'A group of students and educators at a university blockchain event',
  },
  {
    title: 'Crypto Trading Competition',
    role: '400+ university participants',
    image: speaking3,
    imageAlt: 'Aniekan speaking about blockchain to an audience',
  },
  {
    title: 'Blockchain Lectures at UAE Universities',
    role: 'Guest Lecturer',
    image: speaking4,
    imageAlt: 'Aniekan at a crypto summit exhibition',
  },
] as const satisfies readonly SpeakingEngagement[]

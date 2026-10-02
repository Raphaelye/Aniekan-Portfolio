import {
  BarChartIcon,
  DollarCircleIcon,
  Magnet01Icon,
  MousePointerClickIcon,
  UserMultipleIcon,
} from '@hugeicons/core-free-icons'
import audienceImage from '../assets/process1.webp'
import acquisitionImage from '../assets/process2.webp'
import conversionImage from '../assets/process3.webp'
import revenueImage from '../assets/process4.webp'
import scaleImage from '../assets/process5.webp'

export const processSteps = [
  {
    id: 'audience',
    title: 'Audience',
    description: 'Understand the people behind the clicks and build a foundation for long-term growth.',
    image: audienceImage,
    icon: UserMultipleIcon,
  },
  {
    id: 'acquisition',
    title: 'Acquisition',
    description: 'Attract the right audiences through channels built for efficient, measurable growth.',
    image: acquisitionImage,
    icon: Magnet01Icon,
  },
  {
    id: 'conversion',
    title: 'Conversion',
    description: 'Turn attention into action by removing friction across the customer journey.',
    image: conversionImage,
    icon: MousePointerClickIcon,
  },
  {
    id: 'revenue',
    title: 'Revenue',
    description: 'Connect marketing activity to pipeline, sales and measurable commercial outcomes.',
    image: revenueImage,
    icon: DollarCircleIcon,
  },
  {
    id: 'scale',
    title: 'Scale',
    description: 'Double down on what works and build repeatable systems for sustainable growth.',
    image: scaleImage,
    icon: BarChartIcon,
  },
] as const

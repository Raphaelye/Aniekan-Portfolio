export const highlights = [
  {
    company: 'Cointracts Prop',
    result: 'New Revenue Generated in 3 months',
    value: 340,
    prefix: '$',
    suffix: 'K',
  },
  {
    company: 'MaskEX Global',
    result: 'Trading Volume Growth',
    value: 60,
    prefix: '+',
    suffix: '%',
  },
  {
    company: 'TXM Solutions',
    result: 'ROAS Achieved',
    value: 3.8,
    prefix: '',
    suffix: 'x',
    decimals: 1,
  },
] as const

export type Highlight = (typeof highlights)[number]

import logo from '../../assets/Aniekan_logo.png'
import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Expertise', to: '/expertise' },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18V9.65H5.72V18h2.62ZM7.03 8.51a1.52 1.52 0 1 0 0-3.04 1.52 1.52 0 0 0 0 3.04ZM18 18v-4.57c0-2.45-1.31-3.59-3.06-3.59a2.64 2.64 0 0 0-2.38 1.31V9.65H9.94V18h2.62v-4.13c0-1.09.21-2.14 1.55-2.14 1.32 0 1.34 1.24 1.34 2.21V18H18Z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
        <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.35L5.62 22H2.5l7.25-8.29L1.8 2h6.4l4.43 6.77L18.9 2Zm-1.1 18h1.73L7.28 3.88H5.42L17.8 20Z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
        <path d="M13.5 21v-8.2h2.76l.41-3.2H13.5V7.56c0-.93.26-1.56 1.6-1.56h1.7V3.14C16.5 3.05 15.54 3 14.42 3c-2.78 0-4.68 1.7-4.68 4.82V9.6H6.6v3.2h3.14V21h3.76Z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-background px-5 md:px-8 lg:px-25 py-10 text-text-primary md:py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute flex items-center justify-center -left-8 top-0 max-md:-left-30 size-90 rounded-full bg-gray opacity-5"
      >
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          className="pointer-events-none "
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full  flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="flex min-h-36 flex-col justify-center">
          <p className="font-display text-text-muted text-[35px] lg:text-[50px] leading-none font-semibold tracking-[-.04em] uppercase">
            Aniekan Udofia
          </p>
          <p className="mt-2 font-body font-semibold text-sm md:text-[13px] lg:text-[17px] text-text-muted md:text-base">
            Digital Growth &amp; Marketing Strategist Trainer
          </p>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row sm:gap-12 md:gap-16">
          <nav aria-label="Quick links" className="flex flex-col items-start gap-1.5">
            <h2 className="mb-1 font-body text-base font-semibold">Quick Links</h2>
            {quickLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="font-body text-sm text-text-muted no-underline transition-colors hover:text-text-primary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-primary"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-start gap-2">
            <h2 className="mb-1 font-body text-base font-semibold">Contact</h2>
            <a
              href="mailto:business@aniekanimebong.com"
              className="font-body text-sm text-text-muted no-underline transition-colors hover:text-text-primary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-primary"
            >
              <span className="font-semibold">Email:</span> business@aniekanimebong.com
            </a>
            <p className="font-body text-sm text-text-muted"><span className="font-semibold">Location:</span> Dubai</p>
            <div className="mt-1 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex size-9 items-center justify-center rounded-full bg-foreground text-text-primary shadow-[0_.125rem_.4rem_rgba(0,0,0,.2)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-primary"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="relative z-10 mt-8 text-center font-body text-xs text-text-muted md:mt-6">
        © {new Date().getFullYear()} Aniekan. All Rights Reserved.
      </p>
    </footer>
  )
}

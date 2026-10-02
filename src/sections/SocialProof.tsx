import { HandshakeIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { brands } from '../data/brands'

function BrandLogos({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className={`flex shrink-0 items-center gap-9 pr-9 max-lg:gap-7 max-lg:pr-7 max-md:gap-5 max-md:pr-5 ${hidden ? 'motion-reduce:hidden' : ''}`}
    >
      {brands.map(({ name, logo, width, height }) => (
        <img
          key={name}
          src={logo}
          alt={hidden ? '' : name}
          width={width}
          height={height}
          className="h-7 w-auto max-w-none shrink-0 object-contain grayscale md:h-10"
        />
      ))}
    </div>
  )
}

export function SocialProof() {
  return (
    <aside
      aria-label="Trusted brands"
      className="absolute inset-x-0 top-0 z-30 mx-auto flex h-31.5 w-[87%] max-md:w-full max-w-7xl -translate-y-1/2 items-center gap-6 overflow-hidden rounded-[1.375rem] max-md:rounded-none bg-foreground px-10 shadow-[0_18px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_18px_30px_rgba(0,0,0,0.08)] max-lg:gap-4 max-lg:px-7 max-md:h-auto max-md:translate-y-0 max-md:flex-col max-md:items-stretch max-md:gap-5 max-md:px-4 max-md:py-4"

    >
      <div className="flex w-20 shrink-0 items-center gap-1 text-text-muted max-lg:w-40 max-md:w-full">
        <HugeiconsIcon
          icon={HandshakeIcon}
          size={54}
          strokeWidth={1.2}
          color="currentColor"
          className="size-13.5 shrink-0 max-lg:size-10 max-md:size-6 "
          aria-hidden="true"
        />
        <p className="font-body text-xl  tracking-tighter font-bold uppercase max-lg:text-base max-md:text-sm ">
          Trusted by:
        </p>
      </div>

      <div className="flex min-w-0 flex-1 overflow-hidden mask-[linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] motion-reduce:overflow-x-auto motion-reduce:mask-none">
        <div className="flex w-max shrink-0 items-center animate-[brand-marquee_30s_linear_infinite] motion-reduce:animate-none">
          <BrandLogos />
          <BrandLogos hidden />
        </div>
      </div>
    </aside>
  )
}

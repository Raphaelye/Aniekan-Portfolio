import  HeroImage from "../assets/casestudies_hero.webp"

export function CaseStudyHero() {
  return (
    <section
      aria-labelledby="casestudies-hero-title"
      className="section-container flex min-h-[60svh] lg:min-h-[80svh] items-end overflow-hidden rounded-b-[45px] max-md:rounded-b-[20px] bg-cover bg-position-[100%_30%] bg-blend-multiply bg-no-repeat text-[#f5f5f5]"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.92) 10%, rgba(102,102,102,1) 100%), url(${HeroImage})`
      }}
    >
      <div className="relative z-1 w-full ">
        <h1
          id="casestudies-hero-title"
          className="m-0 text-[30px] leading-none font-bold tracking-[-1.8px] md:text-[60px] lg:text-[70px] md:tracking-[-2.7px]"
        >
          Work Built to
          <br />
          <span className="text-accent-alt">Move Markets.</span>
        </h1>
        <p className="mt-4 mb-0 max-w-135 max-md:max-w-65 text-[12px] leading-snug tracking-normal font-regular text-[#d2d2d2] md:mt-6 md:text-[18px]">
          Case studies in growth, acquisition and market expansion, where strategy became revenue.
        </p>
      </div>
    </section>
  )
}

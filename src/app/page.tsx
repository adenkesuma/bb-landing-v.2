import { Hero, MaxWidthWrapper } from '@/components'

export default function Home() {
  return (
    <div>
      <Hero />
      <MaxWidthWrapper>
        <div className="relative rounded-2xl p-8 h-40">
          <div className="absolute -inset-px bg-gradient-to-b from-gray-600 via-transparent to-transparent rounded-2xl" aria-hidden="true"></div>
          <div className="absolute inset-0 bg-primary-foreground rounded-2xl" aria-hidden="true"></div>
          <div className="z-10 text-zinc-100">Nice border around me!</div>
        </div> 
      </MaxWidthWrapper>
    </div>
  )
}

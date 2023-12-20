import Image from "next/image"

import { 
  Hero, 
  ContinuesSection, 
  CardsSolution 
} from "@/components"
import SecondaryGradient from '@/../public/assets/images/secondary-gradient.png'

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="relative">
        <ContinuesSection />
        <Image 
          src={SecondaryGradient}
          alt='secondary gradient'
          className="w-[800px] h-[800px] absolute top-0 -left-96"
        />
      </div>
      <div>
        <CardsSolution />
      </div>
    </div>
  )
}

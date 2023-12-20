import Image from "next/image"

import { 
  Hero, 
  ContinuesSection, 
  CardsSolution 
} from "@/components"
import SecondaryGradient from '@/../public/assets/images/secondary-gradient.png'
import PurpleGradient from '@/../public/assets/images/purple-gradient.png'

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
      <div className="relative mt-40">
        <CardsSolution />
        <Image 
          src={PurpleGradient}
          alt='secondary gradient'
          className="w-[800px] h-[800px] absolute top-0 -right-[500px]"
        />
      </div>
    </div>
  )
}

import Image from 'next/image'
import { MoveRight } from 'lucide-react'

import { MaxWidthWrapper } from '.'
import { Button } from './ui/button'
import StartYourJourneyImage from '@/../public/assets/images/StartYourJourneyImage.webp'

const JourneySection = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex gap-12 items-center mt-40">
        <div className="flex flex-col gap-4 w-[60%]">
          <h2 className='text-3xl text-white font-black'>
            De-risk your beta firmware and tap into the feedback from any customer
          </h2>
          <p className='text-sm text-gray-300 mb-1'>
            Most fleet-wide update processes are either large scale projects are take longer than needed. But a device update does not need to be such a risky and drawn out process when managed with the right tools. We help you deliver updates such that for your customers, the experience of Prereleasing Beta Firmware is the same as that of a normal firmware version. This is all possible through analysis of your existing process, past experiences and knowledge sources. We will assist you the critical questions and ultimately show you a path forward fitting the stage you are currently at.
          </p>
          <Button variant='outline' className='flex items-center gap-2 w-52'>
            <span>Start Your Journey Now</span>
             <MoveRight className='w-[13px] h-[13px]' />
          </Button>
        </div>

        <div className='border border-gray-600 rounded-3xl p-2 w-[40%]'>
          <Image 
            src={StartYourJourneyImage}
            alt='start your journey image'
            className='rounded-2xl w-full h-full'
          />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default JourneySection

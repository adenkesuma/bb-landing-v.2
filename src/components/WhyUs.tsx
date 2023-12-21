import Image from 'next/image'

import { MaxWidthWrapper } from '.'
import WhiteGradient from '@/../public/assets/images/white-gradient.png'

const WhyUs = () => {
  return (
    <MaxWidthWrapper className='mt-40'>
      <h2 className='text-3xl font-black text-white'>
        Why Us
      </h2>
      <p className='text-sm text-gray-300 mt-2'>
        Innovative Solutions for Unparalleled Results
      </p>

      <div className="grid grid-cols-3 gap-12 mt-8">
        <div className='relative overflow-hidden flex flex-col gap-1 border border-gray-600 p-6 rounded-xl'>
          <h3 className='font-bold text-xl text-white'>80%</h3>
          <span className='text-base font-semibold text-white'>Up to 80% increase in productivity</span>
          <p className='text-gray-300 font-regular text-sm'>
            Better risk appetite management thanks to intelligent device selection ability and granular criteria specifications. No customer needs to be convinced to be a guinea pig if the risks they are expose remain within the standard margins. No more dedicated maintenance projects for firmware updates.
          </p>

          <Image 
            src={WhiteGradient}
            alt='white gradient'
            className='absolute -top-56 w-80 h-80'
          />
        </div>
        <div className='flex flex-col gap-1 border border-gray-600 p-6 rounded-xl'>
          <h3 className='font-bold text-xl text-white'>5x</h3>
          <span className='text-base font-semibold text-white'>Update your fleets as much as 5times faster than before</span>
          <p className='text-gray-300 font-regular text-sm'>
            Thanks to our intelligent data driven approach, you can gather data faster and apply decision making factors to your data to obtain actionable insights for achieving fleet-wide updates faster than ever before.
          </p>
        </div>
        <div className='flex flex-col gap-1 border border-gray-600 p-6 rounded-xl'>
          <h3 className='font-bold text-xl text-white'>60%</h3>
          <span className='text-base font-semibold text-white'>Up to 60% cost savings</span>
          <p className='text-gray-300 font-regular text-sm'>
            Free your engineers to focus on more innovative tasks. No more paying for beta customers to agree to be guinea pigs, instead tap into your entire customer base for suitable device candidates.
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default WhyUs

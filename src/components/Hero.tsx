import Image from 'next/image'
import React from 'react'

import HeroBanner from '@/../public/assets/images/Group.png'
import { MaxWidthWrapper } from '.'

const Hero = () => {
  return (
    <header className='pt-32 min-h-[90vh] bg-gradient'>
      <MaxWidthWrapper>
        <div className='h-full flex items-center gap-12'>
          <div className='w-[60%] flex flex-col gap-4'>
            <h1 className='text-6xl font-bold text-secondary'>
              Customised<br />
              <span className='text-primary'>Software Upgrade</span><br />
              Experiences
            </h1>
            <span className='text-black font-semibold text-base'>
              “ Whether it is 1 device or 1000+ we have done it before and we can do it for you “
            </span>
            <p className='text-sm text-foreground'>
              We provide solutions to help you tailor software upgrade journies from those of your android apps on your personal device, to those of the devices used by your clients, taking away the long conversations and managing the risks so you and they can fast track to reaping the rewards of those changes. All this with less effort and maximum returns
            </p>
          </div>

          <figure className='w-[40%]'>
            <Image 
              src={HeroBanner}
              alt='hero asset'
              className='w-full'
            />
          </figure>
        </div>
      </MaxWidthWrapper>

    </header>
  )
}

export default Hero

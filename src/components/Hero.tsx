import Image from 'next/image'
import React from 'react'
import { MoveRight } from 'lucide-react'

import HeroBanner from '@/../public/assets/images/Group.png'
import { MaxWidthWrapper } from '.'
import { Button } from './ui/button'
import BlurGradient from '@/../public/assets/images/circle-gradient.png'

const Hero = () => {
  return (
    <header className='min-h-screen w-full relative'>
      <MaxWidthWrapper>
        <div className='min-h-screen w-full flex items-center gap-12'>
          <div className='w-[60%] flex flex-col gap-4'>
            <h1 className='text-6xl font-bold text-white'>
              Customised<br />
              <span className='text-primary'>Software Upgrade</span><br />
              Experiences
            </h1>
            <span className='text-white font-semibold text-base'>
              “ Whether it is 1 device or 1000+ we have done it before and we can do it for you “
            </span>
            <p className='text-sm text-gray-300'>
              We provide solutions to help you tailor software upgrade journies from those of your android apps on your personal device, to those of the devices used by your clients, taking away the long conversations and managing the risks so you and they can fast track to reaping the rewards of those changes. All this with less effort and maximum returns
            </p>
            
            <div className='flex items-center gap-4 mt-2'>
              <Button>
                Sign Up
              </Button>
              <Button variant='outline' className='bg-transparent border-white text-white flex items-center gap-2'>
                <span>Learn More</span>
                <MoveRight className='w-[13px] h-[13px]' />
              </Button>
            </div>
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

      <div className='w-[1200px] h-[1200px] absolute -right-[800px] -top-60'>
        <Image 
          src={BlurGradient}
          alt="image"
          className='w-full h-full'
        />
      </div>
    </header>
  )
}

export default Hero

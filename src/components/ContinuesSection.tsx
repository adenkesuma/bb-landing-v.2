import Image from "next/image"
import { MoveRight } from 'lucide-react'

import { MaxWidthWrapper } from "."
import { Button } from "./ui/button"
import WhiteGradient from '@/../public/assets/images/white-gradient.png'
import ValueIcon from '@/../public/assets/svg/value.svg'

const ContinuesSection = () => {
  return (
    <MaxWidthWrapper>
      <div className='mx-auto mb-40'>
        <div className='w-full rounded-2xl bg-gradient-to-b from-gray-600 via-transparent to-transparent p-[1px]'>
          <div className='relative overflow-hidden px-12 py-12 flex gap-10 rounded-[14px] h-full w-full items-center justify-center bg-primary-foreground'>
            <h2 className='text-2xl font-black text-white'>
              Create Customer Centric Release Notes in minutes with Release Notes Manager
            </h2>
            <div className='flex items-center gap-4'>
              <Button>
                Try Interactive Demo
              </Button>
              <Button variant='outline' className='bg-transparent border-white text-white flex items-center gap-2'>
                <span>Learn More</span>
                <MoveRight className='w-[13px] h-[13px]' />
              </Button>
            </div>
            <Image 
              src={WhiteGradient}
              alt='blur gradient'
              className='absolute w-[500px] h-[500px] -top-80'
            />
          </div>
        </div>
      </div>

      <div className='w-full'>
        <Image 
          src={ValueIcon}
          alt='value icon'
          className='w-20 h-20 mb-4 mx-auto'
        />
        <h2 className='text-3xl text-primary font-black mb-3 text-center'>
          <span>Continuous Value-Adding</span><br />
          <span className='text-white'>Software Updates Is Possible Today</span>
        </h2>
        <p className='text-sm text-gray-300 mb-8 text-center'>
          Are you someone who hates change? It is commonly known that the greatest threat to the devices space is its static stance to change. Despite this, the ever increasing digitisation means that staying ahead requires being adaptable.
        </p>
        <div className="grid grid-cols-3 gap-6">
          <div className='relative overflow-hidden border border-gray-600 rounded-2xl p-8'>
            <h4 className='text-white font-semibold text-base'>
              Security Incidents
            </h4>
            <p className='font-normal text-gray-300 text-sm mt-2'>
              Deploy patches quickly for managing security vulnerabilities.
            </p>
          </div>
          <div className='relative overflow-hidden border border-gray-600 rounded-2xl p-8'>
            <h4 className='text-white font-semibold text-base'>
              Maintain Competitive Edge
            </h4> 
            <p className='font-normal text-gray-300 text-sm mt-2'>
              New features or performance improvements.
            </p>
          </div>
          <div className='relative overflow-hidden border border-gray-600 rounded-2xl p-8'>
            <h4 className='text-white font-semibold text-base'>
              Keep Version Fragments Low
            </h4> 
            <p className='font-normal text-gray-300 text-sm mt-2'>
              Lower maintenance costs and increase ease of innovation
            </p>
          </div>
          <div className='relative overflow-hidden border border-gray-600 rounded-2xl p-8'>
            <h4 className='text-white font-semibold text-base'>
              Regulatory Requirements
            </h4> 
            <p className='font-normal text-gray-300 text-sm mt-2'>
              Compliance driven feature updates.
            </p>
          </div>
          <div className='relative col-span-2 overflow-hidden border border-gray-600 rounded-2xl p-8'>
            <h4 className='text-white font-semibold text-base'>
              Major Bugs
            </h4> 
            <p className='font-normal text-gray-300 text-sm mt-2'>
              Fix known issues before other customers experience and report them.
            </p>
            <Image 
              src={WhiteGradient}
              alt='blur gradient'
              className='absolute w-96 h-96 -bottom-72'
            />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default ContinuesSection

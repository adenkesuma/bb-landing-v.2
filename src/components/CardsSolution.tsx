import { 
  UserRoundCog, 
  Bot, 
  BrainCircuit 
} from 'lucide-react'
import Image from 'next/image'

import { MaxWidthWrapper } from "."
import SolutionIcon from '@/../public/assets/svg/solution.svg'

const CardsSolution = () => {
  return (
    <MaxWidthWrapper>
      <Image 
        src={SolutionIcon}
        alt='Solution icon'
        className='w-20 h-20 mb-4 mx-auto'
      />
      <h2 className="text-3xl text-secondary-foreground text-center font-black">
        Whatever your situation we have the solution
      </h2>
      <p className="text-sm text-gray-300 mt-2 mb-8 text-center">
        Perhaps you are launching a new product and are struggling to plan your beta tests due to lack of suitable targets or poor visibility into a target&apos;s suitability? We solve that!
      </p>

      <div className="grid grid-cols-3 gap-6">
        <div className='w-full rounded-2xl bg-gradient-to-b from-gray-600 via-transparent to-transparent p-[1px]'>
          <div className='relative overflow-hidden px-12 py-12 flex rounded-[14px] h-full w-full justify-start bg-primary-foreground flex-col'>
            <div className='border border-gray-600 rounded-xl p-3 w-12'>
              <UserRoundCog className='text-secondary-foreground' />
            </div>
            <h3 className='font-semibold mt-3 text-base text-secondary-foreground'>
              Self Managed
            </h3>
            <span className="mt-2 text-sm text-white font-medium">
              Pool data from relevant data sources
            </span>
            <p className="mt-3 text-sm text-gray-300 font-regular">
              In a one-off integration, centralise information from your chosen data sources. After that you can synchronise it real time or just in time so that you have a meaningful overview of the data that dictates your update decisions.
            </p>
          </div>
        </div>


        <div className='w-full rounded-2xl bg-gradient-to-b from-gray-600 via-transparent to-transparent p-[1px]'>
          <div className='relative overflow-hidden px-12 py-12 flex rounded-[14px] h-full w-full justify-start bg-primary-foreground flex-col'>
            <div className='border border-gray-600 rounded-xl p-3 w-12'>
              <Bot className='text-secondary-foreground' />
            </div>
            <h3 className='font-semibold mt-3 text-base text-secondary-foreground'>
              Assisted Update
            </h3>
            <span className="mt-2 text-sm text-white font-medium">
              Generate Client specific Release Notes in a flash
            </span>
            <p className="mt-3 text-sm text-gray-300 font-regular">
              Perhaps you are an reseller of a third party system or are in a client facing role where you must guide your client in adopting the latest releases? Use our AI powered Release Notes Manager and reduce the headache that comes from your clients accessing generic release notes where the points most key to then get lost in the noise.
            </p>
          </div>
        </div>

        <div className='w-full rounded-2xl bg-gradient-to-b from-gray-600 via-transparent to-transparent p-[1px]'>
          <div className='relative overflow-hidden px-12 py-12 flex rounded-[14px] h-full w-full justify-start bg-primary-foreground flex-col'>
            <div className='border border-gray-600 rounded-xl p-3 w-12'>
              <BrainCircuit className='text-secondary-foreground' />
            </div>
            <h3 className='font-semibold mt-3 text-base text-secondary-foreground'>
              Fully Managed Upgrade
            </h3>
            <span className="mt-2 text-sm text-white font-medium">
              Consult Experts on your digital transformation ambition
            </span>
            <p className="mt-3 text-sm text-gray-300 font-regular">
              Are you looking for total system or process overhaul? We can help with that also. Let us guide you be it with defining you upgrade strategy to implementing the tools and solutions that allow you to realise your digital transformation strategy.
            </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default CardsSolution

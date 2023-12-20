import { 
  UserRoundCog, 
  Bot, 
  BrainCircuit 
} from 'lucide-react'

import { MaxWidthWrapper } from "."

const CardsSolution = () => {
  return (
    <MaxWidthWrapper>
      <h2 className="text-3xl text-secondary-foreground font-black text-center">
        Whatever your situation we have the solution
      </h2>
      <p className="text-sm text-gray-300 mt-2 mb-8">
        Perhaps you are launching a new product and are struggling to plan your beta tests due to lack of suitable targets or poor visibility into a target&apos;s suitability? We solve that!
      </p>

      <div className="grid grid-cols-3 gap-6">
        <div className='relative overflow-hidden border border-gray-600 rounded-2xl p-8 flex flex-col items-center justify-center'>
          <div className='border border-gray-600 rounded-xl p-3 mx-auto w-12'>
            <UserRoundCog className='text-secondary-foreground' />
          </div>
          <h3 className='font-semibold mt-3 text-base text-white'>
            Self Managed
          </h3>
        </div>
        <div className='relative overflow-hidden border border-gray-600 rounded-2xl p-8 flex flex-col items-center justify-center'>
          <div className='border border-gray-600 rounded-xl p-3 mx-auto w-12'>
            <Bot className='text-secondary-foreground' />
          </div>
          <h3 className='font-semibold mt-3 text-base text-white'>
            Assisted Update
          </h3>
        </div>
        <div className='relative overflow-hidden border border-gray-600 rounded-2xl p-8 flex flex-col items-center justify-center'>
          <div className='border border-gray-600 rounded-xl p-3 mx-auto w-12'>
            <BrainCircuit className='text-secondary-foreground' />
          </div>
          <h3 className='font-semibold mt-3 text-base text-white'>
            Fully Managed Upgrade
          </h3>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default CardsSolution

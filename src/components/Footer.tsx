import Image from 'next/image'

import { MaxWidthWrapper } from '.'
import WhiteGradient from '@/../public/assets/images/white-gradient.png'

const Footer = () => {
  return (
    <footer className='border-t border-gray-600 relative overflow-hidden mt-32 z-50'>
      <MaxWidthWrapper>
        <div className="p-8 text-white text-center">
          Footer
        </div>
      </MaxWidthWrapper>
      <Image 
        src={WhiteGradient}
        alt='white gradient'
        className='w-[1000px] h-[1000px] absolute -top-96 left-1/4'
      />
    </footer>
  )
}

export default Footer

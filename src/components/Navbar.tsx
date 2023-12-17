import Link from 'next/link'
import Image from 'next/image'

import MaxWidthWrapper from './MaxWidthWrapper'
import Logo from '@/../public/assets/logos/CompanyLogo.png'

const Navbar = () => {
  return (
    <div className="sticky z-10 top-0 inset-x-0 backdrop-blur-xl">
      <header className="relative">
        <MaxWidthWrapper className='py-3 border-b border-gray-200'>
          <div className="flex items-center">
            {/* mobile nav */}

            {/* DESKTOP NAVBAR */}
            {/* logo */}
            <Link href='/' className='flex items-center gap-3'>
              <Image 
                src={Logo}
                alt='logo'
                className='w-10 h-10'
              />
              <span className='font-bold text-black text-xl'>BetrBeta</span>
            </Link>

            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>

          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}

export default Navbar

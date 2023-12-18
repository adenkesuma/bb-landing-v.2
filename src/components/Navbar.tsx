import Link from 'next/link'
import Image from 'next/image'

import MaxWidthWrapper from './MaxWidthWrapper'
import Logo from '@/../public/assets/logos/CompanyLogo.png'
import LinkItems from './LinkItems'
import NavButtons from './NavButtons'

const Navbar = () => {
  return (
    <div className="sticky z-10 top-0 inset-x-0 backdrop-blur-xl border-b border-gray-200">
      <header className="relative">
        <MaxWidthWrapper className='py-3'>
          <div className="flex items-center justify-between">
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

            <div className='flex items-center gap-6'>
              <LinkItems />
              <NavButtons />
            </div>

          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}

export default Navbar

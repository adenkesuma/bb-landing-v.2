import Link from 'next/link'
import Image from 'next/image'

import MaxWidthWrapper from './MaxWidthWrapper'
import Logo from '@/../public/assets/logos/CompanyLogo.png'
import LinkItems from './LinkItems'
import NavButtons from './NavButtons'
import { Menu } from 'lucide-react'
import TranslateButton from './TranslateButton'

const Navbar = () => {
  return (
    <div className="sticky z-10 top-0 inset-x-0 backdrop-blur-xl bg-white/40 border-b border-gray-200">
      <header className="relative">
        <MaxWidthWrapper className='py-3'>
          <div className="flex items-center justify-between">
            <Link href='/' className='flex items-center gap-3'>
              <Image 
                src={Logo}
                alt='logo'
                className='w-10 h-10'
              />
              <span className='font-bold text-black text-xl'>BetrBeta</span>
            </Link>

            <div className='lg:flex lg:items-center gap-6 hidden'>
              <LinkItems />
              <NavButtons />
            </div>

            <div className='lg:hidden flex items-center gap-4'>
              <Menu className='w-8 h-8' />
              <TranslateButton />
            </div>

          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}

export default Navbar

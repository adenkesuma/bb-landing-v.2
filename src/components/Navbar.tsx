import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'

import {
  MaxWidthWrapper,
  TranslateButton,
  LinkItems,
  NavButtons, 
  SolutionsDropdown
} from '.'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Logo from '@/../public/assets/logos/CompanyLogo.png'

const Navbar = () => {
  return (
    <nav className="sticky z-10 top-0 inset-x-0 backdrop-blur-xl bg-black/60 border-b border-gray-600">
      <header className="relative">
        <MaxWidthWrapper className='py-3'>
          <div className="flex items-center justify-between">
            <Link href='/' className='flex items-center gap-3'>
              <Image 
                src={Logo}
                alt='logo'
                className='w-10 h-10'
              />
              <span className='font-bold text-white text-xl'>BetrBeta</span>
            </Link>

            <div className='lg:flex lg:items-center gap-6 hidden'>
              <LinkItems />
              <NavButtons />
            </div>

            <div className='text-white lg:hidden flex items-center gap-4'>
              <div>
                <Sheet>
                  <SheetTrigger asChild>
                    <Menu className='w-8 h-8' />
                  </SheetTrigger>
                  <SheetContent className='p-8 flex flex-col justify-between bg-primary-foreground text-white'>
                    <ul className='flex flex-col gap-6 mt-8'>
                      <li>
                        <Link href='/about' className="text-sm">
                          About
                        </Link>
                      </li>
                        <SolutionsDropdown />
                      <li>
                        <Link href='/blog' className="text-sm">Blog</Link>
                      </li>
                      <li>
                        <Link href='/careers' className="text-sm">Careers</Link>
                      </li>
                      <li>
                      </li>
                    </ul>
                    <NavButtons />
                  </SheetContent>
                </Sheet>
              </div>

              <TranslateButton />
            </div>

          </div>
        </MaxWidthWrapper>
      </header>
    </nav>
  )
}

export default Navbar

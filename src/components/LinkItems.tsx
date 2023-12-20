"use client"

import Link from "next/link"
import { SolutionsDropdown } from "."

const LinkItems = () => {
  return (
    <ul className='flex items-center justify-center gap-6 text-white'>
      <li>
        <Link href='/about' className="text-sm">
          About
        </Link>
      </li>
      <li>
        <SolutionsDropdown />      
      </li>
      <li>
        <Link href='/blog' className="text-sm">Blog</Link>
      </li>
      <li>
        <Link href='/careers' className="text-sm">Careers</Link>
      </li>
    </ul>
  )
}

export default LinkItems

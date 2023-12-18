"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const LinkItems = () => {
  return (
    <ul className='flex items-center justify-center gap-6'>
      <li>
        <Link href='/about' className="text-sm">
          About
        </Link>
      </li>
      <li>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <p className="flex items-center gap-2">
              <span className="text-sm">Solutions</span>
              <ChevronDown className="w-[18px] h-[18px]" />
            </p>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 mr-32 mt-1 rounded-lg shadow-none">
            <DropdownMenuCheckboxItem>
              Priority Updates Mobile App
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>
              Release Notes Manager
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>
              Consultancy Service
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>
              Technical Writers
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
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

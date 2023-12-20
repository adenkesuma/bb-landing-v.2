import { ChevronDown } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const SolutionsDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <p className="flex items-center gap-2">
          <span className="text-sm">Solutions</span>
          <ChevronDown className="w-[18px] h-[18px]" />
        </p>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-1 rounded-lg shadow-none bg-black/60 text-white backdrop-blur-md border-gray-600">
        <DropdownMenuCheckboxItem className="pl-2">
          Priority Updates Mobile App
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem className="pl-2">
          Release Notes Manager
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem className="pl-2">
          Consultancy Service
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem className="pl-2">
          Technical Writers
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default SolutionsDropdown

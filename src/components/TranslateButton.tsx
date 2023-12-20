import { Languages } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const TranslateButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* <Button variant="outline" className="px-3 bg-transparent"> */}
        <div className="p-3 bg-transparent">
          <Languages className="w-5 h-5 text-white" />
        </div>
        {/* </Button> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-2 mt-1 shadow-none bg-primary-foreground/60 text-white backdrop-blur-md border-gray-900">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span>English</span>
            <DropdownMenuShortcut>SG</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Tagalog</span>
            <DropdownMenuShortcut>PH</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>العربية</span>
            <DropdownMenuShortcut>SA</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Français</span>
            <DropdownMenuShortcut>FR</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>עברית</span>
            <DropdownMenuShortcut>IL</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Bahasa Indonesia</span>
            <DropdownMenuShortcut>ID</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>简体中文</span>
            <DropdownMenuShortcut>CN</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default TranslateButton

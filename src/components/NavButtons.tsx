import TranslateButton from "./TranslateButton"
import { Button } from "./ui/button"

const NavButtons = () => {
  return (
    <div className="flex lg:items-center gap-4 flex-col lg:flex-row">
      <Button variant='outline' className="bg-transparent border-white text-white">Book a Demo</Button>
      <Button>Sign Up</Button>
      <div className="hidden lg:block">
        <TranslateButton />
      </div>
    </div>
  )
}

export default NavButtons

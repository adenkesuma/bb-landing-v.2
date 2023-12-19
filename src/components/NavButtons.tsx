import TranslateButton from "./TranslateButton"
import { Button } from "./ui/button"

const NavButtons = () => {
  return (
    <div className="flex items-center gap-4">
      <Button variant='outline' className="border border-primary text-primary hover:text-white hover:bg-primary hover:border-primary bg-white/50">Book a Demo</Button>
      <Button>Sign Up</Button>
      <TranslateButton />
    </div>
  )
}

export default NavButtons

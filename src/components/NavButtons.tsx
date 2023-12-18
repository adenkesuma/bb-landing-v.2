import TranslateButton from "./TranslateButton"
import { Button } from "./ui/button"

const NavButtons = () => {
  return (
    <div className="flex items-center gap-4">
      <TranslateButton />
      <Button variant='outline' className="border border-primary text-primary hover:text-white hover:bg-primary hover:border-primary bg-white">Book a Demo</Button>
      <Button>Sign Up</Button>
      <Button variant='link'>Sign In</Button>
    </div>
  )
}

export default NavButtons

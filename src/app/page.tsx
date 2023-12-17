import Image from 'next/image'

import Logo from "@/../public/assets/logos/CompanyLogo.png"

export default function Home() {
  return (
    <main className="flex h-[200vh] flex-col items-center justify-between p-24">
      <Image src={Logo} alt="logo" width={1000} height={1000} /> 
    </main>
  )
}

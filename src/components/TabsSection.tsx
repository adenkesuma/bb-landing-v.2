import Image from "next/image"
import Link from "next/link"
import { Check, MoveRight } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MaxWidthWrapper } from "."
import GooglePlayStore from '@/../public/assets/svg/GooglePlay.svg'
import { Button } from "./ui/button"

const TabsSection = () => {
  return (
    <MaxWidthWrapper className="mt-40">
      <h2 className='text-3xl text-white font-black mb-2'>
        Integrating the Power of <br /><span className="text-primary">Tools and Services for Collective Success</span>
      </h2>
      <p className='text-sm text-gray-300 mb-8'>
        Operational Efficiency Transformation: Enhancing Performance through Intelligent Tool Utilization
      </p>

      <Tabs defaultValue="account" className='w-full'>
        <TabsList className="px-0 mx-0 bg-transparent">
          <TabsTrigger value="account" className="text-base font-bold w-32 text-white">
            Tools
          </TabsTrigger>
          <TabsTrigger value="password" className="text-base font-bold w-32 text-white">
            Services
          </TabsTrigger>
        </TabsList>

        {/* tools */}
        <TabsContent value="account" className='text-white w-full mt-6'>
          <div className="grid grid-cols-2 gap-8">
            <div className="rounded-xl border border-gray-600 p-8">
              <h2 className="text-xl mb-2 font-bold">
                Priority Updates Mobile App
              </h2>
              <span className="text-8xl font-bold text-green-500">Free*</span>
              <h3 className="mt-3 text-base font-medium text-white">
                Try our Mobile App. Free for a limited period to first users!
              </h3>
              <ul className="mt-3 flex gap-2 flex-col">
                <li className="flex items-top gap-2">
                  <Check className="w-4" />
                  <span className="text-gray-300 text-sm">
                    Get notified when a meaningful app update comes out, e.g. security improvements
                  </span>
                </li>
                <li className="flex items-top gap-2">
                  <Check className="w-4" />
                  <span className="text-gray-300 text-sm">
                    Android only (iOS coming Soon)
                  </span>
                </li>
                <li className="flex items-top gap-2">
                  <Check className="w-4" />
                  <span className="text-gray-300 text-sm">
                    No credit card needed
                  </span>
                </li>
                <li className="flex items-top gap-2">
                  <Check className="w-4" />
                  <span className="text-gray-300 text-sm">
                    No account creation needed
                  </span>
                </li>
              </ul>

              <span className="mt-7 block">Click the button below to initiate the application download</span>
              <Link href='https://play.google.com/store/apps/details?id=com.betrbeta.priorityupdates' target="_blank">
                <Button
                  variant='outline'
                  className="flex items-center gap-2 justify-center w-full mt-4 border border-white text-white bg-transparent"
                >
                  <Image 
                    src={GooglePlayStore}
                    alt='google play store'
                    className="w-5 block"
                  />
                  <span>Google Play</span>
                </Button>
              </Link>
            </div>

            <div className="rounded-xl border border-gray-600 p-6">
              <h2 className="text-xl mb-2 font-bold">
                Release Notes Manager
              </h2>
              <span className="text-9xl font-bold text-primary">~</span>
              <h3 className="mt-2 text-base font-medium text-white">
               Try out Release Notes Manager web application
              </h3>

              <ul className="mt-3 flex gap-2 flex-col">
                <li className="flex items-top gap-2">
                  <Check className="w-4" />
                  <span className="text-gray-300 text-sm">
                   Customise product release notes online
                  </span>
                </li>
                <li className="flex items-top gap-2">
                  <Check className="w-4" />
                  <span className="text-gray-300 text-sm">
                    Easy Release notes uploads
                  </span>
                </li>
                <li className="flex items-top gap-2">
                  <Check className="w-4" />
                  <span className="text-gray-300 text-sm">
                    Export your finished version to PDF
                  </span>
                </li>
                <li className="flex items-top gap-2">
                  <Check className="w-4" />
                  <span className="text-gray-300 text-sm">
                    Try for free, no credit card required
                  </span>
                </li>
              </ul>

              <span className="mt-6 block">Click the button below to Try Interactive Demo</span>
              <Link href='https://release-notes-manager.betrbeta.com/home' target="_blank">
                <Button className="mt-4 w-full">
                  Try Interactive Demo
                </Button>
              </Link>
            </div>
          </div>
        </TabsContent>

        {/* services */}
        <TabsContent value="password" className='text-white w-full mt-6'>
          <div className="grid grid-cols-2 gap-8">
            <div className="rounded-xl border border-gray-600 p-8">
              <h2 className="text-xl mb-2 font-bold">
                Consultancy Service
              </h2>
              <span className="text-8xl font-bold text-secondary-foreground">$250/ph</span>
              <h3 className="mt-3 text-base font-medium text-white">
                1 hour free consultancy for first time customers.
              </h3>
              <ul className="mt-3 flex gap-2 flex-col">
                <li className="flex items-top gap-2">
                  <Check className="w-4" />
                  <span className="text-gray-300 text-sm">
                    No risk, no obligations
                  </span>
                </li>
                <li className="flex items-top gap-2">
                  <Check className="w-4" />
                  <span className="text-gray-300 text-sm">
                    Leave with actionable insights
                  </span>
                </li>
                <li className="flex items-top gap-2">
                  <Check className="w-4" />
                  <span className="text-gray-300 text-sm">
                    Speak with experts with {">"} 11years expertise
                  </span>
                </li>
                <li className="flex items-top gap-2">
                  <Check className="w-4" />
                  <span className="text-gray-300 text-sm">
                    Discounted onboarding rates for platform
                  </span>
                </li>
              </ul>

              <span className="mt-16 block">Click the button below set schedule</span>
              <Link href="/calendly" target="_blank">
                <Button
                  variant='outline'
                  className="flex items-center gap-2 justify-center w-full mt-4 border border-white text-white bg-transparent"
                >
                  <span>Select</span>
                  <MoveRight className="w-[13px] h-[13px]" />
                </Button>
              </Link>
            </div>

            <div className="rounded-xl border border-gray-600 p-6">
              <h2 className="text-xl mb-2 font-bold">
                Technical Writers
              </h2>
              <span className="text-9xl font-bold text-primary">~</span>
              <h3 className="mt-2 text-base font-medium text-white">
                Access writers with backgrounds in diverse industries.
              </h3>

              <ul className="mt-3 flex gap-2 flex-col">
                <li className="flex items-top gap-2">
                  <Check className="w-4" />
                  <span className="text-gray-300 text-sm">
                    Save the effort and cost of training in-house writers
                  </span>
                </li>
                <li className="flex items-top gap-2">
                  <Check className="w-4" />
                  <span className="text-gray-300 text-sm">
                    Book a writer in minutes, no waiting for one to become free internally
                  </span>
                </li>
                <li className="flex items-top gap-2">
                  <Check className="w-4" />
                  <span className="text-gray-300 text-sm">
                    Gain a fresh and objective pair of eyes that is more able to see your content from your audience&#39;s point of view
                  </span>
                </li>
                <li className="flex items-top gap-2">
                  <Check className="w-4" />
                  <span className="text-gray-300 text-sm">
                    Benefit from our ability to easily scale to accommodate your varying workloads
                  </span>
                </li>
              </ul>

              <span className="mt-6 block">Click the button below to Try Interactive Demo</span>
              <Button className="mt-4 w-full">
                  Try Interactive Demo
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </MaxWidthWrapper>
  )
}

export default TabsSection

"use client"

import Image from "next/image"
import { Check } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MaxWidthWrapper } from "."
import GooglePlayStore from '@/../public/assets/svg/GooglePlay.svg'
import { Button } from "./ui/button"

const TabsSection = () => {
  const handleRedirectPlayStore = () => {
    window.open('https://play.google.com/store/apps/details?id=com.betrbeta.priorityupdates', '_blank')
  }

  return (
    <MaxWidthWrapper className="mt-40">
      <h2 className='text-3xl text-white font-black mb-2'>
        Integrating the Power of <br /><span className="text-primary">Tools and Services for Collective Success</span>
      </h2>
      <p className='text-sm text-gray-300 mb-8'>
        Operational Efficiency Transformation: Enhancing Performance through Intelligent Tool Utilization
      </p>

      <Tabs defaultValue="account" className='w-full'>
        <TabsList>
          <TabsTrigger value="account">Tools</TabsTrigger>
          <TabsTrigger value="password">Services</TabsTrigger>
        </TabsList>

        {/* tools */}
        <TabsContent value="account" className='text-white w-full mt-6'>
          <div className="grid grid-cols-2 gap-8">
            <div className="rounded-xl border border-gray-600 p-8">
              <h2 className="text-xl mb-2 font-bold">
                Priority Updates Mobile App
              </h2>
              <span className="text-8xl font-bold text-green-600">Free*</span>
              <h3 className="mt-2 text-base font-medium text-white">
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

              <span className="mt-6 block">Click the button below to initiate the application download</span>
              <Button
                variant='outline'
                onClick={handleRedirectPlayStore}
                className="flex items-center gap-2 justify-center w-full mt-4"
              >
                <Image 
                  src={GooglePlayStore}
                  alt='google play store'
                  className="w-5 block"
                />
                <span className="text-secondary">Google Play</span>
              </Button>
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
                <Button className="mt-4 w-full">
                  Try Interactive Demo
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* services */}
        <TabsContent value="password" className='text-white'>Change your password here.</TabsContent>
      </Tabs>
    </MaxWidthWrapper>
  )
}

export default TabsSection

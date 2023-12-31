'use client'
import { BagTimelineIcon, DoordashIcon, DoorDashTimelineIcon, HomeTimelineIcon } from './icons'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col max-w-[250px] bg-white px-6 py-4 rounded-3xl drop-shadow-xl gap-1">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">McDonald&apos;s</h1>
          <DoordashIcon />
        </div>
        <h1 className="text-xl font-medium text-gray-600">Your dasher is on the way!</h1>
        <div className="pt-5">
          <div className="flex">
            <div className="bg-[#eb1600] w-full h-1.5 rounded-l-md"></div>
            <div className="bg-gray-100 w-[40%] h-1.5 rounded-r-md"></div>
          </div>
          <div className="flex justify-between -mt-[24px]">
            <DoorDashTimelineIcon />
            <HomeTimelineIcon />
            <BagTimelineIcon />
          </div>
        </div>
        <div className="flex flex-col pt-1">
          <h1 className="text-xl font-medium">Estimated Delivery</h1>
          <h1 className="text-2xl font-medium text-[#eb1600]">7:32 PM</h1>
        </div>
      </div>
    </div>
  )
}

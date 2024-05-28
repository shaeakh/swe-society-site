
'use client'
import React from 'react'
import { WavyBackground } from '../ui/wavy-background'
import { AnimatedTooltip } from '../ui/animated-tooltip'
const ECMemberCarousel = () => {
  return (
    <div className='relative h-[40rem] overflow-hidden flex items-center justify-center'>
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">

        <h2 className='text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8'>
        Current Executive Committee
        </h2>
        <p className='text-base md:text-lg text-white text-center mb-4'>
            Discover the talented professional who will now guide our software society
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>

      </WavyBackground>
    </div>
  )
}

export default ECMemberCarousel
const people = [
  {
    id: 1,
    name: "SIAM",
    designation: "VICE PRESIDENT",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Mehraj",
    designation: "GENERAL SECRETARY",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Nixon",
    designation: "Publication secretary",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Gilman",
    designation: "ASSISTANT PUBLICATION SECRETARY",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "EMRAN",
    designation: "Organizing secretary",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Shawon",
    designation: "Sports secretary",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];
 

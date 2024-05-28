'use client'
import React from 'react'
import { WavyBackground } from '../ui/wavy-background'
import { AnimatedTooltip } from '../ui/animated-tooltip'
const Instructor = () => {
  return (
    <div className='relative h-[40rem] overflow-hidden flex items-center justify-center'>
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">

        <h2 className='text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8'>
            Meet Our Instructor
        </h2>
        <p className='text-base md:text-lg text-white text-center mb-4'>
            Discover the talented professional who will guide your musical journey
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>

      </WavyBackground>
    </div>
  )
}

export default Instructor
const people
   =[
      {
          "id" :1,
          "title" : "VP",
          "slug" : "VICE PRESIDENT",
          "description": "Vice president of society",
          "price":99.99,
          "intructor": "SIAM ",
          "isFeatured":true,
          "image" : "https://as2.ftcdn.net/v2/jpg/00/64/91/37/1000_F_64913707_PNS2WMobSFvvUgZrr4LuXbPUmpTSlBl1.jpg"

      },
      {
          "id": 2,
          "title": "GS",
          "slug": "GENERAL SECRETARY",
          "description": "General secretary of society.",
          "price": 79.99,
          "instructor": "Mehraj",
          "isFeatured": true,
          "image": "https://plus.unsplash.com/premium_photo-1682326302625-1e5b7826fb3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          "id": 3,
          "title": "PS",
          "slug": "Publication secretary",
          "description": "pubication secretary of software society",
          "price": 149.99,
          "instructor": "Nixon",
          "isFeatured": true,
          "image": "https://as2.ftcdn.net/v2/jpg/02/23/58/92/1000_F_223589237_s9k0aLPKk85Hh8UzggpUCfZaK8i4IKbF.jpg"
        },
        {
          "id": 4,
          "title": "APS",
          "slug": "ASSISTANT PUBLICATION SECRETARY",
          "description": "ASSISTANT PUBLICATION SECRETARY of swe society",
          "price": 79.99,
          "instructor": "Gilman",
          "isFeatured": true,
          "image": "https://as1.ftcdn.net/v2/jpg/01/71/47/75/1000_F_171477589_M3dO1W5aIEO6Wzfw7elnsu7F9nlRgTx7.jpg"
        },
        {
          "id": 5,
          "title": "SS",
          "slug": "Sports secratary",
          "description": "Sports secratary of swe society",
          "price": 129.99,
          "instructor": "Shawon",
          "isFeatured": true,
          "image": "https://as2.ftcdn.net/v2/jpg/01/38/79/55/1000_F_138795587_RKTKnpuDToxHqfQGCTJhzkIGJNt4Z9of.jpg"
        }
        
        
        
        
        
        

        
        
  ]

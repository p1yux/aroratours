'use client'

import { useState } from 'react'
import Image from 'next/image'
import hawamehal from '@/assets/images/hawamehal.jpeg'
import kedarnath from '@/assets/images/kedarnath.jpeg'
import mountain from '@/assets/images/mountain.jpeg'
import haridwar from '@/assets/images/haridwar.jpeg'
import ladakh from '@/assets/images/ladakh.jpeg'
import scenery from '@/assets/images/scenery.jpg'





const slideData = [
  {
    src: hawamehal,
    alt: 'Hawa Mahal'
  },
  {
    src: kedarnath,
    alt: 'Kedarnath Temple'
  },
  {
    src: mountain,
    alt: 'Mountains'
  }
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="relative">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-lg shadow-lg relative">
              <div className="h-64 sm:h-80 lg:h-96 relative">
                <div className="absolute inset-0 flex items-center justify-between z-10">
                  <button
                    className="bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 font-bold py-2 px-4 rounded-l"
                    onClick={() => setCurrentSlide((prev) => (prev === 0 ? slideData.length - 1 : prev - 1))}
                  >
                    Prev
                  </button>
                  <button
                    className="bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 font-bold py-2 px-4 rounded-r"
                    onClick={() => setCurrentSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1))}
                  >
                    Next
                  </button>
                </div>
                {slideData.map((slide, index) => (
                  <Image
                    key={index}
                    className={`h-full w-full object-cover transition-opacity duration-1000 ${
                      currentSlide === index ? 'opacity-100' : 'opacity-0'
                    }`}
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                  />
                ))}
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
                <div className="flex items-center justify-center h-full">
                  <h2 className="text-3xl sm:text-4xl font-semibold text-white text-center px-4 relative z-10">
                    Explore the Beauty of Nature
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          <div
            aria-hidden="true"
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 sm:pt-32 lg:px-8 lg:pt-20">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                    Tour Operators and Travel Agents
                  </h1>
                  <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    Discover the beauty and diversity of India with <strong>Arora Tours and travels</strong>, your trusted <strong>travel agents in Delhi</strong> for offering unforgettable travel experiences. Be it the majestic peaks of Mountains, our packages cover the length and breadth of this incredible country. If you are seeking a cultural immersion in Rajasthan's royal palaces, we have a tour package for you. If you want a spiritual journey, we have the perfect itinerary for you. 
                    At Arora Tours and travels, we prioritize your comfort and satisfaction. Being one of the top travel agents in Delhi, India, our expert team crafts each tour package with attention to detail, ensuring a seamless and enriching travel experience. Enjoy luxury accommodations, tours, and personalized services that make your trip truly special. Choose Arora Tours and travels for your next adventure and let us turn your travel dreams into reality. 
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <div className="aspect-[2/3] w-full relative">
                        <Image
                          src={hawamehal}
                          alt="Hawa Mahal"
                          fill
                          className="rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                      </div>
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <div className="aspect-[2/3] w-full relative">
                        <Image
                          src={mountain}
                          alt="Mountains"
                          fill
                          className="rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                      </div>
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <div className="aspect-[2/3] w-full relative">
                        <Image
                          src={kedarnath}
                          alt="Kedarnath"
                          fill
                          className="rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                      </div>
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <div className="aspect-[2/3] w-full relative">
                        <Image
                          src={haridwar}
                          alt="Haridwar"
                          fill
                          className="rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                      </div>
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <div className="aspect-[2/3] w-full relative">
                        <Image
                          src={ladakh}
                          alt="Ladakh"
                          fill
                          className="rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                      </div>
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-2 sm:mt-2 xl:mx-auto xl:max-w-7xl xl:px-8">
          <Image
            alt="scenery"
            src={scenery}
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"

          />
        </div>
      </main>

      
    </div>
  )
}

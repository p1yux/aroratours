'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '@/assets/images/logo.png'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About Us', href: '/contact', current: false },
  { name: 'Contact Us', href: '/contact#contact-us', current: false },
  { name: 'Trips', href: '/', current: false },
  { name: 'Bookings', href: '/', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Disclosure as="nav" className={`sticky top-0 z-50 shadow-xl transition-colors duration-300 ${
      isScrolled ? 'bg-blue-600/80 backdrop-blur-sm' : 'bg-blue-600'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 sm:h-18 lg:h-20 items-center justify-between">
          <div className="absolute inset-y-0 right-0 items-center max-[866px]:block hidden mt-3 mr-2">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          
          <div className="flex flex-1 items-center justify-between">
            <div className="flex items-center justify-center max-[866px]:justify-center min-[867px]:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <Image
                  alt="Your Company"
                  src={logo}
                  className="h-14 sm:h-16 lg:h-18 w-auto invert hover:opacity-50 transition-opacity rounded-full p-1 shadow-lg shadow-gray-950/50"
                  width={150}
                  height={150}
                  priority
                />
                <span className="text-white text-lg sm:text-xl lg:text-2xl font-bold ml-3 max-[866px]:hidden">
                  Arora Tour and Travels
                </span>
                <span className="text-white text-base font-bold ml-2 min-[867px]:hidden">
                  Arora Tour and Travels
                </span>
              </div>
            </div>
            
            <div className="hidden min-[867px]:ml-6 min-[867px]:block">
              <div className="flex space-x-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-4 py-2 text-sm sm:text-base lg:text-lg font-medium transition-colors duration-200',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="min-[867px]:hidden">
        <div className="space-y-1 px-4 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-4 py-2 text-base font-medium transition-colors duration-200',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

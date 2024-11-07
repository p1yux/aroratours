'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '@/assets/images/logo.png'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About Us', href: '/#footer-section', current: false },
  { name: 'Contact Us', href: '/contact', current: false },
  { name: 'Trips', href: '/#destination-cards', current: false },
  { name: 'Bookings', href: '/contact', current: false },
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
      isScrolled ? 'bg-[#272343]/80 backdrop-blur-sm' : 'bg-[#272343]'
    }`}>
      {({ open }) => (
        <>
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
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center justify-center max-[866px]:justify-center min-[867px]:justify-start"
                >
                  <div className="flex-shrink-0 flex items-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        alt="Your Company"
                        src={logo}
                        className="h-14 sm:h-16 lg:h-18 w-auto invert hover:opacity-50 transition-opacity rounded-full p-1 shadow-lg shadow-gray-950/50"
                        width={150}
                        height={150}
                        priority
                      />
                    </motion.div>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="text-white text-lg sm:text-xl lg:text-2xl font-bold ml-3 max-[866px]:hidden font-['Poppins'] tracking-wide leading-snug"
                    >
                      Arora Tour and Travels
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="text-white text-base font-bold ml-2 min-[867px]:hidden font-['Poppins'] tracking-wide leading-snug"
                    >
                      Arora Tour and Travels
                    </motion.span>
                  </div>
                </motion.div>
                
                <div className="hidden min-[867px]:ml-6 min-[867px]:block">
                  <div className="flex space-x-6">
                    {navigation.map((item, index) => (
                      <motion.a
                        key={item.name}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        whileHover={{ y: -2 }}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-4 py-2 text-sm sm:text-base lg:text-lg font-medium transition-colors duration-200',
                        )}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <DisclosurePanel static className="min-[867px]:hidden">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-1 px-4 pb-3 pt-2"
                >
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <DisclosureButton
                        as="a"
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'block rounded-md px-4 py-2 text-base font-medium transition-colors duration-200 w-full',
                        )}
                      >
                        {item.name}
                      </DisclosureButton>
                    </motion.div>
                  ))}
                </motion.div>
              </DisclosurePanel>
            )}
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'

const navigation = [
  {
    title: 'Quick Links',
    links: [
      { title: 'Home', href: '/' },
      { title: 'About Us', href: '/about' },
      { title: 'Contact Us', href: '/contact' },
      { title: 'Trips', href: '/' },
      { title: 'Bookings', href: '/contact' },
    ],
  },
  {
    title: 'Popular Destinations',
    links: [
      { title: 'Rajasthan', href: '#' },
      { title: 'Kedarnath', href: '#' },
      { title: 'Haridwar', href: '#' },
      { title: 'Ladakh', href: '#' },
    ],
  },
  {
    title: 'Contact Info',
    links: [
      { title: 'Phone: +91 9990349353', href: 'tel:+919990349353' },
      { title: 'WhatsApp: +91 9990349353', href: 'https://wa.me/919990349353' },
      { title: 'Email: soulpiyush09@gmail.com', href: 'mailto:soulpiyush09@gmail.com' },
    ],
  },
]

export default function FooterNav() {
  return (
    <footer id="footer-section" className="bg-[#272343] text-white rounded-t-3xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-start transform hover:scale-105 transition-transform duration-300">
            <Link href="/" className="flex items-center mb-4 hover:opacity-80 transition-opacity">
              <Image
                src={logo}
                alt="Arora Tour and Travels"
                className="h-12 w-auto invert hover:rotate-3 transition-transform duration-300"
                width={48}
                height={48}
              />
              <span className="ml-3 text-lg font-bold font-['Poppins']">
                Arora Tour and Travels
              </span>
            </Link>
            <p className="text-gray-300 text-sm hover:text-white transition-colors duration-300">
              Your trusted travel partner for unforgettable journeys across India.
              We specialize in creating memorable travel experiences.
            </p>
          </div>

          {/* Navigation Links */}
          {navigation.map((section, index) => (
            <div 
              key={index}
              className="transform hover:translate-y-[-5px] transition-transform duration-300"
            >
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-all duration-300 hover:pl-2 block"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
              © {new Date().getFullYear()} Arora Tour and Travels. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link 
                    href="/privacy" 
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/terms" 
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300 hover:underline"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

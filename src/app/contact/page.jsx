"use client"
import { useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import ContactForm from "@/components/custom/forms/contact/ContactForm"
import AboutUs from "@/components/custom/forms/contact/AboutUs"
import NavBar from "@/components/custom/navbars/mainNav/NavBar"
import FooterNav from "@/components/custom/navbars/footerNav/FooterNav"
import Image from "next/image"
import scenery from "@/assets/images/scenery.jpg"

// Separate component for scroll handling
function ScrollHandler() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const element = document.getElementById(hash.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [searchParams])

  return null
}

export default function Contact() {
  return (
    <>
      <NavBar />
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>
      <div className="relative w-full h-full p-6 flex flex-col items-center justify-center bg-gray-100">
        <Image
          src={scenery}
          alt="Contact Background"
          fill
          className="absolute inset-0 z-0 opacity-20 object-cover"
        />
        <motion.div
          className="relative w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-6 z-10"
          id="about-us"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AboutUs />
        </motion.div>
        
        <motion.div
          className="relative w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 z-10"
          id="contact-us"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ContactForm />
        </motion.div>
      </div>
      <div className="rounded-t-3xl">
        <FooterNav />
      </div> 
    </>
  )
}

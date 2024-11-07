"use client"
import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import ContactForm from "@/components/custom/forms/contact/ContactForm"
import AboutUs from "@/components/custom/forms/contact/AboutUs"
import NavBar from "@/components/custom/navbars/mainNav/NavBar"

export default function Contact() {
  const searchParams = useSearchParams()

  useEffect(() => {
    // Get the hash from the URL
    const hash = window.location.hash
    if (hash) {
      // Remove the # symbol
      const element = document.getElementById(hash.slice(1))
      if (element) {
        // Smooth scroll to the element
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [searchParams])

  return (
    <>
      <NavBar />
      <div className="w-full h-full p-6 flex flex-col items-center justify-center bg-gray-100">
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 mb-6" id="about-us">
          <AboutUs />
        </div>
        
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6" id="contact-us">
          <ContactForm />
        </div>
      </div>
    </>
  )
}

"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function GsapInitializer() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      // Initialize any global GSAP animations or settings here

      // Reveal animations for elements with the gsap-reveal class
      const revealElements = document.querySelectorAll(".gsap-reveal")

      revealElements.forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 50,
            visibility: "hidden",
          },
          {
            opacity: 1,
            y: 0,
            visibility: "visible",
            duration: 0.8,
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
            },
          },
        )
      })

      // Clean up ScrollTrigger on component unmount
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }
  }, [])

  return null
}

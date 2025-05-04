"use client"

import { useEffect } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function Sponsors() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo(
        ".sponsors-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".sponsors-section",
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".sponsors-subtitle",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: ".sponsors-section",
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".sponsor-logo",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".sponsors-grid",
            start: "top 90%",
          },
        },
      )
    }
  }, [])

  return (
    <section className="sponsors-section py-20 md:py-32 bg-muted/30 relative overflow-hidden noise-bg">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="sponsors-title text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Sponsors</span> & Partners
          </h2>
          <p className="sponsors-subtitle text-lg text-muted-foreground">
            Cherrypop Festival didukung oleh brand dan organisasi terkemuka
          </p>
        </div>

        <div className="sponsors-grid grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="sponsor-logo flex items-center justify-center p-6 bg-card rounded-xl border h-24 md:h-32"
            >
              <Image
                src={`/placeholder.svg?height=80&width=160&text=Sponsor+${index + 1}`}
                alt={`Sponsor ${index + 1}`}
                width={160}
                height={80}
                className="max-h-full w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2">Media Partners</h3>
          </div>

          <div className="marquee-container py-4">
            <div className="marquee-content">
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="inline-block mx-8">
                  <Image
                    src={`/placeholder.svg?height=40&width=120&text=Media+${index + 1}`}
                    alt={`Media Partner ${index + 1}`}
                    width={120}
                    height={40}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={`dup-${index}`} className="inline-block mx-8">
                  <Image
                    src={`/placeholder.svg?height=40&width=120&text=Media+${index + 1}`}
                    alt={`Media Partner ${index + 1}`}
                    width={120}
                    height={40}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

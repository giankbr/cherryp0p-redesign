"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      const tl = gsap.timeline()

      tl.fromTo(".hero-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
        .fromTo(".hero-subtitle", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.8")
        .fromTo(
          ".hero-date",
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
          "-=0.8",
        )
        .fromTo(
          ".hero-button",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.2 },
          "-=0.8",
        )
        .fromTo(
          ".hero-image",
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" },
          "-=1",
        )

      // Parallax effect for the background
      gsap.to(".hero-bg", {
        y: 200,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
    }
  }, [])

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden noise-bg">
      {/* Background Image with Parallax */}
      <div className="hero-bg absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Festival crowd"
          fill
          className="object-cover opacity-20"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/50 to-background z-0"></div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="flex flex-col items-center text-center">
          <div className="hero-date mb-6 inline-block bg-accent/20 text-accent-foreground px-6 py-3 rounded-full font-bold">
            AUGUST 15-17, 2025 • YOGYAKARTA
          </div>
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
            <span className="block gradient-text">CHERRYPOP</span>
            <span className="block text-outline">FESTIVAL</span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Panggung bagi kreativitas subkultur anak muda. Dari musisi hingga pembuat film, dari perupa hingga pegiat
            kuliner, berbagai disiplin bertemu untuk berkreasi, berdialog, dan berbagi energi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button className="hero-button text-lg px-8 py-6 bg-primary hover:bg-primary/90" size="lg">
              Get Tickets
            </Button>
            <Button className="hero-button text-lg px-8 py-6" variant="outline" size="lg">
              View Lineup
            </Button>
          </div>

          <div className="hero-image relative w-full max-w-4xl mx-auto">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Cherrypop Festival"
              width={1200}
              height={600}
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-background border rounded-xl p-3 shadow-lg md:p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center md:w-16 md:h-16">
                  <span className="text-secondary font-bold md:text-xl">10K+</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground md:text-sm">Attendees</p>
                  <p className="font-semibold md:text-lg">Last Festival</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </div>
  )
}

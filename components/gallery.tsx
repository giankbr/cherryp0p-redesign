"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function Gallery() {
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo(
        ".gallery-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: "#gallery",
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".gallery-subtitle",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: "#gallery",
            start: "top 80%",
          },
        },
      )

      // Animate gallery images when they come into view
      const images = document.querySelectorAll(".image-grid-item")
      images.forEach((image, index) => {
        gsap.fromTo(
          image,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.05,
            scrollTrigger: {
              trigger: image,
              start: "top 90%",
            },
          },
        )
      })
    }
  }, [])

  const galleryImages = [
    { src: "/placeholder.svg?height=400&width=600", size: "large" },
    { src: "/placeholder.svg?height=400&width=400", size: "normal" },
    { src: "/placeholder.svg?height=400&width=400", size: "normal" },
    { src: "/placeholder.svg?height=400&width=600", size: "wide" },
    { src: "/placeholder.svg?height=800&width=400", size: "tall" },
    { src: "/placeholder.svg?height=400&width=400", size: "normal" },
    { src: "/placeholder.svg?height=400&width=400", size: "normal" },
    { src: "/placeholder.svg?height=400&width=600", size: "wide" },
    { src: "/placeholder.svg?height=400&width=400", size: "normal" },
    { src: "/placeholder.svg?height=800&width=800", size: "large" },
  ]

  return (
    <section id="gallery" className="py-20 md:py-32 bg-muted/30 overflow-hidden relative noise-bg">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="gallery-title text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Gallery</span>
          </h2>
          <p className="gallery-subtitle text-lg text-muted-foreground">
            Momen-momen tak terlupakan dari Cherrypop Festival tahun-tahun sebelumnya
          </p>
        </div>

        <div ref={galleryRef} className="image-grid">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`image-grid-item ${
                image.size === "wide" ? "wide" : image.size === "tall" ? "tall" : image.size === "large" ? "large" : ""
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={`Festival moment ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

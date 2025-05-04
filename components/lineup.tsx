"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function Lineup() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo(
        ".lineup-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: "#lineup",
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".lineup-subtitle",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: "#lineup",
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".artist-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".lineup-grid",
            start: "top 80%",
          },
        },
      )
    }
  }, [])

  const artists = [
    {
      name: "Hindia",
      image: "/placeholder.svg?height=400&width=400",
      day: "Day 1",
      time: "9:30 PM",
      isFeatured: true,
    },
    {
      name: "Efek Rumah Kaca",
      image: "/placeholder.svg?height=400&width=400",
      day: "Day 2",
      time: "8:00 PM",
    },
    {
      name: "Barasuara",
      image: "/placeholder.svg?height=400&width=400",
      day: "Day 1",
      time: "7:00 PM",
    },
    {
      name: "Danilla",
      image: "/placeholder.svg?height=400&width=400",
      day: "Day 3",
      time: "6:30 PM",
    },
    {
      name: "Lomba Sihir",
      image: "/placeholder.svg?height=400&width=400",
      day: "Day 2",
      time: "5:00 PM",
    },
    {
      name: "Feast",
      image: "/placeholder.svg?height=400&width=400",
      day: "Day 3",
      time: "7:30 PM",
      isFeatured: true,
    },
    {
      name: "Kunto Aji",
      image: "/placeholder.svg?height=400&width=400",
      day: "Day 1",
      time: "6:00 PM",
    },
    {
      name: "Isyana Sarasvati",
      image: "/placeholder.svg?height=400&width=400",
      day: "Day 2",
      time: "9:00 PM",
    },
  ]

  return (
    <section id="lineup" className="py-20 md:py-32 relative overflow-hidden noise-bg">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="lineup-title text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">LINEUP</span> 2025
          </h2>
          <p className="lineup-subtitle text-lg text-muted-foreground">
            Musisi terbaik Indonesia akan tampil di panggung Cherrypop Festival 2025
          </p>
        </div>

        <div className="lineup-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {artists.map((artist, index) => (
            <Card
              key={index}
              className={`artist-card overflow-hidden border-2 transition-all duration-300 ${
                artist.isFeatured ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className="relative aspect-square">
                <Image
                  src={artist.image || "/placeholder.svg"}
                  alt={artist.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white">{artist.name}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="bg-primary/20 text-white border-primary/50">
                      {artist.day}
                    </Badge>
                    <span className="text-sm text-white/80">{artist.time}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">...and many more to be announced!</p>
        </div>
      </div>
    </section>
  )
}

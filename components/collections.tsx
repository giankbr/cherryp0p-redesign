"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function Collections() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo(
        ".collections-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: "#collections",
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".collections-description",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: "#collections",
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".collection-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".collections-grid",
            start: "top 80%",
          },
        },
      )
    }
  }, [])

  const collections = [
    {
      title: "Cosmic Creatures",
      creator: "AstralArtist",
      price: "2.5 ETH",
      image: "/placeholder.svg?height=400&width=400",
      badge: "Trending",
    },
    {
      title: "Digital Dreamscapes",
      creator: "VirtualVisions",
      price: "1.8 ETH",
      image: "/placeholder.svg?height=400&width=400",
      badge: "New",
    },
    {
      title: "Neon Nightlife",
      creator: "DigitalDiva",
      price: "3.2 ETH",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      title: "Abstract Anomalies",
      creator: "CryptoCreator",
      price: "1.5 ETH",
      image: "/placeholder.svg?height=400&width=400",
      badge: "Featured",
    },
  ]

  return (
    <section id="collections" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="collections-title text-3xl md:text-4xl font-bold">Featured Collections</h2>
          <p className="collections-description mt-4 text-lg text-muted-foreground">
            Explore our curated selection of the most popular and unique digital collectibles.
          </p>
        </div>

        <div className="collections-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection, index) => (
            <Card
              key={index}
              className="collection-card overflow-hidden border-2 hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative aspect-square">
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                {collection.badge && (
                  <Badge className="absolute top-3 right-3 bg-primary hover:bg-primary/90">{collection.badge}</Badge>
                )}
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold mb-1">{collection.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">by {collection.creator}</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold">{collection.price}</p>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="px-8">
            View All Collections
          </Button>
        </div>
      </div>
    </section>
  )
}

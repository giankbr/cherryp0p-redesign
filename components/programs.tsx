"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Music, Film, Pencil } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function Programs() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo(
        ".programs-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: "#programs",
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".programs-subtitle",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: "#programs",
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".program-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".programs-grid",
            start: "top 80%",
          },
        },
      )
    }
  }, [])

  const programs = [
    {
      title: "Weekend Pop Tour",
      description:
        "Tur pra-acara yang mengadakan gig intim tiap akhir pekan di beberapa kota, berkolaborasi dengan kolektif musik lokal.",
      icon: <Music className="h-10 w-10 text-primary" />,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Rekam Skena",
      description:
        "Aktivasi untuk dokumentasi musik yang dikerjakan langsung oleh para pegiat musik dan audio visual, sebagai sarana arsip pergerakan musik lokal.",
      icon: <Film className="h-10 w-10 text-secondary" />,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Pena Skena",
      description:
        "Workshop jurnalisme musik yang bekerjasama dengan media arus utama, mendukung tumbuhnya bakat baru di dunia kepenulisan musik.",
      icon: <Pencil className="h-10 w-10 text-accent" />,
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <section id="programs" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden noise-bg">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="programs-title text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Program</span> Unggulan
          </h2>
          <p className="programs-subtitle text-lg text-muted-foreground">
            Berbagai program menarik yang menjadi bagian dari Cherrypop Festival
          </p>
        </div>

        <div className="programs-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="program-card border-2 overflow-hidden">
              <div className="relative h-48">
                <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                <div className="absolute top-4 left-4 p-3 bg-background/80 backdrop-blur-sm rounded-full">
                  {program.icon}
                </div>
              </div>
              <CardHeader>
                <CardTitle>{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{program.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

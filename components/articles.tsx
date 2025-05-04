"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function Articles() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo(
        ".articles-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: "#articles",
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".articles-subtitle",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: "#articles",
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".article-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".articles-grid",
            start: "top 80%",
          },
        },
      )
    }
  }, [])

  const articles = [
    {
      title: "Persiapan Cherrypop Festival 2025",
      description: "Melihat lebih dekat persiapan Cherrypop Festival 2025 yang akan datang.",
      date: "10 Januari 2025",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Interview dengan Hindia",
      description: "Berbincang dengan Hindia tentang musik dan penampilannya di Cherrypop Festival.",
      date: "5 Januari 2025",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Rekam Skena: Dokumentasi Musik Lokal",
      description: "Melihat bagaimana program Rekam Skena mendokumentasikan pergerakan musik lokal.",
      date: "28 Desember 2024",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <section id="articles" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden noise-bg">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="articles-title text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Articles</span>
          </h2>
          <p className="articles-subtitle text-lg text-muted-foreground">
            Berita dan artikel terbaru seputar Cherrypop Festival
          </p>
        </div>

        <div className="articles-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="article-card border-2 overflow-hidden">
              <div className="relative h-48">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{article.title}</CardTitle>
                <CardDescription>{article.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{article.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group">
                  Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}

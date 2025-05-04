"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function Testimonials() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo(
        ".testimonials-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: "#testimonials",
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".testimonials-description",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: "#testimonials",
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".testimonial-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".testimonials-grid",
            start: "top 80%",
          },
        },
      )
    }
  }, [])

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Digital Art Collector",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "CherryPop has transformed how I collect digital art. The platform is intuitive, and the community is incredibly supportive. I've found rare pieces that I couldn't find anywhere else.",
      rating: 5,
    },
    {
      name: "Samantha Lee",
      role: "NFT Creator",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "As a creator, CherryPop gives me the tools and exposure I need to reach collectors worldwide. The platform fees are reasonable, and the support team is always helpful.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Tech Enthusiast",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "I've been using CherryPop for six months now, and I'm impressed with how seamless the buying and selling process is. The blockchain integration provides peace of mind.",
      rating: 4,
    },
  ]

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="testimonials-title text-3xl md:text-4xl font-bold">What Our Users Say</h2>
          <p className="testimonials-description mt-4 text-lg text-muted-foreground">
            Join thousands of satisfied collectors and creators on our platform.
          </p>
        </div>

        <div className="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="testimonial-card border-2">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating ? "text-primary fill-primary" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

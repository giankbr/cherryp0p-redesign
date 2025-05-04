"use client"

import { useEffect } from "react"
import { Sparkles, Shield, Zap, Globe } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function Features() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo(
        ".feature-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".features-section",
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".feature-description",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: ".features-section",
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".features-section",
            start: "top 70%",
          },
        },
      )
    }
  }, [])

  const features = [
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "Unique Collectibles",
      description: "Each digital collectible is one-of-a-kind with verified authenticity on the blockchain.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Secure Ownership",
      description: "Your digital assets are securely stored and protected with advanced encryption technology.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Fast Transactions",
      description: "Buy, sell, and trade collectibles instantly with low transaction fees.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Global Community",
      description: "Connect with collectors and creators from around the world in our thriving marketplace.",
    },
  ]

  return (
    <section id="features" className="features-section py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="feature-title text-3xl md:text-4xl font-bold">Why Choose CherryPop?</h2>
          <p className="feature-description mt-4 text-lg text-muted-foreground">
            We provide a seamless experience for collectors and creators to engage with digital collectibles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-card rounded-xl p-6 shadow-sm border transition-all duration-300 hover:shadow-md hover:border-primary/20"
            >
              <div className="mb-4 p-3 bg-primary/10 inline-block rounded-lg">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

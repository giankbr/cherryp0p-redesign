"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function Tickets() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo(
        ".tickets-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: "#tickets",
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".tickets-subtitle",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: "#tickets",
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".ticket-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".tickets-grid",
            start: "top 80%",
          },
        },
      )
    }
  }, [])

  const ticketTypes = [
    {
      name: "1-Day Pass",
      price: "Rp 350.000",
      description: "Akses untuk satu hari festival (pilih hari)",
      features: ["Akses ke semua panggung", "Akses area kuliner", "Merchandise dasar"],
      buttonText: "Beli Tiket",
      popular: false,
    },
    {
      name: "3-Day Pass",
      price: "Rp 850.000",
      description: "Akses penuh selama tiga hari festival",
      features: [
        "Akses ke semua panggung",
        "Akses area kuliner",
        "Merchandise eksklusif",
        "Akses area istirahat khusus",
        "Diskon 10% untuk makanan dan minuman",
      ],
      buttonText: "Beli Tiket",
      popular: true,
    },
    {
      name: "VIP Pass",
      price: "Rp 1.500.000",
      description: "Pengalaman premium selama festival",
      features: [
        "Akses ke semua panggung",
        "Akses area kuliner",
        "Merchandise premium",
        "Akses backstage terbatas",
        "Lounge VIP dengan minuman gratis",
        "Meet & Greet dengan artis pilihan",
      ],
      buttonText: "Beli Tiket",
      popular: false,
    },
  ]

  return (
    <section id="tickets" className="py-20 md:py-32 relative overflow-hidden noise-bg">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="tickets-title text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Tickets</span>
          </h2>
          <p className="tickets-subtitle text-lg text-muted-foreground">
            Pilih tiket yang sesuai dengan pengalaman festival yang kamu inginkan
          </p>
        </div>

        <div className="tickets-grid grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {ticketTypes.map((ticket, index) => (
            <Card
              key={index}
              className={`ticket-card relative ${
                ticket.popular ? "border-primary shadow-lg shadow-primary/20 dark:shadow-primary/10" : "border-border"
              }`}
            >
              {ticket.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-bold rounded-bl-lg rounded-tr-lg">
                  Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{ticket.name}</CardTitle>
                <CardDescription>{ticket.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-3xl font-bold">{ticket.price}</p>
                </div>
                <ul className="space-y-2">
                  {ticket.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${ticket.popular ? "bg-primary hover:bg-primary/90" : ""}`} size="lg">
                  {ticket.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

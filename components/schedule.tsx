"use client"

import { useEffect, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function Schedule() {
  const [activeDay, setActiveDay] = useState("day1")

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo(
        ".schedule-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: "#schedule",
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".schedule-subtitle",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: "#schedule",
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".schedule-tabs",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          scrollTrigger: {
            trigger: "#schedule",
            start: "top 80%",
          },
        },
      )
    }
  }, [])

  useEffect(() => {
    // Animate schedule items when tab changes
    gsap.fromTo(
      ".schedule-item",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
      },
    )
  }, [activeDay])

  const scheduleData = {
    day1: [
      {
        time: "15:00 - 16:00",
        artist: "Opening Ceremony",
        stage: "Main Stage",
        type: "ceremony",
      },
      {
        time: "16:00 - 17:00",
        artist: "Local Band Showcase",
        stage: "Second Stage",
        type: "music",
      },
      {
        time: "17:00 - 18:00",
        artist: "Kunto Aji",
        stage: "Main Stage",
        type: "music",
      },
      {
        time: "18:00 - 19:00",
        artist: "Film Screening",
        stage: "Art Space",
        type: "art",
      },
      {
        time: "19:00 - 20:00",
        artist: "Barasuara",
        stage: "Main Stage",
        type: "music",
      },
      {
        time: "20:00 - 21:30",
        artist: "Hindia",
        stage: "Main Stage",
        type: "headliner",
      },
      {
        time: "21:30 - 23:00",
        artist: "DJ Set",
        stage: "Electronic Stage",
        type: "music",
      },
    ],
    day2: [
      {
        time: "15:00 - 16:00",
        artist: "Poetry Reading",
        stage: "Art Space",
        type: "art",
      },
      {
        time: "16:00 - 17:00",
        artist: "Indie Showcase",
        stage: "Second Stage",
        type: "music",
      },
      {
        time: "17:00 - 18:00",
        artist: "Lomba Sihir",
        stage: "Main Stage",
        type: "music",
      },
      {
        time: "18:00 - 19:00",
        artist: "Art Workshop",
        stage: "Art Space",
        type: "workshop",
      },
      {
        time: "19:00 - 20:00",
        artist: "Efek Rumah Kaca",
        stage: "Main Stage",
        type: "music",
      },
      {
        time: "20:00 - 21:30",
        artist: "Isyana Sarasvati",
        stage: "Main Stage",
        type: "headliner",
      },
      {
        time: "21:30 - 23:00",
        artist: "Electronic Showcase",
        stage: "Electronic Stage",
        type: "music",
      },
    ],
    day3: [
      {
        time: "15:00 - 16:00",
        artist: "Community Discussion",
        stage: "Art Space",
        type: "talk",
      },
      {
        time: "16:00 - 17:00",
        artist: "Emerging Artists",
        stage: "Second Stage",
        type: "music",
      },
      {
        time: "17:00 - 18:00",
        artist: "Danilla",
        stage: "Main Stage",
        type: "music",
      },
      {
        time: "18:00 - 19:00",
        artist: "Culinary Experience",
        stage: "Food Area",
        type: "food",
      },
      {
        time: "19:00 - 20:30",
        artist: "Feast",
        stage: "Main Stage",
        type: "headliner",
      },
      {
        time: "20:30 - 22:00",
        artist: "Closing Party",
        stage: "Main Stage",
        type: "ceremony",
      },
    ],
  }

  const getBadgeVariant = (type) => {
    switch (type) {
      case "headliner":
        return "bg-primary text-primary-foreground hover:bg-primary/90"
      case "music":
        return "bg-secondary text-secondary-foreground hover:bg-secondary/90"
      case "art":
        return "bg-accent text-accent-foreground hover:bg-accent/90"
      case "workshop":
        return "bg-muted text-muted-foreground"
      case "talk":
        return "bg-card text-card-foreground"
      case "food":
        return "bg-secondary/70 text-secondary-foreground"
      case "ceremony":
        return "bg-primary/70 text-primary-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <section id="schedule" className="py-20 md:py-32 relative overflow-hidden noise-bg">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="schedule-title text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Schedule</span>
          </h2>
          <p className="schedule-subtitle text-lg text-muted-foreground mb-8">Jadwal lengkap Cherrypop Festival 2025</p>

          <Tabs defaultValue="day1" className="schedule-tabs w-full" onValueChange={(value) => setActiveDay(value)}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="day1">Day 1</TabsTrigger>
              <TabsTrigger value="day2">Day 2</TabsTrigger>
              <TabsTrigger value="day3">Day 3</TabsTrigger>
            </TabsList>

            {Object.keys(scheduleData).map((day) => (
              <TabsContent key={day} value={day} className="mt-8">
                <div className="space-y-4">
                  {scheduleData[day].map((item, index) => (
                    <Card key={index} className="schedule-item overflow-hidden border">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row md:items-center">
                          <div className="bg-muted p-4 md:w-48 md:shrink-0">
                            <p className="font-mono font-bold">{item.time}</p>
                          </div>
                          <div className="p-4 md:p-6 flex-1">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                              <div>
                                <h3 className="text-xl font-bold">{item.artist}</h3>
                                <p className="text-muted-foreground">{item.stage}</p>
                              </div>
                              <Badge className={getBadgeVariant(item.type)}>
                                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

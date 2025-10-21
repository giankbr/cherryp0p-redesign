"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Marquee } from "@/components/marquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LineupPage() {
      const [selectedDay, setSelectedDay] = useState(0);

      useEffect(() => {
            if (typeof window !== "undefined") {
                  gsap.registerPlugin(ScrollTrigger);

                  // Animate title
                  gsap.fromTo(
                        ".lineup-title",
                        { opacity: 0, y: 30 },
                        {
                              opacity: 1,
                              y: 0,
                              duration: 0.6,
                              scrollTrigger: {
                                    trigger: ".lineup-title",
                                    start: "top 80%",
                              },
                        },
                  );

                  // Animate artist cards
                  gsap.fromTo(
                        ".artist-card",
                        { opacity: 0, y: 30 },
                        {
                              opacity: 1,
                              y: 0,
                              duration: 0.5,
                              stagger: 0.08,
                              scrollTrigger: {
                                    trigger: ".artist-grid",
                                    start: "top 80%",
                              },
                        },
                  );
            }
      }, [selectedDay]);

      const days = [
            { day: "DAY 1", date: "15 AUG", fullDate: "15 August 2025" },
            { day: "DAY 2", date: "16 AUG", fullDate: "16 August 2025" },
            { day: "DAY 3", date: "17 AUG", fullDate: "17 August 2025" },
      ];

      const lineupData = [
            [
                  {
                        name: "HINDIA",
                        time: "21:30",
                        stage: "Main Stage",
                        image: "/placeholder.svg",
                        isFeatured: true,
                  },
                  {
                        name: "BARASUARA",
                        time: "19:00",
                        stage: "Main Stage",
                        image: "/placeholder.svg",
                  },
                  {
                        name: "KUNTO AJI",
                        time: "18:00",
                        stage: "Main Stage",
                        image: "/placeholder.svg",
                  },
                  {
                        name: "PAMUNGKAS",
                        time: "16:30",
                        stage: "Main Stage",
                        image: "/placeholder.svg",
                  },
                  {
                        name: "TULUS",
                        time: "15:00",
                        stage: "Main Stage",
                        image: "/placeholder.svg",
                  },
            ],
            [
                  {
                        name: "ISYANA SARASVATI",
                        time: "21:00",
                        stage: "Main Stage",
                        image: "/placeholder.svg",
                        isFeatured: true,
                  },
                  {
                        name: "EFEK RUMAH KACA",
                        time: "20:00",
                        stage: "Main Stage",
                        image: "/placeholder.svg",
                  },
                  {
                        name: "LOMBA SIHIR",
                        time: "17:00",
                        stage: "Main Stage",
                        image: "/placeholder.svg",
                  },
                  {
                        name: "FOURTWNTY",
                        time: "15:30",
                        stage: "Main Stage",
                        image: "/placeholder.svg",
                  },
                  {
                        name: "NADIN AMIZAH",
                        time: "14:00",
                        stage: "Main Stage",
                        image: "/placeholder.svg",
                  },
            ],
            [
                  {
                        name: "FEAST",
                        time: "19:30",
                        stage: "Main Stage",
                        image: "/placeholder.svg",
                        isFeatured: true,
                  },
                  {
                        name: "DANILLA",
                        time: "18:30",
                        stage: "Main Stage",
                        image: "/placeholder.svg",
                  },
                  {
                        name: "REALITY CLUB",
                        time: "17:00",
                        stage: "Main Stage",
                        image: "/placeholder.svg",
                  },
                  {
                        name: "HIVI!",
                        time: "15:30",
                        stage: "Main Stage",
                        image: "/placeholder.svg",
                  },
                  {
                        name: "ELEPHANT KIND",
                        time: "14:00",
                        stage: "Main Stage",
                        image: "/placeholder.svg",
                  },
            ],
      ];

      const currentLineup = lineupData[selectedDay];

      return (
            <div className="min-h-screen flex flex-col bg-background">
                  <Header />
                  <Marquee />
                  <main className="flex-1">
                        {/* Hero Section - Compact */}
                        <section className="pt-20 pb-10">
                              <div className="container mx-auto px-4 max-w-5xl">
                                    <h1 className="lineup-title text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                                          LINE
                                          <span className="text-primary">
                                                UP
                                          </span>
                                    </h1>
                                    <p className="text-lg text-muted-foreground max-w-2xl">
                                          Musisi terbaik Indonesia akan tampil
                                          di Main Stage Cherrypop Festival 2025
                                    </p>
                              </div>
                        </section>

                        {/* Stage Info Banner - Compact */}
                        <section className="py-8 bg-accent/[0.03]">
                              <div className="container mx-auto px-4 max-w-5xl">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-6 border border-border/50 rounded-lg bg-background/50">
                                          <div>
                                                <h2 className="text-2xl font-bold mb-1">
                                                      MAIN STAGE
                                                </h2>
                                                <p className="text-sm text-muted-foreground">
                                                      Panggung utama Cherrypop
                                                      Festival
                                                </p>
                                          </div>
                                          <div className="flex items-center gap-6">
                                                <div>
                                                      <p className="text-xs text-muted-foreground mb-1">
                                                            KAPASITAS
                                                      </p>
                                                      <p className="text-xl font-bold text-primary">
                                                            10,000
                                                      </p>
                                                </div>
                                                <div className="h-8 w-px bg-border" />
                                                <div>
                                                      <p className="text-xs text-muted-foreground mb-1">
                                                            LOKASI
                                                      </p>
                                                      <p className="text-sm font-medium">
                                                            Lapangan Kenari, YK
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </section>

                        {/* Day Selector - Compact Tabs */}
                        <section className="py-8">
                              <div className="container mx-auto px-4 max-w-5xl">
                                    <div className="inline-flex rounded-lg border border-border p-1 bg-accent/[0.03]">
                                          {days.map((day, index) => (
                                                <button
                                                      key={index}
                                                      onClick={() =>
                                                            setSelectedDay(
                                                                  index,
                                                            )
                                                      }
                                                      className={`px-6 py-3 rounded-md transition-all duration-300 ${
                                                            selectedDay ===
                                                            index
                                                                  ? "bg-primary text-primary-foreground font-medium shadow-sm"
                                                                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                                                      }`}
                                                >
                                                      <p className="text-xs mb-0.5">
                                                            {day.day}
                                                      </p>
                                                      <p className="text-sm font-bold">
                                                            {day.date}
                                                      </p>
                                                </button>
                                          ))}
                                    </div>
                              </div>
                        </section>

                        {/* Artist Lineup - Linear Cards */}
                        <section className="py-8 pb-12">
                              <div className="container mx-auto px-4 max-w-5xl">
                                    <div className="mb-6">
                                          <h2 className="text-3xl font-bold mb-1">
                                                {days[selectedDay].day}
                                          </h2>
                                          <p className="text-muted-foreground">
                                                {days[selectedDay].fullDate}
                                          </p>
                                    </div>

                                    <div className="artist-grid space-y-4">
                                          {currentLineup.map(
                                                (artist, index) => (
                                                      <div
                                                            key={index}
                                                            className={`artist-card group relative overflow-hidden border border-border hover:border-primary/50 rounded-lg transition-all duration-300 hover:shadow-lg ${
                                                                  artist.isFeatured
                                                                        ? "bg-gradient-to-r from-primary/5 to-transparent"
                                                                        : ""
                                                            }`}
                                                      >
                                                            <div className="flex flex-col md:flex-row gap-4 p-4">
                                                                  {/* Artist Image */}
                                                                  <div className="relative w-full md:w-32 h-48 md:h-32 rounded-md overflow-hidden flex-shrink-0">
                                                                        <Image
                                                                              src={
                                                                                    artist.image
                                                                              }
                                                                              alt={
                                                                                    artist.name
                                                                              }
                                                                              fill
                                                                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                                        />
                                                                  </div>

                                                                  {/* Artist Info */}
                                                                  <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                                        <div className="flex-1">
                                                                              <div className="flex items-center gap-2 mb-2">
                                                                                    <h3 className="text-2xl md:text-3xl font-bold">
                                                                                          {
                                                                                                artist.name
                                                                                          }
                                                                                    </h3>
                                                                                    {artist.isFeatured && (
                                                                                          <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded">
                                                                                                HEADLINER
                                                                                          </span>
                                                                                    )}
                                                                              </div>
                                                                              <p className="text-sm text-muted-foreground">
                                                                                    {
                                                                                          artist.stage
                                                                                    }
                                                                              </p>
                                                                        </div>

                                                                        {/* Time */}
                                                                        <div className="flex items-center gap-3">
                                                                              <div className="flex items-center gap-2 text-muted-foreground">
                                                                                    <svg
                                                                                          className="w-5 h-5"
                                                                                          fill="none"
                                                                                          stroke="currentColor"
                                                                                          viewBox="0 0 24 24"
                                                                                    >
                                                                                          <path
                                                                                                strokeLinecap="round"
                                                                                                strokeLinejoin="round"
                                                                                                strokeWidth={
                                                                                                      2
                                                                                                }
                                                                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                                          />
                                                                                    </svg>
                                                                                    <span className="text-2xl font-bold text-foreground">
                                                                                          {
                                                                                                artist.time
                                                                                          }
                                                                                    </span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                ),
                                          )}
                                    </div>
                              </div>
                        </section>

                        {/* Important Information - Compact */}
                        <section className="py-10 pb-16 bg-accent/[0.03]">
                              <div className="container mx-auto px-4 max-w-5xl">
                                    <div className="bg-background/50 border border-border/50 rounded-lg p-8">
                                          <h3 className="text-2xl font-bold mb-6">
                                                Important Information
                                          </h3>
                                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="flex items-start gap-3">
                                                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                            <svg
                                                                  className="w-5 h-5 text-primary"
                                                                  fill="none"
                                                                  stroke="currentColor"
                                                                  viewBox="0 0 24 24"
                                                            >
                                                                  <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={
                                                                              2
                                                                        }
                                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                                  />
                                                            </svg>
                                                      </div>
                                                      <div>
                                                            <h4 className="font-bold mb-1">
                                                                  Gates Open
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground">
                                                                  13:00 WIB each
                                                                  day
                                                            </p>
                                                      </div>
                                                </div>

                                                <div className="flex items-start gap-3">
                                                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                            <svg
                                                                  className="w-5 h-5 text-primary"
                                                                  fill="none"
                                                                  stroke="currentColor"
                                                                  viewBox="0 0 24 24"
                                                            >
                                                                  <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={
                                                                              2
                                                                        }
                                                                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                                                                  />
                                                            </svg>
                                                      </div>
                                                      <div>
                                                            <h4 className="font-bold mb-1">
                                                                  First
                                                                  Performance
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground">
                                                                  14:00 WIB each
                                                                  day
                                                            </p>
                                                      </div>
                                                </div>

                                                <div className="flex items-start gap-3">
                                                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                            <svg
                                                                  className="w-5 h-5 text-primary"
                                                                  fill="none"
                                                                  stroke="currentColor"
                                                                  viewBox="0 0 24 24"
                                                            >
                                                                  <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={
                                                                              2
                                                                        }
                                                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                                                  />
                                                            </svg>
                                                      </div>
                                                      <div>
                                                            <h4 className="font-bold mb-1">
                                                                  Last
                                                                  Performance
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground">
                                                                  22:00 WIB each
                                                                  day
                                                            </p>
                                                      </div>
                                                </div>

                                                <div className="flex items-start gap-3">
                                                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                            <svg
                                                                  className="w-5 h-5 text-primary"
                                                                  fill="none"
                                                                  stroke="currentColor"
                                                                  viewBox="0 0 24 24"
                                                            >
                                                                  <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={
                                                                              2
                                                                        }
                                                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                                  />
                                                                  <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={
                                                                              2
                                                                        }
                                                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                                  />
                                                            </svg>
                                                      </div>
                                                      <div>
                                                            <h4 className="font-bold mb-1">
                                                                  Venue
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground">
                                                                  Lapangan
                                                                  Kenari,
                                                                  Yogyakarta
                                                            </p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </section>
                  </main>
                  <Footer />
            </div>
      );
}

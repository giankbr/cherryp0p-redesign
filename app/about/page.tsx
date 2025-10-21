"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FadeIn, ScaleIn, StaggerFade } from "@/components/ui/animation";
import Image from "next/image";
import { useEffect } from "react";

export default function AboutPage() {
      // Add page transition on mount
      useEffect(() => {
            window.scrollTo(0, 0);
      }, []);
      return (
            <div className="min-h-screen flex flex-col bg-background">
                  <Header />
                  <main className="flex-1">
                        {/* Hero Section - Enhanced */}
                        <FadeIn>
                              <section className="pt-16 pb-8 md:pt-24 md:pb-12">
                                    <div className="container px-4 mx-auto max-w-7xl">
                                          <h1 className="text-5xl md:text-7xl font-normal mb-6 tracking-tight">
                                                MEET CHERRYPOP
                                          </h1>
                                          <div className="border-l-2 border-primary pl-5 md:pl-6">
                                                <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed max-w-4xl">
                                                      At Cherrypop, artistry,
                                                      comfort and connection
                                                      share every stage. Guided
                                                      by bold craftsmanship, we
                                                      create moments that
                                                      elevate festival
                                                      experiences with unique
                                                      elegance.
                                                </p>
                                          </div>
                                    </div>
                              </section>
                        </FadeIn>

                        {/* Team Image - Enhanced with Animation */}
                        <ScaleIn delay={0.2}>
                              <section className="py-6 md:py-8">
                                    <div className="container px-4 mx-auto max-w-7xl">
                                          <div className="aspect-video relative rounded-lg overflow-hidden border border-border/50 shadow-lg">
                                                <Image
                                                      src="/placeholder.svg?height=900&width=2100"
                                                      alt="Cherrypop Festival Team"
                                                      fill
                                                      className="object-cover"
                                                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1280px"
                                                      priority
                                                      quality={90}
                                                />
                                          </div>
                                    </div>
                              </section>
                        </ScaleIn>

                        {/* Vision & Mission - Linear Flow with Animations */}
                        <section className="py-10 md:py-16">
                              <div className="container px-4 mx-auto max-w-7xl">
                                    <div className="space-y-12">
                                          {/* Main Statement */}
                                          <FadeIn delay={0.3} direction="up">
                                                <div className="bg-accent/10 rounded-lg p-6 md:p-8 border border-border/40">
                                                      <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                                                            Discover a new way
                                                            of experiencing
                                                            festivals with
                                                            Cherrypop's crafted
                                                            authenticity. Rooted
                                                            in Indonesian
                                                            creativity, our
                                                            events combine
                                                            timeless aesthetics,
                                                            artistic expression,
                                                            and mindful
                                                            innovation.
                                                      </p>
                                                </div>
                                          </FadeIn>

                                          {/* Vision & Mission Side by Side */}
                                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-4">
                                                <FadeIn
                                                      delay={0.4}
                                                      direction="left"
                                                >
                                                      <div className="space-y-4 p-6 rounded-lg border border-border/30 bg-background/50 h-full">
                                                            <div className="flex items-center gap-3 mb-2">
                                                                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                                                        <svg
                                                                              className="w-6 h-6 text-primary"
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
                                                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                                              />
                                                                              <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth={
                                                                                          2
                                                                                    }
                                                                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                                              />
                                                                        </svg>
                                                                  </div>
                                                                  <h3 className="text-2xl font-medium">
                                                                        Our
                                                                        Vision
                                                                  </h3>
                                                            </div>
                                                            <p className="text-muted-foreground leading-relaxed text-base">
                                                                  We aim to
                                                                  design an
                                                                  experience
                                                                  that reflects
                                                                  the way of
                                                                  living with
                                                                  intention and
                                                                  purpose,
                                                                  bringing
                                                                  together
                                                                  like-minded
                                                                  individuals
                                                                  through
                                                                  mindful
                                                                  curation.
                                                            </p>
                                                            <ul className="space-y-2 pt-2">
                                                                  <li className="flex items-start gap-2">
                                                                        <span className="text-primary mt-1">
                                                                              •
                                                                        </span>
                                                                        <span>
                                                                              Meaningful
                                                                              connections
                                                                              through
                                                                              music
                                                                        </span>
                                                                  </li>
                                                                  <li className="flex items-start gap-2">
                                                                        <span className="text-primary mt-1">
                                                                              •
                                                                        </span>
                                                                        <span>
                                                                              Showcase
                                                                              Indonesia's
                                                                              creative
                                                                              spirit
                                                                        </span>
                                                                  </li>
                                                            </ul>
                                                      </div>
                                                </FadeIn>

                                                <FadeIn
                                                      delay={0.5}
                                                      direction="right"
                                                >
                                                      <div className="space-y-4 p-6 rounded-lg border border-border/30 bg-background/50 h-full">
                                                            <div className="flex items-center gap-3 mb-2">
                                                                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                                                        <svg
                                                                              className="w-6 h-6 text-primary"
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
                                                                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                                                              />
                                                                        </svg>
                                                                  </div>
                                                                  <h3 className="text-2xl font-medium">
                                                                        Our
                                                                        Mission
                                                                  </h3>
                                                            </div>
                                                            <p className="text-muted-foreground leading-relaxed text-base">
                                                                  We are
                                                                  dedicated to
                                                                  crafting
                                                                  festivals that
                                                                  blend artistic
                                                                  expression
                                                                  with cultural
                                                                  significance,
                                                                  using
                                                                  innovative
                                                                  approaches and
                                                                  sustainable
                                                                  practices.
                                                            </p>
                                                            <ul className="space-y-2 pt-2">
                                                                  <li className="flex items-start gap-2">
                                                                        <span className="text-primary mt-1">
                                                                              •
                                                                        </span>
                                                                        <span>
                                                                              Sustainable
                                                                              event
                                                                              production
                                                                        </span>
                                                                  </li>
                                                                  <li className="flex items-start gap-2">
                                                                        <span className="text-primary mt-1">
                                                                              •
                                                                        </span>
                                                                        <span>
                                                                              Support
                                                                              emerging
                                                                              artists
                                                                              and
                                                                              musicians
                                                                        </span>
                                                                  </li>
                                                            </ul>
                                                      </div>
                                                </FadeIn>
                                          </div>
                                    </div>
                              </div>
                        </section>

                        {/* Stats - Enhanced with Animations */}
                        <FadeIn delay={0.1} threshold={0.2}>
                              <section className="py-12 bg-accent/[0.05]">
                                    <div className="container px-4 mx-auto max-w-7xl">
                                          <h2 className="text-3xl font-medium mb-8 text-center">
                                                Our Impact
                                          </h2>
                                          <StaggerFade
                                                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
                                                direction="up"
                                                staggerDelay={0.1}
                                          >
                                                <div className="text-center p-5 rounded-lg bg-background/50 border border-border/30 hover:border-primary/20 transition-colors hover:bg-accent/10 duration-300">
                                                      <div className="text-4xl md:text-5xl font-light mb-2 text-primary">
                                                            150+
                                                      </div>
                                                      <div className="text-sm text-muted-foreground">
                                                            Artists Featured
                                                      </div>
                                                </div>
                                                <div className="text-center p-5 rounded-lg bg-background/50 border border-border/30 hover:border-primary/20 transition-colors hover:bg-accent/10 duration-300">
                                                      <div className="text-4xl md:text-5xl font-light mb-2 text-primary">
                                                            15K+
                                                      </div>
                                                      <div className="text-sm text-muted-foreground">
                                                            Festival Attendees
                                                      </div>
                                                </div>
                                                <div className="text-center p-5 rounded-lg bg-background/50 border border-border/30 hover:border-primary/20 transition-colors hover:bg-accent/10 duration-300">
                                                      <div className="text-4xl md:text-5xl font-light mb-2 text-primary">
                                                            120+
                                                      </div>
                                                      <div className="text-sm text-muted-foreground">
                                                            Collaborations
                                                      </div>
                                                </div>
                                                <div className="text-center p-5 rounded-lg bg-background/50 border border-border/30 hover:border-primary/20 transition-colors hover:bg-accent/10 duration-300">
                                                      <div className="text-4xl md:text-5xl font-light mb-2 text-primary">
                                                            8+
                                                      </div>
                                                      <div className="text-sm text-muted-foreground">
                                                            Years Experience
                                                      </div>
                                                </div>
                                          </StaggerFade>
                                    </div>
                              </section>
                        </FadeIn>

                        {/* Philosophy Section - Enhanced */}
                        <ScaleIn delay={0.2} threshold={0.1}>
                              <section className="py-12 pb-20">
                                    <div className="container px-4 mx-auto max-w-7xl">
                                          <div className="bg-primary/5 rounded-lg p-8 md:p-10 border border-primary/20 shadow-sm">
                                                <h2 className="text-3xl md:text-4xl font-normal mb-6">
                                                      Design as a Way of Life
                                                </h2>
                                                <p className="text-lg text-foreground/80 leading-relaxed">
                                                      Design as a way of life
                                                      shapes our vision, helping
                                                      and fueling our commitment
                                                      to create clear,
                                                      user-meaningful spaces
                                                      that elevate everyday
                                                      living. Every element is
                                                      intentionally crafted to
                                                      resonate with those who
                                                      seek authenticity and
                                                      meaningful connections.
                                                </p>

                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                                      <div className="p-4 rounded-md bg-background/60 border border-border/30">
                                                            <h3 className="text-lg font-medium mb-2">
                                                                  Artistic
                                                                  Expression
                                                            </h3>
                                                            <p className="text-sm text-muted-foreground">
                                                                  Encouraging
                                                                  creative
                                                                  freedom
                                                                  through
                                                                  curated music
                                                                  and art
                                                            </p>
                                                      </div>
                                                      <div className="p-4 rounded-md bg-background/60 border border-border/30">
                                                            <h3 className="text-lg font-medium mb-2">
                                                                  Cultural
                                                                  Heritage
                                                            </h3>
                                                            <p className="text-sm text-muted-foreground">
                                                                  Celebrating
                                                                  Indonesia's
                                                                  rich cultural
                                                                  tapestry
                                                            </p>
                                                      </div>
                                                      <div className="p-4 rounded-md bg-background/60 border border-border/30">
                                                            <h3 className="text-lg font-medium mb-2">
                                                                  Sustainable
                                                                  Vision
                                                            </h3>
                                                            <p className="text-sm text-muted-foreground">
                                                                  Creating
                                                                  experiences
                                                                  with minimal
                                                                  environmental
                                                                  impact
                                                            </p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </section>
                        </ScaleIn>

                        {/* Team Section - New */}
                        <section className="py-16 pb-24 overflow-hidden">
                              <div className="container px-4 mx-auto max-w-7xl">
                                    <FadeIn>
                                          <h2 className="text-3xl md:text-4xl font-normal mb-4 tracking-tight text-center">
                                                Meet Our Team
                                          </h2>
                                          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                                                The creative minds behind
                                                Cherrypop Festival, working
                                                together to create unforgettable
                                                music experiences in Yogyakarta.
                                          </p>
                                    </FadeIn>

                                    <StaggerFade
                                          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
                                          delay={0.1}
                                          staggerDelay={0.1}
                                    >
                                          {[
                                                {
                                                      name: "Aditya Pratama",
                                                      role: "Festival Director",
                                                      img: "/placeholder.svg?height=500&width=400&text=Aditya",
                                                },
                                                {
                                                      name: "Rini Wijaya",
                                                      role: "Creative Director",
                                                      img: "/placeholder.svg?height=500&width=400&text=Rini",
                                                },
                                                {
                                                      name: "Budi Santoso",
                                                      role: "Technical Producer",
                                                      img: "/placeholder.svg?height=500&width=400&text=Budi",
                                                },
                                                {
                                                      name: "Maya Anggraini",
                                                      role: "Artist Relations",
                                                      img: "/placeholder.svg?height=500&width=400&text=Maya",
                                                },
                                          ].map((member, index) => (
                                                <div
                                                      key={index}
                                                      className="group"
                                                >
                                                      <div className="aspect-[4/5] relative rounded-lg overflow-hidden border border-border/50 mb-3 bg-accent/5">
                                                            <Image
                                                                  src={
                                                                        member.img
                                                                  }
                                                                  alt={
                                                                        member.name
                                                                  }
                                                                  fill
                                                                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                                  sizes="(max-width: 768px) 50vw, 25vw"
                                                                  loading={
                                                                        index <
                                                                        2
                                                                              ? "eager"
                                                                              : "lazy"
                                                                  }
                                                                  quality={90}
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                            <div className="absolute bottom-0 left-0 p-3 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                                                                  <div className="flex space-x-2">
                                                                        <a
                                                                              href="#"
                                                                              className="w-8 h-8 rounded-full bg-background/80 flex items-center justify-center hover:bg-primary/20 transition-colors"
                                                                        >
                                                                              <svg
                                                                                    className="w-4 h-4"
                                                                                    fill="currentColor"
                                                                                    viewBox="0 0 24 24"
                                                                                    aria-hidden="true"
                                                                              >
                                                                                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z"></path>
                                                                                    <path d="M12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666z"></path>
                                                                              </svg>
                                                                        </a>
                                                                        <a
                                                                              href="#"
                                                                              className="w-8 h-8 rounded-full bg-background/80 flex items-center justify-center hover:bg-primary/20 transition-colors"
                                                                        >
                                                                              <svg
                                                                                    className="w-4 h-4"
                                                                                    fill="currentColor"
                                                                                    viewBox="0 0 24 24"
                                                                                    aria-hidden="true"
                                                                              >
                                                                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                                                              </svg>
                                                                        </a>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <h3 className="text-lg font-medium">
                                                            {member.name}
                                                      </h3>
                                                      <p className="text-sm text-muted-foreground">
                                                            {member.role}
                                                      </p>
                                                </div>
                                          ))}
                                    </StaggerFade>
                              </div>
                        </section>
                  </main>
                  <Footer />
            </div>
      );
}

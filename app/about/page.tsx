import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Image from "next/image";

export default function AboutPage() {
      return (
            <div className="min-h-screen flex flex-col bg-background">
                  <Header />
                  <main className="flex-1">
                        {/* Hero Section - Compact */}
                        <section className="pt-24 pb-12">
                              <div className="container px-4 mx-auto max-w-5xl">
                                    <h1 className="text-5xl md:text-7xl font-normal mb-8 tracking-tight">
                                          MEET CHERRYPOP
                                    </h1>
                                    <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed max-w-4xl">
                                          At Cherrypop, artistry, comfort and
                                          connection share every stage. Guided
                                          by bold craftsmanship, we create
                                          moments that elevate festival
                                          experiences with unique elegance.
                                    </p>
                              </div>
                        </section>

                        {/* Team Image - Compact */}
                        <section className="py-8">
                              <div className="container px-4 mx-auto max-w-5xl">
                                    <div className="aspect-[21/9] relative rounded-lg overflow-hidden border border-border/50">
                                          <Image
                                                src="/placeholder.svg?height=900&width=2100"
                                                alt="Cherrypop Festival Team"
                                                fill
                                                className="object-cover"
                                                priority
                                          />
                                    </div>
                              </div>
                        </section>

                        {/* Vision & Mission - Linear Flow */}
                        <section className="py-12">
                              <div className="container px-4 mx-auto max-w-5xl">
                                    <div className="space-y-10">
                                          {/* Main Statement */}
                                          <div className="border-l-2 border-primary pl-6">
                                                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                                                      Discover a new way of
                                                      experiencing festivals
                                                      with Cherrypop's crafted
                                                      authenticity. Rooted in
                                                      Indonesian creativity, our
                                                      events combine timeless
                                                      aesthetics, artistic
                                                      expression, and mindful
                                                      innovation.
                                                </p>
                                          </div>

                                          {/* Vision & Mission Side by Side */}
                                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                                                <div className="space-y-3">
                                                      <div className="flex items-center gap-3 mb-4">
                                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
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
                                                                  Our Vision
                                                            </h3>
                                                      </div>
                                                      <p className="text-muted-foreground leading-relaxed">
                                                            We aim to design an
                                                            experience that
                                                            reflects the way of
                                                            living with
                                                            intention and
                                                            purpose, bringing
                                                            together like-minded
                                                            individuals through
                                                            mindful curation.
                                                      </p>
                                                </div>

                                                <div className="space-y-3">
                                                      <div className="flex items-center gap-3 mb-4">
                                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
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
                                                                              d="M13 10V3L4 14h7v7l9-11h-7z"
                                                                        />
                                                                  </svg>
                                                            </div>
                                                            <h3 className="text-2xl font-medium">
                                                                  Our Mission
                                                            </h3>
                                                      </div>
                                                      <p className="text-muted-foreground leading-relaxed">
                                                            We are dedicated to
                                                            crafting festivals
                                                            that blend artistic
                                                            expression with
                                                            cultural
                                                            significance, using
                                                            innovative
                                                            approaches and
                                                            sustainable
                                                            practices.
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </section>

                        {/* Stats - Compact Inline */}
                        <section className="py-12 bg-accent/[0.03]">
                              <div className="container px-4 mx-auto max-w-5xl">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                                          <div className="text-center p-4 rounded-lg bg-background/50 border border-border/30">
                                                <div className="text-4xl md:text-5xl font-light mb-2 text-primary">
                                                      150+
                                                </div>
                                                <div className="text-sm text-muted-foreground">
                                                      Artists Featured
                                                </div>
                                          </div>
                                          <div className="text-center p-4 rounded-lg bg-background/50 border border-border/30">
                                                <div className="text-4xl md:text-5xl font-light mb-2 text-primary">
                                                      15K+
                                                </div>
                                                <div className="text-sm text-muted-foreground">
                                                      Festival Attendees
                                                </div>
                                          </div>
                                          <div className="text-center p-4 rounded-lg bg-background/50 border border-border/30">
                                                <div className="text-4xl md:text-5xl font-light mb-2 text-primary">
                                                      120+
                                                </div>
                                                <div className="text-sm text-muted-foreground">
                                                      Collaborations
                                                </div>
                                          </div>
                                          <div className="text-center p-4 rounded-lg bg-background/50 border border-border/30">
                                                <div className="text-4xl md:text-5xl font-light mb-2 text-primary">
                                                      8+
                                                </div>
                                                <div className="text-sm text-muted-foreground">
                                                      Years Experience
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </section>

                        {/* Philosophy Section - Linear */}
                        <section className="py-12 pb-16">
                              <div className="container px-4 mx-auto max-w-5xl">
                                    <div className="bg-accent/[0.05] rounded-lg p-8 md:p-10 border border-border/30">
                                          <h2 className="text-3xl md:text-4xl font-normal mb-6">
                                                Design as a Way of Life
                                          </h2>
                                          <p className="text-lg text-muted-foreground leading-relaxed">
                                                Design as a way of life shapes
                                                our vision, helping and fueling
                                                our commitment to create clear,
                                                user-meaningful spaces that
                                                elevate everyday living. Every
                                                element is intentionally crafted
                                                to resonate with those who seek
                                                authenticity and meaningful
                                                connections.
                                          </p>
                                    </div>
                              </div>
                        </section>
                  </main>
                  <Footer />
            </div>
      );
}

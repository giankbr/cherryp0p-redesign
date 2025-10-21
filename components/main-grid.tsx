import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MainGrid() {
      return (
            <section className="container mx-auto px-4 max-w-7xl py-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                        <div className="relative overflow-hidden border-0 hover:border-primary/50 transition-all duration-300 aspect-square group">
                              <Image
                                    src="/placeholder.svg?height=600&width=600"
                                    alt="Cherrypop Festival"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                              <div className="absolute bottom-0 left-0 p-6">
                                    <h2 className="text-5xl font-bold mb-2 text-white">
                                          CHERRYPOP
                                    </h2>
                                    <p className="text-xl text-gray-200">
                                          FESTIVAL 2025
                                    </p>
                                    <div className="flex items-center gap-2 mt-3 text-sm text-white/90">
                                          <Calendar className="h-4 w-4 text-primary" />
                                          <span>15-17 August 2025</span>
                                    </div>
                              </div>
                        </div>

                        <div className="aspect-square p-6 flex flex-col justify-between border border-border/10 bg-background hover:border-primary/30 transition-all duration-300 group">
                              <div>
                                    <h3 className="text-lg font-medium mb-2 text-primary">
                                          ABOUT
                                    </h3>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                                          PANGGUNG BAGI KREATIVITAS SUBKULTUR
                                          ANAK MUDA
                                    </h2>
                              </div>
                              <div>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                          Dari musisi hingga pembuat film, dari
                                          perupa hingga pegiat kuliner, berbagai
                                          disiplin bertemu untuk berkreasi,
                                          berdialog, dan berbagi energi.
                                    </p>
                                    <Link
                                          href="/about"
                                          className="flex items-center text-sm font-medium text-primary gap-1.5 hover:gap-2.5 transition-all"
                                    >
                                          Learn More{" "}
                                          <ArrowUpRight className="h-3.5 w-3.5" />
                                    </Link>
                              </div>
                        </div>

                        <div className="aspect-square relative overflow-hidden border border-border/10 hover:border-primary/30 transition-all duration-300 group">
                              <Image
                                    src="/placeholder.svg?height=600&width=600"
                                    alt="Festival Atmosphere"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                              <div className="absolute bottom-0 left-0 p-6">
                                    <span className="px-2 py-1 bg-primary/90 rounded text-xs font-bold text-primary-foreground mb-3 inline-block">
                                          FEATURED
                                    </span>
                                    <h3 className="text-xl font-bold mb-2 text-white">
                                          WEEKEND POP TOUR
                                    </h3>
                                    <p className="text-gray-200 text-sm">
                                          Tur pra-acara yang mengadakan gig
                                          intim tiap akhir pekan di beberapa
                                          kota.
                                    </p>
                              </div>
                        </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-1">
                        <div className="aspect-video p-6 flex flex-col justify-between border border-border/10 bg-background hover:border-primary/30 transition-all duration-300 group">
                              <div>
                                    <h3 className="text-lg font-medium mb-4 text-primary">
                                          LINEUP
                                    </h3>
                                    <div className="space-y-2">
                                          <h2 className="text-2xl md:text-4xl font-bold">
                                                HINDIA
                                          </h2>
                                          <h2 className="text-2xl md:text-4xl font-bold">
                                                EFEK RUMAH KACA
                                          </h2>
                                          <h2 className="text-2xl md:text-4xl font-bold">
                                                BARASUARA
                                          </h2>
                                    </div>
                              </div>
                              <div className="mt-4">
                                    <Button size="sm" variant="default" asChild>
                                          <Link
                                                href="/lineup"
                                                className="flex items-center gap-2"
                                          >
                                                VIEW FULL LINEUP{" "}
                                                <ArrowRight className="h-4 w-4" />
                                          </Link>
                                    </Button>
                              </div>
                        </div>

                        <div className="aspect-video relative overflow-hidden border border-border/10 hover:border-primary/30 transition-all duration-300 group">
                              <Image
                                    src="/placeholder.svg?height=600&width=1000"
                                    alt="Concert Performance"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                              <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-xl font-bold mb-2 text-white">
                                          REKAM SKENA
                                    </h3>
                                    <p className="text-gray-200 text-sm">
                                          Aktivasi untuk dokumentasi musik yang
                                          dikerjakan langsung oleh para pegiat
                                          musik dan audio visual.
                                    </p>
                                    <Link
                                          href="#"
                                          className="mt-3 inline-flex items-center text-white text-sm font-medium gap-1.5 group-hover:text-primary transition-colors"
                                    >
                                          Learn More{" "}
                                          <ArrowRight className="h-3.5 w-3.5" />
                                    </Link>
                              </div>
                        </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-1">
                        <div className="aspect-square relative overflow-hidden border border-border/10 hover:border-primary/30 transition-all duration-300 group">
                              <Image
                                    src="/placeholder.svg?height=600&width=600"
                                    alt="Workshop"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                              <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-xl font-bold mb-2 text-white">
                                          PENA SKENA
                                    </h3>
                                    <p className="text-gray-200 text-sm">
                                          Workshop jurnalisme musik yang
                                          bekerjasama dengan media arus utama.
                                    </p>
                              </div>
                        </div>

                        <div className="aspect-square p-6 flex flex-col justify-between border border-border/10 bg-background hover:border-primary/30 transition-all duration-300 group">
                              <div>
                                    <h3 className="text-lg font-medium mb-2 text-primary">
                                          MERCHANDISE
                                    </h3>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                                          OFFICIAL CHERRYPOP MERCH
                                    </h2>
                              </div>
                              <div>
                                    <Button size="sm" variant="default" asChild>
                                          <Link
                                                href="/merchandise"
                                                className="flex items-center gap-2"
                                          >
                                                SHOP NOW{" "}
                                                <ArrowRight className="h-4 w-4" />
                                          </Link>
                                    </Button>
                              </div>
                        </div>

                        <div className="aspect-square relative overflow-hidden border border-border/10 hover:border-primary/30 transition-all duration-300 group">
                              <Image
                                    src="/placeholder.svg?height=600&width=600"
                                    alt="Festival Crowd"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                              <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-xl font-bold mb-2 text-white">
                                          GALLERY
                                    </h3>
                                    <p className="text-gray-200 text-sm">
                                          Momen-momen tak terlupakan dari
                                          Cherrypop Festival tahun-tahun
                                          sebelumnya.
                                    </p>
                                    <Link
                                          href="#"
                                          className="mt-3 inline-flex items-center text-white text-sm font-medium gap-1.5 group-hover:text-primary transition-colors"
                                    >
                                          View Gallery{" "}
                                          <ArrowRight className="h-3.5 w-3.5" />
                                    </Link>
                              </div>
                        </div>
                  </div>

                  {/* Highlights/Gallery Section */}
                  <div className="mt-6 py-8">
                        <div className="flex justify-between items-center mb-6">
                              <div>
                                    <h2 className="text-3xl font-bold mb-1">
                                          Festival Highlights
                                    </h2>
                                    <p className="text-muted-foreground">
                                          Memorable moments from previous events
                                    </p>
                              </div>
                              <Link
                                    href="#gallery"
                                    className="flex items-center text-sm font-medium text-primary gap-1.5 hover:gap-2.5 transition-all"
                              >
                                    View Gallery{" "}
                                    <ArrowUpRight className="h-3.5 w-3.5" />
                              </Link>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
                              {[
                                    "Concert crowd",
                                    "Night performance",
                                    "Art installation",
                                    "Food vendors",
                              ].map((item, index) => (
                                    <div
                                          key={item}
                                          className="aspect-square relative overflow-hidden border border-border/10 hover:border-primary/30 transition-all duration-300 group"
                                    >
                                          <Image
                                                src={`/placeholder.svg?height=300&width=300&text=${item.replace(/\s+/g, "+")}`}
                                                alt={item}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                          />
                                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                <div className="px-3 py-1.5 bg-primary/90 rounded text-xs font-bold text-primary-foreground">
                                                      {item}
                                                </div>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </section>
      );
}

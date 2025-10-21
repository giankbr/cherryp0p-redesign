"use client";

import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function About() {
      useEffect(() => {
            if (typeof window !== "undefined") {
                  gsap.registerPlugin(ScrollTrigger);

                  gsap.fromTo(
                        ".about-title",
                        { opacity: 0, y: 50 },
                        {
                              opacity: 1,
                              y: 0,
                              duration: 0.8,
                              scrollTrigger: {
                                    trigger: "#about",
                                    start: "top 80%",
                              },
                        },
                  );

                  gsap.fromTo(
                        ".about-content",
                        { opacity: 0, y: 30 },
                        {
                              opacity: 1,
                              y: 0,
                              duration: 0.8,
                              stagger: 0.2,
                              scrollTrigger: {
                                    trigger: "#about",
                                    start: "top 70%",
                              },
                        },
                  );

                  gsap.fromTo(
                        ".about-image",
                        { opacity: 0, scale: 0.9 },
                        {
                              opacity: 1,
                              scale: 1,
                              duration: 0.8,
                              scrollTrigger: {
                                    trigger: ".about-image",
                                    start: "top 80%",
                              },
                        },
                  );
            }
      }, []);

      return (
            <section
                  id="about"
                  className="py-20 md:py-32 relative overflow-hidden noise-bg"
            >
                  <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                              <div className="flex-1 order-2 lg:order-1">
                                    <div className="about-image relative">
                                          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-xl blur-xl opacity-70"></div>
                                          <Image
                                                src="/placeholder.svg?height=600&width=800"
                                                alt="Cherrypop Festival Atmosphere"
                                                width={800}
                                                height={600}
                                                className="rounded-xl relative z-10"
                                          />
                                    </div>
                              </div>

                              <div className="flex-1 order-1 lg:order-2">
                                    <h2 className="about-title text-3xl md:text-4xl font-bold mb-8">
                                          <span className="gradient-text">
                                                Tentang
                                          </span>{" "}
                                          Cherrypop
                                    </h2>
                                    <div className="space-y-6">
                                          <p className="about-content text-lg">
                                                Cherrypop, festival musik
                                                tahunan di Yogyakarta yang
                                                digagas oleh Swasembada Kreasi,
                                                adalah panggung bagi kreativitas
                                                subkultur anak muda. Dari musisi
                                                hingga pembuat film, dari perupa
                                                hingga pegiat kuliner, berbagai
                                                disiplin bertemu untuk
                                                berkreasi, berdialog, dan
                                                berbagi energi.
                                          </p>
                                          <p className="about-content text-lg">
                                                Cherrypop bukan sekadar
                                                festival, melainkan ruang untuk
                                                membangun narasi dan merayakan
                                                semangat kolaborasi. Lebih dari
                                                sekadar hiburan, Cherrypop
                                                menjadi tempat subkultur anak
                                                muda untuk membangun diskursus,
                                                menjalin jejaring, dan merayakan
                                                keberagaman.
                                          </p>
                                          <p className="about-content text-lg">
                                                Festival ini adalah simbol
                                                semangat kolaborasi dan energi
                                                kreatif yang terus berkembang di
                                                Yogyakarta dan Indonesia.
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      );
}

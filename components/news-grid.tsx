import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export function NewsGrid() {
      const articles = [
            {
                  title: "Cherrypop Festival 2025: Lineup Terbaik Indonesia Akan Hadir",
                  excerpt: "Festival musik tahunan di Yogyakarta akan menghadirkan lineup terbaik dari musisi Indonesia dan internasional.",
                  date: "December 15, 2024",
                  image: "/placeholder.svg?height=600&width=600",
                  category: "Announcements",
            },
            {
                  title: "Workshop Kreatif: Kolaborasi Seni dan Teknologi",
                  excerpt: "Serangkaian workshop kreatif akan digelar untuk mendukung pertumbuhan ekosistem kreatif Indonesia.",
                  date: "December 10, 2024",
                  image: "/placeholder.svg?height=600&width=600",
                  category: "Programs",
            },
            {
                  title: "Pameran Seni Kontemporer: Suara Anak Muda",
                  excerpt: "Pameran seni yang menampilkan karya-karya terbaik dari seniman muda Indonesia.",
                  date: "December 5, 2024",
                  image: "/placeholder.svg?height=600&width=600",
                  category: "Programs",
            },
            {
                  title: "Kuliner Lokal: Rasa Nusantara di Cherrypop",
                  excerpt: "Festival kuliner yang menghadirkan cita rasa terbaik dari berbagai daerah di Indonesia.",
                  date: "November 30, 2024",
                  image: "/placeholder.svg?height=600&width=600",
                  category: "Programs",
            },
      ];

      return (
            <section className="py-10 bg-background">
                  <div className="container mx-auto px-4 max-w-7xl">
                        <div className="mb-6 flex items-end justify-between">
                              <div>
                                    <h3 className="text-lg font-medium mb-2 text-primary">
                                          NEWS
                                    </h3>
                                    <h2 className="text-3xl font-bold mb-1">
                                          LATEST UPDATES
                                    </h2>
                              </div>
                              <Link
                                    href="/news"
                                    className="flex items-center text-sm font-medium text-primary gap-1.5 hover:gap-2 transition-all"
                              >
                                    VIEW ALL{" "}
                                    <ArrowRight className="h-3.5 w-3.5" />
                              </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                              <div>
                                    <Link
                                          href={`/news/cherrypop-festival-2025-lineup`}
                                          className="group block"
                                    >
                                          <article className="border border-border/10 overflow-hidden hover:border-primary/30 transition-all duration-300 h-full">
                                                <div className="relative aspect-video overflow-hidden">
                                                      <Image
                                                            src={
                                                                  articles[0]
                                                                        .image ||
                                                                  "/placeholder.svg"
                                                            }
                                                            alt={
                                                                  articles[0]
                                                                        .title
                                                            }
                                                            fill
                                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                      />
                                                </div>
                                                <div className="p-5">
                                                      <div className="mb-2">
                                                            <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded">
                                                                  Announcements
                                                            </span>
                                                      </div>
                                                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                                            {articles[0].title}
                                                      </h3>
                                                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                                                            {
                                                                  articles[0]
                                                                        .excerpt
                                                            }
                                                      </p>
                                                      <div className="flex items-center justify-between">
                                                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                                  <Calendar
                                                                        size={
                                                                              14
                                                                        }
                                                                  />
                                                                  <span>
                                                                        {
                                                                              articles[0]
                                                                                    .date
                                                                        }
                                                                  </span>
                                                            </div>
                                                            <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                                                  Read{" "}
                                                                  <ArrowRight
                                                                        size={
                                                                              14
                                                                        }
                                                                  />
                                                            </span>
                                                      </div>
                                                </div>
                                          </article>
                                    </Link>
                              </div>

                              <div className="space-y-4">
                                    {articles
                                          .slice(1, 3)
                                          .map((article, index) => (
                                                <Link
                                                      key={index}
                                                      href={`/news/${article.title
                                                            .toLowerCase()
                                                            .replace(
                                                                  /[^\w\s]/g,
                                                                  "",
                                                            )
                                                            .replace(
                                                                  /\s+/g,
                                                                  "-",
                                                            )}`}
                                                      className="group"
                                                >
                                                      <article className="flex gap-4 p-4 border border-border/10 hover:border-primary/30 transition-all duration-300 bg-background">
                                                            <div className="relative w-24 h-24 rounded overflow-hidden flex-shrink-0">
                                                                  <Image
                                                                        src={
                                                                              article.image ||
                                                                              "/placeholder.svg"
                                                                        }
                                                                        alt={
                                                                              article.title
                                                                        }
                                                                        fill
                                                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                                  />
                                                            </div>
                                                            <div className="flex flex-col flex-1">
                                                                  <div className="mb-1">
                                                                        <span className="inline-block px-2 py-1 text-[10px] font-bold bg-primary text-primary-foreground">
                                                                              {
                                                                                    article.category
                                                                              }
                                                                        </span>
                                                                  </div>
                                                                  <h4 className="text-sm font-bold mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                                                                        {
                                                                              article.title
                                                                        }
                                                                  </h4>
                                                                  <p className="text-xs text-muted-foreground line-clamp-1">
                                                                        {
                                                                              article.excerpt
                                                                        }
                                                                  </p>
                                                                  <div className="flex items-center justify-between mt-auto pt-2">
                                                                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                                                              <Calendar
                                                                                    size={
                                                                                          10
                                                                                    }
                                                                              />
                                                                              <span>
                                                                                    {
                                                                                          article.date
                                                                                    }
                                                                              </span>
                                                                        </div>
                                                                        <span className="text-primary text-xs font-medium flex items-center gap-1 group-hover:gap-1.5 transition-all">
                                                                              Read{" "}
                                                                              <ArrowRight
                                                                                    size={
                                                                                          12
                                                                                    }
                                                                              />
                                                                        </span>
                                                                  </div>
                                                            </div>
                                                      </article>
                                                </Link>
                                          ))}
                              </div>
                        </div>
                  </div>
            </section>
      );
}

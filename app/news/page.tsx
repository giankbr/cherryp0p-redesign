"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Marquee } from "@/components/marquee";
import { Search, Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function getNewsArticles() {
      return {
            featured: {
                  title: "Cherrypop Festival 2025: Lineup Terbaik Indonesia Akan Hadir",
                  excerpt: "Festival musik tahunan di Yogyakarta akan menghadirkan lineup terbaik dari musisi Indonesia dan internasional. Tahun ini, Cherrypop Festival akan menghadirkan lebih dari 50 musisi dari berbagai genre musik.",
                  date: "December 15, 2024",
                  category: "Announcements",
                  image: "/placeholder.svg?height=600&width=900",
                  slug: "cherrypop-festival-2025-lineup",
            },
            articles: [
                  {
                        title: "Workshop Kreatif: Kolaborasi Seni dan Teknologi",
                        excerpt: "Serangkaian workshop kreatif akan digelar untuk mendukung pertumbuhan ekosistem kreatif Indonesia.",
                        date: "December 10, 2024",
                        category: "Programs",
                        image: "/placeholder.svg?height=400&width=600",
                        slug: "workshop-kreatif-kolaborasi-seni-teknologi",
                  },
                  {
                        title: "Interview: Hindia Tentang Musik dan Cherrypop Festival",
                        excerpt: "Berbincang dengan Hindia tentang musik, inspirasi, dan persiapannya untuk tampil di Cherrypop Festival 2025.",
                        date: "December 8, 2024",
                        category: "Interviews",
                        image: "/placeholder.svg?height=400&width=600",
                        slug: "interview-hindia-tentang-musik-cherrypop",
                  },
                  {
                        title: "Pameran Seni Kontemporer: Suara Anak Muda",
                        excerpt: "Pameran seni yang menampilkan karya-karya terbaik dari seniman muda Indonesia.",
                        date: "December 5, 2024",
                        category: "Programs",
                        image: "/placeholder.svg?height=400&width=600",
                        slug: "pameran-seni-kontemporer-suara-anak-muda",
                  },
                  {
                        title: "Kuliner Lokal: Rasa Nusantara di Cherrypop",
                        excerpt: "Festival kuliner yang menghadirkan cita rasa terbaik dari berbagai daerah di Indonesia.",
                        date: "November 30, 2024",
                        category: "Programs",
                        image: "/placeholder.svg?height=400&width=600",
                        slug: "kuliner-lokal-rasa-nusantara-cherrypop",
                  },
                  {
                        title: "Behind the Scenes: Persiapan Cherrypop Festival 2025",
                        excerpt: "Melihat bagaimana tim Cherrypop Festival mempersiapkan acara terbesar tahun ini.",
                        date: "November 25, 2024",
                        category: "Behind The Scenes",
                        image: "/placeholder.svg?height=400&width=600",
                        slug: "behind-scenes-persiapan-cherrypop-2025",
                  },
                  {
                        title: "Artist Spotlight: Efek Rumah Kaca",
                        excerpt: "Mengenal lebih dekat band Efek Rumah Kaca yang akan tampil di Cherrypop Festival 2025.",
                        date: "November 20, 2024",
                        category: "Artist Spotlight",
                        image: "/placeholder.svg?height=400&width=600",
                        slug: "artist-spotlight-efek-rumah-kaca",
                  },
                  {
                        title: "Cherrypop Festival 2024: Sukses Besar dengan 15,000 Pengunjung",
                        excerpt: "Festival musik tahun lalu berhasil menarik lebih dari 15,000 pengunjung dari seluruh Indonesia.",
                        date: "August 20, 2024",
                        category: "Recaps",
                        image: "/placeholder.svg?height=400&width=600",
                        slug: "cherrypop-festival-2024-sukses-besar",
                  },
                  {
                        title: "Community Spotlight: Musisi Lokal Yogyakarta",
                        excerpt: "Mengenal musisi-musisi lokal Yogyakarta yang berkontribusi pada perkembangan musik Indonesia.",
                        date: "August 15, 2024",
                        category: "Community",
                        image: "/placeholder.svg?height=400&width=600",
                        slug: "community-spotlight-musisi-lokal-yogyakarta",
                  },
            ],
      };
}

export default function NewsPage() {
      const { featured, articles } = getNewsArticles();
      const [selectedCategory, setSelectedCategory] = useState("all");
      const [searchQuery, setSearchQuery] = useState("");

      const categories = [
            { id: "all", name: "All" },
            { id: "announcements", name: "Announcements" },
            { id: "interviews", name: "Interviews" },
            { id: "programs", name: "Programs" },
            { id: "recaps", name: "Recaps" },
            { id: "behind-the-scenes", name: "Behind The Scenes" },
            { id: "community", name: "Community" },
            { id: "artist-spotlight", name: "Artist Spotlight" },
      ];

      const filteredArticles = articles.filter((article) => {
            const matchesCategory =
                  selectedCategory === "all" ||
                  article.category.toLowerCase().replace(/\s+/g, "-") ===
                        selectedCategory;
            const matchesSearch =
                  searchQuery === "" ||
                  article.title
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                  article.excerpt
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
      });

      return (
            <div className="min-h-screen flex flex-col bg-background">
                  <Header />
                  <Marquee />
                  <main className="flex-1">
                        {/* Hero Section - Compact */}
                        <section className="pt-20 pb-10">
                              <div className="container mx-auto px-4 max-w-7xl">
                                    <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                                          NEWS &{" "}
                                          <span className="text-primary">
                                                UPDATES
                                          </span>
                                    </h1>
                                    <p className="text-lg text-muted-foreground max-w-2xl">
                                          Stay up to date with the latest news,
                                          announcements, and stories from
                                          Cherrypop Festival.
                                    </p>
                              </div>
                        </section>

                        {/* Search Bar - Compact */}
                        <section className="py-8 bg-accent/[0.03]">
                              <div className="container mx-auto px-4 max-w-7xl">
                                    <div className="relative">
                                          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                          <input
                                                type="text"
                                                placeholder="Search articles..."
                                                value={searchQuery}
                                                onChange={(e) =>
                                                      setSearchQuery(
                                                            e.target.value,
                                                      )
                                                }
                                                className="w-full p-3 pl-12 bg-background border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                          />
                                    </div>
                              </div>
                        </section>

                        {/* Featured Article - Compact Hero */}
                        <section className="py-10">
                              <div className="container mx-auto px-4 max-w-7xl">
                                    <div className="mb-6">
                                          <h2 className="text-2xl font-bold mb-1">
                                                Featured Story
                                          </h2>
                                          <p className="text-sm text-muted-foreground">
                                                Don't miss our headline news
                                          </p>
                                    </div>

                                    <Link
                                          href={`/news/${featured.slug}`}
                                          className="group block"
                                    >
                                          <div className="border border-border/50 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-accent/[0.02]">
                                                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                                                      <div className="md:col-span-3 relative aspect-[16/10] md:aspect-auto md:min-h-[320px]">
                                                            <Image
                                                                  src={
                                                                        featured.image
                                                                  }
                                                                  alt={
                                                                        featured.title
                                                                  }
                                                                  fill
                                                                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                            />
                                                            <div className="absolute top-4 left-4">
                                                                  <span className="px-3 py-1 text-xs font-bold bg-primary text-primary-foreground rounded">
                                                                        {
                                                                              featured.category
                                                                        }
                                                                  </span>
                                                            </div>
                                                      </div>
                                                      <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                                                            <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                                                                  {
                                                                        featured.title
                                                                  }
                                                            </h3>
                                                            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                                                                  {
                                                                        featured.excerpt
                                                                  }
                                                            </p>
                                                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                                                  <Calendar
                                                                        size={
                                                                              16
                                                                        }
                                                                  />
                                                                  <span>
                                                                        {
                                                                              featured.date
                                                                        }
                                                                  </span>
                                                            </div>
                                                            <div className="mt-4 flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                                                                  Read Full
                                                                  Story
                                                                  <ArrowRight
                                                                        size={
                                                                              16
                                                                        }
                                                                  />
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </Link>
                              </div>
                        </section>

                        {/* Category Filter - Compact Tabs */}
                        <section className="py-8">
                              <div className="container mx-auto px-4 max-w-7xl">
                                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                          {categories.map((category) => (
                                                <button
                                                      key={category.id}
                                                      onClick={() =>
                                                            setSelectedCategory(
                                                                  category.id,
                                                            )
                                                      }
                                                      className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                                                            selectedCategory ===
                                                            category.id
                                                                  ? "bg-primary text-primary-foreground shadow-sm"
                                                                  : "bg-accent/[0.05] text-muted-foreground hover:text-foreground hover:bg-accent/10 border border-border/30"
                                                      }`}
                                                >
                                                      {category.name}
                                                </button>
                                          ))}
                                    </div>
                              </div>
                        </section>

                        {/* Articles Grid - Compact Cards */}
                        <section className="py-8 pb-16">
                              <div className="container mx-auto px-4 max-w-7xl">
                                    <div className="mb-6">
                                          <h2 className="text-2xl font-bold">
                                                {categories.find(
                                                      (c) =>
                                                            c.id ===
                                                            selectedCategory,
                                                )?.name || "All"}{" "}
                                                Articles
                                          </h2>
                                          <p className="text-sm text-muted-foreground">
                                                {filteredArticles.length}{" "}
                                                articles found
                                          </p>
                                    </div>

                                    {filteredArticles.length > 0 ? (
                                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {filteredArticles.map(
                                                      (article, index) => (
                                                            <Link
                                                                  key={index}
                                                                  href={`/news/${article.slug}`}
                                                                  className="group"
                                                            >
                                                                  <article className="border border-border/50 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-background h-full flex flex-col">
                                                                        <div className="relative aspect-video overflow-hidden bg-accent/5">
                                                                              <Image
                                                                                    src={
                                                                                          article.image
                                                                                    }
                                                                                    alt={
                                                                                          article.title
                                                                                    }
                                                                                    fill
                                                                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                                              />
                                                                        </div>
                                                                        <div className="p-4 flex flex-col flex-1">
                                                                              <div className="mb-3">
                                                                                    <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded">
                                                                                          {
                                                                                                article.category
                                                                                          }
                                                                                    </span>
                                                                              </div>
                                                                              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem]">
                                                                                    {
                                                                                          article.title
                                                                                    }
                                                                              </h3>
                                                                              <p className="text-sm text-muted-foreground mb-3 line-clamp-2 flex-1">
                                                                                    {
                                                                                          article.excerpt
                                                                                    }
                                                                              </p>
                                                                              <div className="flex items-center justify-between pt-3 border-t border-border/30">
                                                                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                                                          <Calendar
                                                                                                size={
                                                                                                      14
                                                                                                }
                                                                                          />
                                                                                          <span>
                                                                                                {
                                                                                                      article.date
                                                                                                }
                                                                                          </span>
                                                                                    </div>
                                                                                    <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                                                                          Read
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
                                                      ),
                                                )}
                                          </div>
                                    ) : (
                                          <div className="text-center py-16 border border-border/50 rounded-lg bg-accent/[0.02]">
                                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                                      <Search
                                                            className="text-primary"
                                                            size={24}
                                                      />
                                                </div>
                                                <h3 className="text-xl font-bold mb-2">
                                                      No articles found
                                                </h3>
                                                <p className="text-muted-foreground mb-4">
                                                      Try adjusting your search
                                                      or filter
                                                </p>
                                                <button
                                                      onClick={() => {
                                                            setSearchQuery("");
                                                            setSelectedCategory(
                                                                  "all",
                                                            );
                                                      }}
                                                      className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                                                >
                                                      Clear Filters
                                                </button>
                                          </div>
                                    )}
                              </div>
                        </section>
                  </main>
                  <Footer />
            </div>
      );
}

"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Marquee } from "@/components/marquee";
import Image from "next/image";
import Link from "next/link";
import {
      ArrowLeft,
      Calendar,
      Clock,
      User,
      Share2,
      Facebook,
      Twitter,
      Linkedin,
      Link2,
} from "lucide-react";
import { useState } from "react";

// This would normally come from a CMS or API
const getArticleData = (slug: string) => {
      const articles: Record<string, any> = {
            "cherrypop-festival-2025-lineup": {
                  title: "Cherrypop Festival 2025: Lineup Terbaik Indonesia Akan Hadir",
                  slug: "cherrypop-festival-2025-lineup",
                  date: "December 15, 2024",
                  author: "Tim Cherrypop",
                  readTime: "5 min",
                  image: "/placeholder.svg?height=800&width=1400",
                  category: "Announcements",
                  excerpt: "Festival musik tahunan di Yogyakarta akan menghadirkan lineup terbaik dari musisi Indonesia dan internasional.",
                  content: `
        <p>Cherrypop Festival, salah satu festival musik independen terbesar di Indonesia, telah mengumumkan lineup untuk tahun 2025. Festival yang akan memasuki tahun ke-8 ini akan digelar pada tanggal 15-17 Agustus 2025 di Lapangan Kenari, Yogyakarta.</p>

        <p>Mengusung tema "Resonansi Kreasi", Cherrypop Festival 2025 akan menampilkan lebih dari 50 musisi dari berbagai genre, mulai dari indie rock, folk, electronic, hingga hip-hop. Lineup tahun ini menghadirkan nama-nama besar seperti Hindia, Isyana Sarasvati, Feast, dan masih banyak lagi.</p>

        <h2>Main Stage Lineup</h2>

        <p>Panggung utama akan menampilkan headliner yang sudah dinanti-nanti oleh para penggemar musik Indonesia. Beberapa artis yang akan tampil antara lain:</p>

        <ul>
          <li><strong>Hindia</strong> - Musisi yang dikenal dengan karya-karya introspektif dan eksperimental</li>
          <li><strong>Isyana Sarasvati</strong> - Penyanyi dengan vokal powerful dan arrangement musik yang unik</li>
          <li><strong>Feast</strong> - Band indie rock yang telah malang melintang di kancah musik Indonesia</li>
          <li><strong>Barasuara</strong> - Band yang dikenal dengan lirik puitis dan musik yang energik</li>
        </ul>

        <h2>Program Spesial</h2>

        <p>Selain pertunjukan musik, Cherrypop Festival 2025 juga akan menghadirkan berbagai program spesial:</p>

        <ul>
          <li><strong>Workshop Kreatif</strong> - Sesi belajar bersama musisi dan kreator profesional</li>
          <li><strong>Instalasi Seni</strong> - Karya seni interaktif dari seniman lokal</li>
          <li><strong>Food Festival</strong> - Kuliner terbaik dari berbagai daerah di Indonesia</li>
          <li><strong>Community Stage</strong> - Platform untuk musisi lokal Yogyakarta</li>
        </ul>

        <p>"Kami sangat bersemangat untuk menghadirkan lineup terbaik tahun ini. Cherrypop Festival bukan hanya tentang musik, tetapi juga tentang membangun komunitas dan merayakan kreativitas Indonesia," ujar Arian Arifin, Festival Director Cherrypop.</p>

        <h2>Informasi Tiket</h2>

        <p>Tiket early bird akan mulai dijual pada bulan Januari 2025 dengan harga spesial. Penggemar musik diharapkan untuk segera membeli tiket karena biasanya habis dalam hitungan jam.</p>

        <p>Untuk informasi lebih lanjut tentang Cherrypop Festival 2025, kunjungi website resmi atau ikuti media sosial Cherrypop Festival.</p>
      `,
                  tags: ["Festival", "Musik", "Lineup", "2025", "Yogyakarta"],
            },
            "workshop-kreatif-kolaborasi-seni-teknologi": {
                  title: "Workshop Kreatif: Kolaborasi Seni dan Teknologi",
                  slug: "workshop-kreatif-kolaborasi-seni-teknologi",
                  date: "December 10, 2024",
                  author: "Fariz Jabba",
                  readTime: "4 min",
                  image: "/placeholder.svg?height=800&width=1400",
                  category: "Programs",
                  excerpt: "Serangkaian workshop kreatif akan digelar untuk mendukung pertumbuhan ekosistem kreatif Indonesia.",
                  content: `
        <p>Cherrypop Festival 2025 akan menghadirkan program workshop kreatif yang mempertemukan seni dan teknologi. Program ini dirancang untuk memberikan pembelajaran praktis bagi para kreator muda Indonesia.</p>

        <h2>Program Workshop</h2>

        <p>Workshop akan dibagi menjadi beberapa sesi dengan fokus berbeda:</p>

        <ul>
          <li><strong>Music Production 101</strong> - Belajar produksi musik dari dasar hingga mixing mastering</li>
          <li><strong>Visual Design for Musicians</strong> - Cara membuat visual identity yang kuat untuk musisi</li>
          <li><strong>Social Media Strategy</strong> - Membangun presence digital yang efektif</li>
          <li><strong>Live Performance Tech</strong> - Teknologi yang digunakan dalam pertunjukan live</li>
        </ul>

        <h2>Mentor Berpengalaman</h2>

        <p>Workshop akan dipandu oleh praktisi dan musisi profesional yang telah berpengalaman di industri kreatif Indonesia. Para peserta akan mendapatkan insight langsung dari pengalaman mereka.</p>

        <p>Pendaftaran workshop akan dibuka bersamaan dengan penjualan tiket early bird. Kuota terbatas untuk memastikan kualitas pembelajaran yang optimal.</p>
      `,
                  tags: ["Workshop", "Kreatif", "Teknologi", "Seni", "Program"],
            },
      };

      return (
            articles[slug] || {
                  title: "Article Not Found",
                  slug: slug,
                  date: "N/A",
                  author: "Unknown",
                  readTime: "N/A",
                  image: "/placeholder.svg?height=800&width=1400",
                  category: "General",
                  excerpt: "The article you're looking for doesn't exist.",
                  content: "<p>Sorry, we couldn't find this article.</p>",
                  tags: [],
            }
      );
};

// This would normally come from a CMS or API
const getRelatedArticles = () => {
      return [
            {
                  title: "Interview: Hindia Tentang Musik dan Cherrypop Festival",
                  slug: "interview-hindia-tentang-musik-cherrypop",
                  excerpt: "Berbincang dengan Hindia tentang musik, inspirasi, dan persiapannya untuk tampil.",
                  date: "December 8, 2024",
                  category: "Interviews",
                  image: "/placeholder.svg?height=400&width=600",
            },
            {
                  title: "Behind the Scenes: Persiapan Cherrypop Festival 2025",
                  slug: "behind-scenes-persiapan-cherrypop-2025",
                  excerpt: "Melihat bagaimana tim Cherrypop Festival mempersiapkan acara terbesar tahun ini.",
                  date: "November 25, 2024",
                  category: "Behind The Scenes",
                  image: "/placeholder.svg?height=400&width=600",
            },
            {
                  title: "Kuliner Lokal: Rasa Nusantara di Cherrypop",
                  slug: "kuliner-lokal-rasa-nusantara-cherrypop",
                  excerpt: "Festival kuliner yang menghadirkan cita rasa terbaik dari berbagai daerah.",
                  date: "November 30, 2024",
                  category: "Programs",
                  image: "/placeholder.svg?height=400&width=600",
            },
      ];
};

export default function NewsDetailPage({
      params,
}: {
      params: { slug: string };
}) {
      const article = getArticleData(params.slug);
      const relatedArticles = getRelatedArticles();
      const [copied, setCopied] = useState(false);

      const handleShare = (platform: string) => {
            const url =
                  typeof window !== "undefined" ? window.location.href : "";
            const text = article.title;

            switch (platform) {
                  case "facebook":
                        window.open(
                              `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
                              "_blank",
                        );
                        break;
                  case "twitter":
                        window.open(
                              `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
                              "_blank",
                        );
                        break;
                  case "linkedin":
                        window.open(
                              `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
                              "_blank",
                        );
                        break;
                  case "copy":
                        navigator.clipboard.writeText(url);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                        break;
            }
      };

      return (
            <div className="min-h-screen flex flex-col bg-background">
                  <Header />
                  <Marquee />
                  <main className="flex-1">
                        {/* Hero Image - Compact */}
                        <section className="relative h-[40vh] md:h-[50vh]">
                              <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover"
                                    priority
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>

                              {/* Back Button Overlay */}
                              <div className="absolute top-6 left-0 right-0 z-10">
                                    <div className="container mx-auto px-4 max-w-4xl">
                                          <Link
                                                href="/news"
                                                className="inline-flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm border border-border rounded-lg text-sm font-medium hover:bg-background hover:border-primary/50 transition-all group"
                                          >
                                                <ArrowLeft
                                                      size={16}
                                                      className="transition-transform group-hover:-translate-x-1"
                                                />
                                                Back to News
                                          </Link>
                                    </div>
                              </div>
                        </section>

                        {/* Article Content */}
                        <section className="py-10 -mt-20 relative z-10">
                              <div className="container mx-auto px-4 max-w-4xl">
                                    {/* Article Header */}
                                    <div className="mb-8">
                                          {/* Category Badge */}
                                          <div className="mb-4">
                                                <span className="inline-block px-3 py-1 text-xs font-bold bg-primary text-primary-foreground rounded">
                                                      {article.category}
                                                </span>
                                          </div>

                                          {/* Title */}
                                          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                                {article.title}
                                          </h1>

                                          {/* Excerpt */}
                                          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                                                {article.excerpt}
                                          </p>

                                          {/* Meta Info */}
                                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-6 border-b border-border">
                                                <div className="flex items-center gap-2">
                                                      <Calendar size={16} />
                                                      <span>
                                                            {article.date}
                                                      </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                      <User size={16} />
                                                      <span>
                                                            {article.author}
                                                      </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                      <Clock size={16} />
                                                      <span>
                                                            {article.readTime}{" "}
                                                            read
                                                      </span>
                                                </div>
                                          </div>
                                    </div>

                                    {/* Article Body */}
                                    <div className="prose prose-lg prose-slate dark:prose-invert max-w-none mb-10">
                                          <style jsx global>{`
                                                .prose {
                                                      color: hsl(
                                                            var(--foreground)
                                                      );
                                                }
                                                .prose h2 {
                                                      color: hsl(
                                                            var(--foreground)
                                                      );
                                                      font-size: 1.875rem;
                                                      font-weight: 700;
                                                      margin-top: 2rem;
                                                      margin-bottom: 1rem;
                                                }
                                                .prose h3 {
                                                      color: hsl(
                                                            var(--foreground)
                                                      );
                                                      font-size: 1.5rem;
                                                      font-weight: 600;
                                                      margin-top: 1.5rem;
                                                      margin-bottom: 0.75rem;
                                                }
                                                .prose p {
                                                      margin-bottom: 1.25rem;
                                                      line-height: 1.8;
                                                }
                                                .prose ul,
                                                .prose ol {
                                                      margin-top: 1rem;
                                                      margin-bottom: 1.5rem;
                                                      padding-left: 1.5rem;
                                                }
                                                .prose li {
                                                      margin-bottom: 0.5rem;
                                                }
                                                .prose strong {
                                                      color: hsl(
                                                            var(--primary)
                                                      );
                                                      font-weight: 600;
                                                }
                                                .prose a {
                                                      color: hsl(
                                                            var(--primary)
                                                      );
                                                      text-decoration: underline;
                                                }
                                                .prose a:hover {
                                                      opacity: 0.8;
                                                }
                                          `}</style>
                                          <div
                                                dangerouslySetInnerHTML={{
                                                      __html: article.content,
                                                }}
                                          ></div>
                                    </div>

                                    {/* Tags */}
                                    <div className="mb-8">
                                          <h3 className="text-sm font-bold mb-3 uppercase text-muted-foreground">
                                                Tags
                                          </h3>
                                          <div className="flex flex-wrap gap-2">
                                                {article.tags.map(
                                                      (
                                                            tag: string,
                                                            index: number,
                                                      ) => (
                                                            <Link
                                                                  key={index}
                                                                  href={`/news?category=${tag.toLowerCase()}`}
                                                                  className="px-3 py-1 bg-accent/10 hover:bg-accent/20 border border-border/50 rounded-lg text-sm transition-colors"
                                                            >
                                                                  #{tag}
                                                            </Link>
                                                      ),
                                                )}
                                          </div>
                                    </div>

                                    {/* Share Section */}
                                    <div className="border-y border-border py-6 mb-10">
                                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                                <h3 className="text-lg font-bold">
                                                      Share This Article
                                                </h3>
                                                <div className="flex items-center gap-2">
                                                      <button
                                                            onClick={() =>
                                                                  handleShare(
                                                                        "facebook",
                                                                  )
                                                            }
                                                            className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                                                            aria-label="Share on Facebook"
                                                      >
                                                            <Facebook
                                                                  size={18}
                                                            />
                                                      </button>
                                                      <button
                                                            onClick={() =>
                                                                  handleShare(
                                                                        "twitter",
                                                                  )
                                                            }
                                                            className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                                                            aria-label="Share on Twitter"
                                                      >
                                                            <Twitter
                                                                  size={18}
                                                            />
                                                      </button>
                                                      <button
                                                            onClick={() =>
                                                                  handleShare(
                                                                        "linkedin",
                                                                  )
                                                            }
                                                            className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                                                            aria-label="Share on LinkedIn"
                                                      >
                                                            <Linkedin
                                                                  size={18}
                                                            />
                                                      </button>
                                                      <button
                                                            onClick={() =>
                                                                  handleShare(
                                                                        "copy",
                                                                  )
                                                            }
                                                            className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all relative"
                                                            aria-label="Copy link"
                                                      >
                                                            <Link2 size={18} />
                                                            {copied && (
                                                                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded whitespace-nowrap">
                                                                        Link
                                                                        copied!
                                                                  </span>
                                                            )}
                                                      </button>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </section>

                        {/* Related Articles - Compact */}
                        <section className="py-10 pb-16 bg-accent/[0.03]">
                              <div className="container mx-auto px-4 max-w-5xl">
                                    <div className="mb-8">
                                          <h2 className="text-3xl font-bold mb-2">
                                                Related Articles
                                          </h2>
                                          <p className="text-muted-foreground">
                                                Continue reading more stories
                                          </p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                          {relatedArticles.map(
                                                (
                                                      related: any,
                                                      index: number,
                                                ) => (
                                                      <Link
                                                            key={index}
                                                            href={`/news/${related.slug}`}
                                                            className="group"
                                                      >
                                                            <article className="border border-border/50 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-background h-full flex flex-col">
                                                                  <div className="relative aspect-video overflow-hidden bg-accent/5">
                                                                        <Image
                                                                              src={
                                                                                    related.image
                                                                              }
                                                                              alt={
                                                                                    related.title
                                                                              }
                                                                              fill
                                                                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                                        />
                                                                  </div>
                                                                  <div className="p-4 flex flex-col flex-1">
                                                                        <div className="mb-3">
                                                                              <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded">
                                                                                    {
                                                                                          related.category
                                                                                    }
                                                                              </span>
                                                                        </div>
                                                                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem]">
                                                                              {
                                                                                    related.title
                                                                              }
                                                                        </h3>
                                                                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2 flex-1">
                                                                              {
                                                                                    related.excerpt
                                                                              }
                                                                        </p>
                                                                        <div className="flex items-center gap-2 text-xs text-muted-foreground pt-3 border-t border-border/30">
                                                                              <Calendar
                                                                                    size={
                                                                                          14
                                                                                    }
                                                                              />
                                                                              <span>
                                                                                    {
                                                                                          related.date
                                                                                    }
                                                                              </span>
                                                                        </div>
                                                                  </div>
                                                            </article>
                                                      </Link>
                                                ),
                                          )}
                                    </div>
                              </div>
                        </section>
                  </main>
                  <Footer />
            </div>
      );
}

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Marquee } from "@/components/marquee"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Search } from "lucide-react"

// This would normally come from a CMS or API
const getNewsArticles = () => {
  // Mock data for demonstration
  return {
    featured: {
      title: "CHERRYPOP FESTIVAL ANNOUNCES 2025 DATES",
      slug: "cherrypop-festival-announces-2025-dates",
      excerpt: "Festival musik tahunan di Yogyakarta akan kembali digelar pada 15-17 Agustus 2025.",
      date: "10 JANUARI 2025",
      image: "/placeholder.svg?height=800&width=1200",
    },
    latest: [
      {
        title: "INTERVIEW WITH HINDIA",
        slug: "interview-with-hindia",
        excerpt: "Berbincang dengan Hindia tentang musik dan penampilannya di Cherrypop Festival.",
        date: "5 JANUARI 2025",
        image: "/placeholder.svg?height=400&width=600",
        category: "Interviews",
      },
      {
        title: "REKAM SKENA: DOKUMENTASI MUSIK LOKAL",
        slug: "rekam-skena-dokumentasi-musik-lokal",
        excerpt: "Melihat bagaimana program Rekam Skena mendokumentasikan pergerakan musik lokal.",
        date: "28 DESEMBER 2024",
        image: "/placeholder.svg?height=400&width=600",
        category: "Programs",
      },
      {
        title: "WEEKEND POP TOUR DATES ANNOUNCED",
        slug: "weekend-pop-tour-dates-announced",
        excerpt: "Jadwal lengkap tur pra-acara Cherrypop Festival di beberapa kota di Indonesia.",
        date: "15 DESEMBER 2024",
        image: "/placeholder.svg?height=400&width=600",
        category: "Announcements",
      },
    ],
    archive: [
      {
        title: "CHERRYPOP FESTIVAL 2024 RECAP",
        slug: "cherrypop-festival-2024-recap",
        excerpt: "Melihat kembali momen-momen terbaik dari Cherrypop Festival 2024.",
        date: "30 NOVEMBER 2024",
        image: "/placeholder.svg?height=400&width=600",
        category: "Recaps",
      },
      {
        title: "BEHIND THE SCENES: STAGE DESIGN",
        slug: "behind-the-scenes-stage-design",
        excerpt: "Proses kreatif di balik desain panggung Cherrypop Festival.",
        date: "15 NOVEMBER 2024",
        image: "/placeholder.svg?height=400&width=600",
        category: "Behind The Scenes",
      },
      {
        title: "MEET THE VOLUNTEERS",
        slug: "meet-the-volunteers",
        excerpt: "Mengenal para relawan yang membantu kesuksesan Cherrypop Festival.",
        date: "1 NOVEMBER 2024",
        image: "/placeholder.svg?height=400&width=600",
        category: "Community",
      },
      {
        title: "LOCAL FOOD VENDORS AT CHERRYPOP",
        slug: "local-food-vendors-at-cherrypop",
        excerpt: "Kuliner lokal yang akan hadir di Cherrypop Festival 2025.",
        date: "20 OKTOBER 2024",
        image: "/placeholder.svg?height=400&width=600",
        category: "Food & Drinks",
      },
      {
        title: "SUSTAINABILITY INITIATIVES FOR 2025",
        slug: "sustainability-initiatives-for-2025",
        excerpt: "Program keberlanjutan yang akan diterapkan di Cherrypop Festival 2025.",
        date: "5 OKTOBER 2024",
        image: "/placeholder.svg?height=400&width=600",
        category: "Sustainability",
      },
      {
        title: "ARTIST SPOTLIGHT: EFEK RUMAH KACA",
        slug: "artist-spotlight-efek-rumah-kaca",
        excerpt: "Mengenal lebih dekat Efek Rumah Kaca, salah satu headliner Cherrypop Festival 2025.",
        date: "20 SEPTEMBER 2024",
        image: "/placeholder.svg?height=400&width=600",
        category: "Artist Spotlight",
      },
    ],
  }
}

export default function NewsPage() {
  const { featured, latest, archive } = getNewsArticles()

  const categories = [
    "All",
    "Announcements",
    "Interviews",
    "Programs",
    "Recaps",
    "Behind The Scenes",
    "Community",
    "Artist Spotlight",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Marquee />
      <main className="flex-1 bg-black">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-16">
              <h1 className="text-6xl md:text-8xl font-bold mb-4">
                NEWS & <span className="text-primary">UPDATES</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Stay up to date with the latest news, announcements, and stories from Cherrypop Festival.
              </p>
            </div>

            {/* Search and Categories */}
            <div className="mb-16 flex flex-col md:flex-row justify-between gap-6">
              <div className="relative max-w-md w-full">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full p-3 pl-10 bg-accent/5 border border-border focus:border-primary outline-none transition-colors"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-3 py-1 text-sm ${
                      index === 0 ? "bg-primary text-white" : "bg-accent/10 hover:bg-accent/20 transition-colors"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Article */}
            <div className="mb-16">
              <h2 className="text-primary text-lg mb-2">FEATURED</h2>
              <Link href={`/news/${featured.slug}`} className="group">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={featured.image || "/placeholder.svg"}
                      alt={featured.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      {featured.date}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {featured.title}
                    </h3>
                    <p className="text-muted-foreground text-lg mb-6">{featured.excerpt}</p>
                    <div className="inline-flex items-center group">
                      READ MORE <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Latest Articles */}
            <div className="mb-16">
              <h2 className="text-primary text-lg mb-6">LATEST ARTICLES</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {latest.map((article, index) => (
                  <Link key={index} href={`/news/${article.slug}`} className="group">
                    <div className="mb-4 relative aspect-[4/3] overflow-hidden">
                      <div className="absolute top-0 right-0 bg-primary z-10 px-3 py-1 text-xs">{article.category}</div>
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {article.date}
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground">{article.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Archive */}
            <div>
              <h2 className="text-primary text-lg mb-6">ARCHIVE</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {archive.map((article, index) => (
                  <Link key={index} href={`/news/${article.slug}`} className="group">
                    <div className="mb-4 relative aspect-[4/3] overflow-hidden">
                      <div className="absolute top-0 right-0 bg-accent/20 z-10 px-3 py-1 text-xs">
                        {article.category}
                      </div>
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {article.date}
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground">{article.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="mt-16 flex justify-center">
              <div className="flex space-x-2">
                <button className="w-10 h-10 flex items-center justify-center bg-primary text-white">1</button>
                <button className="w-10 h-10 flex items-center justify-center bg-accent/10 hover:bg-accent/20 transition-colors">
                  2
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-accent/10 hover:bg-accent/20 transition-colors">
                  3
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-accent/10 hover:bg-accent/20 transition-colors">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

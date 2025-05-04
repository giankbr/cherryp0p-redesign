import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function UpcomingShows() {
  const shows = [
    {
      city: "YOGYAKARTA",
      event: "CHERRYPOP",
      date: "MINGGU, 15 AGUSTUS",
      image: "/placeholder.svg?height=600&width=600",
    },
    {
      city: "JAKARTA",
      event: "WE THE FEST",
      date: "JUMAT, 19 AGUSTUS",
      image: "/placeholder.svg?height=600&width=600",
    },
    {
      city: "BANDUNG",
      event: "EKSPECTANICA",
      date: "SABTU, 20 AGUSTUS",
      image: "/placeholder.svg?height=600&width=600",
    },
  ]

  const articles = [
    {
      title: "Sekilas tentang perjalanan Cherrypop Festival",
      date: "05 Juli 2024",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Panggung pertama Cherrypop di tahun 2024",
      date: "15 Maret 2024",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Pre-Order T-Shirt Cherrypop Festival 2025",
      date: "20 Desember 2023",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-sm font-medium mb-2">THE NEXT</h2>
          <h3 className="text-2xl font-bold mb-8">UPCOMING SHOWS</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shows.map((show, index) => (
              <div key={index} className="hover-scale">
                <h2 className="text-3xl md:text-4xl font-bold mb-1">{show.city}</h2>
                <h3 className="text-xl md:text-2xl font-bold mb-1">{show.event}</h3>
                <p className="text-sm text-muted-foreground mb-4">{show.date}</p>
                <div className="relative aspect-[4/3] mb-4">
                  <Image src={show.image || "/placeholder.svg"} alt={show.city} fill className="object-cover" />
                </div>
                <Link href="#" className="flex items-center text-sm group">
                  Baca Selengkapnya{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8">LATEST ARTICLES</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div key={index} className="hover-scale">
                <div className="relative aspect-[4/3] mb-4">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <h4 className="text-lg font-bold mb-1">{article.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{article.date}</p>
                <Link href="#" className="flex items-center text-sm group">
                  Baca Selengkapnya{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

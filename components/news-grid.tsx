import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function NewsGrid() {
  const articles = [
    {
      title: "CHERRYPOP FESTIVAL ANNOUNCES 2025 DATES",
      excerpt: "Festival musik tahunan di Yogyakarta akan kembali digelar pada 15-17 Agustus 2025.",
      date: "10 JANUARI 2025",
      image: "/placeholder.svg?height=600&width=900",
      featured: true,
    },
    {
      title: "INTERVIEW WITH HINDIA",
      excerpt: "Berbincang dengan Hindia tentang musik dan penampilannya di Cherrypop Festival.",
      date: "5 JANUARI 2025",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "REKAM SKENA: DOKUMENTASI MUSIK LOKAL",
      excerpt: "Melihat bagaimana program Rekam Skena mendokumentasikan pergerakan musik lokal.",
      date: "28 DESEMBER 2024",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "WEEKEND POP TOUR DATES ANNOUNCED",
      excerpt: "Jadwal lengkap tur pra-acara Cherrypop Festival di beberapa kota di Indonesia.",
      date: "15 DESEMBER 2024",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-primary text-lg mb-2">NEWS</h2>
          <h3 className="text-4xl md:text-6xl font-bold">LATEST UPDATES</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border mb-px">
          <div className="bg-black">
            <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden group">
              <Image
                src={articles[0].image || "/placeholder.svg"}
                alt={articles[0].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <p className="text-sm text-primary mb-2">{articles[0].date}</p>
                <h3 className="text-3xl font-bold mb-4">{articles[0].title}</h3>
                <p className="text-muted-foreground mb-6">{articles[0].excerpt}</p>
                <Link href="#" className="inline-flex items-center text-white group">
                  READ MORE <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {articles.slice(1).map((article, index) => (
              <div key={index} className="bg-black p-6">
                <div className="h-full flex flex-col">
                  <p className="text-xs text-primary mb-2">{article.date}</p>
                  <h3 className="text-xl font-bold mb-4">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">{article.excerpt}</p>
                  <Link href="#" className="inline-flex items-center text-sm text-white group">
                    READ MORE <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

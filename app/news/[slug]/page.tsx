import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Marquee } from "@/components/marquee"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Instagram } from "lucide-react"

// This would normally come from a CMS or API
const getArticleData = (slug: string) => {
  // Mock data for demonstration
  return {
    title: "CHERRYPOP FESTIVAL ANNOUNCES 2025 DATES",
    slug: "cherrypop-festival-announces-2025-dates",
    date: "10 JANUARI 2025",
    author: "Tim Cherrypop",
    readTime: "5 min read",
    image: "/placeholder.svg?height=1200&width=2000",
    excerpt: "Festival musik tahunan di Yogyakarta akan kembali digelar pada 15-17 Agustus 2025.",
    content: `
      <p>Cherrypop Festival, salah satu festival musik independen terbesar di Indonesia, telah mengumumkan tanggal penyelenggaraan untuk tahun 2025. Festival yang akan memasuki tahun ke-8 ini akan digelar pada tanggal 15-17 Agustus 2025 di Yogyakarta.</p>
      
      <p>Mengusung tema "Resonansi Kreasi", Cherrypop Festival 2025 akan menampilkan lebih dari 50 musisi dari berbagai genre, mulai dari indie rock, folk, electronic, hingga hip-hop. Selain pertunjukan musik, festival ini juga akan menghadirkan instalasi seni, workshop kreatif, dan area kuliner yang menampilkan makanan dan minuman lokal.</p>
      
      <p>"Kami sangat bersemangat untuk mengumumkan tanggal Cherrypop Festival 2025. Tahun ini, kami berencana untuk membuat pengalaman festival yang lebih imersif dan inklusif bagi semua pengunjung," ujar Arian Arifin, Festival Director Cherrypop.</p>
      
      <p>Lineup pertama akan diumumkan pada bulan Maret 2025, dan tiket early bird akan mulai dijual pada bulan April 2025. Penggemar musik dan seni diharapkan untuk segera membeli tiket karena tiket early bird biasanya habis dalam hitungan jam.</p>
      
      <h2>Program Baru</h2>
      
      <p>Cherrypop Festival 2025 juga akan memperkenalkan beberapa program baru, termasuk:</p>
      
      <ul>
        <li>Cherrypop Labs: Sesi mentoring dan workshop untuk musisi dan seniman muda</li>
        <li>Green Initiative: Program keberlanjutan untuk mengurangi jejak karbon festival</li>
        <li>Community Stage: Panggung khusus untuk menampilkan bakat-bakat lokal dari Yogyakarta</li>
      </ul>
      
      <p>"Kami percaya bahwa festival musik bukan hanya tentang hiburan, tetapi juga tentang membangun komunitas dan mendukung ekosistem kreatif lokal. Program-program baru ini adalah bagian dari komitmen kami untuk memberikan dampak positif bagi masyarakat," tambah Fariz Jabba, Creative Director Cherrypop.</p>
      
      <h2>Kolaborasi Spesial</h2>
      
      <p>Cherrypop Festival 2025 juga akan menampilkan beberapa kolaborasi spesial antara musisi Indonesia dan internasional. Detail kolaborasi ini akan diumumkan bersamaan dengan pengumuman lineup pertama.</p>
      
      <p>Untuk informasi lebih lanjut tentang Cherrypop Festival 2025, kunjungi website resmi festival atau ikuti akun media sosial Cherrypop Festival.</p>
    `,
    tags: ["Festival", "Musik", "Yogyakarta", "Event", "2025"],
  }
}

// This would normally come from a CMS or API
const getRelatedArticles = () => {
  // Mock data for demonstration
  return [
    {
      title: "INTERVIEW WITH HINDIA",
      slug: "interview-with-hindia",
      excerpt: "Berbincang dengan Hindia tentang musik dan penampilannya di Cherrypop Festival.",
      date: "5 JANUARI 2025",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "REKAM SKENA: DOKUMENTASI MUSIK LOKAL",
      slug: "rekam-skena-dokumentasi-musik-lokal",
      excerpt: "Melihat bagaimana program Rekam Skena mendokumentasikan pergerakan musik lokal.",
      date: "28 DESEMBER 2024",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "WEEKEND POP TOUR DATES ANNOUNCED",
      slug: "weekend-pop-tour-dates-announced",
      excerpt: "Jadwal lengkap tur pra-acara Cherrypop Festival di beberapa kota di Indonesia.",
      date: "15 DESEMBER 2024",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const article = getArticleData(params.slug)
  const relatedArticles = getRelatedArticles()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Marquee />
      <main className="flex-1 bg-black">
        {/* Hero Image */}
        <div className="relative h-[50vh] md:h-[70vh]">
          <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        </div>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Back to News */}
              <div className="mb-8">
                <Link href="/news" className="inline-flex items-center text-muted-foreground hover:text-white group">
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> BACK TO NEWS
                </Link>
              </div>

              {/* Article Header */}
              <div className="mb-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">{article.title}</h1>
                <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-6">
                  <div className="flex items-center mr-6 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {article.date}
                  </div>
                  <div className="flex items-center mr-6 mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    {article.readTime}
                  </div>
                  <div className="mb-2">By {article.author}</div>
                </div>
                <p className="text-xl">{article.excerpt}</p>
              </div>

              {/* Article Body */}
              <div className="prose prose-lg prose-invert max-w-none mb-12">
                <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
              </div>

              {/* Tags */}
              <div className="mb-12">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/news/tag/${tag.toLowerCase()}`}
                      className="px-3 py-1 bg-accent/10 hover:bg-accent/20 transition-colors text-sm"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="border-t border-b border-border py-6 mb-12">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold">Share This Article</div>
                  <div className="flex space-x-4">
                    <button className="hover:text-primary transition-colors">
                      <Facebook className="h-5 w-5" />
                    </button>
                    <button className="hover:text-primary transition-colors">
                      <Twitter className="h-5 w-5" />
                    </button>
                    <button className="hover:text-primary transition-colors">
                      <Instagram className="h-5 w-5" />
                    </button>
                    <button className="hover:text-primary transition-colors">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle, index) => (
                  <Link key={index} href={`/news/${relatedArticle.slug}`} className="group">
                    <div className="mb-4 relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={relatedArticle.image || "/placeholder.svg"}
                        alt={relatedArticle.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-primary mb-2">{relatedArticle.date}</p>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-muted-foreground">{relatedArticle.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

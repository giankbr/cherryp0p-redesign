import { Header } from '@/components/header';
import { Marquee } from '@/components/marquee';
import { Search } from 'lucide-react';

function getNewsArticles() {
  return {
    featured: {
      title: 'Cherrypop Festival 2025: Lineup Terbaik Indonesia Akan Hadir',
      excerpt: 'Festival musik tahunan di Yogyakarta akan menghadirkan lineup terbaik dari musisi Indonesia dan internasional. Tahun ini, Cherrypop Festival akan menghadirkan lebih dari 50 musisi dari berbagai genre musik.',
      date: 'December 15, 2024',
      category: 'Announcements',
      image: '/placeholder.svg?height=600&width=900',
      slug: 'cherrypop-festival-2025-lineup',
    },
    latest: [
      {
        title: 'Workshop Kreatif: Kolaborasi Seni dan Teknologi',
        excerpt: 'Serangkaian workshop kreatif akan digelar untuk mendukung pertumbuhan ekosistem kreatif Indonesia.',
        date: 'December 10, 2024',
        category: 'Programs',
        image: '/placeholder.svg?height=400&width=600',
        slug: 'workshop-kreatif-kolaborasi-seni-teknologi',
      },
      {
        title: 'Interview: Hindia Tentang Musik dan Cherrypop Festival',
        excerpt: 'Berbincang dengan Hindia tentang musik, inspirasi, dan persiapannya untuk tampil di Cherrypop Festival 2025.',
        date: 'December 8, 2024',
        category: 'Interviews',
        image: '/placeholder.svg?height=400&width=600',
        slug: 'interview-hindia-tentang-musik-cherrypop',
      },
      {
        title: 'Pameran Seni Kontemporer: Suara Anak Muda',
        excerpt: 'Pameran seni yang menampilkan karya-karya terbaik dari seniman muda Indonesia.',
        date: 'December 5, 2024',
        category: 'Programs',
        image: '/placeholder.svg?height=400&width=600',
        slug: 'pameran-seni-kontemporer-suara-anak-muda',
      },
      {
        title: 'Kuliner Lokal: Rasa Nusantara di Cherrypop',
        excerpt: 'Festival kuliner yang menghadirkan cita rasa terbaik dari berbagai daerah di Indonesia.',
        date: 'November 30, 2024',
        category: 'Programs',
        image: '/placeholder.svg?height=400&width=600',
        slug: 'kuliner-lokal-rasa-nusantara-cherrypop',
      },
      {
        title: 'Behind the Scenes: Persiapan Cherrypop Festival 2025',
        excerpt: 'Melihat bagaimana tim Cherrypop Festival mempersiapkan acara terbesar tahun ini.',
        date: 'November 25, 2024',
        category: 'Behind The Scenes',
        image: '/placeholder.svg?height=400&width=600',
        slug: 'behind-scenes-persiapan-cherrypop-2025',
      },
      {
        title: 'Artist Spotlight: Efek Rumah Kaca',
        excerpt: 'Mengenal lebih dekat band Efek Rumah Kaca yang akan tampil di Cherrypop Festival 2025.',
        date: 'November 20, 2024',
        category: 'Artist Spotlight',
        image: '/placeholder.svg?height=400&width=600',
        slug: 'artist-spotlight-efek-rumah-kaca',
      },
    ],
    archive: [
      {
        title: 'Cherrypop Festival 2024: Sukses Besar dengan 15,000 Pengunjung',
        excerpt: 'Festival musik tahun lalu berhasil menarik lebih dari 15,000 pengunjung dari seluruh Indonesia.',
        date: 'August 20, 2024',
        category: 'Recaps',
        image: '/placeholder.svg?height=400&width=600',
        slug: 'cherrypop-festival-2024-sukses-besar',
      },
      {
        title: 'Community Spotlight: Musisi Lokal Yogyakarta',
        excerpt: 'Mengenal musisi-musisi lokal Yogyakarta yang berkontribusi pada perkembangan musik Indonesia.',
        date: 'August 15, 2024',
        category: 'Community',
        image: '/placeholder.svg?height=400&width=600',
        slug: 'community-spotlight-musisi-lokal-yogyakarta',
      },
    ],
  };
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
      <main className="flex-1">
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="inline-block bg-primary text-white px-3 py-1 text-sm mb-4 w-fit">
                    {featured.category}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{featured.title}</h2>
                  <p className="text-muted-foreground mb-4">{featured.excerpt}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">{featured.date}</span>
                    <a href={`/news/${featured.slug}`} className="text-primary hover:underline">
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Latest Articles */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {latest.map((article, index) => (
                  <article key={index} className="group">
                    <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="inline-block bg-accent/10 text-primary px-2 py-1 text-xs mb-2">
                      {article.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                      <a href={`/news/${article.slug}`} className="text-primary hover:underline text-sm">
                        Read More →
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Archive */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Archive</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {archive.map((article, index) => (
                  <article key={index} className="flex gap-4 group">
                    <div className="relative w-24 h-24 overflow-hidden rounded-lg shrink-0">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="inline-block bg-accent/10 text-primary px-2 py-1 text-xs mb-2">
                        {article.category}
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2 line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{article.date}</span>
                        <a href={`/news/${article.slug}`} className="text-primary hover:underline text-sm">
                          Read More →
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

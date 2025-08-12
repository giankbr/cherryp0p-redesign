import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function NewsGrid() {
  const articles = [
    {
      title: 'Cherrypop Festival 2025: Lineup Terbaik Indonesia Akan Hadir',
      excerpt: 'Festival musik tahunan di Yogyakarta akan menghadirkan lineup terbaik dari musisi Indonesia dan internasional.',
      date: 'December 15, 2024',
      image: '/placeholder.svg?height=600&width=600',
    },
    {
      title: 'Workshop Kreatif: Kolaborasi Seni dan Teknologi',
      excerpt: 'Serangkaian workshop kreatif akan digelar untuk mendukung pertumbuhan ekosistem kreatif Indonesia.',
      date: 'December 10, 2024',
      image: '/placeholder.svg?height=600&width=600',
    },
    {
      title: 'Pameran Seni Kontemporer: Suara Anak Muda',
      excerpt: 'Pameran seni yang menampilkan karya-karya terbaik dari seniman muda Indonesia.',
      date: 'December 5, 2024',
      image: '/placeholder.svg?height=600&width=600',
    },
    {
      title: 'Kuliner Lokal: Rasa Nusantara di Cherrypop',
      excerpt: 'Festival kuliner yang menghadirkan cita rasa terbaik dari berbagai daerah di Indonesia.',
      date: 'November 30, 2024',
      image: '/placeholder.svg?height=600&width=600',
    },
  ];

  return (
    <section className="py-16 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-primary text-lg mb-2">NEWS</h2>
          <h3 className="text-4xl md:text-6xl font-bold">LATEST UPDATES</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border mb-px">
          <div className="bg-background">
            <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden group">
              <Image src={articles[0].image || '/placeholder.svg'} alt={articles[0].title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <p className="text-sm text-primary mb-2">{articles[0].date}</p>
                <h3 className="text-3xl font-bold mb-4 text-white">{articles[0].title}</h3>
                <p className="text-gray-200 mb-6">{articles[0].excerpt}</p>
                <Link href="#" className="inline-flex items-center text-white group">
                  READ MORE <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-background">
            <div className="grid grid-cols-1 gap-px bg-border">
              {articles.slice(1).map((article, index) => (
                <div key={index} className="bg-background p-6 group hover:bg-accent/5 transition-colors">
                  <div className="flex gap-4">
                    <div className="relative w-24 h-24 shrink-0 overflow-hidden">
                      <Image src={article.image || '/placeholder.svg'} alt={article.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-primary mb-2">{article.date}</p>
                      <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{article.title}</h4>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                      <Link href="#" className="inline-flex items-center text-sm group/link">
                        READ MORE <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/news" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            VIEW ALL NEWS <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

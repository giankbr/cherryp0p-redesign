import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Marquee } from '@/components/marquee';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MerchandisePage() {
  const featuredMerch = [
    {
      name: 'CHERRYPOP FESTIVAL T-SHIRT',
      price: 'Rp 250.000',
      description: 'Official festival t-shirt with 2025 lineup print on the back',
      image: '/placeholder.svg?height=800&width=800',
    },
    {
      name: 'CHERRYPOP HOODIE',
      price: 'Rp 450.000',
      description: 'Premium black hoodie with embroidered festival logo',
      image: '/placeholder.svg?height=800&width=800',
    },
  ];

  const clothing = [
    {
      name: 'CHERRYPOP T-SHIRT BLACK',
      price: 'Rp 250.000',
      image: '/placeholder.svg?height=600&width=600',
    },
    {
      name: 'CHERRYPOP T-SHIRT WHITE',
      price: 'Rp 250.000',
      image: '/placeholder.svg?height=600&width=600',
    },
    {
      name: 'CHERRYPOP LONG SLEEVE',
      price: 'Rp 300.000',
      image: '/placeholder.svg?height=600&width=600',
    },
    {
      name: 'CHERRYPOP TANK TOP',
      price: 'Rp 200.000',
      image: '/placeholder.svg?height=600&width=600',
    },
  ];

  const accessories = [
    {
      name: 'CHERRYPOP TOTE BAG',
      price: 'Rp 200.000',
      image: '/placeholder.svg?height=600&width=600',
    },
    {
      name: 'CHERRYPOP CAP',
      price: 'Rp 175.000',
      image: '/placeholder.svg?height=600&width=600',
    },
    {
      name: 'CHERRYPOP BANDANA',
      price: 'Rp 125.000',
      image: '/placeholder.svg?height=600&width=600',
    },
    {
      name: 'CHERRYPOP SOCKS',
      price: 'Rp 100.000',
      image: '/placeholder.svg?height=600&width=600',
    },
  ];

  const music = [
    {
      name: 'CHERRYPOP COMPILATION CD',
      price: 'Rp 150.000',
      image: '/placeholder.svg?height=600&width=600',
    },
    {
      name: 'CHERRYPOP VINYL RECORD',
      price: 'Rp 350.000',
      image: '/placeholder.svg?height=600&width=600',
    },
    {
      name: 'CHERRYPOP CASSETTE TAPE',
      price: 'Rp 125.000',
      image: '/placeholder.svg?height=600&width=600',
    },
    {
      name: 'CHERRYPOP DIGITAL ALBUM',
      price: 'Rp 100.000',
      image: '/placeholder.svg?height=600&width=600',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Marquee />
      <main className="flex-1 bg-background">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-16">
              <h1 className="text-6xl md:text-8xl font-bold mb-4">
                MERCH<span className="text-primary">ANDISE</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">Official Cherrypop Festival merchandise. Get your festival gear and support the event.</p>
            </div>

            {/* Featured Merchandise */}
            <div className="mb-20">
              <h2 className="text-primary text-lg mb-2">FEATURED</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredMerch.map((item, index) => (
                  <div key={index} className="group bg-card/50 dark:bg-card rounded-lg overflow-hidden border border-border/50 hover:border-border transition-colors duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="relative aspect-square overflow-hidden">
                        <Image src={item.image || '/placeholder.svg'} alt={item.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <div className="p-8 flex flex-col justify-between bg-background/80 dark:bg-black/50 backdrop-blur-sm">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                          <p className="text-muted-foreground mb-4">{item.description}</p>
                          <p className="text-3xl font-bold text-primary mb-6">{item.price}</p>
                        </div>
                        <Button asChild size="lg">
                          <Link href="#">
                            <ShoppingCart /> ADD TO CART
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Clothing */}
            <div className="mb-20">
              <h2 className="text-primary text-lg mb-2">CLOTHING</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {clothing.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-card/50 dark:bg-card rounded-lg overflow-hidden border border-border/50 hover:border-border hover:bg-card/80 dark:hover:bg-card/80 transition-colors duration-300"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <Image src={item.image || '/placeholder.svg'} alt={item.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold truncate">{item.name}</h3>
                      <p className="text-primary font-medium mb-4">{item.price}</p>
                      <Button variant="ghost" asChild className="p-0 h-auto hover:bg-transparent group/btn">
                        <Link href="#" className="text-sm inline-flex items-center text-foreground/80 hover:text-foreground">
                          ADD TO CART <ArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Accessories */}
            <div className="mb-20">
              <h2 className="text-primary text-lg mb-2">ACCESSORIES</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {accessories.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-card/50 dark:bg-card rounded-lg overflow-hidden border border-border/50 hover:border-border hover:bg-card/80 dark:hover:bg-card/80 transition-colors duration-300"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <Image src={item.image || '/placeholder.svg'} alt={item.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold truncate">{item.name}</h3>
                      <p className="text-primary font-medium mb-4">{item.price}</p>
                      <Button variant="ghost" asChild className="p-0 h-auto hover:bg-transparent group/btn">
                        <Link href="#" className="text-sm inline-flex items-center text-foreground/80 hover:text-foreground">
                          ADD TO CART <ArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Music */}
            <div>
              <h2 className="text-primary text-lg mb-2">MUSIC</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {music.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-card/50 dark:bg-card rounded-lg overflow-hidden border border-border/50 hover:border-border hover:bg-card/80 dark:hover:bg-card/80 transition-colors duration-300"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <Image src={item.image || '/placeholder.svg'} alt={item.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold truncate">{item.name}</h3>
                      <p className="text-primary font-medium mb-4">{item.price}</p>
                      <Button variant="ghost" asChild className="p-0 h-auto hover:bg-transparent group/btn">
                        <Link href="#" className="text-sm inline-flex items-center text-foreground/80 hover:text-foreground">
                          ADD TO CART <ArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

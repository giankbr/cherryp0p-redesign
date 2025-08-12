import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Marquee } from '@/components/marquee';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Marquee />
      <main className="flex-1">
        {/* Hero Section - Full screen with parallax effect */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src="/placeholder.svg?height=1080&width=1920" alt="Cherrypop Festival Crowd" fill className="object-cover scale-110 origin-center" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
          </div>
          <div className="container relative z-10 px-4">
            <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-8xl md:text-[12rem] font-bold leading-none">
                  ABOUT
                  <br />
                  <span className="text-primary">US</span>
                </h1>
              </div>
              <div className="lg:pl-12">
                <p className="text-2xl md:text-3xl text-muted-foreground font-light leading-relaxed">Cherrypop Festival adalah panggung bagi kreativitas subkultur anak muda Indonesia.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Grid Section */}
        <section className="py-24">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
              <div className="relative aspect-square group overflow-hidden">
                <Image src="/placeholder.svg?height=600&width=600" alt="Festival Moment 1" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="relative aspect-square group overflow-hidden">
                <Image src="/placeholder.svg?height=600&width=600" alt="Festival Moment 2" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="relative aspect-square group overflow-hidden">
                <Image src="/placeholder.svg?height=600&width=600" alt="Festival Moment 3" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="relative aspect-square group overflow-hidden">
                <Image src="/placeholder.svg?height=600&width=600" alt="Festival Moment 4" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section with Large Numbers */}
        <section className="py-24 bg-accent/5">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-7xl md:text-8xl font-bold text-primary mb-2">15K+</div>
                <div className="text-muted-foreground">Attendees</div>
              </div>
              <div className="text-center">
                <div className="text-7xl md:text-8xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Artists</div>
              </div>
              <div className="text-center">
                <div className="text-7xl md:text-8xl font-bold text-primary mb-2">3</div>
                <div className="text-muted-foreground">Days</div>
              </div>
              <div className="text-center">
                <div className="text-7xl md:text-8xl font-bold text-primary mb-2">8</div>
                <div className="text-muted-foreground">Stages</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-primary"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] mix-blend-overlay opacity-20"></div>
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-bold text-white text-center mb-8">Join The Festival</h2>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="#tickets" className="bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors inline-flex items-center text-lg">
                  Get Tickets <ArrowRight className="ml-2 h-6 w-6" />
                </a>
                <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-primary transition-colors text-lg">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function FullWidthHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/placeholder.svg?height=1080&width=1920" alt="Cherrypop Festival" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-7xl md:text-9xl font-bold mb-6">
          CHERRY<span className="text-primary">POP</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Festival musik tahunan di Yogyakarta yang digagas oleh Swasembada Kreasi, adalah panggung bagi kreativitas
          subkultur anak muda.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="#tickets" className="bg-primary text-white px-8 py-3 inline-flex items-center group">
            GET TICKETS <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#lineup"
            className="border border-white px-8 py-3 inline-flex items-center group hover:bg-white hover:text-black transition-colors"
          >
            VIEW LINEUP <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  )
}

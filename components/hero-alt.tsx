import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroAlt() {
  return (
    <section className="bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[90vh]">
        <div className="flex flex-col justify-center p-8 md:p-16">
          <div className="mb-8">
            <h3 className="text-primary text-lg mb-2">AUGUST 15-17, 2025 • YOGYAKARTA</h3>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              CHERRY
              <br />
              POP
            </h1>
            <p className="text-xl text-muted-foreground max-w-md">
              Panggung bagi kreativitas subkultur anak muda. Dari musisi hingga pembuat film, dari perupa hingga pegiat
              kuliner.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
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
        <div className="relative">
          <Image src="/placeholder.svg?height=1080&width=1080" alt="Cherrypop Festival" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>
    </section>
  )
}

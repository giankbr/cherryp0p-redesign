import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function SplitContent() {
  return (
    <section className="bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative">
          <Image
            src="/placeholder.svg?height=800&width=800"
            alt="About Cherrypop Festival"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-16">
          <h2 className="text-primary text-lg mb-2">ABOUT</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">CHERRYPOP FESTIVAL</h3>
          <div className="space-y-4 mb-8">
            <p>
              Cherrypop, festival musik tahunan di Yogyakarta yang digagas oleh Swasembada Kreasi, adalah panggung bagi
              kreativitas subkultur anak muda. Dari musisi hingga pembuat film, dari perupa hingga pegiat kuliner,
              berbagai disiplin bertemu untuk berkreasi, berdialog, dan berbagi energi.
            </p>
            <p className="text-muted-foreground">
              Cherrypop bukan sekadar festival, melainkan ruang untuk membangun narasi dan merayakan semangat
              kolaborasi. Lebih dari sekadar hiburan, Cherrypop menjadi tempat subkultur anak muda untuk membangun
              diskursus, menjalin jejaring, dan merayakan keberagaman.
            </p>
          </div>
          <Link
            href="#about"
            className="inline-flex items-center border border-white px-6 py-3 group hover:bg-white hover:text-black transition-colors"
          >
            LEARN MORE <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

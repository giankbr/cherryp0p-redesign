import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function MainGrid() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mb-1">
        <div className="bg-black aspect-square relative overflow-hidden hover-scale">
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="Cherrypop Festival"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">CHERRYPOP</h2>
            <p className="text-lg text-muted-foreground">FESTIVAL 2025</p>
          </div>
        </div>

        <div className="bg-accent text-accent-foreground aspect-square p-6 flex flex-col justify-between hover-scale">
          <div>
            <h3 className="text-xl font-medium mb-2">ABOUT</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">PANGGUNG BAGI KREATIVITAS SUBKULTUR ANAK MUDA</h2>
          </div>
          <p className="text-muted-foreground">
            Dari musisi hingga pembuat film, dari perupa hingga pegiat kuliner, berbagai disiplin bertemu untuk
            berkreasi, berdialog, dan berbagi energi.
          </p>
        </div>

        <div className="bg-black aspect-square relative overflow-hidden hover-scale">
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="Festival Atmosphere"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-xl font-medium mb-2">WEEKEND POP TOUR</h3>
            <p className="text-muted-foreground">
              Tur pra-acara yang mengadakan gig intim tiap akhir pekan di beberapa kota.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-1">
        <div className="bg-primary text-primary-foreground aspect-video p-6 flex flex-col justify-between hover-scale">
          <div>
            <h3 className="text-xl font-medium mb-2">LINEUP</h3>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">HINDIA</h2>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">EFEK RUMAH KACA</h2>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">BARASUARA</h2>
          </div>
          <Link href="#lineup" className="flex items-center group">
            VIEW FULL LINEUP <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="bg-black aspect-video relative overflow-hidden hover-scale">
          <Image
            src="/placeholder.svg?height=600&width=1000"
            alt="Concert Performance"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-xl font-medium mb-2">REKAM SKENA</h3>
            <p className="text-muted-foreground">
              Aktivasi untuk dokumentasi musik yang dikerjakan langsung oleh para pegiat musik dan audio visual.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        <div className="bg-black aspect-square relative overflow-hidden hover-scale">
          <Image src="/placeholder.svg?height=600&width=600" alt="Workshop" fill className="object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-xl font-medium mb-2">PENA SKENA</h3>
            <p className="text-muted-foreground">Workshop jurnalisme musik yang bekerjasama dengan media arus utama.</p>
          </div>
        </div>

        <div className="bg-accent text-accent-foreground aspect-square p-6 flex flex-col justify-between hover-scale">
          <div>
            <h3 className="text-xl font-medium mb-2">MERCHANDISE</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">OFFICIAL CHERRYPOP MERCH</h2>
          </div>
          <Link href="#merch" className="flex items-center group">
            SHOP NOW <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="bg-black aspect-square relative overflow-hidden hover-scale">
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="Festival Crowd"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-xl font-medium mb-2">GALLERY</h3>
            <p className="text-muted-foreground">
              Momen-momen tak terlupakan dari Cherrypop Festival tahun-tahun sebelumnya.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

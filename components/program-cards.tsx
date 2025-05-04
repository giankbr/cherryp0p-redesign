import { Music, Film, Pencil, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ProgramCards() {
  const programs = [
    {
      title: "WEEKEND POP TOUR",
      description:
        "Tur pra-acara yang mengadakan gig intim tiap akhir pekan di beberapa kota, berkolaborasi dengan kolektif musik lokal.",
      icon: <Music className="h-10 w-10" />,
      color: "border-primary",
    },
    {
      title: "REKAM SKENA",
      description:
        "Aktivasi untuk dokumentasi musik yang dikerjakan langsung oleh para pegiat musik dan audio visual, sebagai sarana arsip pergerakan musik lokal.",
      icon: <Film className="h-10 w-10" />,
      color: "border-white",
    },
    {
      title: "PENA SKENA",
      description:
        "Workshop jurnalisme musik yang bekerjasama dengan media arus utama, mendukung tumbuhnya bakat baru di dunia kepenulisan musik.",
      icon: <Pencil className="h-10 w-10" />,
      color: "border-primary",
    },
  ]

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-primary text-lg mb-2">PROGRAMS</h2>
          <h3 className="text-4xl md:text-6xl font-bold">ACTIVITIES</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className={`border-2 ${program.color} p-8 hover:bg-accent/5 transition-colors`}>
              <div className="mb-6">{program.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
              <p className="text-muted-foreground mb-6">{program.description}</p>
              <Link href="#" className="inline-flex items-center group">
                LEARN MORE <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

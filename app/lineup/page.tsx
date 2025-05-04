import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Marquee } from "@/components/marquee"
import Image from "next/image"

export default function LineupPage() {
  const days = [
    {
      date: "15",
      month: "AUGUST",
      year: "2025",
      day: "FRIDAY",
      artists: [
        {
          name: "HINDIA",
          time: "21:30 - 23:00",
          image: "/placeholder.svg?height=800&width=800",
          type: "headliner",
        },
        {
          name: "BARASUARA",
          time: "19:30 - 21:00",
          image: "/placeholder.svg?height=600&width=600",
          type: "main",
        },
        {
          name: "KUNTO AJI",
          time: "18:00 - 19:00",
          image: "/placeholder.svg?height=600&width=600",
          type: "main",
        },
        {
          name: "REALITY CLUB",
          time: "16:30 - 17:30",
          image: "/placeholder.svg?height=400&width=400",
          type: "supporting",
        },
        {
          name: "FOURTWNTY",
          time: "15:00 - 16:00",
          image: "/placeholder.svg?height=400&width=400",
          type: "supporting",
        },
        {
          name: "FLOAT",
          time: "13:30 - 14:30",
          image: "/placeholder.svg?height=400&width=400",
          type: "supporting",
        },
      ],
    },
    {
      date: "16",
      month: "AUGUST",
      year: "2025",
      day: "SATURDAY",
      artists: [
        {
          name: "EFEK RUMAH KACA",
          time: "21:30 - 23:00",
          image: "/placeholder.svg?height=800&width=800",
          type: "headliner",
        },
        {
          name: "ISYANA SARASVATI",
          time: "19:30 - 21:00",
          image: "/placeholder.svg?height=600&width=600",
          type: "main",
        },
        {
          name: "LOMBA SIHIR",
          time: "18:00 - 19:00",
          image: "/placeholder.svg?height=600&width=600",
          type: "main",
        },
        {
          name: "DIALOG DINI HARI",
          time: "16:30 - 17:30",
          image: "/placeholder.svg?height=400&width=400",
          type: "supporting",
        },
        {
          name: "PERUNGGU",
          time: "15:00 - 16:00",
          image: "/placeholder.svg?height=400&width=400",
          type: "supporting",
        },
        {
          name: "KELOMPOK PENERBANG ROKET",
          time: "13:30 - 14:30",
          image: "/placeholder.svg?height=400&width=400",
          type: "supporting",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Marquee />
      <main className="flex-1 bg-black">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-16">
              <h1 className="text-6xl md:text-8xl font-bold mb-4">
                LINE<span className="text-primary">UP</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Musisi terbaik Indonesia akan tampil di Main Stage Cherrypop Festival 2025.
              </p>
            </div>

            {/* Stage Info */}
            <div className="mb-16 border border-primary p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-2">MAIN STAGE</h2>
                  <p className="text-muted-foreground">Panggung utama Cherrypop Festival 2025</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="inline-block border border-border px-4 py-2">
                    <p className="text-sm text-muted-foreground">KAPASITAS</p>
                    <p className="text-xl font-bold">10,000 ORANG</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day Tabs */}
            <div className="mb-12">
              <div className="grid grid-cols-2 gap-px bg-border">
                {days.map((day, index) => (
                  <a
                    key={index}
                    href={`#day-${index + 1}`}
                    className="bg-black p-6 text-center hover:bg-accent/5 transition-colors"
                  >
                    <p className="text-primary text-sm mb-1">{day.day}</p>
                    <h3 className="text-3xl font-bold">
                      {day.date} {day.month}
                    </h3>
                  </a>
                ))}
              </div>
            </div>

            {/* Day Lineups */}
            {days.map((day, dayIndex) => (
              <div key={dayIndex} id={`day-${dayIndex + 1}`} className="mb-24">
                <div className="mb-8">
                  <h2 className="text-4xl font-bold">
                    DAY {dayIndex + 1}: {day.day}, {day.date} {day.month}
                  </h2>
                  <div className="h-1 w-24 bg-primary mt-4"></div>
                </div>

                {/* Headliner */}
                {day.artists
                  .filter((artist) => artist.type === "headliner")
                  .map((artist, index) => (
                    <div key={index} className="mb-16">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="relative aspect-square overflow-hidden">
                          <Image
                            src={artist.image || "/placeholder.svg"}
                            alt={artist.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="inline-block bg-primary px-3 py-1 mb-4">
                            <p className="text-sm">HEADLINER</p>
                          </div>
                          <h3 className="text-5xl font-bold mb-4">{artist.name}</h3>
                          <p className="text-xl text-primary mb-2">{artist.time}</p>
                          <p className="text-muted-foreground">Main Stage</p>
                        </div>
                      </div>
                    </div>
                  ))}

                {/* Main Acts */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-6">MAIN ACTS</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
                    {day.artists
                      .filter((artist) => artist.type === "main")
                      .map((artist, index) => (
                        <div key={index} className="bg-black p-6 flex items-center gap-6">
                          <div className="relative w-24 h-24 shrink-0">
                            <Image
                              src={artist.image || "/placeholder.svg"}
                              alt={artist.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl font-bold">{artist.name}</h4>
                            <p className="text-primary">{artist.time}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Supporting Acts */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">SUPPORTING ACTS</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
                    {day.artists
                      .filter((artist) => artist.type === "supporting")
                      .map((artist, index) => (
                        <div key={index} className="bg-black p-4">
                          <div className="flex items-center gap-4">
                            <div className="relative w-16 h-16 shrink-0">
                              <Image
                                src={artist.image || "/placeholder.svg"}
                                alt={artist.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="text-lg font-bold">{artist.name}</h4>
                              <p className="text-sm text-primary">{artist.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Schedule Timeline */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8">SCHEDULE TIMELINE</h2>

              <div className="space-y-12">
                {days.map((day, dayIndex) => (
                  <div key={dayIndex}>
                    <h3 className="text-2xl font-bold mb-6">
                      DAY {dayIndex + 1}: {day.day}, {day.date} {day.month}
                    </h3>
                    <div className="relative border-l-2 border-primary pl-8 ml-4">
                      {day.artists.map((artist, artistIndex) => (
                        <div key={artistIndex} className="mb-8 relative">
                          <div className="absolute -left-[41px] w-6 h-6 rounded-full bg-primary"></div>
                          <p className="text-primary font-mono">{artist.time}</p>
                          <h4 className="text-2xl font-bold">{artist.name}</h4>
                          <p className="text-muted-foreground">Main Stage</p>
                        </div>
                      ))}
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
  )
}

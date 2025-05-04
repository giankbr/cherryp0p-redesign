import Image from "next/image"

export function LineupAlt() {
  const artists = [
    { name: "HINDIA", day: "DAY 1", time: "9:30 PM", image: "/placeholder.svg?height=600&width=600" },
    { name: "EFEK RUMAH KACA", day: "DAY 2", time: "8:00 PM", image: "/placeholder.svg?height=600&width=600" },
    { name: "BARASUARA", day: "DAY 1", time: "7:00 PM", image: "/placeholder.svg?height=600&width=600" },
    { name: "DANILLA", day: "DAY 3", time: "6:30 PM", image: "/placeholder.svg?height=600&width=600" },
    { name: "LOMBA SIHIR", day: "DAY 2", time: "5:00 PM", image: "/placeholder.svg?height=600&width=600" },
    { name: "FEAST", day: "DAY 3", time: "7:30 PM", image: "/placeholder.svg?height=600&width=600" },
  ]

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-primary text-lg mb-2">LINEUP 2025</h2>
            <h3 className="text-4xl md:text-6xl font-bold">THE ARTISTS</h3>
          </div>
          <p className="text-muted-foreground mt-4 md:mt-0">
            Musisi terbaik Indonesia akan tampil di panggung Cherrypop Festival 2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {artists.map((artist, index) => (
            <div key={index} className="bg-black p-1">
              <div className="relative aspect-square overflow-hidden group">
                <Image
                  src={artist.image || "/placeholder.svg"}
                  alt={artist.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-3xl font-bold mb-1">{artist.name}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">{artist.day}</p>
                    <p className="text-sm text-muted-foreground">{artist.time}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xl text-muted-foreground">...and many more to be announced!</p>
        </div>
      </div>
    </section>
  )
}

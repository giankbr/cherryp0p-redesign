import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function TicketsAlt() {
  const tickets = [
    {
      name: "1-DAY PASS",
      price: "Rp 350.000",
      description: "Akses untuk satu hari festival (pilih hari)",
      features: ["Akses ke semua panggung", "Akses area kuliner", "Merchandise dasar"],
    },
    {
      name: "3-DAY PASS",
      price: "Rp 850.000",
      description: "Akses penuh selama tiga hari festival",
      features: [
        "Akses ke semua panggung",
        "Akses area kuliner",
        "Merchandise eksklusif",
        "Akses area istirahat khusus",
        "Diskon 10% untuk makanan dan minuman",
      ],
      featured: true,
    },
    {
      name: "VIP PASS",
      price: "Rp 1.500.000",
      description: "Pengalaman premium selama festival",
      features: [
        "Akses ke semua panggung",
        "Akses area kuliner",
        "Merchandise premium",
        "Akses backstage terbatas",
        "Lounge VIP dengan minuman gratis",
        "Meet & Greet dengan artis pilihan",
      ],
    },
  ]

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-primary text-lg mb-2">TICKETS</h2>
          <h3 className="text-4xl md:text-6xl font-bold">GET YOUR PASS</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {tickets.map((ticket, index) => (
            <div key={index} className={`bg-black p-8 ${ticket.featured ? "border-2 border-primary" : ""}`}>
              <div className="h-full flex flex-col">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold mb-2">{ticket.name}</h3>
                  <p className="text-muted-foreground mb-4">{ticket.description}</p>
                  <p className="text-4xl font-bold text-primary">{ticket.price}</p>
                </div>

                <div className="flex-grow mb-8">
                  <ul className="space-y-2">
                    {ticket.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-primary mr-2">—</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="#"
                  className={`inline-flex items-center justify-center py-3 px-6 group ${
                    ticket.featured
                      ? "bg-primary text-white"
                      : "border border-white hover:bg-white hover:text-black transition-colors"
                  }`}
                >
                  BUY TICKET <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

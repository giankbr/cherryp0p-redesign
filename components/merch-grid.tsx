import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function MerchGrid() {
  const merchandise = [
    {
      name: "CHERRYPOP T-SHIRT BLACK",
      price: "Rp 250.000",
      image: "/placeholder.svg?height=600&width=600",
    },
    {
      name: "CHERRYPOP T-SHIRT WHITE",
      price: "Rp 250.000",
      image: "/placeholder.svg?height=600&width=600",
    },
    {
      name: "CHERRYPOP COMPACT DISC",
      price: "Rp 150.000",
      image: "/placeholder.svg?height=600&width=600",
    },
    {
      name: "CHERRYPOP TOTE BAG",
      price: "Rp 200.000",
      image: "/placeholder.svg?height=600&width=600",
    },
  ]

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-primary text-lg mb-2">SHOP</h2>
            <h3 className="text-4xl md:text-6xl font-bold">MERCHANDISE</h3>
          </div>
          <Link href="#" className="inline-flex items-center mt-4 md:mt-0 group">
            VIEW ALL <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border">
          {merchandise.map((item, index) => (
            <div key={index} className="bg-black p-1">
              <div className="group">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-primary">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

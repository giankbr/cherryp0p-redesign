import Image from "next/image"

export function GalleryAlt() {
  const images = [
    { src: "/placeholder.svg?height=600&width=600", size: "large" },
    { src: "/placeholder.svg?height=600&width=600", size: "normal" },
    { src: "/placeholder.svg?height=600&width=600", size: "normal" },
    { src: "/placeholder.svg?height=600&width=600", size: "tall" },
    { src: "/placeholder.svg?height=600&width=600", size: "normal" },
    { src: "/placeholder.svg?height=600&width=600", size: "wide" },
    { src: "/placeholder.svg?height=600&width=600", size: "normal" },
    { src: "/placeholder.svg?height=600&width=600", size: "normal" },
  ]

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-primary text-lg mb-2">GALLERY</h2>
          <h3 className="text-4xl md:text-6xl font-bold">MOMENTS</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {images.map((image, index) => (
            <div
              key={index}
              className={`bg-black ${
                image.size === "large"
                  ? "col-span-2 row-span-2"
                  : image.size === "wide"
                    ? "col-span-2"
                    : image.size === "tall"
                      ? "row-span-2"
                      : ""
              }`}
            >
              <div className="relative aspect-square w-full h-full overflow-hidden group">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-60 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

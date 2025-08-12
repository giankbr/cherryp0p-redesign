import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container px-4 mx-auto">
            <div className="max-w-[90rem] mx-auto">
              <h1 className="text-6xl md:text-8xl font-normal mb-16">MEET CHERRYPOP</h1>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    At Cherrypop, artistry, comfort and connection share every stage. Guided by bold craftsmanship, we create moments that elevate festival experiences with unique elegance.
                  </p>
                </div>
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Design as a way of life shapes our vision, helping and fueling our commitment to create clear, user-meaningful spaces that elevate everyday living.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="h-px w-full bg-gradient-to-r from-border via-primary/10 to-border" />

        {/* Team Image Section */}
        <section className="py-20 bg-accent/[0.02]">
          <div className="container px-4 mx-auto">
            <div className="max-w-[90rem] mx-auto">
              <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=1080&width=1920" alt="Cherrypop Festival Team" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="h-px w-full bg-gradient-to-r from-border via-primary/10 to-border" />

        {/* Vision Section */}
        <section className="py-32">
          <div className="container px-4 mx-auto">
            <div className="max-w-[90rem] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                <div className="lg:col-span-2">
                  <h2 className="text-4xl font-normal mb-12">
                    Discover a new way of experiencing festivals with Cherrypop's crafted authenticity. Rooted in Indonesian creativity, our events combine timeless aesthetics, artistic expression,
                    and mindful innovation, shaping spaces that feel as good as they look.
                  </h2>
                </div>
                <div>
                  <div className="space-y-12">
                    <div>
                      <h3 className="text-xl font-medium mb-4">Our Vision</h3>
                      <p className="text-muted-foreground">
                        We aim to design an experience that reflects the way of living with intention and purpose, bringing together like-minded individuals through mindful curation.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-4">Our Mission</h3>
                      <p className="text-muted-foreground">
                        We are dedicated to crafting festivals that blend artistic expression with cultural significance, using innovative approaches and sustainable practices that help us achieve our
                        vision.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="h-px w-full bg-gradient-to-r from-border via-primary/10 to-border" />

        {/* Stats Section */}
        <section className="py-32 bg-accent/[0.02]">
          <div className="container px-4 mx-auto">
            <div className="max-w-[90rem] mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                <div>
                  <div className="text-5xl font-light mb-4">150+</div>
                  <div className="text-muted-foreground">Artists Featured</div>
                </div>
                <div>
                  <div className="text-5xl font-light mb-4">15K+</div>
                  <div className="text-muted-foreground">Festival Attendees</div>
                </div>
                <div>
                  <div className="text-5xl font-light mb-4">120+</div>
                  <div className="text-muted-foreground">Collaborations</div>
                </div>
                <div>
                  <div className="text-5xl font-light mb-4">8+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

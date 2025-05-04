import { Header } from "@/components/header"
import { FullWidthHero } from "@/components/full-width-hero"
import { LineupAlt } from "@/components/lineup-alt"
import { ProgramCards } from "@/components/program-cards"
import { NewsGrid } from "@/components/news-grid"
import { TicketsAlt } from "@/components/tickets-alt"
import { Footer } from "@/components/footer"
import { Marquee } from "@/components/marquee"

export default function AltLayout2() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <FullWidthHero />
        <Marquee />
        <LineupAlt />
        <ProgramCards />
        <NewsGrid />
        <TicketsAlt />
      </main>
      <Footer />
    </div>
  )
}

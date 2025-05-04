import { Header } from "@/components/header"
import { HeroAlt } from "@/components/hero-alt"
import { SplitContent } from "@/components/split-content"
import { ProgramCards } from "@/components/program-cards"
import { LineupAlt } from "@/components/lineup-alt"
import { ScheduleAlt } from "@/components/schedule-alt"
import { GalleryAlt } from "@/components/gallery-alt"
import { TicketsAlt } from "@/components/tickets-alt"
import { MerchGrid } from "@/components/merch-grid"
import { NewsGrid } from "@/components/news-grid"
import { Footer } from "@/components/footer"
import { Marquee } from "@/components/marquee"

export default function AltLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Marquee />
      <main className="flex-1">
        <HeroAlt />
        <SplitContent />
        <ProgramCards />
        <LineupAlt />
        <ScheduleAlt />
        <GalleryAlt />
        <TicketsAlt />
        <MerchGrid />
        <NewsGrid />
      </main>
      <Footer />
    </div>
  )
}

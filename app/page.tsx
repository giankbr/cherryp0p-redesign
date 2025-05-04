import { Header } from "@/components/header"
import { MainGrid } from "@/components/main-grid"
import { Footer } from "@/components/footer"
import { Marquee } from "@/components/marquee"
import { NewsGrid } from "@/components/news-grid"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Marquee />
      <main className="flex-1">
        <MainGrid />
        <NewsGrid />
      </main>
      <Footer />
    </div>
  )
}

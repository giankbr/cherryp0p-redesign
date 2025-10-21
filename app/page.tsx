import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MainGrid } from "@/components/main-grid";
import { Marquee } from "@/components/marquee";
import { NewsGrid } from "@/components/news-grid";
import Image from "next/image";

export default function Home() {
      return (
            <div className="min-h-screen flex flex-col bg-background">
                  <Header />
                  <Marquee />
                  <main className="flex-1">
                        <MainGrid />

                        <div>
                              <NewsGrid />
                        </div>
                  </main>
                  <Footer />
            </div>
      );
}

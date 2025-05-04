import Link from "next/link"
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">CHERRYPOP</h3>
            <p className="text-muted-foreground mb-6">
              Festival musik tahunan di Yogyakarta yang menampilkan kreativitas subkultur anak muda Indonesia.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">LINKS</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#lineup" className="text-muted-foreground hover:text-foreground transition-colors">
                Lineup
              </Link>
              <Link href="#merch" className="text-muted-foreground hover:text-foreground transition-colors">
                Merchandise
              </Link>
              <Link href="#tour" className="text-muted-foreground hover:text-foreground transition-colors">
                Tour
              </Link>
              <Link href="#news" className="text-muted-foreground hover:text-foreground transition-colors">
                News
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">FOLLOW US</h4>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Youtube size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Cherrypop Festival. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

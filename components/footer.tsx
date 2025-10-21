import Link from "next/link";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export function Footer() {
      return (
            <footer className="border-t border-border bg-background/80 backdrop-blur-sm">
                  <div className="container mx-auto px-4 py-10 max-w-7xl">
                        {/* Main Footer Content */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 mb-8">
                              {/* Brand Column */}
                              <div className="col-span-1 md:col-span-2 lg:col-span-1">
                                    <h3 className="text-2xl font-bold mb-3 tracking-tight">
                                          CHERRYPOP
                                    </h3>
                                    <p className="text-muted-foreground mb-4 max-w-xs">
                                          Festival musik tahunan di Yogyakarta
                                          yang menampilkan kreativitas subkultur
                                          anak muda Indonesia.
                                    </p>
                                    <div className="flex space-x-3 mt-2">
                                          <Link
                                                href="#"
                                                className="p-2 hover:text-primary transition-colors hover:bg-accent rounded-md"
                                          >
                                                <Instagram size={18} />
                                          </Link>
                                          <Link
                                                href="#"
                                                className="p-2 hover:text-primary transition-colors hover:bg-accent rounded-md"
                                          >
                                                <Twitter size={18} />
                                          </Link>
                                          <Link
                                                href="#"
                                                className="p-2 hover:text-primary transition-colors hover:bg-accent rounded-md"
                                          >
                                                <Facebook size={18} />
                                          </Link>
                                          <Link
                                                href="#"
                                                className="p-2 hover:text-primary transition-colors hover:bg-accent rounded-md"
                                          >
                                                <Youtube size={18} />
                                          </Link>
                                    </div>
                              </div>

                              {/* Quick Links */}
                              <div>
                                    <h4 className="text-base font-bold mb-3 uppercase tracking-wide">
                                          Quick Links
                                    </h4>
                                    <div className="flex flex-col space-y-2">
                                          <Link
                                                href="/about"
                                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                          >
                                                About
                                          </Link>
                                          <Link
                                                href="/lineup"
                                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                          >
                                                Lineup
                                          </Link>
                                          <Link
                                                href="/merchandise"
                                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                          >
                                                Merchandise
                                          </Link>
                                          <Link
                                                href="/#news"
                                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                          >
                                                News
                                          </Link>
                                    </div>
                              </div>

                              {/* Information */}
                              <div>
                                    <h4 className="text-base font-bold mb-3 uppercase tracking-wide">
                                          Information
                                    </h4>
                                    <div className="flex flex-col space-y-2">
                                          <Link
                                                href="/contact"
                                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                          >
                                                Contact Us
                                          </Link>
                                          <Link
                                                href="#"
                                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                          >
                                                FAQ
                                          </Link>
                                          <Link
                                                href="#"
                                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                          >
                                                Privacy Policy
                                          </Link>
                                          <Link
                                                href="#"
                                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                          >
                                                Terms of Service
                                          </Link>
                                    </div>
                              </div>

                              {/* Newsletter Signup */}
                              <div>
                                    <h4 className="text-base font-bold mb-3 uppercase tracking-wide">
                                          Stay Updated
                                    </h4>
                                    <p className="text-sm text-muted-foreground mb-3">
                                          Subscribe to our newsletter for the
                                          latest updates.
                                    </p>
                                    <form className="flex flex-col space-y-2">
                                          <input
                                                type="email"
                                                placeholder="Your email address"
                                                className="px-3 py-2 rounded-md bg-background border border-border focus:outline-none focus:ring-1 focus:ring-primary text-sm"
                                                required
                                          />
                                          <button
                                                type="submit"
                                                className="px-3 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md text-sm font-medium transition-colors"
                                          >
                                                Subscribe
                                          </button>
                                    </form>
                              </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-border pt-6">
                              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                    <p className="text-xs text-muted-foreground">
                                          © {new Date().getFullYear()}{" "}
                                          Cherrypop Festival. All rights
                                          reserved.
                                    </p>
                                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                                          <span>Yogyakarta, Indonesia</span>
                                          <span>•</span>
                                          <Link
                                                href="mailto:info@cherrypopfestival.com"
                                                className="hover:text-foreground transition-colors"
                                          >
                                                info@cherrypopfestival.com
                                          </Link>
                                    </div>
                              </div>
                        </div>
                  </div>
            </footer>
      );
}

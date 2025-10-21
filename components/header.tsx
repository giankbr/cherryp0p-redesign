"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export interface HeaderProps {
      logoSrc?: string;
}

export function Header({
      logoSrc = "/logo-cherrypop-official.png",
}: HeaderProps) {
      const [isOpen, setIsOpen] = useState(false);
      const [scrolled, setScrolled] = useState(false);
      const mobileMenuRef = useRef<HTMLDivElement>(null);
      const pathname = usePathname();

      // Track scrolling to add background to the navbar
      useEffect(() => {
            const handleScroll = () => {
                  if (window.scrollY > 10) {
                        setScrolled(true);
                  } else {
                        setScrolled(false);
                  }
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      // Close mobile menu when route changes
      useEffect(() => {
            setIsOpen(false);
      }, [pathname]);

      // Handle outside clicks and escape key to close mobile menu
      useEffect(() => {
            const handleEscape = (e: KeyboardEvent) => {
                  if (e.key === "Escape") setIsOpen(false);
            };

            const handleOutsideClick = (e: MouseEvent) => {
                  if (
                        mobileMenuRef.current &&
                        !mobileMenuRef.current.contains(e.target as Node) &&
                        isOpen
                  ) {
                        setIsOpen(false);
                  }
            };

            if (isOpen) {
                  document.addEventListener("keydown", handleEscape);
                  document.addEventListener("mousedown", handleOutsideClick);
                  document.body.style.overflow = "hidden";
            } else {
                  document.body.style.overflow = "unset";
            }

            return () => {
                  document.removeEventListener("keydown", handleEscape);
                  document.removeEventListener("mousedown", handleOutsideClick);
                  document.body.style.overflow = "unset";
            };
      }, [isOpen]);

      const navItems = [
            { label: "HOME", href: "/" },
            { label: "ABOUT", href: "/about" },
            { label: "LINEUP", href: "/lineup" },
            { label: "MERCHANDISE", href: "/merchandise" },
            { label: "NEWS", href: "/#news" },
            { label: "CONTACT", href: "/contact" },
      ];

      // Function to check if a nav item is active
      const isActive = (href: string) => {
            if (href === "/") {
                  return pathname === "/";
            }
            return pathname?.startsWith(href);
      };

      return (
            <header
                  className={`sticky top-0 z-50 border-b border-border transition-all duration-300 ${
                        scrolled || isOpen
                              ? "bg-background/95 backdrop-blur-sm shadow-sm"
                              : "bg-background"
                  }`}
            >
                  <div className="container mx-auto px-4 py-4 max-w-7xl">
                        <div className="flex items-center justify-between">
                              {/* Logo */}
                              <Link href="/" className="flex items-center z-50">
                                    <Image
                                          src={logoSrc}
                                          alt="Cherrypop Festival"
                                          width={240}
                                          height={80}
                                          className="h-12 md:h-16 w-auto"
                                          priority
                                    />
                              </Link>

                              {/* Desktop Navigation */}
                              <nav className="hidden md:flex items-center space-x-6">
                                    {navItems.map((item) => (
                                          <Link
                                                key={item.label}
                                                href={item.href}
                                                className={`text-sm font-medium transition-colors nav-link ${isActive(item.href) ? "text-primary" : "hover:text-primary text-foreground"}`}
                                          >
                                                {item.label}
                                          </Link>
                                    ))}
                                    <div className="ml-4">
                                          <ModeToggle />
                                    </div>
                              </nav>

                              {/* Mobile Navigation Toggle */}
                              <div className="flex md:hidden items-center gap-2 z-50">
                                    <ModeToggle />
                                    <button
                                          onClick={() => setIsOpen(!isOpen)}
                                          className={`text-foreground focus:outline-none p-2 hover:bg-accent rounded-lg transition-colors ${isOpen ? "bg-accent" : ""}`}
                                          aria-label="Toggle menu"
                                    >
                                          {isOpen ? (
                                                <X size={24} />
                                          ) : (
                                                <Menu size={24} />
                                          )}
                                    </button>
                              </div>
                        </div>

                        {/* Mobile Navigation Menu */}
                        {/* Mobile Navigation Menu */}
                        {isOpen && (
                              <div
                                    ref={mobileMenuRef}
                                    className="fixed inset-0 top-[62px] z-40 bg-background/98 backdrop-blur-md md:hidden overflow-y-auto pb-20"
                              >
                                    <nav className="container mx-auto px-4 py-6 flex flex-col">
                                          {navItems.map((item, index) => (
                                                <Link
                                                      key={item.label}
                                                      href={item.href}
                                                      className={`block py-3.5 px-4 my-1 text-base font-medium rounded-md transition-all duration-300 ${isActive(item.href) ? "bg-primary/10 text-primary" : "hover:bg-accent text-foreground"}`}
                                                      onClick={() =>
                                                            setIsOpen(false)
                                                      }
                                                      style={{
                                                            animationDelay: `${index * 50}ms`,
                                                            animationFillMode:
                                                                  "both",
                                                            animation: `mobileMenuFadeIn 0.35s ease-out forwards`,
                                                            opacity: 0,
                                                            transform:
                                                                  "translateY(10px)",
                                                      }}
                                                >
                                                      {item.label}
                                                </Link>
                                          ))}

                                          {/* Additional mobile menu items */}
                                          <div
                                                className="mt-8 pt-6 border-t border-border/30"
                                                style={{
                                                      animationDelay: `${navItems.length * 50 + 50}ms`,
                                                      animationFillMode: "both",
                                                      animation: `mobileMenuFadeIn 0.35s ease-out forwards`,
                                                      opacity: 0,
                                                }}
                                          >
                                                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-4">
                                                      Connect With Us
                                                </h3>
                                                <div className="flex space-x-3 px-4">
                                                      <a
                                                            href="#"
                                                            className="p-2 rounded-md hover:bg-accent transition-colors"
                                                      >
                                                            <svg
                                                                  className="w-5 h-5"
                                                                  fill="currentColor"
                                                                  viewBox="0 0 24 24"
                                                                  aria-hidden="true"
                                                            >
                                                                  <path
                                                                        fillRule="evenodd"
                                                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                                        clipRule="evenodd"
                                                                  />
                                                            </svg>
                                                      </a>
                                                      <a
                                                            href="#"
                                                            className="p-2 rounded-md hover:bg-accent transition-colors"
                                                      >
                                                            <svg
                                                                  className="w-5 h-5"
                                                                  fill="currentColor"
                                                                  viewBox="0 0 24 24"
                                                                  aria-hidden="true"
                                                            >
                                                                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                                            </svg>
                                                      </a>
                                                </div>
                                          </div>
                                    </nav>
                              </div>
                        )}
                  </div>

                  <style jsx global>{`
                        @keyframes mobileMenuFadeIn {
                              from {
                                    opacity: 0;
                                    transform: translateY(10px);
                              }
                              to {
                                    opacity: 1;
                                    transform: translateY(0);
                              }
                        }
                  `}</style>
            </header>
      );
}

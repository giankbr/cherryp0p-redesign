"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export interface HeaderProps {
      logoSrc?: string;
}

export function Header({
      logoSrc = "/logo-cherrypop-official.png",
}: HeaderProps) {
      const [isOpen, setIsOpen] = useState(false);
      const [scrolled, setScrolled] = useState(false);

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

      // Close mobile menu when clicking outside or on escape
      useEffect(() => {
            const handleEscape = (e: KeyboardEvent) => {
                  if (e.key === "Escape") setIsOpen(false);
            };

            if (isOpen) {
                  document.addEventListener("keydown", handleEscape);
                  document.body.style.overflow = "hidden";
            } else {
                  document.body.style.overflow = "unset";
            }

            return () => {
                  document.removeEventListener("keydown", handleEscape);
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

      return (
            <header
                  className={`sticky top-0 z-50 border-b border-border transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-background"}`}
            >
                  <div className="container mx-auto px-4 py-4 max-w-7xl">
                        <div className="flex items-center justify-between">
                              <Link href="/" className="flex items-center z-50">
                                    <Image
                                          src={logoSrc}
                                          alt="Cherrypop Festival"
                                          width={240}
                                          height={80}
                                          className="h-12 md:h-16 w-auto"
                                    />
                              </Link>

                              {/* Desktop Navigation */}
                              <nav className="hidden md:flex items-center space-x-6">
                                    {navItems.map((item) => (
                                          <Link
                                                key={item.label}
                                                href={item.href}
                                                className="text-sm font-medium hover:text-primary transition-colors nav-link"
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
                                          className="text-foreground focus:outline-none p-2 hover:bg-accent rounded-lg transition-colors"
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
                        {isOpen && (
                              <div
                                    className="fixed inset-0 top-[72px] z-40 bg-background/98 backdrop-blur-md md:hidden"
                                    onClick={() => setIsOpen(false)}
                              >
                                    <nav
                                          className="container mx-auto px-4 py-6 flex flex-col"
                                          onClick={(e) => e.stopPropagation()}
                                    >
                                          {navItems.map((item, index) => (
                                                <Link
                                                      key={item.label}
                                                      href={item.href}
                                                      className="block py-4 text-base font-medium hover:text-primary transition-colors border-b border-border/30 last:border-b-0"
                                                      onClick={() =>
                                                            setIsOpen(false)
                                                      }
                                                      style={{
                                                            animation: `fadeInUp 0.3s ease-out ${index * 0.05}s both`,
                                                      }}
                                                >
                                                      {item.label}
                                                </Link>
                                          ))}
                                    </nav>
                              </div>
                        )}
                  </div>

                  <style jsx>{`
                        @keyframes fadeInUp {
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

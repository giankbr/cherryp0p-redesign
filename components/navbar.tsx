"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import gsap from "gsap"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    gsap.fromTo(
      ".nav-item",
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      },
    )
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="nav-item flex items-center">
            <div className="relative w-10 h-10 mr-2">
              <Image
                src="/placeholder.svg?height=40&width=40&text=CP"
                alt="Cherrypop Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <h1 className="text-2xl font-bold gradient-text">CHERRYPOP</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="nav-item font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#programs" className="nav-item font-medium hover:text-primary transition-colors">
              Programs
            </Link>
            <Link href="#lineup" className="nav-item font-medium hover:text-primary transition-colors">
              Lineup
            </Link>
            <Link href="#gallery" className="nav-item font-medium hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="#articles" className="nav-item font-medium hover:text-primary transition-colors">
              Articles
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle className="nav-item" />
            <Button className="nav-item bg-primary hover:bg-primary/90">Get Tickets</Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center space-x-4">
            <ModeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-6 space-y-4">
            <Link href="#about" className="block py-2 font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link
              href="#programs"
              className="block py-2 font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Programs
            </Link>
            <Link href="#lineup" className="block py-2 font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
              Lineup
            </Link>
            <Link
              href="#gallery"
              className="block py-2 font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="#articles"
              className="block py-2 font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Articles
            </Link>
            <div className="pt-4">
              <Button className="w-full bg-primary hover:bg-primary/90">Get Tickets</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Marquee } from "@/components/marquee";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Package, Shirt, Music } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MerchandisePage() {
      const [selectedCategory, setSelectedCategory] = useState("all");

      const categories = [
            { id: "all", name: "All Items", icon: Package },
            { id: "clothing", name: "Clothing", icon: Shirt },
            { id: "accessories", name: "Accessories", icon: Package },
            { id: "music", name: "Music", icon: Music },
      ];

      const featuredMerch = [
            {
                  name: "CHERRYPOP FESTIVAL T-SHIRT",
                  price: "Rp 250.000",
                  description:
                        "Official festival t-shirt with 2025 lineup print",
                  image: "/placeholder.svg?height=800&width=800",
                  category: "clothing",
                  badge: "BEST SELLER",
            },
            {
                  name: "CHERRYPOP HOODIE",
                  price: "Rp 450.000",
                  description:
                        "Premium black hoodie with embroidered festival logo",
                  image: "/placeholder.svg?height=800&width=800",
                  category: "clothing",
                  badge: "LIMITED",
            },
      ];

      const allItems = [
            {
                  name: "CHERRYPOP T-SHIRT BLACK",
                  price: "Rp 250.000",
                  image: "/placeholder.svg?height=600&width=600",
                  category: "clothing",
            },
            {
                  name: "CHERRYPOP T-SHIRT WHITE",
                  price: "Rp 250.000",
                  image: "/placeholder.svg?height=600&width=600",
                  category: "clothing",
            },
            {
                  name: "CHERRYPOP LONG SLEEVE",
                  price: "Rp 300.000",
                  image: "/placeholder.svg?height=600&width=600",
                  category: "clothing",
            },
            {
                  name: "CHERRYPOP TANK TOP",
                  price: "Rp 200.000",
                  image: "/placeholder.svg?height=600&width=600",
                  category: "clothing",
            },
            {
                  name: "CHERRYPOP TOTE BAG",
                  price: "Rp 200.000",
                  image: "/placeholder.svg?height=600&width=600",
                  category: "accessories",
            },
            {
                  name: "CHERRYPOP CAP",
                  price: "Rp 175.000",
                  image: "/placeholder.svg?height=600&width=600",
                  category: "accessories",
            },
            {
                  name: "CHERRYPOP BANDANA",
                  price: "Rp 125.000",
                  image: "/placeholder.svg?height=600&width=600",
                  category: "accessories",
            },
            {
                  name: "CHERRYPOP SOCKS",
                  price: "Rp 100.000",
                  image: "/placeholder.svg?height=600&width=600",
                  category: "accessories",
            },
            {
                  name: "CHERRYPOP COMPILATION CD",
                  price: "Rp 150.000",
                  image: "/placeholder.svg?height=600&width=600",
                  category: "music",
            },
            {
                  name: "CHERRYPOP VINYL RECORD",
                  price: "Rp 350.000",
                  image: "/placeholder.svg?height=600&width=600",
                  category: "music",
            },
            {
                  name: "CHERRYPOP CASSETTE TAPE",
                  price: "Rp 125.000",
                  image: "/placeholder.svg?height=600&width=600",
                  category: "music",
            },
            {
                  name: "CHERRYPOP DIGITAL ALBUM",
                  price: "Rp 100.000",
                  image: "/placeholder.svg?height=600&width=600",
                  category: "music",
            },
      ];

      const filteredItems =
            selectedCategory === "all"
                  ? allItems
                  : allItems.filter(
                          (item) => item.category === selectedCategory,
                    );

      return (
            <div className="min-h-screen flex flex-col bg-background">
                  <Header />
                  <Marquee />
                  <main className="flex-1">
                        {/* Hero Section - Compact */}
                        <section className="pt-20 pb-10">
                              <div className="container mx-auto px-4 max-w-7xl">
                                    <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                                          MERCH
                                          <span className="text-primary">
                                                ANDISE
                                          </span>
                                    </h1>
                                    <p className="text-lg text-muted-foreground max-w-2xl">
                                          Official Cherrypop Festival
                                          merchandise. Get your festival gear
                                          and support the event.
                                    </p>
                              </div>
                        </section>

                        {/* Featured Products - Compact Hero Cards */}
                        <section className="py-8 bg-accent/[0.03]">
                              <div className="container mx-auto px-4 max-w-7xl">
                                    <div className="mb-6">
                                          <h2 className="text-2xl font-bold mb-1">
                                                Featured Products
                                          </h2>
                                          <p className="text-sm text-muted-foreground">
                                                Our most popular items
                                          </p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                          {featuredMerch.map((item, index) => (
                                                <div
                                                      key={index}
                                                      className="group relative overflow-hidden border border-border/50 rounded-lg bg-background/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                                                >
                                                      <div className="flex flex-col sm:flex-row">
                                                            <div className="relative w-full sm:w-48 h-48 flex-shrink-0">
                                                                  <Image
                                                                        src={
                                                                              item.image
                                                                        }
                                                                        alt={
                                                                              item.name
                                                                        }
                                                                        fill
                                                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                                  />
                                                                  {item.badge && (
                                                                        <span className="absolute top-3 left-3 px-2 py-1 text-xs font-bold bg-primary text-primary-foreground rounded">
                                                                              {
                                                                                    item.badge
                                                                              }
                                                                        </span>
                                                                  )}
                                                            </div>
                                                            <div className="p-6 flex flex-col justify-between flex-1">
                                                                  <div>
                                                                        <h3 className="text-xl font-bold mb-2">
                                                                              {
                                                                                    item.name
                                                                              }
                                                                        </h3>
                                                                        <p className="text-sm text-muted-foreground mb-3">
                                                                              {
                                                                                    item.description
                                                                              }
                                                                        </p>
                                                                        <p className="text-2xl font-bold text-primary">
                                                                              {
                                                                                    item.price
                                                                              }
                                                                        </p>
                                                                  </div>
                                                                  <Button
                                                                        size="sm"
                                                                        className="mt-4"
                                                                        asChild
                                                                  >
                                                                        <Link href="#">
                                                                              <ShoppingCart
                                                                                    size={
                                                                                          16
                                                                                    }
                                                                              />
                                                                              ADD
                                                                              TO
                                                                              CART
                                                                        </Link>
                                                                  </Button>
                                                            </div>
                                                      </div>
                                                </div>
                                          ))}
                                    </div>
                              </div>
                        </section>

                        {/* Category Filter - Compact Tabs */}
                        <section className="py-8">
                              <div className="container mx-auto px-4 max-w-7xl">
                                    <div className="inline-flex rounded-lg border border-border p-1 bg-accent/[0.03]">
                                          {categories.map((category) => {
                                                const Icon = category.icon;
                                                return (
                                                      <button
                                                            key={category.id}
                                                            onClick={() =>
                                                                  setSelectedCategory(
                                                                        category.id,
                                                                  )
                                                            }
                                                            className={`px-4 py-2 rounded-md transition-all duration-300 flex items-center gap-2 ${
                                                                  selectedCategory ===
                                                                  category.id
                                                                        ? "bg-primary text-primary-foreground font-medium shadow-sm"
                                                                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                                                            }`}
                                                      >
                                                            <Icon size={16} />
                                                            <span className="text-sm">
                                                                  {
                                                                        category.name
                                                                  }
                                                            </span>
                                                      </button>
                                                );
                                          })}
                                    </div>
                              </div>
                        </section>

                        {/* Products Grid - Compact */}
                        <section className="py-8 pb-16">
                              <div className="container mx-auto px-4 max-w-7xl">
                                    <div className="mb-6">
                                          <h2 className="text-2xl font-bold">
                                                {categories.find(
                                                      (c) =>
                                                            c.id ===
                                                            selectedCategory,
                                                )?.name || "All Items"}
                                          </h2>
                                          <p className="text-sm text-muted-foreground">
                                                {filteredItems.length} products
                                                available
                                          </p>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                          {filteredItems.map((item, index) => (
                                                <div
                                                      key={index}
                                                      className="group bg-background border border-border/50 rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                                                >
                                                      <div className="relative aspect-square overflow-hidden bg-accent/5">
                                                            <Image
                                                                  src={
                                                                        item.image
                                                                  }
                                                                  alt={
                                                                        item.name
                                                                  }
                                                                  fill
                                                                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                            />
                                                      </div>
                                                      <div className="p-4">
                                                            <h3 className="text-sm font-bold mb-1 line-clamp-2 min-h-[2.5rem]">
                                                                  {item.name}
                                                            </h3>
                                                            <p className="text-lg font-bold text-primary mb-3">
                                                                  {item.price}
                                                            </p>
                                                            <Button
                                                                  variant="outline"
                                                                  size="sm"
                                                                  className="w-full"
                                                                  asChild
                                                            >
                                                                  <Link href="#">
                                                                        <ShoppingCart
                                                                              size={
                                                                                    14
                                                                              }
                                                                        />
                                                                        Add to
                                                                        Cart
                                                                  </Link>
                                                            </Button>
                                                      </div>
                                                </div>
                                          ))}
                                    </div>
                              </div>
                        </section>

                        {/* Info Banner - Compact */}
                        <section className="py-10 bg-accent/[0.03]">
                              <div className="container mx-auto px-4 max-w-7xl">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                          <div className="text-center">
                                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                                                      <svg
                                                            className="w-6 h-6 text-primary"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                      >
                                                            <path
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  strokeWidth={
                                                                        2
                                                                  }
                                                                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                                                            />
                                                      </svg>
                                                </div>
                                                <h3 className="font-bold mb-1">
                                                      Official Merchandise
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                      100% authentic festival
                                                      products
                                                </p>
                                          </div>

                                          <div className="text-center">
                                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                                                      <svg
                                                            className="w-6 h-6 text-primary"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                      >
                                                            <path
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  strokeWidth={
                                                                        2
                                                                  }
                                                                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                                            />
                                                      </svg>
                                                </div>
                                                <h3 className="font-bold mb-1">
                                                      Fast Shipping
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                      Free delivery for orders
                                                      above Rp 500K
                                                </p>
                                          </div>

                                          <div className="text-center">
                                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                                                      <svg
                                                            className="w-6 h-6 text-primary"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                      >
                                                            <path
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  strokeWidth={
                                                                        2
                                                                  }
                                                                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                            />
                                                      </svg>
                                                </div>
                                                <h3 className="font-bold mb-1">
                                                      Secure Payment
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                      Safe and encrypted
                                                      transactions
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </section>
                  </main>
                  <Footer />
            </div>
      );
}

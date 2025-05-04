"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Marquee } from "@/components/marquee"
import { Instagram, Twitter, Facebook, Youtube, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Marquee />
      <main className="flex-1 bg-black">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              CONTACT <span className="text-primary">US</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Have questions about Cherrypop Festival? We're here to help. Get in touch with our team.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-border p-6 flex flex-col items-center text-center">
                <Mail className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">EMAIL</h3>
                <p className="text-muted-foreground mb-4">For general inquiries and information</p>
                <a href="mailto:info@cherrypop.id" className="hover:text-primary transition-colors">
                  info@cherrypop.id
                </a>
              </div>

              <div className="border border-border p-6 flex flex-col items-center text-center">
                <MapPin className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">LOCATION</h3>
                <p className="text-muted-foreground mb-4">Our office is located at</p>
                <address className="not-italic">
                  Jl. Prawirotaman No. 12
                  <br />
                  Yogyakarta, Indonesia 55153
                </address>
              </div>

              <div className="border border-border p-6 flex flex-col items-center text-center">
                <Phone className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">PHONE</h3>
                <p className="text-muted-foreground mb-4">Monday to Friday, 9am - 5pm</p>
                <a href="tel:+62274123456" className="hover:text-primary transition-colors">
                  +62 274 123456
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-primary text-lg mb-2">GET IN TOUCH</h2>
                <h3 className="text-4xl font-bold mb-6">SEND US A MESSAGE</h3>
                <p className="text-muted-foreground mb-8">
                  Whether you have questions about tickets, want to become a sponsor, or just want to say hello, we'd
                  love to hear from you.
                </p>

                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-4">FOLLOW US</h4>
                  <div className="flex space-x-4">
                    <Link href="#" className="hover:text-primary transition-colors">
                      <Instagram size={24} />
                    </Link>
                    <Link href="#" className="hover:text-primary transition-colors">
                      <Twitter size={24} />
                    </Link>
                    <Link href="#" className="hover:text-primary transition-colors">
                      <Facebook size={24} />
                    </Link>
                    <Link href="#" className="hover:text-primary transition-colors">
                      <Youtube size={24} />
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitSuccess && (
                    <div className="bg-primary/20 border border-primary p-4 mb-6">
                      <p className="text-white">Your message has been sent successfully. We'll get back to you soon!</p>
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-accent/5 border border-border focus:border-primary outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-accent/5 border border-border focus:border-primary outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-accent/5 border border-border focus:border-primary outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full p-3 bg-accent/5 border border-border focus:border-primary outline-none transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full p-3 bg-primary text-white font-medium ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-primary/90"
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="border border-border p-1">
              <div className="aspect-[16/9] bg-accent/5 flex items-center justify-center">
                <p className="text-muted-foreground">
                  [Interactive map would be displayed here - Google Maps or similar]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-primary text-lg mb-2">FAQ</h2>
            <h3 className="text-4xl font-bold mb-12">FREQUENTLY ASKED QUESTIONS</h3>

            <div className="space-y-6 max-w-3xl">
              <div className="border-b border-border pb-6">
                <h4 className="text-xl font-bold mb-2">How can I purchase tickets for Cherrypop Festival?</h4>
                <p className="text-muted-foreground">
                  Tickets can be purchased through our official website or authorized ticket partners. We recommend
                  buying early as prices increase closer to the event date.
                </p>
              </div>

              <div className="border-b border-border pb-6">
                <h4 className="text-xl font-bold mb-2">What's the refund policy?</h4>
                <p className="text-muted-foreground">
                  All ticket sales are final. However, if the event is canceled, you will receive a full refund. In case
                  of postponement, tickets will be valid for the new date.
                </p>
              </div>

              <div className="border-b border-border pb-6">
                <h4 className="text-xl font-bold mb-2">Is there an age restriction for the festival?</h4>
                <p className="text-muted-foreground">
                  Cherrypop Festival is open to all ages. However, children under 12 must be accompanied by an adult,
                  and some areas may have age restrictions.
                </p>
              </div>

              <div className="border-b border-border pb-6">
                <h4 className="text-xl font-bold mb-2">Can I bring my own food and drinks?</h4>
                <p className="text-muted-foreground">
                  Outside food and drinks are not permitted. We have a variety of food vendors and beverage options
                  available throughout the festival grounds.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-2">How can I become a vendor or sponsor?</h4>
                <p className="text-muted-foreground">
                  For vendor and sponsorship opportunities, please email partnerships@cherrypop.id with your proposal
                  and company information.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

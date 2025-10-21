"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Marquee } from "@/components/marquee";
import {
      Instagram,
      Twitter,
      Facebook,
      Youtube,
      Mail,
      MapPin,
      Phone,
      Clock,
      CheckCircle,
      AlertCircle,
} from "lucide-react";
import Link from "next/link";
import { useToast } from "@/components/ui/toast-provider";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { SEO } from "@/components/seo";

export default function ContactPage() {
      const { addToast } = useToast();
      const [formData, setFormData] = useState({
            name: "",
            email: "",
            subject: "",
            message: "",
      });

      const [isSubmitting, setIsSubmitting] = useState(false);
      const [submitSuccess, setSubmitSuccess] = useState(false);
      const [formErrors, setFormErrors] = useState<Record<string, string>>({});

      const handleChange = (
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      ) => {
            const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }));

            // Reset success state when user starts typing again
            if (submitSuccess) {
                  setSubmitSuccess(false);
            }

            // Clear errors for this field when user types
            if (formErrors[name]) {
                  setFormErrors((prev) => {
                        const updated = { ...prev };
                        delete updated[name];
                        return updated;
                  });
            }
      };

      const validateForm = () => {
            const errors: Record<string, string> = {};

            if (!formData.name.trim()) errors.name = "Name is required";
            if (!formData.email.trim()) errors.email = "Email is required";
            else if (!/^\S+@\S+\.\S+$/.test(formData.email))
                  errors.email = "Please enter a valid email";
            if (!formData.subject.trim())
                  errors.subject = "Subject is required";
            if (!formData.message.trim())
                  errors.message = "Message is required";
            else if (formData.message.trim().length < 10)
                  errors.message = "Message must be at least 10 characters";

            setFormErrors(errors);
            return Object.keys(errors).length === 0;
      };

      const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();

            if (!validateForm()) {
                  addToast("Please fix the errors in the form", "error");
                  return;
            }

            setIsSubmitting(true);

            // Simulate form submission
            setTimeout(() => {
                  setIsSubmitting(false);
                  setSubmitSuccess(true);
                  addToast(
                        "Your message has been sent successfully!",
                        "success",
                  );
                  setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                  });

                  // Reset success message after 5 seconds
                  setTimeout(() => {
                        setSubmitSuccess(false);
                  }, 5000);
            }, 1500);
      };

      const faqs = [
            {
                  question: "How can I purchase tickets for Cherrypop Festival?",
                  answer: "Tickets can be purchased through our official website or authorized ticket partners. We recommend buying early as prices increase closer to the event date.",
            },
            {
                  question: "What's the refund policy?",
                  answer: "All ticket sales are final. However, if the event is canceled, you will receive a full refund. In case of postponement, tickets will be valid for the new date.",
            },
            {
                  question: "Is there an age restriction for the festival?",
                  answer: "Cherrypop Festival is open to all ages. However, children under 12 must be accompanied by an adult, and some areas may have age restrictions.",
            },
            {
                  question: "Can I bring my own food and drinks?",
                  answer: "Outside food and drinks are not permitted. We have a variety of food vendors and beverage options available throughout the festival grounds.",
            },
            {
                  question: "How can I become a vendor or sponsor?",
                  answer: "For vendor and sponsorship opportunities, please email partnerships@cherrypop.id with your proposal and company information.",
            },
      ];

      return (
            <div className="min-h-screen flex flex-col bg-background">
                  <SEO
                        title="Contact Us"
                        description="Get in touch with the Cherrypop Festival team. Have questions? We're here to help with all your festival inquiries."
                  />
                  <Header />
                  <Marquee />
                  <main className="flex-1">
                        {/* Hero Section - Compact */}
                        <section className="pt-20 pb-10">
                              <div className="container mx-auto px-4 max-w-7xl">
                                    <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                                          CONTACT{" "}
                                          <span className="text-primary">
                                                US
                                          </span>
                                    </h1>
                                    <p className="text-lg text-muted-foreground max-w-2xl">
                                          Have questions about Cherrypop
                                          Festival? We're here to help. Get in
                                          touch with our team.
                                    </p>
                              </div>
                        </section>

                        {/* Contact Info Cards - Compact Inline */}
                        <section className="py-8 bg-accent/[0.03]">
                              <div className="container mx-auto px-4 max-w-7xl">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                          <div className="flex items-start gap-3 p-5 border border-border/50 rounded-lg bg-background/50 hover:border-primary/50 transition-colors">
                                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                      <Mail className="h-5 w-5 text-primary" />
                                                </div>
                                                <div>
                                                      <h3 className="text-sm font-bold mb-1">
                                                            EMAIL
                                                      </h3>
                                                      <a
                                                            href="mailto:info@cherrypop.id"
                                                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                                      >
                                                            info@cherrypop.id
                                                      </a>
                                                </div>
                                          </div>

                                          <div className="flex items-start gap-3 p-5 border border-border/50 rounded-lg bg-background/50 hover:border-primary/50 transition-colors">
                                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                      <Phone className="h-5 w-5 text-primary" />
                                                </div>
                                                <div>
                                                      <h3 className="text-sm font-bold mb-1">
                                                            PHONE
                                                      </h3>
                                                      <a
                                                            href="tel:+62274123456"
                                                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                                      >
                                                            +62 274 123456
                                                      </a>
                                                </div>
                                          </div>

                                          <div className="flex items-start gap-3 p-5 border border-border/50 rounded-lg bg-background/50 hover:border-primary/50 transition-colors">
                                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                      <MapPin className="h-5 w-5 text-primary" />
                                                </div>
                                                <div>
                                                      <h3 className="text-sm font-bold mb-1">
                                                            LOCATION
                                                      </h3>
                                                      <address className="text-sm text-muted-foreground not-italic">
                                                            Jl. Prawirotaman No.
                                                            12, Yogyakarta
                                                      </address>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </section>

                        {/* Contact Form & Social - Linear Layout */}
                        <section className="py-12">
                              <div className="container mx-auto px-4 max-w-7xl">
                                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                                          {/* Left Sidebar */}
                                          <div className="lg:col-span-2 space-y-8">
                                                <div>
                                                      <h2 className="text-2xl font-bold mb-2">
                                                            Get in Touch
                                                      </h2>
                                                      <p className="text-muted-foreground text-sm leading-relaxed">
                                                            Whether you have
                                                            questions about
                                                            tickets, want to
                                                            become a sponsor, or
                                                            just want to say
                                                            hello, we'd love to
                                                            hear from you.
                                                      </p>
                                                </div>

                                                {/* Office Hours */}
                                                <div className="p-5 border border-border/50 rounded-lg bg-accent/[0.03]">
                                                      <div className="flex items-start gap-3 mb-4">
                                                            <Clock className="h-5 w-5 text-primary mt-0.5" />
                                                            <div>
                                                                  <h3 className="text-sm font-bold mb-1">
                                                                        OFFICE
                                                                        HOURS
                                                                  </h3>
                                                                  <p className="text-sm text-muted-foreground">
                                                                        Monday -
                                                                        Friday
                                                                  </p>
                                                                  <p className="text-sm text-muted-foreground">
                                                                        9:00 AM
                                                                        - 5:00
                                                                        PM WIB
                                                                  </p>
                                                            </div>
                                                      </div>
                                                </div>

                                                {/* Social Media */}
                                                <div>
                                                      <h4 className="text-sm font-bold mb-3">
                                                            FOLLOW US
                                                      </h4>
                                                      <div className="flex gap-3">
                                                            <Link
                                                                  href="#"
                                                                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                                                            >
                                                                  <Instagram
                                                                        size={
                                                                              18
                                                                        }
                                                                  />
                                                            </Link>
                                                            <Link
                                                                  href="#"
                                                                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                                                            >
                                                                  <Twitter
                                                                        size={
                                                                              18
                                                                        }
                                                                  />
                                                            </Link>
                                                            <Link
                                                                  href="#"
                                                                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                                                            >
                                                                  <Facebook
                                                                        size={
                                                                              18
                                                                        }
                                                                  />
                                                            </Link>
                                                            <Link
                                                                  href="#"
                                                                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                                                            >
                                                                  <Youtube
                                                                        size={
                                                                              18
                                                                        }
                                                                  />
                                                            </Link>
                                                      </div>
                                                </div>
                                          </div>

                                          {/* Contact Form */}
                                          <div className="lg:col-span-3">
                                                <form
                                                      onSubmit={handleSubmit}
                                                      className="space-y-5"
                                                >
                                                      {submitSuccess && (
                                                            <div className="bg-primary/10 border border-primary rounded-lg p-4">
                                                                  <p className="text-sm text-foreground">
                                                                        Your
                                                                        message
                                                                        has been
                                                                        sent
                                                                        successfully.
                                                                        We'll
                                                                        get back
                                                                        to you
                                                                        soon!
                                                                  </p>
                                                            </div>
                                                      )}

                                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                            <div>
                                                                  <label
                                                                        htmlFor="name"
                                                                        className="block mb-2 text-sm font-medium"
                                                                  >
                                                                        Your
                                                                        Name
                                                                  </label>
                                                                  <input
                                                                        type="text"
                                                                        id="name"
                                                                        name="name"
                                                                        value={
                                                                              formData.name
                                                                        }
                                                                        onChange={
                                                                              handleChange
                                                                        }
                                                                        required
                                                                        className="w-full p-3 bg-accent/[0.03] border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                                                        placeholder="John Doe"
                                                                  />
                                                            </div>

                                                            <div>
                                                                  <label
                                                                        htmlFor="email"
                                                                        className="block mb-2 text-sm font-medium"
                                                                  >
                                                                        Your
                                                                        Email
                                                                  </label>
                                                                  <input
                                                                        type="email"
                                                                        id="email"
                                                                        name="email"
                                                                        value={
                                                                              formData.email
                                                                        }
                                                                        onChange={
                                                                              handleChange
                                                                        }
                                                                        required
                                                                        className="w-full p-3 bg-accent/[0.03] border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                                                        placeholder="john@example.com"
                                                                  />
                                                            </div>
                                                      </div>

                                                      <div>
                                                            <div className="mb-4">
                                                                  <label
                                                                        htmlFor="subject"
                                                                        className="block text-sm font-medium mb-1"
                                                                  >
                                                                        Subject <span className="text-red-500">*</span>
                                                                  </label>
                                                                  <input
                                                                        type="text"
                                                                        id="subject"
                                                                        name="subject"
                                                                        value={
                                                                              formData.subject
                                                                        }
                                                                        onChange={
                                                                              handleChange
                                                                        }
                                                                        className={`w-full p-3 border rounded-md bg-background focus:outline-none focus:ring-1 focus:ring-primary ${
                                                                              formErrors.subject
                                                                              ? "border-red-500 focus:ring-red-500"
                                                                              : "border-border"
                                                                        }`}
                                                                        aria-invalid={!!formErrors.subject}
                                                                        aria-describedby={formErrors.subject ? "subject-error" : undefined}
                                                                  />
                                                                  {formErrors.subject && (
                                                                        <p id="subject-error" className="mt-1 text-sm text-red-500 flex items-center">
                                                                              <AlertCircle size={14} className="mr-1" />
                                                                              {formErrors.subject}
                                                                        </p>
                                                                  )}
                                                            </div>

                                                      <div>
                                                            <label
                                                                  htmlFor="message"
                                                                  className="block mb-2 text-sm font-medium"
                                                            >
                                                                  Your Message
                                                            </label>
                                                            <textarea
                                                                  id="message"
                                                                  name="message"
                                                                  value={
                                                                        formData.message
                                                                  }
                                                                  onChange={
                                                                        handleChange
                                                                  }
                                                                  required
                                                                  rows={5}
                                                                  className="w-full p-3 bg-accent/[0.03] border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                                                  placeholder="Tell us more about your inquiry..."
                                                            ></textarea>
                                                      </div>

                                                      <button
                                                            type="submit"
                                                            disabled={
                                                                  isSubmitting
                                                            }
                                                            className={`w-full p-3 bg-primary text-primary-foreground font-medium rounded-lg transition-all relative ${
                                                                  isSubmitting
                                                                        ? "opacity-90 cursor-not-allowed pl-10"
                                                                        : "hover:bg-primary/90 hover:shadow-lg"
                                                            }`}
                                                      >
                                                            {isSubmitting && (
                                                                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                                                        <LoadingSpinner
                                                                              size="xs"
                                                                              color="white"
                                                                        />
                                                                  </span>
                                                            )}
                                                            {isSubmitting
                                                                  ? "Sending..."
                                                                  : submitSuccess
                                                                    ? "Message Sent!"
                                                                    : "Send Message"}
                                                      </button>
                                                </form>
                                          </div>
                                    </div>
                              </div>
                        </section>

                        {/* Map Section - Compact */}
                        <section className="py-8 bg-accent/[0.03]">
                              <div className="container mx-auto px-4 max-w-7xl">
                                    <div className="border border-border/50 rounded-lg overflow-hidden">
                                          <div className="aspect-[21/9] bg-accent/10 flex items-center justify-center">
                                                <div className="text-center">
                                                      <MapPin className="h-12 w-12 text-primary mx-auto mb-3" />
                                                      <p className="text-muted-foreground text-sm">
                                                            Interactive map
                                                            placeholder
                                                      </p>
                                                      <p className="text-xs text-muted-foreground mt-1">
                                                            Jl. Prawirotaman No.
                                                            12, Yogyakarta,
                                                            Indonesia
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </section>

                        {/* FAQ - Compact Accordion Style */}
                        <section className="py-12 pb-16">
                              <div className="container mx-auto px-4 max-w-7xl">
                                    <div className="mb-8">
                                          <h2 className="text-3xl font-bold mb-2">
                                                Frequently Asked Questions
                                          </h2>
                                          <p className="text-muted-foreground">
                                                Find quick answers to common
                                                questions
                                          </p>
                                    </div>

                                    <div className="space-y-4">
                                          {faqs.map((faq, index) => (
                                                <div
                                                      key={index}
                                                      className="border border-border/50 rounded-lg p-6 bg-accent/[0.02] hover:border-primary/50 transition-colors"
                                                >
                                                      <h4 className="text-lg font-bold mb-2">
                                                            {faq.question}
                                                      </h4>
                                                      <p className="text-muted-foreground text-sm leading-relaxed">
                                                            {faq.answer}
                                                      </p>
                                                </div>
                                          ))}
                                    </div>
                              </div>
                        </section>
                  </main>
                  <Footer />
            </div>
      );
}

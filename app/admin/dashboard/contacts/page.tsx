import type { Metadata } from "next"
import ContactSubmissions from "@/components/dashboard/contact-submissions"

export const metadata: Metadata = {
  title: "Contact Submissions | Cherry Pop Admin",
  description: "View and manage contact form submissions",
}

export default function ContactsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Contact Form Submissions</h1>
        <p className="text-muted-foreground">View and respond to messages from website visitors</p>
      </div>
      <ContactSubmissions />
    </div>
  )
}

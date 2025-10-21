import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Our Team | Cherrypop Festival",
  description:
    "The creative minds behind Cherrypop Festival, Indonesia's innovative music celebration showcasing youth subcultures in Yogyakarta.",
  openGraph: {
    title: "About Cherrypop Festival",
    description:
      "Learn about our vision, mission and the team that makes Cherrypop Festival happen.",
    images: ["/og-images/about-page.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type React from "react";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ToastProvider } from "@/components/ui/toast-provider";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

const urbanist = Urbanist({
      subsets: ["latin"],
      variable: "--font-urbanist",
});

export const metadata: Metadata = {
      title: "CHERRYPOP FESTIVAL - Yogyakarta",
      description:
            "Festival musik tahunan di Yogyakarta yang digagas oleh Swasembada Kreasi.",
      generator: "v0.dev",
      keywords: ["cherrypop", "festival", "musik", "yogyakarta", "indonesia"],
      authors: [{ name: "Cherrypop Team" }],
      openGraph: {
            title: "CHERRYPOP FESTIVAL - Yogyakarta",
            description:
                  "Festival musik tahunan di Yogyakarta yang digagas oleh Swasembada Kreasi.",
            url: "https://cherrypopfestival.com",
            siteName: "Cherrypop Festival",
            locale: "id_ID",
            type: "website",
      },
      twitter: {
            card: "summary_large_image",
            title: "CHERRYPOP FESTIVAL - Yogyakarta",
            description:
                  "Festival musik tahunan di Yogyakarta yang digagas oleh Swasembada Kreasi.",
            creator: "@cherrypopfest",
      },
      viewport: "width=device-width, initial-scale=1",
      themeColor: "#000000",
};

export default function RootLayout({
      children,
}: Readonly<{
      children: React.ReactNode;
}>) {
      return (
            <html lang="id" suppressHydrationWarning>
                  <body
                        className={`${urbanist.variable} font-sans antialiased`}
                  >
                        <ThemeProvider
                              attribute="class"
                              defaultTheme="dark"
                              enableSystem
                              disableTransitionOnChange
                        >
                              <ToastProvider>
                                    {children}
                                    <ScrollToTop />
                              </ToastProvider>
                        </ThemeProvider>
                  </body>
            </html>
      );
}

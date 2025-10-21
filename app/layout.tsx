import type React from "react";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const urbanist = Urbanist({
      subsets: ["latin"],
      variable: "--font-urbanist",
});

export const metadata: Metadata = {
      title: "CHERRYPOP FESTIVAL - Yogyakarta",
      description:
            "Festival musik tahunan di Yogyakarta yang digagas oleh Swasembada Kreasi.",
      generator: "v0.dev",
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
                              {children}
                        </ThemeProvider>
                  </body>
            </html>
      );
}

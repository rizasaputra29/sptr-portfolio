import type { Metadata, Viewport } from "next";
import { Inter, Italianno } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Providers } from "./providers";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const italianno = Italianno({
  variable: "--font-italianno",
  subsets: ["latin"],
  weight: "400",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Riza Saputra | Software Engineer",
  description: "Software Engineer based in Semarang, specializing in scalable web systems.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Riza Saputra | Software Engineer",
    description: "Software Engineer based in Semarang, specializing in scalable web systems.",
    type: "website",
    locale: "en_US",
    siteName: "Riza Saputra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riza Saputra | Software Engineer",
    description: "Software Engineer based in Semarang, specializing in scalable web systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Riza Saputra",
              "jobTitle": "Software Engineer",
              "url": "https://rizasaputra.my.id",
              "sameAs": [
                "https://github.com/rizasaputra29",
                "https://linkedin.com/in/rizasaputra29",
                "https://instagram.com/rizasaputra29"
              ],
              "knowsAbout": [
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "PostgreSQL"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${italianno.variable} antialiased bg-white text-gray-900 font-sans selection:bg-gray-900 selection:text-white`}
      >
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        <Providers>
          <SmoothScrollProvider>
            <Navbar />
            <main id="main-content" className="min-h-screen">
              {children}
            </main>
            <Footer />
          </SmoothScrollProvider>
        </Providers>
      </body>
    </html>
  );
}


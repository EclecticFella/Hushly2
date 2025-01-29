import { Playfair_Display, Inter } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-softPink font-sans flex flex-col">
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <Link href="/" className="flex-shrink-0">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hushly-PanZTNTjCg1JlbR0xreKuY8If6AnkP.png"
                    alt="Hushly"
                    width={100}
                    height={50}
                    priority
                    className="h-10 w-auto"
                  />
                </Link>
              </div>
              <div className="hidden sm:flex items-center space-x-8">
                <Link href="/services" className="text-gray-800 hover:text-roseGold transition-colors">
                  Services
                </Link>
                <Link href="/about" className="text-gray-800 hover:text-roseGold transition-colors">
                  About Us
                </Link>
                <Link href="/faq" className="text-gray-800 hover:text-roseGold transition-colors">
                  FAQ
                </Link>
                <Link href="/work-with-us">
                  <Button
                    variant="outline"
                    className="border-roseGold text-roseGold hover:bg-roseGold hover:text-white transition-colors"
                  >
                    Work With Us
                  </Button>
                </Link>
              </div>
              {/* Mobile menu button */}
              <div className="sm:hidden">
                <Button variant="ghost" className="text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </Button>
              </div>
            </div>
          </nav>
        </header>
        <main className="pt-16 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}


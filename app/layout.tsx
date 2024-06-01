import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { sahelFont } from "@/public/fonts/font"
import { ShoppingCart } from "@/components/ShoppingCart"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className={`bg-gray-50 ${sahelFont.className}`}>
        <Navbar />
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  )
}

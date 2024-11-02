// app/layout.js
"use client"
import localFont from "next/font/local";
import "./globals.css";
import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Excomag",
//   description: "Empowering SMEs across Africa",
// };

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        <div className="bg-white text-black min-h-screen font-sans flex flex-col max-w-screen overflow-x-hidden mx-auto">
          {/* Navigation Menu */}
          <nav className="w-full flex justify-between items-center px-8 py-4 bg-black text-white z-10 relative">
          {/* <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-black bg-opacity-60 text-white z-10"> */}
            <Link href="/" className="text-xl font-semibold">
            <img src="/icon.jpg" alt="Logo" className="h-10 w-10 mr-2" />
            {/* Excomag */}
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8">
            <Link href="/">Home</Link>
              <Link href="/print-editions">Print Editions</Link>
              <Link href="/about">About</Link>
              <Link href="/articles">Articles</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/media">Media</Link>
            </div>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="md:hidden focus:outline-none z-50"
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 z-40 w-full bg-black bg-opacity-90 text-white flex flex-col items-center space-y-4 py-4 md:hidden">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/print-editions" onClick={() => setIsMenuOpen(false)}>Print Editions</Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link href="/articles" onClick={() => setIsMenuOpen(false)}>Articles</Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <Link href="/media" onClick={() => setIsMenuOpen(false)}>Media</Link>
            </div>
          )}

          {/* Main Content */}
          <main className="flex-grow">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-gray-800 text-white py-8 text-center">
            <div className="flex justify-center space-x-4">
              {['Facebook', 'Twitter', 'LinkedIn'].map((platform) => (
                <a key={platform} href={`#${platform.toLowerCase()}`} className="hover:underline">
                  {platform}
                </a>
              ))}
            </div>
            <p className="mt-4">© {new Date().getFullYear()} Excomag. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}

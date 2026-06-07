"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex h-20 items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >
           <Image
  src="/images/logo.png"
  alt="Herbal Global Solutions"
  width={320}
  height={120}
  priority
  className="h-16 w-auto object-contain"
/>

            
          </Link>

          {/* Desktop Menu */}

          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex gap-8 font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition hover:text-green-700 ${
                      pathname === link.href
                        ? "font-semibold text-green-700"
                        : "text-gray-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="rounded-lg bg-green-700 px-5 py-3 text-white transition hover:bg-green-800"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-green-700 md:hidden"
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}

        {isOpen && (
          <div className="border-t py-4 md:hidden">

            <ul className="flex flex-col gap-4 font-medium">

              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block transition hover:text-green-700 ${
                      pathname === link.href
                        ? "font-semibold text-green-700"
                        : "text-gray-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 inline-block rounded-lg bg-green-700 px-5 py-3 text-white transition hover:bg-green-800"
                >
                  Get Quote
                </Link>
              </li>

            </ul>

          </div>
        )}

      </div>
    </nav>
  );
}
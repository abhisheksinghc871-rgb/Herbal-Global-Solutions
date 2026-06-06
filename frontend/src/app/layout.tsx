import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Herbal Global Solutions",
    template: "%s | Herbal Global Solutions",
  },

  description:
    "Premium herbal ingredients supplier serving pharmaceutical, nutraceutical, cosmetic and food industries worldwide.",

  keywords: [
    "Herbal Ingredients",
    "Herbal Extracts",
    "Ashwagandha Extract",
    "Curcumin Extract",
    "Neem Extract",
    "Moringa Powder",
    "Herbal Supplier",
    "Botanical Extracts",
    "Nutraceutical Ingredients",
    "Cosmetic Ingredients",
    "Pharmaceutical Ingredients",
    "Herbal Exporter",
  ],

  authors: [
    {
      name: "Herbal Global Solutions",
    },
  ],

  openGraph: {
    title: "Herbal Global Solutions",
    description:
      "Premium herbal ingredients supplier serving global industries.",
    type: "website",
    locale: "en_US",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
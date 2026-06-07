import WhatsAppButton from "@/components/WhatsAppButton";
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
  metadataBase: new URL("https://www.herbalglobalsolutions.com"),

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

  creator: "Herbal Global Solutions",

  openGraph: {
    title: "Herbal Global Solutions",
    description:
      "Premium herbal ingredients supplier serving pharmaceutical, nutraceutical, cosmetic and food industries worldwide.",
    url: "https://www.herbalglobalsolutions.com",
    siteName: "Herbal Global Solutions",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/images/hero-herbal.png",
        width: 1200,
        height: 630,
        alt: "Herbal Global Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Herbal Global Solutions",
    description:
      "Premium herbal ingredients supplier serving global industries.",
    images: ["/images/hero-herbal.png"],
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
  <WhatsAppButton />
</body>
    </html>
  );
}
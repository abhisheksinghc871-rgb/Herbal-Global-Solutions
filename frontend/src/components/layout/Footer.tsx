import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Company Info */}

          <div>
            <Link href="/" className="inline-block">
  <Image
    src="/images/logo.png"
    alt="Herbal Global Solutions"
    width={280}
    height={90}
    className="h-20 w-auto brightness-110"
  />
</Link>

<p className="mt-5 text-gray-400 leading-7">
  Premium herbal ingredients supplier serving
  pharmaceutical, nutraceutical, cosmetic and food
  industries across global markets.
</p>

<div className="mt-6 flex gap-3">

  <span className="rounded-full bg-green-900 px-3 py-1 text-sm text-green-300">
    Export Ready
  </span>

  <span className="rounded-full bg-green-900 px-3 py-1 text-sm text-green-300">
    GMP Certified
  </span>

  <span className="rounded-full bg-green-900 px-3 py-1 text-sm text-green-300">
    Global Supply
  </span>

</div>
          </div>

          {/* Quick Links */}

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link href="/" className="hover:text-green-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-green-400">
                  About
                </Link>
              </li>

              <li>
                <Link href="/products" className="hover:text-green-400">
                  Products
                </Link>
              </li>

              <li>
                <Link href="/industries" className="hover:text-green-400">
                  Industries
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-green-400">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Products */}

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Featured Products
            </h4>

            <ul className="space-y-3 text-gray-400">

              <li>
  <Link
    href="/products/ashwagandha-extract"
    className="hover:text-green-400"
  >
    Ashwagandha Extract
  </Link>
</li>

<li>
  <Link
    href="/products/curcumin-extract"
    className="hover:text-green-400"
  >
    Curcumin Extract
  </Link>
</li>

<li>
  <Link
    href="/products/neem-extract"
    className="hover:text-green-400"
  >
    Neem Extract
  </Link>
</li>

<li>
  <Link
    href="/products/tulsi-powder"
    className="hover:text-green-400"
  >
    Tulsi Powder
  </Link>
</li>

<li>
  <Link
    href="/products/moringa-powder"
    className="hover:text-green-400"
  >
    Moringa Powder
  </Link>
</li>

            </ul>
          </div>

          {/* Contact */}

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Contact Information
            </h4>

            <ul className="space-y-3 text-gray-400">

              <li>
  <a
    href="mailto:techopssimplified8@gmail.com"
    className="hover:text-green-400"
  >
    📧 techopssimplified8@gmail.com
  </a>
</li>

<li>
  <a
    href="tel:+918103421613"
    className="hover:text-green-400"
  >
    📞 +91 81034 21613
  </a>
</li>

<li>📍 India</li>

<li>🌐 Worldwide Export Support</li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar */}

        <div className="mt-12 border-t border-gray-700 pt-6">

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-sm text-gray-500">
              © 2026 Herbal Global Solutions. All Rights Reserved.
            </p>

            <p className="text-sm text-gray-500">
              Premium Herbal Ingredients • Global Supply • Export Ready
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}
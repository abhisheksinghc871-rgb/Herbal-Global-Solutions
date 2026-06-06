import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Company Info */}

          <div>
            <h3 className="mb-4 text-2xl font-bold text-green-400">
              Herbal Global Solutions
            </h3>

            <p className="text-gray-400 leading-7">
              Premium herbal ingredients supplier serving
              pharmaceutical, nutraceutical, cosmetic and food
              industries across global markets.
            </p>
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
    href="mailto:info@herbalglobalsolutions.com"
    className="hover:text-green-400"
  >
    📧 info@herbalglobalsolutions.com
  </a>
</li>

<li>
  <a
    href="tel:+919876543210"
    className="hover:text-green-400"
  >
    📞 +91 98765 43210
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
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-4">

          <div>
            <h3 className="mb-4 text-2xl font-bold text-green-400">
              Herbal Global Solutions
            </h3>

            <p className="text-gray-400">
              Premium herbal ingredients supplier serving pharma,
              nutraceutical, cosmetic and food industries worldwide.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">
              Quick Links
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
              <li>Industries</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">
              Products
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>Ashwagandha Extract</li>
              <li>Curcumin Extract</li>
              <li>Neem Extract</li>
              <li>Moringa Powder</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">
              Contact
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>info@herbalglobalsolutions.com</li>
              <li>+91 98765 43210</li>
              <li>India</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500">
          © 2026 Herbal Global Solutions. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
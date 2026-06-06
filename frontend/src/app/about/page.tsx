export default function AboutPage() {
  return (
    <main>

      <section className="bg-green-50 py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">

          <h1 className="text-6xl font-bold text-green-800">
            About Us
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-700">
            Herbal Global Solutions is a trusted supplier of premium
            herbal extracts, powders and botanical ingredients serving
            industries worldwide.
          </p>

        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <h2 className="mb-6 text-4xl font-bold text-green-800">
                Our Story
              </h2>

              <p className="mb-6 text-lg text-gray-600">
                We specialize in sourcing, processing and supplying
                high-quality herbal ingredients for pharmaceutical,
                nutraceutical, cosmetic and food industries.
              </p>

              <p className="text-lg text-gray-600">
                Our commitment to quality, transparency and global
                standards has helped us build long-term relationships
                with clients across multiple countries.
              </p>
            </div>

            <div className="rounded-3xl bg-green-100 p-10">

              <h3 className="mb-6 text-3xl font-bold text-green-800">
                Company Highlights
              </h3>

              <ul className="space-y-4 text-lg text-gray-700">
                <li>✓ 50+ Herbal Products</li>
                <li>✓ 25+ Countries Served</li>
                <li>✓ 500+ Business Clients</li>
                <li>✓ Quality Assured Supply Chain</li>
                <li>✓ Global Export Capabilities</li>
              </ul>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
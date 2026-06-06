export default function CompanyHighlights() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-green-800">
            Why Businesses Choose Us
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Reliable sourcing, premium quality and global supply capabilities.
          </p>
        </div>

        {/* Features */}

        <div className="mb-20 grid gap-8 md:grid-cols-3">

          <div className="rounded-xl border p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold text-green-700">
              Premium Quality
            </h3>

            <p className="text-gray-600">
              Carefully sourced herbal ingredients with strict quality control
              standards.
            </p>
          </div>

          <div className="rounded-xl border p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold text-green-700">
              Global Supply
            </h3>

            <p className="text-gray-600">
              Serving pharma, nutraceutical and cosmetic industries worldwide.
            </p>
          </div>

          <div className="rounded-xl border p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold text-green-700">
              Trusted Partnership
            </h3>

            <p className="text-gray-600">
              Long-term business relationships built on transparency and trust.
            </p>
          </div>

        </div>

        {/* Statistics */}

        <div className="rounded-3xl bg-green-700 px-8 py-12 text-white">

          <div className="grid gap-10 text-center md:grid-cols-4">

            <div>
              <h3 className="text-5xl font-bold">50+</h3>
              <p className="mt-2 text-green-100">
                Herbal Products
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">25+</h3>
              <p className="mt-2 text-green-100">
                Countries Served
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">100+</h3>
              <p className="mt-2 text-green-100">
                Business Clients
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">10+</h3>
              <p className="mt-2 text-green-100">
                Years Experience
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
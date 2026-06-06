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

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl border p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-semibold text-green-700">
              Premium Quality
            </h3>

            <p className="text-gray-600">
              Carefully sourced herbal ingredients with strict quality control
              standards.
            </p>
          </div>

          <div className="rounded-xl border p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-semibold text-green-700">
              Global Supply
            </h3>

            <p className="text-gray-600">
              Serving pharma, nutraceutical and cosmetic industries worldwide.
            </p>
          </div>

          <div className="rounded-xl border p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-semibold text-green-700">
              Trusted Partnership
            </h3>

            <p className="text-gray-600">
              Long-term business relationships built on transparency and trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
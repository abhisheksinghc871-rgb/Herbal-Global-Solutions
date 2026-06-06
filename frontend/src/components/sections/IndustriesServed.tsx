export default function IndustriesServed() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-green-800">
            Industries We Serve
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Supplying premium herbal ingredients to diverse industries worldwide.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-xl border p-8 shadow-sm transition hover:shadow-lg">
            <h3 className="mb-3 text-2xl font-semibold text-green-700">
              🏥 Pharma Industry
            </h3>

            <p className="text-gray-600">
              Herbal extracts and active ingredients for pharmaceutical applications.
            </p>
          </div>

          <div className="rounded-xl border p-8 shadow-sm transition hover:shadow-lg">
            <h3 className="mb-3 text-2xl font-semibold text-green-700">
              💊 Nutraceutical Industry
            </h3>

            <p className="text-gray-600">
              High-quality ingredients for supplements and wellness products.
            </p>
          </div>

          <div className="rounded-xl border p-8 shadow-sm transition hover:shadow-lg">
            <h3 className="mb-3 text-2xl font-semibold text-green-700">
              💄 Cosmetic Industry
            </h3>

            <p className="text-gray-600">
              Natural extracts for skincare, beauty and personal care formulations.
            </p>
          </div>

          <div className="rounded-xl border p-8 shadow-sm transition hover:shadow-lg">
            <h3 className="mb-3 text-2xl font-semibold text-green-700">
              🍵 Food & Beverage
            </h3>

            <p className="text-gray-600">
              Herbal powders and ingredients for food and beverage products.
            </p>
          </div>

          <div className="rounded-xl border p-8 shadow-sm transition hover:shadow-lg">
            <h3 className="mb-3 text-2xl font-semibold text-green-700">
              🐄 Animal Nutrition
            </h3>

            <p className="text-gray-600">
              Herbal ingredients used in animal feed and nutrition products.
            </p>
          </div>

          <div className="rounded-xl border p-8 shadow-sm transition hover:shadow-lg">
            <h3 className="mb-3 text-2xl font-semibold text-green-700">
              🧪 Research & Development
            </h3>

            <p className="text-gray-600">
              Specialized ingredients supplied for research and product development.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
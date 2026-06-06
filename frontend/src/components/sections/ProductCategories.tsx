export default function ProductCategories() {
  return (
    <section className="bg-green-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-green-800">
            Our Product Categories
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            High-quality herbal ingredients for multiple industries.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-xl bg-white p-8 shadow-sm transition hover:shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold text-green-700">
              Ashwagandha Extract
            </h3>

            <p className="text-gray-600">
              Premium quality Ashwagandha extract for nutraceutical and wellness products.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-sm transition hover:shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold text-green-700">
              Curcumin Extract
            </h3>

            <p className="text-gray-600">
              High-purity turmeric extract used in supplements and pharmaceuticals.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-sm transition hover:shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold text-green-700">
              Neem Extract
            </h3>

            <p className="text-gray-600">
              Widely used in cosmetic, personal care and herbal formulations.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-sm transition hover:shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold text-green-700">
              Tulsi Powder
            </h3>

            <p className="text-gray-600">
              Natural herbal powder suitable for food and nutraceutical applications.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-sm transition hover:shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold text-green-700">
              Moringa Powder
            </h3>

            <p className="text-gray-600">
              Nutrient-rich ingredient used in health and wellness products.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-sm transition hover:shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold text-green-700">
              Aloe Vera Extract
            </h3>

            <p className="text-gray-600">
              Popular ingredient for cosmetic, skincare and healthcare products.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
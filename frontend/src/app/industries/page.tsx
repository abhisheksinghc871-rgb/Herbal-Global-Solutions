const industries = [
  {
    name: "Pharmaceutical Industry",
    description:
      "High-quality herbal ingredients for pharmaceutical formulations.",
  },
  {
    name: "Nutraceutical Industry",
    description:
      "Premium extracts and powders for health supplements and wellness products.",
  },
  {
    name: "Cosmetic Industry",
    description:
      "Natural ingredients for skincare, beauty and personal care products.",
  },
  {
    name: "Food & Beverage Industry",
    description:
      "Herbal ingredients suitable for food and beverage applications.",
  },
  {
    name: "Animal Nutrition",
    description:
      "Herbal solutions used in feed and animal nutrition products.",
  },
  {
    name: "Research & Development",
    description:
      "Botanical ingredients for product development and research activities.",
  },
];

export default function IndustriesPage() {
  return (
    <main>

      <section className="bg-green-50 py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">

          <h1 className="text-6xl font-bold text-green-800">
            Industries We Serve
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-700">
            Delivering premium herbal ingredients across multiple industries worldwide.
          </p>

        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {industries.map((industry) => (
              <div
                key={industry.name}
                className="rounded-2xl border p-8 shadow-sm transition hover:shadow-lg"
              >
                <h3 className="mb-4 text-2xl font-bold text-green-700">
                  {industry.name}
                </h3>

                <p className="text-gray-600">
                  {industry.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}
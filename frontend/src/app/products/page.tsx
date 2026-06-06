import Link from "next/link";

const products = [
  {
    slug: "ashwagandha-extract",
    name: "Ashwagandha Extract",
    description:
      "Premium herbal extract widely used in nutraceutical and wellness products.",
  },
  {
    slug: "curcumin-extract",
    name: "Curcumin Extract",
    description:
      "High-purity turmeric extract used in supplements and pharmaceuticals.",
  },
  {
    slug: "neem-extract",
    name: "Neem Extract",
    description:
      "Natural botanical ingredient for cosmetic and personal care products.",
  },
  {
    slug: "tulsi-powder",
    name: "Tulsi Powder",
    description:
      "Traditional herbal powder suitable for food and nutraceutical applications.",
  },
  {
    slug: "moringa-powder",
    name: "Moringa Powder",
    description:
      "Nutrient-rich herbal ingredient used in health and wellness products.",
  },
  {
    slug: "aloe-vera-extract",
    name: "Aloe Vera Extract",
    description:
      "Popular ingredient for skincare, cosmetic and healthcare formulations.",
  },
];

export default function ProductsPage() {
  return (
    <main>

      <section className="bg-green-50 py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">

          <h1 className="text-6xl font-bold text-green-800">
            Our Products
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-700">
            Explore our range of premium herbal ingredients for global industries.
          </p>

        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="rounded-2xl border p-8 shadow-sm transition hover:shadow-lg hover:border-green-600"
              >
                <h3 className="mb-4 text-2xl font-bold text-green-700">
                  {product.name}
                </h3>

                <p className="text-gray-600">
                  {product.description}
                </p>

                <button className="mt-6 rounded-lg bg-green-700 px-5 py-3 text-white">
                  View Details
                </button>
              </Link>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}
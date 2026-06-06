type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const products = {
  "ashwagandha-extract": {
    name: "Ashwagandha Extract",
    description:
      "Premium herbal extract widely used in nutraceutical and wellness products.",
  },

  "curcumin-extract": {
    name: "Curcumin Extract",
    description:
      "High-purity turmeric extract used in supplements and pharmaceuticals.",
  },

  "neem-extract": {
    name: "Neem Extract",
    description:
      "Natural botanical ingredient for cosmetic and personal care products.",
  },

  "tulsi-powder": {
    name: "Tulsi Powder",
    description:
      "Traditional herbal powder suitable for food and nutraceutical applications.",
  },

  "moringa-powder": {
    name: "Moringa Powder",
    description:
      "Nutrient-rich herbal ingredient used in health and wellness products.",
  },

  "aloe-vera-extract": {
    name: "Aloe Vera Extract",
    description:
      "Popular ingredient for skincare, cosmetic and healthcare formulations.",
  },
};

export default async function ProductDetailPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product =
    products[slug as keyof typeof products];

  if (!product) {
    return (
      <main className="py-20 text-center">
        <h1 className="text-4xl font-bold text-red-600">
          Product Not Found
        </h1>
      </main>
    );
  }

  return (
    <main>

      <section className="bg-green-50 py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">

          <h1 className="text-6xl font-bold text-green-800">
            {product.name}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-700">
            {product.description}
          </p>

        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">

          <h2 className="mb-6 text-4xl font-bold text-green-800">
            Product Overview
          </h2>

          <p className="text-lg text-gray-600">
            Our {product.name} is manufactured and sourced
            under strict quality standards to ensure purity,
            consistency and reliability for industrial use.
          </p>

          <button className="mt-10 rounded-lg bg-green-700 px-8 py-4 text-white">
            Request Product Details
          </button>

        </div>
      </section>

    </main>
  );
}
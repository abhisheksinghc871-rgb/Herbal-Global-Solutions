import Image from "next/image";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const products = {
  "ashwagandha-extract": {
    name: "Ashwagandha Extract",
    image: "/images/products/ashwagandha.jpg",
    description:
      "Premium herbal extract widely used in nutraceutical and wellness products.",
    benefits: [
      "Supports Stress Management",
      "Promotes Better Sleep",
      "Enhances Energy Levels",
    ],
    applications: [
      "Nutraceuticals",
      "Pharmaceuticals",
      "Dietary Supplements",
      "Wellness Products",
    ],
    specifications: {
      type: "Herbal Extract",
      form: "Powder",
      quality: "Premium Grade",
      packaging: "25 Kg Drum",
    },
  },

  "curcumin-extract": {
    name: "Curcumin Extract",
    image: "/images/products/curcumin.jpg",
    description:
      "High-purity turmeric extract used in supplements and pharmaceuticals.",
    benefits: [
      "Rich in Antioxidants",
      "Supports Joint Health",
      "Natural Wellness Support",
    ],
    applications: [
      "Pharmaceuticals",
      "Nutraceuticals",
      "Health Supplements",
      "Functional Foods",
    ],
    specifications: {
      type: "Turmeric Extract",
      form: "Powder",
      quality: "Premium Grade",
      packaging: "25 Kg Drum",
    },
  },

  "neem-extract": {
    name: "Neem Extract",
    image: "/images/products/neem.jpg",
    description:
      "Natural botanical ingredient for cosmetic and personal care products.",
    benefits: [
      "Natural Purifying Properties",
      "Supports Skin Care",
      "Plant-Based Ingredient",
    ],
    applications: [
      "Cosmetics",
      "Personal Care",
      "Herbal Formulations",
      "Skin Care Products",
    ],
    specifications: {
      type: "Neem Extract",
      form: "Powder",
      quality: "Premium Grade",
      packaging: "25 Kg Drum",
    },
  },

  "tulsi-powder": {
    name: "Tulsi Powder",
    image: "/images/products/tulsi.jpg",
    description:
      "Traditional herbal powder suitable for food and nutraceutical applications.",
    benefits: [
      "Traditional Herbal Ingredient",
      "Supports Wellness",
      "Rich Botanical Source",
    ],
    applications: [
      "Food Industry",
      "Nutraceuticals",
      "Tea Blends",
      "Herbal Products",
    ],
    specifications: {
      type: "Tulsi Powder",
      form: "Powder",
      quality: "Premium Grade",
      packaging: "25 Kg Drum",
    },
  },

  "moringa-powder": {
    name: "Moringa Powder",
    image: "/images/products/moringa.jpg",
    description:
      "Nutrient-rich herbal ingredient used in health and wellness products.",
    benefits: [
      "Nutrient Rich",
      "Supports Healthy Lifestyle",
      "Natural Plant Nutrition",
    ],
    applications: [
      "Health Supplements",
      "Food Industry",
      "Nutraceuticals",
      "Wellness Products",
    ],
    specifications: {
      type: "Moringa Powder",
      form: "Powder",
      quality: "Premium Grade",
      packaging: "25 Kg Drum",
    },
  },

  "aloe-vera-extract": {
    name: "Aloe Vera Extract",
    image: "/images/products/aloe-vera.jpg",
    description:
      "Popular ingredient for skincare, cosmetic and healthcare formulations.",
    benefits: [
      "Skin Friendly Ingredient",
      "Natural Botanical Extract",
      "Widely Used in Cosmetics",
    ],
    applications: [
      "Cosmetics",
      "Personal Care",
      "Skin Care",
      "Healthcare Products",
    ],
    specifications: {
      type: "Aloe Vera Extract",
      form: "Powder / Extract",
      quality: "Premium Grade",
      packaging: "25 Kg Drum",
    },
  },
};

export default async function ProductDetailPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = products[slug as keyof typeof products];

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
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
  <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
    Premium Herbal Ingredient
  </span>

  <h1 className="mt-6 text-5xl font-bold text-green-800">
    {product.name}
  </h1>

  <p className="mt-6 text-xl text-black">
    {product.description}
  </p>

  <div className="mt-8 flex flex-wrap gap-3">
    <span className="rounded-full bg-green-100 px-4 py-2 text-green-700">
      ✓ Premium Quality
    </span>

    <span className="rounded-full bg-green-100 px-4 py-2 text-green-700">
      ✓ Export Ready
    </span>

    <span className="rounded-full bg-green-100 px-4 py-2 text-green-700">
      ✓ Bulk Supply
    </span>

    <span className="rounded-full bg-green-100 px-4 py-2 text-green-700">
      ✓ Global Shipping
    </span>
  </div>

  <div className="mt-8 flex flex-wrap gap-4">
    <a
      href="/contact"
      className="rounded-lg bg-green-700 px-8 py-4 text-white hover:bg-green-800"
    >
      Request Quote
    </a>

    <a
      href="/contact"
      className="rounded-lg border border-green-700 px-8 py-4 text-green-700 hover:bg-green-100"
    >
      Contact Sales
    </a>
  </div>
</div>

            <div className="flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                width={700}
                height={500}
                className="rounded-3xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 border-y">
  <div className="mx-auto max-w-7xl px-6">

    <div className="grid gap-6 md:grid-cols-4">

      <div className="rounded-xl bg-green-50 p-5 text-center">
        <h3 className="font-semibold text-green-700">
          ISO Certified
        </h3>
      </div>

      <div className="rounded-xl bg-green-50 p-5 text-center">
        <h3 className="font-semibold text-green-700">
          GMP Certified
        </h3>
      </div>

      <div className="rounded-xl bg-green-50 p-5 text-center">
        <h3 className="font-semibold text-green-700">
          Lab Tested
        </h3>
      </div>

      <div className="rounded-xl bg-green-50 p-5 text-center">
        <h3 className="font-semibold text-green-700">
          Global Export
        </h3>
      </div>

    </div>

  </div>
</section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-4xl font-bold text-green-800">
            Key Benefits
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {product.benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-xl border p-6 text-black font-medium shadow-sm"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-4xl font-bold text-green-800">
            Applications
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            {product.applications.map((application) => (
              <div
                key={application}
                className="rounded-xl bg-white p-6 shadow-sm text-black font-medium"
              >
                {application}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
                    <h2 className="mb-10 text-4xl font-bold text-green-800">
            Specifications
          </h2>

          <div className="overflow-hidden rounded-2xl border text-black">
            <div className="grid grid-cols-2 border-b p-5">
              <span className="font-semibold">Product Type</span>
              <span>{product.specifications.type}</span>
            </div>

            <div className="grid grid-cols-2 border-b p-5">
              <span className="font-semibold">Form</span>
              <span>{product.specifications.form}</span>
            </div>

            <div className="grid grid-cols-2 border-b p-5">
              <span className="font-semibold">Quality</span>
              <span>{product.specifications.quality}</span>
            </div>

            <div className="grid grid-cols-2 p-5">
              <span className="font-semibold">Packaging</span>
              <span>{product.specifications.packaging}</span>
            </div>
          </div>

        </div>
      </section>

      {/* Inquiry Section */}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-bold text-green-800">
            Need More Information?
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            Get detailed product specifications, MOQ,
            pricing information and export details from
            our team.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-green-700 px-8 py-4 text-white hover:bg-green-800"
          >
            Contact Us
          </a>

        </div>
      </section>

      {/* Related Products */}

      <section className="bg-green-50 py-20">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="mb-10 text-4xl font-bold text-green-800">
            Related Products
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            {Object.entries(products)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, item]) => (
                <a
                  key={key}
                  href={`/products/${key}`}
                  className="rounded-xl bg-white p-6 shadow-sm hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-bold text-green-700">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-gray-600">
                    {item.description}
                  </p>
                </a>
              ))}

          </div>

        </div>
      </section>

    </main>
  );
}
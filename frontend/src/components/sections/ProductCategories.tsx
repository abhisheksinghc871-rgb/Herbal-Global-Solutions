import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Ashwagandha Extract",
    image: "/images/products/ashwagandha.jpg",
    slug: "ashwagandha-extract",
    description:
      "Premium quality Ashwagandha extract for nutraceutical and wellness products.",
  },
  {
    name: "Curcumin Extract",
    image: "/images/products/curcumin.jpg",
    slug: "curcumin-extract",
    description:
      "High-purity turmeric extract used in supplements and pharmaceuticals.",
  },
  {
    name: "Neem Extract",
    image: "/images/products/neem.jpg",
    slug: "neem-extract",
    description:
      "Widely used in cosmetic, personal care and herbal formulations.",
  },
  {
    name: "Tulsi Powder",
    image: "/images/products/tulsi.jpg",
    slug: "tulsi-powder",
    description:
      "Natural herbal powder suitable for food and nutraceutical applications.",
  },
  {
    name: "Moringa Powder",
    image: "/images/products/moringa.jpg",
    slug: "moringa-powder",
    description:
      "Nutrient-rich ingredient used in health and wellness products.",
  },
  {
    name: "Aloe Vera Extract",
    image: "/images/products/aloe-vera.jpg",
    slug: "aloe-vera-extract",
    description:
      "Popular ingredient for cosmetic, skincare and healthcare products.",
  },
];

export default function ProductCategories() {
  return (
    <section className="bg-green-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-green-800">
            Featured Products
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Explore our premium herbal ingredients trusted by global industries.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.slug}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <Link href={`/products/${product.slug}`}>
  <Image
    src={product.image}
    alt={product.name}
    width={600}
    height={400}
    className="h-56 w-full cursor-pointer object-cover transition hover:scale-105"
  />
  
</Link>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-green-700">
                  {product.name}
                </h3>

                <p className="mt-3 text-gray-600">
                  {product.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                    Premium Quality
                  </span>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                    Export Ready
                  </span>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                    Global Supply
                  </span>
                </div>

                <Link
                  href={`/products/${product.slug}`}
                  className="mt-6 inline-block rounded-lg bg-green-700 px-5 py-3 text-white hover:bg-green-800"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-block rounded-lg bg-green-700 px-8 py-4 font-medium text-white transition hover:bg-green-800"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
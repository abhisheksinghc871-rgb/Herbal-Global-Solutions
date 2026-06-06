import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-green-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Side */}

          <div>

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              Trusted Herbal Ingredients Supplier
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-green-800 lg:text-7xl">
              Herbal Global Solutions
            </h1>

            <p className="mt-6 text-xl text-gray-700">
              Premium Herbal Ingredients Supplier for Pharma,
              Nutraceutical, Cosmetic and Food Industries Worldwide.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-lg bg-green-700 px-8 py-4 text-white hover:bg-green-800">
                Request a Quote
              </button>

              <button className="rounded-lg border border-green-700 px-8 py-4 text-green-700 hover:bg-green-100">
                Explore Products
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">

              <div>
                <h3 className="text-4xl font-bold text-green-700">
                  50+
                </h3>
                <p className="text-gray-600">Products</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-green-700">
                  25+
                </h3>
                <p className="text-gray-600">Countries</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-green-700">
                  500+
                </h3>
                <p className="text-gray-600">Clients</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-green-700">
                  3+
                </h3>
                <p className="text-gray-600">Years</p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <Image
              src="/images/hero-herbal.png"
              alt="Herbal Ingredients"
              width={700}
              height={700}
              className="rounded-3xl shadow-2xl"
              priority
            />

          </div>

        </div>

      </div>
    </section>
  );
}
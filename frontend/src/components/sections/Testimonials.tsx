export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-green-800">
            What Our Clients Say
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Trusted by businesses across multiple industries.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-xl border p-8 shadow-sm">
            <p className="mb-6 text-gray-600">
              "Consistent quality and timely delivery. Their herbal extracts
              have helped us maintain high production standards."
            </p>

            <h3 className="font-semibold text-green-700">
              Pharma Manufacturing Client
            </h3>
          </div>

          <div className="rounded-xl border p-8 shadow-sm">
            <p className="mb-6 text-gray-600">
              "Reliable sourcing partner with excellent communication and
              product quality."
            </p>

            <h3 className="font-semibold text-green-700">
              Nutraceutical Brand
            </h3>
          </div>

          <div className="rounded-xl border p-8 shadow-sm">
            <p className="mb-6 text-gray-600">
              "Their ingredients consistently meet our quality expectations
              for cosmetic formulations."
            </p>

            <h3 className="font-semibold text-green-700">
              Cosmetic Manufacturer
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}
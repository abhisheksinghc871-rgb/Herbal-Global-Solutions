export default function Certifications() {
  return (
    <section className="bg-green-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-green-800">
            Certifications & Quality Assurance
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Ensuring international quality standards and reliable sourcing.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-xl bg-white p-8 text-center shadow-sm transition hover:shadow-lg">
            <div className="mb-4 text-5xl">🏆</div>
            <h3 className="text-xl font-semibold text-green-700">
              ISO Certified
            </h3>
            <p className="mt-3 text-gray-600">
              Quality management systems aligned with international standards.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 text-center shadow-sm transition hover:shadow-lg">
            <div className="mb-4 text-5xl">✅</div>
            <h3 className="text-xl font-semibold text-green-700">
              GMP Certified
            </h3>
            <p className="mt-3 text-gray-600">
              Manufactured following Good Manufacturing Practices.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 text-center shadow-sm transition hover:shadow-lg">
            <div className="mb-4 text-5xl">🌿</div>
            <h3 className="text-xl font-semibold text-green-700">
              Organic Standards
            </h3>
            <p className="mt-3 text-gray-600">
              Supporting natural and organic ingredient sourcing.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 text-center shadow-sm transition hover:shadow-lg">
            <div className="mb-4 text-5xl">🔬</div>
            <h3 className="text-xl font-semibold text-green-700">
              Lab Tested
            </h3>
            <p className="mt-3 text-gray-600">
              Every batch verified for quality, purity and consistency.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
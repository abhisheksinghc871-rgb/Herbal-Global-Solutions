const certifications = [
  {
    icon: "🏆",
    title: "ISO Certified",
    description:
      "Quality management systems aligned with international standards.",
  },
  {
    icon: "✅",
    title: "GMP Certified",
    description:
      "Manufactured following Good Manufacturing Practices.",
  },
  {
    icon: "🌿",
    title: "Organic Standards",
    description:
      "Supporting natural and organic ingredient sourcing.",
  },
  {
    icon: "🔬",
    title: "Lab Tested",
    description:
      "Every batch verified for quality, purity and consistency.",
  },
];

export default function Certifications() {
  return (
    <section className="bg-green-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-green-800">
            Certifications & Quality Assurance
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            International quality standards backed by strict testing and
            reliable manufacturing processes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {certifications.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 text-6xl">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-green-700">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-16 rounded-3xl bg-white p-10 text-center shadow-sm">

          <h3 className="text-3xl font-bold text-green-800">
            Commitment to Excellence
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-gray-600 leading-7">
            Every product undergoes rigorous quality checks and laboratory
            verification to ensure consistency, purity and compliance with
            international industry requirements.
          </p>

        </div>

      </div>
    </section>
  );
}
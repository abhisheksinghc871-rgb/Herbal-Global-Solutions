const industries = [
  {
    icon: "🏥",
    title: "Pharmaceutical Industry",
    description:
      "High-quality herbal extracts and active ingredients for pharmaceutical formulations.",
  },
  {
    icon: "💊",
    title: "Nutraceutical Industry",
    description:
      "Premium ingredients for dietary supplements and wellness products.",
  },
  {
    icon: "💄",
    title: "Cosmetic Industry",
    description:
      "Natural botanical extracts for skincare, beauty and personal care solutions.",
  },
  {
    icon: "🍵",
    title: "Food & Beverage",
    description:
      "Herbal powders and natural ingredients for food and beverage applications.",
  },
  {
    icon: "🐄",
    title: "Animal Nutrition",
    description:
      "Specialized herbal ingredients used in feed and animal nutrition products.",
  },
  {
    icon: "🧪",
    title: "Research & Development",
    description:
      "Reliable ingredients supplied for research, innovation and product development.",
  },
];

export default function IndustriesServed() {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-green-800">
            Industries We Serve
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Supplying premium herbal ingredients to industries across global markets.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {industries.map((industry) => (
            <div
              key={industry.title}
              className="rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 text-5xl">
                {industry.icon}
              </div>

              <h3 className="mb-3 text-2xl font-semibold text-green-700">
                {industry.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {industry.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
const testimonials = [
  {
    review:
      "Consistent quality and timely delivery. Their herbal extracts have helped us maintain high production standards.",
    company: "Pharma Manufacturing Client",
  },
  {
    review:
      "Reliable sourcing partner with excellent communication and product quality.",
    company: "Nutraceutical Brand",
  },
  {
    review:
      "Their ingredients consistently meet our quality expectations for cosmetic formulations.",
    company: "Cosmetic Manufacturer",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-green-800">
            What Our Clients Say
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Trusted by businesses across multiple industries worldwide.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.company}
              className="rounded-2xl border bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 text-4xl text-green-700">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="mb-6 text-gray-600 leading-7">
                "{testimonial.review}"
              </p>

              <h3 className="font-semibold text-green-700">
                {testimonial.company}
              </h3>
            </div>
          ))}

        </div>

        <div className="mt-16 rounded-3xl bg-green-700 px-8 py-12 text-center text-white">

          <h3 className="text-3xl font-bold">
            Trusted by Businesses Worldwide
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-green-100">
            We are committed to delivering premium herbal ingredients with
            consistent quality, reliable supply chains and long-term business
            partnerships.
          </p>

        </div>

      </div>
    </section>
  );
}
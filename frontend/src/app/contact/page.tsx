export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}

      <section className="bg-green-50 py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-6xl font-bold text-green-800">
            Contact Us
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-700">
            Get in touch with our team for product inquiries,
            quotations and business partnerships.
          </p>
        </div>
      </section>

      {/* Contact Section */}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">

            {/* Left Side */}

            <div>
              <h2 className="mb-6 text-4xl font-bold text-green-800">
                Let's Talk
              </h2>

              <p className="mb-8 text-lg text-gray-600">
                We are ready to help you source premium herbal ingredients
                for your business.
              </p>

              <div className="space-y-5 text-lg text-gray-800">

                <p className="flex items-center gap-3">
                  <span>📧</span>
                  <span>info@herbalglobalsolutions.com</span>
                </p>

                <p className="flex items-center gap-3">
                  <span>📞</span>
                  <span>+91 98765 43210</span>
                </p>

                <p className="flex items-center gap-3">
                  <span>📍</span>
                  <span>India</span>
                </p>

              </div>
            </div>

            {/* Right Side Form */}

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-gray-300 bg-white p-4 text-black placeholder:text-gray-500 focus:border-green-600 focus:outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border border-gray-300 bg-white p-4 text-black placeholder:text-gray-500 focus:border-green-600 focus:outline-none"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full rounded-lg border border-gray-300 bg-white p-4 text-black placeholder:text-gray-500 focus:border-green-600 focus:outline-none"
              />

              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full rounded-lg border border-gray-300 bg-white p-4 text-black placeholder:text-gray-500 focus:border-green-600 focus:outline-none"
              />

              <button
                type="submit"
                className="rounded-lg bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800"
              >
                Send Inquiry
              </button>

            </form>

          </div>
        </div>
      </section>
    </main>
  );
}
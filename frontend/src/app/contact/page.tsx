export default function ContactPage() {
  return (
    <main>
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

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">

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

            <form className="space-y-6 rounded-2xl border p-8 shadow-sm">

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Full Name *
                </label>

                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-gray-300 bg-white p-4 text-black focus:border-green-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Email Address *
                </label>

                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-300 bg-white p-4 text-black focus:border-green-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Company Name *
                </label>

                <input
                  type="text"
                  required
                  placeholder="Enter company name"
                  className="w-full rounded-lg border border-gray-300 bg-white p-4 text-black focus:border-green-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Phone Number *
                </label>

                <input
                  type="tel"
                  required
                  placeholder="Enter phone number"
                  className="w-full rounded-lg border border-gray-300 bg-white p-4 text-black focus:border-green-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Country *
                </label>

                <select
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white p-4 text-black focus:border-green-600 focus:outline-none"
                >
                  <option value="">Select Country</option>
                  <option>India</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                  <option>France</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>UAE</option>
                  <option>Japan</option>
                  <option>Singapore</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Message *
                </label>

                <textarea
                  required
                  rows={6}
                  placeholder="Tell us about your requirements"
                  className="w-full rounded-lg border border-gray-300 bg-white p-4 text-black focus:border-green-600 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800"
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
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-green-800 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-5xl font-bold leading-tight">
          Ready To Source Premium Herbal Ingredients?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-xl text-green-100">
          Partner with Herbal Global Solutions for reliable sourcing,
          quality assurance and global supply support.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            href="/contact"
            className="rounded-xl bg-white px-8 py-4 text-lg font-semibold text-green-800 transition hover:bg-green-100"
          >
            Request A Quote
          </Link>

          <Link
            href="/products"
            className="rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-green-800"
          >
            View Products
          </Link>

        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-green-100">

          <span>✓ Premium Quality</span>

          <span>✓ Global Supply</span>

          <span>✓ Export Ready</span>

          <span>✓ Trusted Partner</span>

        </div>

      </div>
    </section>
  );
}
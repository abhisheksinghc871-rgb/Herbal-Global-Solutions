import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-green-50 px-6">
      <div className="text-center">

        <h1 className="text-8xl font-bold text-green-700">
          404
        </h1>

        <h2 className="mt-4 text-4xl font-bold text-green-800">
          Page Not Found
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600">
          The page you are looking for does not exist or may have been moved.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/"
            className="rounded-lg bg-green-700 px-8 py-4 text-white transition hover:bg-green-800"
          >
            Go Home
          </Link>

          <Link
            href="/products"
            className="rounded-lg border border-green-700 px-8 py-4 text-green-700 transition hover:bg-green-100"
          >
            View Products
          </Link>

        </div>

      </div>
    </main>
  );
}
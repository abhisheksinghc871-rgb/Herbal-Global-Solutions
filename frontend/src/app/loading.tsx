export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-green-50">
      <div className="text-center">

        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-green-200 border-t-green-700"></div>

        <h2 className="mt-6 text-2xl font-semibold text-green-800">
          Loading...
        </h2>

        <p className="mt-2 text-gray-600">
          Please wait while we prepare your experience.
        </p>

      </div>
    </main>
  );
}
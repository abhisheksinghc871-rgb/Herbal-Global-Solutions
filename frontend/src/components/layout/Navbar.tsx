import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          href="/"
          className="text-2xl font-bold text-green-700"
        >
          Herbal Global Solutions
        </Link>

        <ul className="flex gap-8 font-medium text-gray-700">

          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/about">About</Link>
          </li>

          <li>
            <Link href="/products">Products</Link>
          </li>

          <li>
            <Link href="/industries">Industries</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>

        </ul>

      </div>
    </nav>
  );
}
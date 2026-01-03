import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold tracking-tight text-gray-900">
          JmpWireless
        </div>

        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <a href="#services" className="hover:text-blue-600 transition">Services</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-block bg-blue-600 !text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";

const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  return (
    <header
      className="
      fixed
      left-1/2
      top-6
      z-50
      w-[90%]
      max-w-4xl
      -translate-x-1/2
      rounded-full
      border
      border-white/10
      bg-black/30
      px-8
      py-4
      backdrop-blur-xl
      "
    >
      <nav className="flex items-center justify-between">

        <h1 className="text-xl font-bold text-white">
          Krushna
        </h1>

        <div className="flex gap-8">

          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="
              text-sm
              text-gray-300
              transition
              hover:text-white
              "
            >
              {link.name}
            </Link>
          ))}

        </div>

      </nav>
    </header>
  );
}
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
      top-4
      z-50
      w-[95%]
      max-w-4xl
      -translate-x-1/2
      rounded-full
      border
      border-white/10
      bg-black/30
      px-4
      py-3
      backdrop-blur-xl
      sm:px-6
      md:px-8
      md:py-4
      "
    >
      <nav className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-white sm:text-xl">
          Krushnat
        </h1>

        <div className="flex items-center gap-3 sm:gap-5 md:gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="
              text-xs
              text-gray-300
              transition
              hover:text-white
              sm:text-sm
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
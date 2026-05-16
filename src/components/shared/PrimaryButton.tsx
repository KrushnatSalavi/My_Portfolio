"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  text: string;
  href: string;
}

export default function PrimaryButton({
  text,
  href,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className="
      inline-flex
      items-center
      gap-2
      rounded-2xl
      bg-indigo-500
      px-6
      py-3
      text-sm
      font-medium
      text-white
      transition-all
      duration-300
      hover:scale-105
      hover:bg-indigo-400
      hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]
      "
    >
      {text}
      <ArrowRight size={18} />
    </Link>
  );
}
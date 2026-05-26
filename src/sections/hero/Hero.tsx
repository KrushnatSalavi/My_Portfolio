// src/sections/hero/Hero.tsx

"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-indigo-400">
            FULL STACK DEVELOPER
          </p>

          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl mt-15">
            Krushnat
            <span className="block text-indigo-400">
              Salavi
            </span>
          </h1>

          <div className="mt-6 text-xl text-gray-300 md:text-2xl">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "Frontend Specialist",
                2000,
                "React & Next.js Developer",
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400">
            I build scalable full-stack applications with
            modern UI, performance optimization, and
            production-level architecture.
          </p>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400">
            I build scalable full-stack applications with
            modern UI, performance optimization, and
            production-level architecture.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-2xl bg-indigo-500 px-7 py-4 font-medium text-white transition hover:scale-105 hover:bg-indigo-400"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/resume.pdf"
              className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-white backdrop-blur-xl transition hover:border-indigo-500"
            >
              Download Resume
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <Link href="https://github.com/KrushnatSalavi">
              <FaGithub className="text-gray-400 transition hover:text-white" />
            </Link>

            <Link href="https://www.linkedin.com/in/krushna-salavi

">
              <FaLinkedin className="text-2xl text-gray-400 transition hover:text-white" /> 
            </Link>
          </div>
        </motion.div>

        <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="relative"
>
  <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-3xl" />

  <div className="relative mx-auto flex h-[400px] w-[400px] items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl">
    
    <Image
      src="/images/krushna1.png"
      alt="Krushna Salavi"
      width={300}
      height={300}
      className="
        rounded-full
        object-cover
        border-4
        border-white/10
        shadow-2xl
      "
    />

  </div>
</motion.div>

      </div>
    </section>
  );
}
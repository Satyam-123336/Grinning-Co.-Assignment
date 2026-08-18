"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Deep space nebula"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-amber-500 uppercase tracking-[0.3em] text-sm md:text-base font-spaceGrotesk mb-6"
        >
          A New Era of Exploration
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-cormorant text-6xl md:text-8xl lg:text-9xl text-white font-light tracking-tight mb-8"
        >
          N.A.S.A. <span className="text-amber-500/80 italic">Noir</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-slate-300 text-lg md:text-2xl font-spaceGrotesk font-light max-w-2xl mb-12"
        >
          Bottled from the edge of the universe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="#collection"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent border border-amber-500/50 text-amber-500 uppercase tracking-widest font-spaceGrotesk text-sm hover:bg-amber-500 hover:text-black transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">Discover The Collection</span>
            <div className="absolute inset-0 h-full w-0 bg-amber-500 transition-all duration-500 ease-out group-hover:w-full z-0" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-500 uppercase tracking-widest text-xs font-spaceGrotesk">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500/50 to-transparent" />
      </motion.div>
    </section>
  );
}

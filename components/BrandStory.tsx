"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BrandStory() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 md:py-40 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

          <motion.div style={{ y: y1 }} className="flex flex-col z-10">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-8 h-[1px] bg-amber-500" />
              <span className="font-spaceGrotesk text-amber-500 text-xs uppercase tracking-[0.3em]">
                Our Story
              </span>
            </div>

            <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light tracking-tight leading-[1.05] mb-8 md:mb-10">
              We mapped galaxies.{" "}
              <br />
              <span className="italic text-amber-400">
                Now we bottle them.
              </span>
            </h2>

            <div className="space-y-4 text-slate-400 font-spaceGrotesk font-light text-sm md:text-base lg:text-lg max-w-md leading-relaxed md:leading-loose">
              <p>
                For over six decades, we looked outward. We touched the moon,
                tasted the dust of Mars, and captured the light of dying stars.
              </p>
              <p>
                But true discovery is not just what you can see. It is what you
                can feel. What you can breathe in.
              </p>
              <p>
                N.A.S.A. Noir is our most daring mission yet: distilling the
                vast, silent majesty of the cosmos into luxury fragrances that
                defy gravity and expectation.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-6 mt-10 pt-8 border-t border-white/10">
              {[
                { value: "60+", label: "Years of Discovery" },
                { value: "3", label: "Stellar Fragrances" },
                { value: "∞", label: "Light-Years of Scent" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col min-w-[80px]">
                  <span className="font-cormorant text-3xl text-amber-400">
                    {stat.value}
                  </span>
                  <span className="font-spaceGrotesk text-slate-500 text-[10px] uppercase tracking-widest mt-1 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            style={{ y: y2 }}
            className="hidden md:flex relative items-center justify-center h-[480px] lg:h-[560px]"
          >
            <motion.div
              style={{ rotate }}
              className="absolute w-[360px] h-[360px] lg:w-[440px] lg:h-[440px] rounded-full border border-dashed border-amber-500/20"
            />

            <motion.div
              style={{ rotate: useTransform(rotate, (v) => -v * 0.6) }}
              className="absolute w-[260px] h-[260px] lg:w-[320px] lg:h-[320px] rounded-full border border-dotted border-slate-600/40"
            />

            <div className="relative w-[170px] h-[170px] lg:w-[200px] lg:h-[200px] rounded-full bg-gradient-to-br from-purple-900/80 via-black/80 to-amber-900/40 border border-amber-500/30 shadow-[0_0_80px_20px_rgba(120,60,200,0.2),inset_0_0_40px_rgba(180,130,40,0.1)] flex flex-col items-center justify-center text-center px-4">
              <span className="font-spaceGrotesk text-amber-500/60 text-[10px] uppercase tracking-[0.25em] mb-2">
                Est.
              </span>
              <span className="font-cormorant text-5xl text-white font-light">
                1958
              </span>
              <div className="w-8 h-[1px] bg-amber-500/40 my-3" />
              <span className="font-spaceGrotesk text-slate-400 text-[10px] uppercase tracking-widest leading-4">
                Beyond the<br />Atmosphere
              </span>
            </div>

            {[0, 90, 180, 270].map((deg, i) => (
              <motion.div
                key={i}
                style={{ rotate }}
                className="absolute w-[360px] h-[360px] lg:w-[440px] lg:h-[440px] flex items-start justify-center"
                initial={{ rotate: deg }}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    i % 2 === 0 ? "bg-amber-500" : "bg-purple-400"
                  } shadow-[0_0_8px_3px_rgba(250,180,50,0.4)]`}
                  style={{ marginTop: "-4px" }}
                />
              </motion.div>
            ))}

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 right-0 bg-black/60 border border-amber-500/30 backdrop-blur-sm px-3 py-2 rounded-sm text-left"
            >
              <p className="font-spaceGrotesk text-amber-500 text-[10px] uppercase tracking-widest">
                Mission
              </p>
              <p className="font-cormorant text-white text-lg">
                Andromeda
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-0 bg-black/60 border border-slate-600/40 backdrop-blur-sm px-3 py-2 rounded-sm text-left"
            >
              <p className="font-spaceGrotesk text-slate-500 text-[10px] uppercase tracking-widest">
                Altitude
              </p>
              <p className="font-cormorant text-white text-lg">
                408 km
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

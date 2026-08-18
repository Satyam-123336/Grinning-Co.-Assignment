"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BrandStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-32 md:py-48 bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            style={{ y: y1 }}
            className="flex flex-col z-10"
          >
            <h2 className="font-cormorant text-5xl md:text-7xl text-white font-light tracking-tight mb-8">
              We mapped galaxies. <br />
              <span className="text-amber-500 italic">Now we bottle them.</span>
            </h2>
            
            <div className="space-y-6 text-slate-400 font-spaceGrotesk font-light text-lg max-w-lg leading-relaxed">
              <p>
                For over six decades, we looked outward. We touched the moon, tasted the dust of Mars, and captured the light of dying stars.
              </p>
              <p>
                But true discovery isn't just about what you can see. It's about what you can feel. What you can breathe.
              </p>
              <p>
                N.A.S.A. Noir is our most daring mission yet: distilling the vast, silent majesty of the cosmos into luxury fragrances that defy gravity.
              </p>
            </div>
          </motion.div>
          
          {/* Visual Element */}
          <motion.div 
            style={{ y: y2 }}
            className="relative h-[500px] w-full flex items-center justify-center opacity-80"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-purple-900/10 to-transparent rounded-full blur-3xl" />
            <div className="w-[300px] h-[400px] border border-amber-500/20 relative">
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-amber-500" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-amber-500" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-amber-500" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-amber-500" />
              
              <div className="absolute inset-4 border border-slate-800/50 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <p className="font-spaceGrotesk text-amber-500/50 text-sm uppercase tracking-[0.2em] mb-4">Coordinates</p>
                    <p className="font-cormorant text-2xl text-slate-500 italic">00° 00′ 00″ N<br/>00° 00′ 00″ E</p>
                  </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

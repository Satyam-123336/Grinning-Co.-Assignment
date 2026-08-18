"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "I smelled like a quasar all evening. Absolutely magnetic. 10/10.",
    author: "N. Armstrong",
    title: "Test Pilot / Lunar Explorer"
  },
  {
    quote: "Finally, a fragrance that captures the profound emptiness of the void, but makes it sexy.",
    author: "S. Ride",
    title: "Astrophysicist"
  },
  {
    quote: "Better than tang. Better than freeze-dried ice cream. The only thing I pack for orbit now.",
    author: "B. Aldrin",
    title: "Lunar Module Pilot"
  }
];

export default function Testimonials() {
  return (
    <section className="w-full py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl text-white mb-4">
            Transmission <span className="italic text-amber-500">Received</span>
          </h2>
          <div className="w-12 h-[1px] bg-amber-500/50 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex text-amber-500 mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-cormorant text-xl text-slate-300 italic mb-8 leading-relaxed">
                "{t.quote}"
              </p>
              <div>
                <p className="font-spaceGrotesk text-white text-sm uppercase tracking-widest mb-1">
                  {t.author}
                </p>
                <p className="font-spaceGrotesk text-slate-500 text-xs uppercase">
                  {t.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

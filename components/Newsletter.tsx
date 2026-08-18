"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="w-full py-20 md:py-32 bg-black relative overflow-hidden border-t border-white/5">
      <div className="absolute top-10 left-[10%] w-1 h-1 bg-white rounded-full opacity-20" />
      <div className="absolute bottom-20 right-[20%] w-2 h-2 bg-amber-500 rounded-full opacity-20 blur-[1px]" />
      <div className="absolute top-1/2 right-[5%] w-1 h-1 bg-white rounded-full opacity-10" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-cormorant text-4xl md:text-5xl text-white mb-6">
            Join the <span className="italic text-amber-500">Mission</span>
          </h2>
          <p className="font-spaceGrotesk text-slate-400 font-light mb-12 max-w-lg mx-auto">
            Subscribe to our transmissions for early access to new extractions, limited editions, and exclusive launches.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              suppressHydrationWarning
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="flex-1 bg-transparent border-b border-slate-700 pb-2 px-2 text-white font-spaceGrotesk text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-700 placeholder:tracking-widest"
              required
            />
            <button
              suppressHydrationWarning
              type="submit"
              className="text-amber-500 font-spaceGrotesk text-sm uppercase tracking-widest hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-amber-500 hover:after:w-full after:transition-all sm:self-end pb-2"
            >
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-slate-600 font-spaceGrotesk uppercase tracking-widest mt-6">
            By subscribing, you agree to our interstellar privacy policy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

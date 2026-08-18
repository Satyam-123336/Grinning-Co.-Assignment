"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    id: "andromeda",
    name: "Andromeda",
    subtitle: "Pour Homme",
    desc: "The scent of interstellar silence. Notes of dark amber, cold titanium, and midnight vetiver.",
    price: "$295",
    image: "/images/andromeda.png",
  },
  {
    id: "apollo",
    name: "Apollo XI",
    subtitle: "Limited Edition",
    desc: "One small spritz for man. Earthy moon dust, smoked leather, and victory.",
    price: "$450",
    image: "/images/apollo.png",
  },
  {
    id: "nebula",
    name: "Nebula",
    subtitle: "Pour Femme",
    desc: "Stardust on your skin. Luminous iris, solar jasmine, and warm dark matter.",
    price: "$320",
    image: "/images/nebula.png",
  },
];

export default function ProductCollection() {
  return (
    <section id="collection" className="w-full py-20 md:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-cormorant text-4xl md:text-6xl text-white mb-4"
          >
            The <span className="italic text-amber-500">Stellar</span> Collection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-spaceGrotesk text-slate-400 max-w-xl mx-auto text-sm md:text-base"
          >
            Three distinct atmospheres. One extraordinary origin.
          </motion.p>
        </div>

        <div className="flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-8 lg:gap-12">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group relative"
            >
              <div className="flex flex-row md:flex-col gap-5 md:gap-0 items-center md:items-center md:text-center">
                <div className="relative w-[120px] h-[160px] sm:w-[140px] sm:h-[190px] md:w-full md:h-auto md:aspect-[2/3] flex-shrink-0 md:mb-8 overflow-hidden bg-black/50 border border-slate-800/50 group-hover:border-amber-500/30 transition-colors duration-500">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>

                <div className="flex flex-col flex-1 md:items-center md:text-center">
                  <h3 className="font-cormorant text-2xl md:text-3xl text-white mb-1 group-hover:text-amber-500 transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-spaceGrotesk text-xs uppercase tracking-widest text-slate-500 mb-3">
                    {product.subtitle}
                  </p>
                  <p className="font-spaceGrotesk font-light text-slate-400 text-sm mb-5 md:max-w-xs">
                    {product.desc}
                  </p>

                  <div className="flex items-center justify-between w-full md:justify-center md:gap-8 md:max-w-[200px]">
                    <span className="font-spaceGrotesk text-white">{product.price}</span>
                    <button
                      suppressHydrationWarning
                      className="text-amber-500 font-spaceGrotesk text-sm uppercase tracking-widest hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-amber-500 hover:after:w-full after:transition-all"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

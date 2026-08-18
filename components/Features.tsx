"use client";

import { motion } from "framer-motion";
import { Sparkles, Droplets, Orbit, Moon } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="w-6 h-6 text-amber-500" />,
    title: "100% Stardust",
    desc: "Infused with actual meteorite particulates for an otherworldly shimmer."
  },
  {
    icon: <Droplets className="w-6 h-6 text-amber-500" />,
    title: "Distilled in Zero-G",
    desc: "Aged aboard the ISS for three orbital cycles to ensure perfect molecule alignment."
  },
  {
    icon: <Orbit className="w-6 h-6 text-amber-500" />,
    title: "Infinite Longevity",
    desc: "Engineered to last through re-entry, extreme G-forces, and long dinners."
  },
  {
    icon: <Moon className="w-6 h-6 text-amber-500" />,
    title: "Cruelty-Free Cosmos",
    desc: "Tested only on willing astronauts. No extraterrestrial life was harmed."
  }
];

export default function Features() {
  return (
    <section className="w-full py-24 border-y border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="p-4 rounded-full bg-white/5 border border-white/10">
                {feature.icon}
              </div>
              <h4 className="font-cormorant text-2xl text-white">
                {feature.title}
              </h4>
              <p className="font-spaceGrotesk text-slate-400 font-light text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

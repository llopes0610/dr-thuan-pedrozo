"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutCompact() {
  return (
    <section className="py-24 bg-grafite text-center">
      <motion.div
        className="container max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border border-gold/30 shadow-soft mb-4">
            <Image
              src="/images/dr-thauan.jpg"
              alt="Foto do Dr. Thauan Pedrozo"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-lg text-text/80 leading-relaxed">
            Atuação reconhecida na advocacia, com compromisso absoluto
            com a liberdade e a justiça.
          </p>

          <Link
            href="/sobre"
            className="mt-6 inline-block font-medium text-gold hover:text-gold/80 transition-colors"
          >
            Conheça o Dr. Thauan →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

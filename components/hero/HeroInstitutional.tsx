"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function HeroInstitutional() {
  return (
    <section className="relative overflow-hidden py-section">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.9]"
        aria-hidden
        style={{
          background:
            "radial-gradient(60% 60% at 80% -10%, rgba(212,175,55,0.10), transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.03), transparent)",
        }}
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm tracking-wide text-gold/90 mb-3"
          >
            Dr. Thuan Pedrozo — Advocacia Criminal • OAB/SP 396.342
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.65 }}
            className="font-serif text-h1 leading-tight"
          >
            Advocacia Criminal de Alto Padrão no{" "}
            <span className="text-gold">Litoral de SP</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.65 }}
            className="mt-4 text-lg text-text-muted max-w-2xl"
          >
            Protegendo sua liberdade, reputação e direitos com excelência
            jurídica e atuação estratégica.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="/contato">
              <Button variant="gold" className="min-w-[180px]">
                Falar Agora
              </Button>
            </a>

            <a href="/areas/penal">
              <Button variant="outline-gold" className="min-w-[200px]">
                Conheça a Atuação
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            className="mt-10 h-px bg-gold/40 origin-left"
          />

          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delay: 0.9, staggerChildren: 0.18 },
              },
            }}
            className="mt-6 grid sm:grid-cols-3 gap-3 text-sm text-text-muted"
          >
            {[
              "Defesa Criminal Estratégica",
              "Atendimento Imediato",
              "Sigilo e Confidencialidade",
            ].map((item) => (
              <motion.li
                key={item}
                variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
                className="bg-grafite-light border border-gold/10 p-4 rounded-card shadow-soft"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}

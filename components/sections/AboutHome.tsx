"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function AboutHome() {
    return (
        <section className="bg-[#1A1A1A] py-section">
            <div className="container flex flex-col md:flex-row items-center gap-10">

                {/* Texto */}
                <motion.div
                    initial={{ opacity: 0, x: -26 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex-1"
                >
                    <h2 className="font-serif text-h2 text-gold mb-4">
                        Sobre o Dr. Thauan Pedrozo
                    </h2>

                    <p className="text-text-muted leading-relaxed mb-6 max-w-xl">
                        Advogado criminalista com atuação dedicada no Litoral de São Paulo, o
                        Dr. Thauan Pedrozo trabalha com uma abordagem humana, estratégica e
                        pautada na ética. Seu compromisso é oferecer defesa técnica de alto
                        padrão, acolhendo cada cliente com respeito e absoluta
                        confidencialidade.
                    </p>

                    <ul className="space-y-2 text-text-muted/90 text-sm mb-8">
                        <li>• Bacharel em Direito pela Universidade Santa Cecília (2017)</li>
                        <li>• Pós-graduação em Direito do Trabalho e Direito Processual Penal</li>
                        <li>• Atuação destacada em flagrantes, habeas corpus e defesa criminal</li>
                        <li>• Atende em toda a Baixada Santista e região</li>
                    </ul>

                    <Link href="/sobre">
                        <Button variant="outline-gold" className="min-w-[220px]">
                            Conheça minha trajetória
                        </Button>
                    </Link>
                </motion.div>

                {/* Foto + Assinatura */}
                <motion.div
                    initial={{ opacity: 0, x: 26 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="flex-1 flex flex-col items-center md:items-end"
                >
                    {/* FOTO — substitua o src pelo definitivo */}
                    <div className="relative w-[330px] h-[420px] rounded-card overflow-hidden border border-gold/15 shadow-soft">
                        <Image
                            src="/images/dr-thauan.jpg"
                            alt="Foto do Dr. Thauan Pedrozo"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* ASSINATURA — será substituída pelo PNG/SVG final */}
                    <div className="text-sm text-text-muted/70 mt-1">
                        
                    </div>

                </motion.div>
            </div>
        </section>
    );
}

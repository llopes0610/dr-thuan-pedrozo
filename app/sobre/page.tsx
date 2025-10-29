"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function SobrePage() {
    return (
        <main className="bg-[#151516] text-text">
            {/* HERO — Editorial Premium */}
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
                        initial={{ opacity: 0, y: 26 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="max-w-3xl"
                    >
                        <div className="text-sm tracking-wide text-gold/90 mb-2">
                            Página Institucional • Sobre
                        </div>
                        <h1 className="font-serif text-h1 leading-tight">
                            Justiça, estratégia e humanidade —{" "}
                            <span className="text-gold">minha missão na advocacia criminal</span>
                        </h1>
                        <p className="mt-4 text-lg text-text-muted max-w-2xl">
                            Atuação técnica e ética para proteger a liberdade, a reputação e os direitos
                            fundamentais de cada cliente, com absoluta confidencialidade e responsabilidade.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* BLOCO 1 — Quem é (LAY-RIGHT) */}
            <section className="bg-[#1A1A1A] py-section">
                <div className="container grid md:grid-cols-2 gap-10 items-center">
                    {/* Texto */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2 className="font-serif text-h2 text-gold mb-4">Quem é o Dr. Thuan Pedrozo</h2>
                        <p className="text-text-muted leading-relaxed mb-4">
                            Advogado criminalista com atuação dedicada no Litoral de São Paulo. Minha
                            abordagem une rigor técnico, estratégia e acolhimento, respeitando a singularidade
                            de cada caso. Trabalho para que o cliente seja ouvido, compreenda as etapas do
                            processo e tenha sua defesa conduzida com excelência e transparência.
                        </p>
                        <ul className="space-y-2 text-text-muted/90 text-sm mb-6">
                            <li>• Bacharel em Direito — Universidade Santa Cecília (2017)</li>
                            <li>• Pós-graduação em Direito do Trabalho</li>
                            <li>• Pós-graduação em Direito Processual Penal</li>
                            <li>• OAB/SP 396.342</li>
                        </ul>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/contato">
                                <Button variant="gold" className="min-w-[170px]">Falar Agora</Button>
                            </Link>
                            <Link href="/areas/penal">
                                <Button variant="outline-gold" className="min-w-[190px]">Atuação Criminal</Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Foto + Assinatura */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col items-center md:items-end"
                    >
                        <div className="col-span-12 md:col-span-5 flex justify-center md:justify-end">
                            <Image
                                src="/images/dr-thauan-about.jpg"
                                alt="Dr. Thuan Pedrozo"
                                width={500}
                                height={650}
                                className="rounded-xl border border-gold/20 shadow-card object-cover"
                                priority
                            />
                        </div>


                    </motion.div>
                </div>
            </section>

            {/* BLOCO 2 — Em que acredita (Valores) */}
            <section className="bg-[#151516] py-section">
                <div className="container">
                    <h3 className="font-serif text-h3 text-gold mb-6">Em que acredito</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Dignidade e Respeito",
                                desc: "Cada pessoa é única e merece defesa técnica com acolhimento, sem juízo prévio ou preconceitos.",
                            },
                            {
                                title: "Técnica e Transparência",
                                desc: "Estratégia baseada na lei, na prova e no processo. Clareza sobre riscos, prazos e caminhos.",
                            },
                            {
                                title: "Confidencialidade",
                                desc: "Sigilo absoluto e responsabilidade no trato das informações e decisões do cliente.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="bg-[#1A1A1A] border border-gold/10 rounded-card p-6 shadow-soft"
                            >
                                <h4 className="font-serif text-h4 text-gold mb-2">{item.title}</h4>
                                <p className="text-text-muted">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BLOCO 3 — Como atua (Abordagem) */}
            <section className="bg-[#1A1A1A] py-section">
                <div className="container grid md:grid-cols-2 gap-10 items-start">
                    <div>
                        <h3 className="font-serif text-h3 text-gold mb-4">Como atuo</h3>
                        <p className="text-text-muted leading-relaxed mb-4">
                            Atuação direta e estratégica desde o primeiro contato: análise do caso, estudo da
                            prova, definição de teses e acompanhamento próximo das fases do procedimento
                            penal. Quando necessário, medidas urgentes são trabalhadas com agilidade
                            (ex.: flagrantes e habeas corpus).
                        </p>
                        <ul className="space-y-2 text-text-muted/90 text-sm">
                            <li>• Defesa técnica em inquérito, ação penal e execuções</li>
                            <li>• Flagrantes e audiências de custódia</li>
                            <li>• Habeas corpus e medidas cautelares</li>
                            <li>• Atuação na Baixada Santista (Santos, São Vicente, Praia Grande, Cubatão, Mongaguá, Itanhaém, Peruíbe, Guarujá)</li>
                        </ul>
                    </div>
                    <div className="bg-[#151516] border border-gold/10 rounded-card p-6 shadow-soft">
                        <h4 className="font-serif text-h4 text-gold mb-3">Diferenciais na prática</h4>
                        <ul className="space-y-2 text-text-muted/90 text-sm">
                            <li>• Comunicação clara e presença — o cliente não fica sem resposta</li>
                            <li>• Foco em resultados dentro da legalidade e da prova</li>
                            <li>• Ética, responsabilidade e transparência em todas as etapas</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* LINHA DO TEMPO — Trajetória */}
            <section className="bg-[#151516] py-section">
                <div className="container">
                    <h3 className="font-serif text-h3 text-gold mb-8">Trajetória</h3>
                    <div className="relative pl-6 border-l border-gold/20 space-y-6">
                        {[
                            { year: "2017", text: "Bacharel em Direito — Universidade Santa Cecília." },
                            { year: "2018–2020", text: "Atuação inicial e especialização prática em Direito Penal." },
                            { year: "2021", text: "Pós-graduação em Direito do Trabalho." },
                            { year: "2022", text: "Pós-graduação em Direito Processual Penal." },
                            { year: "Hoje", text: "Atuação criminal com foco técnico e humano na Baixada Santista." },
                        ].map((item) => (
                            <div key={item.year} className="relative">
                                <div className="absolute -left-[10px] top-1.5 w-2 h-2 rounded-full bg-gold" />
                                <div className="text-sm text-gold/90">{item.year}</div>
                                <div className="text-text-muted">{item.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DESTAQUES JURÍDICOS */}
            <section className="bg-[#1A1A1A] py-section">
                <div className="container">
                    <h3 className="font-serif text-h3 text-gold mb-6">Destaques jurídicos</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Formação", desc: "Bacharel em Direito (2017) — Univ. Santa Cecília." },
                            { title: "Pós-graduações", desc: "Dir. do Trabalho e Dir. Processual Penal." },
                            { title: "Atuação Criminal", desc: "Flagrantes, custódia, habeas corpus, defesa em crimes patrimoniais e contra a saúde pública." },
                        ].map((item) => (
                            <div key={item.title} className="bg-[#151516] border border-gold/10 rounded-card p-6 shadow-soft">
                                <h4 className="font-serif text-h4 text-gold mb-2">{item.title}</h4>
                                <p className="text-text-muted">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FECHO — Assinatura + CTA */}
            <section className="bg-[#151516] py-section">
                <div className="container grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <p className="text-text-muted leading-relaxed mb-4">
                            Cada caso importa. Se você ou alguém próximo precisa de orientação imediata,
                            estou à disposição para analisar a situação com responsabilidade e sigilo.
                        </p>
                        <div className="flex gap-3">
                            <Link href="/contato">
                                <Button variant="gold" className="min-w-[170px]">Falar Agora</Button>
                            </Link>
                            <Link href="/areas/penal">
                                <Button variant="outline-gold" className="min-w-[190px]">Atuação Criminal</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="text-sm text-text-muted/70 mt-1">
                    
                    </div>

                </div>
            </section>
        </main>
    );
}

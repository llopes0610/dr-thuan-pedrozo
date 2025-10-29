"use client";

import { ShieldCheck, Clock, Lock, Zap, Layers, Scale } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Defesa Penal Estratégica",
    text: "Atuação orientada por análise técnica e planejamento jurídico personalizado.",
  },
  {
    icon: Clock,
    title: "Atendimento Ágil e Humanizado",
    text: "Acolhimento, orientação clara e suporte imediato em momentos de urgência.",
  },
  {
    icon: Lock,
    title: "Sigilo e Confidencialidade Absolutos",
    text: "Preservação da imagem, privacidade e dignidade do cliente e da família.",
  },
  {
    icon: Zap,
    title: "Ação Rápida em Casos Urgentes",
    text: "Prontidão para flagrantes, custódias e medidas que exigem resposta imediata.",
  },
  {
    icon: Layers,
    title: "Acompanhamento Completo",
    text: "Constância estratégica em todas as etapas do processo, do início ao fim.",
  },
  {
    icon: Scale,
    title: "Compromisso Ético",
    text: "Atuação conduzida com responsabilidade, integridade e respeito à justiça.",
  },
];

export default function DifferentialsSection() {
  return (
    <section aria-labelledby="diferenciais-heading" className="relative py-16 md:py-24">
      <div className="container relative">
        <h2 id="diferenciais-heading" className="font-serif text-3xl md:text-4xl mb-12">
          Diferenciais do <span className="text-gold">Escritório</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, text }, idx) => (
            <div
              key={idx}
              className="card p-6 border rounded-2xl transition hover:border-gold/40 hover:shadow-[0_0_12px_rgba(212,175,55,0.25)]"
              style={{ borderColor: "rgba(212,175,55,0.25)" }}
            >
              <Icon className="w-7 h-7 text-gold mb-4" strokeWidth={1.5} />
              <h3 className="font-serif text-xl text-gold mb-2">{title}</h3>
              <p className="text-text/80 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

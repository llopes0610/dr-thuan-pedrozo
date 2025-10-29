"use client";

import { 
  Gavel, 
  BadgeAlert, 
  Shield, 
  FileSearch, 
  Scale, 
  ArrowRight 
} from "lucide-react";
import Link from "next/link";

const areas = [
  {
    icon: BadgeAlert,
    title: "Flagrante e Audiência de Custódia",
    text: "Atuação imediata para garantir direitos, minimizar danos e buscar medidas que protejam a liberdade do cliente.",
  },
  {
    icon: Shield,
    title: "Tráfico de Drogas e Lei de Drogas",
    text: "Atuação técnica na defesa de acusações envolvendo entorpecentes, análise de provas e estratégia processual.",
  },
  {
    icon: FileSearch,
    title: "Defesa em Inquérito e Ação Penal",
    text: "Acompanhamento desde a investigação até o processo, com atuação preventiva e defesa estratégica.",
  },
  {
    icon: Gavel,
    title: "Crimes Patrimoniais",
    text: "Casos envolvendo furto, roubo, estelionato e demais crimes patrimoniais com análise individualizada.",
  },
  {
    icon: Scale,
    title: "Habeas Corpus e Medidas Urgentes",
    text: "Ações para restaurar a liberdade e garantir respeito aos direitos constitucionais do acusado.",
  },
  {
    icon: ArrowRight,
    title: "Recursos e Medidas Processuais",
    text: "Atuação técnica em recursos, pedidos de revisão e medidas para correção de ilegalidades no processo.",
  },
];

export default function PracticeAreas() {
  return (
    <section
      aria-labelledby="areas-heading"
      className="relative py-16 md:py-24 border-y border-gold/10"
    >
      <div className="container relative">
        <h2 id="areas-heading" className="font-serif text-3xl md:text-4xl mb-4">
          Atuação em <span className="text-gold">Direito Penal e Processual Penal</span>
        </h2>

        {/* Frase de Autoridade */}
        <p className="text-text/80 max-w-3xl mb-12">
          Atuação estratégica, técnica e personalizada desde a investigação até os recursos, garantindo segurança jurídica em todas as etapas.
        </p>

        {/* Blocos híbridos */}
        <div className="grid md:grid-cols-3 gap-6">
          {areas.map(({ icon: Icon, title, text }, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl border transition bg-white/5 backdrop-blur-sm
                         hover:border-gold/40 hover:shadow-[0_0_14px_rgba(212,175,55,0.25)]"
              style={{ borderColor: "rgba(212,175,55,0.20)" }}
            >
              <Icon className="w-8 h-8 text-gold mb-4" strokeWidth={1.5} />

              <h3 className="font-serif text-xl text-gold mb-2">{title}</h3>

              <p className="text-sm text-text/85 leading-relaxed mb-4">{text}</p>

              {/* CTA */}
              <Link
                href="/contato"
                className="text-sm text-gold font-medium hover:underline"
              >
                Preciso de ajuda →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

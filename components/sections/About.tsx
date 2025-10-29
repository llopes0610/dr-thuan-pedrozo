"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      aria-labelledby="sobre-heading"
      className="relative border-y border-gold/10"
    >
      {/* fundo BG2: grafite com textura leve */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(80% 60% at 85% -20%, rgba(212,175,55,0.10), transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.02), transparent)",
        }}
      />
      <div className="container relative py-16 md:py-24">
        <h2 id="sobre-heading" className="font-serif text-3xl md:text-4xl mb-8">
          Quem é o <span className="text-gold">Dr. Thuan Pedrozo</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* FOTO com moldura M-Gold1 */}
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: "rgba(212,175,55,0.35)" }}
            >
              <Image
                src="/images/dr-thuan.jpg"
                alt="Dr. Thuan Pedrozo, advogado criminalista"
                width={900}
                height={1200}
                className="object-cover w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* TEXTO */}
          <div className="space-y-4 text-text/85">
            <p>
              O <strong>Dr. Thuan Pedrozo</strong> é advogado inscrito na <strong>OAB/SP 396.342</strong> e fundador do
              <strong> Escritório de Advocacia Dr. Thuan Pedrozo</strong>, atuando com foco em Direito Penal e prestando
              assessoria jurídica com seriedade, ética e compromisso. É <strong>Bacharel em Direito pela Universidade Santa Cecília (2017)</strong>,
              formação que consolidou as bases técnicas e acadêmicas de sua atuação profissional.
            </p>
            <p>
              Aperfeiçoou seus estudos com <strong>Pós-Graduação em Direito do Trabalho</strong> e
              <strong> Pós-Graduação em Direito Processual Penal</strong>, ampliando a visão estratégica sobre os aspectos
              que envolvem tanto a defesa técnica quanto os impactos jurídicos na vida do acusado e de sua família.
            </p>
            <p>
              Sua atuação é pautada em análise minuciosa dos fatos e do processo, postura técnica firme e atendimento
              humanizado. Com experiência em casos de <strong>crimes patrimoniais</strong>, <strong>crimes contra a saúde pública (tráfico de drogas)</strong>,
              <strong> flagrantes em geral</strong> e <strong>Habeas Corpus</strong>, o advogado conduz cada caso com dedicação e busca constante
              pela melhor solução jurídica.
            </p>
            <p>
              Acredita que <em>cada caso exige uma defesa construída com responsabilidade, conhecimento e estratégia</em>,
              e que <em>o cliente deve ser orientado com clareza, respeito e transparência</em> em todas as etapas do processo.
              Seu compromisso é oferecer suporte jurídico cuidadoso, sigiloso e eficiente, especialmente em situações de urgência
              e alta sensibilidade.
            </p>
            <p>
              O escritório realiza atendimentos presenciais e personalizados em <strong>Santos, São Vicente, Praia Grande,
              Cubatão, Mongaguá, Itanhaém, Peruíbe e Guarujá</strong>, além de oferecer atendimento online para outras regiões
              do Estado de São Paulo.
            </p>

            {/* Rodapé da seção com e-mail */}
            <div className="pt-4 mt-6 border-t" style={{ borderColor: "rgba(212,175,55,0.12)" }}>
              <span className="text-sm text-text/70">Contato profissional: </span>
              <a
                href="mailto:contato@thauanpedrozo.adv.br"
                className="text-sm text-gold hover:underline"
              >
                contato@thauanpedrozo.adv.br
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

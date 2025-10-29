

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contato — Dr. Thauan Pedrozo | Advogado Criminalista",
  description:
    "Atendimento imediato em casos criminais. Flagrante, custódia, inquérito policial, defesa técnica urgente no Litoral de SP.",
};

export default function ContatoPage() {
  return (
    <section className="container py-20">
      <h1 className="font-serif text-4xl mb-6">
        Atendimento Criminal Imediato
      </h1>

      <p className="text-text/80 max-w-2xl mb-8">
        Se você ou alguém próximo está passando por uma situação criminal,
        o tempo é um fator determinante. Entre em contato agora mesmo
        para orientação jurídica estratégica e sigilosa.
      </p>

      {/* Formulário básico */}
      <form
        action="https://formsubmit.co/contato@thauanpedrozo.adv.br"
        method="POST"
        className="grid gap-4 max-w-xl"
      >
        <input
          type="text"
          name="nome"
          required
          placeholder="Seu nome"
          className="bg-grafite-light border border-gold/20 p-3 rounded"
        />

        <input
          type="tel"
          name="telefone"
          required
          placeholder="Telefone / WhatsApp"
          className="bg-grafite-light border border-gold/20 p-3 rounded"
        />

        <select
          name="urgencia"
          required
          className="bg-grafite-light border border-gold/20 p-3 rounded"
        >
          <option value="">Situação atual</option>
          <option>Flagrante</option>
          <option>Audiência de custódia</option>
          <option>Investigação / Inquérito</option>
          <option>Medidas Protetivas</option>
          <option>Outros</option>
        </select>

        <textarea
          name="mensagem"
          placeholder="Explique brevemente o caso (opcional)"
          rows={4}
          className="bg-grafite-light border border-gold/20 p-3 rounded"
        />

        <button
          type="submit"
          className="btn btn-gold mt-4 py-3"
        >
          Enviar Solicitação
        </button>

        {/* Segurança do FormSubmit */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />
      </form>

      {/* CTA WhatsApp */}
      <a
  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE}?text=Olá, preciso de atendimento jurídico criminal com urgência.`}
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-gold"
>
  Falar Agora via WhatsApp →
</a>


      <p className="text-xs text-text/50 mt-4">
        Sigilo e confidencialidade garantidos.
      </p>
    </section>
  );
}

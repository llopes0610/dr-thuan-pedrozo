export default function Penal() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold">
        Direito Penal (Criminal) — Praia Grande e Litoral de SP
      </h1>
      <p className="mt-3 text-text/80 max-w-3xl">
        Atuação jurídica estratégica e humanizada em casos criminais. Defesa
        técnica para diferentes fases do processo penal, com acompanhamento
        desde o primeiro contato. Disponível para atendimentos urgentes.
      </p>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-text">Principais Atendimentos:</h2>
        <ul className="mt-4 grid md:grid-cols-2 gap-3 list-disc pl-5 text-text/80">
          <li>Atendimento urgente – flagrante</li>
          <li>Audiência de Custódia</li>
          <li>Inquérito Policial</li>
          <li>Defesa em processos criminais</li>
          <li>Crimes contra o patrimônio</li>
          <li>Violência doméstica e medidas protetivas</li>
          <li>Crimes de trânsito</li>
          <li>Tribunal do Júri</li>
        </ul>
      </div>


      <div className="mt-10">
        <a
          href="/contato"
          className="inline-block px-5 py-3 rounded-xl bg-slate-900 text-white"
        >
          Falar com o advogado
        </a>
      </div>
    </section>
  );
}

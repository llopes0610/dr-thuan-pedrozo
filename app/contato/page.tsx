"use client";

import { useState } from "react";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("Praia Grande");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const triagem = async () => {
    setLoading(true);
    setResult(null);

    const r = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, cidade, area: "criminal", mensagem }),
    });

    const j = await r.json();
    setResult(j);
    setLoading(false);
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold">Contato</h1>
      <p className="mt-3 text-text/80 max-w-3xl">
        Descreva brevemente o motivo do contato. A triagem inicial será feita por IA
        e você poderá seguir diretamente para o WhatsApp com o advogado.
      </p>

      <div className="mt-6 grid gap-3">
        <input
          className="border rounded-lg px-3 py-2"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          className="border rounded-lg px-3 py-2"
          placeholder="Sua cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
        <textarea
          className="border rounded-lg px-3 py-2 min-h-[120px]"
          placeholder="Descreva brevemente o motivo do contato"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
        <button
          onClick={triagem}
          disabled={loading}
          className="px-5 py-3 rounded-xl bg-slate-900 text-white"
        >
          {loading ? "Analisando..." : "Enviar e receber retorno"}
        </button>
      </div>

      {result?.ok && (
        <div className="mt-6 p-4 border rounded-xl bg-white">
          <h2 className="font-semibold">Resumo da triagem</h2>
          <pre className="text-xs whitespace-pre-wrap bg-slate-50 p-3 rounded-lg mt-2">
{JSON.stringify(result.resumo, null, 2)}
          </pre>

          <a
            href={result.whatsapp}
            target="_blank"
            className="mt-3 inline-block px-4 py-2 rounded-lg bg-green-600 text-white"
          >
            Seguir para WhatsApp
          </a>
        </div>
      )}

      {result?.error && (
        <p className="mt-4 text-red-600 text-sm">{result.error}</p>
      )}
    </section>
  );
}

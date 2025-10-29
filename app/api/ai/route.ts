import { NextResponse } from "next/server";
import { supabaseClient } from "../../../lib/supabase";
import { buildWhatsAppLink } from "../../../lib/whats";


const MODEL = "llama-3.1-8b-instant";  // Groq - Modelo recomendado

export async function POST(req: Request) {
  try {
    const { nome, cidade, area, mensagem } = await req.json();

    // Prompt seguro — sem aconselhamento jurídico
    const prompt = `
Você é um assistente de triagem jurídica. NÃO ofereça aconselhamento legal.
Apenas colete informações, classifique o caso e prepare um resumo.

Se a área for "criminal", classifique em categorias como:
- flagrante
- inquérito policial
- audiência de custódia
- medidas protetivas
- violência doméstica
- crimes contra o patrimônio
- outros

Retorne SOMENTE um JSON com o formato:
{
  "resumo": "",
  "area": "",
  "criminal_classificacao": "",
  "urgencia": 1 | 2 | 3,
  "proxima_acao": ""
}

Dados recebidos:
Nome: ${nome}
Cidade: ${cidade}
Área indicada: ${area}
Mensagem: ${mensagem}
`;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: "system", content: "Você responde APENAS com JSON válido." },
          { role: "user", content: prompt },
        ],
        temperature: 0.2,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      return NextResponse.json({ ok: false, error: text }, { status: 400 });
    }

    const result = await response.json();
    const content = result.choices?.[0]?.message?.content || "{}";

    let parsed: any;
    try {
      parsed = JSON.parse(content);
    } catch {
      parsed = { resumo: content };
    }

    // Salva lead com resumo da IA
    const supabase = supabaseClient();
    await supabase.from("leads").insert({
      nome,
      cidade,
      area: parsed.area || area,
      mensagem,
      origem: "chat-ia",
      resumo_ia: parsed,
    });

    // Criar link WhatsApp com mensagem automática
    const whats = buildWhatsAppLink(
      `Olá, Dr. Thauan. Sou ${nome} de ${cidade}. Preciso de ajuda (${parsed.area || area}). Resumo: ${parsed.resumo}`
    );

    return NextResponse.json({ ok: true, resumo: parsed, whatsapp: whats });

  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 400 }
    );
  }
}

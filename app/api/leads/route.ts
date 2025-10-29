import { NextResponse } from "next/server";
import { z } from "zod";
import { supabaseClient } from "../../../lib/supabase";


const schema = z.object({
  nome: z.string().min(2),
  email: z.string().email().optional(),
  telefone: z.string().optional(),
  cidade: z.string().optional(),
  area: z.string().optional(),
  mensagem: z.string().min(5),
  origem: z.string().default("site"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const supabase = supabaseClient();
    const { error } = await supabase.from("leads").insert({ ...data });

    if (error) throw error;

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 400 }
    );
  }
}

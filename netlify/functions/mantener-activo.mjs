// Tarea programada: una consulta diaria y liviana a Supabase para que el
// proyecto gratis no se pause por falta de actividad. No lee datos de nadie:
// sin sesión iniciada, las reglas de seguridad devuelven una lista vacía.
const URL = "https://mlngbnhmbrbyuqantpmb.supabase.co/rest/v1/deudas?select=id&limit=1";
const CLAVE = "sb_publishable_umborDpfU_umQFmq-PWvsQ_ynOMj-pb";

export default async () => {
  try {
    const r = await fetch(URL, { headers: { apikey: CLAVE } });
    console.log(`Supabase respondió ${r.status}`);
  } catch (e) {
    console.log(`No se pudo contactar a Supabase: ${e.message}`);
  }
  return new Response("ok");
};

export const config = { schedule: "@daily" };

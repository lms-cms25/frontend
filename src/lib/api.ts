const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5124/api";

export type Program = {
  id: string;
  name: string;
  description: string;
};

export async function getPrograms(): Promise<Program[]> {
  const res = await fetch(`${API_BASE}/programs`, { cache: "no-store" });
  return res.json();
}

export async function createProgram(
  name: string,
  description: string
): Promise<Program> {
  const res = await fetch(`${API_BASE}/programs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, description }),
  });
  return res.json();
}

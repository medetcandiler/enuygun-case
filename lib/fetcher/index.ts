export async function fetcher<T = any>(body: string): Promise<T> {
  const res = await fetch("http://localhost:3000/api/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    cache: "no-store",
  });
  const { data } = await res.json();
  return data;
}

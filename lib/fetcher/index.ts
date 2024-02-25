export async function fetcher<T = any>(body: string): Promise<T> {
  const res = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    body,
  });
  const { data } = await res.json();
  return data;
}

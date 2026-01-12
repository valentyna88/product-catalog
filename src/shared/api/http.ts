export async function request<T>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> {
  const res = await fetch(input, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  if (!res.ok) {
    const message = await res.text().catch(() => "");
    throw new Error(message || `Request failed: ${res.status}`);
  }

  return res.json() as Promise<T>;
}

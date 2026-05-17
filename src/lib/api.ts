export async function fetchWithAuth(token: string | undefined, url: string, options: RequestInit = {}) {


  // Om ingen session finns, försök inte ens – redirecta direkt
  if (!token) {
    console.log("fetchWithAuth.ts token: " + token);
    return null;
  }

  const res = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  // Om token har gått ut (401).
  if (res.status === 401) {
    console.log("fetchWithAuth.ts res.status === 401");
    return null;
  }

  return res;
}